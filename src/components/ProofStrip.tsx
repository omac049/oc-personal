'use client';

import { motion } from 'framer-motion';
import CountUp from './CountUp';

const METRICS = [
  { value: 150, suffix: '+', label: 'Clients' },
  { value: 12, suffix: '+', label: 'Years' },
  { value: 2, prefix: '$', suffix: 'M+', label: 'Revenue Driven' },
  { value: 300, suffix: '%', label: 'Avg. Traffic Growth' },
];

export default function ProofStrip() {
  return (
    <section
      id="proof"
      className="py-20"
      style={{ backgroundColor: 'var(--color-black)' }}
      aria-label="Key results"
    >
      <motion.div
        className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-10 px-6 md:flex-row md:gap-0 md:divide-x"
        style={{ borderColor: 'var(--color-border)' }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        {METRICS.map((metric) => (
          <div
            key={metric.label}
            className="flex flex-col items-center px-10"
          >
            <CountUp
              target={metric.value}
              prefix={metric.prefix}
              suffix={metric.suffix}
              className="text-5xl font-bold md:text-6xl"
              style={{ color: 'var(--color-accent)' }}
            />
            <span
              className="mt-2 text-xs font-medium uppercase tracking-widest"
              style={{ color: 'var(--color-muted)' }}
            >
              {metric.label}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
