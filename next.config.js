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
    // Enable modern bundling optimizations
    esmExternals: true,
  },

  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
    // Remove React DevTools in production
    reactRemoveProperties: process.env.NODE_ENV === 'production',
  },

  // Performance optimizations (swcMinify is default in Next.js 13+)
  
  // Bundle analyzer (optional - enable when needed)
  // webpack: (config, { isServer }) => {
  //   if (!isServer) {
  //     config.resolve.fallback = {
  //       ...config.resolve.fallback,
  //       fs: false,
  //     };
  //   }
  //   return config;
  // },

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
