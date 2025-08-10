/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
  exclude: ["/preview/*", "/preview"], // プレビュー用のページを除外
  generateRobotsTxt: true,
  outDir: "./out",
};
