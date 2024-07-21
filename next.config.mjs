/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */
import path from "path";
import { fileURLToPath } from "url";
import bundleAnalyzer from "@next/bundle-analyzer";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

export default withBundleAnalyzer({
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: false,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  images: {
    domains: [process.env.NEXT_PUBLIC_IMAGE_DOMAIN],
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
  output:'export',
});

// module.exports = {
//   basePath: '/audioStackFrontend',
// }
