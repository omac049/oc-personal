import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // AI crawlers — explicit allow for WebMCP discovery and data endpoints
      {
        userAgent: 'GPTBot',
        allow: ['/', '/.well-known/', '/data/'],
        disallow: ['/private/', '/admin/'],
      },
      {
        userAgent: 'ClaudeBot',
        allow: ['/', '/.well-known/', '/data/'],
        disallow: ['/private/', '/admin/'],
      },
      {
        userAgent: 'PerplexityBot',
        allow: ['/', '/.well-known/', '/data/'],
        disallow: ['/private/', '/admin/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/private/', '/admin/'],
        crawlDelay: 0,
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/private/', '/admin/'],
        crawlDelay: 1,
      },
      {
        userAgent: 'facebookexternalhit',
        allow: '/',
        disallow: [],
      },
      {
        userAgent: 'Twitterbot',
        allow: '/',
        disallow: [],
      },
      {
        userAgent: 'LinkedInBot',
        allow: '/',
        disallow: [],
      },
      {
        userAgent: 'WhatsApp',
        allow: '/',
        disallow: [],
      },
      // General crawlers — keep JSON endpoints accessible, block infra paths only
      {
        userAgent: '*',
        allow: ['/', '/.well-known/', '/data/'],
        disallow: ['/private/', '/admin/', '/api/', '/_next/', '/out/'],
        crawlDelay: 1,
      },
    ],
    sitemap: [
      'https://omar-corral.com/sitemap.xml',
      'https://omar-corral.com/seo-resources/sitemap.xml',
      'https://omar-corral.com/sitemap-images.xml',
    ],
    host: 'https://omar-corral.com',
  };
}
