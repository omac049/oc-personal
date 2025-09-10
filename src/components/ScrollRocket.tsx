'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function ScrollRocket() {
  const [mounted, setMounted] = useState(false);
  const [progress, setProgress] = useState(0);
  const { scrollYProgress } = useScroll();

  // Smooth scroll-based transforms
  const rocketY = useTransform(scrollYProgress, [0, 1], ['10vh', '80vh']);
  const rocketRotation = useTransform(scrollYProgress, [0, 1], [0, 360]); // One smooth rotation
  const trailOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  
  // Subtle drift for natural movement
  const driftX = useTransform(scrollYProgress, [0, 0.5, 1], [0, 3, -2]);

  useEffect(() => {
    setMounted(true);
    
    const unsubscribe = scrollYProgress.onChange((value) => {
      setProgress(Math.round(value * 100));
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  if (!mounted) return null;

  return (
    <motion.div
      className="fixed right-8 z-50 pointer-events-none"
      style={{ 
        top: rocketY,
        x: driftX,
        opacity: trailOpacity
      }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 1.5, type: "spring", bounce: 0.2 }}
    >
      {/* Streamlined Exhaust Trail */}
      <motion.div
        className="absolute -top-8 left-1/2 transform -translate-x-1/2"
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 32, opacity: 1 }}
        transition={{ duration: 0.8, delay: 2, ease: "easeOut" }}
      >
        <motion.div
          className="w-1.5 bg-gradient-to-b from-blue-400 via-purple-400 to-transparent rounded-full"
          style={{ height: '100%' }}
          animate={{
            scaleX: [1, 1.3, 0.8, 1],
            opacity: [0.8, 1, 0.6, 0.8]
          }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            ease: 'easeInOut' 
          }}
        />
      </motion.div>

      {/* Modern Minimalist Rocket */}
      <motion.div
        className="relative w-10 h-12 flex items-center justify-center"
        style={{ 
          rotate: rocketRotation
        }}
        whileHover={{ 
          scale: 1.1,
          transition: { duration: 0.3, type: "spring", bounce: 0.3 }
        }}
      >
        {/* Clean SVG Rocket Design */}
        <motion.svg
          width="40"
          height="48"
          viewBox="0 0 40 48"
          className="relative z-10"
        >
          <defs>
            {/* Simplified gradients */}
            <linearGradient id="rocketBody" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#1e40af" />
            </linearGradient>
            <linearGradient id="rocketNose" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f8fafc" />
              <stop offset="100%" stopColor="#e2e8f0" />
            </linearGradient>
            <linearGradient id="rocketWindow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#0891b2" />
            </linearGradient>
          </defs>
          
          {/* Main Body */}
          <motion.rect
            x="12"
            y="12"
            width="16"
            height="28"
            rx="8"
            fill="url(#rocketBody)"
            stroke="#1e293b"
            strokeWidth="1"
            animate={{
              filter: [
                'drop-shadow(0 0 6px rgba(59, 130, 246, 0.4))',
                'drop-shadow(0 0 10px rgba(139, 92, 246, 0.6))',
                'drop-shadow(0 0 6px rgba(59, 130, 246, 0.4))'
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />
          
          {/* Nose Cone */}
          <motion.path
            d="M20 2 L12 12 L28 12 Z"
            fill="url(#rocketNose)"
            stroke="#94a3b8"
            strokeWidth="0.5"
          />
          
          {/* Window */}
          <motion.circle
            cx="20"
            cy="20"
            r="3"
            fill="url(#rocketWindow)"
            stroke="#0891b2"
            strokeWidth="1"
            animate={{
              opacity: [0.8, 1, 0.8]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
          
          {/* Window Reflection */}
          <motion.ellipse
            cx="19"
            cy="19"
            rx="1"
            ry="1.5"
            fill="#ffffff"
            opacity="0.6"
          />
          
          {/* Side Fins */}
          <motion.path
            d="M12 32 L8 40 L12 36 Z"
            fill="#ef4444"
            stroke="#dc2626"
            strokeWidth="0.5"
          />
          <motion.path
            d="M28 32 L32 40 L28 36 Z"
            fill="#ef4444"
            stroke="#dc2626"
            strokeWidth="0.5"
          />
          
          {/* Engine */}
          <motion.ellipse
            cx="20"
            cy="40"
            rx="6"
            ry="2"
            fill="#374151"
            stroke="#111827"
            strokeWidth="1"
          />
        </motion.svg>
        
        {/* Subtle Glow */}
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{
            boxShadow: [
              '0 0 15px rgba(59, 130, 246, 0.3)',
              '0 0 25px rgba(139, 92, 246, 0.4)',
              '0 0 15px rgba(59, 130, 246, 0.3)'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      {/* Simplified Exhaust Particles */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{ 
            left: `${48 + (i % 2 === 0 ? -1 : 1) * 2}%`,
            top: '90%',
            background: i % 2 === 0 ? 
              'linear-gradient(45deg, #3b82f6, #06b6d4)' : 
              'linear-gradient(45deg, #8b5cf6, #ec4899)'
          }}
          animate={{
            y: [0, 15 + i * 2, 30 + i * 3],
            x: [(i % 2 === 0 ? -1 : 1) * 2, (i % 2 === 0 ? 1 : -1) * 3],
            opacity: [1, 0.5, 0],
            scale: [1, 0.6, 0.2]
          }}
          transition={{
            duration: 1.2 + i * 0.1,
            repeat: Infinity,
            delay: i * 0.15,
            ease: 'easeOut'
          }}
        />
      ))}
      
      {/* Clean Progress Indicator */}
      <motion.div
        className="absolute -left-16 top-1/2 transform -translate-y-1/2"
        initial={{ opacity: 0, x: 10, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.6, delay: 2.5, type: "spring", bounce: 0.2 }}
      >
        <motion.div
          className="relative bg-slate-900/90 backdrop-blur-md rounded-lg px-3 py-1.5 border border-slate-700/50"
          animate={{ 
            borderColor: [
              'rgba(71, 85, 105, 0.5)',
              'rgba(59, 130, 246, 0.3)',
              'rgba(71, 85, 105, 0.5)'
            ]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          whileHover={{
            scale: 1.05,
            backgroundColor: 'rgba(15, 23, 42, 0.95)'
          }}
        >
          <motion.span 
            className="text-white text-sm font-mono font-medium"
            animate={{
              color: [
                '#ffffff',
                '#60a5fa',
                '#ffffff'
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {progress}%
          </motion.span>
          
          {/* Progress bar */}
          <motion.div
            className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
            style={{ 
              width: `${progress}%`
            }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
