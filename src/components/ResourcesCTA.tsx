'use client';

import { motion } from 'framer-motion';

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
        backgroundColor: 'var(--color-surface)',
      }}
      aria-labelledby="resources-heading"
    >
      <div className="mx-auto max-w-5xl grid md:grid-cols-[2fr_3fr] gap-16 items-start">

        {/* Left: context + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
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
            The complete SEO playbook. Open to everyone.
          </h2>

          <p
            className="mt-4 text-base leading-relaxed"
            style={{ color: 'var(--color-muted)' }}
          >
            Practitioner-level guides on technical SEO, search intent, AI search
            strategy, and the frameworks behind the results.
          </p>

          <a
            href="/seo-resources/"
            className="group mt-8 inline-flex items-center gap-3 rounded-sm border px-8 py-3 text-sm font-semibold uppercase tracking-wider transition-colors duration-200 hover:bg-white/5"
            style={{
              borderColor: 'var(--color-accent)',
              color: 'var(--color-accent)',
            }}
          >
            Browse all resources
            <span className="inline-block transition-transform duration-150 group-hover:translate-x-1">
              →
            </span>
          </a>

          <p
            className="mt-4 text-xs"
            style={{ color: 'var(--color-muted)' }}
          >
            Free · No signup required
          </p>
        </motion.div>

        {/* Right: resource list */}
        <div>
          {RESOURCES.map((item, i) => (
            <motion.a
              key={item.href}
              href={item.href}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.07 }}
              className="group flex items-start justify-between gap-6 py-5 border-b"
              style={{ borderColor: 'var(--color-border)' }}
            >
              <div>
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
                className="mt-1 shrink-0 text-lg transition-transform duration-150 group-hover:translate-x-1"
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
