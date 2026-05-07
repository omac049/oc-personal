'use client';

import { motion } from 'framer-motion';
import CountUp from './CountUp';

const STUDIES = [
  {
    category: 'E-Commerce \u00b7 SEO',
    headline: '312% organic traffic growth in 6 months',
    summary:
      'A mid-market e-commerce brand was stuck on page two for their highest-value keywords. After a technical overhaul, content restructure, and internal linking strategy, organic sessions tripled and revenue from search doubled.',
    metric: { value: 312, suffix: '%', label: 'Organic Traffic Growth' },
  },
  {
    category: 'SaaS \u00b7 AI Search',
    headline: 'From invisible to cited across 4 AI platforms',
    summary:
      'A B2B SaaS company had zero presence in AI-generated answers. Through structured data, authority content, and LLM-readability optimizations, they\u2019re now referenced by ChatGPT, Perplexity, Gemini, and Google AI Overviews.',
    metric: { value: 4, suffix: '', label: 'AI Platforms Citing Brand' },
  },
  {
    category: 'Healthcare · AI Search',
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
                decimals={study.metric.value % 1 !== 0 ? 1 : 0}
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
