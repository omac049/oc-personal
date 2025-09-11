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
      scale: 0.8, 
      y: -20
    },
    animate: { 
      opacity: 1, 
      scale: 1, 
      y: 0
    }
  };

  const letterVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 }
  };

  if (!mounted) return null;

  return (
    <motion.div
      className="fixed top-4 left-4 sm:top-6 sm:left-6 z-50 cursor-pointer"
      variants={containerVariants}
      initial="initial"
      animate="animate"
      transition={{
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.3
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      {/* Elegant Monogram Container - Responsive sizing */}
      <motion.div 
        className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center"
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Sophisticated Background Circle */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-slate-600"
          animate={isHovered ? {
            borderColor: ["#475569", "#1E40AF", "#475569"],
            scale: [1, 1.05, 1]
          } : {}}
          transition={{ 
            duration: 2, 
            ease: "easeInOut",
            repeat: isHovered ? Infinity : 0
          }}
        />

        {/* Inner Accent Ring */}
        <motion.div
          className="absolute inset-2 rounded-full border border-slate-700"
          animate={{
            opacity: isHovered ? [0.5, 1, 0.5] : [0.3, 0.5, 0.3],
            borderColor: isHovered ? "#FBBF24" : "#334155"
          }}
          transition={{ 
            duration: 3, 
            ease: "easeInOut",
            repeat: Infinity
          }}
        />

        {/* Premium Monogram SVG - Responsive sizing */}
        <motion.svg
          width="64"
          height="64"
          viewBox="0 0 80 80"
          className="relative z-10 w-16 h-16 sm:w-20 sm:h-20"
        >
          {/* Letter "O" - Elegant and Modern */}
          <motion.g transform="translate(12, 15)">
            {/* Outer O Shape */}
            <motion.path
              d="M 25 5 C 35 5, 43 13, 43 25 C 43 37, 35 45, 25 45 C 15 45, 7 37, 7 25 C 7 13, 15 5, 25 5 Z M 25 12 C 31 12, 36 17, 36 25 C 36 33, 31 38, 25 38 C 19 38, 14 33, 14 25 C 14 17, 19 12, 25 12 Z"
              fill="#1E40AF"
              variants={letterVariants}
              initial="initial"
              animate="animate"
              transition={{ 
                duration: 0.8, 
                delay: 0.8,
                ease: [0.22, 1, 0.36, 1]
              }}
            />
            
            {/* Inner O Accent */}
            <motion.circle
              cx="25"
              cy="25"
              r="8"
              fill="none"
              stroke="#2563EB"
              strokeWidth="1.5"
              animate={{
                opacity: isHovered ? [0.7, 1, 0.7] : [0.5, 0.7, 0.5],
                r: isHovered ? [8, 9, 8] : [8, 8.5, 8]
              }}
              transition={{ 
                duration: 2.5, 
                ease: "easeInOut",
                repeat: Infinity
              }}
            />

            {/* Modern Geometric Detail */}
            <motion.rect
              x="21"
              y="21"
              width="8"
              height="8"
              fill="#FBBF24"
              rx="1"
              animate={{
                opacity: isHovered ? [0.8, 1, 0.8] : [0.6, 0.8, 0.6],
                rotate: isHovered ? [0, 45, 0] : [0, 15, 0]
              }}
              transition={{ 
                duration: 4, 
                ease: "easeInOut",
                repeat: Infinity
              }}
              style={{ transformOrigin: "25px 25px" }}
            />
          </motion.g>

          {/* Letter "C" - Sophisticated Design */}
          <motion.g transform="translate(45, 15)">
            {/* Main C Shape */}
            <motion.path
              d="M 32 5 C 42 5, 48 11, 48 20 L 41 20 C 41 15, 37 12, 32 12 C 24 12, 18 18, 18 25 C 18 32, 24 38, 32 38 C 37 38, 41 35, 41 30 L 48 30 C 48 39, 42 45, 32 45 C 20 45, 11 36, 11 25 C 11 14, 20 5, 32 5 Z"
              fill="#FBBF24"
              variants={letterVariants}
              initial="initial"
              animate="animate"
              transition={{ 
                duration: 0.8, 
                delay: 1.0,
                ease: [0.22, 1, 0.36, 1]
              }}
            />
            
            {/* C Inner Accent Line */}
            <motion.path
              d="M 32 15 C 35 15, 37 17, 37 20 L 35 20 C 35 18, 33.5 17, 32 17 C 29 17, 26 20, 26 25 C 26 30, 29 33, 32 33 C 33.5 33, 35 32, 35 30 L 37 30 C 37 33, 35 35, 32 35 C 27 35, 24 31, 24 25 C 24 19, 27 15, 32 15 Z"
              fill="#1E40AF"
              animate={{
                opacity: isHovered ? [0.8, 1, 0.8] : [0.6, 0.8, 0.6]
              }}
              transition={{ 
                duration: 2, 
                ease: "easeInOut",
                repeat: Infinity
              }}
            />

            {/* Premium Growth Indicator */}
            <motion.polygon
              points="35,12 39,8 43,12 39,10 39,14"
              fill="#2563EB"
              animate={{
                opacity: isHovered ? [0.9, 1, 0.9] : [0.7, 0.9, 0.7],
                scale: isHovered ? [1, 1.1, 1] : [1, 1.05, 1],
                y: isHovered ? [0, -1, 0] : [0, -0.5, 0]
              }}
              transition={{ 
                duration: 3, 
                ease: "easeInOut",
                repeat: Infinity
              }}
              style={{ transformOrigin: "39px 11px" }}
            />
          </motion.g>

          {/* Elegant Connecting Element */}
          <motion.circle
            cx="40"
            cy="40"
            r="1.5"
            fill="#475569"
            animate={{
              opacity: isHovered ? [0.6, 1, 0.6] : [0.4, 0.6, 0.4],
              scale: isHovered ? [1, 1.3, 1] : [1, 1.1, 1],
              fill: isHovered ? ["#475569", "#FBBF24", "#475569"] : ["#475569", "#334155", "#475569"]
            }}
            transition={{ 
              duration: 2.5, 
              ease: "easeInOut",
              repeat: Infinity
            }}
          />
        </motion.svg>

        {/* Subtle Orbital Elements */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ 
            duration: 20, 
            ease: "linear",
            repeat: Infinity
          }}
        >
          <motion.div
            className="absolute top-2 left-1/2 w-1 h-1 bg-amber-400 rounded-full"
            animate={{
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 2, 
              ease: "easeInOut",
              repeat: Infinity
            }}
          />
        </motion.div>

        <motion.div
          className="absolute inset-0"
          animate={{ rotate: -360 }}
          transition={{ 
            duration: 25, 
            ease: "linear",
            repeat: Infinity
          }}
        >
          <motion.div
            className="absolute bottom-2 right-1/2 w-1 h-1 bg-blue-600 rounded-full"
            animate={{
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 2.5, 
              ease: "easeInOut",
              repeat: Infinity,
              delay: 1
            }}
          />
        </motion.div>
      </motion.div>

      {/* Refined Tooltip - Hidden on mobile, shown only on larger screens */}
      <motion.div
        className="hidden sm:block absolute -bottom-12 left-1/2 -translate-x-1/2 bg-slate-900 border border-slate-600 text-white text-sm px-4 py-2 rounded-xl shadow-xl whitespace-nowrap"
        initial={{ opacity: 0, y: 8, scale: 0.9 }}
        animate={{ 
          opacity: isHovered ? 1 : 0,
          y: isHovered ? 0 : 8,
          scale: isHovered ? 1 : 0.9
        }}
        transition={{ 
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1]
        }}
        style={{ pointerEvents: 'none' }}
      >
        <span className="font-medium">
          <span className="text-blue-700">Omar</span>
          <span className="text-amber-400 ml-1">Corral</span>
        </span>
        <span className="text-gray-400 text-xs block text-center mt-0.5">
          AI SEO Specialist
        </span>
      </motion.div>
    </motion.div>
  );
}
