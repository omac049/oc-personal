'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1];

const FAQ_DATA = [
  {
    question: 'What does AI mean for SEO — and why should I care?',
    answer:
      "AI is reshaping how people find information — from Google's AI Overviews to ChatGPT and Perplexity. After 12 years in search, I see this as the most significant shift since mobile. Brands that adapt their content for both traditional search and AI-generated answers will compound their visibility. Those that don't will lose ground quietly.",
  },
  {
    question: 'How do you approach AI search optimization differently?',
    answer:
      'I study how large language models retrieve and cite content — not just how Google ranks pages. That means structuring content for AI extraction, strengthening E-E-A-T signals, implementing schema markup that LLMs can parse, and monitoring how AI platforms represent your brand. I publish my frameworks openly in the resource center so you can see the thinking behind the strategy.',
  },
  {
    question: 'How long does it take to see SEO results?',
    answer:
      'SEO results typically begin within 3–6 months, with significant improvements at 6–12 months. AI-optimized strategies can accelerate content and technical wins, but organic growth requires sustained effort. I provide monthly reports tracking progress against specific business metrics.',
  },
  {
    question: 'Do you work with businesses outside Phoenix?',
    answer:
      "Yes. While I'm based in Phoenix, Arizona, most of my clients are remote. SEO and AI search strategy work is fully remote-friendly. I work with e-commerce, SaaS, healthcare, and finance brands across the US.",
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
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.12)' }}
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
          transition={{ duration: 0.5, ease: EASE_OUT }}
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
                className="group/faq border-b"
                style={{ borderColor: 'var(--color-border)' }}
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  className="flex w-full items-center justify-between py-6 text-left transition-transform duration-150 ease-out active:scale-[0.995]"
                  aria-expanded={isOpen}
                >
                  <span
                    className="font-serif pr-4 text-lg transition-colors duration-150 md:text-2xl"
                    style={{ color: isOpen ? 'var(--color-white)' : 'var(--color-muted)' }}
                  >
                    {item.question}
                  </span>
                  <span
                    className="shrink-0 text-xl transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)]"
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
                      initial={{ height: 0, opacity: 0, filter: 'blur(4px)' }}
                      animate={{ height: 'auto', opacity: 1, filter: 'blur(0px)' }}
                      exit={{ height: 0, opacity: 0, filter: 'blur(4px)' }}
                      transition={{ duration: 0.25, ease: EASE_OUT }}
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
