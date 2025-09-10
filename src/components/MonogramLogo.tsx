'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function MonogramLogo() {
  const [isHovered, setIsHovered] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const containerVariants = {
    initial: { 
      opacity: 0, 
      scale: 0.9, 
      y: -20
    },
    animate: { 
      opacity: 1, 
      scale: 1, 
      y: 0
    }
  };

  if (!mounted) return null;

  return (
    <motion.div
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
      variants={containerVariants}
      initial="initial"
      animate="animate"
      transition={{
        duration: 0.8,
        ease: [0.23, 1, 0.32, 1],
        delay: 0.2
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Modern Container */}
      <motion.div
        className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-2.5 flex items-center justify-center"
        whileHover={{
          scale: 1.05,
          backgroundColor: 'rgba(255, 255, 255, 0.08)',
          borderColor: 'rgba(59, 130, 246, 0.3)'
        }}
        transition={{ 
          duration: 0.4,
          ease: [0.23, 1, 0.32, 1]
        }}
      >
        {/* Subtle Background Gradient */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-20"
          animate={{
            background: [
              'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
              'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%)',
              'linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)'
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Modern Typography */}
        <div className="relative flex items-center space-x-0.5">
          <motion.span
            className="text-white font-medium text-xl tracking-tight"
            animate={isHovered ? {
              scale: [1, 1.1, 1],
              color: ['#ffffff', '#60a5fa', '#ffffff']
            } : {}}
            transition={{
              duration: 0.6,
              ease: [0.23, 1, 0.32, 1]
            }}
          >
            O
          </motion.span>
          
          <motion.div
            className="w-0.5 h-4 bg-gradient-to-b from-blue-400 to-purple-400 mx-1 rounded-full"
            animate={{
              scaleY: isHovered ? [1, 1.5, 1] : [1, 1.2, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: isHovered ? 0.6 : 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.span
            className="text-white font-medium text-xl tracking-tight"
            animate={isHovered ? {
              scale: [1, 1.1, 1],
              color: ['#ffffff', '#a78bfa', '#ffffff']
            } : {}}
            transition={{
              duration: 0.6,
              ease: [0.23, 1, 0.32, 1],
              delay: 0.1
            }}
          >
            C
          </motion.span>
        </div>

        {/* Minimal Accent Line */}
        <motion.div
          className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full"
          animate={{
            width: isHovered ? "100%" : "40%",
            opacity: isHovered ? 1 : 0.6
          }}
          transition={{
            duration: 0.4,
            ease: [0.23, 1, 0.32, 1]
          }}
        />

        {/* Corner Indicators */}
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 bg-blue-400 rounded-full ${
              i === 0 ? 'top-1 left-1' : 'bottom-1 right-1'
            }`}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>

      {/* Modern Tooltip */}
      <motion.div
        className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-slate-900/95 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-xl border border-white/10"
        initial={{ opacity: 0, y: 8, scale: 0.95 }}
        animate={{ 
          opacity: isHovered ? 1 : 0,
          y: isHovered ? 0 : 8,
          scale: isHovered ? 1 : 0.95
        }}
        transition={{ 
          duration: 0.3,
          ease: [0.23, 1, 0.32, 1]
        }}
        style={{ pointerEvents: 'none' }}
      >
        <span className="font-medium">Omar Corral</span>
      </motion.div>
    </motion.div>
  );
}
