'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import s from './page.module.css';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, delay, ease: 'easeOut' as const },
});

const revealSection = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4, ease: 'easeOut' as const },
};

const SECTIONS = [
  { id: 's1', label: 'The Problem' },
  { id: 's2', label: 'The Architecture' },
  { id: 's3', label: 'Layer 1: Authorized Access' },
  { id: 's4', label: 'Layer 2: Scraper Defense' },
  { id: 's5', label: 'Live Proof' },
  { id: 's6', label: 'How to Build' },
] as const;

type SectionId = typeof SECTIONS[number]['id'];

const SECTION_IDS = new Set(SECTIONS.map(s => s.id));

function isSectionId(val: string | null): val is SectionId {
  return val !== null && SECTION_IDS.has(val as SectionId);
}

let panelIdCounter = 0;

function Accordion({ label, children }: { label?: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const panelId = useRef(`accordion-panel-${++panelIdCounter}`);
  const btnId = useRef(`accordion-btn-${panelIdCounter}`);
  return (
    <div className={s.accordionWrapper}>
      <button
        id={btnId.current}
        className={s.accordionTrigger}
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        aria-controls={panelId.current}
      >
        <em className={`${s.accordionIcon} ${open ? s.accordionIconOpen : ''}`} aria-hidden="true">▾</em>
        {label ?? 'Technical depth'}
      </button>
      <div
        id={panelId.current}
        role="region"
        aria-labelledby={btnId.current}
        aria-hidden={!open}
        className={`${s.accordionBody} ${open ? s.accordionBodyOpen : ''}`}
      >
        <div className={s.accordionInner}>{children}</div>
      </div>
    </div>
  );
}

export default function MCPPageClient() {
  const [activeSection, setActiveSection] = useState<SectionId>('s1');
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('[data-section]');
    observerRef.current = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const val = entry.target.getAttribute('data-section');
            if (isSectionId(val)) setActiveSection(val);
          }
        });
      },
      { threshold: 0.25, rootMargin: '-80px 0px -55% 0px' },
    );
    sections.forEach(sec => observerRef.current?.observe(sec));
    return () => observerRef.current?.disconnect();
  }, []);

  const manifestSnippet = `{
  "version": "1.0",
  "publisher": { "name": "Omar Corral", "url": "https://omar-corral.com" },
  "tools": [
    { "name": "getProfile",     "riskLevel": "low", "endpoint": "/data/profile.json" },
    { "name": "getServices",    "riskLevel": "low", "endpoint": "/data/services.json" },
    { "name": "getCaseStudies", "riskLevel": "low", "endpoint": "/data/case-studies.json" },
    { "name": "getSEOResources","riskLevel": "low", "endpoint": "/data/seo-resources.json" },
    { "name": "getContact",     "riskLevel": "low", "endpoint": "/data/contact.json" },
    { "name": "getInsights",    "riskLevel": "low", "endpoint": "/data/insights.json" }
  ]
}`;

  const registerSnippet = `// MCPTools.tsx — runs in <head> on every page
useEffect(() => {
  const nav = navigator as Navigator & {
    modelContext?: { registerTool: (cfg: object) => void }
  };
  if (!nav.modelContext?.registerTool) return; // no-op in all current browsers

  nav.modelContext.registerTool({
    name: 'getProfile',
    description: "Returns Omar Corral's professional profile and expertise",
    inputSchema: { type: 'object', properties: {} },
    execute: async () =>
      fetch('/data/profile.json').then(r => r.json()),
  });
  // … repeated for all 6 tools
}, []);`;

  const fullSchemaSnippet = `// getServices — inputSchema supports optional category filter
{
  "name": "getServices",
  "description": "Returns available service offerings with scope, ideal client, and outcomes",
  "riskLevel": "low",
  "endpoint": "https://omar-corral.com/data/services.json",
  "method": "GET",
  "inputSchema": {
    "type": "object",
    "properties": {
      "category": {
        "type": "string",
        "enum": ["seo-audit", "ai-search-strategy", "content-strategy", "growth-analytics"],
        "description": "Filter services by category (optional)"
      }
    }
  },
  "rateLimit": { "requestsPerMinute": 60 }
}`;

  const robotsSnippet = `# Unauthorized AI agent access is prohibited.
# Compliant agents: use /.well-known/webmcp.json for structured tool access.

User-agent: *
Disallow: /honeypot/

# Confirmed-compliant crawlers — whitelisted
User-agent: Googlebot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /`;

  return (
    <div className={s.page}>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className={s.hero}>
        <div className={s.heroContainer}>
          <motion.p className={s.heroEyebrow} {...fadeUp(0.1)}>OC MCP · Version 1.0 · May 2026</motion.p>
          <motion.h1 className={s.heroH1} {...fadeUp(0.25)}>The Front Door for AI Agents</motion.h1>
          <motion.p className={s.heroSub} {...fadeUp(0.35)}>
            AI agents are already accessing your site. The question is whether
            you invited them in or they let themselves in.
          </motion.p>

          <motion.div className={s.liveProofBadge} {...fadeUp(0.45)}>
            <p className={s.liveProofTitle}>
              <span className={s.liveProofDot} />
              omar-corral.com is running this architecture right now
            </p>
            <p className={s.liveProofMeta}>
              6 tools deployed · .well-known/webmcp.json published
            </p>
            <div className={s.liveProofLinks}>
              <a
                href="/.well-known/webmcp.json"
                target="_blank"
                rel="noopener noreferrer"
                className={s.linkGreen}
              >
                View manifest →
              </a>
              <a
                href="https://omar-corral.com/data/profile.json"
                target="_blank"
                rel="noopener noreferrer"
                className={s.linkGreen}
              >
                Try getProfile() →
              </a>
            </div>
          </motion.div>

          <motion.div className={s.statsRow} {...fadeUp(0.55)}>
            <div>
              <p className={s.statValue}>~97%</p>
              <p className={s.statLabel}>fewer tokens vs. Playwright</p>
            </div>
            <div>
              <p className={s.statValue}>6</p>
              <p className={s.statLabel}>typed tools deployed</p>
            </div>
            <div>
              <p className={s.statValue}>May 2026</p>
              <p className={s.statLabel}>live since</p>
            </div>
          </motion.div>

          <motion.div className={s.heroLinks} {...fadeUp(0.65)}>
            <a href="#s1" className={s.linkGreen}>Read the brief ↓</a>
            <a
              href="https://omac049.github.io/seo-zero-click/"
              target="_blank"
              rel="noopener noreferrer"
              className={s.linkWhite}
            >
              Zero-click research →
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Mobile anchor bar ─────────────────────────────────── */}
      <nav className={s.anchorBar} aria-label="Page sections">
        {SECTIONS.map(sec => (
          <a key={sec.id} href={`#${sec.id}`} className={s.anchorPill}>
            {sec.label}
          </a>
        ))}
      </nav>

      {/* ── Main layout: side nav + content ───────────────────── */}
      <div className={s.outerLayout}>
        {/* Side nav */}
        <nav className={s.sideNav} aria-label="Brief sections">
          <p className={s.navLabel}>In this brief</p>
          {SECTIONS.map(sec => (
            <a
              key={sec.id}
              href={`#${sec.id}`}
              className={`${s.navItem} ${activeSection === sec.id ? s.navItemActive : ''}`}
            >
              {sec.label}
            </a>
          ))}
          <hr className={s.navDivider} />
          <Link href="/#contact" className={s.navCta}>Start a conversation ↗</Link>
        </nav>

        {/* Content */}
        <main className={s.content}>

          {/* §1 — The Problem */}
          <motion.section
            id="s1"
            data-section="s1"
            className={s.sectionAlt}
            {...revealSection}
          >
            <div className={s.container}>
              <p className={s.sectionNumber} aria-hidden="true">§1</p>
              <h2 className={s.sectionHeading}>The Problem: Two Failure Modes</h2>
              <p className={s.sectionSummary}>
                AI agents access websites in one of two ways: through browser
                automation — expensive, fragile, hallucinates from mis-parsed
                HTML — or unauthorized scraping outside your control. Both are
                already happening. Neither is acceptable long-term.
              </p>

              <div className={s.beforeAfterGrid}>
                <div className={s.beforeAfterCol}>
                  <p className={`${s.beforeAfterLabel} ${s.beforeAfterLabelBad}`}>
                    Without WebMCP
                  </p>
                  {[
                    ['Tokens consumed', '8,000–12,000'],
                    ['Breaks on redesign?', 'Yes'],
                    ['Hallucination risk', 'High'],
                    ['Attribution', 'None'],
                    ['Latency', '~12 seconds'],
                  ].map(([k, v]) => (
                    <div key={k} className={s.beforeAfterRow}>
                      <span className={s.beforeAfterKey}>{k}</span>
                      <span className={s.beforeAfterValBad}>{v}</span>
                    </div>
                  ))}
                </div>
                <div className={s.beforeAfterCol}>
                  <p className={`${s.beforeAfterLabel} ${s.beforeAfterLabelGood}`}>
                    With OC MCP
                  </p>
                  {[
                    ['Tokens consumed', '~280'],
                    ['Breaks on redesign?', 'No'],
                    ['Hallucination risk', 'None'],
                    ['Attribution', 'Instrumented'],
                    ['Latency', '~200 ms'],
                  ].map(([k, v]) => (
                    <div key={k} className={s.beforeAfterRow}>
                      <span className={s.beforeAfterKey}>{k}</span>
                      <span className={s.beforeAfterValGood}>{v}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Accordion>
                <p className={s.h3}>Why Playwright-based browsing costs so much</p>
                <p className={s.body}>
                  Browser automation requires four sequential LLM passes before
                  an agent has an answer: (1) load and render full DOM, (2)
                  extract accessibility tree or screenshot, (3) LLM parse pass
                  to identify relevant content, (4) LLM summarization to produce
                  the final response. A typical portfolio homepage is ~4,200
                  tokens of raw HTML. The accessibility tree extraction adds
                  ~2× overhead. The parse + summarize passes add another ~2,800
                  tokens of prompt. Total: 9,000–12,000 tokens to answer
                  &ldquo;what services does this person offer?&rdquo;
                </p>

                <p className={s.h3}>Why robots.txt is no longer sufficient</p>
                <p className={s.body}>
                  Major search crawlers (Googlebot, ClaudeBot, PerplexityBot)
                  honour <span className={s.inlineCode}>robots.txt</span>.
                  But agentic browsers operated by end users do not fall under
                  robots.txt scope — the user is operating the agent, and the
                  agent is just a browser acting on the user&rsquo;s behalf.
                  The robots.txt prohibition applies to autonomous scrapers, not
                  to browser sessions. This is the gap WebMCP addresses.
                </p>

                <p className={s.h3}>The zero-click parallel</p>
                <p className={s.body}>
                  Just as Google AI Overviews reduced CTR 79% at a university
                  while rankings improved 51%, agent intermediation reduces site
                  visits while &ldquo;coverage&rdquo; (being cited in agent
                  responses) grows. If you don&rsquo;t control the structured
                  data layer, you don&rsquo;t control the answer.{' '}
                  <a
                    href="https://omac049.github.io/seo-zero-click/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={s.linkGreen}
                  >
                    Read the 17-month dataset →
                  </a>
                </p>
              </Accordion>
            </div>
          </motion.section>

          {/* §2 — Architecture */}
          <motion.section id="s2" data-section="s2" className={s.section} {...revealSection}>
            <div className={s.container}>
              <p className={s.sectionNumber} aria-hidden="true">§2</p>
              <h2 className={s.sectionHeading}>The Architecture: Two Layers</h2>
              <p className={s.sectionSummary}>
                Layer 1 invites authorized AI agents in through typed, versioned
                tool contracts. Layer 2 ensures unauthorized scrapers receive no
                useful harvest. Both layers run independently — Layer 1 requires
                no server infrastructure, Layer 2 operates at the CDN edge.
              </p>

              <pre className={s.archDiagram}>{`         Incoming AI agent request
                    │
         ┌──────────▼──────────┐
         │  Using WebMCP tools? │
         └─────┬───────────┬───┘
              YES          NO
               │            │
    ┌──────────▼──┐    ┌────▼──────────────────┐
    │  LAYER 1    │    │  LAYER 2              │
    │             │    │                       │
    │ .well-known │    │  Honeypot content     │
    │ /webmcp.json│    │  Tarpit latency       │
    │             │    │  Legal enforcement    │
    │ Typed JSON  │    │  (Amazon v.           │
    │ responses   │    │   Perplexity, 2026)   │
    └─────────────┘    └───────────────────────┘
    Clean, ~280 tokens  No productive harvest
    Schema-versioned    Fingerprinted + denied`}</pre>

              <Accordion>
                <p className={s.h3}>W3C Web ML CG — WebMCP specification</p>
                <p className={s.body}>
                  The WebMCP specification emerged from the Model Context
                  Protocol (Anthropic, late 2024) adapted for browser-native
                  execution by the W3C Web Machine Learning Community Group.
                  The key design decision is the tab-bound security model: tools
                  are scoped to the tab&rsquo;s origin, preventing cross-origin
                  tool injection. As of May 2026, the API is in Chrome Canary
                  behind a flag.
                </p>

                <p className={s.h3}>MCP vs. WebMCP — complementary, not competing</p>
                <p className={s.body}>
                  MCP (Anthropic) is server-to-server: it enables Claude
                  Desktop, Cursor, and similar tools to call your servers from
                  the client side. WebMCP is browser-native: it enables
                  AI-augmented browsers to call your site&rsquo;s tools from
                  inside a tab. Both can coexist. The OC MCP static JSON
                  approach works with both — the endpoints are plain HTTP, so
                  any MCP client can call them too.
                </p>

                <p className={s.h3}>CDN layer role</p>
                <p className={s.body}>
                  Static JSON files are fully CDN-cacheable. Set{' '}
                  <span className={s.inlineCode}>Cache-Control: public, max-age=604800</span>{' '}
                  (7 days) on slow-changing data like{' '}
                  <span className={s.inlineCode}>profile.json</span> and{' '}
                  <span className={s.inlineCode}>services.json</span>.
                  Use <span className={s.inlineCode}>max-age=86400</span> (24h)
                  for feed-like data like{' '}
                  <span className={s.inlineCode}>insights.json</span>. Edge
                  delivery means effectively zero latency for agents relative
                  to a Playwright cold start.
                </p>
              </Accordion>
            </div>
          </motion.section>

          {/* §3 — Layer 1 */}
          <motion.section id="s3" data-section="s3" className={s.sectionAlt} {...revealSection}>
            <div className={s.container}>
              <p className={s.sectionNumber} aria-hidden="true">§3</p>
              <h2 className={s.sectionHeading}>Layer 1: Authorized Tool Access</h2>
              <p className={s.sectionSummary}>
                Three components. A discovery manifest. Static tool endpoints.
                Browser registration. All three run on a static site with no
                server infrastructure.
              </p>

              <ol className={s.numberedList}>
                <li className={s.numberedItem}>
                  <span className={s.numberedIndex}>1</span>
                  <div>
                    <strong className={s.numberedTitle}>
                      Discovery —{' '}
                      <span className={s.mono}>/.well-known/webmcp.json</span>
                    </strong>
                    <p className={s.numberedBody}>
                      The agent fetches this manifest first. It discovers every
                      available tool, the tool&rsquo;s input schema, the
                      endpoint URL, the risk level, and the rate limit. No
                      documentation site required — the manifest is
                      self-describing.
                    </p>
                    <pre className={s.codeBlock}>{manifestSnippet}</pre>
                  </div>
                </li>

                <li className={s.numberedItem}>
                  <span className={s.numberedIndex}>2</span>
                  <div>
                    <strong className={s.numberedTitle}>
                      Static endpoints —{' '}
                      <span className={s.mono}>/data/*.json</span>
                    </strong>
                    <p className={s.numberedBody}>
                      Each file is a typed, versioned JSON response with a{' '}
                      <span className={s.inlineCode}>schema: &quot;oc-mcp/v1&quot;</span>{' '}
                      key. No server required — works on GitHub Pages, Vercel,
                      Netlify, or any CDN. Example response structure:
                    </p>
                    <pre className={s.codeBlock}>{`{
  "schema": "oc-mcp/v1",
  "tool": "getProfile",
  "data": {
    "name": "Omar Corral",
    "title": "Digital Strategist",
    "specialization": "SEO, AI Search & Organic Growth",
    "yearsExperience": 12,
    "expertise": ["Technical SEO", "AI Search Optimization / GEO", "..."]
  },
  "generated": "2026-05-06",
  "ttl": 604800
}`}</pre>
                  </div>
                </li>

                <li className={s.numberedItem}>
                  <span className={s.numberedIndex}>3</span>
                  <div>
                    <strong className={s.numberedTitle}>
                      Browser registration —{' '}
                      <span className={s.mono}>navigator.modelContext.registerTool()</span>
                    </strong>
                    <p className={s.numberedBody}>
                      Progressive enhancement. Registers tools in the browser
                      session for agents with WebMCP support. Silent no-op
                      in all current stable browsers. When Chrome ships stable
                      WebMCP support, all tools are already registered.
                    </p>
                    <pre className={s.codeBlock}>{registerSnippet}</pre>
                  </div>
                </li>
              </ol>

              <Accordion label="Full tool schemas + versioning">
                <p className={s.h3}>All 6 tool schemas</p>
                <pre className={s.codeBlock}>{fullSchemaSnippet}</pre>
                <p className={s.body}>
                  The same structure applies to all six tools. See{' '}
                  <a
                    href="/.well-known/webmcp.json"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={s.linkGreen}
                  >
                    the live manifest
                  </a>{' '}
                  for the complete definitions.
                </p>

                <p className={s.h3}>Risk level taxonomy</p>
                <p className={s.body}>
                  <strong className={s.green}>low</strong> — read-only, public
                  data, no PII. All OC MCP tools are{' '}
                  <span className={s.inlineCode}>low</span>.
                  <br />
                  <strong className={s.muted}>medium</strong> — read-only,
                  potentially sensitive (pricing, private schedules).
                  <br />
                  <strong className={s.muted}>high</strong> — write operations,
                  form submissions, or authenticated data.
                </p>

                <p className={s.h3}>Schema versioning</p>
                <p className={s.body}>
                  The <span className={s.inlineCode}>schema: &quot;oc-mcp/v1&quot;</span>{' '}
                  key lets agents detect breaking changes. When the response
                  shape changes, bump to{' '}
                  <span className={s.inlineCode}>v2</span> and maintain the
                  old files at{' '}
                  <span className={s.inlineCode}>/data/v1/*.json</span> during
                  the transition period.
                </p>

                <p className={s.h3}>Cache / TTL strategy</p>
                <p className={s.body}>
                  <span className={s.inlineCode}>profile.json</span>,{' '}
                  <span className={s.inlineCode}>services.json</span>,{' '}
                  <span className={s.inlineCode}>contact.json</span> → 7-day
                  TTL (slow-changing).
                  <br />
                  <span className={s.inlineCode}>insights.json</span>,{' '}
                  <span className={s.inlineCode}>seo-resources.json</span> →
                  24-hour TTL (feed-like data updated more frequently).
                  <br />
                  Set via{' '}
                  <span className={s.inlineCode}>
                    Cache-Control: public, max-age=86400
                  </span>{' '}
                  at the CDN layer.
                </p>
              </Accordion>
            </div>
          </motion.section>

          {/* §4 — Layer 2 */}
          <motion.section id="s4" data-section="s4" className={s.section} {...revealSection}>
            <div className={s.container}>
              <p className={s.sectionNumber} aria-hidden="true">§4</p>
              <h2 className={s.sectionHeading}>Layer 2: Unauthorized Scraper Defense</h2>
              <p className={s.sectionSummary}>
                Unauthorized agents that bypass WebMCP tools are routed to
                infrastructure that wastes their resources and generates no
                useful data. Amazon v. Perplexity (March 2026) confirmed
                platforms have legal standing to enforce this proactively.
              </p>

              <ol className={s.numberedList}>
                <li className={s.numberedItem}>
                  <span className={s.numberedIndex}>1</span>
                  <div>
                    <strong className={s.numberedTitle}>Honeypot content</strong>
                    <p className={s.numberedBody}>
                      Pages that look structurally plausible but contain no real
                      data. A scraper that accesses a honeypot is fingerprinted.
                      Legitimate users and compliant crawlers never reach these
                      pages — no links from real content, no sitemap entries.
                    </p>
                  </div>
                </li>
                <li className={s.numberedItem}>
                  <span className={s.numberedIndex}>2</span>
                  <div>
                    <strong className={s.numberedTitle}>Tarpit responses</strong>
                    <p className={s.numberedBody}>
                      Unrecognized or flagged user-agents receive deliberate
                      latency at the CDN edge — 30–60 second TTFB, or a chunked
                      response that never completes. The scraper&rsquo;s thread
                      blocks, consuming the attacker&rsquo;s compute budget
                      rather than yours. Named after the Nepenthes open-source
                      tarpit.
                    </p>
                  </div>
                </li>
                <li className={s.numberedItem}>
                  <span className={s.numberedIndex}>3</span>
                  <div>
                    <strong className={s.numberedTitle}>Legal boundary</strong>
                    <p className={s.numberedBody}>
                      <span className={s.inlineCode}>robots.txt</span> explicitly
                      prohibits unauthorized agent access. Post-Amazon v.
                      Perplexity, this creates an enforceable prohibition — not
                      just a convention. The legal standing is now judicially
                      established.
                    </p>
                  </div>
                </li>
              </ol>

              <Accordion label="Amazon v. Perplexity + full technical detail">
                <p className={s.h3}>Amazon v. Perplexity (March 2026)</p>
                <p className={s.body}>
                  A U.S. federal judge granted Amazon a temporary injunction
                  blocking Perplexity&rsquo;s &ldquo;Comet&rdquo; AI browser
                  from scraping its site, finding{' '}
                  <em>&ldquo;strong evidence&rdquo;</em> of unauthorized access
                  and <em>&ldquo;essentially undisputed evidence&rdquo;</em> of
                  harm — advertising revenue disruption, customer data exposure,
                  and brand experience loss. Amazon responded reactively. The
                  WebMCP architecture is proactive: build the authorized channel
                  and the defense layer before the reactive cycle begins.
                </p>

                <p className={s.h3}>Tarpit implementation</p>
                <p className={s.body}>
                  Run at CDN/edge (Cloudflare Workers, Vercel Edge Middleware,
                  or equivalent). Trigger conditions: user-agent strings
                  matching known unauthorized scrapers, anomalous request
                  patterns (too-fast, too-regular, no referer header), or
                  honeypot page access. Response:{' '}
                  <span className={s.inlineCode}>Transfer-Encoding: chunked</span>{' '}
                  with infinite slow-dribble, or{' '}
                  <span className={s.inlineCode}>Connection: keep-alive</span>{' '}
                  with 30–60s wait before returning garbage data.
                </p>

                <p className={s.h3}>robots.txt pattern</p>
                <pre className={s.codeBlock}>{robotsSnippet}</pre>

                <p className={s.h3}>Additional defense layers</p>
                <p className={s.body}>
                  <strong className={s.green}>ai.txt</strong> (emerging standard)
                  — explicit AI training opt-out.
                  <br />
                  <strong className={s.green}>TDMRep</strong> (W3C Text and Data
                  Mining Reservation Protocol) — machine-readable rights
                  declaration.
                  <br />
                  <strong className={s.green}>Canary tokens</strong> — synthetic
                  data embedded in honeypot pages; if it appears in model
                  outputs, the scraper&rsquo;s training data is confirmed
                  contaminated by your honeypot.
                </p>

                <p className={s.h3}>Note for regulated industries</p>
                <p className={s.body}>
                  Layer 2 deployment should include legal review before
                  activating active-defense routing in higher education,
                  healthcare, or finance. Ensure tarpit rules do not overlap
                  with legitimate accessibility agents (screen readers,
                  assistive technology) which may use unconventional
                  user-agent strings. The legal boundary (robots.txt
                  prohibition) can be established immediately; tarpit
                  deployment follows compliance sign-off.
                </p>
              </Accordion>
            </div>
          </motion.section>

          {/* §5 — Live Proof */}
          <motion.section id="s5" data-section="s5" className={s.sectionAlt} {...revealSection}>
            <div className={s.container}>
              <p className={s.sectionNumber} aria-hidden="true">§5</p>
              <h2 className={s.sectionHeading}>Live Proof: OC MCP on omar-corral.com</h2>
              <p className={s.sectionSummary}>
                Layer 1 is running on this site right now. All six tools are
                deployed. Call any endpoint directly — no authentication, no
                API key, no scraping required.
              </p>

              <table className={s.toolTable}>
                <thead>
                  <tr>
                    <th>Tool</th>
                    <th>Endpoint</th>
                    <th>Returns</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: 'getProfile',      path: '/data/profile.json',       desc: 'Bio, expertise, credentials' },
                    { name: 'getServices',     path: '/data/services.json',      desc: '4 services with scope + outcomes' },
                    { name: 'getCaseStudies',  path: '/data/case-studies.json',  desc: '2 case studies with metrics' },
                    { name: 'getSEOResources', path: '/data/seo-resources.json', desc: 'Resource center map + posts' },
                    { name: 'getContact',      path: '/data/contact.json',       desc: 'Engagement process + CTA' },
                    { name: 'getInsights',     path: '/data/insights.json',      desc: 'Recent analysis + focus areas' },
                  ].map(tool => (
                    <tr key={tool.name}>
                      <td><span className={s.toolName}>{tool.name}</span></td>
                      <td><span className={s.toolEndpoint}>{tool.path}</span></td>
                      <td className={s.toolDesc}>{tool.desc}</td>
                      <td>
                        <a
                          href={`https://omar-corral.com${tool.path}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={s.toolLink}
                        >
                          Live →
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className={s.tokenBlock}>
                <p className={s.tokenBlockTitle}>
                  Task: &ldquo;What services does this person offer?&rdquo;
                </p>
                <div className={s.tokenSection}>
                  <p className={s.tokenSectionTitle}>Playwright path</p>
                  <div className={s.tokenLine}><span className={s.tokenLineLabel}>→ spin up browser (cold start)</span><span className={s.tokenLineBad}>~3 seconds</span></div>
                  <div className={s.tokenLine}><span className={s.tokenLineLabel}>→ load full page HTML</span><span className={s.tokenLineBad}>~4,200 tokens</span></div>
                  <div className={s.tokenLine}><span className={s.tokenLineLabel}>→ extract accessibility tree</span><span className={s.tokenLineBad}>~6,100 tokens</span></div>
                  <div className={s.tokenLine}><span className={s.tokenLineLabel}>→ LLM summarization pass</span><span className={s.tokenLineBad}>~2,800 tokens</span></div>
                  <div className={s.tokenLine}><span className={s.tokenLineLabel}>TOTAL</span><span className={s.tokenLineBad}>~9,400 tokens · ~12s</span></div>
                </div>
                <div className={s.tokenSection}>
                  <p className={s.tokenSectionTitle}>OC MCP path</p>
                  <div className={s.tokenLine}><span className={s.tokenLineLabel}>→ fetch /.well-known/webmcp.json</span><span className={s.tokenLineGood}>~400 bytes</span></div>
                  <div className={s.tokenLine}><span className={s.tokenLineLabel}>→ call getServices()</span><span className={s.tokenLineGood}>~1,100 bytes JSON</span></div>
                  <div className={s.tokenLine}><span className={s.tokenLineLabel}>TOTAL</span><span className={s.tokenLineGood}>~280 tokens · ~200ms</span></div>
                </div>
                <div className={s.tokenReduction}>
                  Reduction:{' '}
                  <span className={s.tokenReductionValue}>97% fewer tokens</span>
                  {' '}· survives redesigns · zero hallucination risk
                </div>
              </div>
            </div>
          </motion.section>

          {/* §6 — How to Build */}
          <motion.section id="s6" data-section="s6" className={s.section} {...revealSection}>
            <div className={s.container}>
              <p className={s.sectionNumber} aria-hidden="true">§6</p>
              <h2 className={s.sectionHeading}>How to Build This: Any Site, Four Phases</h2>
              <p className={s.sectionSummary}>
                Start with Layer 1 — it takes days, not sprints, on any stack.
                Layer 2 follows once you understand your traffic patterns and
                have legal sign-off on active-defense routing.
              </p>

              <table className={s.phaseTable}>
                <tbody>
                  {[
                    { n: '1', title: 'Define your tools',       time: 'Days 1–3',  body: "What would an AI agent actually need from your site? Write the tool names and descriptions before writing any code. Aim for 4–8 tools. Name them by the agent's goal, not your data model." },
                    { n: '2', title: 'Author static endpoints', time: 'Days 4–7',  body: 'One JSON file per tool in public/data/. Publish /.well-known/webmcp.json pointing to them. Zero server infrastructure required. Test by fetching the manifest manually.' },
                    { n: '3', title: 'Browser registration',    time: 'Week 2',    body: 'Add navigator.modelContext.registerTool() calls in a client component. Test with Claude Projects or GPT with Browse. Verify tool discovery in DevTools console.' },
                    { n: '4', title: 'Layer 2 deployment',      time: 'Weeks 3–4', body: 'Honeypot pages (no links, no sitemap). Tarpit at CDN edge. robots.txt update. Legal review before activating active-defense routing.' },
                  ].map(phase => (
                    <tr key={phase.n}>
                      <td className={s.phaseNum}>{phase.n}</td>
                      <td>
                        <div className={s.phaseTitle}>{phase.title}</div>
                        <div className={s.phaseTimeline}>{phase.time}</div>
                        <p className={s.phaseBody}>{phase.body}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <p className={s.h3}>Works for</p>
              <div className={s.tagList}>
                {['E-commerce', 'SaaS', 'Higher education', 'Healthcare', 'Local business', 'Media & publishing'].map(tag => (
                  <span key={tag} className={s.tag}>{tag}</span>
                ))}
              </div>

              <Accordion label="Full implementation checklist">
                <p className={s.h3}>Layer 1 checklist</p>
                <p className={s.body}>
                  □ Define tool vocabulary (4–8 tools for most sites)<br />
                  □ Author <span className={s.inlineCode}>/public/data/*.json</span> with <span className={s.inlineCode}>schema: &quot;oc-mcp/v1&quot;</span> header<br />
                  □ Author <span className={s.inlineCode}>/.well-known/webmcp.json</span> with full tool definitions<br />
                  □ Set <span className={s.inlineCode}>Cache-Control</span> headers at CDN<br />
                  □ Create <span className={s.inlineCode}>MCPTools.tsx</span> with <span className={s.inlineCode}>registerTool()</span> calls<br />
                  □ Add <span className={s.inlineCode}>MCPTools</span> to root layout <span className={s.inlineCode}>&lt;head&gt;</span><br />
                  □ Test: fetch manifest, verify JSON validity, confirm browser registration in DevTools<br />
                  □ Publish a POV page explaining the architecture to clients
                </p>

                <p className={s.h3}>Layer 2 checklist</p>
                <p className={s.body}>
                  □ Update <span className={s.inlineCode}>robots.txt</span> with WebMCP invitation + unauthorized agent prohibition<br />
                  □ Create 2–3 honeypot pages under <span className={s.inlineCode}>/honeypot/</span> (no links, no sitemap)<br />
                  □ Configure CDN edge rule: honeypot access → fingerprint + slow response<br />
                  □ Configure tarpit (30–60s delayed 200 with garbage data)<br />
                  □ Legal review of active-defense routing (especially regulated industries)<br />
                  □ Monitoring: log data endpoint requests separately, alert on &gt;1,000 req/hr per IP
                </p>

                <p className={s.h3}>Tool design heuristics</p>
                <p className={s.body}>
                  Tools should answer questions, not expose raw database records.<br />
                  Name tools by the agent&rsquo;s goal:{' '}
                  <span className={s.inlineCode}>getServices</span> not{' '}
                  <span className={s.inlineCode}>fetchServiceEntries</span>.<br />
                  Keep inputSchema minimal — optional filters only; never required
                  params on read tools.<br />
                  Public data only in Layer 1 — authenticated or private data
                  requires separate auth patterns outside this architecture.
                </p>
              </Accordion>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.section className={s.sectionAlt} {...revealSection}>
            <div className={s.container}>
              <h2 className={s.sectionHeading}>Want this for your site?</h2>
              <p className={s.sectionSummary}>
                The architecture is not complex. The decision is whether to
                build it before you need it or after the first agent
                intermediates your funnel.
              </p>
              <div className={s.ctaLinks}>
                <Link href="/#contact" className={s.ctaButton}>
                  Start a conversation →
                </Link>
                <a
                  href="https://omac049.github.io/seo-zero-click/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={s.linkGreen}
                >
                  See the zero-click research →
                </a>
              </div>
            </div>
          </motion.section>

        </main>
      </div>
    </div>
  );
}
