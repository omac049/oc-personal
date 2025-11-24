import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://omar-corral.com';
  const currentDate = new Date();
  const lastWeek = new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000);

  return [
    // Main pages
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/#about`,
      lastModified: lastWeek,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#skills`,
      lastModified: lastWeek,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#experience`,
      lastModified: lastWeek,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#faq`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/#contact`,
      lastModified: lastWeek,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    
    // SEO Resources section
    {
      url: `${baseUrl}/seo-resources/`,
      lastModified: lastWeek,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/seo-resources/docs`,
      lastModified: lastWeek,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    
    // SEO Resources - Getting Started
    {
      url: `${baseUrl}/seo-resources/docs/getting-started`,
      lastModified: lastWeek,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/seo-resources/docs/getting-started/seo-fundamentals`,
      lastModified: lastWeek,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/seo-resources/docs/getting-started/how-search-engines-work`,
      lastModified: lastWeek,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/seo-resources/docs/getting-started/seo-pillars`,
      lastModified: lastWeek,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/seo-resources/docs/getting-started/search-intent-optimization`,
      lastModified: lastWeek,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/seo-resources/docs/getting-started/measuring-success`,
      lastModified: lastWeek,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    
    // SEO Resources - Technical SEO
    {
      url: `${baseUrl}/seo-resources/docs/technical-seo`,
      lastModified: lastWeek,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/seo-resources/docs/technical-seo/crawlability`,
      lastModified: lastWeek,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/seo-resources/docs/technical-seo/mobile-optimization`,
      lastModified: lastWeek,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/seo-resources/docs/technical-seo/core-web-vitals`,
      lastModified: lastWeek,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/seo-resources/docs/technical-seo/structured-data`,
      lastModified: lastWeek,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    
    // SEO Resources - Keyword Research
    {
      url: `${baseUrl}/seo-resources/docs/keyword-research`,
      lastModified: lastWeek,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/seo-resources/docs/keyword-research/fundamentals`,
      lastModified: lastWeek,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/seo-resources/docs/keyword-research/tools-and-techniques`,
      lastModified: lastWeek,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/seo-resources/docs/keyword-research/long-tail-keywords`,
      lastModified: lastWeek,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/seo-resources/docs/keyword-research/local-keyword-research`,
      lastModified: lastWeek,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    
    // SEO Resources - Content Optimization
    {
      url: `${baseUrl}/seo-resources/docs/content-optimization`,
      lastModified: lastWeek,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/seo-resources/docs/content-optimization/on-page-seo`,
      lastModified: lastWeek,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/seo-resources/docs/content-optimization/content-strategy`,
      lastModified: lastWeek,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/seo-resources/docs/content-optimization/content-auditing`,
      lastModified: lastWeek,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/seo-resources/docs/content-optimization/user-experience`,
      lastModified: lastWeek,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    
    // SEO Resources - Link Building
    {
      url: `${baseUrl}/seo-resources/docs/link-building`,
      lastModified: lastWeek,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/seo-resources/docs/link-building/fundamentals`,
      lastModified: lastWeek,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/seo-resources/docs/link-building/strategies`,
      lastModified: lastWeek,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/seo-resources/docs/link-building/outreach`,
      lastModified: lastWeek,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/seo-resources/docs/link-building/measurement`,
      lastModified: lastWeek,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    
    // SEO Resources - Checklists
    {
      url: `${baseUrl}/seo-resources/docs/checklists`,
      lastModified: lastWeek,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/seo-resources/docs/checklists/technical-seo-checklist`,
      lastModified: lastWeek,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/seo-resources/docs/checklists/on-page-checklist`,
      lastModified: lastWeek,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/seo-resources/docs/checklists/content-audit-checklist`,
      lastModified: lastWeek,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/seo-resources/docs/checklists/local-seo-checklist`,
      lastModified: lastWeek,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    
    // SEO Resources - Tools
    {
      url: `${baseUrl}/seo-resources/docs/tools`,
      lastModified: lastWeek,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    
    // Additional pages
    {
      url: `${baseUrl}/seo-resources/search`,
      lastModified: lastWeek,
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/seo-resources/markdown-page`,
      lastModified: lastWeek,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    
    // Metadata routes
    {
      url: `${baseUrl}/sitemap.xml`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/robots.txt`,
      lastModified: lastWeek,
      changeFrequency: 'monthly',
      priority: 0.1,
    },
    {
      url: `${baseUrl}/rss.xml`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/manifest.json`,
      lastModified: lastWeek,
      changeFrequency: 'monthly',
      priority: 0.2,
    },
  ];
}
