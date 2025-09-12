import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Omar Corral - AI-Powered SEO Specialist',
    short_name: 'Omar SEO',
    description: 'Professional AI-powered SEO specialist and LLM optimization expert in Phoenix, Arizona. Specializing in ChatGPT, Claude, and Search Generative Experience (SGE) strategies.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0f172a',
    theme_color: '#3b82f6',
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
        icons: [{ src: '/contact-icon.png', sizes: '96x96' }],
      },
      {
        name: 'SEO Services',
        short_name: 'Services',
        description: 'View AI-powered SEO services',
        url: '/#skills',
        icons: [{ src: '/services-icon.png', sizes: '96x96' }],
      },
      {
        name: 'FAQ',
        short_name: 'FAQ',
        description: 'Frequently asked questions about AI SEO',
        url: '/#faq',
        icons: [{ src: '/faq-icon.png', sizes: '96x96' }],
      },
    ],
    screenshots: [
      {
        src: '/screenshot-desktop.png',
        sizes: '1280x720',
        type: 'image/png',
        form_factor: 'wide',
        label: 'Omar Corral SEO Portfolio - Desktop View',
      },
      {
        src: '/screenshot-mobile.png',
        sizes: '375x667',
        type: 'image/png',
        form_factor: 'narrow',
        label: 'Omar Corral SEO Portfolio - Mobile View',
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
