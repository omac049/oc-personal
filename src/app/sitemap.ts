import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const BASE = 'https://omar-corral.com';

// Shared date helpers — avoids repeated `new Date()` calls
const now = new Date('2026-05-06');
const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // ─── Main portfolio ─────────────────────────────────────────────────────
    {
      url: BASE,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE}/case-studies/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE}/services/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE}/services/seo-audit/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE}/services/ai-search-strategy/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE}/oc-mcp/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },

    // ─── SEO Resource Center — root ─────────────────────────────────────────
    {
      url: `${BASE}/seo-resources/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE}/seo-resources/docs/intro`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    // ─── SEO Resources — Getting Started ────────────────────────────────────
    {
      url: `${BASE}/seo-resources/docs/getting-started`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE}/seo-resources/docs/getting-started/seo-fundamentals`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE}/seo-resources/docs/getting-started/how-search-engines-work`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE}/seo-resources/docs/getting-started/seo-pillars`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE}/seo-resources/docs/getting-started/search-intent-optimization`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE}/seo-resources/docs/getting-started/measuring-success`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    // ─── SEO Resources — Keyword Research ───────────────────────────────────
    {
      url: `${BASE}/seo-resources/docs/keyword-research`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE}/seo-resources/docs/keyword-research/fundamentals`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE}/seo-resources/docs/keyword-research/tools-and-techniques`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE}/seo-resources/docs/keyword-research/long-tail-keywords`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE}/seo-resources/docs/keyword-research/local-keyword-research`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    // ─── SEO Resources — Technical SEO ──────────────────────────────────────
    {
      url: `${BASE}/seo-resources/docs/technical-seo`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE}/seo-resources/docs/technical-seo/core-web-vitals`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE}/seo-resources/docs/technical-seo/crawlability`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE}/seo-resources/docs/technical-seo/mobile-optimization`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE}/seo-resources/docs/technical-seo/structured-data`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    // ─── SEO Resources — Content Optimization ───────────────────────────────
    {
      url: `${BASE}/seo-resources/docs/content-optimization`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE}/seo-resources/docs/content-optimization/on-page-seo`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE}/seo-resources/docs/content-optimization/content-strategy`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE}/seo-resources/docs/content-optimization/content-auditing`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE}/seo-resources/docs/content-optimization/user-experience`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    // ─── SEO Resources — Link Building ──────────────────────────────────────
    {
      url: `${BASE}/seo-resources/docs/link-building`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE}/seo-resources/docs/link-building/fundamentals`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE}/seo-resources/docs/link-building/strategies`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE}/seo-resources/docs/link-building/outreach`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE}/seo-resources/docs/link-building/measurement`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    // ─── SEO Resources — AI Search & GEO (new) ──────────────────────────────
    {
      url: `${BASE}/seo-resources/docs/ai-search`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE}/seo-resources/docs/ai-search/geo-fundamentals`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE}/seo-resources/docs/ai-search/ai-overviews`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE}/seo-resources/docs/ai-search/eeat-for-ai`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE}/seo-resources/docs/ai-search/structured-data-geo`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    // ─── SEO Resources — Checklists ─────────────────────────────────────────
    {
      url: `${BASE}/seo-resources/docs/checklists`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE}/seo-resources/docs/checklists/technical-seo-checklist`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE}/seo-resources/docs/checklists/on-page-checklist`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE}/seo-resources/docs/checklists/content-audit-checklist`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE}/seo-resources/docs/checklists/local-seo-checklist`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },

    // ─── SEO Resources — Tools ──────────────────────────────────────────────
    {
      url: `${BASE}/seo-resources/docs/tools`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    // ─── SEO Resources — Blog (Insights) ────────────────────────────────────
    {
      url: `${BASE}/seo-resources/blog`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE}/seo-resources/blog/ai-search-optimization-guide`,
      lastModified: new Date('2025-05-06'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE}/seo-resources/blog/inp-core-web-vitals-2026`,
      lastModified: new Date('2026-03-18'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE}/seo-resources/blog/content-clusters-topical-authority-2026`,
      lastModified: new Date('2026-04-22'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE}/seo-resources/blog/zero-click-search-rankings-traffic-decoupled`,
      lastModified: new Date('2026-05-06'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    // ─── Docusaurus search ───────────────────────────────────────────────────
    {
      url: `${BASE}/seo-resources/search`,
      lastModified: oneWeekAgo,
      changeFrequency: 'weekly',
      priority: 0.4,
    },
  ];
}
