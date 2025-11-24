# Algolia SiteSearch with Ask AI Setup Guide

This guide will help you set up Algolia SiteSearch with Ask AI functionality for your Docusaurus site.

## Overview

SiteSearch with Ask AI combines traditional Algolia search with AI-powered conversational search. Users can:
- Search using traditional keyword search
- Ask follow-up questions powered by Algolia's Ask AI
- Get AI-powered answers based on your indexed content

## Prerequisites

✅ **Completed**: Algolia DocSearch is already configured  
✅ **Completed**: SiteSearch packages are installed  
⏳ **Required**: Create an Ask AI Assistant in Algolia Dashboard

## Step 1: Create Ask AI Assistant

1. Go to [Algolia Dashboard](https://dashboard.algolia.com/)
2. Navigate to **"Ask AI"** → **"Assistants"**
3. Click **"Create Assistant"**
4. Configure your assistant:
   - **Name**: "SEO Resource Center Assistant"
   - **Index**: Select `omar_corral_com_zlq21unsr7_pages`
   - **Instructions**: (Optional) Add custom instructions for how the AI should respond
   - **Model**: Choose your preferred model (default is usually fine)
5. Click **"Create"**
6. **Copy the Assistant ID** (you'll need this in the next step)

## Step 2: Configure Assistant ID

You have two options:

### Option A: Environment Variable (Recommended)

1. Create a `.env` file in `seo-resources/` directory:
   ```bash
   ALGOLIA_ASSISTANT_ID=your_assistant_id_here
   ```

2. Update `src/pages/search-ai.tsx` to use the environment variable:
   ```typescript
   const ASSISTANT_ID = process.env.ALGOLIA_ASSISTANT_ID || '';
   ```

3. Add `.env` to `.gitignore` (already done)

### Option B: Direct Configuration

1. Edit `src/pages/search-ai.tsx`
2. Replace the empty string with your Assistant ID:
   ```typescript
   const ASSISTANT_ID = 'your_assistant_id_here';
   ```

## Step 3: Choose Implementation Method

### Method 1: NPM Package (Current Setup)

The components are already set up to use the npm package. This is the recommended approach.

**Files Created**:
- `src/components/SiteSearchWithAskAI.tsx` - Main component
- `src/pages/search-ai.tsx` - Search page
- `src/components/SiteSearchCDN.tsx` - Alternative CDN implementation

### Method 2: CDN Bundle (Alternative)

If you prefer using CDN instead of npm:

1. Add to `docusaurus.config.ts` in the `headTags` section:
   ```typescript
   headTags: [
     {
       tagName: 'link',
       attributes: {
         rel: 'stylesheet',
         href: 'https://unpkg.com/@algolia/sitesearch@latest/dist/search-askai.min.css',
       },
     },
     {
       tagName: 'script',
       attributes: {
         src: 'https://unpkg.com/@algolia/sitesearch@latest/dist/search-askai.min.js',
       },
     },
   ],
   ```

2. Use `SiteSearchCDN` component instead of `SiteSearchWithAskAI`

## Step 4: Test the Implementation

1. Start your development server:
   ```bash
   npm run start
   ```

2. Navigate to: `http://localhost:3000/seo-resources/search-ai`

3. Test the search:
   - Type a search query (e.g., "SEO fundamentals")
   - Try asking an AI question (e.g., "What are the three pillars of SEO?")
   - Press `K` to open search quickly

## Step 5: Customize (Optional)

### Update Search Attributes

The component maps Algolia index attributes to display fields. Current mapping:

```typescript
attributes: {
  primaryText: 'hierarchy.lvl1',    // Page title
  secondaryText: 'content',          // Page content
  tertiaryText: 'hierarchy.lvl0',   // Section name
  url: 'url',                        // Page URL
}
```

To customize, edit `src/components/SiteSearchWithAskAI.tsx`:

```typescript
attributes: {
  primaryText: 'hierarchy.lvl1',      // Main title
  secondaryText: 'content',            // Description/content
  tertiaryText: 'hierarchy.lvl0',      // Category/section
  url: 'url',                          // Link URL
  image: 'imageUrl',                   // Optional: if you have images
}
```

### Customize Styling

SiteSearch includes default styles. To customize:

1. Create `src/css/sitesearch-custom.css`
2. Override SiteSearch CSS variables:
   ```css
   :root {
     --sitesearch-primary-color: #your-color;
     --sitesearch-border-radius: 8px;
     /* Add more customizations */
   }
   ```

3. Import in `docusaurus.config.ts`:
   ```typescript
   theme: {
     customCss: ['./src/css/custom.css', './src/css/sitesearch-custom.css'],
   },
   ```

## Current Configuration

| Setting | Value |
|---------|-------|
| **Application ID** | `ZLQ21UNSR7` |
| **Search API Key** | `c3a190e475e64ffda0f8bbd9a40e69c1` |
| **Index Name** | `omar_corral_com_zlq21unsr7_pages` |
| **Assistant ID** | ⏳ **Required**: Get from Algolia Dashboard |
| **Search Page** | `/seo-resources/search-ai` |
| **Keyboard Shortcut** | `K` |

## Troubleshooting

### Issue: "Ask AI Assistant Required" Message

**Solution**: You haven't set the `assistantId`. Follow Step 2 above.

### Issue: Search Works But AI Doesn't Respond

**Possible Causes**:
1. Assistant ID is incorrect
2. Assistant isn't configured properly in Algolia Dashboard
3. Index doesn't have enough content for AI to answer

**Solution**:
1. Verify Assistant ID matches Algolia Dashboard
2. Check Assistant configuration in dashboard
3. Ensure crawler has indexed your content

### Issue: Component Doesn't Load

**Solution**:
1. Check browser console for errors
2. Verify npm packages are installed: `npm install @algolia/sitesearch algoliasearch`
3. If using CDN, ensure scripts are loaded in `<head>`

### Issue: Styling Conflicts

**Solution**:
1. Check for CSS conflicts with Docusaurus theme
2. Use CSS specificity to override SiteSearch styles
3. Consider using CSS modules for component-specific styles

## Integration Options

### Option 1: Standalone Search Page (Current)

- Accessible at `/seo-resources/search-ai`
- Link added to navbar
- Full-page search experience

### Option 2: Embed in Existing Page

Add to any page:

```tsx
import SiteSearchWithAskAI from '@site/src/components/SiteSearchWithAskAI';

<SiteSearchWithAskAI 
  assistantId="your_assistant_id"
  placeholder="Search..."
/>
```

### Option 3: Replace Default DocSearch

If you want to replace the default DocSearch:

1. Remove `algolia` config from `docusaurus.config.ts`
2. Create a custom navbar item with SiteSearch
3. Use `SiteSearchWithAskAI` component

## Resources

- [SiteSearch Documentation](https://sitesearch.algolia.com/docs/experiences/search-askai)
- [Algolia Ask AI Documentation](https://www.algolia.com/doc/guides/ai/)
- [Docusaurus Custom Pages](https://docusaurus.io/docs/creating-pages)
- [Algolia Dashboard](https://dashboard.algolia.com/)

## Next Steps

1. ✅ Create Ask AI Assistant in Algolia Dashboard
2. ✅ Configure Assistant ID in `search-ai.tsx`
3. ✅ Test search functionality
4. ✅ Customize styling (optional)
5. ✅ Deploy and verify production

---

**Note**: The Assistant ID is sensitive and should not be committed to git if using direct configuration. Use environment variables for production deployments.

