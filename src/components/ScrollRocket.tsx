'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

export default function ScrollRocket() {
  const [mounted, setMounted] = useState(false);
  const [progress, setProgress] = useState(0);
  const { scrollYProgress } = useScroll();

  // Map scroll progress to rocket position (top to bottom of viewport)
  const rocketY = useTransform(scrollYProgress, [0, 1], ['10vh', '85vh']);
  const rocketRotation = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const trailOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

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
        opacity: trailOpacity
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 2 }}
    >
      {/* Rocket Trail */}
      <motion.div
        className="absolute -top-8 left-1/2 transform -translate-x-1/2"
        initial={{ height: 0 }}
        animate={{ height: 32 }}
        transition={{ duration: 0.8, delay: 2.5 }}
      >
        <motion.div
          className="w-1 bg-gradient-to-b from-orange-400 via-red-500 to-transparent rounded-full"
          style={{ height: '100%' }}
          animate={{
            boxShadow: [
              '0 0 10px rgba(251, 146, 60, 0.8)',
              '0 0 20px rgba(239, 68, 68, 0.6)',
              '0 0 10px rgba(251, 146, 60, 0.8)'
            ]
          }}
          transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      {/* Rocket Body */}
      <motion.div
        className="relative w-10 h-10 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-400 rounded-xl flex items-center justify-center shadow-2xl"
        style={{ 
          rotate: rocketRotation,
          boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)'
        }}
        animate={{
          scale: [1, 1.1, 1],
          boxShadow: [
            '0 0 20px rgba(59, 130, 246, 0.5)',
            '0 0 30px rgba(139, 92, 246, 0.7)',
            '0 0 20px rgba(6, 182, 212, 0.5)',
            '0 0 20px rgba(59, 130, 246, 0.5)'
          ]
        }}
        transition={{
          scale: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
          boxShadow: { duration: 3, repeat: Infinity, ease: 'easeInOut' }
        }}
        whileHover={{ 
          scale: 1.2,
          transition: { duration: 0.2 }
        }}
      >
        <FontAwesomeIcon 
          icon={faRocket} 
          className="text-white text-lg"
        />
        
        {/* Rocket Windows */}
        <motion.div
          className="absolute top-1.5 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-cyan-300/80 rounded-full"
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        
        {/* Rocket Fins */}
        <motion.div
          className="absolute -bottom-1 -left-1 w-2 h-3 bg-gradient-to-b from-red-500 to-orange-400 transform rotate-45 rounded-sm"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
        />
        <motion.div
          className="absolute -bottom-1 -right-1 w-2 h-3 bg-gradient-to-b from-red-500 to-orange-400 transform -rotate-45 rounded-sm"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
        />
      </motion.div>

      {/* Exhaust Particles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute top-full left-1/2 transform -translate-x-1/2 w-1 h-1 bg-orange-400 rounded-full"
          style={{ 
            left: `${45 + i * 5}%`,
            top: '100%'
          }}
          animate={{
            y: [0, 15, 30],
            opacity: [1, 0.5, 0],
            scale: [1, 0.5, 0]
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            delay: i * 0.2,
            ease: 'easeOut'
          }}
        />
      ))}

      {/* Progress Indicator */}
      <motion.div
        className="absolute -left-16 top-1/2 transform -translate-y-1/2"
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 3 }}
      >
                 <motion.div
           className="bg-black/20 backdrop-blur-sm rounded-lg px-3 py-1 text-white text-xs font-mono"
           animate={{ 
             background: [
               'rgba(0, 0, 0, 0.2)',
               'rgba(59, 130, 246, 0.2)',
               'rgba(0, 0, 0, 0.2)'
             ]
           }}
           transition={{ duration: 2, repeat: Infinity }}
         >
           <span>{progress}%</span>
         </motion.div>
      </motion.div>
    </motion.div>
  );
}
