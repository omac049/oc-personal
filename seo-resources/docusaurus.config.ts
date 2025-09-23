import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'SEO Resource Center',
  tagline: 'Comprehensive SEO guides, tools, and best practices for beginners and experts',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Markdown configuration for Mermaid diagrams
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        indexDocs: true,
        indexBlog: false,
        indexPages: false,
        language: ["en"],
      },
    ],
  ],

  // Set the production url of your site here
  url: 'https://omar-corral.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // Using environment variable for flexible deployment
  baseUrl: process.env.NODE_ENV === 'development' ? '/' : '/seo-resources/',
  
  // Ensure proper trailing slash handling
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'omac049', // Usually your GitHub org/user name.
  projectName: 'oc-personal', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs', // Serve docs at /docs path
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/omac049/oc-personal/tree/main/seo-resources/',
        },
        blog: false, // Disable blog for this documentation site
        theme: {
          customCss: './src/css/custom.css',
        },
        // Google Analytics - Disabled until real tracking ID is provided
        // gtag: {
        //   trackingID: 'G-XXXXXXXXXX', // TODO: Replace with actual Google Analytics ID
        //   anonymizeIP: true,
        // },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/seo-social-card.jpg',
    navbar: {
      title: 'SEO Resource Center',
      logo: {
        alt: 'Omar Corral SEO Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'SEO Guides',
        },
        {
          href: 'https://omar-corral.com',
          label: 'Main Site',
          position: 'right',
        },
        {
          href: 'https://omar-corral.com/#contact',
          label: 'Contact',
          position: 'right',
        },
        {
          href: 'https://github.com/omac049/oc-personal',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'SEO Guides',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/getting-started',
            },
            {
              label: 'Free SEO Tools',
              to: '/docs/tools',
            },
          ],
        },
        {
          title: 'Coming Soon',
          items: [
            {
              label: 'Keyword Research',
              href: '#',
            },
            {
              label: 'Technical SEO',
              href: '#',
            },
            {
              label: 'Content Optimization',
              href: '#',
            },
          ],
        },
        {
          title: 'Omar Corral',
          items: [
            {
              label: 'Main Website',
              href: 'https://omar-corral.com',
            },
            {
              label: 'SEO Services',
              href: 'https://omar-corral.com/services',
            },
            {
              label: 'Contact',
              href: 'https://omar-corral.com/#contact',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/omac049/oc-personal',
            },
            {
              label: 'LinkedIn',
              href: 'https://linkedin.com/in/omar-corral',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Omar Corral. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    
    // Enhanced metadata for better search indexing
    metadata: [
      {
        name: 'keywords',
        content: 'SEO, search engine optimization, authority, relevance, experience, technical SEO, content optimization, link building, Core Web Vitals, mobile SEO, keyword research, SEO tools, SEO guide, SEO tutorial, Omar Corral'
      },
      {
        name: 'description',
        content: 'Comprehensive SEO resource center covering the three pillars of SEO: Authority, Relevance, and Experience. Learn modern SEO techniques, tools, and best practices.'
      },
      {
        property: 'og:type',
        content: 'website'
      },
      {
        property: 'og:site_name',
        content: 'SEO Resource Center by Omar Corral'
      }
    ],
    // Algolia search configuration - Temporarily disabled while setting up index
    // Will be re-enabled once the Algolia index is properly created and crawled
    /*
    algolia: {
      // The application ID provided by Algolia
      appId: 'ZLQ21UNSR7',
      // Public API key: it is safe to commit it
      apiKey: 'c3a190e475e64ffda0f8bbd9a40e69c1',
      indexName: 'seo-resources',
      
      // Enhanced contextual search for better relevance
      contextualSearch: true,
      
      // External URL handling
      externalUrlRegex: 'external\\.com|domain\\.com',
      
      // URL path replacement for proper routing
      replaceSearchResultPathname: {
        from: '/docs/', // or as RegExp: /\/docs\//
        to: '/',
      },
      
      // Enhanced search parameters for better results
      searchParameters: {
        // Highlight matching terms in search results
        highlightPreTag: '<mark>',
        highlightPostTag: '</mark>',
        
        // Number of results per page
        hitsPerPage: 20,
        
        // Enable faceted search for content filtering
        facetFilters: [],
        
        // Add analytics tags for search tracking
        analyticsTags: ['seo-resources', 'docusaurus'],
        
        // Enable advanced query syntax
        advancedSyntax: true,
        
        // Improve typo tolerance for better user experience
        typoTolerance: 'min',
        
        // Remove stop words for cleaner results
        removeStopWords: true,
        
        // Set query language for better relevance
        queryLanguages: ['en'],
      },
      
      // Enhanced search page with better UX
      searchPagePath: 'search',
      
      // Add insights for search analytics
      insights: true,
    },
    */
  } satisfies Preset.ThemeConfig,
};

export default config;
