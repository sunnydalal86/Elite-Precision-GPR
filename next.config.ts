import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  // Next 16: local `Image` src URLs with query strings must match a pattern here
  images: {
    localPatterns: [{ pathname: "/logos/**" }],
  },
};

export default nextConfig;
