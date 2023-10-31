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
};

export type MicroCmsAboutDataType = {
  revisedAt?: string;
  publishedAt?: string;
  updatedAt?: string;
  createdAt?: string;
  className?: string;
  name?: string;
  intro?: string;
};
