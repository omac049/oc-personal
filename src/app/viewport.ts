import type { Viewport } from 'next';
import { seoData } from '@/data/seo';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#3b82f6' },
    { media: '(prefers-color-scheme: dark)', color: seoData.technical.themeColor },
    { media: '(min-width: 768px)', color: '#1e293b' },
    { media: '(orientation: landscape)', color: '#0f172a' },
  ],
  colorScheme: 'dark light',
  interactiveWidget: 'resizes-visual',
  viewportFit: 'cover',
};
