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
      label: '🏠 Welcome',
    },
    {
      type: 'category',
      label: '🎓 Getting Started',
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
      label: '🛠️ Tools & Resources',
      items: [
        'tools/index',
      ],
    },
    {
      type: 'category',
      label: '🔍 Keyword Research',
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
      label: '⚙️ Technical SEO',
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
      label: '✏️ Content Optimization',
      items: [
        'content-optimization/index',
        'content-optimization/on-page-seo',
        'content-optimization/content-strategy',
        'content-optimization/user-experience',
        'content-optimization/content-auditing',
      ],
    },
    // Coming Soon Sections - Will be added as content is created:
    // 📋 SEO Checklists
    // 🔗 Link Building
  ],
};

export default sidebars;
