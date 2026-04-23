import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  allowedDevOrigins: [
    process.env.ALLOW_DEV_ORIGIN ? process.env.ALLOW_DEV_ORIGIN : "",
  ],
};

export default nextConfig;
