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

export const SNS = {
  x: {
    url: "https://twitter.com/kurichans_1996",
    label: "Xを新規タブで開きます",
    blank: true,
    size: {
      base: "h-[14px] w-[14px]",
      large: "h-[18px] w-[18px]",
    },
  },
  github: {
    url: "https://github.com/hisamikurita",
    label: "Githubを新規タブで開きます",
    blank: true,
    size: {
      base: "h-4 w-4",
      large: "h-5 w-5",
    },
  },
};

export const CONTACT = {
  mail: {
    url: "mailto:kuritahisami@gmail.com",
    label: "メールアプリを起動します",
    blank: false,
    size: {
      base: "h-4 w-4",
      large: "h-5 w-5",
    },
  },
};

export const RSS = {
  url: "/rss.xml",
  label: "RSS",
  blank: false,
  size: "h-[14px] w-[14px]",
};

export const presetURLs = ["github.com", "hsmkrt1996.com", "awwwards.com"];
