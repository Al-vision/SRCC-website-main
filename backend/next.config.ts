import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "out",   // 👈 IMPORTANT (force output folder)
  trailingSlash: true,
};

export default nextConfig;
