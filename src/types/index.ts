export type BaseHeadDataType = {
  title: string;
  description: string;
  thumbnail?: string;
};

export type ContextDataType = {
  params: { id: string };
  locales?: string;
  locale?: string;
  defaultLocale?: string;
};

/////////////// Blog ////////////////

export type MicroCmsBlogDataType = {
  contents?: [MicroCmsBlogDetailDataType];
  limit?: number;
  offset?: number;
  totalCount?: number;
  className?: string;
};

export type MicroCmsBlogDetailDataType = Article & {
  relatedArticles?: Article[];
};

/////////////// About ////////////////

export type MicroCmsAboutDataType = {
  revisedAt?: string;
  publishedAt?: string;
  updatedAt?: string;
  createdAt?: string;
  className?: string;
  nameJa?: string;
  nameEn?: string;
  intro?: string;
  awardHistory?: [CfAwardHistoryDataType];
};

/////////////// CF ////////////////

export type CfAwardHistoryDataType = {
  title: string;
  award: string;
  link: string;
};

/////////////// ZENN ////////////////

export type ZennBlogDataType = {
  articles?: {
    id: number;
    title: string;
    slug: string;
    published_at: string;
    emoji: string;
    path: string;
    user: {
      username: string;
      name: string;
    };
  }[];
};

export type Article = {
  source?: "microcms" | "zenn";
  id?: number | string;
  revisedAt?: string;
  publishedAt?: string;
  updatedAt?: string;
  createdAt?: string;
  title?: string;
  body?: string;
  excerpt?: string;
  emoji?: string;
  slug?: string;
  thumbnail?: {
    url?: string;
    width?: string;
    height?: string;
    mimeType?: string;
  };
};
