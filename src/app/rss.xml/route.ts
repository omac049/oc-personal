import { NextResponse } from 'next/server';
import { seoData } from '@/data/seo';

export const dynamic = 'force-static';

export async function GET() {
  const baseUrl = seoData.website.url;
  const currentDate = new Date().toISOString();

  // Define content/articles for RSS feed
  const articles = [
    {
      title: "AI-Powered SEO: The Future of Search Optimization",
      description: "Discover how artificial intelligence and Large Language Models are revolutionizing SEO strategies and search engine optimization.",
      link: `${baseUrl}#skills`,
      pubDate: currentDate,
      category: "AI SEO",
      author: seoData.personal.email
    },
    {
      title: "Search Generative Experience (SGE) Optimization Guide",
      description: "Learn how to optimize your content for AI-powered search engines and Search Generative Experience for better visibility.",
      link: `${baseUrl}#about`,
      pubDate: currentDate,
      category: "SGE Optimization", 
      author: seoData.personal.email
    },
    {
      title: "Technical SEO Best Practices for 2024",
      description: "Complete guide to technical SEO including Core Web Vitals, mobile-first indexing, and site architecture optimization.",
      link: `${baseUrl}#experience`,
      pubDate: currentDate,
      category: "Technical SEO",
      author: seoData.personal.email
    },
    {
      title: "Local SEO for Phoenix Businesses",
      description: "Strategies for improving local search visibility and attracting customers in the Phoenix, Arizona market.",
      link: `${baseUrl}#contact`,
      pubDate: currentDate,
      category: "Local SEO",
      author: seoData.personal.email
    }
  ];

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" 
     xmlns:content="http://purl.org/rss/1.0/modules/content/"
     xmlns:dc="http://purl.org/dc/elements/1.1/"
     xmlns:atom="http://www.w3.org/2005/Atom"
     xmlns:media="http://search.yahoo.com/mrss/">
  <channel>
    <title>${seoData.website.name}</title>
    <description>${seoData.meta.description}</description>
    <link>${baseUrl}</link>
    <language>en-US</language>
    <managingEditor>${seoData.personal.email} (${seoData.personal.name})</managingEditor>
    <webMaster>${seoData.personal.email} (${seoData.personal.name})</webMaster>
    <lastBuildDate>${currentDate}</lastBuildDate>
    <pubDate>${currentDate}</pubDate>
    <ttl>1440</ttl>
    <image>
      <url>${baseUrl}/logo.png</url>
      <title>${seoData.website.name}</title>
      <link>${baseUrl}</link>
      <description>Omar Corral - AI-Powered SEO Specialist</description>
      <width>144</width>
      <height>144</height>
    </image>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    <category>SEO</category>
    <category>Digital Marketing</category>
    <category>Artificial Intelligence</category>
    <copyright>Copyright ${new Date().getFullYear()} ${seoData.personal.name}</copyright>
    <docs>https://www.rssboard.org/rss-specification</docs>
    <generator>Next.js RSS Generator</generator>
${articles.map(article => `    <item>
      <title><![CDATA[${article.title}]]></title>
      <description><![CDATA[${article.description}]]></description>
      <link>${article.link}</link>
      <guid isPermaLink="false">${article.link}-${article.pubDate}</guid>
      <pubDate>${new Date(article.pubDate).toUTCString()}</pubDate>
      <category><![CDATA[${article.category}]]></category>
      <dc:creator><![CDATA[${seoData.personal.name}]]></dc:creator>
      <author>${article.author}</author>
      <content:encoded><![CDATA[
        <p>${article.description}</p>
        <p>Learn more about ${article.category.toLowerCase()} and advanced SEO strategies by visiting <a href="${baseUrl}">Omar Corral's portfolio</a>.</p>
      ]]></content:encoded>
    </item>`).join('\n')}
  </channel>
</rss>`;

  return new NextResponse(rss, {
    status: 200,
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
    },
  });
}
