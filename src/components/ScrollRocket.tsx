'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function ScrollRocket() {
  const [mounted, setMounted] = useState(false);
  const [progress, setProgress] = useState(0);
  const { scrollYProgress } = useScroll();

  // Map scroll progress to rocket position (top to bottom of viewport)
  const rocketY = useTransform(scrollYProgress, [0, 1], ['10vh', '85vh']);
  const rocketRotation = useTransform(scrollYProgress, [0, 1], [0, 720]); // Two full rotations
  const trailOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  
  // Subtle wobble effect for realistic flight
  const wobbleX = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 2, -1, 1, 0]);
  const wobbleY = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [0, -1, 1, -0.5, 0.5, 0]);

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
        x: wobbleX,
        y: wobbleY,
        opacity: trailOpacity
      }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, delay: 2, type: "spring", bounce: 0.3 }}
    >
      {/* Enhanced Rocket Trail */}
      <motion.div
        className="absolute -top-12 left-1/2 transform -translate-x-1/2"
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 48, opacity: 1 }}
        transition={{ duration: 1, delay: 2.5, ease: "easeOut" }}
      >
        {/* Main exhaust trail */}
        <motion.div
          className="w-2 bg-gradient-to-b from-blue-400 via-orange-400 to-red-500 rounded-full relative"
          style={{ height: '100%' }}
          animate={{
            boxShadow: [
              '0 0 15px rgba(59, 130, 246, 0.8), 0 0 30px rgba(251, 146, 60, 0.6)',
              '0 0 25px rgba(139, 92, 246, 0.9), 0 0 40px rgba(239, 68, 68, 0.7)',
              '0 0 15px rgba(6, 182, 212, 0.8), 0 0 30px rgba(251, 146, 60, 0.6)'
            ],
            scaleX: [1, 1.2, 0.8, 1],
            scaleY: [1, 1.1, 1.05, 1]
          }}
          transition={{ 
            boxShadow: { duration: 1.2, repeat: Infinity, ease: 'easeInOut' },
            scaleX: { duration: 0.8, repeat: Infinity, ease: 'easeInOut' },
            scaleY: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' }
          }}
        >
          {/* Inner core flame */}
          <motion.div
            className="absolute inset-0 w-1 bg-gradient-to-b from-white via-cyan-300 to-orange-300 rounded-full left-1/2 transform -translate-x-1/2"
            animate={{
              opacity: [0.8, 1, 0.6, 1],
              scaleY: [1, 1.2, 0.9, 1]
            }}
            transition={{ duration: 0.6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>

      {/* Modern Custom Rocket */}
      <motion.div
        className="relative w-12 h-16 flex items-center justify-center"
        style={{ 
          rotate: rocketRotation
        }}
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          scale: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
        }}
        whileHover={{ 
          scale: 1.15,
          transition: { duration: 0.3, type: "spring", bounce: 0.4 }
        }}
      >
        {/* Custom SVG Rocket */}
        <motion.svg
          width="48"
          height="64"
          viewBox="0 0 48 64"
          className="relative z-10"
          animate={{
            filter: [
              'drop-shadow(0 0 10px rgba(59, 130, 246, 0.6))',
              'drop-shadow(0 0 20px rgba(139, 92, 246, 0.8))',
              'drop-shadow(0 0 15px rgba(6, 182, 212, 0.7))',
              'drop-shadow(0 0 10px rgba(59, 130, 246, 0.6))'
            ]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          {/* Rocket Body Gradient */}
          <defs>
            <linearGradient id="rocketGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
            <linearGradient id="windowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#67e8f9" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
            <linearGradient id="finGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ef4444" />
              <stop offset="100%" stopColor="#f97316" />
            </linearGradient>
          </defs>
          
          {/* Main Rocket Body */}
          <motion.path
            d="M24 2 C30 2, 36 8, 36 14 L36 46 C36 50, 32 54, 28 54 L20 54 C16 54, 12 50, 12 46 L12 14 C12 8, 18 2, 24 2 Z"
            fill="url(#rocketGradient)"
            stroke="#1e293b"
            strokeWidth="1"
            animate={{
              stroke: [
                '#1e293b',
                '#3b82f6',
                '#8b5cf6',
                '#1e293b'
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          
          {/* Rocket Nose Cone */}
          <motion.path
            d="M24 2 C30 2, 36 8, 36 14 L12 14 C12 8, 18 2, 24 2 Z"
            fill="#f8fafc"
            stroke="#e2e8f0"
            strokeWidth="0.5"
            animate={{
              fill: ['#f8fafc', '#e0f2fe', '#f8fafc']
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          
          {/* Rocket Window */}
          <motion.circle
            cx="24"
            cy="20"
            r="4"
            fill="url(#windowGradient)"
            stroke="#0891b2"
            strokeWidth="1"
            animate={{
              fill: [
                'url(#windowGradient)',
                '#67e8f9',
                '#22d3ee',
                'url(#windowGradient)'
              ]
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          
          {/* Window Reflection */}
          <motion.ellipse
            cx="22"
            cy="18"
            rx="1.5"
            ry="2"
            fill="#ffffff"
            opacity="0.8"
            animate={{
              opacity: [0.8, 1, 0.6, 0.8]
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          
          {/* Side Details */}
          <motion.rect
            x="8"
            y="30"
            width="4"
            height="2"
            rx="1"
            fill="#64748b"
            animate={{
              fill: ['#64748b', '#3b82f6', '#64748b']
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          />
          <motion.rect
            x="36"
            y="30"
            width="4"
            height="2"
            rx="1"
            fill="#64748b"
            animate={{
              fill: ['#64748b', '#3b82f6', '#64748b']
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          />
          
          {/* Rocket Fins */}
          <motion.path
            d="M12 46 L8 54 L12 50 Z"
            fill="url(#finGradient)"
            stroke="#dc2626"
            strokeWidth="0.5"
            animate={{
              fill: [
                'url(#finGradient)',
                '#f97316',
                '#ef4444',
                'url(#finGradient)'
              ]
            }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
          />
          <motion.path
            d="M36 46 L40 54 L36 50 Z"
            fill="url(#finGradient)"
            stroke="#dc2626"
            strokeWidth="0.5"
            animate={{
              fill: [
                'url(#finGradient)',
                '#f97316',
                '#ef4444',
                'url(#finGradient)'
              ]
            }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
          />
          
          {/* Engine Nozzle */}
          <motion.ellipse
            cx="24"
            cy="54"
            rx="8"
            ry="3"
            fill="#374151"
            stroke="#111827"
            strokeWidth="1"
            animate={{
              fill: ['#374151', '#4b5563', '#374151']
            }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </motion.svg>
        
        {/* Rocket Glow Effect */}
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{
            boxShadow: [
              '0 0 20px rgba(59, 130, 246, 0.4)',
              '0 0 40px rgba(139, 92, 246, 0.6)',
              '0 0 30px rgba(6, 182, 212, 0.5)',
              '0 0 20px rgba(59, 130, 246, 0.4)'
            ]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      {/* Enhanced Exhaust Particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full"
          style={{ 
            left: `${48 + (i % 2 === 0 ? -1 : 1) * (2 + i)}%`,
            top: '100%',
            background: i % 3 === 0 ? 
              'linear-gradient(45deg, #3b82f6, #06b6d4)' : 
              i % 3 === 1 ? 
              'linear-gradient(45deg, #f97316, #ef4444)' : 
              'linear-gradient(45deg, #8b5cf6, #ec4899)'
          }}
          animate={{
            y: [0, 20 + i * 3, 40 + i * 5],
            x: [(i % 2 === 0 ? -1 : 1) * Math.random() * 4, (i % 2 === 0 ? 1 : -1) * (2 + Math.random() * 3)],
            opacity: [1, 0.7, 0],
            scale: [1, 0.8, 0.2]
          }}
          transition={{
            duration: 1 + i * 0.1,
            repeat: Infinity,
            delay: i * 0.1,
            ease: 'easeOut'
          }}
        />
      ))}
      
      {/* Thrust Glow Effect */}
      <motion.div
        className="absolute top-full left-1/2 transform -translate-x-1/2 w-8 h-4 rounded-full"
        style={{
          background: 'radial-gradient(ellipse, rgba(59, 130, 246, 0.6) 0%, rgba(251, 146, 60, 0.4) 50%, transparent 100%)'
        }}
        animate={{
          scale: [1, 1.3, 0.9, 1.2, 1],
          opacity: [0.8, 1, 0.6, 0.9, 0.8]
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      
      {/* Secondary Particle Burst */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`burst-${i}`}
          className="absolute w-0.5 h-0.5 bg-white rounded-full"
          style={{ 
            left: `${47 + i * 2}%`,
            top: '95%'
          }}
          animate={{
            y: [0, 10 + i * 2, 25 + i * 4],
            x: [(i - 2) * 0.5, (i - 2) * 1.5],
            opacity: [0.9, 0.4, 0],
            scale: [0.8, 1.2, 0]
          }}
          transition={{
            duration: 0.6 + i * 0.05,
            repeat: Infinity,
            delay: i * 0.08,
            ease: 'easeOut'
          }}
        />
      ))}

      {/* Enhanced Progress Indicator */}
      <motion.div
        className="absolute -left-20 top-1/2 transform -translate-y-1/2"
        initial={{ opacity: 0, x: 15, scale: 0.8 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 3, type: "spring", bounce: 0.3 }}
      >
        <motion.div
          className="relative bg-slate-900/80 backdrop-blur-md rounded-xl px-4 py-2 border border-blue-500/30"
          animate={{ 
            borderColor: [
              'rgba(59, 130, 246, 0.3)',
              'rgba(139, 92, 246, 0.5)',
              'rgba(6, 182, 212, 0.4)',
              'rgba(59, 130, 246, 0.3)'
            ],
            boxShadow: [
              '0 4px 12px rgba(59, 130, 246, 0.2)',
              '0 6px 16px rgba(139, 92, 246, 0.3)',
              '0 4px 12px rgba(6, 182, 212, 0.25)',
              '0 4px 12px rgba(59, 130, 246, 0.2)'
            ]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          whileHover={{
            scale: 1.05,
            boxShadow: '0 8px 20px rgba(59, 130, 246, 0.4)'
          }}
        >
          <motion.span 
            className="text-white text-sm font-mono font-medium"
            animate={{
              color: [
                '#ffffff',
                '#3b82f6',
                '#8b5cf6',
                '#06b6d4',
                '#ffffff'
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            {progress}%
          </motion.span>
          
          {/* Progress indicator glow */}
          <motion.div
            className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0"
            animate={{
              opacity: [0, 0.5, 0]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          
          {/* Small progress dots */}
          <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 flex space-x-0.5">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1 h-1 bg-blue-400 rounded-full"
                animate={{
                  scale: [0.5, 1, 0.5],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
