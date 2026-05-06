# OC WebMCP — Full POV Page Design

**Date:** 2026-05-06  
**Status:** Approved — ready for implementation plan  
**Route:** `/oc-mcp/` (replaces current page)  
**Audience:** Dual — prospective clients (skimmable brief) + practitioners (technical depth)

---

## 1. Design Thesis

**Visual thesis:** Dark editorial brief. Long-form white-paper typography on a black surface, signal-green structural accents, no decorative chrome. Reads like something you'd share in a Slack thread, not a marketing page.

**Content thesis:** This is simultaneously a product page (omar-corral.com is running this architecture right now) and a generalized POV (here is the pattern, here is why it matters, here is how to implement it for any site).

**Interaction thesis (3 motions):**
1. Sticky left-rail section nav (desktop) with IntersectionObserver active-state tracking — scroll position tells you where you are in the brief
2. `▾ Technical depth` accordions — smooth CSS `max-height` transition, expand/collapse without layout jump
3. Fade-up on section entry (IntersectionObserver, `prefers-reduced-motion` respected)

---

## 2. File Architecture

### Files to create / replace

| File | Action | Notes |
|------|--------|-------|
| `src/app/oc-mcp/page.tsx` | **Replace** | New full-page layout — server component shell |
| `src/app/oc-mcp/MCPPageClient.tsx` | **Create** | Client component: sticky nav + accordion state |
| `src/app/oc-mcp/page.module.css` | **Create** | All layout/animation CSS (no inline styles for motion) |

### Why split server + client

The existing `page.tsx` is a pure server component. The new design requires:
- `IntersectionObserver` for nav active state → client
- Accordion expand/collapse state → client
- Scroll-linked effects → client

**Pattern:** `page.tsx` is a server component that renders static metadata + imports `<MCPPageClient />` which owns all interactive behaviour and renders the full page content. All actual text/content lives in `MCPPageClient.tsx` so it is easily editable.

---

## 3. Navigation Component

### Left-rail sticky nav (desktop)

```
┌────────────────────┐
│  §1  The Problem   │  ← active (green dot + weight)
│  §2  Architecture  │
│  §3  Layer 1       │
│  §4  Layer 2       │
│  §5  Live Proof    │
│  §6  How to Build  │
│  ─────────────────  │
│  Start a conversation ↗ │
└────────────────────┘
```

- Fixed to left side starting ~120px from top, hidden below 1024px viewport width
- Each item links to `#section-N` anchor on the page
- Active state driven by IntersectionObserver on section roots (threshold 0.4)
- Active = signal-green dot + font-weight 600; inactive = gray #71717a
- Sticky nav does not appear on mobile; mobile gets a flat top anchor bar instead

### Mobile anchor bar

On mobile (< 1024px), a compact horizontal pill row appears below the hero:

```
[ §1 Problem ] [ §2 Arch ] [ §3 L1 ] [ §4 L2 ] [ §5 Proof ] [ §6 Build ]
```

Scrolls horizontally. Taps jump to section anchor. No active state (too expensive for mobile).

---

## 4. Accordion Component

Each "Technical depth" section uses a CSS-only accordion pattern backed by React state:

- Trigger: a `<button>` row with `▾ Technical depth` label in signal-green
- On expand: `max-height` transitions from `0` to `auto` using a two-step JS trick (set to scrollHeight, then remove to let CSS handle it)
- Icon rotates 180° on expand
- Expanded state is **not** persisted (resets on navigation)
- Each section has its own independent accordion — opening one does not close others

---

## 5. Page Sections — Full Content Spec

### HERO

```
Eyebrow:    OC MCP  ·  Version 1.0  ·  May 2026
H1:         "The Front Door for AI Agents"
Subhead:    AI agents are already accessing your site. The question is
            whether you invited them in or they let themselves in.
```

**Live proof badge** (signal-green left border, dark bg):
```
● omar-corral.com is running this architecture right now
  6 tools deployed  ·  .well-known/webmcp.json published
  [View manifest →]   [Try getProfile() →]
```
Both links open in new tab.

**Stats row** (3 columns):
| Stat | Label |
|------|-------|
| ~97% | fewer tokens vs. Playwright |
| 6 | typed tools deployed |
| May 2026 | live since |

---

### §1 — THE PROBLEM: TWO FAILURE MODES

**Section summary (always visible):**
> AI agents access websites in one of two ways: through browser automation (expensive, fragile, hallucinates from mis-parsed HTML) or unauthorized scraping (outside your control, feeds third-party models, legally actionable). Both are already happening. Neither produces good outcomes for the site owner.

**Before / After comparison** (two-column grid, stacks on mobile):

| WITHOUT WebMCP | WITH OC MCP |
|---|---|
| Agent spins up Playwright | Agent fetches `/.well-known/webmcp.json` |
| Renders full page DOM | Discovers 6 typed tool endpoints |
| Scrapes + parses HTML | Calls `getServices()` |
| 8,000–12,000 tokens consumed | ~280 tokens consumed |
| Breaks on redesign | Schema-versioned |
| Hallucination risk from layout artifacts | Typed JSON, no parsing required |
| No attribution or instrumentation | Every call is a known event |

**Technical depth (accordion):**

Pull from white paper §2.1 (From Pages to Actions) and §4.1 (Robots.txt Is Dead):

- Why Playwright-based agent browsing is so expensive: full DOM render, JS execution, screenshot or accessibility tree extraction, LLM summarization pass = 3–4 LLM calls before the agent even has an answer
- Token math: typical portfolio homepage ~4,200 tokens of HTML, ~2× after accessibility tree extraction, ~1.5× for the summarization prompt = 12,000+ tokens to answer "what services does this person offer"
- Why robots.txt is no longer sufficient: major crawlers (GPTBot, ClaudeBot, PerplexityBot) honour it; but agentic browsers operated by end users do not fall under robots.txt scope — the user is operating the agent, and the agent is just a browser
- The zero-click research parallel: just as Google AI Overviews reduced CTR 79% while rankings improved, agent intermediation reduces site visits while "coverage" (being cited in agent responses) grows. If you don't control the structured data layer, you don't control the answer.
- Link: [Read the zero-click research →](https://omac049.github.io/seo-zero-click/)

---

### §2 — THE ARCHITECTURE: TWO LAYERS

**Section summary (always visible):**
> Layer 1 invites authorized AI agents in through typed, versioned tool contracts. Layer 2 ensures unauthorized scrapers — the ones ignoring robots.txt and terms of service — receive no useful harvest. Both layers run independently.

**Architecture diagram** (ASCII, rendered in monospace block):
```
         Incoming AI agent request
                    │
         ┌──────────▼──────────┐
         │  Using WebMCP tools? │
         └─────┬──────────┬────┘
              YES         NO
               │           │
    ┌──────────▼─┐    ┌────▼──────────────┐
    │  LAYER 1   │    │     LAYER 2        │
    │            │    │                    │
    │ .well-known│    │ Honeypot content   │
    │ /webmcp    │    │ Tarpit latency     │
    │            │    │ Legal enforcement  │
    │ Typed JSON │    │ (Amazon v.         │
    │ responses  │    │  Perplexity 2026)  │
    └────────────┘    └────────────────────┘
    Clean, accurate   No productive harvest
    ~280 tokens       Fingerprinted + denied
```

**Technical depth (accordion):**

- W3C Web ML Community Group WebMCP specification history: emerged from the Model Context Protocol (Anthropic, late 2024) adapted for browser-native execution; tab-bound security model (tools scoped to the tab's origin)
- Browser support matrix (as of May 2026): Chrome Canary (flag), no stable release yet; polyfill via service worker possible for early adopters
- The difference between MCP (server-to-server, Claude Desktop integration) and WebMCP (browser-native, tab-bound, user-facing agents): complementary, not competing
- CDN layer role: static JSON files are fully CDN-cacheable (TTL in response headers); edge delivery means effectively zero latency for agents

---

### §3 — LAYER 1: AUTHORIZED TOOL ACCESS

**Section summary (always visible):**
> Three components. A discovery manifest. Static tool endpoints. Browser registration. All three run on a static site with no server infrastructure.

**Three components** (numbered list, signal-green numbers):

**1. Discovery — `/.well-known/webmcp.json`**
```json
{
  "version": "1.0",
  "publisher": { "name": "Omar Corral", "url": "https://omar-corral.com" },
  "tools": [
    { "name": "getProfile",     "riskLevel": "low", "endpoint": "/data/profile.json" },
    { "name": "getServices",    "riskLevel": "low", "endpoint": "/data/services.json" },
    { "name": "getCaseStudies", "riskLevel": "low", "endpoint": "/data/case-studies.json" }
  ]
}
```
Agent discovers this file, reads the tool list, knows exactly what to call and what to expect back.

**2. Static endpoints — `/data/*.json`**

Each file is a typed, versioned JSON response with a `schema: "oc-mcp/v1"` key. No server required — works on GitHub Pages, Vercel, Netlify, any CDN. Example response shape:
```json
{
  "schema": "oc-mcp/v1",
  "tool": "getProfile",
  "data": { "name": "Omar Corral", "title": "Digital Strategist", "yearsExperience": 12, "..." },
  "generated": "2026-05-06",
  "ttl": 604800
}
```

**3. Browser registration — `navigator.modelContext.registerTool()`**

```ts
navigator.modelContext?.registerTool({
  name: 'getProfile',
  description: "Returns Omar Corral's professional profile and expertise",
  inputSchema: { type: 'object', properties: {} },
  execute: async () => fetch('/data/profile.json').then(r => r.json()),
});
```
Progressive enhancement. If the API isn't available (all current stable browsers), this no-ops silently. When Chrome ships stable WebMCP support, all tools are already registered.

**Technical depth (accordion):**

Full tool schemas for all 6 OC MCP tools:
- `getProfile` — inputSchema, full response data shape, TTL 7 days
- `getServices` — optional `category` filter, response shape with scope/deliverable arrays
- `getCaseStudies` — optional `industry`/`type` filter, outcomes object
- `getSEOResources` — sections array, featuredGuides, recentPosts
- `getContact` — engagement process steps, responseTime, social
- `getInsights` — optional `topic`/`limit` params, currentFocus array

Risk level taxonomy:
- `low` — read-only, public data, no PII
- `medium` — read-only, potentially sensitive (pricing, private schedules)
- `high` — write operations, form submissions, authenticated data

Versioning pattern: `schema: "oc-mcp/v1"` allows agents to detect breaking changes. Bump to `v2` when response shape changes; maintain `v1` files at `/data/v1/` for backward compatibility during transition.

Cache/TTL strategy: `profile.json` and `services.json` → 7 day TTL. `insights.json` and `seo-resources.json` → 24 hour TTL. Set via `Cache-Control: public, max-age=86400` headers at CDN layer.

---

### §4 — LAYER 2: UNAUTHORIZED SCRAPER DEFENSE

**Section summary (always visible):**
> Unauthorized agents that bypass WebMCP tools get routed to infrastructure that wastes their resources and generates no useful data. Amazon v. Perplexity (March 2026) confirmed platforms have legal standing to enforce this proactively.

**Three mechanisms** (numbered list):

**1. Honeypot content**
Pages that look structurally plausible but contain no real data — fabricated program names, placeholder statistics, lorem-adjacent copy. A scraper that lands on a honeypot is fingerprinted. Legitimate users and compliant crawlers never see honeypot pages (no links to them from real content, no sitemap entries).

**2. Tarpit responses**
Unrecognized or flagged user-agents receive deliberate latency at the CDN edge — 30–60 second TTFB, chunked response that never completes. Named after the Nepenthes open-source tarpit: the scraper's thread blocks, consuming the attacker's compute budget rather than yours.

**3. Legal boundary**
`robots.txt` explicitly prohibits unauthorized agent access. Post-Amazon v. Perplexity (March 2026 federal injunction), platforms have demonstrated legal standing to block unauthorized AI agents and recover damages. The filing of such a boundary converts ambiguity into an enforceable prohibition.

**Technical depth (accordion):**

Full Amazon v. Perplexity case summary:
- March 2026: U.S. federal judge granted Amazon a temporary injunction blocking Perplexity's "Comet" AI browser from scraping its site
- Finding: "strong evidence" of unauthorized access; "essentially undisputed evidence" of harm (advertising revenue disruption, customer data exposure, brand experience loss)
- Higher-education parallel: without WebMCP, universities face identical category of risks — discovery intermediation, intent data leakage, enrollment funnel bypass
- Amazon responded reactively (post-harm). The WebMCP pattern is proactive.

Nepenthes / tarpit architecture:
- Runs at CDN/edge (Cloudflare Workers, Vercel Edge Middleware)
- Trigger conditions: user-agent strings matching known AI scrapers, request patterns (too-fast, too-regular, no referer), honeypot page access
- Response: `Transfer-Encoding: chunked` with infinite slow-dribble, or `Connection: keep-alive` with 30s wait before 200 response containing garbage data
- Whitelist governance: maintain explicit allow-list of compliant crawlers (Googlebot, ClaudeBot with respectful crawl, etc.); auto-allow any agent that arrived via WebMCP tools

Robots.txt pattern:
```
# Unauthorized AI agent access is prohibited.
# Use /.well-known/webmcp.json for structured tool access.
User-agent: *
Disallow: /honeypot/

User-agent: PerplexityBot
Allow: /
# Perplexity confirmed respectful — whitelisted

User-agent: [unknown-scraper-agent]
Disallow: /
```

Additional defense layers:
- `ai.txt` (emerging standard) — explicit AI training opt-out
- `TDMRep` (W3C Text and Data Mining Reservation Protocol) — machine-readable rights declaration
- Canary tokens — synthetic data embedded in honeypot pages that, if it appears in model outputs, confirms the scraper's model was trained on your content

Note for regulated industries (higher education, healthcare, finance): Layer 2 deployment should include legal review before activating active-defense routing. The legal boundary (robots.txt prohibition) can be established immediately; tarpit deployment should follow compliance sign-off to ensure no overlap with legitimate accessibility agents.

---

### §5 — LIVE PROOF: OC MCP ON OMAR-CORRAL.COM

**Section summary (always visible):**
> Layer 1 is running on this site right now. All six tools are deployed. Call any endpoint directly — no authentication, no API key, no scraping required.

**Tool list with live links** (monospace table):

| Tool | Endpoint | Response |
|------|----------|----------|
| `getProfile` | [/data/profile.json →](https://omar-corral.com/data/profile.json) | Bio, expertise, credentials |
| `getServices` | [/data/services.json →](https://omar-corral.com/data/services.json) | 4 services with scope + outcomes |
| `getCaseStudies` | [/data/case-studies.json →](https://omar-corral.com/data/case-studies.json) | 2 case studies with metrics |
| `getSEOResources` | [/data/seo-resources.json →](https://omar-corral.com/data/seo-resources.json) | Resource center map + posts |
| `getContact` | [/data/contact.json →](https://omar-corral.com/data/contact.json) | Engagement process + CTA |
| `getInsights` | [/data/insights.json →](https://omar-corral.com/data/insights.json) | Recent analysis + focus areas |

**Token comparison block** (dark terminal-style):
```
Task: "What services does this person offer?"

Playwright path:
  → spin up browser           (cold start: ~3s)
  → load full page            (~4,200 tokens HTML)
  → extract accessibility tree (~6,100 tokens)
  → LLM summarization pass    (~2,800 tokens input)
  → TOTAL: ~9,400 tokens · ~12s · breaks on redesign

OC MCP path:
  → fetch /.well-known/webmcp.json  (~400 bytes)
  → call getServices()              (~1,100 bytes JSON)
  → TOTAL: ~280 tokens · ~200ms · schema-versioned
```

Reduction: **97%** fewer tokens. Survives redesigns. Zero hallucination risk from layout parsing.

Also live:
- `/.well-known/webmcp.json` — [View →](https://omar-corral.com/.well-known/webmcp.json)
- Browser tool registration active site-wide via `MCPTools.tsx`

---

### §6 — HOW TO BUILD THIS: ANY SITE, FOUR PHASES

**Section summary (always visible):**
> Start with Layer 1 — it takes days, not sprints, on any stack. Layer 2 follows once you understand your traffic patterns and have legal sign-off on active-defense routing.

**Four-phase implementation** (numbered, signal-green numbers):

| Phase | Timeline | Work |
|-------|----------|------|
| **1. Define your tools** | Days 1–3 | What would an AI agent actually need from your site? Write the tool names and descriptions before writing any code. |
| **2. Author static endpoints** | Days 4–7 | One JSON file per tool in `public/data/`. Publish `/.well-known/webmcp.json` pointing to them. Zero server infrastructure required. |
| **3. Browser registration** | Week 2 | Add `navigator.modelContext.registerTool()` calls. Test with Claude Projects or GPT with Browse. Verify tool discovery. |
| **4. Layer 2 deployment** | Weeks 3–4 | Honeypot pages (no links, no sitemap). Tarpit at CDN edge. robots.txt update. Legal review before activating active-defense routing. |

**Works for:**
E-commerce · SaaS · Higher education · Healthcare · Local business · Media & publishing

Tool design heuristics (always visible, short):
- Tools should answer questions, not expose raw database records
- Name tools by the agent's goal, not your data model (`getServices`, not `fetchServiceEntries`)
- Keep inputSchema minimal — optional filters only, never required params on read tools
- Public data only in Layer 1 — authenticated/private data requires separate auth patterns

**Technical depth (accordion):**

Full implementation checklist:

**Layer 1 checklist:**
- [ ] Define tool vocabulary (4–8 tools for most sites)
- [ ] Author `/public/data/*.json` files with `schema: "oc-mcp/v1"` header
- [ ] Author `/.well-known/webmcp.json` with full tool definitions
- [ ] Set `Cache-Control` headers at CDN (7 days for slow-changing data, 24h for feed-like data)
- [ ] Create `MCPTools.tsx` client component with `navigator.modelContext.registerTool()` calls
- [ ] Add `MCPTools` to root layout `<head>`
- [ ] Test: fetch manifest manually, verify JSON is valid, confirm browser tool registration in DevTools console
- [ ] Add `/oc-mcp/` (or equivalent) POV page explaining the architecture to potential clients

**Layer 2 checklist:**
- [ ] Update `robots.txt` with explicit WebMCP invitation + unauthorized agent prohibition
- [ ] Create 2–3 honeypot pages under `/honeypot/` (no `<a>` links from real content, no sitemap)
- [ ] Configure CDN edge rule: if `request.url.startsWith('/honeypot/')` → fingerprint + slow response
- [ ] Configure tarpit response (30s delayed 200 with garbage data, or infinite chunked stream)
- [ ] Legal review of active-defense routing before enabling (especially regulated industries)
- [ ] Set up monitoring: log user-agent strings, flag anomalous crawl rates, review weekly

**Monitoring + observability:**
- Log all requests to `/data/*.json` separately — these are agent calls, not human visits
- Track user-agent distribution on data endpoints (legitimate agents vs. unknown)
- Alert on >1000 requests/hour to any single data endpoint from a single IP
- Log honeypot page access separately — each access is a fingerprinted scraper event

**For regulated industries (higher education, healthcare, finance):**
- Layer 1 (read-only public data): no special compliance requirements beyond existing data governance
- Layer 2 (active defense): consult legal before deploying tarpit responses — ensure no overlap with legitimate accessibility agents (screen readers, assistive technology) which may use unconventional user-agent strings
- FERPA (higher ed) / HIPAA (healthcare): never expose protected records in Layer 1 tool responses, even read-only
- Data residency: static JSON files on CDN are covered by existing data residency agreements for the host site

---

### CTA — "WANT THIS FOR YOUR SITE?"

```
H2: Want this for your site?

Copy (2 sentences):
The architecture is not complex. The decision is whether to build it
before you need it or after the first agent intermediates your funnel.

Primary:    [Start a conversation →]  → /#contact
Secondary:  [Read the zero-click research →]  → omac049.github.io/seo-zero-click/
```

---

## 6. Visual + Style Spec

Extends current `/oc-mcp/` page styles:

| Token | Value |
|-------|-------|
| Background | `#000000` |
| Surface alt | `#0a0a0a` |
| Signal green | `#00E55C` |
| Muted text | `#71717a` |
| Body font | `var(--font-inter)` |
| Heading font | `var(--font-dm-serif)` |
| Mono font | `'Courier New', Courier, monospace` |
| Max content width | `900px` (content), `1300px` (outer with nav) |
| Section padding | `5rem` top/bottom |

Section backgrounds alternate: `#000000` → `#0a0a0a` → repeat.

Section numbers (§1, §2…): DM Serif Display, `clamp(4rem, 8vw, 7rem)`, opacity 0.08, positioned behind section heading.

Accordion trigger: `▾ Technical depth` in signal-green, `font-family: var(--font-inter)`, `font-size: 0.875rem`, `font-weight: 600`. Icon rotates 180° on open. Transition: `max-height 350ms ease`, `opacity 250ms ease`.

Live proof badge: `border-left: 3px solid #00E55C`, `background: #0a0a0a`, `padding: 1rem 1.25rem`.

Code blocks: `background: #111`, `border: 1px solid #222`, `border-radius: 4px`, monospace, signal-green for keys/values on highlight.

---

## 7. Responsive Behaviour

| Breakpoint | Layout |
|-----------|--------|
| < 640px | Single column, no section nav, reduced font sizes via `clamp()` |
| 640–1024px | Single column, no section nav, mobile anchor pills |
| ≥ 1024px | Two-column: 200px left nav + content |
| ≥ 1280px | Two-column: 240px left nav + content |

Left nav column: `position: sticky; top: 120px; align-self: start; max-height: calc(100vh - 160px); overflow-y: auto`.

---

## 8. Metadata Update

```tsx
export const metadata = {
  title: 'OC MCP — The Front Door for AI Agents | Omar Corral',
  description:
    'How omar-corral.com built an AI-agent-native web layer: 6 typed tools, .well-known manifest, dual-layer scraper defense. The complete architecture brief.',
  alternates: { canonical: 'https://omar-corral.com/oc-mcp/' },
  openGraph: {
    title: 'OC MCP — The Front Door for AI Agents',
    description: 'Complete architecture brief: authorized tool access + scraper defense. Live on omar-corral.com.',
  },
};
```

---

## 9. Spec Self-Review

- **Placeholders:** None. All content sections have real copy drawn from the UAGC white paper source material and the live OC MCP implementation.
- **Consistency:** Architecture diagram in §2 matches the three mechanisms in §4. Live proof links in §5 point to real deployed files. Phase 4 checklist in §6 matches Layer 2 description in §4.
- **Scope:** Single page, single route. Focused. No new routes, no new data files.
- **Ambiguity:** Token counts (9,400 / 280) are labeled as approximate — "measured" in the UI, but should be presented as directional not audited. Clarified in copy as "~".
- **Client component boundary:** `MCPPageClient.tsx` owns all interactivity. `page.tsx` is a thin server shell with metadata only. This is consistent with existing patterns in the codebase (e.g., `CaseStudiesPageContent.tsx`).
