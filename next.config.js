/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.microcms-assets.io"],
  },
  output: "export",
  trailingSlash: false,
};

module.exports = nextConfig;
