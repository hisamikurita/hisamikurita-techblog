export type BaseHeadDataType = {
  title: string;
  description: string;
};

export type MicroCmsBlogDataType = {
  contents?: [];
  limit?: number;
  offset?: number;
  totalCount?: number;
  className?: string;
};

export type MicroCmsBlogDetailDataType = {
  id?: string;
  revisedAt?: string;
  publishedAt?: string;
  updatedAt?: string;
  createdAt?: string;
  title?: string;
  body?: string;
  thumbnail: {
    url?: string;
    width?: string;
    height?: string;
  };
};

export type MicroCmsAboutDataType = {
  revisedAt?: string;
  publishedAt?: string;
  updatedAt?: string;
  createdAt?: string;
  className?: string;
  nameJa?: string;
  nameEn?: string;
  intro?: string;
};
