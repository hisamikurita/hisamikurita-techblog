import type { MicroCMSQueries } from "microcms-js-sdk";
import { MicroCmsBlogDataType } from "@/types";
import { MicroCmsBlogDetailDataType } from "@/types";
import { MicroCmsAboutDataType } from "@/types";
import { createClient } from "microcms-js-sdk";

// プレビューの場合はCSRのため、APIキーを公開する
export const setClient = (preview: boolean) => {
  if (preview) {
    return createClient({
      serviceDomain: process.env.NEXT_PUBLIC_SERVICE_DOMAIN as string,
      apiKey: process.env.NEXT_PUBLIC_API_KEY as string,
    });
  } else {
    return createClient({
      serviceDomain: process.env.SERVICE_DOMAIN as string,
      apiKey: process.env.API_KEY as string,
    });
  }
};

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
