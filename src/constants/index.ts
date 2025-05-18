export const URL_HOME = "/" as const;
export const URL_ABOUT = "/about/" as const;
export const URL_BLOG = "/blog/" as const;

export const URL_FAVICON = "/favicon.ico" as const;
export const URL_APPLE_TOUCH_ICON = "/apple-touch-icon.png" as const;
export const URL_DEFAULT_OGP = "/ogp.jpg" as const;

export const SITE_NAME = "🐶 Hisami Kurita TechBlog" as const;
export const SITE_DESCRIPTION = "This WebSite is Hisami Kurita TechBlog" as const;

export const MQ_MAX = "(max-width: 767px)" as const;

export const MENUS = [
  { name: "Blog", url: URL_HOME },
  { name: "About", url: URL_ABOUT },
] as const;
