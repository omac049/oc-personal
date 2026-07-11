# Omar Corral — Portfolio & SEO Resource Center

Public marketing site and free SEO education subsite for [omar-corral.com](https://omar-corral.com), deployed as a combined static export to GitHub Pages.

## What's in this repo

| Surface | Stack | URL |
|---------|-------|-----|
| **Main portfolio** | Next.js 15 (static export) | [omar-corral.com](https://omar-corral.com) |
| **SEO Resource Center** | Docusaurus 3 | [omar-corral.com/seo-resources/](https://omar-corral.com/seo-resources/) |
| **Client operations** | Node scripts + GitHub Actions | Invoicing under `scripts/invoicing/` |

The main site covers services, case studies, contact, and OC MCP (`/oc-mcp`). The resource center ships 39 guides across 8 sections, an **Insights** blog, and AI Search & GEO documentation including the [WebMCP implementation guide](https://omar-corral.com/seo-resources/docs/ai-search/webmcp-implementation).

## Quick start

```bash
# Main site
npm install
npm run dev          # http://localhost:3000

# SEO Resource Center (separate dev server)
cd seo-resources && npm install && npm start   # http://localhost:3000 (baseUrl /)
```

## Verify before pushing

```bash
npm run ci:local
```

Runs lint, typecheck, production Docusaurus build, Next build, and merges both into `out/` the same way CI deploy does.

## Deploy

Push to `main` → GitHub Actions builds both sites and deploys to GitHub Pages.

See **[DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)** for the full workflow. Resource-center content procedures live in **[seo-resources/MAINTENANCE.md](./seo-resources/MAINTENANCE.md)**.

## Key paths

- `src/components/` — Signal UI (`Hero`, `Navbar`, `ResourcesCTA`, `MCPTools`, …)
- `src/data/` — Marketing copy and metadata
- `public/data/` — WebMCP tool JSON (`profile.json`, `seo-resources.json`, …)
- `seo-resources/docs/` — Guide content
- `seo-resources/blog/` — Insights posts
- `scripts/invoicing/` — Monthly invoice generator (secrets via `.env.invoicing` / GitHub Actions)

## Design

Signal palette: black / white / signal-green (`#00E55C`), DM Serif Display + Inter. Spec: `docs/superpowers/specs/2026-05-06-signal-rebrand-design.md`.

## License

MIT
