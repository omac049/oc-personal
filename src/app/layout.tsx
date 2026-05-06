import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar';
import StructuredData from '@/components/StructuredData';
import Analytics from '@/components/Analytics';
import StaticContent from '@/components/StaticContent';
import Footer from '@/components/Footer';
import { generateMetadata as createSEOMetadata } from '@/utils/seo';

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  preload: true,
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
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

        {/* DNS prefetch for third-party domains */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        
        {/* Content Security Policy — unsafe-eval required for Next.js dev mode hot reload */}
        <meta 
          httpEquiv="Content-Security-Policy" 
          content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' *.google.com *.googletagmanager.com *.google-analytics.com https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' fonts.googleapis.com; font-src 'self' data: fonts.gstatic.com; img-src 'self' data: *.google.com *.google-analytics.com *.googletagmanager.com; connect-src 'self' ws: wss: *.google-analytics.com *.google.com *.googletagmanager.com https://formspree.io; object-src 'none'; base-uri 'self';"
        />
        
        {/* Fonts are optimized by Next.js automatically */}
        
        {/* Resource hints for better loading */}
        <link rel="prefetch" href="/sitemap.xml" />
        <link rel="prefetch" href="/robots.txt" />
        
        {/* Structured Data - includes FAQ schema from enhanced-seo.ts */}
        <StructuredData />
        
        {/* Analytics & Tracking */}
        <Analytics />
        
        {/* Font loading is handled by Next.js font optimization */}
      </head>
      <body
        className={`${dmSerif.variable} ${inter.variable} antialiased`}
        itemScope
        itemType="https://schema.org/WebPage"
        suppressHydrationWarning
      >
        {/* Enhanced UI Components */}
        <Navbar />
        
        {/* Static Content for Crawlers and No-JS Users */}
        <StaticContent />
        
        {/* Main Content */}
        <div id="root">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
