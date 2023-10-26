import { createClient } from "microcms-js-sdk";
import type { MicroCMSQueries } from "microcms-js-sdk";

// プレビューのCSRでのみ利用するため、APIキーは公開しても問題ない

export const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_SERVICE_DOMAIN as string,
  apiKey: process.env.NEXT_PUBLIC_API_KEY as string,
});

export const getAbout = async (queries?: MicroCMSQueries) => {
  const aboutData = await client.get<Response>({
    endpoint: "about",
    queries,
  });
  return aboutData;
};

export const getDraftKey = (requestUrl: string) => {
  const url = new URL(requestUrl);
  const params = new URLSearchParams(url.search);
  const draftKey = params.get("draftKey") || undefined;
  return draftKey;
};

export const getContentId = (requestUrl: string) => {
  const url = new URL(requestUrl);
  const params = new URLSearchParams(url.search);
  const contentId = params.get("contentId") || undefined;
  return contentId;
};
