/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },

  // Security headers: configure at the CDN/DNS layer (e.g. Cloudflare).
  // Next.js headers() only works with a Node.js server, not static export.

  // Enhanced SEO and crawlability features
  experimental: {
    esmExternals: true,
  },

  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
    reactRemoveProperties: process.env.NODE_ENV === 'production',
  },

  // Webpack configuration to ignore seo-resources directory
  webpack: (config, { isServer }) => {
    // Ignore seo-resources directory during build to prevent conflicts
    config.watchOptions = {
      ...config.watchOptions,
      ignored: ['**/seo-resources/**', '**/node_modules/**'],
    };
    
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
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
