import Head from "next/head";
import { URL_FAVICON, URL_APPLE_TOUCH_ICON, URL_DEFAULT_OGP } from "@/constants";
import { BaseHeadDataType } from "@/types";

export const BaseHead: React.FC<BaseHeadDataType> = (data) => {
  const { title, description, thumbnail } = data;
  const currentUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
  const ogp = thumbnail ? thumbnail : `${currentUrl}${URL_DEFAULT_OGP}`;

  return (
    <Head>
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <link rel="icon" href={URL_FAVICON} />
      <link rel="apple-touch-icon" href={URL_APPLE_TOUCH_ICON} />
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta property="og:site_name" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogp} />
      <meta property="twitter:card" content="summary_large_image" />
    </Head>
  );
};
