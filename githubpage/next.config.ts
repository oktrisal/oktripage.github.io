import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/oktripage.github.io", // 👈 repo name
  assetPrefix: "/oktripage.github.io/",
};

export default nextConfig;
