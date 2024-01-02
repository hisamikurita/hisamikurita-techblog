import type { MicroCMSQueries } from "microcms-js-sdk";
import { MicroCmsBlogDataType } from "@/libs/types";
import { MicroCmsBlogDetailDataType } from "@/libs/types";
import { MicroCmsAboutDataType } from "@/libs/types";
import { setClient } from "@/libs/client";

/////////////// Blog ////////////////

export const getBlogList = async (queries?: MicroCMSQueries, previewMode = false) => {
  const client = setClient(previewMode);

  const data = await client.get<MicroCmsBlogDataType>({
    endpoint: "blog",
    queries,
  });
  return data;
};

export const getBlogDetail = async (queries?: MicroCMSQueries, previewMode = false, id: string | undefined = undefined) => {
  const client = setClient(previewMode);

  const data = await client.get<MicroCmsBlogDetailDataType>({
    endpoint: "blog",
    queries,
    contentId: id,
  });
  return data;
};

/////////////// About ////////////////

export const getAbout = async (queries?: MicroCMSQueries, previewMode = false) => {
  const client = setClient(previewMode);

  const data = await client.get<MicroCmsAboutDataType>({
    endpoint: "about",
    queries,
  });
  return data;
};
