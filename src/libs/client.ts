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
