# Homepage Redesign: Industry Veteran & Growth Advocate

**Date:** 2026-07-10
**Status:** Approved — awaiting implementation plan

## Overview

Full homepage redesign shifting the positioning from "bold outcome machine" to "industry veteran, growth advocate, and student of AI systems." The page retains the Signal brand (black/white/signal-green, DM Serif Display + Inter) but gets new section layouts, new copy direction, and new components.

Key principles:
- Lead with experience and forward-looking industry voice, not sales pitch
- Drop all percentage-based metrics; keep non-percentage numbers (revenue, platform counts, timeframes)
- Weave resource center links throughout services and case studies (multiple organic touchpoints)
- Add beliefs manifesto and "What I'm Learning" component to signal intellectual curiosity
- Build in `/dev` sandbox folder alongside production, push live after completion

## Development Strategy

All new components are built in `src/app/dev/page.tsx` as a self-contained preview page that imports from `src/components/dev/`. This keeps the live homepage untouched during development.

**Go-live process:**
1. Build and iterate all sections in `/dev`
2. Visual QA via the dev route (`/dev`) during local development
3. When approved, swap `/dev` components into production `page.tsx`
4. Remove `/dev` route and `src/components/dev/` directory
5. Update `public/data/*.json` (WebMCP) to reflect new copy
6. Run `npm run ci:local` to verify lint, typecheck, and build
7. Deploy via existing GitHub Actions workflow

**Note:** The `/dev` route exists only during local development. It is removed before any production deploy and is never linked from navigation or sitemap.

## Section Specifications

### 1. Hero

**Component:** `src/components/dev/Hero.tsx`

**Eyebrow:** "12 years in search. Still in the arena."

**Headline:** "Search is evolving. I'm evolving with it."
*(Copy to be refined during implementation — direction approved, exact words flexible.)*

**Subhead:** "From algorithm updates to AI Overviews — I've spent a career helping brands get found, cited, and grown through organic search. Now I'm building the tools and frameworks for what comes next."
*(References WebMCP tooling and resource center frameworks.)*

**CTAs:**
- Primary: "See the work" → `#case-studies`
- Secondary: "Read the playbook" → `/seo-resources/` (resource center gets hero-level billing)

**Background:** New animated component replacing `SignalGrid`. Should evoke forward movement and evolution rather than a static network. Options to explore during implementation:
- Directional signal-flow visualization (particles or lines moving left→right)
- Subtle animated timeline/wave
- Refined SignalGrid variant with directional motion

**"Currently exploring" element:** Small, understated tag near the bottom of the hero viewport. Example: *"Currently exploring: How LLMs reshape citation authority"*. Can be manually updated via a data constant. Signals the "student" identity.

**Accessibility:** Maintains skip link, aria-labels, reduced-motion support.

### 2. Philosophy Strip (replaces ProofStrip)

**Component:** `src/components/dev/PhilosophyStrip.tsx` (replaces `ProofStrip.tsx`)

**Content:** Three identity statements in a horizontal strip:

```
SEO STRATEGIST   ·   AI SEARCH STUDENT   ·   GROWTH ADVOCATE
```

**Design:**
- Same strip positioning as current ProofStrip (immediately below hero)
- Clean uppercase tracking, accent-color dividers
- No CountUp animation, no numbers
- Declarative positioning statement, not proof section
- Mobile: stack vertically or use scrollable horizontal layout

### 3. Services (enhanced with resource deep-links)

**Component:** `src/components/dev/Services.tsx`

**Structure:** Retains three stacked service blocks with icon + description + "Learn more" link.

**Services:**
1. **SEO Audit & Strategy** — existing copy
   - Related reading: "The Three Pillars of SEO" → `/seo-resources/docs/getting-started/seo-pillars`
2. **AI Search Strategy** — existing copy
   - Related reading: "GEO Fundamentals" → `/seo-resources/docs/ai-search/geo-fundamentals`
   - Related reading: "WebMCP Implementation" → `/seo-resources/docs/ai-search/webmcp-implementation`
3. **Growth & Analytics** — existing copy
   - Related reading: "We Won the Rankings. The Ecosystem Moved On." → `/seo-resources/blog/zero-click-search-rankings-traffic-decoupled`

**New element per service:** Below each description, a subtle `"Related reading →"` link in muted text pointing to the relevant resource guide. This creates organic touchpoints to the resource center without feeling forced.

**Layout:** Can evolve from the current icon-left stacked layout to a new format during implementation (e.g., full-width cards, grid). Exact layout TBD during visual iteration.

### 4. Case Studies (non-percentage metrics)

**Component:** `src/components/dev/CaseStudies.tsx`

**Structure:** Three full-width blocks, alternating backgrounds.

**Case studies with revised metrics:**

| Category | Headline | Metric | Label |
|----------|----------|--------|-------|
| E-Commerce · SEO | Organic sessions tripled in 6 months | `3x` or `6 mo` | "From page two to page one for highest-value keywords" |
| SaaS · AI Search | From invisible to cited across 4 AI platforms | `4` | "AI Platforms Citing Brand" |
| Healthcare · AI Search | $1.2M in attributed revenue from organic search | `$1.2M` | "Revenue from Organic" |

**Key change:** The e-commerce 312% metric is replaced with a non-percentage alternative (3x multiplier or 6-month timeframe). Exact framing finalized during implementation.

**Resource links per case study:**
- E-Commerce · SEO → "The Three Pillars of SEO" (`/seo-resources/docs/getting-started/seo-pillars`)
- SaaS · AI Search → "GEO Fundamentals" (`/seo-resources/docs/ai-search/geo-fundamentals`)
- Healthcare · AI Search → "We Won the Rankings. The Ecosystem Moved On." (`/seo-resources/blog/zero-click-search-rankings-traffic-decoupled`)

**CountUp:** Retained for non-percentage numbers ($1.2M, 4). The 3x or 6mo metric can use CountUp or a simple animation.

### 5. ResourcesCTA (educator framing)

**Component:** `src/components/dev/ResourcesCTA.tsx`

**Headline change:** "Everything I've learned. Published for free." (replaces "The complete SEO playbook. Open to everyone.")

**Supporting text:** Include "40+ practitioner guides" as a concrete, non-percentage proof point.

**Deep-links:** Keep 4 deep-links (GEO Fundamentals, WebMCP Implementation, Zero-Click Insights, SEO Pillars). Consider swapping one for the newest Insights post to keep it fresh.

**Layout:** Keep existing two-column layout — it's well-structured and effective.

### 6. Beliefs (replaces About bio)

**Component:** `src/components/dev/Beliefs.tsx` (replaces `About.tsx`)

**H2:** "What I believe"

**Format:** 3-4 belief statements, each a short paragraph. Grounded in real work:

1. **On search evolution:** Search has always been about connecting people with answers. The technology changes — from ten blue links to AI Overviews — but the mission doesn't. Twelve years in, and the fundamentals still win.

2. **On AI and discovery:** The rise of AI search isn't a threat to good SEO — it's a validation of it. Structured, authoritative, genuinely useful content gets cited in both paradigms. That's why I study these systems.

3. **On sharing knowledge:** I've published 40+ practitioner guides because the industry gets better when people share frameworks openly. Every audit, every strategy, every framework I build — the thinking behind it goes into the resource center.

4. **On growth:** Growth isn't a hack. It's the compound effect of doing the right things consistently — and measuring what matters. Revenue attribution, not vanity metrics.

**Removed:** Category tags (E-commerce, SaaS, Healthcare, Finance, Local Business). The case studies demonstrate vertical range.

**Copy note:** These are directional. Final copy to be refined during implementation, maintaining the veteran/educator/student tone.

### 7. What I'm Learning (new component)

**Component:** `src/components/dev/WhatImLearning.tsx`

**Position:** Between Beliefs and FAQ.

**Format:** Small, single-row component showing 2-3 current areas of study. Updated manually via a data constant.

**Example items:**
- "How citation patterns differ between Perplexity and ChatGPT"
- "WebMCP adoption across enterprise sites"
- "Zero-click search impact on local healthcare"

**Design:**
- Minimal — eyebrow label ("What I'm learning"), then 2-3 items
- Each item is a short sentence, no links required (though links to related resources are optional)
- Visual treatment: muted, understated — intellectual curiosity signal, not a feature section
- Can be a horizontal scrollable row on mobile

### 8. FAQ (light adjustments)

**Component:** `src/components/dev/FAQ.tsx`

Keep the 5-question accordion structure. Adjust Q1 and Q2 to reflect veteran/student voice rather than pure service selling. Keep timelines and process answers.

### 9. Contact (unchanged)

**Component:** Reuse existing `src/components/Contact.tsx` as-is. No changes needed.

### 10. Navbar and Footer (minimal changes)

- **Navbar:** No structural changes. "Resources" link stays prominent with accent color.
- **Footer:** No changes.

## Page Flow

```
Hero (veteran voice, dual CTAs: work + playbook, "currently exploring" tag)
    ↓
Philosophy Strip (identity: strategist · student · advocate)
    ↓
Services (3 blocks + resource deep-links per service)
    ↓
Case Studies (non-% metrics, resource links per study)
    ↓
ResourcesCTA (educator framing, 40+ guides, 4 deep-links)
    ↓
Beliefs (manifesto replacing bio)
    ↓
What I'm Learning (2-3 current study areas)
    ↓
FAQ (veteran-toned adjustments)
    ↓
Contact (unchanged)
```

## Resource Center Integration Points

The resource center (`/seo-resources/`) is surfaced at these touchpoints:

1. **Hero CTA** — "Read the playbook" → `/seo-resources/`
2. **Services** — 4 resource deep-links across 3 service blocks
3. **Case Studies** — relevant resource links per case study
4. **ResourcesCTA** — dedicated section with 4 deep-links + browse-all CTA
5. **Navbar** — "Resources" link (accent color, new tab)
6. **Footer** — "SEO Resources" link

Total: 6 distinct touchpoints, up from 4 currently.

## Design Constraints

- **Brand:** Signal redesign palette stays (black/white/signal-green, DM Serif Display + Inter, signal-O mark)
- **Static export:** All components must work with Next.js `output: 'export'` — no server-only features
- **Accessibility:** Maintain aria-labels, skip links, reduced-motion support, semantic HTML
- **WebMCP compatibility:** After go-live, update `public/data/*.json` files to reflect new copy
- **Structured data:** Update `schema.org/Person` microdata in page wrapper if About changes to Beliefs
- **Performance:** New animated hero background must respect `prefers-reduced-motion` and not degrade LCP

## Go-Live Checklist

1. All `/dev` sections visually approved
2. Swap dev components into `src/app/page.tsx`
3. Update `src/data/about.ts` (or remove if Beliefs replaces it entirely)
4. Update `public/data/profile.json`, `services.json`, `case-studies.json` for WebMCP
5. Update `public/llms.txt` if positioning language changes
6. Update `StaticContent.tsx` noscript briefing
7. Remove `/dev` route and `src/components/dev/` directory
8. Run `npm run ci:local` (lint, typecheck, Docusaurus build, Next build)
9. Deploy via GitHub Actions
10. Verify live site + WebMCP endpoints
