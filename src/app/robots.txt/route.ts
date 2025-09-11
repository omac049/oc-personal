import { NextResponse } from 'next/server';
import { seoData } from '@/data/seo';

export const dynamic = 'force-static';

export async function GET() {
  const baseUrl = seoData.website.url;

  const robots = `# Robots.txt for ${seoData.website.domain}
# Generated dynamically for optimal SEO

User-agent: *
Allow: /

# Optimize crawl budget
Disallow: /api/
Disallow: /_next/
Disallow: /admin/
Disallow: /private/
Disallow: /*.json$
Disallow: /*?*

# Allow important assets
Allow: /*.css$
Allow: /*.js$
Allow: /*.png$
Allow: /*.jpg$
Allow: /*.jpeg$
Allow: /*.gif$
Allow: /*.svg$
Allow: /*.webp$
Allow: /*.ico$

# Sitemap location
Sitemap: ${baseUrl}/sitemap.xml

# Crawl delay (be respectful)
Crawl-delay: 1

# Google-specific directives
User-agent: Googlebot
Allow: /
Crawl-delay: 0

# Bing-specific directives  
User-agent: Bingbot
Allow: /
Crawl-delay: 1

# Social media crawlers
User-agent: facebookexternalhit
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: LinkedInBot
Allow: /

# Block unwanted bots
User-agent: MJ12bot
Disallow: /

User-agent: AhrefsBot
Disallow: /

User-agent: SemrushBot
Disallow: /

User-agent: MajesticSEO
Disallow: /

# Additional sitemaps (if you have them)
# Sitemap: ${baseUrl}/sitemap-images.xml
# Sitemap: ${baseUrl}/sitemap-videos.xml

# Host directive (helps with canonicalization)
Host: ${seoData.website.domain}`;

  return new NextResponse(robots, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400', // Cache for 1 day
    },
  });
}
