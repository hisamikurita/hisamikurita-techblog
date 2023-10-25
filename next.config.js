/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.microcms-assets.io"],
  },
  output: "export",
  trailingSlash: true,
};

module.exports = nextConfig;
