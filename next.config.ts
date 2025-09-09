import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  assetPrefix: isProd ? '/oc-personal/' : '',
  basePath: isProd ? '/oc-personal' : '',
  images: {
    unoptimized: true
  },
  trailingSlash: true,
};

export default nextConfig;
