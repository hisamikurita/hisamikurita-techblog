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
