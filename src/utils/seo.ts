import { Metadata } from 'next';
import { seoData } from '@/data/seo';

/**
 * Generate comprehensive metadata for Next.js pages
 */
export function generateMetadata(overrides?: Partial<Metadata>): Metadata {
  const baseMetadata: Metadata = {
    metadataBase: new URL(seoData.website.url),
    title: {
      default: seoData.meta.title,
      template: '%s | Omar Corral - AI-Powered SEO Specialist'
    },
    description: seoData.meta.description,
    keywords: seoData.meta.keywords,
    authors: [{ 
      name: seoData.meta.author,
      url: seoData.website.url 
    }],
    creator: seoData.meta.author,
    publisher: seoData.meta.publisher,
    category: seoData.meta.category,
    
    // Robots and indexing
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },

    // Open Graph
    openGraph: {
      type: seoData.openGraph.type as 'website',
      locale: seoData.openGraph.locale,
      url: seoData.openGraph.url,
      siteName: seoData.openGraph.siteName,
      title: seoData.openGraph.title,
      description: seoData.openGraph.description,
      determiner: 'the',
      images: [
        {
          url: '/opengraph-image.png',
          width: 1200,
          height: 630,
          alt: 'Omar Corral - AI-Powered SEO Specialist in Phoenix, Arizona',
          type: 'image/png',
        },
        ...seoData.openGraph.images.map(img => ({
          url: img.url,
          width: img.width,
          height: img.height,
          alt: img.alt,
          type: img.type,
        })),
      ],
      videos: [
        {
          url: 'https://omar-corral.com/seo-video-intro.mp4',
          width: 1280,
          height: 720,
          type: 'video/mp4',
        },
      ],
      audio: [
        {
          url: 'https://omar-corral.com/seo-podcast-intro.mp3',
          type: 'audio/mpeg',
        },
      ],
    },

    // Twitter
    twitter: {
      card: 'summary_large_image',
      site: seoData.twitter.site,
      creator: seoData.twitter.creator,
      title: seoData.twitter.title,
      description: seoData.twitter.description,
      images: [
        {
          url: '/twitter-image.png',
          alt: 'Omar Corral - AI-Powered SEO Specialist & LLM Optimization Expert',
          width: 1200,
          height: 600,
        },
        seoData.twitter.image
      ],
    },

    // Icons and manifest
    icons: {
      icon: [
        { url: '/favicon.svg', type: 'image/svg+xml' },
        { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
        { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      ],
      apple: [
        { url: '/apple-touch-icon.png', sizes: '180x180' },
      ],
      other: [
        { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#1e293b' },
      ],
    },

    // Additional metadata
    applicationName: seoData.website.name,
    referrer: 'origin-when-cross-origin',
    verification: {
      google: seoData.analytics.googleSearchConsole.replace('google-site-verification=', ''),
      other: {
        'msvalidate.01': seoData.analytics.bingWebmaster.replace('msvalidate.01=', ''),
      },
    },
    alternates: {
      canonical: seoData.technical.canonicalUrl,
      languages: Object.fromEntries(
        seoData.technical.hreflang.map(item => [item.lang, item.href])
      ),
      media: {
        'only screen and (max-width: 600px)': 'https://omar-corral.com/mobile',
        'only screen and (min-width: 601px)': 'https://omar-corral.com',
      },
      types: {
        'application/rss+xml': 'https://omar-corral.com/rss.xml',
        'application/atom+xml': 'https://omar-corral.com/atom.xml',
      },
    },
    archives: ['https://omar-corral.com/blog/archive'],
    assets: ['https://omar-corral.com/assets'],
    bookmarks: ['https://omar-corral.com/bookmarks'],
    other: {
      'fb:app_id': seoData.analytics.facebookPixel,
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'black-translucent',
      'format-detection': 'telephone=yes, email=yes, address=yes',
      'mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-title': 'Omar SEO',
      'application-name': 'Omar Corral SEO',
      'msapplication-TileColor': '#0f172a',
      'msapplication-TileImage': '/mstile-144x144.png',
    },
  };

  return { ...baseMetadata, ...overrides };
}

/**
 * Generate structured data (JSON-LD) script
 */
export function generateStructuredData(type: keyof typeof seoData.structuredData): string {
  const data = seoData.structuredData[type];
  return JSON.stringify(data, null, 0);
}

/**
 * Generate all structured data scripts
 */
export function generateAllStructuredData(): string[] {
  return Object.keys(seoData.structuredData).map(type => 
    generateStructuredData(type as keyof typeof seoData.structuredData)
  );
}

/**
 * Generate breadcrumb structured data for specific page
 */
export function generateBreadcrumbData(currentPage?: { name: string; url: string }): string {
  const baseBreadcrumb = seoData.structuredData.breadcrumb;
  
  if (!currentPage) {
    return JSON.stringify(baseBreadcrumb, null, 0);
  }

  const updatedBreadcrumb = {
    ...baseBreadcrumb,
    itemListElement: [
      ...baseBreadcrumb.itemListElement,
      {
        "@type": "ListItem",
        "position": baseBreadcrumb.itemListElement.length + 1,
        "name": currentPage.name,
        "item": currentPage.url
      }
    ]
  };

  return JSON.stringify(updatedBreadcrumb, null, 0);
}

/**
 * Generate FAQ structured data
 */
export function generateFAQStructuredData(faqs: Array<{ question: string; answer: string }>): string {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return JSON.stringify(faqData, null, 0);
}

/**
 * Generate Article structured data for blog posts
 */
export function generateArticleStructuredData(article: {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  wordCount?: number;
  readingTime?: string;
}): string {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.headline,
    "description": article.description,
    "image": article.image,
    "author": {
      "@id": `${seoData.website.url}#person`
    },
    "publisher": {
      "@id": `${seoData.website.url}#organization`
    },
    "datePublished": article.datePublished,
    "dateModified": article.dateModified || article.datePublished,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": seoData.website.url
    },
    ...(article.wordCount && { "wordCount": article.wordCount }),
    ...(article.readingTime && { "timeRequired": article.readingTime })
  };

  return JSON.stringify(articleData, null, 0);
}

/**
 * Generate Service structured data
 */
export function generateServiceStructuredData(service: {
  name: string;
  description: string;
  category: string;
  areaServed?: string;
  offers?: Array<{ name: string; description: string; price?: string }>;
}): string {
  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.description,
    "serviceType": service.category,
    "provider": {
      "@id": `${seoData.website.url}#organization`
    },
    "areaServed": service.areaServed || "United States",
    ...(service.offers && {
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": `${service.name} Services`,
        "itemListElement": service.offers.map((offer) => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": offer.name,
            "description": offer.description
          },
          ...(offer.price && { "price": offer.price })
        }))
      }
    })
  };

  return JSON.stringify(serviceData, null, 0);
}

/**
 * Extract keywords from content for meta keywords
 */
export function extractKeywords(content: string, maxKeywords: number = 10): string[] {
  // Simple keyword extraction - in production, use more sophisticated NLP
  const words = content
    .toLowerCase()
    .replace(/[^\w\s]/g, '')
    .split(/\s+/)
    .filter(word => word.length > 3);

  const wordCount = words.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return Object.entries(wordCount)
    .sort(([,a], [,b]) => b - a)
    .slice(0, maxKeywords)
    .map(([word]) => word);
}

/**
 * Generate meta description from content
 */
export function generateMetaDescription(content: string, maxLength: number = 160): string {
  const cleanContent = content.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
  
  if (cleanContent.length <= maxLength) {
    return cleanContent;
  }

  const truncated = cleanContent.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');
  
  return lastSpace > maxLength * 0.8 
    ? truncated.substring(0, lastSpace) + '...'
    : truncated + '...';
}

/**
 * Validate SEO metadata
 */
export function validateSEOMetadata(metadata: {
  title?: string;
  description?: string;
  keywords?: string[];
}): { isValid: boolean; warnings: string[] } {
  const warnings: string[] = [];

  // Title validation
  if (metadata.title) {
    if (metadata.title.length < 30) {
      warnings.push('Title is too short (recommended: 30-60 characters)');
    }
    if (metadata.title.length > 60) {
      warnings.push('Title is too long (recommended: 30-60 characters)');
    }
  } else {
    warnings.push('Title is missing');
  }

  // Description validation
  if (metadata.description) {
    if (metadata.description.length < 120) {
      warnings.push('Meta description is too short (recommended: 120-160 characters)');
    }
    if (metadata.description.length > 160) {
      warnings.push('Meta description is too long (recommended: 120-160 characters)');
    }
  } else {
    warnings.push('Meta description is missing');
  }

  // Keywords validation
  if (metadata.keywords) {
    if (metadata.keywords.length > 10) {
      warnings.push('Too many keywords (recommended: 5-10 keywords)');
    }
    if (metadata.keywords.length === 0) {
      warnings.push('No keywords provided');
    }
  }

  return {
    isValid: warnings.length === 0,
    warnings
  };
}

/**
 * Generate preload hints for critical resources
 */
export function generatePreloadHints(): Array<{ href: string; as: string; type?: string; crossorigin?: string }> {
  return [
    // Critical CSS
    { href: '/styles/critical.css', as: 'style' },
    
    // Fonts
    { href: 'https://fonts.gstatic.com/s/geist/v1/UcCm3FwjIWiKaKZbGQ.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' },
    
    // Critical images
    { href: '/omar-corral-hero.jpg', as: 'image' },
    { href: '/logo.png', as: 'image' },
  ];
}

/**
 * Generate security headers
 */
export function generateSecurityHeaders(): Record<string, string> {
  return {
    'Content-Security-Policy': Object.entries(seoData.security.contentSecurityPolicy)
      .map(([key, value]) => `${key} ${Array.isArray(value) ? value.join(' ') : value}`)
      .join('; '),
    'X-Frame-Options': 'DENY',
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  };
}

/**
 * Utility to create canonical URLs
 */
export function createCanonicalUrl(path: string = ''): string {
  const baseUrl = seoData.website.url.replace(/\/$/, '');
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl}${cleanPath}`;
}

/**
 * Generate hreflang tags
 */
export function generateHreflangTags(): Array<{ hrefLang: string; href: string }> {
  return seoData.technical.hreflang.map(item => ({
    hrefLang: item.lang,
    href: item.href
  }));
}
