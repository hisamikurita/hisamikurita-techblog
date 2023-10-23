/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.microcms-assets.io"],
  },
  i18n: {
    locales: ["ja"],
    defaultLocale: "ja",
  },
};

module.exports = nextConfig;
