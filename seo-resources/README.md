# SEO Resource Center

Docusaurus subsite for [omar-corral.com/seo-resources](https://omar-corral.com/seo-resources/) — free guides, checklists, GEO docs, and the **SEO Insights** blog.

## Local development

```bash
cd seo-resources
npm install
npm start
```

Dev server runs at `http://localhost:3000` with `baseUrl: /`.

## Production build

```bash
NODE_ENV=production npm run build
```

Output goes to `build/`. The root deploy workflow copies this into `out/seo-resources/` alongside the Next.js static export.

## Content map

| Section | Path |
|---------|------|
| Getting Started | `docs/getting-started/` |
| Keyword Research | `docs/keyword-research/` |
| Technical SEO | `docs/technical-seo/` |
| Content Optimization | `docs/content-optimization/` |
| Link Building | `docs/link-building/` |
| AI Search & GEO | `docs/ai-search/` |
| Checklists | `docs/checklists/` |
| Tools | `docs/tools/` |
| Insights blog | `blog/` |

## Cross-site integration

- Main portfolio links: `Navbar`, `Footer`, `ResourcesCTA`, `not-found`
- Sitemap entries: `src/app/sitemap.ts`
- WebMCP tool data: `public/data/seo-resources.json`
