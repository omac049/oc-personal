import type { Viewport } from 'next';
import { seoData } from '@/data/seo';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#000000' },
    { media: '(prefers-color-scheme: dark)', color: seoData.technical.themeColor },
  ],
  colorScheme: 'dark',
  interactiveWidget: 'resizes-visual',
  viewportFit: 'cover',
};
