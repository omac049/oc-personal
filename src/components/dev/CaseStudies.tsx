'use client';

import { motion } from 'framer-motion';
import CountUp from '@/components/CountUp';

const STUDIES = [
  {
    category: 'E-Commerce · SEO',
    headline: 'Organic sessions tripled in 6 months',
    metric: {
      target: 3,
      suffix: 'x',
      label: 'Sessions multiplied',
    },
    relatedReading: {
      title: 'The Three Pillars of SEO',
      href: '/seo-resources/docs/getting-started/seo-pillars',
    },
  },
  {
    category: 'SaaS · AI Search',
    headline: 'Cited across 4 AI platforms',
    metric: {
      target: 4,
      label: 'Platforms citing brand',
    },
    relatedReading: {
      title: 'GEO Fundamentals',
      href: '/seo-resources/docs/ai-search/geo-fundamentals',
    },
  },
  {
    category: 'Higher Ed · AI Search',
    headline: '$1.2M attributed to organic search',
    metric: {
      target: 1.2,
      prefix: '$',
      suffix: 'M',
      decimals: 1,
      label: 'Revenue from organic',
    },
    relatedReading: {
      title: 'Zero-Click Case Study',
      href: '/seo-resources/blog/zero-click-search-rankings-traffic-decoupled',
    },
  },
] as const;

const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1];

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, ease: EASE_OUT },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE_OUT } },
};

export default function CaseStudies() {
  return (
    <section
      id="proof"
      className="py-24 px-6"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.12)' }}
      aria-labelledby="proof-heading"
    >
      <motion.div
        className="mx-auto max-w-5xl"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        <motion.h2
          id="proof-heading"
          className="font-serif text-4xl md:text-6xl"
          style={{ color: 'var(--color-white)' }}
          variants={itemVariants}
        >
          Proof
        </motion.h2>

        <div className="mt-16 grid gap-4 md:grid-cols-3 md:gap-6">
          {STUDIES.map((study) => (
            <motion.div
              key={study.headline}
              className="group/study flex flex-col rounded-sm px-6 py-10"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.08)' }}
              variants={itemVariants}
            >
              <p
                className="text-xs font-medium uppercase tracking-[0.2em]"
                style={{ color: 'var(--color-accent)' }}
              >
                {study.category}
              </p>

              <div className="mt-6">
                <CountUp
                  target={study.metric.target}
                  prefix={'prefix' in study.metric ? study.metric.prefix : undefined}
                  suffix={'suffix' in study.metric ? study.metric.suffix : undefined}
                  decimals={
                    'decimals' in study.metric ? study.metric.decimals : undefined
                  }
                  className="text-5xl font-bold md:text-6xl"
                  style={{ color: 'var(--color-accent)' }}
                />
                <p
                  className="mt-1 text-xs font-medium uppercase tracking-widest"
                  style={{ color: 'var(--color-muted)' }}
                >
                  {study.metric.label}
                </p>
              </div>

              <p
                className="font-serif mt-6 text-lg leading-snug md:text-xl"
                style={{ color: 'var(--color-white)' }}
              >
                {study.headline}
              </p>

              <a
                href={study.relatedReading.href}
                className="group mt-auto inline-flex items-center gap-1 pt-6 text-sm transition-opacity duration-150 ease-out hover:opacity-70"
                style={{ color: 'var(--color-muted)' }}
              >
                <span className="underline decoration-white/20 underline-offset-2">
                  {study.relatedReading.title}
                </span>
                <span className="inline-block transition-transform duration-150 ease-out group-hover:translate-x-1">
                  →
                </span>
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
