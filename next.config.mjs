import path from "path";
import { fileURLToPath } from "url";
import bundleAnalyzer from "@next/bundle-analyzer";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: false,
  basePath: baseURL,
  assetPrefix: `${baseURL}/`, 
  images: {
    domains: [process.env.NEXT_PUBLIC_IMAGE_DOMAIN || 'default-domain.com'],
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
  output: "standalone", // If you are using Docker or similar for your production environment
});
