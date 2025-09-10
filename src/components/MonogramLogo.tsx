'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function MonogramLogo() {
  const [isHovered, setIsHovered] = useState(false);

  const containerVariants = {
    initial: { 
      opacity: 0, 
      scale: 0.3, 
      y: -50,
      rotateY: -180 
    },
    animate: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      rotateY: 0
    }
  };

  const letterVariants = {
    initial: { 
      opacity: 0, 
      scale: 0.5, 
      rotateX: -90,
      y: 20 
    },
    animate: { 
      opacity: 1, 
      scale: 1, 
      rotateX: 0,
      y: 0
    }
  };

  const glowVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: {
      opacity: [0.3, 0.6, 0.3],
      scale: [0.8, 1.1, 0.8]
    }
  };

  return (
    <motion.div
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50"
      variants={containerVariants}
      initial="initial"
      animate="animate"
      transition={{
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.2
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated Background Glow */}
      <motion.div
        className="absolute inset-0 rounded-full"
        variants={glowVariants}
        animate="animate"
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(139, 92, 246, 0.2) 50%, transparent 70%)',
          filter: 'blur(8px)',
          transform: 'scale(1.5)'
        }}
      />

      {/* Main Monogram Container */}
      <motion.div
        className="relative w-16 h-16 bg-slate-800/80 backdrop-blur-lg border border-white/20 rounded-full flex items-center justify-center overflow-hidden"
        whileHover={{
          scale: 1.1,
          borderColor: 'rgba(59, 130, 246, 0.6)',
          boxShadow: '0 0 30px rgba(59, 130, 246, 0.4)'
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Rotating Background Pattern */}
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            rotate: 360
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="w-full h-full bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400" 
               style={{
                 background: 'conic-gradient(from 0deg, #3b82f6, #8b5cf6, #06b6d4, #3b82f6)'
               }}
          />
        </motion.div>

        {/* Letter O */}
        <motion.div
          className="relative z-10 flex items-center justify-center"
          variants={letterVariants}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          <motion.span
            className="text-white font-light text-lg tracking-wider"
            animate={isHovered ? {
              scale: [1, 1.2, 1],
              rotateY: [0, 180, 360],
              color: ['#ffffff', '#60a5fa', '#ffffff']
            } : {
              scale: [1, 1.05, 1],
            }}
            transition={isHovered ? {
              duration: 1.5,
              ease: "easeInOut"
            } : {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            O
          </motion.span>
        </motion.div>

        {/* Letter C */}
        <motion.div
          className="relative z-10 flex items-center justify-center -ml-1"
          variants={letterVariants}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.1
          }}
        >
          <motion.span
            className="text-white font-light text-lg tracking-wider"
            animate={isHovered ? {
              scale: [1, 1.2, 1],
              rotateY: [0, -180, -360],
              color: ['#ffffff', '#a78bfa', '#ffffff']
            } : {
              scale: [1, 1.05, 1],
            }}
            transition={isHovered ? {
              duration: 1.5,
              ease: "easeInOut",
              delay: 0.1
            } : {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.2
            }}
          >
            C
          </motion.span>
        </motion.div>

        {/* Pulse Ring Effect */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-white/30"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0, 0.5]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeOut"
          }}
        />

        {/* Sparkle Effects */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              top: `${20 + i * 20}%`,
              left: `${15 + i * 25}%`
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>

      {/* Floating Particles */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-60"
          style={{
            top: `${Math.random() * 60 + 10}%`,
            left: `${Math.random() * 60 + 20}%`
          }}
          animate={{
            y: [-10, -30, -10],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.6, 0, 0.6],
            scale: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Interactive Tooltip */}
      <motion.div
        className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-slate-900/90 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-lg whitespace-nowrap border border-blue-500/30"
        initial={{ opacity: 0, y: 10, scale: 0.8 }}
        animate={{ 
          opacity: isHovered ? 1 : 0,
          y: isHovered ? 0 : 10,
          scale: isHovered ? 1 : 0.8
        }}
        transition={{ duration: 0.3 }}
        style={{ pointerEvents: 'none' }}
      >
        Omar Corral
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-2 h-2 bg-slate-900 rotate-45 border-l border-t border-blue-500/30"></div>
      </motion.div>
    </motion.div>
  );
}
