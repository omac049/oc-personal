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
                  <span style={{ color: 'var(--color-accent)' }} aria-hidden="true">
                    —
                  </span>
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
