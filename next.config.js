/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },

  // GitHub Pages deployment configuration for custom domain
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  basePath: process.env.NODE_ENV === 'production' ? '' : '',
  
  // Enhanced SEO and crawlability features
  experimental: {
    scrollRestoration: true,
  },

  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Performance and SEO optimizations
  poweredByHeader: false,
  generateEtags: false,
  compress: true,
  
  // Generate additional static content for crawlers
  env: {
    GENERATE_STATIC_CONTENT: 'true',
  },
};

module.exports = nextConfig;
