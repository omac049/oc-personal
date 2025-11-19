# 🚀 Deployment Guide - Omar Corral Portfolio & SEO Resource Center

**📋 CONSOLIDATED DEPLOYMENT GUIDE** - This is the official, unified deployment documentation for both sites.

This guide covers the complete deployment process for both the main portfolio site and the SEO Resource Center.

## 📋 Overview

Our deployment setup now handles both sites efficiently:
- **Main Portfolio**: Next.js site at `https://omar-corral.com`
- **SEO Resource Center**: Docusaurus site at `https://omar-corral.com/seo-resources/`

## 🔧 Technical Setup

### Single Deployment Workflow
- **File**: `.github/workflows/deploy.yml`
- **Trigger**: Push to `main` branch or manual dispatch
- **Output**: Combined deployment to GitHub Pages

### Configuration Improvements
1. **Dynamic baseUrl**: Automatically adjusts between development (`/`) and production (`/seo-resources/`)
2. **Environment-aware builds**: Uses `NODE_ENV=production` for optimal builds
3. **Streamlined workflow**: Single deployment handles both sites

## 🚀 Deployment Process

### Automatic Deployment
1. **Push to main branch**:
   ```bash
   git add .
   git commit -m "Your changes"
   git push origin main
   ```

2. **GitHub Actions automatically**:
   - Builds the Next.js portfolio
   - Builds the Docusaurus SEO Resource Center
   - Combines both sites into single deployment
   - Deploys to GitHub Pages

### Manual Deployment
You can trigger deployment manually from GitHub:
1. Go to **Actions** tab in your repository
2. Select **Deploy Portfolio & SEO Resource Center**
3. Click **Run workflow**

## 🛠️ Development Commands

### Main Portfolio (Next.js)
```bash
# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm start
```

### SEO Resource Center (Docusaurus)
```bash
cd seo-resources

# Development server
npm run dev
# or
npm run start

# Production build
npm run build:prod

# Preview production build
npm run serve:build

# Test links and build
npm run test:links
```

## 🔍 Troubleshooting

### Common Issues & Solutions

#### 1. **baseUrl Configuration Error**
**Error**: "A very common reason is a wrong site baseUrl configuration"

**Solution**: The configuration now automatically handles this:
- Development: `baseUrl: '/'`
- Production: `baseUrl: '/seo-resources/'`

#### 2. **Build Failures**
**Check**:
- Node.js version (should be 18+)
- Dependencies are installed (`npm ci`)
- No TypeScript errors (`npm run typecheck`)

#### 3. **Deployment Not Reflecting Changes**
**Steps**:
1. Check GitHub Actions for build status
2. Clear browser cache
3. Verify commit was pushed to `main` branch
4. Check GitHub Pages settings

#### 4. **SEO Resource Center Not Loading**
**Verify**:
- URL should be `https://omar-corral.com/seo-resources/`
- Check if build completed successfully
- Verify `.nojekyll` file exists in deployment

## 📊 Build Status & Monitoring

### Check Deployment Status
1. **GitHub Actions**: Repository → Actions tab
2. **GitHub Pages**: Repository → Settings → Pages
3. **Live Sites**:
   - Main: https://omar-corral.com
   - SEO Resources: https://omar-corral.com/seo-resources/

### Performance Monitoring
- **Lighthouse reports** are generated automatically
- **Core Web Vitals** tracking in place
- **SEO audits** run on each deployment

## 🔄 Workflow Benefits

### Before (Multiple Workflows)
- ❌ Two separate deployment workflows
- ❌ Potential conflicts and race conditions
- ❌ Manual coordination required
- ❌ Complex baseUrl management

### After (Single Optimized Workflow)
- ✅ Single, streamlined deployment process
- ✅ Automatic environment detection
- ✅ No workflow conflicts
- ✅ Simplified maintenance
- ✅ Better error handling and logging

## 🎯 Best Practices

### For Development
1. **Test locally** before pushing:
   ```bash
   # Test main site
   cd 
   
   # Test SEO resources
   cd seo-resources && npm run build:prod && npm run serve
   ```

2. **Use descriptive commit messages**:
   ```bash
   git commit -m "feat: add new SEO guide section"
   git commit -m "fix: resolve mobile navigation issue"
   git commit -m "docs: update deployment instructions"
   ```

3. **Check both sites** after deployment:
   - Main portfolio functionality
   - SEO Resource Center navigation
   - Search functionality
   - Mobile responsiveness

### For Content Updates
1. **SEO Resources**: Edit files in `seo-resources/docs/`
2. **Main Portfolio**: Edit files in `src/`
3. **Both sites deploy together** automatically

## 🔗 Related Files

- **Main Workflow**: `.github/workflows/deploy.yml`
- **Docusaurus Config**: `seo-resources/docusaurus.config.ts`
- **Next.js Config**: `next.config.js`
- **Package Scripts**: `seo-resources/package.json`

## 💡 Pro Tips

1. **Preview changes locally** before pushing
2. **Use workflow dispatch** for manual deployments when needed
3. **Monitor GitHub Actions** for any build issues
4. **Keep dependencies updated** for security and performance
5. **Test on mobile** - most SEO traffic is mobile-first

---

**Need help?** Check the GitHub Actions logs or create an issue in the repository.
