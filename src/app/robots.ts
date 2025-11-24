import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/private/',
          '/admin/',
          '*.json$',
          '/api/',
          '/_next/',
          '/out/',
        ],
        crawlDelay: 1,
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
    ],
    sitemap: [
      'https://omar-corral.com/sitemap.xml',
      'https://omar-corral.com/seo-resources/sitemap.xml',
      'https://omar-corral.com/sitemap-images.xml',
    ],
    host: 'https://omar-corral.com',
  };
}
