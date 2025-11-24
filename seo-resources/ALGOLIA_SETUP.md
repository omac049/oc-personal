# Algolia DocSearch Setup Guide

This guide will help you set up and configure Algolia DocSearch for your Docusaurus site.

## Overview

Your Docusaurus site is configured to use Algolia DocSearch for search functionality. This setup includes:

- **Docusaurus Configuration**: Already configured in `docusaurus.config.ts`
- **Crawler Configuration**: Template provided in `algolia-crawler-config.js`
- **Search API Key**: Public key safe to commit (used in Docusaurus config)
- **Write API Key**: Private key for crawler (DO NOT COMMIT)

## Current Configuration

### Docusaurus Config (`docusaurus.config.ts`)

✅ **Application ID**: `ZLQ21UNSR7`  
✅ **Search API Key**: `c3a190e475e64ffda0f8bbd9a40e69c1` (Public, safe to commit)  
✅ **Index Name**: `omar_corral_com_zlq21unsr7_pages`  
✅ **Contextual Search**: Enabled  
✅ **Algolia Insights**: Enabled (for analytics)  
✅ **Search Page**: Available at `/search`

### API Keys

| Key Type | Value | Usage | Safe to Commit? |
|----------|-------|-------|-----------------|
| **Search API Key** | `c3a190e475e64ffda0f8bbd9a40e69c1` | Docusaurus config | ✅ Yes (Public) |
| **Write API Key** | `49f5af2ab8c2675c662b033b7e52c935` | Crawler config | ❌ No (Private) |
| **Admin API Key** | `b1661f0f390e28a7a5b3ee15a0000eed` | Dashboard/admin | ❌ No (Private) |

## Setting Up the Crawler in Algolia Dashboard

The crawler is responsible for indexing your site's content. Follow these steps:

### Step 1: Access Algolia Dashboard

1. Go to [https://dashboard.algolia.com/](https://dashboard.algolia.com/)
2. Log in with your Algolia account
3. Select your application: **ZLQ21UNSR7**

### Step 2: Navigate to Crawlers

1. Click on **"Data sources"** in the left sidebar
2. Click on **"Crawlers"**
3. Find your crawler (or create a new one if needed)

### Step 3: Configure the Crawler

1. Click on your crawler to open it
2. Go to the **"Editor"** tab
3. Copy the configuration from `algolia-crawler-config.js`
4. Paste it into the editor, replacing any existing configuration
5. **Important**: The config file contains your Write API Key - make sure it's correct

### Step 4: Verify Configuration

The crawler config should include:

- **appId**: `ZLQ21UNSR7`
- **apiKey**: `49f5af2ab8c2675c662b033b7e52c935` (Write API Key)
- **startUrls**: 
  - `https://omar-corral.com/seo-resources/`
  - `https://omar-corral.com/seo-resources/docs/`
- **sitemaps**: `https://omar-corral.com/seo-resources/sitemap.xml`
- **indexName**: `omar_corral_com_zlq21unsr7_pages`

### Step 5: Test the Crawler

1. Click **"URL Tester"** in the crawler dashboard
2. Enter a URL from your site (e.g., `https://omar-corral.com/seo-resources/docs/getting-started`)
3. Click **"Test"** to see what records would be extracted
4. Verify the records look correct

### Step 6: Run the Crawler

1. Click **"Save"** to save your configuration
2. Click **"Run"** to start the crawler
3. Wait for the crawl to complete (this may take several minutes)
4. Check the **"Logs"** tab for any errors

### Step 7: Verify Search is Working

1. Build and deploy your Docusaurus site:
   ```bash
   npm run build
   npm run deploy
   ```

2. Visit your site: `https://omar-corral.com/seo-resources/`
3. Click the search icon in the navbar
4. Try searching for content (e.g., "SEO", "getting started")
5. Verify results appear correctly

## Quick Verification Steps

Before troubleshooting, verify these basics:

1. **Check Index Status**:
   - Go to Algolia Dashboard → Search → Indices
   - Find `omar_corral_com_zlq21unsr7_pages`
   - **If 0 records**: Crawler hasn't run or failed - see troubleshooting below
   - **If records exist**: Configuration issue - check index name matches

2. **Test URL Extraction**:
   - Go to Crawler → URL Tester
   - Enter: `https://omar-corral.com/seo-resources/docs/getting-started`
   - Click Test
   - **If 0 records**: Selectors don't match HTML - update crawler config
   - **If records extracted**: Config is correct, run crawler

3. **Verify Configuration Match**:
   - Crawler `indexName`: `omar_corral_com_zlq21unsr7_pages` ✅
   - Docusaurus `indexName`: `omar_corral_com_zlq21unsr7_pages` ✅
   - Both must match exactly!

## Troubleshooting

### Search Returns No Results

If search returns no results, check:

1. **Index is Empty**: The crawler may not have run yet or failed
   - Go to Algolia Dashboard → Indices
   - Check if `omar_corral_com_zlq21unsr7_pages` exists and has records
   - If empty, run the crawler again

2. **Crawler Configuration Issues**:
   - Verify `startUrls` are correct
   - Check that `sitemap.xml` is accessible
   - Review crawler logs for errors

3. **Site Not Publicly Accessible**:
   - Ensure your site is live and publicly accessible
   - The crawler needs to access your production site

### Search Results Show Wrong URLs

If search results show incorrect URLs:

1. Check `replaceSearchResultPathname` in `docusaurus.config.ts`
2. Verify `baseUrl` is set correctly
3. Ensure production URLs match your deployment

### Using the Diagnostic Script

Run the diagnostic script in your browser console:

1. Open `https://omar-corral.com/seo-resources/` in your browser
2. Open Developer Tools (F12)
3. Go to Console tab
4. Copy and paste the contents of `search-diagnostic-script.js`
5. Review the diagnostic output

## Best Practices

### Security

- ✅ **DO** commit the Search API Key (it's public and safe)
- ❌ **DON'T** commit the Write API Key or Admin API Key
- ❌ **DON'T** expose Write/Admin keys in client-side code

### Performance

- The crawler runs automatically on a schedule (set by Algolia)
- You can manually trigger crawls from the dashboard
- Crawls typically take 5-15 minutes depending on site size

### Maintenance

- Monitor crawler logs regularly for errors
- Update crawler config when site structure changes
- Test search functionality after major content updates
- Use Algolia Insights to understand search usage

## Resources

- [Docusaurus Search Documentation](https://docusaurus.io/docs/search#using-algolia-docsearch)
- [Algolia DocSearch Templates](https://docsearch.algolia.com/docs/templates)
- [Algolia Crawler Documentation](https://www.algolia.com/doc/tools/crawler/)
- [Algolia Dashboard](https://dashboard.algolia.com/)

## Support

If you encounter issues:

1. Check the diagnostic script output
2. Review Algolia crawler logs
3. Consult the official documentation links above
4. Contact Algolia support: docsearch@algolia.com

---

**Last Updated**: Configuration follows Docusaurus v2/v3 template best practices from Algolia DocSearch documentation.

