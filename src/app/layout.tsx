import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import ScrollProgress from '@/components/ScrollProgress';
import FloatingNav from '@/components/FloatingNav';
import MonogramLogo from '@/components/MonogramLogo';
import ScrollToTop from '@/components/ScrollToTop';
import StructuredData from '@/components/StructuredData';
import Analytics from '@/components/Analytics';
import StaticContent from '@/components/StaticContent';
import { generateMetadata as createSEOMetadata } from '@/utils/seo';

config.autoAddCss = false;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
  preload: false,
});

// Generate comprehensive SEO metadata
export const metadata: Metadata = createSEOMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Critical resource hints for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://connect.facebook.net" />
        
        {/* DNS prefetch for third-party domains */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//connect.facebook.net" />
        <link rel="dns-prefetch" href="//cdnjs.cloudflare.com" />
        
        {/* Performance hints */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Content Security Policy — unsafe-eval required for Next.js dev mode hot reload */}
        <meta 
          httpEquiv="Content-Security-Policy" 
          content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' *.google.com *.googletagmanager.com *.google-analytics.com *.algolia.net *.jsdelivr.net https://www.googletagmanager.com https://www.google-analytics.com https://cdn.jsdelivr.net; style-src 'self' 'unsafe-inline' fonts.googleapis.com *.jsdelivr.net https://cdn.jsdelivr.net; font-src 'self' data: fonts.gstatic.com; img-src 'self' data: *.google.com *.google-analytics.com *.googletagmanager.com; connect-src 'self' ws: wss: *.google-analytics.com *.google.com *.googletagmanager.com *.algolia.net *.algolianet.com; object-src 'none'; base-uri 'self';"
        />
        
        {/* Algolia site verification for search functionality */}
        <meta name="algolia-site-verification" content="694E3C0A56DD602C" />
        
        {/* Fonts are optimized by Next.js automatically */}
        
        {/* Resource hints for better loading */}
        <link rel="prefetch" href="/sitemap.xml" />
        <link rel="prefetch" href="/robots.txt" />
        
        {/* Structured Data - includes FAQ schema from enhanced-seo.ts */}
        <StructuredData type="all" />
        
        {/* Analytics & Tracking */}
        <Analytics />
        
        {/* Font loading is handled by Next.js font optimization */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-900`}
        itemScope
        itemType="https://schema.org/WebPage"
        suppressHydrationWarning
      >
        {/* Enhanced UI Components */}
        <ScrollToTop />
        <MonogramLogo />
        <ScrollProgress />
        <FloatingNav />
        
        {/* Static Content for Crawlers and No-JS Users */}
        <StaticContent />
        
        {/* Main Content */}
        <div id="root">
          {children}
        </div>
      </body>
    </html>
  );
}
