import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://omar-corral.com';
  const currentDate = new Date();
  const lastWeek = new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000);

  return [
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
    // Static pages for enhanced crawlability
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Additional metadata routes
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
