import { createClient } from "microcms-js-sdk";
import type { MicroCMSQueries } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN as string,
  apiKey: process.env.API_KEY as string,
});

export const getBlog = async (queries?: MicroCMSQueries) => {
  const blogData = await client.get<Response>({
    endpoint: "blog",
    queries,
  });
  return blogData;
};
