'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ_DATA = [
  {
    question: 'What is AI-powered SEO and how does it work?',
    answer:
      'AI-powered SEO combines traditional search engine optimization with artificial intelligence technologies like ChatGPT, Claude, and machine learning algorithms. It involves using AI for keyword research, content optimization, technical audits, and adapting strategies for AI Overviews and LLM-generated responses. The goal is ranking in both traditional results and AI-generated answers.',
  },
  {
    question: 'How do you optimize content for Large Language Models?',
    answer:
      'LLM optimization involves structuring content for AI understanding — natural language patterns, comprehensive schema markup, conversational content formats, and entity-first information architecture. I focus on making content that performs well in AI-powered search while maintaining clarity for human readers.',
  },
  {
    question: 'How long does it take to see SEO results?',
    answer:
      'SEO results typically begin within 3–6 months, with significant improvements at 6–12 months. AI-optimized strategies can accelerate content and technical wins, but organic growth requires sustained effort. I provide monthly reports tracking progress against specific business metrics.',
  },
  {
    question: 'Do you work with businesses outside Phoenix?',
    answer:
      'Yes. While I’m based in Phoenix, Arizona, most of my clients are remote. SEO and AI search strategy work is fully remote-friendly. I work with e-commerce, SaaS, healthcare, and finance brands across the US.',
  },
  {
    question: 'What does an engagement look like?',
    answer:
      'Engagements typically start with a comprehensive audit, followed by a prioritized strategy and ongoing execution. I work on monthly retainers or project-based scopes depending on the need. Every engagement includes regular reporting tied to revenue, not just rankings.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      id="faq"
      className="py-24"
      style={{ backgroundColor: 'var(--color-black)' }}
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-3xl px-6">
        <motion.h2
          id="faq-heading"
          className="font-serif mb-12 text-3xl md:text-5xl"
          style={{ color: 'var(--color-white)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Frequently asked questions
        </motion.h2>

        <div role="list">
          {FAQ_DATA.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                role="listitem"
                className="border-b"
                style={{ borderColor: 'var(--color-border)' }}
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  className="flex w-full items-center justify-between py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span
                    className="font-serif pr-4 text-lg md:text-2xl"
                    style={{ color: 'var(--color-white)' }}
                  >
                    {item.question}
                  </span>
                  <span
                    className="shrink-0 text-xl transition-transform duration-300"
                    style={{
                      color: 'var(--color-accent)',
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                    }}
                  >
                    +
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p
                        className="pb-6 text-base leading-relaxed"
                        style={{ color: 'var(--color-muted)' }}
                      >
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
