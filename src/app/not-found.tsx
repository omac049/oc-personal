'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';

const NAV_LINKS = [
  { href: '/', label: 'Home', desc: 'Start here' },
  { href: '/services', label: 'Services', desc: 'SEO · AI Search · Strategy' },
  { href: '/case-studies', label: 'Case Studies', desc: 'Real results, real clients' },
];

function ScanGrid() {
  const shouldReduce = useReducedMotion();
  const cols = 14;
  const rows = 8;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden="true">
      {/* Grid lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.06]"
        xmlns="http://www.w3.org/2000/svg"
        style={{ color: 'var(--color-accent)' }}
      >
        <defs>
          <pattern id="grid-404" x="0" y="0" width={`${100 / cols}%`} height={`${100 / rows}%`} patternUnits="userSpaceOnUse">
            <path d="M 0 0 L 0 100% M 100% 0 L 100% 100% M 0 0 L 100% 0 M 0 100% L 100% 100%" stroke="currentColor" strokeWidth="0.5" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-404)" />
      </svg>

      {/* Scan line sweep */}
      {!shouldReduce && (
        <motion.div
          className="absolute inset-y-0 w-px"
          style={{ background: 'linear-gradient(to bottom, transparent 0%, var(--color-accent) 40%, var(--color-accent) 60%, transparent 100%)', opacity: 0.4 }}
          initial={{ left: '-2%' }}
          animate={{ left: ['−2%', '102%'] }}
          transition={{ duration: 3.2, delay: 0.4, ease: 'linear', repeat: Infinity, repeatDelay: 4 }}
        />
      )}

      {/* Horizontal scan band */}
      {!shouldReduce && (
        <motion.div
          className="absolute inset-x-0 h-px"
          style={{ background: 'linear-gradient(to right, transparent 0%, var(--color-accent) 40%, var(--color-accent) 60%, transparent 100%)', opacity: 0.25 }}
          initial={{ top: '-2%' }}
          animate={{ top: ['-2%', '102%'] }}
          transition={{ duration: 4, delay: 1.8, ease: 'linear', repeat: Infinity, repeatDelay: 3.5 }}
        />
      )}

      {/* Scattered signal dots */}
      {[
        { x: '8%', y: '18%', d: 1.1 },
        { x: '22%', y: '72%', d: 0.7 },
        { x: '47%', y: '14%', d: 0.9 },
        { x: '63%', y: '81%', d: 1.3 },
        { x: '78%', y: '35%', d: 0.6 },
        { x: '91%', y: '60%', d: 1.0 },
      ].map((dot, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{ left: dot.x, top: dot.y, backgroundColor: 'var(--color-accent)' }}
          initial={{ opacity: 0, scale: 0 }}
          animate={shouldReduce ? { opacity: 0.4 } : {
            opacity: [0, 0.7, 0],
            scale: [0, 1, 0],
          }}
          transition={{ duration: dot.d * 2, delay: i * 0.5 + 0.8, repeat: Infinity, repeatDelay: dot.d * 3 }}
        />
      ))}
    </div>
  );
}

function CrawlLog({ lines }: { lines: string[] }) {
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    if (visible >= lines.length) return;
    const t = setTimeout(() => setVisible(v => v + 1), 280);
    return () => clearTimeout(t);
  }, [visible, lines.length]);

  return (
    <div
      className="font-mono text-xs leading-relaxed space-y-0.5 w-full"
      role="log"
      aria-label="Crawl status"
      aria-live="polite"
    >
      {lines.slice(0, visible).map((line, i) => {
        const isError = line.startsWith('✗') || line.includes('404') || line.includes('ERR');
        const isSuccess = line.startsWith('✓') || line.includes('OK') || line.includes('200');
        const isWarn = line.startsWith('⚠');
        return (
          <motion.p
            key={i}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.15 }}
            style={{
              color: isError
                ? '#ff4d4d'
                : isSuccess
                ? 'var(--color-accent)'
                : isWarn
                ? '#f5a623'
                : 'var(--color-muted)',
            }}
          >
            {line}
          </motion.p>
        );
      })}
      {visible < lines.length && (
        <motion.span
          style={{ color: 'var(--color-accent)' }}
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
        >
          ▋
        </motion.span>
      )}
    </div>
  );
}

const LOG_LINES = [
  'CRAWLER  → Requesting URL…',
  'DNS      ✓ Resolved in 12ms',
  'CONNECT  ✓ TCP handshake OK',
  'FETCH    ✗ HTTP 404 — Page not found',
  'INDEX    ✗ URL not in sitemap',
  'VERDICT  ⚠ Crawl budget wasted on ghost URL',
  'ACTION   → Redirecting to ranked content…',
];

export default function NotFound() {
  return (
    <main
      className="relative flex min-h-screen flex-col overflow-hidden"
      style={{ backgroundColor: 'var(--color-black)' }}
    >
      <ScanGrid />

      {/* Top bar */}
      <header className="relative z-10 flex items-center justify-between px-6 py-5 md:px-10">
        <Link href="/" aria-label="Omar Corral — Home">
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span
              className="inline-flex h-7 w-7 items-center justify-center rounded-md text-xs font-bold"
              style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-black)' }}
              aria-hidden="true"
            >
              O
            </span>
            <span className="text-sm font-medium tracking-widest uppercase" style={{ color: 'var(--color-white)' }}>
              Omar Corral
            </span>
          </motion.div>
        </Link>

        <motion.span
          className="rounded-full px-3 py-1 text-xs font-mono font-medium"
          style={{ backgroundColor: 'rgba(255,77,77,0.1)', color: '#ff4d4d', border: '1px solid rgba(255,77,77,0.2)' }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          HTTP 404
        </motion.span>
      </header>

      {/* Hero */}
      <section className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-16 md:py-24">
        <div className="w-full max-w-5xl mx-auto">

          {/* Eyebrow */}
          <motion.p
            className="mb-4 text-xs font-mono font-medium uppercase tracking-[0.2em]"
            style={{ color: 'var(--color-accent)' }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Crawl Error · Status 404
          </motion.p>

          {/* Big 404 */}
          <div className="relative mb-6">
            <motion.h1
              className="font-serif leading-none select-none"
              style={{
                fontSize: 'clamp(6rem, 20vw, 16rem)',
                color: 'transparent',
                WebkitTextStroke: '1px rgba(255,255,255,0.08)',
                letterSpacing: '-0.04em',
                lineHeight: 0.9,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              aria-hidden="true"
            >
              404
            </motion.h1>

            <motion.div
              className="absolute inset-0 flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2
                className="font-serif"
                style={{
                  fontSize: 'clamp(2rem, 6vw, 5rem)',
                  color: 'var(--color-white)',
                  letterSpacing: '-0.03em',
                  lineHeight: 1.1,
                  maxWidth: '16ch',
                }}
              >
                This page{' '}
                <span style={{ color: 'var(--color-accent)' }}>dropped</span>{' '}
                out of the index.
              </h2>
            </motion.div>
          </div>

          <motion.p
            className="mb-12 text-base md:text-lg max-w-xl"
            style={{ color: 'var(--color-muted)' }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            Every broken URL is a lost ranking signal. Good thing you landed here instead — there&rsquo;s real content worth crawling below.
          </motion.p>

          {/* Two-column layout: log + links */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">

            {/* Left — crawl log terminal */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
            >
              <p
                className="mb-3 text-xs font-mono uppercase tracking-widest"
                style={{ color: 'var(--color-muted)' }}
              >
                Crawler report
              </p>
              <div
                className="rounded-lg px-5 py-4"
                style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
              >
                <div
                  className="mb-3 flex items-center gap-1.5"
                  aria-hidden="true"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 opacity-70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500 opacity-70" />
                  <span className="w-2.5 h-2.5 rounded-full opacity-70" style={{ backgroundColor: 'var(--color-accent)' }} />
                  <span className="ml-2 text-xs font-mono" style={{ color: 'var(--color-muted)' }}>
                    signal-crawler v2.6
                  </span>
                </div>
                <CrawlLog lines={LOG_LINES} />
              </div>
            </motion.div>

            {/* Right — ranked results */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <p
                className="mb-3 text-xs font-mono uppercase tracking-widest"
                style={{ color: 'var(--color-muted)' }}
              >
                Top ranked pages
              </p>
              <nav aria-label="Suggested pages" className="space-y-2">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, delay: 0.8 + i * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className="group flex items-center justify-between rounded-lg px-4 py-3.5 transition-colors duration-150"
                      style={{
                        backgroundColor: 'var(--color-surface)',
                        border: '1px solid var(--color-border)',
                      }}
                    >
                      <div>
                        <div className="flex items-center gap-2.5 mb-0.5">
                          <span
                            className="font-mono text-xs font-bold tabular-nums"
                            style={{ color: 'var(--color-accent)' }}
                          >
                            #{i + 1}
                          </span>
                          <span
                            className="text-sm font-semibold transition-colors duration-150"
                            style={{ color: 'var(--color-white)' }}
                          >
                            {link.label}
                          </span>
                        </div>
                        <span
                          className="text-xs ml-7"
                          style={{ color: 'var(--color-muted)' }}
                        >
                          {link.desc}
                        </span>
                      </div>
                      <span
                        className="text-lg transition-transform duration-150 group-hover:translate-x-1"
                        style={{ color: 'var(--color-accent)' }}
                        aria-hidden="true"
                      >
                        →
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          </div>

          {/* Bottom CTA strip */}
          <motion.div
            className="mt-12 pt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between"
            style={{ borderTop: '1px solid var(--color-border)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            <p className="text-sm" style={{ color: 'var(--color-muted)' }}>
              Broken link? Every 404 hurts your crawl budget.{' '}
              <Link
                href="/#contact"
                className="underline underline-offset-4 transition-colors duration-150 hover:no-underline"
                style={{ color: 'var(--color-white)' }}
              >
                Let&rsquo;s fix your site&rsquo;s technical SEO.
              </Link>
            </p>

            <Link
              href="/"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-150"
              style={{
                backgroundColor: 'var(--color-accent)',
                color: 'var(--color-black)',
              }}
            >
              Back to home
              <span
                className="inline-block transition-transform duration-150 group-hover:translate-x-1"
                aria-hidden="true"
              >
                →
              </span>
            </Link>
          </motion.div>

        </div>
      </section>

      {/* Footer whisper */}
      <footer className="relative z-10 px-6 py-4 md:px-10">
        <motion.p
          className="text-xs font-mono text-center"
          style={{ color: 'rgba(160,160,160,0.4)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          omar-corral.com · Page not indexed · Signal SEO
        </motion.p>
      </footer>
    </main>
  );
}
