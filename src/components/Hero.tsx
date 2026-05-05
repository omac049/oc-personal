'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import AlgorithmBackground from './AlgorithmBackground';

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section 
      id="hero"
      ref={containerRef}
      className="min-h-screen flex items-center justify-center bg-slate-900 text-white relative overflow-hidden"
      suppressHydrationWarning
    >
      <AlgorithmBackground opacity="opacity-10" />

      <div className="relative z-30 text-center max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 sm:mb-10"
        >
          <div className="w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 mx-auto rounded-full bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 p-1 shadow-2xl">
            <div className="w-full h-full rounded-full overflow-hidden bg-slate-900">
              <Image
                src="/omar.jpeg"
                alt="Omar Corral - SEO Specialist & AI Marketing Expert"
                width={192}
                height={192}
                className="w-full h-full object-cover object-center"
                priority
              />
            </div>
          </div>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-4 sm:mb-6 text-white"
        >
          Omar Corral
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg sm:text-xl md:text-2xl font-light text-slate-300 mb-6 sm:mb-8"
        >
          Helping brands rank in search — and in AI
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-base sm:text-lg text-slate-400 mb-10 sm:mb-14 max-w-xl mx-auto leading-relaxed"
        >
          10+ years of SEO expertise, now enhanced with tools like ChatGPT and Claude to drive organic growth that lasts.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-full font-semibold shadow-xl hover:shadow-blue-500/25 transition-all duration-300 hover:-translate-y-0.5"
          >
            Get in Touch
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-white/40 rounded-full mt-2"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}
