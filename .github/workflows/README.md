# 🚀 GitHub Actions Deployment Workflow

This repository uses GitHub Actions for automated deployment to GitHub Pages.

## 📋 Workflow Overview

The deployment workflow (`deploy.yml`) automatically:

1. **🔨 Builds** the Next.js portfolio application
2. **🔍 Lints** the code for quality assurance
3. **📤 Uploads** the build artifacts
4. **🚀 Deploys** to GitHub Pages

## ⚡ Triggers

The workflow runs automatically:
- 📝 **On push to main branch** - Any commit to `main` triggers deployment
- 🎯 **Manual dispatch** - Can be triggered manually from the Actions tab

## 🛠️ Build Process

1. **Environment Setup**
   - Ubuntu latest runner
   - Node.js 18
   - NPM cache optimization

2. **Code Quality**
   - ESLint checking (warnings don't fail build)
   - TypeScript type checking

3. **Build & Export**
   - Next.js static export
   - Optimized production build
   - Assets prepared for GitHub Pages

## 🌐 Deployment Configuration

### Next.js Config (`next.config.js`)
```javascript
{
  output: 'export',           // Static site generation
  trailingSlash: true,        // GitHub Pages compatibility
  images: { unoptimized: true }, // No image optimization needed
  assetPrefix: '/oc-personal/', // Repository path
  basePath: '/oc-personal'     // Base URL path
}
```

### GitHub Pages Settings
- **Source**: GitHub Actions
- **Build Tool**: Next.js
- **Output Directory**: `./out`

## 📊 Monitoring

- ✅ **Build Status**: Check the Actions tab for build results
- 🌐 **Live Site**: Automatically deployed to `https://omac049.github.io/oc-personal/`
- 📈 **Performance**: Build times typically 1-2 minutes

## 🔧 Troubleshooting

### Common Issues:
1. **Build Failures**: Check ESLint warnings and TypeScript errors
2. **Deployment Issues**: Verify GitHub Pages settings
3. **Asset Loading**: Ensure `basePath` matches repository name

### Manual Deployment:
```bash
npm run build    # Build the application
npm run deploy   # Deploy using gh-pages
```

## 📁 File Structure

```
.github/workflows/
├── deploy.yml       # Main deployment workflow
└── README.md        # This documentation
```

## 🎯 Features

- 🚀 **Automated deployment** on every push
- 🔍 **Code quality checks** with ESLint
- 📊 **Build status reporting** 
- 🌐 **Live URL output** after successful deployment
- ⚡ **Fast builds** with NPM caching
- 🛡️ **Security** with proper permissions and concurrency controls

---

**Live Portfolio**: [https://omac049.github.io/oc-personal/](https://omac049.github.io/oc-personal/)
