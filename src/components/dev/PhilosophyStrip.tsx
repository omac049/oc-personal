'use client';

import { Fragment } from 'react';
import { motion } from 'framer-motion';

const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1];

const STATEMENTS = [
  'SEO Strategist',
  'AI Search Student',
  'Growth Advocate',
] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, ease: EASE_OUT },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE_OUT } },
};

export default function PhilosophyStrip() {
  return (
    <section
      id="philosophy"
      className="py-20"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.12)' }}
      aria-label="Identity"
    >
      <motion.div
        className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-4 px-6 md:flex-row md:gap-0"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {STATEMENTS.map((statement, index) => (
          <Fragment key={statement}>
            {index > 0 && (
              <motion.span
                className="text-sm font-medium md:px-8"
                style={{ color: 'var(--color-accent)' }}
                aria-hidden="true"
                variants={itemVariants}
              >
                ·
              </motion.span>
            )}
            <motion.span
              className="text-sm font-medium uppercase tracking-[0.25em]"
              style={{ color: 'var(--color-white)' }}
              variants={itemVariants}
            >
              {statement}
            </motion.span>
          </Fragment>
        ))}
      </motion.div>
    </section>
  );
}
