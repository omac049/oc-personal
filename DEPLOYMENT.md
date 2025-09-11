# 🚀 GitHub Pages Deployment Guide for omar-corral.com

## Prerequisites

1. ✅ Custom domain: `omar-corral.com` 
2. ✅ GitHub repository: `omac049/oc-personal`
3. ✅ Next.js static export configuration
4. ✅ GitHub Actions workflow
5. ✅ CNAME file for custom domain

## Deployment Steps

### 1. Repository Setup
- Ensure the main branch is set as the source for GitHub Pages
- Enable GitHub Pages in repository settings
- Set custom domain to `omar-corral.com`

### 2. DNS Configuration
Configure your domain registrar to point to GitHub Pages:

**A Records (IPv4):**
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**AAAA Records (IPv6):**
```
2606:50c0:8000::153
2606:50c0:8001::153
2606:50c0:8002::153
2606:50c0:8003::153
```

**Or use CNAME record:**
```
CNAME: omac049.github.io
```

### 3. GitHub Pages Settings
1. Go to repository Settings > Pages
2. Source: Deploy from a branch
3. Branch: `gh-pages` (created by GitHub Actions)
4. Custom domain: `omar-corral.com`
5. Enforce HTTPS: ✅ Enabled

### 4. Analytics Setup (Required for Production)
Update `src/data/seo.ts` with real analytics IDs:

```typescript
analytics: {
  googleAnalytics: "G-YOUR-ACTUAL-ID",
  googleTagManager: "GTM-YOUR-ID", 
  googleSearchConsole: "google-site-verification=YOUR-CODE",
  bingWebmaster: "msvalidate.01=YOUR-BING-CODE",
  facebookPixel: "YOUR-PIXEL-ID"
}
```

### 5. SEO Verification Setup

**Google Search Console:**
1. Add property for `omar-corral.com`
2. Use HTML tag verification method
3. Add verification code to `googleSearchConsole` in seo.ts
4. Submit sitemap: `https://omar-corral.com/sitemap.xml`

**Bing Webmaster Tools:**
1. Add site `omar-corral.com`
2. Use meta tag verification
3. Add verification code to `bingWebmaster` in seo.ts

### 6. Testing Checklist

**Before Deployment:**
- [ ] Run `npm run build` locally without errors
- [ ] Test all routes in development (`npm run dev`)
- [ ] Verify all SEO metadata is correct
- [ ] Check all external links work
- [ ] Validate structured data with Google Rich Results Test

**After Deployment:**
- [ ] Site accessible at `https://omar-corral.com`
- [ ] All pages load correctly
- [ ] Sitemap accessible: `/sitemap.xml`
- [ ] Robots.txt accessible: `/robots.txt`
- [ ] RSS feed accessible: `/rss.xml`
- [ ] Web manifest accessible: `/manifest.json`
- [ ] HTTPS certificate working
- [ ] Mobile-friendly test passes
- [ ] Core Web Vitals are green
- [ ] Structured data validates
- [ ] Analytics tracking works

## Automatic Deployment

The site automatically deploys when:
- Pushing to the `main` branch
- Pull request is merged to `main`

**Workflow location:** `.github/workflows/deploy.yml`

## Manual Deployment

If needed, trigger manual deployment:

```bash
# Build and test locally
npm run build:production
npm run serve

# Force workflow run
git commit --allow-empty -m "Force deployment"
git push origin main
```

## Performance Monitoring

**Tools to check after deployment:**
1. [Google PageSpeed Insights](https://pagespeed.web.dev/)
2. [GTmetrix](https://gtmetrix.com/)
3. [Google Rich Results Test](https://search.google.com/test/rich-results)
4. [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
5. [Schema.org Validator](https://validator.schema.org/)

## SEO Submission Checklist

**Search Engines:**
- [ ] Submit to Google Search Console
- [ ] Submit to Bing Webmaster Tools
- [ ] Submit sitemap to both platforms
- [ ] Request indexing for main pages

**Social Platforms:**
- [ ] Test Open Graph with Facebook Debugger
- [ ] Test Twitter Cards with Twitter Card Validator
- [ ] Update LinkedIn profile with website URL

## Monitoring & Maintenance

**Weekly:**
- Check Google Search Console for crawl errors
- Monitor Core Web Vitals performance
- Review analytics for traffic patterns

**Monthly:**
- Update sitemap if content changes
- Review and update meta descriptions
- Check for broken links
- Update structured data if services change

## Troubleshooting

**Common Issues:**

1. **Site not loading:**
   - Check DNS propagation (use whatsmydns.net)
   - Verify CNAME file contains only `omar-corral.com`
   - Check GitHub Pages settings

2. **Build failing:**
   - Check GitHub Actions logs
   - Verify Node.js version compatibility
   - Test build locally first

3. **SEO issues:**
   - Validate all URLs use https://omar-corral.com
   - Check robots.txt is accessible
   - Verify sitemap.xml loads correctly

4. **Analytics not working:**
   - Confirm analytics IDs are correct
   - Check browser dev tools for tracking
   - Verify domain matches analytics property

## Production URLs

- **Main Site:** https://omar-corral.com
- **Sitemap:** https://omar-corral.com/sitemap.xml
- **Robots:** https://omar-corral.com/robots.txt
- **RSS Feed:** https://omar-corral.com/rss.xml
- **Manifest:** https://omar-corral.com/manifest.json

## Support

For deployment issues:
1. Check GitHub Actions workflow logs
2. Review Next.js build output
3. Test locally with `npm run build && npm run serve`
4. Verify DNS configuration with domain registrar
