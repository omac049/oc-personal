'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const PROCESS = [
  {
    step: '01',
    title: 'AI Visibility Audit',
    description:
      'I test how your brand is currently represented across ChatGPT, Perplexity, Gemini, and Google AI Overviews. Where are you cited? Where are competitors winning? Where is there misinformation?',
  },
  {
    step: '02',
    title: 'Entity & Schema Strategy',
    description:
      'Build a structured data layer that makes your brand legible to LLMs. Entity disambiguation, knowledge graph connections, and comprehensive schema markup across your key pages.',
  },
  {
    step: '03',
    title: 'Content Restructuring',
    description:
      'Reformat existing content for LLM consumption — clear headers, concise answers, authoritative sourcing, and citation-ready formatting that LLMs prefer to reference.',
  },
  {
    step: '04',
    title: 'Monitoring & Iteration',
    description:
      'Ongoing tracking of how your brand appears in AI-generated answers. Regular testing, prompt monitoring, and strategy adjustments as platforms evolve.',
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
      <div className="pt-32 pb-16 px-6">
        <div className="mx-auto max-w-4xl">
          <motion.p className="text-sm font-medium uppercase tracking-[0.2em]" style={{ color: 'var(--color-accent)' }} {...fadeIn}>
            Service
          </motion.p>
          <motion.h1 className="font-serif mt-4 text-4xl md:text-6xl" style={{ color: 'var(--color-white)' }} {...fadeIn}>
            AI Search Strategy
          </motion.h1>
          <motion.p className="mt-4 max-w-xl text-lg" style={{ color: 'var(--color-muted)' }} {...fadeIn}>
            Get your brand cited by the AI platforms that are reshaping how people find answers.
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
