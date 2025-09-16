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
        
        {/* Content Security Policy - Secure configuration without unsafe-eval */}
        <meta 
          httpEquiv="Content-Security-Policy" 
          content="default-src 'self'; script-src 'self' 'unsafe-inline' *.google.com *.googletagmanager.com *.google-analytics.com https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' fonts.googleapis.com; font-src 'self' fonts.gstatic.com; img-src 'self' data: *.google.com *.google-analytics.com *.googletagmanager.com; connect-src 'self' *.google-analytics.com *.google.com *.googletagmanager.com; object-src 'none'; base-uri 'self';"
        />
        
        {/* Fonts are optimized by Next.js automatically */}
        
        {/* Resource hints for better loading */}
        <link rel="prefetch" href="/sitemap.xml" />
        <link rel="prefetch" href="/robots.txt" />
        
        {/* Structured Data */}
        <StructuredData type="all" />
        
        {/* FAQ Structured Data for Featured Snippets */}
        <StructuredData 
          type="all"
          customData={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is AI-powered SEO and how does it work?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "AI-powered SEO combines traditional search engine optimization with artificial intelligence technologies like ChatGPT, Claude, and machine learning algorithms. It involves using AI tools for keyword research, content optimization, prompt engineering for SEO-focused content creation, and leveraging Large Language Models (LLMs) to understand search intent and create more effective SEO strategies."
                }
              },
              {
                "@type": "Question",
                "name": "How do you optimize content for Search Generative Experience (SGE)?",
                "acceptedAnswer": {
                  "@type": "Answer", 
                  "text": "SGE optimization involves creating content that answers questions directly and comprehensively, using structured data markup, optimizing for conversational queries, and ensuring content provides immediate value. I focus on featured snippet optimization, question-based content structure, and implementing schema markup that helps AI search engines understand and present your content effectively."
                }
              },
              {
                "@type": "Question",
                "name": "What makes your SEO approach different from traditional SEO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "My approach integrates cutting-edge AI technologies with proven SEO fundamentals. I specialize in LLM content optimization, prompt engineering for SEO, AI-driven keyword research, and optimizing for both traditional search engines and AI-powered search experiences."
                }
              }
            ]
          }}
        />
        
        {/* Analytics & Tracking */}
        <Analytics />
        
        {/* Font loading is handled by Next.js font optimization */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-900`}
        itemScope
        itemType="https://schema.org/WebPage"
      >
        {/* Enhanced UI Components */}
        <ScrollToTop />
        <MonogramLogo />
        <ScrollProgress />
        <FloatingNav />
        
        {/* Static Content for Crawlers and No-JS Users */}
        <StaticContent />
        
        {/* Main Content with Semantic Structure */}
        <div id="root" role="main" aria-label="Main content">
          {children}
        </div>
        
        {/* Skip Link for Accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded"
          aria-label="Skip to main content"
        >
          Skip to main content
        </a>
      </body>
    </html>
  );
}
