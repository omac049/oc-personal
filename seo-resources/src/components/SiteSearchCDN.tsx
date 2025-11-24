/**
 * Algolia SiteSearch with Ask AI - CDN Implementation
 * 
 * Alternative implementation using CDN bundle (no npm dependencies)
 * Use this if you prefer CDN over npm package
 * 
 * Add to your docusaurus.config.ts head tags:
 * <link rel="stylesheet" href="https://unpkg.com/@algolia/sitesearch@latest/dist/search-askai.min.css" />
 * <script src="https://unpkg.com/@algolia/sitesearch@latest/dist/search-askai.min.js"></script>
 */

import React, { useEffect, useRef } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

interface SiteSearchCDNProps {
  assistantId: string;
  placeholder?: string;
  keyboardShortcut?: string;
}

export default function SiteSearchCDN({
  assistantId,
  placeholder = 'Search SEO guides and documentation...',
  keyboardShortcut = 'k',
}: SiteSearchCDNProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { siteConfig } = useDocusaurusContext();
  const initializedRef = useRef(false);

  useEffect(() => {
    if (initializedRef.current || !containerRef.current) return;
    if (typeof window === 'undefined') return;

    // Wait for CDN script to load
    const checkAndInit = () => {
      if ((window as any).SiteSearchAskAI) {
        try {
          (window as any).SiteSearchAskAI.init({
            container: containerRef.current!,
            applicationId: siteConfig.themeConfig.algolia?.appId || 'ZLQ21UNSR7',
            apiKey: siteConfig.themeConfig.algolia?.apiKey || 'c3a190e475e64ffda0f8bbd9a40e69c1',
            indexName: siteConfig.themeConfig.algolia?.indexName || 'omar_corral_com_zlq21unsr7_pages',
            assistantId,
            attributes: {
              primaryText: 'hierarchy.lvl1',
              secondaryText: 'content',
              tertiaryText: 'hierarchy.lvl0',
              url: 'url',
            },
            placeholder,
            keyboardShortcut,
            insights: true,
          });
          initializedRef.current = true;
        } catch (error) {
          console.error('Failed to initialize SiteSearch:', error);
        }
      } else {
        // Retry after a short delay
        setTimeout(checkAndInit, 100);
      }
    };

    checkAndInit();
  }, [assistantId, placeholder, keyboardShortcut, siteConfig]);

  return <div ref={containerRef} id="sitesearch-askai-container" />;
}

