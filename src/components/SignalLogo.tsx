'use client';

import { motion } from 'framer-motion';

interface SignalLogoProps {
  variant?: 'full' | 'mark';
  className?: string;
}

export default function SignalLogo({ variant = 'full', className = '' }: SignalLogoProps) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`} aria-label="Omar Corral">
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 shrink-0"
        aria-hidden="true"
      >
        {/* Base circle — the "O" */}
        <circle cx="20" cy="20" r="10" stroke="var(--color-accent)" strokeWidth="2.5" fill="none" />

        {/* Signal arc 1 — inner */}
        <motion.path
          d="M28 12 A12 12 0 0 1 28 28"
          stroke="var(--color-accent)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          initial={{ opacity: 0, pathLength: 0 }}
          animate={{ opacity: 1, pathLength: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
        />

        {/* Signal arc 2 — outer */}
        <motion.path
          d="M32 8 A16 16 0 0 1 32 32"
          stroke="var(--color-accent)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          initial={{ opacity: 0, pathLength: 0 }}
          animate={{ opacity: 1, pathLength: 1 }}
          transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
        />
      </svg>

      {variant === 'full' && (
        <span
          className="text-sm font-semibold tracking-[0.15em] uppercase"
          style={{ color: 'var(--color-white)' }}
        >
          OMAR CORRAL
        </span>
      )}
    </span>
  );
}
