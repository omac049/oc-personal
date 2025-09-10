/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // GitHub Pages deployment configuration
  assetPrefix: process.env.NODE_ENV === 'production' ? '/oc-personal/' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/oc-personal' : '',
  distDir: 'out',
}

module.exports = nextConfig
