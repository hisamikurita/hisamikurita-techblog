/* eslint-disable no-console */
import * as dotenv from "dotenv";
dotenv.config();
import fs from "fs";
import { getBlogList } from "./src/libs/microcms";
import { META_TITLE, META_DESCRIPTION } from "./src/constants";

// XMLエスケープ関数
const escapeXml = (str: string): string => {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
};

// HTML要素を除去する関数
const stripHtml = (html: string): string => {
  return html.replace(/<[^>]*>/g, "");
};

// 記事の概要を生成する関数
const generateDescription = (excerpt?: string, body?: string): string => {
  if (excerpt) return stripHtml(excerpt);
  if (body) {
    const plainText = stripHtml(body);
    return plainText.length > 200 ? plainText.substring(0, 200) + "..." : plainText;
  }
  return "記事の説明がありません";
};

const generateRssFeed = async () => {
  try {
    const blogs = await getBlogList({ limit: 100 });
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

    if (!siteUrl) {
      throw new Error("NEXT_PUBLIC_SITE_URL environment variable is not set");
    }

    if (!blogs.contents) {
      console.log("⚠️ ブログ記事が見つかりませんでした");
      return;
    }

    // XMLヘッダーとチャンネル情報
    let rssXml = `<rss xmlns:media="http://search.yahoo.com/mrss/" version="2.0">
  <channel>
    <title>${escapeXml(META_TITLE)}</title>
    <description>${escapeXml(META_DESCRIPTION)}</description>
    <link>${siteUrl}/</link>`;

    // 各ブログ記事をアイテムとして追加
    blogs.contents.forEach((blog) => {
      if (!blog.title || !blog.id) {
        console.warn("⚠️ タイトルまたはIDが不足している記事をスキップしました:", blog);
        return;
      }

      const title = escapeXml(blog.title);
      const description = escapeXml(generateDescription(blog.excerpt, blog.body));
      const url = `${siteUrl}/blog/${blog.id}`;
      const pubDate = new Date(blog.publishedAt || blog.createdAt || new Date()).toUTCString();

      rssXml += `
    <item>
      <title>${title}</title>
      <description>${description}</description>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${pubDate}</pubDate>`;

      // media:content要素を追加（サムネイルがある場合）
      if (blog.thumbnail?.url) {
        // WebP形式の画像をJPEG形式に変換するためのパラメータを追加
        const imageUrl = blog.thumbnail.url.includes("?") ? `${blog.thumbnail.url}&fm=jpeg&q=80` : `${blog.thumbnail.url}?fm=jpeg&q=80`;

        const mimeType = "image/jpeg"; // WebPからJPEGに統一
        const width = blog.thumbnail.width || "";
        const height = blog.thumbnail.height || "";
        const escapedImageUrl = escapeXml(imageUrl);

        rssXml += `
      <media:content type="${mimeType}" width="${width}" height="${height}" medium="image" url="${escapedImageUrl}"/>`;
      }
      rssXml += `
    </item>`;
    });

    // XMLを閉じる
    rssXml += `
  </channel>
</rss>`;

    // ファイルに書き出し
    if (!fs.existsSync("public")) {
      fs.mkdirSync("public", { recursive: true });
    }

    fs.writeFileSync("public/rss.xml", rssXml, "utf8");

    console.log("🚀 Media RSS対応のRSSフィードが生成されました");
  } catch (error) {
    console.error("❌ RSSフィード生成中にエラーが発生しました:", error);
    process.exit(1);
  }
};

generateRssFeed();
