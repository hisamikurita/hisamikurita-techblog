/* eslint-disable no-console */
import * as dotenv from "dotenv";
dotenv.config();
import fs from "fs";
import { getBlogList } from "./src/libs/microcms";
import { META_TITLE, META_DESCRIPTION } from "./src/constants";

// HTML要素を除去する関数
const stripHtml = (html: string): string => {
  return html.replace(/<[^>]*>/g, "");
};

// 記事の概要を生成する関数（最大150文字）
const generateExcerpt = (excerpt?: string, body?: string): string => {
  if (excerpt) return stripHtml(excerpt).substring(0, 150);
  if (body) {
    const plainText = stripHtml(body);
    return plainText.length > 150 ? plainText.substring(0, 150) + "..." : plainText;
  }
  return "";
};

const generateLlmTxt = async () => {
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

    // LLMS.txtの内容を生成
    let llmContent = `# ${META_TITLE}

> ${META_DESCRIPTION}
> ${siteUrl}/

## About

栗田久海 (Kurita Hisami) のプライベートな技術ブログです。
1996年生まれのフロントエンドエンジニアとして、アニメーションやインタラクション表現を得意としています。

### 実績
- Awwwards SOTD 受賞
- Nominated for DEVELOPER OF THE YEAR 2022
- 国内外で多数のWEBアワード受賞

### 専門領域
- フロントエンド開発 (JavaScript/TypeScript)
- アニメーション実装 (GSAP, Three.js)
- インタラクティブ表現
- パフォーマンス最適化
- microCMS を使用したサイト制作

## Main Content

このブログでは、実務で培った技術知識やベストプラクティスを共有しています。

### 主なトピック

- アニメーション・パフォーマンス最適化
- GSAP を使用したアニメーション実装
- JavaScript/TypeScriptのベストプラクティス
- Three.js による3D表現
- microCMS を使用したサイト制作
- 個人開発プロジェクト

## Blog Articles

全${blogs.contents.length}記事を公開中

`;

    // 全記事を公開日順にソート
    const sortedBlogs = [...blogs.contents].sort((a, b) => {
      const dateA = new Date(a.publishedAt || a.createdAt || 0);
      const dateB = new Date(b.publishedAt || b.createdAt || 0);
      return dateB.getTime() - dateA.getTime();
    });

    // 全記事を列挙
    sortedBlogs.forEach((blog, index) => {
      if (!blog.title || !blog.id) return;

      const title = blog.title;
      const url = `${siteUrl}/blog/${blog.id}`;
      const publishedDate = blog.publishedAt ? new Date(blog.publishedAt).toLocaleDateString("ja-JP", { year: "numeric", month: "long", day: "numeric" }) : "";
      const excerpt = generateExcerpt(blog.excerpt, blog.body);

      llmContent += `### ${index + 1}. ${title}\n\n`;
      llmContent += `- URL: ${url}\n`;
      if (publishedDate) {
        llmContent += `- 公開日: ${publishedDate}\n`;
      }
      if (excerpt) {
        llmContent += `- 概要: ${excerpt}\n`;
      }
      llmContent += `\n`;
    });

    // フッター情報
    llmContent += `## Technical Stack

このサイトで扱う主な技術:
- JavaScript / TypeScript
- GSAP (GreenSock Animation Platform)
- Three.js
- React / Next.js
- microCMS (ヘッドレスCMS)
- Intersection Observer API
- requestAnimationFrame
- パフォーマンス最適化手法

## Contact & Links

- Email: kuritahisami@gmail.com
- X/Twitter: https://x.com/kurichans_1996
- Portfolio: https://hsmkrt1996.com/
- GitHub: https://github.com/hisamikurita
- GitHub Repository (Portfolio): https://github.com/hisamikurita/hisamikurita-portfoliosite-v2022

## Site Navigation

- Home: ${siteUrl}/
- Blog Posts: ${siteUrl}/blog/
- About: ${siteUrl}/about/

---

Last Updated: ${new Date().toLocaleDateString("ja-JP", { year: "numeric", month: "long", day: "numeric" })}
Site Type: Personal Technical Blog
Primary Language: Japanese
Focus: Frontend Development, Animation, Performance Optimization
Total Articles: ${blogs.contents.length}
`;

    // publicディレクトリに書き出し
    if (!fs.existsSync("public")) {
      fs.mkdirSync("public", { recursive: true });
    }

    fs.writeFileSync("public/llms.txt", llmContent, "utf8");

    console.log("🤖 LLMS.txtが生成されました");
    console.log(`📊 記事数: ${blogs.contents.length}`);
  } catch (error) {
    console.error("❌ LLMS.txt生成中にエラーが発生しました:", error);
    process.exit(1);
  }
};

generateLlmTxt();
