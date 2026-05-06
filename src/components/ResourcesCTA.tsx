'use client';

import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4 },
};

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
      <motion.div className="mx-auto max-w-4xl" {...fadeIn}>
        <p
          className="text-xs font-medium uppercase tracking-[0.2em]"
          style={{ color: 'var(--color-accent)' }}
        >
          Free Resource Center
        </p>

        <h2
          id="resources-heading"
          className="font-serif mt-4 text-3xl md:text-5xl"
          style={{ color: 'var(--color-white)' }}
        >
          Learn the strategy behind the results
        </h2>

        <p
          className="mt-4 max-w-xl text-base leading-relaxed"
          style={{ color: 'var(--color-muted)' }}
        >
          Guides on technical SEO, content strategy, AI search optimization,
          and on-page fundamentals — written for practitioners, not beginners.
        </p>

        <a
          href="/seo-resources/"
          className="group mt-8 inline-flex items-center gap-3 rounded-sm border px-8 py-3 text-sm font-semibold uppercase tracking-wider transition-colors duration-200 hover:bg-white/5"
          style={{
            borderColor: 'var(--color-accent)',
            color: 'var(--color-accent)',
          }}
        >
          Browse SEO resources
          <span className="inline-block transition-transform duration-150 group-hover:translate-x-1">
            →
          </span>
        </a>
      </motion.div>
    </section>
  );
}
