# SiteSearch with Ask AI - Quick Start

## ✅ What's Already Done

1. ✅ Packages installed: `@algolia/sitesearch` and `algoliasearch`
2. ✅ Component created: `src/components/SiteSearchWithAskAI.tsx`
3. ✅ Search page created: `src/pages/search-ai.tsx`
4. ✅ Navbar link added: "AI Search" button in navbar
5. ✅ Configuration ready: Uses your existing Algolia credentials

## 🚀 Quick Setup (3 Steps)

### Step 1: Create Ask AI Assistant

1. Go to [Algolia Dashboard](https://dashboard.algolia.com/)
2. Click **"Ask AI"** → **"Assistants"**
3. Click **"Create Assistant"**
4. Fill in:
   - **Name**: SEO Resource Center Assistant
   - **Index**: `omar_corral_com_zlq21unsr7_pages`
   - **Instructions**: (Optional) "You are a helpful assistant for SEO documentation. Answer questions based on the indexed content."
5. Click **"Create"**
6. **Copy the Assistant ID** (looks like: `UpR727VnXnoG`)

### Step 2: Add Assistant ID

Edit `src/pages/search-ai.tsx`:

```typescript
// Replace this line:
const ASSISTANT_ID = process.env.ALGOLIA_ASSISTANT_ID || '';

// With your Assistant ID:
const ASSISTANT_ID = 'your_assistant_id_here';
```

### Step 3: Test It!

```bash
npm run start
```

Then visit: `http://localhost:3000/seo-resources/search-ai`

## 📍 Access Points

- **Search Page**: `/seo-resources/search-ai`
- **Navbar Link**: "AI Search" button (top right)
- **Keyboard Shortcut**: Press `K` to open search

## 🎯 Current Configuration

| Setting | Value |
|---------|-------|
| Application ID | `ZLQ21UNSR7` |
| Search API Key | `c3a190e475e64ffda0f8bbd9a40e69c1` |
| Index Name | `omar_corral_com_zlq21unsr7_pages` |
| Assistant ID | ⏳ **Add yours** |
| Implementation | CDN (auto-loaded) |

## 🔧 How It Works

The component automatically:
1. Loads SiteSearch CDN scripts when needed
2. Initializes with your Algolia credentials
3. Maps your index attributes for display
4. Enables AI-powered search with your assistant

## 📚 Next Steps

- See `SITESEARCH_SETUP.md` for detailed customization
- Customize styling in `src/css/custom.css`
- Adjust search attributes in `SiteSearchWithAskAI.tsx`

## ❓ Troubleshooting

**"Ask AI Assistant Required" message?**
→ You need to add your Assistant ID (Step 2)

**Search works but AI doesn't respond?**
→ Check Assistant ID is correct and Assistant is configured in dashboard

**Component doesn't load?**
→ Check browser console for errors
→ Verify CDN scripts are loading (check Network tab)

---

**Ready to go!** Just add your Assistant ID and you're done. 🎉

