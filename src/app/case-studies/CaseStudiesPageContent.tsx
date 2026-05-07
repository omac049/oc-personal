'use client';

import { motion } from 'framer-motion';
import CountUp from '@/components/CountUp';

const CASE_STUDIES = [
  {
    category: 'E-Commerce · SEO',
    headline: '312% organic traffic growth in 6 months',
    problem:
      'A mid-market e-commerce brand was stuck on page two for their highest-value product keywords. Their technical debt was severe — thousands of duplicate pages, missing canonical tags, and a crawl budget that was mostly wasted on faceted navigation.',
    approach:
      'I ran a full technical audit, cleaned up indexation issues, restructured their category taxonomy, and built a content strategy targeting long-tail product queries with genuine buyer intent.',
    result:
      'Organic sessions tripled within six months. Revenue from organic search doubled, and their top 50 product keywords moved from page 2–3 to page 1 positions.',
    metric: { value: 312, suffix: '%', label: 'Organic Traffic Growth' },
  },
  {
    category: 'SaaS · AI Search',
    headline: 'From invisible to cited across 4 AI platforms',
    problem:
      'A B2B SaaS company had zero presence in AI-generated answers. When prospects asked ChatGPT or Perplexity about their category, competitors were cited and they were nowhere.',
    approach:
      'I implemented comprehensive schema markup, rewrote key landing pages for entity-first information architecture, and created authoritative FAQ content formatted for LLM consumption.',
    result:
      'Within four months, the brand was being cited by ChatGPT, Perplexity, Gemini, and appearing in Google AI Overviews for their core product queries.',
    metric: { value: 4, suffix: '', label: 'AI Platforms Citing Brand' },
  },
  {
    category: 'Healthcare · AI Search',
    headline: '$1.2M in attributed revenue from organic search',
    problem:
      'A regional healthcare provider was invisible in local search despite having 12 locations. Their Google Business Profiles were inconsistent, their site had no local content strategy, and they were losing patients to aggregator sites.',
    approach:
      'I built a localized content strategy for each service area, optimized all Google Business Profiles, implemented local schema markup, and set up a review management system.',
    result:
      'Organic became their top revenue channel within eight months. Local pack visibility went from 2 to 11 of their 12 locations appearing in the top 3.',
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
          <motion.h1 className="font-serif text-5xl md:text-7xl" style={{ color: 'var(--color-white)' }} {...fadeIn}>
            Case Studies
          </motion.h1>
          <motion.p className="mt-4 text-lg" style={{ color: 'var(--color-muted)' }} {...fadeIn}>
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
            <p className="text-xs font-medium uppercase tracking-[0.2em]" style={{ color: 'var(--color-accent)' }}>
              {study.category}
            </p>
            <h2 className="font-serif mt-4 text-3xl leading-snug md:text-5xl" style={{ color: 'var(--color-white)' }}>
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
                decimals={study.metric.value % 1 !== 0 ? 1 : 0}
                className="text-6xl font-bold md:text-7xl"
                style={{ color: 'var(--color-accent)' }}
              />
              <p className="mt-2 text-xs font-medium uppercase tracking-widest" style={{ color: 'var(--color-muted)' }}>
                {study.metric.label}
              </p>
            </div>
          </div>
        </motion.section>
      ))}
    </div>
  );
}
