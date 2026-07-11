'use client';

import { motion } from 'framer-motion';

const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1];

const LEARNING_ITEMS = [
  'How citation patterns differ between Perplexity and ChatGPT',
  'WebMCP adoption across enterprise sites',
  'Zero-click search impact on local healthcare',
] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, ease: EASE_OUT },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE_OUT } },
};

export default function WhatImLearning() {
  return (
    <section
      id="learning"
      className="border-t py-16"
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.12)',
        borderColor: 'var(--color-border)',
      }}
      aria-labelledby="learning-heading"
    >
      <motion.div
        className="mx-auto max-w-4xl px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.p
          id="learning-heading"
          className="text-xs font-medium uppercase tracking-[0.2em]"
          style={{ color: 'var(--color-accent)' }}
          variants={itemVariants}
        >
          What I&apos;m learning
        </motion.p>

        <ul className="mt-6 flex flex-col gap-4 md:flex-row md:gap-0">
          {LEARNING_ITEMS.map((item, i) => (
            <motion.li
              key={item}
              className={`flex-1 text-sm leading-relaxed md:text-base ${i < LEARNING_ITEMS.length - 1 ? 'md:border-r md:pr-8 md:mr-8' : ''}`}
              style={{
                color: 'var(--color-muted)',
                borderColor: 'var(--color-border)',
              }}
              variants={itemVariants}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
