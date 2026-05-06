'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const PROCESS = [
  {
    step: '01',
    title: 'Discovery & Access',
    description:
      'I get access to your analytics, Search Console, and CMS. We discuss business goals, target markets, and what success looks like in terms you care about — revenue, leads, or market share.',
  },
  {
    step: '02',
    title: 'Technical Audit',
    description:
      'A deep crawl of your site covering indexation, Core Web Vitals, mobile experience, crawl budget, internal linking, and site architecture. Every issue is categorized by impact and effort.',
  },
  {
    step: '03',
    title: 'Content & Competitive Analysis',
    description:
      'I map your content against search demand and competitor coverage. This surfaces gaps where you’re losing traffic and opportunities where you can win with focused effort.',
  },
  {
    step: '04',
    title: 'Strategy & Roadmap',
    description:
      'You get a prioritized 90-day plan: quick wins first, then foundational improvements, then growth plays. Every recommendation ties to a measurable business outcome.',
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
      <div className="pt-32 pb-16 px-6">
        <div className="mx-auto max-w-4xl">
          <motion.p className="text-sm font-medium uppercase tracking-[0.2em]" style={{ color: 'var(--color-accent)' }} {...fadeIn}>
            Service
          </motion.p>
          <motion.h1 className="font-serif mt-4 text-4xl md:text-6xl" style={{ color: 'var(--color-white)' }} {...fadeIn}>
            SEO Audit & Strategy
          </motion.h1>
          <motion.p className="mt-4 max-w-xl text-lg" style={{ color: 'var(--color-muted)' }} {...fadeIn}>
            Find out exactly what’s holding your organic growth back — and get a clear plan to fix it.
          </motion.p>
        </div>
      </div>

      <div className="py-16 px-6">
        <div className="mx-auto max-w-4xl space-y-16">
          {PROCESS.map((item) => (
            <motion.div key={item.step} className="flex gap-6" {...fadeIn}>
              <span className="shrink-0 text-5xl font-bold" style={{ color: 'var(--color-accent)' }}>
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

      <motion.div className="border-t py-24 px-6 text-center" style={{ borderColor: 'var(--color-border)' }} {...fadeIn}>
        <h2 className="font-serif text-3xl md:text-5xl" style={{ color: 'var(--color-white)' }}>
          Ready to start?
        </h2>
        <Link
          href="/#contact"
          className="mt-8 inline-flex items-center rounded-sm px-8 py-3 text-sm font-semibold uppercase tracking-wider transition-colors duration-200 hover:brightness-110"
          style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-black)' }}
        >
          Get in touch
        </Link>
      </motion.div>
    </div>
  );
}
