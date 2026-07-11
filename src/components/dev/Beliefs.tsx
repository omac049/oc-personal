'use client';

import { motion } from 'framer-motion';

const BELIEFS = [
  {
    label: 'On search',
    text: 'The technology changes — ten blue links to AI Overviews — but the fundamentals still win.',
  },
  {
    label: 'On AI',
    text: 'AI search validates good SEO. Structured, authoritative content gets cited in both paradigms.',
  },
  {
    label: 'On sharing',
    text: 'The industry improves when practitioners share frameworks openly. That\u2019s why I publish everything.',
  },
  {
    label: 'On growth',
    text: 'Compound interest on doing the right things consistently. Revenue attribution, not vanity metrics.',
  },
] as const;

const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1];

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, ease: EASE_OUT },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE_OUT } },
};

export default function Beliefs() {
  return (
    <section
      id="about"
      className="py-24 px-6"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.12)' }}
      aria-labelledby="about-heading"
    >
      <motion.div
        className="mx-auto max-w-5xl"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          id="about-heading"
          className="font-serif text-4xl md:text-6xl"
          style={{ color: 'var(--color-white)' }}
          variants={itemVariants}
        >
          What I believe
        </motion.h2>

        <div className="mt-14 grid gap-px md:grid-cols-2" style={{ backgroundColor: 'var(--color-border)' }}>
          {BELIEFS.map((belief) => (
            <motion.div
              key={belief.label}
              className="group/belief px-6 py-8"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.18)' }}
              variants={itemVariants}
            >
              <p
                className="text-xs font-medium uppercase tracking-[0.2em]"
                style={{ color: 'var(--color-accent)' }}
              >
                {belief.label}
              </p>
              <p
                className="mt-3 text-base leading-relaxed transition-colors duration-200 ease-out group-hover/belief:text-white"
                style={{ color: 'var(--color-muted)' }}
              >
                {belief.text}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
