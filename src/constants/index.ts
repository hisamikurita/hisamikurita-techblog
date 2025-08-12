export const URL_HOME = "/" as const;
export const URL_ABOUT = "/about/" as const;
export const URL_BLOG = "/blog/" as const;
export const URL_ZENN = "https://zenn.dev/kurichan/articles/" as const;

export const URL_FAVICON = "/favicon.ico" as const;
export const URL_APPLE_TOUCH_ICON = "/apple-touch-icon.png" as const;
export const URL_DEFAULT_OGP = "/ogp.jpg" as const;

export const SITE_NAME = "MARON DEV" as const;

export const META_TITLE = `${SITE_NAME} | UIデザイナー + クリエイティブ・フロンエンドエンジニアのプライベートなブログ` as const;
export const META_DESCRIPTION = "東京で働くUIデザイナー + クリエイティブ・フロンエンドエンジニアのプライベートな情報発信ブログ" as const;

export const MQ_MAX = "(max-width: 767px)" as const;

export const MENUS = [
  { name: "BLOG", url: URL_HOME },
  { name: "ABOUT", url: URL_ABOUT },
] as const;

export const SOURCE = {
  MICROCMS: "microcms",
  ZENN: "zenn",
} as const;

export const presetURLs = ["github.com"];
