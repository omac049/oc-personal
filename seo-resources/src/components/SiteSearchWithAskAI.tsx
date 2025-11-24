/**
 * Algolia SiteSearch with Ask AI Component for Docusaurus
 * 
 * This component integrates Algolia's SiteSearch with Ask AI functionality
 * Documentation: https://sitesearch.algolia.com/docs/experiences/search-askai
 * 
 * SETUP REQUIRED:
 * 1. Create an Ask AI Assistant in Algolia Dashboard:
 *    - Go to https://dashboard.algolia.com/
 *    - Navigate to "Ask AI" → "Assistants"
 *    - Create a new assistant
 *    - Copy the Assistant ID
 * 2. Update the assistantId prop below with your Assistant ID
 */

import React, { useEffect, useRef } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

interface SiteSearchWithAskAIProps {
  assistantId?: string;
  placeholder?: string;
  keyboardShortcut?: string;
}

export default function SiteSearchWithAskAI({
  assistantId,
  placeholder = 'Search SEO guides and documentation...',
  keyboardShortcut = 'k',
}: SiteSearchWithAskAIProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { siteConfig } = useDocusaurusContext();
  const initializedRef = useRef(false);

  useEffect(() => {
    // Only initialize once
    if (initializedRef.current || !containerRef.current) return;
    if (typeof window === 'undefined') return;

    // Load CDN scripts if not already loaded
    const loadCDNScripts = () => {
      return new Promise<void>((resolve) => {
        // Check if already loaded
        if ((window as any).SiteSearchAskAI) {
          resolve();
          return;
        }

        // Load CSS
        if (!document.querySelector('link[href*="sitesearch"]')) {
          const link = document.createElement('link');
          link.rel = 'stylesheet';
          link.href = 'https://unpkg.com/@algolia/sitesearch@latest/dist/search-askai.min.css';
          document.head.appendChild(link);
        }

        // Load JS
        if (!document.querySelector('script[src*="sitesearch"]')) {
          const script = document.createElement('script');
          script.src = 'https://unpkg.com/@algolia/sitesearch@latest/dist/search-askai.min.js';
          script.onload = () => resolve();
          script.onerror = () => {
            console.error('Failed to load SiteSearch CDN script');
            resolve(); // Resolve anyway to prevent hanging
          };
          document.head.appendChild(script);
        } else {
          // Script tag exists, wait for it to load
          const checkInterval = setInterval(() => {
            if ((window as any).SiteSearchAskAI) {
              clearInterval(checkInterval);
              resolve();
            }
          }, 100);
          // Timeout after 5 seconds
          setTimeout(() => {
            clearInterval(checkInterval);
            resolve();
          }, 5000);
        }
      });
    };

    const initializeSiteSearch = async () => {
      await loadCDNScripts();

      if ((window as any).SiteSearchAskAI) {
        try {
          (window as any).SiteSearchAskAI.init({
            container: containerRef.current!,
            applicationId: siteConfig.themeConfig.algolia?.appId || 'ZLQ21UNSR7',
            apiKey: siteConfig.themeConfig.algolia?.apiKey || 'c3a190e475e64ffda0f8bbd9a40e69c1',
            indexName: siteConfig.themeConfig.algolia?.indexName || 'omar_corral_com_zlq21unsr7_pages',
            assistantId: assistantId || '', // REQUIRED: Get from Algolia Dashboard
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
        console.error('SiteSearchAskAI not available. CDN script may have failed to load.');
      }
    };

    initializeSiteSearch();
  }, [assistantId, placeholder, keyboardShortcut, siteConfig]);

  if (!assistantId) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h3>Ask AI Assistant Required</h3>
        <p>
          To use SiteSearch with Ask AI, you need to create an Ask AI Assistant in your Algolia Dashboard.
        </p>
        <ol style={{ textAlign: 'left', display: 'inline-block' }}>
          <li>Go to <a href="https://dashboard.algolia.com/" target="_blank" rel="noopener noreferrer">Algolia Dashboard</a></li>
          <li>Navigate to "Ask AI" → "Assistants"</li>
          <li>Create a new assistant</li>
          <li>Copy the Assistant ID</li>
          <li>Update the <code>assistantId</code> prop in your component</li>
        </ol>
      </div>
    );
  }

  return <div ref={containerRef} id="sitesearch-askai-container" />;
}

