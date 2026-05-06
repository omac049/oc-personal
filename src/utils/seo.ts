import { Metadata } from 'next';
import { seoData } from '@/data/seo';

export function generateMetadata(overrides?: Partial<Metadata>): Metadata {
  const baseMetadata: Metadata = {
    metadataBase: new URL(seoData.website.url),
    title: {
      default: seoData.meta.title,
      template: '%s | Omar Corral — Digital Strategist'
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

    openGraph: {
      type: seoData.openGraph.type as 'website',
      locale: seoData.openGraph.locale,
      url: seoData.openGraph.url,
      siteName: seoData.openGraph.siteName,
      title: seoData.openGraph.title,
      description: seoData.openGraph.description,
      images: seoData.openGraph.images.map(img => ({
        url: img.url,
        width: img.width,
        height: img.height,
        alt: img.alt,
        type: img.type,
      })),
    },

    twitter: {
      card: 'summary_large_image',
      site: seoData.twitter.site,
      creator: seoData.twitter.creator,
      title: seoData.twitter.title,
      description: seoData.twitter.description,
      images: [seoData.twitter.image],
    },

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
        { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#00E55C' },
      ],
    },

    applicationName: seoData.website.name,
    referrer: 'origin-when-cross-origin',
    alternates: {
      canonical: seoData.technical.canonicalUrl,
    },
    other: {
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'black-translucent',
      'mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-title': 'Omar Corral',
      'application-name': 'Omar Corral',
      'msapplication-TileColor': '#000000',
    },
  };

  return { ...baseMetadata, ...overrides };
}

export function generateStructuredData(type: keyof typeof seoData.structuredData): string {
  const data = seoData.structuredData[type];
  return JSON.stringify(data, null, 0);
}

export function generateAllStructuredData(): string[] {
  return Object.keys(seoData.structuredData).map(type =>
    generateStructuredData(type as keyof typeof seoData.structuredData)
  );
}
