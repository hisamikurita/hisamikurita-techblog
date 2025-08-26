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

export type Article = {
  id: string;
  revisedAt: string;
  publishedAt: string;
  updatedAt: string;
  createdAt: string;
  title: string;
  body: string;
  excerpt: string;
  category: {
    id: string;
    name: string;
  };
  thumbnailEmoji?: string;
  thumbnail?: {
    url?: string;
    width?: string;
    height?: string;
    mimeType?: string;
  };
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

export type CfAwardHistoryDataType = {
  title: string;
  award: string;
  link: string;
};
