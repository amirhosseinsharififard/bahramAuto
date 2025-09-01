import type { NextConfig } from "next";
import withPWA from "next-pwa";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL("https://upmusics.com/wp-content/**"),
      new URL("https://biamusic.ir/wp-content/uploads/**"),
    ],
  },
};

const pwaConfig = withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});

export default pwaConfig(nextConfig as any);
