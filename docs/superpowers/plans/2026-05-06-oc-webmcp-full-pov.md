# OC WebMCP Full POV Page — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the current `/oc-mcp` scrollytelling page with the full dual-layer WebMCP architecture brief — skimmable executive summary on top, expandable technical depth below, sticky left-rail section nav, and all content from the spec.

**Architecture:** Server component `page.tsx` holds metadata and renders the client component. `MCPPageClient.tsx` owns all interactivity (sticky nav IntersectionObserver, accordion state). `page.module.css` holds all layout and animation CSS.

**Tech Stack:** Next.js 15 App Router, React 18, CSS Modules, IntersectionObserver API (no Framer Motion — CSS transitions only).

---

## File Map

| File | Action | Responsibility |
|------|--------|---------------|
| `src/app/oc-mcp/page.tsx` | **Replace** | Server component: exports metadata, renders `<MCPPageClient />` |
| `src/app/oc-mcp/MCPPageClient.tsx` | **Create** | Client component: all page content, accordion state, sticky nav |
| `src/app/oc-mcp/page.module.css` | **Create** | All layout, animation, and component CSS |

No other files are touched. No new dependencies.

---

## Task 1: Create `page.module.css`

**Files:**
- Create: `src/app/oc-mcp/page.module.css`

- [ ] **Step 1: Create the CSS module with all styles**

Create `src/app/oc-mcp/page.module.css` with this exact content:

```css
/* ── Layout ──────────────────────────────────────────── */
.page {
  background-color: #000;
  color: #fff;
  font-family: var(--font-inter), system-ui, sans-serif;
  min-height: 100vh;
}

.outerLayout {
  display: block;
}

@media (min-width: 1024px) {
  .outerLayout {
    display: grid;
    grid-template-columns: 220px minmax(0, 1fr);
    align-items: start;
    max-width: 1300px;
    margin-left: auto;
    margin-right: auto;
    padding-left: clamp(1.25rem, 3vw, 2rem);
    padding-right: clamp(1.25rem, 3vw, 2rem);
    gap: 0 3rem;
  }
}

.content {
  min-width: 0;
}

/* ── Sticky side nav ─────────────────────────────────── */
.sideNav {
  display: none;
}

@media (min-width: 1024px) {
  .sideNav {
    display: flex;
    flex-direction: column;
    gap: 0;
    position: sticky;
    top: 120px;
    align-self: start;
    max-height: calc(100vh - 160px);
    overflow-y: auto;
    padding-top: 5rem;
  }
}

.navLabel {
  font-size: 0.6875rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #52525b;
  margin: 0 0 0.75rem 0;
  padding: 0 0.5rem;
}

.navItem {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  padding: 0.45rem 0.5rem;
  font-size: 0.8125rem;
  color: #71717a;
  text-decoration: none;
  border-radius: 3px;
  transition: color 150ms ease;
  line-height: 1.3;
}

.navItem:hover {
  color: #e4e4e7;
}

.navItemActive {
  color: #00e55c;
  font-weight: 600;
}

.navItemActive::before {
  content: '';
  display: block;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #00e55c;
  flex-shrink: 0;
}

.navDivider {
  border: none;
  border-top: 1px solid #27272a;
  margin: 0.75rem 0.5rem;
}

.navCta {
  display: inline-block;
  margin: 0.5rem 0.5rem 0;
  font-size: 0.8125rem;
  color: #00e55c;
  text-decoration: none;
  font-weight: 600;
}

/* ── Mobile anchor bar ───────────────────────────────── */
.anchorBar {
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;
  padding: 0.75rem clamp(1.25rem, 4vw, 1.75rem);
  background: #0a0a0a;
  border-bottom: 1px solid #27272a;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.anchorBar::-webkit-scrollbar {
  display: none;
}

@media (min-width: 1024px) {
  .anchorBar {
    display: none;
  }
}

.anchorPill {
  flex-shrink: 0;
  padding: 0.375rem 0.875rem;
  border-radius: 100px;
  border: 1px solid #3f3f46;
  background: transparent;
  color: #a1a1aa;
  font-size: 0.75rem;
  font-family: var(--font-inter), system-ui, sans-serif;
  text-decoration: none;
  white-space: nowrap;
  transition: color 150ms ease, border-color 150ms ease;
}

.anchorPill:hover {
  color: #e4e4e7;
  border-color: #71717a;
}

/* ── Sections ────────────────────────────────────────── */
.container {
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  padding-left: clamp(1.25rem, 4vw, 1.75rem);
  padding-right: clamp(1.25rem, 4vw, 1.75rem);
}

@media (min-width: 1024px) {
  .container {
    padding-left: 0;
    padding-right: 0;
    max-width: 860px;
    margin-left: 0;
  }
}

.section {
  padding-top: 5rem;
  padding-bottom: 5rem;
  background-color: #000;
}

.sectionAlt {
  padding-top: 5rem;
  padding-bottom: 5rem;
  background-color: #0a0a0a;
}

.sectionNumber {
  font-family: var(--font-dm-serif), Georgia, serif;
  font-size: clamp(4rem, 10vw, 7rem);
  color: #fff;
  opacity: 0.04;
  line-height: 1;
  margin: 0 0 -1.5rem 0;
  user-select: none;
  pointer-events: none;
}

.sectionHeading {
  font-family: var(--font-dm-serif), Georgia, serif;
  font-size: clamp(1.5rem, 4vw, 2rem);
  font-weight: 400;
  margin: 0 0 1rem 0;
  line-height: 1.2;
}

.sectionSummary {
  font-size: clamp(0.9375rem, 2vw, 1.0625rem);
  line-height: 1.7;
  color: #a1a1aa;
  margin: 0 0 2rem 0;
  max-width: 68ch;
}

/* ── Hero ────────────────────────────────────────────── */
.hero {
  padding-top: 5rem;
  padding-bottom: 5rem;
  background-color: #000;
  border-top: 5px solid #00e55c;
}

.heroEyebrow {
  font-size: clamp(0.75rem, 2vw, 0.8125rem);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #00e55c;
  margin: 0 0 1.25rem 0;
}

.heroH1 {
  font-family: var(--font-dm-serif), Georgia, serif;
  font-size: clamp(2rem, 6vw, 3.25rem);
  font-weight: 400;
  line-height: 1.1;
  margin: 0 0 1.25rem 0;
  max-width: 22ch;
}

.heroSub {
  font-size: clamp(1rem, 2.4vw, 1.125rem);
  line-height: 1.65;
  color: #71717a;
  margin: 0 0 2.5rem 0;
  max-width: 54ch;
}

.liveProofBadge {
  border-left: 3px solid #00e55c;
  background: #0a0a0a;
  padding: 1rem 1.25rem;
  margin-bottom: 2.5rem;
  display: inline-block;
  max-width: 540px;
}

.liveProofDot {
  display: inline-block;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #00e55c;
  margin-right: 0.5rem;
  vertical-align: middle;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

.liveProofTitle {
  font-size: 0.9375rem;
  font-weight: 600;
  margin: 0 0 0.375rem 0;
  color: #e4e4e7;
}

.liveProofMeta {
  font-size: 0.8125rem;
  color: #71717a;
  margin: 0 0 0.75rem 0;
  font-family: 'Courier New', Courier, monospace;
}

.liveProofLinks {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 1.25rem;
}

.statsRow {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem 2rem;
  border-top: 1px solid #27272a;
  border-bottom: 1px solid #27272a;
  padding: 1.75rem 0;
  margin-bottom: 2.5rem;
}

.statValue {
  font-family: var(--font-dm-serif), Georgia, serif;
  font-size: clamp(1.5rem, 4vw, 2rem);
  color: #00e55c;
  line-height: 1.15;
  margin: 0 0 0.25rem 0;
}

.statLabel {
  font-size: 0.8125rem;
  color: #71717a;
  margin: 0;
  line-height: 1.4;
}

.heroLinks {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 1.75rem;
  align-items: center;
}

/* ── Before / After ──────────────────────────────────── */
.beforeAfterGrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
  gap: 0;
  border: 1px solid #27272a;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 2rem;
}

.beforeAfterCol {
  padding: 1.75rem;
}

.beforeAfterCol + .beforeAfterCol {
  border-top: 1px solid #27272a;
}

@media (min-width: 640px) {
  .beforeAfterCol + .beforeAfterCol {
    border-top: none;
    border-left: 1px solid #27272a;
  }
}

.beforeAfterLabel {
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #52525b;
  margin: 0 0 0.875rem 0;
}

.beforeAfterLabelBad {
  color: #71717a;
}

.beforeAfterLabelGood {
  color: #00e55c;
}

.beforeAfterRow {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid #18181b;
  font-size: 0.875rem;
  line-height: 1.4;
}

.beforeAfterRow:last-child {
  border-bottom: none;
}

.beforeAfterKey {
  color: #71717a;
}

.beforeAfterValBad {
  color: #a1a1aa;
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.8125rem;
}

.beforeAfterValGood {
  color: #00e55c;
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.8125rem;
  font-weight: 600;
}

/* ── Architecture diagram ────────────────────────────── */
.archDiagram {
  font-family: 'Courier New', Courier, monospace;
  font-size: clamp(0.6875rem, 2vw, 0.8125rem);
  line-height: 1.6;
  color: #a1a1aa;
  background: #050505;
  border: 1px solid #27272a;
  border-radius: 4px;
  padding: 1.5rem;
  overflow-x: auto;
  margin-bottom: 2rem;
  white-space: pre;
}

/* ── Numbered list ───────────────────────────────────── */
.numberedList {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.numberedItem {
  display: grid;
  grid-template-columns: minmax(2.5rem, auto) minmax(0, 1fr);
  gap: clamp(1rem, 3vw, 1.5rem);
  align-items: start;
}

.numberedIndex {
  font-family: var(--font-dm-serif), Georgia, serif;
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  color: #00e55c;
  line-height: 1;
}

.numberedTitle {
  display: block;
  font-size: clamp(1rem, 2.3vw, 1.125rem);
  font-weight: 600;
  color: #fff;
  margin-bottom: 0.5rem;
}

.numberedBody {
  margin: 0;
  font-size: clamp(0.9375rem, 2vw, 1.0625rem);
  line-height: 1.65;
  color: #71717a;
}

/* ── Code / Mono blocks ──────────────────────────────── */
.codeBlock {
  font-family: 'Courier New', Courier, monospace;
  background: #050505;
  border: 1px solid #27272a;
  border-radius: 4px;
  padding: 1.25rem;
  font-size: clamp(0.7rem, 2vw, 0.8125rem);
  line-height: 1.6;
  color: #d4d4d8;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  margin: 0 0 1.25rem 0;
  white-space: pre;
}

.codeBlockGreen {
  color: #00e55c;
}

/* ── Token comparison ────────────────────────────────── */
.tokenBlock {
  font-family: 'Courier New', Courier, monospace;
  background: #050505;
  border: 1px solid #27272a;
  border-radius: 4px;
  padding: 1.5rem;
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  line-height: 1.7;
  color: #71717a;
  margin-bottom: 2rem;
  overflow-x: auto;
}

.tokenBlockTitle {
  color: #a1a1aa;
  margin: 0 0 1rem 0;
  font-weight: 600;
  font-size: 0.8125rem;
}

.tokenSection {
  margin-bottom: 1rem;
}

.tokenSection:last-child {
  margin-bottom: 0;
}

.tokenSectionTitle {
  color: #52525b;
  margin: 0 0 0.375rem 0;
}

.tokenLine {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
}

.tokenLineLabel {
  color: #71717a;
}

.tokenLineBad {
  color: #a1a1aa;
}

.tokenLineGood {
  color: #00e55c;
  font-weight: 600;
}

.tokenReduction {
  border-top: 1px solid #27272a;
  padding-top: 0.75rem;
  margin-top: 0.75rem;
  font-size: 0.875rem;
  color: #e4e4e7;
}

.tokenReductionValue {
  color: #00e55c;
  font-weight: 700;
}

/* ── Live proof tool table ───────────────────────────── */
.toolTable {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.875rem;
  margin-bottom: 2rem;
}

.toolTable th {
  text-align: left;
  padding: 0.5rem 0.75rem;
  color: #52525b;
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border-bottom: 1px solid #27272a;
  font-weight: 500;
}

.toolTable td {
  padding: 0.875rem 0.75rem;
  border-bottom: 1px solid #18181b;
  vertical-align: middle;
}

.toolTable tr:last-child td {
  border-bottom: none;
}

.toolName {
  font-family: 'Courier New', Courier, monospace;
  color: #00e55c;
  font-size: 0.875rem;
  white-space: nowrap;
}

.toolEndpoint {
  font-family: 'Courier New', Courier, monospace;
  color: #71717a;
  font-size: 0.8125rem;
}

.toolDesc {
  color: #a1a1aa;
  font-size: 0.875rem;
}

.toolLink {
  color: #00e55c;
  text-decoration: none;
  font-size: 0.8125rem;
  white-space: nowrap;
}

.toolLink:hover {
  text-decoration: underline;
}

/* ── Phase table ─────────────────────────────────────── */
.phaseTable {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 2rem;
}

.phaseTable td {
  padding: 1.125rem 0;
  border-bottom: 1px solid #18181b;
  vertical-align: top;
}

.phaseTable tr:last-child td {
  border-bottom: none;
}

.phaseNum {
  font-family: var(--font-dm-serif), Georgia, serif;
  font-size: 1.75rem;
  color: #00e55c;
  line-height: 1;
  padding-right: 1.5rem;
  white-space: nowrap;
}

.phaseTitle {
  font-weight: 600;
  font-size: 0.9375rem;
  color: #e4e4e7;
  margin-bottom: 0.25rem;
}

.phaseTimeline {
  font-size: 0.8125rem;
  color: #52525b;
  margin-bottom: 0.375rem;
  font-family: 'Courier New', Courier, monospace;
}

.phaseBody {
  font-size: 0.9375rem;
  color: #71717a;
  line-height: 1.55;
  margin: 0;
}

/* ── Accordion ───────────────────────────────────────── */
.accordionWrapper {
  margin-top: 2rem;
  border-top: 1px solid #27272a;
}

.accordionTrigger {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 0;
  background: none;
  border: none;
  cursor: pointer;
  color: #00e55c;
  font-family: var(--font-inter), system-ui, sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  width: 100%;
  text-align: left;
}

.accordionTrigger:hover {
  opacity: 0.8;
}

.accordionIcon {
  display: inline-block;
  transition: transform 300ms ease;
  font-style: normal;
}

.accordionIconOpen {
  transform: rotate(180deg);
}

.accordionBody {
  overflow: hidden;
  max-height: 0;
  opacity: 0;
  transition: max-height 400ms ease, opacity 300ms ease;
}

.accordionBodyOpen {
  max-height: 6000px;
  opacity: 1;
}

.accordionInner {
  padding-bottom: 1.5rem;
}

/* ── Typography helpers ──────────────────────────────── */
.green {
  color: #00e55c;
}

.muted {
  color: #71717a;
}

.mono {
  font-family: 'Courier New', Courier, monospace;
}

.h3 {
  font-family: var(--font-inter), system-ui, sans-serif;
  font-size: clamp(0.9375rem, 2.2vw, 1.0625rem);
  font-weight: 600;
  color: #e4e4e7;
  margin: 1.5rem 0 0.5rem 0;
}

.h3:first-child {
  margin-top: 0;
}

.body {
  font-size: clamp(0.9375rem, 2vw, 1.0625rem);
  line-height: 1.7;
  color: #71717a;
  margin: 0 0 1rem 0;
}

.bodyLast {
  margin-bottom: 0;
}

.inlineCode {
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.875em;
  color: #a1a1aa;
  background: #111;
  padding: 0.15em 0.35em;
  border-radius: 3px;
}

/* ── Link styles ─────────────────────────────────────── */
.linkGreen {
  color: #00e55c;
  text-decoration: underline;
  text-underline-offset: 4px;
  font-weight: 600;
}

.linkWhite {
  color: #fff;
  text-decoration: underline;
  text-underline-offset: 4px;
  font-weight: 500;
}

/* ── CTA section ─────────────────────────────────────── */
.ctaButton {
  display: inline-block;
  font-family: var(--font-inter), system-ui, sans-serif;
  font-weight: 600;
  font-size: 1rem;
  padding: 0.875rem 1.5rem;
  background-color: #00e55c;
  color: #000;
  text-decoration: none;
  border-radius: 4px;
  transition: opacity 150ms ease;
}

.ctaButton:hover {
  opacity: 0.88;
}

.ctaLinks {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
}

/* ── Industries tag list ─────────────────────────────── */
.tagList {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.tag {
  padding: 0.3rem 0.75rem;
  border: 1px solid #3f3f46;
  border-radius: 100px;
  font-size: 0.8125rem;
  color: #a1a1aa;
}

/* ── Fade in on scroll ───────────────────────────────── */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
}

.fadeIn {
  animation: fadeUp 0.45s ease both;
}

@media (prefers-reduced-motion: reduce) {
  .fadeIn {
    animation: none;
  }
}
```

- [ ] **Step 2: Verify the file exists**

```bash
ls src/app/oc-mcp/page.module.css
```
Expected: file listed.

---

## Task 2: Create `MCPPageClient.tsx`

**Files:**
- Create: `src/app/oc-mcp/MCPPageClient.tsx`

This is the largest task. The component owns all page content and interactivity.

- [ ] **Step 1: Create the client component**

Create `src/app/oc-mcp/MCPPageClient.tsx` with this exact content:

```tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import s from './page.module.css';

const SECTIONS = [
  { id: 's1', label: 'The Problem' },
  { id: 's2', label: 'The Architecture' },
  { id: 's3', label: 'Layer 1: Authorized Access' },
  { id: 's4', label: 'Layer 2: Scraper Defense' },
  { id: 's5', label: 'Live Proof' },
  { id: 's6', label: 'How to Build' },
] as const;

type SectionId = typeof SECTIONS[number]['id'];

function Accordion({ label, children }: { label?: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={s.accordionWrapper}>
      <button
        className={s.accordionTrigger}
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
      >
        <em className={`${s.accordionIcon} ${open ? s.accordionIconOpen : ''}`}>▾</em>
        {label ?? 'Technical depth'}
      </button>
      <div className={`${s.accordionBody} ${open ? s.accordionBodyOpen : ''}`}>
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
            setActiveSection(
              (entry.target.getAttribute('data-section') as SectionId) ?? 's1',
            );
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
        <div className={s.container}>
          <p className={s.heroEyebrow}>OC MCP · Version 1.0 · May 2026</p>
          <h1 className={s.heroH1}>The Front Door for AI Agents</h1>
          <p className={s.heroSub}>
            AI agents are already accessing your site. The question is whether
            you invited them in or they let themselves in.
          </p>

          <div className={s.liveProofBadge}>
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
          </div>

          <div className={s.statsRow}>
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
          </div>

          <div className={s.heroLinks}>
            <a href="#s1" className={s.linkGreen}>Read the brief ↓</a>
            <a
              href="https://omac049.github.io/seo-zero-click/"
              target="_blank"
              rel="noopener noreferrer"
              className={s.linkWhite}
            >
              Zero-click research →
            </a>
          </div>
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
          <a href="/#contact" className={s.navCta}>Start a conversation ↗</a>
        </nav>

        {/* Content */}
        <main className={s.content}>

          {/* §1 — The Problem */}
          <section
            id="s1"
            data-section="s1"
            className={`${s.sectionAlt} ${s.fadeIn}`}
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
          </section>

          {/* §2 — Architecture */}
          <section id="s2" data-section="s2" className={s.section}>
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
          </section>

          {/* §3 — Layer 1 */}
          <section id="s3" data-section="s3" className={s.sectionAlt}>
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
          </section>

          {/* §4 — Layer 2 */}
          <section id="s4" data-section="s4" className={s.section}>
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
          </section>

          {/* §5 — Live Proof */}
          <section id="s5" data-section="s5" className={s.sectionAlt}>
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
                    <th className="hide-sm">Returns</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      name: 'getProfile',
                      path: '/data/profile.json',
                      desc: 'Bio, expertise, credentials',
                    },
                    {
                      name: 'getServices',
                      path: '/data/services.json',
                      desc: '4 services with scope + outcomes',
                    },
                    {
                      name: 'getCaseStudies',
                      path: '/data/case-studies.json',
                      desc: '2 case studies with metrics',
                    },
                    {
                      name: 'getSEOResources',
                      path: '/data/seo-resources.json',
                      desc: 'Resource center map + posts',
                    },
                    {
                      name: 'getContact',
                      path: '/data/contact.json',
                      desc: 'Engagement process + CTA',
                    },
                    {
                      name: 'getInsights',
                      path: '/data/insights.json',
                      desc: 'Recent analysis + focus areas',
                    },
                  ].map(tool => (
                    <tr key={tool.name}>
                      <td>
                        <span className={s.toolName}>{tool.name}</span>
                      </td>
                      <td>
                        <span className={s.toolEndpoint}>{tool.path}</span>
                      </td>
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
                  <div className={s.tokenLine}>
                    <span className={s.tokenLineLabel}>→ spin up browser (cold start)</span>
                    <span className={s.tokenLineBad}>~3 seconds</span>
                  </div>
                  <div className={s.tokenLine}>
                    <span className={s.tokenLineLabel}>→ load full page HTML</span>
                    <span className={s.tokenLineBad}>~4,200 tokens</span>
                  </div>
                  <div className={s.tokenLine}>
                    <span className={s.tokenLineLabel}>→ extract accessibility tree</span>
                    <span className={s.tokenLineBad}>~6,100 tokens</span>
                  </div>
                  <div className={s.tokenLine}>
                    <span className={s.tokenLineLabel}>→ LLM summarization pass</span>
                    <span className={s.tokenLineBad}>~2,800 tokens</span>
                  </div>
                  <div className={s.tokenLine}>
                    <span className={s.tokenLineLabel}>TOTAL</span>
                    <span className={s.tokenLineBad}>~9,400 tokens · ~12s</span>
                  </div>
                </div>
                <div className={s.tokenSection}>
                  <p className={s.tokenSectionTitle}>OC MCP path</p>
                  <div className={s.tokenLine}>
                    <span className={s.tokenLineLabel}>→ fetch /.well-known/webmcp.json</span>
                    <span className={s.tokenLineGood}>~400 bytes</span>
                  </div>
                  <div className={s.tokenLine}>
                    <span className={s.tokenLineLabel}>→ call getServices()</span>
                    <span className={s.tokenLineGood}>~1,100 bytes JSON</span>
                  </div>
                  <div className={s.tokenLine}>
                    <span className={s.tokenLineLabel}>TOTAL</span>
                    <span className={s.tokenLineGood}>~280 tokens · ~200ms</span>
                  </div>
                </div>
                <div className={s.tokenReduction}>
                  Reduction:{' '}
                  <span className={s.tokenReductionValue}>97% fewer tokens</span>
                  {' '}· survives redesigns · zero hallucination risk
                </div>
              </div>
            </div>
          </section>

          {/* §6 — How to Build */}
          <section id="s6" data-section="s6" className={s.section}>
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
                    {
                      n: '1',
                      title: 'Define your tools',
                      time: 'Days 1–3',
                      body: 'What would an AI agent actually need from your site? Write the tool names and descriptions before writing any code. Aim for 4–8 tools. Name them by the agent\'s goal, not your data model.',
                    },
                    {
                      n: '2',
                      title: 'Author static endpoints',
                      time: 'Days 4–7',
                      body: 'One JSON file per tool in public/data/. Publish /.well-known/webmcp.json pointing to them. Zero server infrastructure required. Test by fetching the manifest manually.',
                    },
                    {
                      n: '3',
                      title: 'Browser registration',
                      time: 'Week 2',
                      body: 'Add navigator.modelContext.registerTool() calls in a client component. Test with Claude Projects or GPT with Browse. Verify tool discovery in DevTools console.',
                    },
                    {
                      n: '4',
                      title: 'Layer 2 deployment',
                      time: 'Weeks 3–4',
                      body: 'Honeypot pages (no links, no sitemap). Tarpit at CDN edge. robots.txt update. Legal review before activating active-defense routing.',
                    },
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
          </section>

          {/* CTA */}
          <section className={s.sectionAlt}>
            <div className={s.container}>
              <h2 className={s.sectionHeading}>Want this for your site?</h2>
              <p className={s.sectionSummary}>
                The architecture is not complex. The decision is whether to
                build it before you need it or after the first agent
                intermediates your funnel.
              </p>
              <div className={s.ctaLinks}>
                <a href="/#contact" className={s.ctaButton}>
                  Start a conversation →
                </a>
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
          </section>

        </main>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Verify the file exists**

```bash
ls src/app/oc-mcp/MCPPageClient.tsx
```
Expected: file listed.

---

## Task 3: Replace `page.tsx`

**Files:**
- Modify: `src/app/oc-mcp/page.tsx`

- [ ] **Step 1: Replace the entire file**

Overwrite `src/app/oc-mcp/page.tsx` with:

```tsx
import { Metadata } from 'next';
import MCPPageClient from './MCPPageClient';

export const metadata: Metadata = {
  title: 'OC MCP — The Front Door for AI Agents | Omar Corral',
  description:
    'How omar-corral.com built an AI-agent-native web layer: 6 typed tools, .well-known manifest, dual-layer scraper defense. The complete architecture brief.',
  alternates: { canonical: 'https://omar-corral.com/oc-mcp/' },
  openGraph: {
    title: 'OC MCP — The Front Door for AI Agents',
    description:
      'Complete architecture brief: authorized tool access + scraper defense. Live on omar-corral.com.',
  },
};

export default function OcMcpPage() {
  return <MCPPageClient />;
}
```

---

## Task 4: Verify + Commit

**Files:** All three files above.

- [ ] **Step 1: Typecheck**

```bash
npx tsc --noEmit
```
Expected: exit 0, no output.

- [ ] **Step 2: Lint**

```bash
npm run lint
```
Expected: exit 0.

- [ ] **Step 3: Build**

```bash
npm run build 2>&1 | grep -E "(error|Error|✓|oc-mcp)"
```
Expected output includes:
```
 ✓ Compiled successfully
 ✓ Generating static pages
├ ○ /oc-mcp
```

- [ ] **Step 4: Commit and push**

```bash
git add src/app/oc-mcp/page.tsx src/app/oc-mcp/MCPPageClient.tsx src/app/oc-mcp/page.module.css
git commit -m "feat(oc-mcp): full POV brief — dual-layer architecture, accordions, sticky nav

Replaces the placeholder scrollytelling page with the complete
OC WebMCP architecture brief:
- Hero with live proof badge, pulsing dot, stats row
- §1 Problem: before/after comparison table + accordion (token math,
  robots.txt limits, zero-click parallel)
- §2 Architecture: ASCII dual-layer diagram + accordion (W3C spec,
  MCP vs WebMCP, CDN strategy)
- §3 Layer 1: numbered 3-component walkthrough + accordion (full
  schemas, risk taxonomy, versioning, cache/TTL)
- §4 Layer 2: honeypot/tarpit/legal + accordion (Amazon v. Perplexity
  full summary, tarpit impl, robots.txt pattern, regulated industries)
- §5 Live proof: tool table with live links, 97% token comparison block
- §6 How to build: 4-phase table, industry tags + accordion (full
  implementation checklist, tool design heuristics)
- CTA with primary button + secondary zero-click link
- Sticky left-rail nav (desktop ≥1024px) with IntersectionObserver
  active state
- Mobile horizontal anchor pill bar
- CSS-only accordion with smooth max-height transition
- page.module.css for all layout, animation, typography"
git push origin main
```

---

## Self-Review

**Spec coverage:**
- [x] Hero with live proof badge + stats → Task 2, hero section
- [x] Sticky left-rail nav desktop, mobile anchor bar → Task 2, SECTIONS + side nav + anchorBar
- [x] §1 Problem — before/after + accordion → Task 2, section s1
- [x] §2 Architecture — diagram + accordion → Task 2, section s2
- [x] §3 Layer 1 — 3 components + code blocks + accordion → Task 2, section s3
- [x] §4 Layer 2 — 3 mechanisms + accordion with legal detail → Task 2, section s4
- [x] §5 Live proof — tool table + token comparison → Task 2, section s5
- [x] §6 Implementation — 4-phase table + tags + accordion → Task 2, section s6
- [x] CTA → Task 2, final section
- [x] Updated metadata → Task 3
- [x] CSS module with all styles → Task 1
- [x] Server/client split matching codebase pattern → Tasks 2 and 3

**Placeholder scan:** None found. All code blocks contain real content.

**Type consistency:**
- `SectionId` union type derived from `SECTIONS` array — no manual duplication
- `Accordion` component used identically across all 4 expandable sections
- CSS class names in `s.*` references all exist in `page.module.css`
