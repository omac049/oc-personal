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

  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
        ],
      },
    ];
  },
  
  // Enhanced SEO and crawlability features
  experimental: {
    scrollRestoration: true,
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
