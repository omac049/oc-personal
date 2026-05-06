import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Omar Corral - SEO Specialist & AI Marketing Expert',
    short_name: 'Omar Corral',
    description: 'Digital strategist specializing in SEO, AI search optimization, and growth strategy. Based in Phoenix, Arizona.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#00E55C',
    orientation: 'portrait-primary',
    scope: '/',
    lang: 'en-US',
    categories: ['business', 'productivity', 'technology'],
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'maskable',
      },
      {
        src: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    shortcuts: [
      {
        name: 'Contact Omar',
        short_name: 'Contact',
        description: 'Get in touch for SEO consultation',
        url: '/#contact',
        icons: [{ src: '/favicon-32x32.png', sizes: '32x32' }],
      },
      {
        name: 'SEO Services',
        short_name: 'Services',
        description: 'View AI-enhanced SEO services',
        url: '/services/',
        icons: [{ src: '/favicon-32x32.png', sizes: '32x32' }],
      },
      {
        name: 'FAQ',
        short_name: 'FAQ',
        description: 'Frequently asked questions about AI SEO',
        url: '/#faq',
        icons: [{ src: '/favicon-32x32.png', sizes: '32x32' }],
      },
    ],
    related_applications: [
      {
        platform: 'web',
        url: 'https://omar-corral.com',
        id: 'omar-corral-seo',
      },
    ],
    prefer_related_applications: false,
  };
}
