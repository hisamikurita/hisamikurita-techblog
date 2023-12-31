import { createClient } from "microcms-js-sdk";
import type { MicroCMSQueries } from "microcms-js-sdk";

export const defaultClient = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN as string,
  apiKey: process.env.API_KEY as string,
});

export const previewClient = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_SERVICE_DOMAIN as string,
  apiKey: process.env.NEXT_PUBLIC_API_KEY as string,
});

/////////////// Blog ////////////////

export const getBlog = async (queries?: MicroCMSQueries, preview = false) => {
  const client = preview ? previewClient : defaultClient;

  const blogData = await client.get<Response>({
    endpoint: "blog",
    queries,
  });
  return blogData;
};

/////////////// About ////////////////

export const getAbout = async (queries?: MicroCMSQueries, preview = false) => {
  const client = preview ? previewClient : defaultClient;

  const aboutData = await client.get<Response>({
    endpoint: "about",
    queries,
  });
  return aboutData;
};
