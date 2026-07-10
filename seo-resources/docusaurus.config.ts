import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'SEO Resource Center',
  tagline: 'Free guides, checklists, and frameworks for organic search — from fundamentals to AI search readiness',
  favicon: 'img/logo.svg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Markdown configuration for Mermaid diagrams
  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  themes: [
    '@docusaurus/theme-mermaid',
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        indexDocs: true,
        indexBlog: true,
        indexPages: true,
        language: ['en'],
        highlightSearchTermsOnTargetPage: true,
        searchResultLimits: 10,
        searchBarShortcutHint: true,
        docsRouteBasePath: '/docs',
      },
    ],
  ],

  plugins: [
    function suppressCriticalDependencyWarning() {
      return {
        name: 'suppress-critical-dependency-warning',
        configureWebpack() {
          return {
            ignoreWarnings: [
              {module: /vscode-languageserver-types/},
            ],
          };
        },
      };
    },
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
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/omac049/oc-personal/tree/main/seo-resources/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
          blogTitle: 'SEO Insights',
          blogDescription: 'Practical SEO analysis and strategy from Omar Corral — covering AI search, technical SEO, and organic growth.',
          postsPerPage: 10,
          blogSidebarTitle: 'Recent posts',
          blogSidebarCount: 'ALL',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        // Google Analytics - GA4 Tracking Implementation
        gtag: {
          trackingID: 'G-2GXQ6627P1',
          anonymizeIP: true, // Privacy compliance
        },
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
    image: 'img/seo-social-card.svg',
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
          label: 'Guides',
        },
        {
          to: '/docs/checklists',
          label: 'Checklists',
          position: 'left',
        },
        {
          to: '/docs/ai-search',
          label: 'AI Search',
          position: 'left',
        },
        {
          to: '/blog',
          label: 'Insights',
          position: 'left',
        },
        {
          href: 'https://omar-corral.com',
          label: 'omar-corral.com',
          position: 'right',
        },
        {
          href: 'https://omar-corral.com/#contact',
          label: 'Work Together',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learn SEO',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/getting-started',
            },
            {
              label: 'Keyword Research',
              to: '/docs/keyword-research',
            },
            {
              label: 'Technical SEO',
              to: '/docs/technical-seo',
            },
            {
              label: 'Content Optimization',
              to: '/docs/content-optimization',
            },
            {
              label: 'Link Building',
              to: '/docs/link-building',
            },
            {
              label: 'AI Search & GEO',
              to: '/docs/ai-search',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Checklists',
              to: '/docs/checklists',
            },
            {
              label: 'WebMCP Guide',
              to: '/docs/ai-search/webmcp-implementation',
            },
            {
              label: 'SEO Tools',
              to: '/docs/tools',
            },
            {
              label: 'SEO Insights Blog',
              to: '/blog',
            },
          ],
        },
        {
          title: 'Omar Corral',
          items: [
            {
              label: 'Portfolio & Services',
              href: 'https://omar-corral.com',
            },
            {
              label: 'Work Together',
              href: 'https://omar-corral.com/#contact',
            },
            {
              label: 'LinkedIn',
              href: 'https://linkedin.com/in/omarrcorral',
            },
            {
              label: 'X (Twitter)',
              href: 'https://twitter.com/omarrcorral',
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
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    
    // Enhanced metadata for better search indexing
    metadata: [
      {
        name: 'keywords',
        content: 'SEO, AI search optimization, search engine optimization, authority, relevance, experience, technical SEO, content optimization, link building, Core Web Vitals, keyword research, SEO tools, digital strategy, Omar Corral'
      },
      {
        name: 'description',
        content: 'Free SEO resource center by Omar Corral — guides, checklists, and frameworks covering technical SEO, AI search optimization, and organic growth strategy.'
      },
      {
        property: 'og:type',
        content: 'website'
      },
      {
        property: 'og:site_name',
        content: 'Omar Corral — SEO Resource Center'
      }
    ],
    
    // Search is handled by @easyops-cn/docusaurus-search-local (see themes below)
  } satisfies Preset.ThemeConfig,
};

export default config;