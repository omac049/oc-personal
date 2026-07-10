import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar for SEO Resource Center.
 * By default, Docusaurus generates a sidebar from the docs folder structure
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Welcome',
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/index',
        'getting-started/seo-fundamentals',
        'getting-started/how-search-engines-work',
        'getting-started/seo-pillars',
        'getting-started/search-intent-optimization',
        'getting-started/measuring-success',
      ],
    },
    {
      type: 'category',
      label: 'Keyword Research',
      items: [
        'keyword-research/index',
        'keyword-research/fundamentals',
        'keyword-research/tools-and-techniques',
        'keyword-research/long-tail-keywords',
        'keyword-research/local-keyword-research',
      ],
    },
    {
      type: 'category',
      label: 'Technical SEO',
      items: [
        'technical-seo/index',
        'technical-seo/core-web-vitals',
        'technical-seo/crawlability',
        'technical-seo/mobile-optimization',
        'technical-seo/structured-data',
      ],
    },
    {
      type: 'category',
      label: 'Content Optimization',
      items: [
        'content-optimization/index',
        'content-optimization/on-page-seo',
        'content-optimization/content-strategy',
        'content-optimization/user-experience',
        'content-optimization/content-auditing',
      ],
    },
    {
      type: 'category',
      label: 'Link Building',
      items: [
        'link-building/index',
        'link-building/fundamentals',
        'link-building/strategies',
        'link-building/outreach',
        'link-building/measurement',
      ],
    },
    {
      type: 'category',
      label: 'AI Search & GEO',
      items: [
        'ai-search/index',
        'ai-search/geo-fundamentals',
        'ai-search/ai-overviews',
        'ai-search/eeat-for-ai',
        'ai-search/structured-data-geo',
        'ai-search/webmcp-implementation',
      ],
    },
    {
      type: 'category',
      label: 'Checklists',
      items: [
        'checklists/index',
        'checklists/technical-seo-checklist',
        'checklists/on-page-checklist',
        'checklists/content-audit-checklist',
        'checklists/local-seo-checklist',
      ],
    },
    {
      type: 'category',
      label: 'Tools & Resources',
      items: [
        'tools/index',
      ],
    },
  ],
};

export default sidebars;
