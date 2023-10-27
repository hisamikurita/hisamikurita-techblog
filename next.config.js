const withExportImages = require("next-export-optimize-images");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.microcms-assets.io"],
  },
  output: "export",
  trailingSlash: true,
};

module.exports = withExportImages(nextConfig);
