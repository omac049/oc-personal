/**
 * Custom Search Page with Ask AI
 * 
 * This page provides a dedicated search experience with Algolia SiteSearch and Ask AI
 * Accessible at: /seo-resources/search-ai
 */

import React from 'react';
import Layout from '@theme/Layout';
import SiteSearchWithAskAI from '../components/SiteSearchWithAskAI';

// TODO: Replace with your Ask AI Assistant ID from Algolia Dashboard
// Get it from: https://dashboard.algolia.com/ → Ask AI → Assistants
const ASSISTANT_ID = process.env.ALGOLIA_ASSISTANT_ID || '';

export default function SearchAIPage(): JSX.Element {
  return (
    <Layout
      title="Search with AI"
      description="Search SEO guides and documentation with AI-powered assistance"
    >
      <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ marginBottom: '1rem' }}>Search with AI</h1>
        <p style={{ marginBottom: '2rem', color: 'var(--ifm-color-content-secondary)' }}>
          Ask questions and search through our SEO documentation with AI-powered assistance.
          Press <kbd>K</kbd> to open search quickly.
        </p>
        <SiteSearchWithAskAI 
          assistantId={ASSISTANT_ID}
          placeholder="Search SEO guides or ask a question..."
          keyboardShortcut="k"
        />
      </div>
    </Layout>
  );
}

