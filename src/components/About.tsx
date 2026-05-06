'use client';

import { motion } from 'framer-motion';
import { aboutData } from '@/data/about';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4 },
};

export default function About() {
  return (
    <section
      id="about"
      className="py-24"
      style={{ backgroundColor: 'var(--color-surface)' }}
      aria-labelledby="about-heading"
    >
      <motion.div className="mx-auto max-w-4xl px-6" {...fadeIn}>
        <h2
          id="about-heading"
          className="font-serif text-4xl md:text-6xl"
          style={{ color: 'var(--color-white)' }}
        >
          {aboutData.name}
        </h2>

        <p
          className="mt-6 max-w-2xl text-lg leading-relaxed"
          style={{ color: 'var(--color-muted)' }}
        >
          {aboutData.bio}
        </p>

        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2">
          {aboutData.categories.map((cat) => (
            <span
              key={cat}
              className="text-xs font-medium uppercase tracking-widest"
              style={{ color: 'var(--color-muted)' }}
            >
              {cat}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
