'use client';

import { motion } from 'framer-motion';
import SignalGrid from './SignalGrid';

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, delay, ease: 'easeOut' as const },
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
      style={{ backgroundColor: 'var(--color-black)' }}
      aria-labelledby="hero-heading"
    >
      <SignalGrid />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <motion.p
          className="mb-6 text-sm font-medium uppercase tracking-[0.2em]"
          style={{ color: 'var(--color-accent)' }}
          {...fadeUp(0.2)}
        >
          Digital Strategist
        </motion.p>

        <h1 id="hero-heading">
          <motion.span
            className="font-serif block text-5xl leading-tight md:text-7xl lg:text-8xl"
            style={{ color: 'var(--color-white)' }}
            {...fadeUp(0.4)}
          >
            I make brands
          </motion.span>
          <motion.span
            className="font-serif block text-5xl leading-tight md:text-7xl lg:text-8xl"
            style={{ color: 'var(--color-white)' }}
            {...fadeUp(0.5)}
          >
            impossible to ignore
            <span style={{ color: 'var(--color-accent)' }}>.</span>
          </motion.span>
        </h1>

        <motion.p
          className="mx-auto mt-6 max-w-lg text-lg"
          style={{ color: 'var(--color-muted)' }}
          {...fadeUp(0.6)}
        >
          SEO, AI search, and growth strategy for brands that want to lead, not follow.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          {...fadeUp(0.8)}
        >
          <a
            href="#proof"
            className="inline-flex items-center rounded-sm px-8 py-3 text-sm font-semibold uppercase tracking-wider transition-colors duration-200 hover:brightness-110"
            style={{
              backgroundColor: 'var(--color-accent)',
              color: 'var(--color-black)',
            }}
          >
            See the proof
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-sm border px-8 py-3 text-sm font-semibold uppercase tracking-wider transition-colors duration-200 hover:bg-white/5"
            style={{
              borderColor: 'var(--color-white)',
              color: 'var(--color-white)',
            }}
          >
            Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
