# Signal Rebrand — Complete Redesign Spec

**Date:** 2026-05-06
**Status:** Draft
**Site:** omar-corral.com (Next.js 15, static export, GitHub Pages)

---

## 1. Brand Direction

**Positioning:** Modern Digital Strategist — SEO, AI search, and growth strategy.
**Mood:** Bold, high-contrast, confident, forward-thinking, approachable.
**One-liner:** Black canvas. White type. Signal green means results.

---

## 2. Color Palette

| Token | Hex | CSS Variable | Usage |
|-------|-----|-------------|-------|
| Black | `#000000` | `--color-black` | Primary background |
| White | `#FAFAFA` | `--color-white` | Primary text, headings |
| Off-white | `#A0A0A0` | `--color-muted` | Secondary/body text on dark |
| Signal Green | `#00E55C` | `--color-accent` | CTAs, proof metrics, logo mark, hover states |
| Dark Green | `#00B847` | `--color-accent-dark` | Hover/pressed states on green elements |
| Surface | `#0A0A0A` | `--color-surface` | Elevated sections (barely lighter than black) |
| Border | `#1A1A1A` | `--color-border` | Dividers, section separators |

**Constraint:** Green appears only where it communicates results, actions, or the brand mark. Never decorative. The page must work in pure black and white with green removed.

---

## 3. Typography

| Role | Font | Weight | Desktop Size |
|------|------|--------|-------------|
| Display / H1 | DM Serif Display | 400 (Regular) | 72–96px |
| H2 Section Heads | DM Serif Display | 400 | 48–56px |
| H3 Subheads | Inter | 600 (Semi-bold) | 24–28px |
| Body | Inter | 400 (Regular) | 16–18px |
| Labels / Caps | Inter | 500 (Medium), uppercase, tracked | 12–14px |
| Metrics / Numbers | Inter | 700 (Bold) | 48–64px, in green |

Both fonts loaded via `next/font/google`. DM Serif Display for editorial authority. Inter for clean utility.

**Max two typefaces. No exceptions.**

---

## 4. Logo: The Signal Mark

**Concept:** The "O" in OMAR CORRAL becomes a signal/radar pulse icon — a circle with two concentric arcs radiating from the upper-right, like a broadcast signal.

**Rendering:**
- Signal-O mark in green, rest of wordmark in white
- Wordmark: `OMAR CORRAL` in Inter Semi-bold, all caps, generous letter-spacing (0.15em)
- At small sizes (favicon, mobile nav): signal-O mark only
- SVG implementation, animatable (subtle pulse on page load, then static)

**Variants:**
- Full wordmark (header, footer)
- Mark only (favicon, mobile, social avatar)
- All-white version (for use on green backgrounds if ever needed)

---

## 5. Homepage Structure

### 5.1 Header / Navigation

Fixed top bar. Transparent over hero, transitions to solid black + bottom border (`#1A1A1A`) on scroll.

- **Left:** Signal-O mark (green) + `OMAR CORRAL` wordmark (white)
- **Right:** `Services` · `Proof` · `About` · `Contact` — Inter Medium, 14px, uppercase, tracked, white
- **Mobile:** Logo left, hamburger icon right. Opens full-screen black overlay with large serif nav links stacked vertically, green close button.
- **Scroll behavior:** `backdrop-filter: blur` during transition optional, but solid black is the fallback.

**Removed:** Current floating bottom dock nav, scroll progress bar, monogram logo.

### 5.2 Hero

Full-black, edge-to-edge. No page gutters on the hero container.

**Background:** Generative mesh/grid animation — faint green lines (~15–20% opacity) forming a network topology that slowly shifts. Canvas-based, custom implementation. Static fallback for `prefers-reduced-motion`.

**Content (centered, max-width ~720px for text):**

1. **Label:** `DIGITAL STRATEGIST` — Inter Medium, uppercase, tracked, signal green, 14px
2. **Headline:** `I make brands` / `impossible to ignore.` — DM Serif Display, white, 80–96px desktop / 40–48px mobile. The trailing period is green.
3. **Subline:** `SEO, AI search, and growth strategy for brands that want to lead, not follow.` — Inter Regular, off-white, 18px
4. **CTAs:** Primary: `See the proof` (green bg, black text) → scrolls to Proof section. Secondary: `Get in touch` (white outline, white text) → scrolls to Contact.

**Viewport:** Hero fills `100svh`. Header overlays the hero (position fixed, transparent), so no subtraction needed. On mobile (<768px), headline drops to 40–48px, subline wraps to 2 lines, CTAs stack vertically.

### 5.3 Proof Strip

Horizontal row of 3–4 hard metrics. Centered. Separated by thin vertical dividers (`#1A1A1A`).

Each metric:
- **Number:** Inter Bold, 48–64px, signal green (counts up on scroll-in)
- **Label:** Inter Medium, 14px, uppercase tracked, off-white

Example metrics: `150+` Clients · `12+` Years · `$2M+` Revenue Driven · `300%` Avg. Traffic Growth

**Background:** Black. No surface elevation. Clean separation from hero via whitespace only.

### 5.4 Services

3 services in a vertical stack. Full-width. No cards.

Each service row:
- Green line icon (left, custom SVG, ~24px)
- Serif title: DM Serif Display, 32–36px, white
- One-sentence description: Inter Regular, off-white, 16px
- Arrow link: `Learn more →` Inter Medium, green, translates right on hover

Services separated by full-width `#1A1A1A` horizontal rules.

Content container: `max-width: 960px`, centered.

### 5.5 Case Studies

2–3 featured results. Editorial layout, no cards, no grid.

Each case study section:
- **Category label:** Green, uppercase tracked (e.g. `E-COMMERCE · SEO`)
- **Headline:** The outcome in serif (e.g. `312% organic traffic growth in 6 months`)
- **Summary:** 2–3 sentences: problem → approach → result
- **Key metric callout:** Oversized green number (64px+) with white context label below

Alternating backgrounds: black and surface (`#0A0A0A`) to create visual rhythm.

### 5.6 About

Short and confident. No parallax.

- **Name:** `Omar Corral` in DM Serif Display, large (56px)
- **Bio:** 2–3 sentences. Inter Regular, off-white. Confident, not self-deprecating.
- **Credibility markers:** Notable brands or client categories listed horizontally (e.g. `E-commerce · SaaS · Healthcare · Finance`), Inter Medium, small caps, off-white.
- **Optional:** Professional photo — restrained, desaturated, placed to the right of text on desktop. Not mandatory.

### 5.7 FAQ

Clean accordion.

- **Question:** DM Serif Display, 20–24px, white
- **Answer:** Inter Regular, 16px, off-white
- **Toggle:** Green `+` rotates to `×` on open, 300ms transition
- **Expand:** Smooth height animation, 300ms ease

Content from current `FAQSection` data, rewritten for strategist positioning if needed.

### 5.8 Contact

- **Headline:** `Let's talk.` — DM Serif Display, 56px, white
- **Subline:** `Have a project in mind? I'd love to hear about it.` — Inter Regular, off-white
- **Form:** Name, Email, Message fields. Black inputs with `#1A1A1A` borders, white text, green focus ring. Green submit button (`Send message`, black text on green bg).
- **Alternative:** Direct email link below the form, in off-white.
- **Integration:** Formspree (existing), no change to backend.

### 5.9 Footer

Minimal black bar with top border (`#1A1A1A`).

- **Left:** Signal-O mark + wordmark (small)
- **Center:** Social icons (GitHub, LinkedIn, X/Twitter) — white, green on hover
- **Right:** `© 2026 Omar Corral`
- **Below:** Single link row: `SEO Resources` · `Services` · `Contact` — off-white, small

---

## 6. Sub-Pages

### 6.1 Services Index (`/services/`)

Full-black page. Each service gets a near-viewport-height section.

Per service:
1. Green numbered label: `01` / `02` / `03` — Inter Medium, uppercase
2. Serif headline: service name — DM Serif Display, 48px
3. 2–3 sentence description — Inter Regular, off-white
4. Bullet list of deliverables — green dash markers, white text
5. CTA: `Start here →` — green text, arrow translates on hover

Separated by `#1A1A1A` horizontal rules.

### 6.2 Service Detail Pages (`/services/seo-audit/`, `/services/ai-search-strategy/`)

- **Hero band:** Black bg, green label + serif title + one-line description
- **Body:** Structured sections with Inter Semi-bold H3 subheads
- **Process steps:** Numbered vertically — green numbers (48px), white step titles and descriptions. Not a timeline component, just clean vertical rhythm.
- **Bottom CTA:** `Ready to start?` serif headline + green button → contact section/page

### 6.3 Case Studies Page (`/case-studies/`)

Editorial long-scroll. Each case study is a full section:
- Green category label
- Serif headline (the outcome)
- Problem → approach → result in short paragraphs
- Key metric callout (oversized green number)
- `#1A1A1A` divider, next study

No cards. No grid. Confident editorial storytelling.

### 6.4 404 Page

- Black page
- `404` — DM Serif Display, 120px+, white
- `This page doesn't exist.` — Inter Regular, off-white
- `Back to home →` — green CTA
- Nothing else.

---

## 7. Motion System

### 7.1 Hero Entrance Sequence

| Element | Animation | Delay | Duration |
|---------|-----------|-------|----------|
| Generative grid | Fade in | 0ms | 400ms |
| Green label | Slide up + fade | 200ms | 300ms |
| Headline line 1 | Slide up + fade | 400ms | 400ms |
| Headline line 2 | Slide up + fade | 500ms | 400ms |
| Subline | Fade in | 600ms | 300ms |
| CTAs | Fade in | 800ms | 300ms |

Total sequence: ~1.2s.

### 7.2 Scroll-Triggered Reveals

- Each major section: `translateY(30px)` → `0`, `opacity: 0` → `1` on viewport entry
- Framer Motion `whileInView`, `once: true`
- Child stagger: 100ms between elements within a section
- Green metrics: count-up animation from 0 to target value on viewport entry

### 7.3 Micro-Interactions

- **CTA buttons:** Green background slides in from left on hover (200ms)
- **Nav links:** Green underline grows from left on hover (150ms)
- **Service arrows:** `translateX(4px)` on hover
- **Logo mark:** Subtle signal-pulse on page load, then static
- **FAQ accordion:** Smooth height (300ms ease), green toggle rotates 45°

### 7.4 Reduced Motion

All animations collapse to instant opacity change only. No translateY, no counting, no stagger, no pulse. Via `prefers-reduced-motion: reduce` media query.

---

## 8. Technical Plan

### Keep
- Next.js 15 (App Router, static export)
- Tailwind CSS v4 (CSS-first config via `@theme`)
- Framer Motion (animations)
- Formspree (contact form)
- GitHub Pages deployment
- Existing App Router file structure pattern

### Remove
- Font Awesome → replaced by ~5–6 custom SVG icons (menu, close, arrow, social icons)
- Algolia search integration → not needed for a 7-section single-page + 4 sub-pages
- `InteractiveBackground`, `InteractiveParticles`, `AlgorithmBackground` → replaced by generative grid (hero only)
- `ScrollRocket`, `ScrollProgress`, `MonogramLogo` → removed (off-brand)
- `Skills` / `SkillModal` constellation → removed (dev portfolio pattern)
- `ParallaxContainer` → removed (too playful)
- Geist / Geist Mono fonts → replaced by DM Serif Display + Inter

### Add
- DM Serif Display + Inter via `next/font/google`
- Signal palette as CSS custom properties in `globals.css` `@theme inline`
- `SignalLogo` SVG component (animated mark + wordmark)
- `SignalGrid` Canvas component (generative hero background)
- `CountUp` utility for animated metric numbers
- Top nav component replacing bottom floating dock

### Component Mapping (Old → New)

| Current | New | Notes |
|---------|-----|-------|
| `Hero` + `AlgorithmBackground` | `Hero` + `SignalGrid` | Complete rewrite |
| `FloatingNav` | `Navbar` | Top fixed nav, new design |
| `MonogramLogo` | `SignalLogo` | New brand mark |
| `ScrollProgress` | removed | — |
| `ScrollRocket` | removed | — |
| `ServicesOverview` | `Services` | Vertical stack, no cards |
| `ProofSection` | `ProofStrip` | Horizontal metrics row |
| `About` | `About` | Simplified, no parallax |
| `Experience` | removed from homepage | Can live on about sub-page later |
| `InsightsSection` | removed | Link in footer |
| `FAQSection` | `FAQ` | Restyled accordion |
| `Contact` + `InteractiveContactForm` | `Contact` | Unified, simplified |
| `Skills` / `SkillModal` | removed | — |
| `InteractiveParticles` | removed | — |
| `Search` / `SearchButton` | removed | — |
| `StaticContent` | `StaticContent` | Updated for new structure |
| `StructuredData` | `StructuredData` | Updated schemas |

### SEO / Meta Continuity

- All existing routes preserved (no broken URLs)
- `sitemap.ts` updated for current page set
- `robots.ts` unchanged
- OpenGraph / Twitter images regenerated with new brand colors
- Structured data schemas updated with new brand info
- `manifest.ts` updated with new theme colors

---

## 9. Pages Summary

| Route | Type | Status |
|-------|------|--------|
| `/` | Homepage | Complete redesign |
| `/services/` | Services index | Redesign |
| `/services/seo-audit/` | Service detail | Redesign |
| `/services/ai-search-strategy/` | Service detail | Redesign |
| `/case-studies/` | Case studies | Redesign |
| 404 | Error page | Redesign |

---

## 10. Out of Scope

- Docusaurus SEO resources subsite (`seo-resources/`) — separate project, not part of this rebrand
- Invoice system (`scripts/invoicing/`) — unrelated
- Blog / content pages — future phase
- Authentication / dynamic features — not applicable (static export)
- Photography / headshot — optional, not blocking
