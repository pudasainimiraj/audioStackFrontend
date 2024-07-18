import bundleAnalyzer from '@next/bundle-analyzer';
import path from 'path';
import { fileURLToPath } from 'url';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default withBundleAnalyzer({
  eslint: {
    dirs: ["."]
  },
  poweredByHeader: false,
  trailingSlash: false,
  reactStrictMode: true,
  images: {
    domains: [`${process.env.NEXT_PUBLIC_BASE_URL}`]
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@audio_stack_frontend": path.resolve(__dirname)
    };
    return config;
  },
   env: {
    REACT_APP_API_KEY: process.env.REACT_APP_API_KEY,
    REACT_APP_API_SECRET: process.env.REACT_APP_API_SECRET,
  },
});
