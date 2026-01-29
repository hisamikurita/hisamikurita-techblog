import type { Article } from "@/types";
import type { SearchResultData } from "../types";

export const convertToArticle = (result: SearchResultData): Article => {
  const articleId = result.url.split("/").filter(Boolean).pop() || "";

  return {
    id: articleId,
    title: result.title,
    excerpt: result.excerpt,
    thumbnail: {
      url: result.image,
      width: "1200",
      height: "630",
    },
    category: {
      id: result.category || "works",
      name: result.category || "Works",
    },
    thumbnailEmoji: result.thumbnailEmoji || "smile",
    publishedAt: result.publishedAt,
    updatedAt: result.updatedAt,
  };
};
