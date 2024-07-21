// next.config.js or next.config.mjs

import path from "path";
import { fileURLToPath } from "url";
import bundleAnalyzer from "@next/bundle-analyzer";

const __dirname = path.dirname(fileURLToPath(import.meta.url));  // Correct way to handle __dirname in ESM

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

export default withBundleAnalyzer({
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: false,
  images: {
    domains: [process.env.NEXT_PUBLIC_IMAGE_DOMAIN || 'default-domain.com'],  // Default domain if env var is not set
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@audio_stack_frontend": path.resolve(__dirname),
    };
    return config;
  },
  env: {
    REACT_APP_API_KEY: process.env.REACT_APP_API_KEY,
    REACT_APP_API_SECRET: process.env.REACT_APP_API_SECRET,
  },
  output: "standalone",  // Assuming you meant to use 'standalone' or 'server' depending on your deployment strategy
});
