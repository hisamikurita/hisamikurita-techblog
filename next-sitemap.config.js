/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://example.com",
  exclude: ["/preview/*", "/preview"], // プレビュー用のページを除外
  generateRobotsTxt: true,
  outDir: "./out",
};
