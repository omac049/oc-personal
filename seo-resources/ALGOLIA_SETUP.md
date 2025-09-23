# Algolia DocSearch Setup Guide

This guide covers setting up Algolia DocSearch for the SEO Resource Center to provide powerful search functionality.

## 🔍 Current Status

- **✅ Local Search**: Currently using `@easyops-cn/docusaurus-search-local` as a fallback
- **⏳ Algolia DocSearch**: Configuration ready but needs index creation
- **🎯 Goal**: Transition to Algolia DocSearch for enhanced search experience

## 📋 Algolia Configuration

The site is already configured for Algolia with the following settings:

```typescript
algolia: {
  appId: 'ZLQ21UNSR7',
  apiKey: 'c3a190e475e64ffda0f8bbd9a40e69c1',
  indexName: 'seo-resources',
  contextualSearch: true,
  searchParameters: {
    hitsPerPage: 20,
    highlightPreTag: '<mark>',
    highlightPostTag: '</mark>',
  },
}
```

## 🚀 Setting Up Algolia DocSearch

### Option 1: Apply for DocSearch (Recommended)

1. **Apply for DocSearch Program**
   - Visit: https://docsearch.algolia.com/apply/
   - Submit your documentation site for review
   - Requirements:
     - ✅ Public documentation site
     - ✅ Open source or publicly accessible
     - ✅ Technical documentation (SEO guides qualify)
     - ✅ Stable URL structure

2. **Application Details**
   ```
   URL: https://omar-corral.com/seo-resources/
   Email: your-email@domain.com
   Repository: https://github.com/omac049/oc-personal
   Description: Comprehensive SEO resource center with guides, tools, and best practices
   ```

3. **Wait for Approval**
   - Typically takes 1-2 weeks
   - Algolia will create and maintain the search index
   - Free service for qualifying documentation

### Option 2: Self-Hosted Crawler (Advanced)

If DocSearch application is not approved, set up your own crawler:

1. **Install Algolia DocSearch Scraper**
   ```bash
   # Using Docker
   docker run -it --env-file=.env -e "CONFIG=$(cat config.json | jq -r tostring)" algolia/docsearch-scraper
   ```

2. **Create Configuration File** (`config.json`):
   ```json
   {
     "index_name": "seo-resources",
     "start_urls": [
       "https://omar-corral.com/seo-resources/"
     ],
     "sitemap_urls": [
       "https://omar-corral.com/seo-resources/sitemap.xml"
     ],
     "selectors": {
       "lvl0": "header h1",
       "lvl1": "article h1",
       "lvl2": "article h2",
       "lvl3": "article h3",
       "lvl4": "article h4",
       "lvl5": "article h5",
       "text": "article p, article li, article td"
     }
   }
   ```

3. **Environment Variables** (`.env`):
   ```env
   APPLICATION_ID=ZLQ21UNSR7
   API_KEY=your-admin-api-key
   ```

## 🔄 Transition Process

### Step 1: Keep Local Search as Fallback
Current local search configuration provides immediate functionality while setting up Algolia.

### Step 2: Test Algolia Configuration
Once the index is created, uncomment the Algolia configuration in `docusaurus.config.ts`:

```typescript
// Remove comment blocks around algolia configuration
algolia: {
  appId: 'ZLQ21UNSR7',
  apiKey: 'c3a190e475e64ffda0f8bbd9a40e69c1',
  indexName: 'seo-resources',
  // ... rest of configuration
},
```

### Step 3: Remove Local Search Plugin
Once Algolia is working, remove the local search plugin:

```typescript
// Remove this plugin from docusaurus.config.ts
plugins: [
  [
    require.resolve("@easyops-cn/docusaurus-search-local"),
    { /* configuration */ },
  ],
],
```

## 🧪 Testing Search Functionality

### Local Search (Current)
- Search functionality available at: `http://localhost:3000`
- Uses built-in indexing of all documentation content
- Provides instant search with highlighting
- No external dependencies

### Algolia Search (Future)
- Enhanced search with typo tolerance
- Advanced filtering and faceting
- Search analytics and insights
- Better performance for large content volumes

## 📊 Search Analytics

Once Algolia is set up, you'll have access to:
- Search query analytics
- Popular search terms
- Search success/failure rates
- User search behavior insights

## 🔧 Troubleshooting

### Common Issues:

1. **Search not appearing**
   - Verify plugin is installed: `npm list @easyops-cn/docusaurus-search-local`
   - Check build logs for errors
   - Ensure content is being indexed

2. **Algolia index not found**
   - Verify index name matches configuration
   - Check if index has been created and populated
   - Test API key permissions

3. **Search results not relevant**
   - Review search configuration
   - Adjust selector mappings
   - Update content structure for better indexing

## 📞 Support Resources

- **Algolia DocSearch**: https://docsearch.algolia.com/
- **Docusaurus Search**: https://docusaurus.io/docs/search
- **Local Search Plugin**: https://github.com/easyops-cn/docusaurus-search-local

---

## ✅ Action Items

1. **Immediate** (Completed ✅)
   - [x] Install and configure local search plugin
   - [x] Build and test search functionality
   - [x] Document current setup

2. **Short Term** (1-2 weeks)
   - [ ] Apply for Algolia DocSearch program
   - [ ] Fix broken internal links
   - [ ] Test search on production site

3. **Long Term** (After approval)
   - [ ] Transition to Algolia DocSearch
   - [ ] Set up search analytics tracking
   - [ ] Optimize search configuration based on usage data
