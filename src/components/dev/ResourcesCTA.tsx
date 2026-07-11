'use client';

import { motion } from 'framer-motion';

const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1];

const RESOURCES = [
  {
    category: 'AI & GEO',
    title: 'GEO Fundamentals — How LLMs Retrieve and Cite Content',
    href: '/seo-resources/docs/ai-search/geo-fundamentals',
  },
  {
    category: 'AI Discoverability',
    title: 'WebMCP Implementation — Expose Your Site to AI Agents',
    href: '/seo-resources/docs/ai-search/webmcp-implementation',
  },
  {
    category: 'Insights',
    title: 'We Won the Rankings. The Ecosystem Moved On.',
    href: '/seo-resources/blog/zero-click-search-rankings-traffic-decoupled',
  },
  {
    category: 'Core Frameworks',
    title: 'The Three Pillars of SEO: Authority, Relevance & Experience',
    href: '/seo-resources/docs/getting-started/seo-pillars',
  },
];

export default function ResourcesCTA() {
  return (
    <section
      className="border-t border-b py-24 px-6"
      style={{
        borderColor: 'var(--color-border)',
        backgroundColor: 'rgba(0, 0, 0, 0.12)',
      }}
      aria-labelledby="resources-heading"
    >
      <div className="mx-auto max-w-5xl grid md:grid-cols-[2fr_3fr] gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE_OUT }}
        >
          <p
            className="text-xs font-medium uppercase tracking-[0.2em]"
            style={{ color: 'var(--color-accent)' }}
          >
            Free Resource Center
          </p>
          <h2
            id="resources-heading"
            className="font-serif mt-4 text-3xl md:text-4xl leading-tight"
            style={{ color: 'var(--color-white)' }}
          >
            Everything I&apos;ve learned. Published for free.
          </h2>
          <p
            className="mt-4 text-base leading-relaxed"
            style={{ color: 'var(--color-muted)' }}
          >
            40+ practitioner-level guides on technical SEO, search intent, AI
            search strategy, and the frameworks behind the results.
          </p>
          <a
            href="/seo-resources/"
            className="group mt-8 inline-flex items-center gap-3 rounded-sm border px-8 py-3 text-sm font-semibold uppercase tracking-wider transition-[transform,background-color] duration-150 ease-out hover:bg-white/5 active:scale-[0.97]"
            style={{
              borderColor: 'var(--color-accent)',
              color: 'var(--color-accent)',
            }}
          >
            Browse all resources{' '}
            <span className="inline-block transition-transform duration-150 group-hover:translate-x-1">
              →
            </span>
          </a>
          <p className="mt-4 text-xs" style={{ color: 'var(--color-muted)' }}>
            Free · No signup required
          </p>
        </motion.div>

        <div>
          {RESOURCES.map((item, i) => (
            <motion.a
              key={item.href}
              href={item.href}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06, ease: EASE_OUT }}
              className="group relative flex items-start justify-between gap-6 overflow-hidden py-5 border-b"
              style={{ borderColor: 'var(--color-border)' }}
            >
              <div
                className="absolute inset-0 origin-left scale-x-0 transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-x-100"
                style={{ backgroundColor: 'rgba(0, 229, 92, 0.04)' }}
                aria-hidden="true"
              />

              <div className="relative z-[1] transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-2">
                <span
                  className="text-xs font-medium uppercase tracking-[0.15em]"
                  style={{ color: 'var(--color-accent)' }}
                >
                  {item.category}
                </span>
                <p
                  className="mt-1 text-base font-semibold leading-snug transition-colors duration-150 group-hover:opacity-80"
                  style={{ color: 'var(--color-white)' }}
                >
                  {item.title}
                </p>
              </div>
              <span
                className="relative z-[1] mt-1 shrink-0 text-lg transition-transform duration-150 group-hover:translate-x-1"
                style={{ color: 'var(--color-accent)' }}
                aria-hidden="true"
              >
                →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
