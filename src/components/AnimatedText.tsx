'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  stagger?: number;
  children?: ReactNode;
}

export default function AnimatedText({ 
  text, 
  className = '', 
  delay = 0, 
  as: Component = 'p',
  stagger = 0.03,
  children 
}: AnimatedTextProps) {
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      <Component className={className}>
        {words.map((word, index) => (
          <motion.span
            variants={child}
            key={index}
            className="inline-block mr-2"
          >
            {word}
          </motion.span>
        ))}
        {children}
      </Component>
    </motion.div>
  );
}
