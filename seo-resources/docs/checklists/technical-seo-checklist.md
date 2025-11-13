---
sidebar_position: 2
title: Technical SEO Checklist
description: Complete technical foundation audit for crawlability, indexability, site speed, and mobile optimization
---

# Technical SEO Checklist

## 🎯 Overview

This comprehensive technical SEO checklist ensures your website has a solid foundation for search engine crawling, indexing, and ranking. Use this checklist for website launches, major redesigns, migrations, or quarterly technical audits.

:::tip Priority System
- 🔴 **Critical**: Fix immediately - blocking indexing or causing major issues
- 🟡 **High Priority**: Significant SEO impact - address within 1-2 weeks  
- 🟢 **Optimization**: Incremental improvements - schedule when resources allow
:::

---

## 📂 1. Site Architecture & Crawlability

### Robots.txt Configuration
- [ ] 🔴 Verify robots.txt exists at `domain.com/robots.txt`
- [ ] 🔴 Confirm robots.txt isn't blocking important pages
- [ ] 🔴 Ensure sitemap location is declared in robots.txt
- [ ] 🟡 Check for outdated disallow rules from staging/development
- [ ] 🟢 Add specific user-agent directives if needed (e.g., GPTBot)

**Tool:** [Robots.txt Tester](https://support.google.com/webmasters/answer/6062598) in Google Search Console

### XML Sitemaps
- [ ] 🔴 Verify XML sitemap exists and is accessible
- [ ] 🔴 Submit sitemap to Google Search Console & Bing Webmaster Tools
- [ ] 🔴 Ensure sitemap only includes indexable pages (no 404s, redirects, or blocked URLs)
- [ ] 🟡 Limit each sitemap to 50,000 URLs or 50MB uncompressed
- [ ] 🟡 Implement sitemap index file if multiple sitemaps exist
- [ ] 🟡 Include priority and lastmod tags accurately
- [ ] 🟢 Create separate sitemaps for images, videos, and news content
- [ ] 🟢 Set up automatic sitemap generation on content publish

**Best Practice:** Update sitemaps automatically when content changes

### URL Structure
- [ ] 🔴 Use HTTPS across entire site (no mixed content)
- [ ] 🔴 Implement consistent URL structure (trailing slash policy)
- [ ] 🟡 Keep URLs short, descriptive, and keyword-rich
- [ ] 🟡 Use hyphens (not underscores) for word separation
- [ ] 🟡 Implement proper URL hierarchies reflecting site structure
- [ ] 🟢 Avoid dynamic URL parameters when possible
- [ ] 🟢 Use lowercase letters in all URLs

**Example Good URL:** `https://example.com/seo-services/local-seo/`  
**Example Bad URL:** `https://example.com/page.php?id=123&category=services`

### Redirect Management
- [ ] 🔴 Audit and fix all 404 errors in Google Search Console
- [ ] 🔴 Implement 301 redirects for all moved or deleted pages
- [ ] 🔴 Avoid redirect chains (A → B → C)
- [ ] 🟡 Review and consolidate unnecessary redirects
- [ ] 🟡 Ensure redirects point to relevant replacement content
- [ ] 🟢 Set up 410 status codes for permanently removed content
- [ ] 🟢 Document redirect mapping in a spreadsheet

**Tool:** [Screaming Frog](https://www.screamingfrogseoseo.com/) for comprehensive redirect audit

### Internal Linking
- [ ] 🔴 Ensure all important pages are reachable within 3 clicks from homepage
- [ ] 🟡 Implement breadcrumb navigation on all pages
- [ ] 🟡 Use descriptive anchor text (avoid "click here")
- [ ] 🟡 Link from high-authority pages to important content
- [ ] 🟢 Create topic clusters with pillar pages and supporting content
- [ ] 🟢 Audit and fix broken internal links
- [ ] 🟢 Balance link equity distribution

**Best Practice:** Implement a clear topical hierarchy with strategic internal linking

---

## ⚡ 2. Core Web Vitals & Performance

### Largest Contentful Paint (LCP)
- [ ] 🔴 Achieve LCP under 2.5 seconds on mobile and desktop
- [ ] 🟡 Optimize server response time (TTFB < 600ms)
- [ ] 🟡 Implement efficient image loading (lazy loading, WebP format)
- [ ] 🟡 Preload critical resources (fonts, hero images)
- [ ] 🟢 Use a CDN for faster content delivery
- [ ] 🟢 Minimize render-blocking JavaScript and CSS

**Target:** LCP < 2.5s for 75% of page loads

### First Input Delay (FID) / Interaction to Next Paint (INP)
- [ ] 🔴 Achieve FID under 100ms (or INP < 200ms)
- [ ] 🟡 Minimize main thread work
- [ ] 🟡 Defer non-critical JavaScript
- [ ] 🟡 Break up long tasks into smaller chunks
- [ ] 🟢 Use web workers for heavy computations
- [ ] 🟢 Implement code splitting for JavaScript bundles

**Target:** FID < 100ms (INP < 200ms) for 75% of page loads

### Cumulative Layout Shift (CLS)
- [ ] 🔴 Achieve CLS score under 0.1
- [ ] 🟡 Set explicit width and height for images and embeds
- [ ] 🟡 Reserve space for ads and dynamic content
- [ ] 🟡 Avoid inserting content above existing content
- [ ] 🟢 Use CSS aspect-ratio for responsive images
- [ ] 🟢 Preload fonts to avoid FOIT/FOUT

**Target:** CLS < 0.1 for 75% of page loads

### Page Speed Optimization
- [ ] 🔴 Enable GZIP or Brotli compression
- [ ] 🔴 Minify HTML, CSS, and JavaScript
- [ ] 🟡 Implement browser caching with proper cache headers
- [ ] 🟡 Optimize image file sizes (aim for < 100KB per image)
- [ ] 🟡 Remove unused CSS and JavaScript
- [ ] 🟢 Implement HTTP/2 or HTTP/3
- [ ] 🟢 Use resource hints (preconnect, prefetch, dns-prefetch)

**Tool:** [PageSpeed Insights](https://pagespeed.web.dev/), [WebPageTest](https://www.webpagetest.org/)

---

## 📱 3. Mobile Optimization

### Mobile-First Indexing
- [ ] 🔴 Verify mobile version contains same content as desktop
- [ ] 🔴 Ensure mobile site is fully crawlable (no blocked resources)
- [ ] 🔴 Use responsive design or dynamic serving (not separate m. URLs)
- [ ] 🟡 Test mobile usability in Google Search Console
- [ ] 🟡 Verify structured data exists on mobile version
- [ ] 🟢 Optimize tap targets (minimum 48x48 pixels)
- [ ] 🟢 Ensure font sizes are readable without zooming

**Tool:** [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

### Responsive Design
- [ ] 🔴 Implement viewport meta tag correctly
- [ ] 🔴 Avoid horizontal scrolling on mobile devices
- [ ] 🟡 Use responsive images with srcset attribute
- [ ] 🟡 Test across multiple devices and screen sizes
- [ ] 🟡 Ensure forms are easy to complete on mobile
- [ ] 🟢 Implement touch-friendly navigation
- [ ] 🟢 Avoid mobile-only pop-ups and interstitials

**Best Practice:** Test on real devices, not just browser emulators

### Mobile Performance
- [ ] 🔴 Achieve PageSpeed Insights mobile score &gt; 85
- [ ] 🟡 Optimize for 3G/4G network speeds
- [ ] 🟡 Reduce mobile page weight to &lt; 1MB
- [ ] 🟢 Implement Progressive Web App (PWA) features
- [ ] 🟢 Use AMP for content pages (if appropriate)

---

## 🏷️ 4. Structured Data & Schema Markup

### Schema Implementation
- [ ] 🔴 Implement Organization schema on homepage
- [ ] 🟡 Add appropriate schema for content type (Article, Product, FAQ, etc.)
- [ ] 🟡 Validate all structured data using Rich Results Test
- [ ] 🟡 Implement breadcrumb schema on all pages
- [ ] 🟢 Add Local Business schema (if applicable)
- [ ] 🟢 Implement HowTo or FAQ schema where relevant
- [ ] 🟢 Add Review/Rating schema for products or services

**Tool:** [Rich Results Test](https://search.google.com/test/rich-results), [Schema Markup Validator](https://validator.schema.org/)

### JSON-LD Format
- [ ] 🔴 Use JSON-LD format (preferred by Google)
- [ ] 🟡 Place schema in `<head>` section or end of `<body>`
- [ ] 🟡 Ensure schema data matches visible page content
- [ ] 🟢 Implement multiple schema types when appropriate
- [ ] 🟢 Keep schema updated when page content changes

**Best Practice:** JSON-LD is easier to maintain than microdata or RDFa

---

## 🔒 5. Security & HTTPS

### SSL/TLS Configuration
- [ ] 🔴 Install valid SSL certificate (not self-signed or expired)
- [ ] 🔴 Force HTTPS site-wide (301 redirect HTTP to HTTPS)
- [ ] 🔴 Update all internal links to HTTPS
- [ ] 🟡 Fix mixed content warnings
- [ ] 🟡 Implement HSTS (HTTP Strict Transport Security)
- [ ] 🟢 Use TLS 1.2 or higher (disable older protocols)
- [ ] 🟢 Configure secure cipher suites

**Tool:** [SSL Labs Server Test](https://www.ssllabs.com/ssltest/)

### Security Headers
- [ ] 🟡 Implement Content Security Policy (CSP) header
- [ ] 🟡 Add X-Frame-Options header (protect against clickjacking)
- [ ] 🟡 Set X-Content-Type-Options to nosniff
- [ ] 🟢 Configure Referrer-Policy header
- [ ] 🟢 Implement Permissions-Policy for API access control

**Tool:** [Security Headers Scanner](https://securityheaders.com/)

---

## 📊 6. Indexing & Search Console Setup

### Google Search Console
- [ ] 🔴 Verify property ownership in Google Search Console
- [ ] 🔴 Submit XML sitemap
- [ ] 🔴 Review Index Coverage report for errors
- [ ] 🟡 Set up email alerts for critical issues
- [ ] 🟡 Review Enhancement reports (Core Web Vitals, Mobile Usability)
- [ ] 🟡 Monitor Manual Actions section
- [ ] 🟢 Use URL Inspection tool to debug indexing issues
- [ ] 🟢 Submit updated pages for re-indexing

**Access:** [Google Search Console](https://search.google.com/search-console)

### Bing Webmaster Tools
- [ ] 🟡 Verify site ownership in Bing Webmaster Tools
- [ ] 🟡 Submit XML sitemap
- [ ] 🟡 Review crawl errors and indexing status
- [ ] 🟢 Enable IndexNow for faster indexing

**Access:** [Bing Webmaster Tools](https://www.bing.com/webmasters)

### Meta Robots & X-Robots-Tag
- [ ] 🔴 Remove "noindex" from important pages
- [ ] 🔴 Ensure staging/development sites are noindexed
- [ ] 🟡 Use "nofollow" appropriately for untrusted links
- [ ] 🟢 Implement X-Robots-Tag for PDF and non-HTML files
- [ ] 🟢 Use canonical tags to consolidate duplicate content

---

## 🗂️ 7. Technical Content Elements

### Canonicalization
- [ ] 🔴 Implement self-referencing canonical tags on all pages
- [ ] 🔴 Use absolute URLs in canonical tags
- [ ] 🟡 Resolve duplicate content issues with canonicals
- [ ] 🟡 Ensure canonical points to indexable version (not 404 or blocked)
- [ ] 🟢 Handle URL parameters with canonical tags

**Best Practice:** Every page should have a canonical tag, even if self-referencing

### Pagination & Multi-Page Content
- [ ] 🟡 Implement proper pagination structure
- [ ] 🟡 Use `rel="prev"` and `rel="next"` for paginated series (optional)
- [ ] 🟡 Allow search engines to crawl all paginated pages
- [ ] 🟢 Consider "View All" page with canonical
- [ ] 🟢 Implement infinite scroll with pagination fallback

### International & Multilingual SEO
- [ ] 🔴 Implement hreflang tags for multi-language/region sites
- [ ] 🔴 Use correct hreflang language and region codes
- [ ] 🟡 Create language-specific sitemaps
- [ ] 🟡 Use appropriate URL structure (subdomain, subdirectory, or ccTLD)
- [ ] 🟢 Implement language selector that's crawlable
- [ ] 🟢 Ensure consistent content across language versions

**Tool:** [Hreflang Tags Testing Tool](https://www.aleydasolis.com/english/international-seo-tools/hreflang-tags-generator/)

---

## 🔍 8. Crawl Budget Optimization

### Server Configuration
- [ ] 🟡 Monitor server response time (aim for < 200ms)
- [ ] 🟡 Optimize database queries for dynamic pages
- [ ] 🟡 Implement effective caching strategy
- [ ] 🟢 Use CDN for static assets
- [ ] 🟢 Configure server to handle high crawl rates

### Crawl Efficiency
- [ ] 🟡 Block low-value pages from crawling (faceted navigation, search results)
- [ ] 🟡 Fix crawl errors identified in Search Console
- [ ] 🟢 Monitor Googlebot crawl rate and adjust if needed
- [ ] 🟢 Review crawl stats in Google Search Console monthly

---

## 📋 Technical SEO Audit Workflow

### Pre-Audit Preparation
1. **Gather Access**
   - Google Search Console
   - Google Analytics
   - Website hosting/CMS
   - CDN/caching services

2. **Set Up Tools**
   - Screaming Frog SEO Spider
   - PageSpeed Insights
   - Google Search Console
   - Chrome DevTools

### Audit Execution
1. **Crawl Website** - Use Screaming Frog to crawl entire site
2. **Analyze Data** - Review crawl data for issues
3. **Test Performance** - Run PageSpeed Insights on key pages
4. **Review Search Console** - Check for errors and warnings
5. **Document Findings** - Create prioritized issue list

### Post-Audit Actions
1. **Create Action Plan** - Prioritize issues by impact
2. **Assign Responsibilities** - Determine who fixes each issue
3. **Set Timeline** - Establish realistic implementation schedule
4. **Track Progress** - Monitor resolution of identified issues
5. **Re-Test** - Verify fixes are effective

---

## 🎯 Key Performance Indicators

Track these metrics to measure technical SEO success:

### Indexing & Crawling
- **Indexed Pages:** Number of pages in Google's index
- **Crawl Budget:** Pages crawled per day
- **Crawl Errors:** 404 errors, server errors, redirect chains

### Performance
- **Core Web Vitals:** LCP, FID/INP, CLS scores
- **Page Load Time:** Time to fully load pages
- **TTFB:** Server response time

### Mobile
- **Mobile Usability Score:** Issues identified in Search Console
- **Mobile PageSpeed:** Mobile performance score

### Technical Health
- **HTTPS Coverage:** Percentage of pages on HTTPS
- **Structured Data:** Pages with valid schema markup
- **XML Sitemap Coverage:** Percentage of site in sitemap

---

## 🔗 Additional Resources

- [Google's Search Central Documentation](https://developers.google.com/search/docs)
- [Web.dev Performance Guides](https://web.dev/performance/)
- [Core Web Vitals Guide](https://web.dev/vitals/)
- [Mobile-First Indexing Best Practices](https://developers.google.com/search/mobile-sites/)

---

## 📌 Quick Win Checklist

Start with these high-impact, relatively easy fixes:

- [ ] Submit XML sitemap to Google Search Console
- [ ] Fix broken internal links
- [ ] Implement HTTPS site-wide
- [ ] Add Organization schema to homepage
- [ ] Enable GZIP compression
- [ ] Optimize image file sizes
- [ ] Fix mobile usability issues
- [ ] Remove "noindex" from important pages
- [ ] Implement self-referencing canonical tags
- [ ] Set up Google Search Console alerts

---

**Last Updated:** November 2024  
**Audit Frequency:** Quarterly or after major site changes  
**Maintained By:** Omar Corral
