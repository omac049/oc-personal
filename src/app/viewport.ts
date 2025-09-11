import type { Viewport } from 'next';
import { seoData } from '@/data/seo';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: seoData.technical.themeColor },
  ],
  colorScheme: 'dark light',
  interactiveWidget: 'resizes-content',
  viewportFit: 'cover',
};
