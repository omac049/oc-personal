# Signal Rebrand — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Complete visual rebrand of omar-corral.com from the current slate/blue/purple palette with floating dock nav into a bold black-canvas / white-type / signal-green identity across 6 routes.

**Architecture:** Server-rendered layout shell (Navbar, Footer, analytics, structured data) wraps client components per section. New components are created alongside old ones, then swapped in the layout/page assembly tasks, followed by dead-code removal. Each task produces a buildable commit.

**Tech Stack:** Next.js 15 (App Router, static export), Tailwind CSS v4 (CSS-first `@theme inline`), Framer Motion 12, Formspree, DM Serif Display + Inter via `next/font/google`.

**Spec:** `docs/superpowers/specs/2026-05-06-signal-rebrand-design.md`

---

## File Structure

### New Files
| File | Responsibility |
|------|---------------|
| `src/components/SignalLogo.tsx` | SVG brand mark + wordmark, animated pulse on load |
| `src/components/Navbar.tsx` | Fixed top nav, transparent → solid on scroll, mobile menu |
| `src/components/SignalGrid.tsx` | Canvas generative grid background (hero only) |
| `src/components/CountUp.tsx` | Animated number count on viewport entry |
| `src/components/ProofStrip.tsx` | Horizontal metrics row with CountUp |
| `src/components/Services.tsx` | Vertical service stack (homepage section) |
| `src/components/CaseStudies.tsx` | Homepage case studies section |
| `src/components/FAQ.tsx` | Accordion with green toggles |
| `src/components/Footer.tsx` | Minimal footer bar |

### Rewritten Files
| File | What Changes |
|------|-------------|
| `src/app/globals.css` | Entire theme: tokens, base styles, utilities, animations |
| `src/app/layout.tsx` | Fonts (DM Serif Display + Inter), chrome (Navbar replaces FloatingNav/Monogram/ScrollProgress) |
| `src/app/page.tsx` | Homepage composition with new sections |
| `src/components/Hero.tsx` | Complete rewrite — SignalGrid bg, staggered entrance |
| `src/components/About.tsx` | Simplified — name, bio, credibility markers |
| `src/components/Contact.tsx` | Unified form + CTA, dark inputs, Formspree preserved |
| `src/components/StaticContent.tsx` | Updated noscript content for new page structure |
| `src/components/StructuredData.tsx` | Updated schemas for new nav/sections |
| `src/app/services/ServicesPageContent.tsx` | Full rewrite for new design |
| `src/app/services/seo-audit/SeoAuditPageContent.tsx` | Full rewrite |
| `src/app/services/ai-search-strategy/AiSearchStrategyPageContent.tsx` | Full rewrite |
| `src/app/case-studies/CaseStudiesPageContent.tsx` | Full rewrite |
| `src/app/not-found.tsx` | Redesign with serif 404 |
| `src/app/sitemap.ts` | Add marketing routes |
| `src/app/manifest.ts` | New theme colors |
| `src/data/seo.ts` | Updated titles, theme colors, positioning |
| `src/data/enhanced-seo.ts` | Updated breadcrumbs, FAQ schema, navigation schema |
| `src/data/about.js` | Updated copy for strategist positioning |
| `src/data/socials.js` | Narrowed to GitHub, LinkedIn, X (spec footer) |

### Files to Delete (Task 22)
| File | Reason |
|------|--------|
| `src/components/AlgorithmBackground.tsx` | Replaced by SignalGrid |
| `src/components/AnimatedText.tsx` | Unused |
| `src/components/FloatingNav.tsx` | Replaced by Navbar |
| `src/components/InteractiveBackground.tsx` | Removed per spec |
| `src/components/InteractiveParticles.tsx` | Removed per spec |
| `src/components/LazyComponents.tsx` | No longer needed (sections not lazy-loaded individually) |
| `src/components/MonogramLogo.tsx` | Replaced by SignalLogo |
| `src/components/ParallaxContainer.tsx` | Removed per spec |
| `src/components/ScrollProgress.tsx` | Removed per spec |
| `src/components/ScrollRocket.tsx` | Removed per spec |
| `src/components/ScrollToTop.tsx` | Removed per spec |
| `src/components/Search.tsx` | Algolia search removed per spec |
| `src/components/SearchButton.tsx` | Algolia search removed per spec |
| `src/components/SEOResourcesCTA.tsx` | Unused |
| `src/components/SkillModal.tsx` | Dev portfolio pattern removed |
| `src/components/Skills.tsx` | Dev portfolio pattern removed |
| `src/components/SafeCircle.tsx` | Unused |
| `src/components/Experience.tsx` | Removed from homepage per spec |
| `src/components/InsightsSection.tsx` | Link lives in footer now |
| `src/components/ServicesOverview.tsx` | Replaced by Services |
| `src/components/ProofSection.tsx` | Replaced by ProofStrip |
| `src/components/FAQSection.tsx` | Replaced by FAQ |
| `src/components/InteractiveContactForm.tsx` | Merged into Contact |
| `src/components/PerformanceOptimizations.tsx` | Unused |
| `src/components/ClientOnly.tsx` | Unused after rewrite |
| `src/data/skills.js` | Skills section removed |
| `src/data/skills-schema.ts` | Skills section removed |
| `src/data/experience.js` | Experience section removed from homepage |
| `src/data/hero.js` | Hero content now inline in component |
| `src/hooks/useDeviceDetection.ts` | Was for AlgorithmBackground complexity toggle |
| `src/utils/hydrationSafe.ts` | No longer needed |

---

## Phase 1: Design Foundation

### Task 1: Color Tokens and Base Styles

Rewrite `globals.css` with the signal palette, new base styles, and stripped utilities.

**Files:**
- Rewrite: `src/app/globals.css`

- [x] **Step 1: Write the new globals.css**

Replace the entire contents of `src/app/globals.css` with:

```css
@import "tailwindcss";

:root {
  --color-black: #000000;
  --color-white: #FAFAFA;
  --color-muted: #A0A0A0;
  --color-accent: #00E55C;
  --color-accent-dark: #00B847;
  --color-surface: #0A0A0A;
  --color-border: #1A1A1A;
}

@theme inline {
  --color-background: var(--color-black);
  --color-foreground: var(--color-white);
  --color-accent: var(--color-accent);
  --color-accent-dark: var(--color-accent-dark);
  --color-muted: var(--color-muted);
  --color-surface: var(--color-surface);
  --color-border: var(--color-border);
  --font-sans: var(--font-inter);
  --font-serif: var(--font-dm-serif);
}

html {
  scroll-behavior: smooth;
  overscroll-behavior: none;
  scroll-padding-top: 80px;
}

body {
  background: var(--color-black);
  color: var(--color-white);
  font-family: var(--font-inter), system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
  -webkit-text-size-adjust: 100%;
}

/* Typography */
.font-serif {
  font-family: var(--font-dm-serif), Georgia, serif;
}

.text-muted {
  color: var(--color-muted);
}

/* Focus ring — green for brand consistency */
*:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}

/* Scrollbar */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: var(--color-black);
}

::-webkit-scrollbar-thumb {
  background: var(--color-border);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--color-muted);
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* Screen reader only */
.sr-only {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
}

/* Skip link */
.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: var(--color-accent);
  color: var(--color-black);
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 4px;
  z-index: 9999;
  font-weight: 600;
}

.skip-link:focus {
  top: 6px;
}

/* Prevent iOS zoom on input focus */
@media (max-width: 768px) {
  input[type="text"],
  input[type="email"],
  textarea {
    font-size: 16px;
  }
}

/* High contrast mode */
@media (prefers-contrast: high) {
  :root {
    --color-muted: #CCCCCC;
    --color-border: #444444;
  }
}

/* Print styles */
@media print {
  * {
    background: transparent !important;
    color: black !important;
    box-shadow: none !important;
  }

  a[href]::after {
    content: " (" attr(href) ")";
  }
}

/* Core Web Vitals */
img,
video,
iframe {
  max-width: 100%;
  height: auto;
}
```

- [x] **Step 2: Verify build compiles**

Run: `npx next build 2>&1 | tail -20`

Expected: Build succeeds (existing components still reference old Tailwind classes like `bg-slate-900` which still work as built-in Tailwind utilities; the `@theme inline` change is additive).

- [x] **Step 3: Commit**

```bash
git add src/app/globals.css
git commit -m "feat: replace globals.css with signal palette tokens and base styles"
```

---

### Task 2: Font Loading

Replace Geist/Geist Mono with DM Serif Display + Inter in the root layout. Remove Font Awesome import.

**Files:**
- Modify: `src/app/layout.tsx` (lines 1–15, 17–29, 84)

- [x] **Step 1: Update font imports and configuration in layout.tsx**

Replace the font import block at the top of `src/app/layout.tsx`:

Old:
```typescript
import { Geist, Geist_Mono } from "next/font/google";
```

New:
```typescript
import { DM_Serif_Display, Inter } from "next/font/google";
```

Replace the font instantiation block:

Old:
```typescript
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
  preload: false,
});
```

New:
```typescript
const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  preload: true,
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});
```

Replace the Font Awesome imports and config:

Old:
```typescript
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
```
and:
```typescript
config.autoAddCss = false;
```

New: Delete both lines entirely (Font Awesome is no longer used).

Replace the body className:

Old:
```typescript
className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-900`}
```

New:
```typescript
className={`${dmSerif.variable} ${inter.variable} antialiased`}
```

- [x] **Step 2: Verify build compiles**

Run: `npx next build 2>&1 | tail -20`

Expected: Build succeeds. Old components still work (they reference `font-sans` which now maps to Inter via CSS vars, and Tailwind built-in `bg-slate-900` still works as a utility).

- [x] **Step 3: Commit**

```bash
git add src/app/layout.tsx
git commit -m "feat: switch fonts to DM Serif Display + Inter, remove Font Awesome import"
```

---

### Task 3: SignalLogo Component

Create the Signal-O brand mark SVG with wordmark. The "O" is a circle with two concentric arcs radiating from the upper-right. Green mark, white wordmark. Includes a one-shot pulse animation on load.

**Files:**
- Create: `src/components/SignalLogo.tsx`

- [x] **Step 1: Create the SignalLogo component**

Create `src/components/SignalLogo.tsx`:

```tsx
'use client';

import { motion } from 'framer-motion';

interface SignalLogoProps {
  variant?: 'full' | 'mark';
  className?: string;
}

export default function SignalLogo({ variant = 'full', className = '' }: SignalLogoProps) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`} aria-label="Omar Corral">
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 shrink-0"
        aria-hidden="true"
      >
        {/* Base circle — the "O" */}
        <circle cx="20" cy="20" r="10" stroke="var(--color-accent)" strokeWidth="2.5" fill="none" />

        {/* Signal arc 1 — inner */}
        <motion.path
          d="M28 12 A12 12 0 0 1 28 28"
          stroke="var(--color-accent)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          initial={{ opacity: 0, pathLength: 0 }}
          animate={{ opacity: 1, pathLength: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
        />

        {/* Signal arc 2 — outer */}
        <motion.path
          d="M32 8 A16 16 0 0 1 32 32"
          stroke="var(--color-accent)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          initial={{ opacity: 0, pathLength: 0 }}
          animate={{ opacity: 1, pathLength: 1 }}
          transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
        />
      </svg>

      {variant === 'full' && (
        <span
          className="text-sm font-semibold tracking-[0.15em] uppercase"
          style={{ color: 'var(--color-white)' }}
        >
          OMAR CORRAL
        </span>
      )}
    </span>
  );
}
```

- [x] **Step 2: Verify build compiles**

Run: `npx next build 2>&1 | tail -20`

Expected: Build succeeds. Component is not yet imported anywhere.

- [x] **Step 3: Commit**

```bash
git add src/components/SignalLogo.tsx
git commit -m "feat: add SignalLogo SVG component with animated signal arcs"
```

---

### Task 4: Navbar Component

Fixed top nav. Transparent over hero, transitions to solid black + bottom border on scroll. Logo left, nav links right. Mobile hamburger with full-screen overlay.

**Files:**
- Create: `src/components/Navbar.tsx`

- [x] **Step 1: Create the Navbar component**

Create `src/components/Navbar.tsx`:

```tsx
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import SignalLogo from './SignalLogo';

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Proof', href: '#proof' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = () => setMobileOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled
            ? 'bg-[var(--color-black)] border-b border-[var(--color-border)]'
            : 'bg-transparent'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link href="/" aria-label="Home">
            <SignalLogo variant="full" />
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group relative text-sm font-medium uppercase tracking-widest"
                  style={{ color: 'var(--color-white)' }}
                >
                  {link.label}
                  <span
                    className="absolute -bottom-1 left-0 h-px w-0 transition-all duration-150 group-hover:w-full"
                    style={{ backgroundColor: 'var(--color-accent)' }}
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            className="flex h-10 w-10 items-center justify-center md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-white)" strokeWidth="2" strokeLinecap="round">
              {mobileOpen ? (
                <>
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="6" y1="18" x2="18" y2="6" />
                </>
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-10"
            style={{ backgroundColor: 'var(--color-black)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="font-serif text-4xl"
                style={{ color: 'var(--color-white)' }}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
```

- [x] **Step 2: Verify build compiles**

Run: `npx next build 2>&1 | tail -20`

Expected: Build succeeds. Component is not yet imported anywhere.

- [x] **Step 3: Commit**

```bash
git add src/components/Navbar.tsx
git commit -m "feat: add Navbar with scroll-aware transparency and mobile overlay"
```

---

### Task 5: Update Layout Shell

Swap the old chrome components (FloatingNav, MonogramLogo, ScrollProgress, ScrollToTop) for Navbar. Remove Algolia meta tag. Simplify CSP. Keep StructuredData, Analytics, StaticContent.

**Files:**
- Modify: `src/app/layout.tsx`

- [x] **Step 1: Replace layout imports and body content**

Replace the import block at the top of `layout.tsx`. Remove:

```typescript
import ScrollProgress from '@/components/ScrollProgress';
import FloatingNav from '@/components/FloatingNav';
import MonogramLogo from '@/components/MonogramLogo';
import ScrollToTop from '@/components/ScrollToTop';
```

Add:

```typescript
import Navbar from '@/components/Navbar';
```

In the `<head>`, remove the Algolia meta tag:

```html
<meta name="algolia-site-verification" content="694E3C0A56DD602C" />
```

Update the CSP meta tag — remove Algolia hosts from `script-src` and `connect-src`:

Old `content` value (partial):
```
script-src 'self' 'unsafe-inline' 'unsafe-eval' *.google.com *.googletagmanager.com *.google-analytics.com *.algolia.net *.jsdelivr.net ...
connect-src 'self' ws: wss: *.google-analytics.com *.google.com *.googletagmanager.com *.algolia.net *.algolianet.com https://formspree.io;
```

New `content` value:
```
default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' *.google.com *.googletagmanager.com *.google-analytics.com https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' fonts.googleapis.com; font-src 'self' data: fonts.gstatic.com; img-src 'self' data: *.google.com *.google-analytics.com *.googletagmanager.com; connect-src 'self' ws: wss: *.google-analytics.com *.google.com *.googletagmanager.com https://formspree.io; object-src 'none'; base-uri 'self';
```

In the `<body>`, replace the old chrome components:

Old:
```tsx
<ScrollToTop />
<MonogramLogo />
<ScrollProgress />
<FloatingNav />
```

New:
```tsx
<Navbar />
```

- [x] **Step 2: Verify build compiles**

Run: `npx next build 2>&1 | tail -20`

Expected: Build succeeds. The page still renders (old section components still work with the new layout shell).

- [x] **Step 3: Commit**

```bash
git add src/app/layout.tsx
git commit -m "feat: replace old nav chrome with Navbar, simplify CSP"
```

---

## Phase 2: Core Components

### Task 6: SignalGrid Canvas Background

A canvas-based generative grid for the hero. Faint green lines (~15–20% opacity) form a network topology that slowly shifts. Respects `prefers-reduced-motion`.

**Files:**
- Create: `src/components/SignalGrid.tsx`

- [x] **Step 1: Create the SignalGrid component**

Create `src/components/SignalGrid.tsx`:

```tsx
'use client';

import { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export default function SignalGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const nodesRef = useRef<Node[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    const NODE_COUNT = 60;
    const CONNECTION_DISTANCE = 160;
    const w = () => canvas.offsetWidth;
    const h = () => canvas.offsetHeight;

    if (nodesRef.current.length === 0) {
      nodesRef.current = Array.from({ length: NODE_COUNT }, () => ({
        x: Math.random() * w(),
        y: Math.random() * h(),
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
      }));
    }

    const nodes = nodesRef.current;

    if (prefersReducedMotion) {
      ctx.clearRect(0, 0, w(), h());
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DISTANCE) {
            const opacity = 0.08 * (1 - dist / CONNECTION_DISTANCE);
            ctx.strokeStyle = `rgba(0, 229, 92, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }
      return;
    }

    const draw = () => {
      ctx.clearRect(0, 0, w(), h());

      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > w()) node.vx *= -1;
        if (node.y < 0 || node.y > h()) node.vy *= -1;
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DISTANCE) {
            const opacity = 0.15 * (1 - dist / CONNECTION_DISTANCE);
            ctx.strokeStyle = `rgba(0, 229, 92, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
      style={{ opacity: 0.9 }}
    />
  );
}
```

- [x] **Step 2: Verify build compiles**

Run: `npx next build 2>&1 | tail -20`

Expected: Build succeeds.

- [x] **Step 3: Commit**

```bash
git add src/components/SignalGrid.tsx
git commit -m "feat: add SignalGrid canvas generative background"
```

---

### Task 7: CountUp Utility

Animated number that counts from 0 to a target value when entering the viewport. Uses Intersection Observer + requestAnimationFrame.

**Files:**
- Create: `src/components/CountUp.tsx`

- [x] **Step 1: Create the CountUp component**

Create `src/components/CountUp.tsx`:

```tsx
'use client';

import { useEffect, useRef, useState } from 'react';

interface CountUpProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export default function CountUp({
  target,
  suffix = '',
  prefix = '',
  duration = 1500,
  className = '',
}: CountUpProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || hasAnimated) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setHasAnimated(true);
        observer.disconnect();

        if (prefersReducedMotion) {
          setCount(target);
          return;
        }

        const start = performance.now();

        const tick = (now: number) => {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.round(eased * target));

          if (progress < 1) {
            requestAnimationFrame(tick);
          }
        };

        requestAnimationFrame(tick);
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration, hasAnimated]);

  return (
    <span ref={ref} className={className}>
      {prefix}{count}{suffix}
    </span>
  );
}
```

- [x] **Step 2: Verify build compiles**

Run: `npx next build 2>&1 | tail -20`

Expected: Build succeeds.

- [x] **Step 3: Commit**

```bash
git add src/components/CountUp.tsx
git commit -m "feat: add CountUp component with viewport-triggered animation"
```

---

### Task 8: Hero Section

Full rewrite. Full-black edge-to-edge, `100svh`. SignalGrid background. Staggered entrance: label → headline → subline → CTAs. Green period on the headline.

**Files:**
- Rewrite: `src/components/Hero.tsx`

- [x] **Step 1: Rewrite the Hero component**

Replace the entire contents of `src/components/Hero.tsx` with:

```tsx
'use client';

import { motion } from 'framer-motion';
import SignalGrid from './SignalGrid';

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, delay, ease: 'easeOut' },
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
      style={{ backgroundColor: 'var(--color-black)' }}
      aria-labelledby="hero-heading"
    >
      <SignalGrid />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <motion.p
          className="mb-6 text-sm font-medium uppercase tracking-[0.2em]"
          style={{ color: 'var(--color-accent)' }}
          {...fadeUp(0.2)}
        >
          Digital Strategist
        </motion.p>

        <h1 id="hero-heading">
          <motion.span
            className="font-serif block text-5xl leading-tight md:text-7xl lg:text-8xl"
            style={{ color: 'var(--color-white)' }}
            {...fadeUp(0.4)}
          >
            I make brands
          </motion.span>
          <motion.span
            className="font-serif block text-5xl leading-tight md:text-7xl lg:text-8xl"
            style={{ color: 'var(--color-white)' }}
            {...fadeUp(0.5)}
          >
            impossible to ignore
            <span style={{ color: 'var(--color-accent)' }}>.</span>
          </motion.span>
        </h1>

        <motion.p
          className="mx-auto mt-6 max-w-lg text-lg"
          style={{ color: 'var(--color-muted)' }}
          {...fadeUp(0.6)}
        >
          SEO, AI search, and growth strategy for brands that want to lead, not follow.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          {...fadeUp(0.8)}
        >
          <a
            href="#proof"
            className="inline-flex items-center rounded-sm px-8 py-3 text-sm font-semibold uppercase tracking-wider transition-colors duration-200 hover:brightness-110"
            style={{
              backgroundColor: 'var(--color-accent)',
              color: 'var(--color-black)',
            }}
          >
            See the proof
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-sm border px-8 py-3 text-sm font-semibold uppercase tracking-wider transition-colors duration-200 hover:bg-white/5"
            style={{
              borderColor: 'var(--color-white)',
              color: 'var(--color-white)',
            }}
          >
            Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
```

- [x] **Step 2: Verify build compiles**

Run: `npx next build 2>&1 | tail -20`

Expected: Build succeeds. Hero no longer imports AlgorithmBackground.

- [x] **Step 3: Commit**

```bash
git add src/components/Hero.tsx
git commit -m "feat: rewrite Hero with SignalGrid bg and staggered entrance"
```

---

### Task 9: ProofStrip Component

Horizontal row of 3–4 metrics. Green numbers (CountUp), off-white labels, separated by thin vertical dividers.

**Files:**
- Create: `src/components/ProofStrip.tsx`

- [x] **Step 1: Create the ProofStrip component**

Create `src/components/ProofStrip.tsx`:

```tsx
'use client';

import { motion } from 'framer-motion';
import CountUp from './CountUp';

const METRICS = [
  { value: 150, suffix: '+', label: 'Clients' },
  { value: 12, suffix: '+', label: 'Years' },
  { value: 2, prefix: '$', suffix: 'M+', label: 'Revenue Driven' },
  { value: 300, suffix: '%', label: 'Avg. Traffic Growth' },
];

export default function ProofStrip() {
  return (
    <section
      id="proof"
      className="py-20"
      style={{ backgroundColor: 'var(--color-black)' }}
      aria-label="Key results"
    >
      <motion.div
        className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-10 px-6 md:flex-row md:gap-0 md:divide-x"
        style={{ borderColor: 'var(--color-border)' }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        {METRICS.map((metric) => (
          <div
            key={metric.label}
            className="flex flex-col items-center px-10 md:divide-[var(--color-border)]"
          >
            <CountUp
              target={metric.value}
              prefix={metric.prefix}
              suffix={metric.suffix}
              className="text-5xl font-bold md:text-6xl"
              style={{ color: 'var(--color-accent)' }}
            />
            <span
              className="mt-2 text-xs font-medium uppercase tracking-widest"
              style={{ color: 'var(--color-muted)' }}
            >
              {metric.label}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
```

**Note:** The `CountUp` component doesn't accept a `style` prop yet. We need to update it to forward additional HTML attributes. Update `src/components/CountUp.tsx` — add `style` to the interface and spread it on the `<span>`:

In `CountUp.tsx`, update the interface:

```tsx
interface CountUpProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}
```

And update the return:

```tsx
return (
  <span ref={ref} className={className} style={style}>
    {prefix}{count}{suffix}
  </span>
);
```

Also add `style` to the destructured props:

```tsx
}: CountUpProps) {
```
→
Destructure `style` alongside the other props.

- [x] **Step 2: Verify build compiles**

Run: `npx next build 2>&1 | tail -20`

Expected: Build succeeds.

- [x] **Step 3: Commit**

```bash
git add src/components/ProofStrip.tsx src/components/CountUp.tsx
git commit -m "feat: add ProofStrip with animated green metrics"
```

---

### Task 10: Services Section

Vertical stack of 3 services, separated by horizontal rules. Green SVG icon, serif title, one-sentence description, animated arrow link.

**Files:**
- Create: `src/components/Services.tsx`

- [x] **Step 1: Create the Services component**

Create `src/components/Services.tsx`:

```tsx
'use client';

import { motion } from 'framer-motion';

const SERVICES = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
        <path d="m8 11 2 2 4-4" />
      </svg>
    ),
    title: 'SEO Audit & Strategy',
    description: 'Comprehensive technical and content audits that surface what's actually holding your organic growth back — then a clear plan to fix it.',
    href: '/services/seo-audit/',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 1 4 4c0 1.95-1.4 3.58-3.25 3.93" />
        <path d="M8.24 4.03A4 4 0 0 0 8 6c0 1.95 1.4 3.58 3.25 3.93" />
        <path d="M12 12v4" />
        <path d="M8 18h8" />
        <path d="M10 22h4" />
      </svg>
    ),
    title: 'AI Search Strategy',
    description: 'Position your brand to be cited by ChatGPT, Perplexity, Google AI Overviews, and whatever comes next.',
    href: '/services/ai-search-strategy/',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="m7 16 4-8 4 5 4-7" />
      </svg>
    ),
    title: 'Growth & Analytics',
    description: 'Turn organic traffic into revenue with attribution models, conversion tracking, and clear monthly reporting tied to business outcomes.',
    href: '#contact',
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export default function Services() {
  return (
    <section
      id="services"
      className="py-24"
      style={{ backgroundColor: 'var(--color-black)' }}
      aria-labelledby="services-heading"
    >
      <motion.div
        className="mx-auto max-w-4xl px-6"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 id="services-heading" className="sr-only">Services</h2>

        {SERVICES.map((service, i) => (
          <motion.div
            key={service.title}
            variants={itemVariants}
            className={`py-12 ${i < SERVICES.length - 1 ? 'border-b' : ''}`}
            style={{ borderColor: 'var(--color-border)' }}
          >
            <div className="flex items-start gap-5">
              <span style={{ color: 'var(--color-accent)' }} aria-hidden="true">
                {service.icon}
              </span>

              <div>
                <h3 className="font-serif text-2xl md:text-4xl" style={{ color: 'var(--color-white)' }}>
                  {service.title}
                </h3>
                <p className="mt-3 max-w-xl text-base" style={{ color: 'var(--color-muted)' }}>
                  {service.description}
                </p>
                <a
                  href={service.href}
                  className="group mt-4 inline-flex items-center gap-2 text-sm font-medium transition-colors"
                  style={{ color: 'var(--color-accent)' }}
                >
                  Learn more
                  <span className="inline-block transition-transform duration-150 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
```

- [x] **Step 2: Verify build compiles**

Run: `npx next build 2>&1 | tail -20`

Expected: Build succeeds.

- [x] **Step 3: Commit**

```bash
git add src/components/Services.tsx
git commit -m "feat: add Services section with vertical stack layout"
```

---

### Task 11: CaseStudies Homepage Section

2–3 featured results in editorial layout. Alternating black / surface backgrounds. Green category labels, serif headlines (outcome), oversized metric callouts.

**Files:**
- Create: `src/components/CaseStudies.tsx`

- [x] **Step 1: Create the CaseStudies component**

Create `src/components/CaseStudies.tsx`:

```tsx
'use client';

import { motion } from 'framer-motion';
import CountUp from './CountUp';

const STUDIES = [
  {
    category: 'E-Commerce · SEO',
    headline: '312% organic traffic growth in 6 months',
    summary:
      'A mid-market e-commerce brand was stuck on page two for their highest-value keywords. After a technical overhaul, content restructure, and internal linking strategy, organic sessions tripled and revenue from search doubled.',
    metric: { value: 312, suffix: '%', label: 'Organic Traffic Growth' },
  },
  {
    category: 'SaaS · AI Search',
    headline: 'From invisible to cited across 4 AI platforms',
    summary:
      'A B2B SaaS company had zero presence in AI-generated answers. Through structured data, authority content, and LLM-readability optimizations, they're now referenced by ChatGPT, Perplexity, Gemini, and Google AI Overviews.',
    metric: { value: 4, suffix: '', label: 'AI Platforms Citing Brand' },
  },
  {
    category: 'Healthcare · Local SEO',
    headline: '$1.2M in attributed revenue from organic search',
    summary:
      'A regional healthcare provider needed local visibility in a competitive metro. With a localized content strategy, Google Business Profile optimization, and review management, organic became their top revenue channel.',
    metric: { value: 1.2, prefix: '$', suffix: 'M', label: 'Revenue from Organic' },
  },
];

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4 },
};

export default function CaseStudies() {
  return (
    <section id="case-studies" aria-labelledby="case-studies-heading">
      <h2 id="case-studies-heading" className="sr-only">Case Studies</h2>

      {STUDIES.map((study, i) => (
        <motion.div
          key={study.headline}
          className="py-24 px-6"
          style={{
            backgroundColor: i % 2 === 0 ? 'var(--color-black)' : 'var(--color-surface)',
          }}
          {...fadeIn}
        >
          <div className="mx-auto max-w-4xl">
            <p
              className="text-xs font-medium uppercase tracking-[0.2em]"
              style={{ color: 'var(--color-accent)' }}
            >
              {study.category}
            </p>

            <h3
              className="font-serif mt-4 text-3xl leading-snug md:text-5xl"
              style={{ color: 'var(--color-white)' }}
            >
              {study.headline}
            </h3>

            <p className="mt-6 max-w-2xl text-base leading-relaxed" style={{ color: 'var(--color-muted)' }}>
              {study.summary}
            </p>

            <div className="mt-10">
              <CountUp
                target={study.metric.value}
                prefix={study.metric.prefix}
                suffix={study.metric.suffix}
                className="text-6xl font-bold md:text-7xl"
                style={{ color: 'var(--color-accent)' }}
              />
              <p
                className="mt-2 text-xs font-medium uppercase tracking-widest"
                style={{ color: 'var(--color-muted)' }}
              >
                {study.metric.label}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
```

- [x] **Step 2: Verify build compiles**

Run: `npx next build 2>&1 | tail -20`

Expected: Build succeeds.

- [x] **Step 3: Commit**

```bash
git add src/components/CaseStudies.tsx
git commit -m "feat: add CaseStudies section with editorial layout and metric callouts"
```

---

### Task 12: About Section

Simplified. Large serif name, 2–3 sentence bio, credibility markers as horizontal category list. No parallax.

**Files:**
- Rewrite: `src/components/About.tsx`
- Modify: `src/data/about.js`

- [x] **Step 1: Update about data**

Replace the entire contents of `src/data/about.js` with:

```js
export const aboutData = {
  name: "Omar Corral",
  bio: "I've spent 12+ years in search — first agency-side, then in-house, now consulting. My focus is on the intersection of traditional SEO and AI-driven discovery: how brands get found, cited, and surfaced across Google, ChatGPT, Perplexity, and whatever comes next.",
  categories: ["E-commerce", "SaaS", "Healthcare", "Finance", "Local Business"],
};
```

- [x] **Step 2: Rewrite the About component**

Replace the entire contents of `src/components/About.tsx` with:

```tsx
'use client';

import { motion } from 'framer-motion';
import { aboutData } from '@/data/about';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4 },
};

export default function About() {
  return (
    <section
      id="about"
      className="py-24"
      style={{ backgroundColor: 'var(--color-surface)' }}
      aria-labelledby="about-heading"
    >
      <motion.div className="mx-auto max-w-4xl px-6" {...fadeIn}>
        <h2
          id="about-heading"
          className="font-serif text-4xl md:text-6xl"
          style={{ color: 'var(--color-white)' }}
        >
          {aboutData.name}
        </h2>

        <p
          className="mt-6 max-w-2xl text-lg leading-relaxed"
          style={{ color: 'var(--color-muted)' }}
        >
          {aboutData.bio}
        </p>

        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2">
          {aboutData.categories.map((cat) => (
            <span
              key={cat}
              className="text-xs font-medium uppercase tracking-widest"
              style={{ color: 'var(--color-muted)' }}
            >
              {cat}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
```

- [x] **Step 3: Verify build compiles**

Run: `npx next build 2>&1 | tail -20`

Expected: Build succeeds.

- [x] **Step 4: Commit**

```bash
git add src/components/About.tsx src/data/about.js
git commit -m "feat: rewrite About section — simplified serif name, bio, categories"
```

---

### Task 13: FAQ Section

Clean accordion. DM Serif Display questions, Inter answers. Green `+` rotates to `×` on open. Smooth height animation.

**Files:**
- Create: `src/components/FAQ.tsx`

- [x] **Step 1: Create the FAQ component**

Create `src/components/FAQ.tsx`:

```tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ_DATA = [
  {
    question: 'What is AI-powered SEO and how does it work?',
    answer:
      'AI-powered SEO combines traditional search engine optimization with artificial intelligence technologies like ChatGPT, Claude, and machine learning algorithms. It involves using AI for keyword research, content optimization, technical audits, and adapting strategies for AI Overviews and LLM-generated responses. The goal is ranking in both traditional results and AI-generated answers.',
  },
  {
    question: 'How do you optimize content for Large Language Models?',
    answer:
      'LLM optimization involves structuring content for AI understanding — natural language patterns, comprehensive schema markup, conversational content formats, and entity-first information architecture. I focus on making content that performs well in AI-powered search while maintaining clarity for human readers.',
  },
  {
    question: 'How long does it take to see SEO results?',
    answer:
      'SEO results typically begin within 3–6 months, with significant improvements at 6–12 months. AI-optimized strategies can accelerate content and technical wins, but organic growth requires sustained effort. I provide monthly reports tracking progress against specific business metrics.',
  },
  {
    question: 'Do you work with businesses outside Phoenix?',
    answer:
      'Yes. While I'm based in Phoenix, Arizona, most of my clients are remote. SEO and AI search strategy work is fully remote-friendly. I work with e-commerce, SaaS, healthcare, and finance brands across the US.',
  },
  {
    question: 'What does an engagement look like?',
    answer:
      'Engagements typically start with a comprehensive audit, followed by a prioritized strategy and ongoing execution. I work on monthly retainers or project-based scopes depending on the need. Every engagement includes regular reporting tied to revenue, not just rankings.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      id="faq"
      className="py-24"
      style={{ backgroundColor: 'var(--color-black)' }}
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-3xl px-6">
        <motion.h2
          id="faq-heading"
          className="font-serif mb-12 text-3xl md:text-5xl"
          style={{ color: 'var(--color-white)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Frequently asked questions
        </motion.h2>

        <div role="list">
          {FAQ_DATA.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                role="listitem"
                className="border-b"
                style={{ borderColor: 'var(--color-border)' }}
              >
                <button
                  onClick={() => toggle(i)}
                  className="flex w-full items-center justify-between py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span
                    className="font-serif pr-4 text-lg md:text-2xl"
                    style={{ color: 'var(--color-white)' }}
                  >
                    {item.question}
                  </span>
                  <span
                    className="shrink-0 text-xl transition-transform duration-300"
                    style={{
                      color: 'var(--color-accent)',
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                    }}
                  >
                    +
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p
                        className="pb-6 text-base leading-relaxed"
                        style={{ color: 'var(--color-muted)' }}
                      >
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
```

- [x] **Step 2: Verify build compiles**

Run: `npx next build 2>&1 | tail -20`

Expected: Build succeeds.

- [x] **Step 3: Commit**

```bash
git add src/components/FAQ.tsx
git commit -m "feat: add FAQ accordion with green toggle and smooth height animation"
```

---

### Task 14: Contact Section

Unified contact section. Serif headline, dark form inputs with border, green focus ring, green submit button. Formspree integration preserved from existing `formConfig`.

**Files:**
- Rewrite: `src/components/Contact.tsx`

- [x] **Step 1: Rewrite the Contact component**

Replace the entire contents of `src/components/Contact.tsx` with:

```tsx
'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { formConfig } from '@/config/form';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4 },
};

const inputClasses =
  'w-full rounded-sm border bg-transparent px-4 py-3 text-base outline-none transition-colors placeholder:text-[var(--color-muted)]';

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(formConfig.formspree.url, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section
      id="contact"
      className="py-24"
      style={{ backgroundColor: 'var(--color-surface)' }}
      aria-labelledby="contact-heading"
    >
      <motion.div className="mx-auto max-w-2xl px-6" {...fadeIn}>
        <h2
          id="contact-heading"
          className="font-serif text-4xl md:text-6xl"
          style={{ color: 'var(--color-white)' }}
        >
          Let&apos;s talk.
        </h2>

        <p className="mt-4 text-lg" style={{ color: 'var(--color-muted)' }}>
          Have a project in mind? I&apos;d love to hear about it.
        </p>

        {status === 'success' ? (
          <div className="mt-10 rounded-sm border p-8 text-center" style={{ borderColor: 'var(--color-accent)' }}>
            <p className="text-lg font-medium" style={{ color: 'var(--color-accent)' }}>
              Message sent. I&apos;ll be in touch soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 space-y-6">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Name"
                className={inputClasses}
                style={{
                  borderColor: 'var(--color-border)',
                  color: 'var(--color-white)',
                }}
              />
            </div>

            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Email"
                className={inputClasses}
                style={{
                  borderColor: 'var(--color-border)',
                  color: 'var(--color-white)',
                }}
              />
            </div>

            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Message"
                className={`${inputClasses} resize-none`}
                style={{
                  borderColor: 'var(--color-border)',
                  color: 'var(--color-white)',
                }}
              />
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full rounded-sm px-8 py-3 text-sm font-semibold uppercase tracking-wider transition-colors duration-200 hover:brightness-110 disabled:opacity-50"
              style={{
                backgroundColor: 'var(--color-accent)',
                color: 'var(--color-black)',
              }}
            >
              {status === 'submitting' ? 'Sending…' : 'Send message'}
            </button>

            {status === 'error' && (
              <p className="text-sm text-red-400">
                Something went wrong. Please try again or email directly.
              </p>
            )}
          </form>
        )}

        <p className="mt-8 text-sm" style={{ color: 'var(--color-muted)' }}>
          Or email directly:{' '}
          <a
            href="mailto:omar.seogears@gmail.com"
            className="underline transition-colors"
            style={{ color: 'var(--color-white)' }}
          >
            omar.seogears@gmail.com
          </a>
        </p>
      </motion.div>
    </section>
  );
}
```

- [x] **Step 2: Verify build compiles**

Run: `npx next build 2>&1 | tail -20`

Expected: Build succeeds.

- [x] **Step 3: Commit**

```bash
git add src/components/Contact.tsx
git commit -m "feat: rewrite Contact with dark inputs, green submit, Formspree preserved"
```

---

### Task 15: Footer Component

Minimal black bar with top border. Logo left, social icons center, copyright right. Link row below.

**Files:**
- Create: `src/components/Footer.tsx`
- Modify: `src/data/socials.js`

- [x] **Step 1: Update socials data**

Replace the entire contents of `src/data/socials.js` with:

```js
export const socialsData = {
  email: "omar.seogears@gmail.com",
  social: [
    {
      name: "GitHub",
      url: "https://github.com/omac049",
      platform: "github",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/omarrcorral",
      platform: "linkedin",
    },
    {
      name: "X",
      url: "https://twitter.com/omarrcorral",
      platform: "x",
    },
  ],
};
```

- [x] **Step 2: Create the Footer component**

Create `src/components/Footer.tsx`:

```tsx
import Link from 'next/link';
import SignalLogo from './SignalLogo';
import { socialsData } from '@/data/socials';

const SOCIAL_ICONS: Record<string, React.ReactNode> = {
  github: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 17.07 3.633 16.7 3.633 16.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  ),
  linkedin: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  x: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
};

const FOOTER_LINKS = [
  { label: 'SEO Resources', href: '/seo-resources/' },
  { label: 'Services', href: '/services/' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer
      className="border-t py-12"
      style={{
        backgroundColor: 'var(--color-black)',
        borderColor: 'var(--color-border)',
      }}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 md:flex-row md:justify-between">
        <Link href="/" aria-label="Home">
          <SignalLogo variant="mark" className="opacity-60" />
        </Link>

        <div className="flex items-center gap-6">
          {socialsData.social.map((s) => (
            <a
              key={s.platform}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.name}
              className="transition-colors duration-150"
              style={{ color: 'var(--color-white)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-white)')}
            >
              {SOCIAL_ICONS[s.platform]}
            </a>
          ))}
        </div>

        <p className="text-sm" style={{ color: 'var(--color-muted)' }}>
          © {new Date().getFullYear()} Omar Corral
        </p>
      </div>

      <div className="mx-auto mt-8 flex max-w-6xl items-center justify-center gap-6 px-6">
        {FOOTER_LINKS.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-xs transition-colors duration-150 hover:underline"
            style={{ color: 'var(--color-muted)' }}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </footer>
  );
}
```

- [x] **Step 3: Verify build compiles**

Run: `npx next build 2>&1 | tail -20`

Expected: Build succeeds.

- [x] **Step 4: Commit**

```bash
git add src/components/Footer.tsx src/data/socials.js
git commit -m "feat: add Footer with social icons and link row"
```

---

## Phase 3: Homepage Assembly

### Task 16: Homepage + Layout Wiring

Compose the new homepage from new sections. Wire Footer into the layout. Update StaticContent for new page structure.

**Files:**
- Rewrite: `src/app/page.tsx`
- Modify: `src/app/layout.tsx`
- Rewrite: `src/components/StaticContent.tsx`

- [x] **Step 1: Rewrite the homepage**

Replace the entire contents of `src/app/page.tsx` with:

```tsx
import Hero from '@/components/Hero';
import ProofStrip from '@/components/ProofStrip';
import Services from '@/components/Services';
import CaseStudies from '@/components/CaseStudies';
import About from '@/components/About';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="skip-link"
      >
        Skip to main content
      </a>

      <main
        id="main-content"
        role="main"
        aria-label="Omar Corral — Digital Strategist"
        itemScope
        itemType="https://schema.org/Person"
      >
        <Hero />
        <ProofStrip />
        <Services />
        <CaseStudies />
        <About />
        <FAQ />
        <Contact />
      </main>
    </>
  );
}
```

- [x] **Step 2: Add Footer to the layout**

In `src/app/layout.tsx`, add the Footer import at the top alongside the other imports:

```typescript
import Footer from '@/components/Footer';
```

In the body, after the `<div id="root">{children}</div>`, add:

```tsx
<Footer />
```

- [x] **Step 3: Rewrite StaticContent**

Replace the entire contents of `src/components/StaticContent.tsx` with:

```tsx
import { seoData } from '@/data/seo';

export default function StaticContent() {
  return (
    <noscript>
      <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1>{seoData.personal.name} — Digital Strategist</h1>
        <p>{seoData.meta.description}</p>

        <h2>Services</h2>
        <ul>
          <li>SEO Audit &amp; Strategy</li>
          <li>AI Search Strategy</li>
          <li>Growth &amp; Analytics</li>
        </ul>

        <h2>Contact</h2>
        <p>
          Email: <a href={`mailto:${seoData.personal.email}`}>{seoData.personal.email}</a>
        </p>

        <h2>Location</h2>
        <address>
          {seoData.personal.location.city}, {seoData.personal.location.state},{' '}
          {seoData.personal.location.country}
        </address>
      </div>
    </noscript>
  );
}
```

- [x] **Step 4: Verify build compiles**

Run: `npx next build 2>&1 | tail -20`

Expected: Build succeeds. Homepage now renders the new sections.

- [x] **Step 5: Commit**

```bash
git add src/app/page.tsx src/app/layout.tsx src/components/StaticContent.tsx
git commit -m "feat: assemble new homepage, wire Footer in layout, update StaticContent"
```

---

## Phase 4: Sub-Pages

### Task 17: Services Index Page

Full-black page. Each service gets a near-viewport section. Green numbered labels, serif headline, description, deliverables, CTA.

**Files:**
- Rewrite: `src/app/services/ServicesPageContent.tsx`
- Modify: `src/app/services/page.tsx`

- [x] **Step 1: Rewrite ServicesPageContent**

Replace the entire contents of `src/app/services/ServicesPageContent.tsx` with:

```tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const SERVICES = [
  {
    number: '01',
    title: 'SEO Audit & Strategy',
    description:
      'A complete picture of where your organic search stands today — and a prioritized roadmap to where it needs to be. Technical health, content gaps, competitive positioning, and quick wins all in one engagement.',
    deliverables: [
      'Full technical SEO audit (crawlability, Core Web Vitals, indexation)',
      'Content gap analysis against top competitors',
      'Keyword opportunity mapping with revenue potential',
      'Prioritized 90-day action plan',
    ],
    href: '/services/seo-audit/',
  },
  {
    number: '02',
    title: 'AI Search Strategy',
    description:
      'Get your brand cited in AI-generated answers across ChatGPT, Perplexity, Google AI Overviews, and Gemini. Structured data, entity optimization, and content formatted for LLM consumption.',
    deliverables: [
      'AI visibility audit across major LLM platforms',
      'Schema markup and structured data implementation',
      'Content restructuring for LLM readability',
      'Ongoing monitoring of AI citation performance',
    ],
    href: '/services/ai-search-strategy/',
  },
  {
    number: '03',
    title: 'Growth & Analytics',
    description:
      'SEO that ties directly to revenue. Attribution models, conversion tracking, and reporting that shows exactly how organic search drives business outcomes.',
    deliverables: [
      'GA4 and Search Console configuration audit',
      'Revenue attribution model setup',
      'Monthly performance reporting with business metrics',
      'Conversion rate optimization recommendations',
    ],
    href: '#contact',
  },
];

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4 },
};

export default function ServicesPageContent() {
  return (
    <div style={{ backgroundColor: 'var(--color-black)' }}>
      <div className="pt-32 pb-16 px-6">
        <div className="mx-auto max-w-4xl">
          <motion.h1
            className="font-serif text-5xl md:text-7xl"
            style={{ color: 'var(--color-white)' }}
            {...fadeIn}
          >
            Services
          </motion.h1>
        </div>
      </div>

      {SERVICES.map((service, i) => (
        <motion.section
          key={service.number}
          className={`py-24 px-6 ${i < SERVICES.length - 1 ? 'border-b' : ''}`}
          style={{ borderColor: 'var(--color-border)' }}
          {...fadeIn}
        >
          <div className="mx-auto max-w-4xl">
            <span
              className="text-sm font-medium uppercase tracking-widest"
              style={{ color: 'var(--color-accent)' }}
            >
              {service.number}
            </span>

            <h2
              className="font-serif mt-4 text-3xl md:text-5xl"
              style={{ color: 'var(--color-white)' }}
            >
              {service.title}
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-relaxed" style={{ color: 'var(--color-muted)' }}>
              {service.description}
            </p>

            <ul className="mt-8 space-y-3">
              {service.deliverables.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base" style={{ color: 'var(--color-white)' }}>
                  <span style={{ color: 'var(--color-accent)' }} aria-hidden="true">—</span>
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href={service.href}
              className="group mt-8 inline-flex items-center gap-2 text-sm font-medium"
              style={{ color: 'var(--color-accent)' }}
            >
              Start here
              <span className="inline-block transition-transform duration-150 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </motion.section>
      ))}
    </div>
  );
}
```

- [x] **Step 2: Update the services page server wrapper**

Replace the entire contents of `src/app/services/page.tsx` with:

```tsx
import { Metadata } from 'next';
import { generateMetadata as createSEOMetadata } from '@/utils/seo';
import ServicesPageContent from './ServicesPageContent';

export const metadata: Metadata = createSEOMetadata({
  title: 'Services — SEO Audit, AI Search Strategy & Growth Analytics',
  description:
    'Comprehensive SEO services: technical audits, AI search optimization for ChatGPT and Google AI Overviews, and growth analytics tied to revenue.',
  alternates: { canonical: 'https://omar-corral.com/services/' },
});

export default function ServicesPage() {
  return <ServicesPageContent />;
}
```

- [x] **Step 3: Verify build compiles**

Run: `npx next build 2>&1 | tail -20`

Expected: Build succeeds.

- [x] **Step 4: Commit**

```bash
git add src/app/services/ServicesPageContent.tsx src/app/services/page.tsx
git commit -m "feat: redesign services index page with numbered sections"
```

---

### Task 18: Service Detail Pages

Both detail pages follow the same pattern: hero band, structured body sections, numbered process steps, bottom CTA.

**Files:**
- Rewrite: `src/app/services/seo-audit/SeoAuditPageContent.tsx`
- Modify: `src/app/services/seo-audit/page.tsx`
- Rewrite: `src/app/services/ai-search-strategy/AiSearchStrategyPageContent.tsx`
- Modify: `src/app/services/ai-search-strategy/page.tsx`

- [x] **Step 1: Rewrite SEO Audit page content**

Replace the entire contents of `src/app/services/seo-audit/SeoAuditPageContent.tsx` with:

```tsx
'use client';

import { motion } from 'framer-motion';

const PROCESS = [
  {
    step: '01',
    title: 'Discovery & Access',
    description: 'I get access to your analytics, Search Console, and CMS. We discuss business goals, target markets, and what success looks like in terms you care about — revenue, leads, or market share.',
  },
  {
    step: '02',
    title: 'Technical Audit',
    description: 'A deep crawl of your site covering indexation, Core Web Vitals, mobile experience, crawl budget, internal linking, and site architecture. Every issue is categorized by impact and effort.',
  },
  {
    step: '03',
    title: 'Content & Competitive Analysis',
    description: 'I map your content against search demand and competitor coverage. This surfaces gaps where you're losing traffic and opportunities where you can win with focused effort.',
  },
  {
    step: '04',
    title: 'Strategy & Roadmap',
    description: 'You get a prioritized 90-day plan: quick wins first, then foundational improvements, then growth plays. Every recommendation ties to a measurable business outcome.',
  },
];

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4 },
};

export default function SeoAuditPageContent() {
  return (
    <div style={{ backgroundColor: 'var(--color-black)' }}>
      {/* Hero band */}
      <div className="pt-32 pb-16 px-6">
        <div className="mx-auto max-w-4xl">
          <motion.p
            className="text-sm font-medium uppercase tracking-[0.2em]"
            style={{ color: 'var(--color-accent)' }}
            {...fadeIn}
          >
            Service
          </motion.p>
          <motion.h1
            className="font-serif mt-4 text-4xl md:text-6xl"
            style={{ color: 'var(--color-white)' }}
            {...fadeIn}
          >
            SEO Audit & Strategy
          </motion.h1>
          <motion.p
            className="mt-4 max-w-xl text-lg"
            style={{ color: 'var(--color-muted)' }}
            {...fadeIn}
          >
            Find out exactly what's holding your organic growth back — and get a clear plan to fix it.
          </motion.p>
        </div>
      </div>

      {/* Process steps */}
      <div className="py-16 px-6">
        <div className="mx-auto max-w-4xl space-y-16">
          {PROCESS.map((item) => (
            <motion.div key={item.step} className="flex gap-6" {...fadeIn}>
              <span
                className="shrink-0 text-5xl font-bold"
                style={{ color: 'var(--color-accent)' }}
              >
                {item.step}
              </span>
              <div>
                <h2 className="text-xl font-semibold" style={{ color: 'var(--color-white)' }}>
                  {item.title}
                </h2>
                <p className="mt-2 text-base leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <motion.div
        className="border-t py-24 px-6 text-center"
        style={{ borderColor: 'var(--color-border)' }}
        {...fadeIn}
      >
        <h2 className="font-serif text-3xl md:text-5xl" style={{ color: 'var(--color-white)' }}>
          Ready to start?
        </h2>
        <a
          href="/#contact"
          className="mt-8 inline-flex items-center rounded-sm px-8 py-3 text-sm font-semibold uppercase tracking-wider transition-colors duration-200 hover:brightness-110"
          style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-black)' }}
        >
          Get in touch
        </a>
      </motion.div>
    </div>
  );
}
```

- [x] **Step 2: Update SEO Audit page server wrapper**

Replace the entire contents of `src/app/services/seo-audit/page.tsx` with:

```tsx
import { Metadata } from 'next';
import { generateMetadata as createSEOMetadata } from '@/utils/seo';
import SeoAuditPageContent from './SeoAuditPageContent';

export const metadata: Metadata = createSEOMetadata({
  title: 'SEO Audit & Strategy',
  description:
    'Comprehensive technical and content SEO audit with a prioritized 90-day strategy tied to business outcomes. Core Web Vitals, indexation, content gaps, and competitive analysis.',
  alternates: { canonical: 'https://omar-corral.com/services/seo-audit/' },
});

export default function SeoAuditPage() {
  return <SeoAuditPageContent />;
}
```

- [x] **Step 3: Rewrite AI Search Strategy page content**

Replace the entire contents of `src/app/services/ai-search-strategy/AiSearchStrategyPageContent.tsx` with:

```tsx
'use client';

import { motion } from 'framer-motion';

const PROCESS = [
  {
    step: '01',
    title: 'AI Visibility Audit',
    description: 'I test how your brand is currently represented across ChatGPT, Perplexity, Gemini, and Google AI Overviews. Where are you cited? Where are competitors winning? Where is there misinformation?',
  },
  {
    step: '02',
    title: 'Entity & Schema Strategy',
    description: 'Build a structured data layer that makes your brand legible to LLMs. Entity disambiguation, knowledge graph connections, and comprehensive schema markup across your key pages.',
  },
  {
    step: '03',
    title: 'Content Restructuring',
    description: 'Reformat existing content for LLM consumption — clear headers, concise answers, authoritative sourcing, and citation-ready formatting that LLMs prefer to reference.',
  },
  {
    step: '04',
    title: 'Monitoring & Iteration',
    description: 'Ongoing tracking of how your brand appears in AI-generated answers. Regular testing, prompt monitoring, and strategy adjustments as platforms evolve.',
  },
];

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4 },
};

export default function AiSearchStrategyPageContent() {
  return (
    <div style={{ backgroundColor: 'var(--color-black)' }}>
      {/* Hero band */}
      <div className="pt-32 pb-16 px-6">
        <div className="mx-auto max-w-4xl">
          <motion.p
            className="text-sm font-medium uppercase tracking-[0.2em]"
            style={{ color: 'var(--color-accent)' }}
            {...fadeIn}
          >
            Service
          </motion.p>
          <motion.h1
            className="font-serif mt-4 text-4xl md:text-6xl"
            style={{ color: 'var(--color-white)' }}
            {...fadeIn}
          >
            AI Search Strategy
          </motion.h1>
          <motion.p
            className="mt-4 max-w-xl text-lg"
            style={{ color: 'var(--color-muted)' }}
            {...fadeIn}
          >
            Get your brand cited by the AI platforms that are reshaping how people find answers.
          </motion.p>
        </div>
      </div>

      {/* Process steps */}
      <div className="py-16 px-6">
        <div className="mx-auto max-w-4xl space-y-16">
          {PROCESS.map((item) => (
            <motion.div key={item.step} className="flex gap-6" {...fadeIn}>
              <span
                className="shrink-0 text-5xl font-bold"
                style={{ color: 'var(--color-accent)' }}
              >
                {item.step}
              </span>
              <div>
                <h2 className="text-xl font-semibold" style={{ color: 'var(--color-white)' }}>
                  {item.title}
                </h2>
                <p className="mt-2 text-base leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <motion.div
        className="border-t py-24 px-6 text-center"
        style={{ borderColor: 'var(--color-border)' }}
        {...fadeIn}
      >
        <h2 className="font-serif text-3xl md:text-5xl" style={{ color: 'var(--color-white)' }}>
          Ready to start?
        </h2>
        <a
          href="/#contact"
          className="mt-8 inline-flex items-center rounded-sm px-8 py-3 text-sm font-semibold uppercase tracking-wider transition-colors duration-200 hover:brightness-110"
          style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-black)' }}
        >
          Get in touch
        </a>
      </motion.div>
    </div>
  );
}
```

- [x] **Step 4: Update AI Search Strategy page server wrapper**

Replace the entire contents of `src/app/services/ai-search-strategy/page.tsx` with:

```tsx
import { Metadata } from 'next';
import { generateMetadata as createSEOMetadata } from '@/utils/seo';
import AiSearchStrategyPageContent from './AiSearchStrategyPageContent';

export const metadata: Metadata = createSEOMetadata({
  title: 'AI Search Strategy',
  description:
    'Get your brand cited by ChatGPT, Perplexity, Google AI Overviews, and Gemini. Entity optimization, structured data, and LLM-readability content strategy.',
  alternates: { canonical: 'https://omar-corral.com/services/ai-search-strategy/' },
});

export default function AiSearchStrategyPage() {
  return <AiSearchStrategyPageContent />;
}
```

- [x] **Step 5: Verify build compiles**

Run: `npx next build 2>&1 | tail -20`

Expected: Build succeeds.

- [x] **Step 6: Commit**

```bash
git add src/app/services/seo-audit/ src/app/services/ai-search-strategy/
git commit -m "feat: redesign service detail pages with process steps and CTAs"
```

---

### Task 19: Case Studies Page

Editorial long-scroll. Each case study is a full section. Green category, serif headline, narrative, oversized metric callout.

**Files:**
- Rewrite: `src/app/case-studies/CaseStudiesPageContent.tsx`
- Modify: `src/app/case-studies/page.tsx`

- [x] **Step 1: Rewrite CaseStudiesPageContent**

Replace the entire contents of `src/app/case-studies/CaseStudiesPageContent.tsx` with:

```tsx
'use client';

import { motion } from 'framer-motion';
import CountUp from '@/components/CountUp';

const CASE_STUDIES = [
  {
    category: 'E-Commerce · SEO',
    headline: '312% organic traffic growth in 6 months',
    problem: 'A mid-market e-commerce brand was stuck on page two for their highest-value product keywords. Their technical debt was severe — thousands of duplicate pages, missing canonical tags, and a crawl budget that was mostly wasted on faceted navigation.',
    approach: 'I ran a full technical audit, cleaned up indexation issues, restructured their category taxonomy, and built a content strategy targeting long-tail product queries with genuine buyer intent.',
    result: 'Organic sessions tripled within six months. Revenue from organic search doubled, and their top 50 product keywords moved from page 2–3 to page 1 positions.',
    metric: { value: 312, suffix: '%', label: 'Organic Traffic Growth' },
  },
  {
    category: 'SaaS · AI Search',
    headline: 'From invisible to cited across 4 AI platforms',
    problem: 'A B2B SaaS company had zero presence in AI-generated answers. When prospects asked ChatGPT or Perplexity about their category, competitors were cited and they were nowhere.',
    approach: 'I implemented comprehensive schema markup, rewrote key landing pages for entity-first information architecture, and created authoritative FAQ content formatted for LLM consumption.',
    result: 'Within four months, the brand was being cited by ChatGPT, Perplexity, Gemini, and appearing in Google AI Overviews for their core product queries.',
    metric: { value: 4, suffix: '', label: 'AI Platforms Citing Brand' },
  },
  {
    category: 'Healthcare · Local SEO',
    headline: '$1.2M in attributed revenue from organic search',
    problem: 'A regional healthcare provider was invisible in local search despite having 12 locations. Their Google Business Profiles were inconsistent, their site had no local content strategy, and they were losing patients to aggregator sites.',
    approach: 'I built a localized content strategy for each service area, optimized all Google Business Profiles, implemented local schema markup, and set up a review management system.',
    result: 'Organic became their top revenue channel within eight months. Local pack visibility went from 2 to 11 of their 12 locations appearing in the top 3.',
    metric: { value: 1.2, prefix: '$', suffix: 'M', label: 'Revenue from Organic' },
  },
];

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4 },
};

export default function CaseStudiesPageContent() {
  return (
    <div style={{ backgroundColor: 'var(--color-black)' }}>
      <div className="pt-32 pb-16 px-6">
        <div className="mx-auto max-w-4xl">
          <motion.h1
            className="font-serif text-5xl md:text-7xl"
            style={{ color: 'var(--color-white)' }}
            {...fadeIn}
          >
            Case Studies
          </motion.h1>
          <motion.p
            className="mt-4 text-lg"
            style={{ color: 'var(--color-muted)' }}
            {...fadeIn}
          >
            Real results, not hypotheticals.
          </motion.p>
        </div>
      </div>

      {CASE_STUDIES.map((study, i) => (
        <motion.section
          key={study.headline}
          className="py-24 px-6"
          style={{
            backgroundColor: i % 2 === 0 ? 'var(--color-black)' : 'var(--color-surface)',
            borderTop: i > 0 ? '1px solid var(--color-border)' : undefined,
          }}
          {...fadeIn}
        >
          <div className="mx-auto max-w-4xl">
            <p
              className="text-xs font-medium uppercase tracking-[0.2em]"
              style={{ color: 'var(--color-accent)' }}
            >
              {study.category}
            </p>

            <h2
              className="font-serif mt-4 text-3xl leading-snug md:text-5xl"
              style={{ color: 'var(--color-white)' }}
            >
              {study.headline}
            </h2>

            <div className="mt-10 space-y-6 max-w-2xl">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider" style={{ color: 'var(--color-white)' }}>
                  The Problem
                </h3>
                <p className="mt-2 text-base leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                  {study.problem}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider" style={{ color: 'var(--color-white)' }}>
                  The Approach
                </h3>
                <p className="mt-2 text-base leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                  {study.approach}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider" style={{ color: 'var(--color-white)' }}>
                  The Result
                </h3>
                <p className="mt-2 text-base leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                  {study.result}
                </p>
              </div>
            </div>

            <div className="mt-12">
              <CountUp
                target={study.metric.value}
                prefix={study.metric.prefix}
                suffix={study.metric.suffix}
                className="text-6xl font-bold md:text-7xl"
                style={{ color: 'var(--color-accent)' }}
              />
              <p
                className="mt-2 text-xs font-medium uppercase tracking-widest"
                style={{ color: 'var(--color-muted)' }}
              >
                {study.metric.label}
              </p>
            </div>
          </div>
        </motion.section>
      ))}
    </div>
  );
}
```

- [x] **Step 2: Update case studies page server wrapper**

Replace the entire contents of `src/app/case-studies/page.tsx` with:

```tsx
import { Metadata } from 'next';
import { generateMetadata as createSEOMetadata } from '@/utils/seo';
import CaseStudiesPageContent from './CaseStudiesPageContent';

export const metadata: Metadata = createSEOMetadata({
  title: 'Case Studies — Real SEO & AI Search Results',
  description:
    'Real results from SEO and AI search strategy engagements. E-commerce traffic growth, AI platform citations, and revenue attribution from organic search.',
  alternates: { canonical: 'https://omar-corral.com/case-studies/' },
});

export default function CaseStudiesPage() {
  return <CaseStudiesPageContent />;
}
```

- [x] **Step 3: Verify build compiles**

Run: `npx next build 2>&1 | tail -20`

Expected: Build succeeds.

- [x] **Step 4: Commit**

```bash
git add src/app/case-studies/
git commit -m "feat: redesign case studies page with editorial long-scroll layout"
```

---

### Task 20: 404 Page

Black page. Large serif 404. Short message. Green CTA back home.

**Files:**
- Rewrite: `src/app/not-found.tsx`

- [x] **Step 1: Rewrite the 404 page**

Replace the entire contents of `src/app/not-found.tsx` with:

```tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center px-6"
      style={{ backgroundColor: 'var(--color-black)' }}
    >
      <h1
        className="font-serif text-8xl md:text-[10rem]"
        style={{ color: 'var(--color-white)' }}
      >
        404
      </h1>

      <p className="mt-4 text-lg" style={{ color: 'var(--color-muted)' }}>
        This page doesn&apos;t exist.
      </p>

      <Link
        href="/"
        className="group mt-8 inline-flex items-center gap-2 text-sm font-medium"
        style={{ color: 'var(--color-accent)' }}
      >
        Back to home
        <span className="inline-block transition-transform duration-150 group-hover:translate-x-1">→</span>
      </Link>
    </main>
  );
}
```

- [x] **Step 2: Verify build compiles**

Run: `npx next build 2>&1 | tail -20`

Expected: Build succeeds.

- [x] **Step 3: Commit**

```bash
git add src/app/not-found.tsx
git commit -m "feat: redesign 404 page with serif heading and green CTA"
```

---

## Phase 5: SEO & Cleanup

### Task 21: SEO Updates

Update sitemap with marketing routes, manifest with new theme colors, SEO data with updated positioning, enhanced-seo with updated schemas.

**Files:**
- Modify: `src/app/sitemap.ts`
- Modify: `src/app/manifest.ts`
- Modify: `src/data/seo.ts`
- Modify: `src/data/enhanced-seo.ts`
- Modify: `src/components/StructuredData.tsx`

- [x] **Step 1: Update sitemap to include marketing routes**

In `src/app/sitemap.ts`, add these entries after the homepage entry and before the SEO Resources section:

```typescript
    // Marketing pages
    {
      url: `${baseUrl}/services/`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/seo-audit/`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/ai-search-strategy/`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/case-studies/`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
```

- [x] **Step 2: Update manifest theme colors**

In `src/app/manifest.ts`, change these values:

`background_color`: `'#000000'` (was `'#0f172a'`)
`theme_color`: `'#00E55C'` (was `'#3b82f6'`)

Update `short_name` to `'Omar Corral'`.

Update the `description` to: `'Digital strategist specializing in SEO, AI search optimization, and growth strategy. Based in Phoenix, Arizona.'`

Update the `shortcuts` array — change the Services shortcut URL from `'/#skills'` to `'/services/'`.

- [x] **Step 3: Update seo.ts theme colors and positioning**

In `src/data/seo.ts`, update the `technical` section:

```typescript
themeColor: "#000000",
backgroundColor: "#000000",
```

Update the `meta.title`:

```typescript
title: "Omar Corral — Digital Strategist | SEO, AI Search & Growth Strategy",
```

Update the `meta.description`:

```typescript
description: "Omar Corral — digital strategist with 12+ years in organic search. SEO, AI search optimization, and growth strategy for brands that want to lead.",
```

Update the `openGraph.title` and `twitter.title` to match the new `meta.title`.

Update `personal.jobTitle` to: `"Digital Strategist | SEO, AI Search & Growth Strategy"`.

Update the `structuredData.breadcrumb.itemListElement` to remove the Experience entry and add Services and Case Studies entries matching the new navigation.

- [x] **Step 4: Update enhanced-seo.ts**

In `src/data/enhanced-seo.ts`:

Update the `breadcrumb.itemListElement` to match the new navigation: Home → Services → Proof → About → FAQ → Contact.

Update the `faq.mainEntity` to match the exact FAQ_DATA from `src/components/FAQ.tsx` (questions and answers must match between the component and the schema).

Update `navigationSchema.hasPart` to reflect the new navigation links: Services, Proof, About, FAQ, Contact (removing the old Experience entry).

- [x] **Step 5: Verify build compiles**

Run: `npx next build 2>&1 | tail -20`

Expected: Build succeeds.

- [x] **Step 6: Commit**

```bash
git add src/app/sitemap.ts src/app/manifest.ts src/data/seo.ts src/data/enhanced-seo.ts
git commit -m "feat: update SEO data, sitemap, manifest for signal rebrand"
```

---

### Task 22: Dead Code Removal

Remove all components, data files, hooks, and utilities that are no longer imported anywhere.

**Files:**
- Delete 25+ files (see "Files to Delete" table in the file structure section above)

- [x] **Step 1: Remove unused components**

Delete these files:

```bash
rm src/components/AlgorithmBackground.tsx
rm src/components/AnimatedText.tsx
rm src/components/FloatingNav.tsx
rm src/components/InteractiveBackground.tsx
rm src/components/InteractiveParticles.tsx
rm src/components/LazyComponents.tsx
rm src/components/MonogramLogo.tsx
rm src/components/ParallaxContainer.tsx
rm src/components/ScrollProgress.tsx
rm src/components/ScrollRocket.tsx
rm src/components/ScrollToTop.tsx
rm src/components/Search.tsx
rm src/components/SearchButton.tsx
rm src/components/SEOResourcesCTA.tsx
rm src/components/SkillModal.tsx
rm src/components/Skills.tsx
rm src/components/SafeCircle.tsx
rm src/components/Experience.tsx
rm src/components/InsightsSection.tsx
rm src/components/ServicesOverview.tsx
rm src/components/ProofSection.tsx
rm src/components/FAQSection.tsx
rm src/components/InteractiveContactForm.tsx
rm src/components/PerformanceOptimizations.tsx
rm src/components/ClientOnly.tsx
```

- [x] **Step 2: Remove unused data files and utilities**

```bash
rm src/data/skills.js
rm src/data/skills-schema.ts
rm src/data/experience.js
rm src/data/hero.js
rm src/hooks/useDeviceDetection.ts
rm src/utils/hydrationSafe.ts
```

- [x] **Step 3: Remove Font Awesome from package.json**

Run:

```bash
npm uninstall @fortawesome/fontawesome-svg-core @fortawesome/free-brands-svg-icons @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
```

- [x] **Step 4: Update site.ts re-exports if needed**

Verify `src/data/site.ts` doesn't re-export anything that was deleted. Currently it exports from `seo`, `enhanced-seo`, and `socials` — all of which still exist. No change needed.

- [x] **Step 5: Verify build compiles with no dead imports**

Run: `npx next build 2>&1 | tail -30`

Expected: Build succeeds with zero import errors. If any file still imports a deleted module, fix the import.

- [x] **Step 6: Commit**

```bash
git add -A
git commit -m "chore: remove 30+ unused components, data files, and Font Awesome dependency"
```

---

### Task 23: Final Build & Visual Verification

Full production build. Verify all routes render. Check for any remaining issues.

**Files:** None (verification only)

- [x] **Step 1: Run a clean production build**

```bash
rm -rf .next out
npx next build
```

Expected: Build completes with zero errors. Static export generates pages for `/`, `/services/`, `/services/seo-audit/`, `/services/ai-search-strategy/`, `/case-studies/`, and 404.

- [x] **Step 2: Serve the static export and verify routes**

```bash
npx serve@latest out -l 3333
```

In a separate terminal (or browser), verify each route loads:

- `http://localhost:3333/` — Homepage with hero, proof strip, services, case studies, about, FAQ, contact, footer
- `http://localhost:3333/services/` — Services index with 3 numbered sections
- `http://localhost:3333/services/seo-audit/` — SEO audit detail with process steps
- `http://localhost:3333/services/ai-search-strategy/` — AI search detail with process steps
- `http://localhost:3333/case-studies/` — Case studies with editorial sections
- `http://localhost:3333/nonexistent/` — 404 page with serif heading

- [x] **Step 3: Verify mobile responsiveness**

Check the homepage at viewport widths: 375px, 768px, 1024px. Confirm:
- Hero headline scales to 40–48px on mobile
- CTAs stack vertically on mobile
- Navbar shows hamburger on mobile, links on desktop
- Proof metrics stack vertically on mobile

- [x] **Step 4: Verify reduced motion**

In browser DevTools, enable `prefers-reduced-motion: reduce`. Confirm:
- No translateY animations on scroll
- No counting animation (numbers appear immediately)
- SignalGrid shows static state
- FAQ accordion still works (uses AnimatePresence which should handle this)

- [x] **Step 5: Commit final state**

If any fixes were needed during verification, commit them:

```bash
git add -A
git commit -m "fix: final adjustments from visual verification"
```

---

## Self-Review Notes

**Spec coverage:**
- Section 1 (Brand Direction): Reflected in globals.css tokens and all component styles ✓
- Section 2 (Color Palette): All 7 tokens in globals.css ✓
- Section 3 (Typography): DM Serif Display + Inter loaded in Task 2, used throughout ✓
- Section 4 (Logo): SignalLogo component with mark + wordmark variants in Task 3 ✓
- Section 5 (Homepage Structure): All 9 sub-sections covered (5.1 Navbar, 5.2 Hero, 5.3 ProofStrip, 5.4 Services, 5.5 CaseStudies, 5.6 About, 5.7 FAQ, 5.8 Contact, 5.9 Footer) ✓
- Section 6 (Sub-Pages): Services index (Task 17), detail pages (Task 18), case studies (Task 19), 404 (Task 20) ✓
- Section 7 (Motion System): Hero entrance stagger, scroll reveals, micro-interactions, reduced motion all covered ✓
- Section 8 (Technical Plan): Kept items preserved, removed items deleted, added items created ✓
- Section 9 (Pages Summary): All 6 routes accounted for ✓
- Section 10 (Out of Scope): Docusaurus, invoicing, blog correctly excluded ✓

**Type consistency:** `fadeIn` animation variant uses consistent shape (`initial`/`whileInView`/`viewport`/`transition`) across all components. `CountUp` accepts `target`, `prefix`, `suffix`, `className`, `style` consistently. CSS variables referenced as `var(--color-*)` throughout. `font-serif` class used for DM Serif Display everywhere.

**Placeholder scan:** No TBDs, TODOs, "implement later", or "similar to Task N" found.

---

## Implementation Status (updated 2026-05-06)

**All 23 tasks completed.** The rebrand shipped with 30+ git commits starting from `3bf6c25`.

**Remaining minor cleanup:** Three components were not fully removed in Task 22 and remain unused in `src/components/`: `InsightsSection.tsx`, `ProofSection.tsx`, `ServicesOverview.tsx`. None are imported anywhere. Safe to delete in a follow-up chore commit.
