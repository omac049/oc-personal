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
      ],
    },
    {
      type: 'category',
      label: '🛠️ Tools & Resources',
      items: [
        'tools/index',
      ],
    },
    // Additional categories will be added as we create more content
  ],
};

export default sidebars;
