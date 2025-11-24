# Algolia Crawler Troubleshooting Guide

## Issue: "No results found" in Search

If you're seeing "No results found" when searching, follow these steps:

## Step 1: Verify Index is Populated

1. Go to [Algolia Dashboard](https://dashboard.algolia.com/)
2. Navigate to **Search** → **Indices**
3. Find your index: `omar_corral_com_zlq21unsr7_pages`
4. Check the **Records** count
   - **If 0 records**: The crawler hasn't run or failed
   - **If records exist**: Continue to Step 2

## Step 2: Test Crawler Configuration

1. In Algolia Dashboard, go to **Data sources** → **Crawlers**
2. Select your crawler
3. Click **"URL Tester"** tab
4. Enter a test URL: `https://omar-corral.com/seo-resources/docs/getting-started`
5. Click **"Test"**
6. Review the extracted records:
   - **If no records extracted**: Selectors don't match your HTML structure
   - **If records extracted**: Configuration is correct, proceed to Step 3

## Step 3: Check Crawler Logs

1. In the crawler dashboard, go to **"Logs"** tab
2. Look for errors or warnings:
   - **404 errors**: URLs don't exist
   - **Timeout errors**: Site is slow or unreachable
   - **Extraction errors**: Selectors don't match HTML

## Step 4: Verify Site Accessibility

1. Ensure your site is publicly accessible
2. Check `robots.txt` allows Algolia crawler:
   ```
   User-agent: *
   Allow: /
   ```
3. Verify sitemap is accessible: `https://omar-corral.com/seo-resources/sitemap.xml`

## Step 5: Run Manual Crawl

1. In crawler dashboard, click **"Run"** button
2. Wait for crawl to complete (5-15 minutes)
3. Check logs for completion status
4. Verify records were added to index

## Step 6: Test Search Again

After crawl completes:
1. Wait 1-2 minutes for index to update
2. Test search on your live site
3. Use diagnostic script in browser console if needed

## Common Issues & Solutions

### Issue: Selectors Don't Match HTML

**Symptom**: URL Tester shows 0 records extracted

**Solution**: 
1. Inspect your live site's HTML structure
2. Update selectors in crawler config to match actual HTML
3. Common Docusaurus v3 selectors:
   - Content: `.theme-doc-markdown p, .theme-doc-markdown li`
   - Headings: `.theme-doc-markdown h1, .theme-doc-markdown h2`
   - Navigation: `.theme-doc-sidebar-container a[class*="active"]`

### Issue: Crawler Can't Access Site

**Symptom**: Logs show 404 or timeout errors

**Solution**:
1. Verify site is live and publicly accessible
2. Check firewall/security settings
3. Ensure `robots.txt` allows crawler
4. Test URLs manually in browser

### Issue: Index Settings Mismatch

**Symptom**: Records exist but search doesn't work

**Solution**:
1. Verify `indexName` matches in both:
   - Crawler config: `omar_corral_com_zlq21unsr7_pages`
   - Docusaurus config: `omar_corral_com_zlq21unsr7_pages`
2. Check index settings match crawler config
3. Re-run crawler to apply settings

### Issue: Records Extracted But Not Searchable

**Symptom**: Records exist but search returns nothing

**Solution**:
1. Check `searchableAttributes` in index settings
2. Verify content is being extracted (check record preview)
3. Ensure `recordVersion: 'v3'` matches Docusaurus v3

## Quick Diagnostic Checklist

- [ ] Index has records (> 0)
- [ ] URL Tester extracts records
- [ ] Crawler logs show no errors
- [ ] Site is publicly accessible
- [ ] Sitemap is accessible
- [ ] Crawler ran successfully
- [ ] Index name matches in both configs
- [ ] Search API key is correct in Docusaurus config

## Still Not Working?

1. **Check Browser Console**: Look for JavaScript errors
2. **Use Diagnostic Script**: Run `search-diagnostic-script.js` in browser console
3. **Contact Algolia Support**: docsearch@algolia.com
4. **Check Docusaurus Docs**: https://docusaurus.io/docs/search

## Testing Your Configuration

Use this test URL in URL Tester:
```
https://omar-corral.com/seo-resources/docs/getting-started
```

Expected result:
- At least 1 record extracted
- Record has `lvl1` (page title)
- Record has `content` (page text)
- Record has `url` (page URL)

