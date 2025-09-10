'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  delay: number;
  size: number;
  opacity: number;
}

export default function InteractiveParticles() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isActive, setIsActive] = useState(false);

  const createParticle = useCallback((x: number, y: number): Particle => ({
    id: Date.now() + Math.random(),
    x: x + (Math.random() - 0.5) * 100,
    y: y + (Math.random() - 0.5) * 100,
    delay: Math.random() * 0.5,
    size: Math.random() * 4 + 2,
    opacity: Math.random() * 0.6 + 0.2,
  }), []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      if (isActive && Math.random() > 0.8) {
        const newParticle = createParticle(e.clientX, e.clientY);
        setParticles(prev => [...prev.slice(-10), newParticle]);
      }
    };

    const handleMouseEnter = () => setIsActive(true);
    const handleMouseLeave = () => setIsActive(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Clean up old particles
    const cleanupInterval = setInterval(() => {
      setParticles(prev => prev.slice(-15));
    }, 2000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);
      clearInterval(cleanupInterval);
    };
  }, [isActive, createParticle]);

  // Hide on touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      {/* Mouse follower orb */}
      <motion.div
        className="absolute w-4 h-4 rounded-full bg-gradient-to-r from-teal-400 to-emerald-400 mix-blend-screen"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
        }}
        animate={{
          scale: isActive ? [1, 1.5, 1] : 1,
          opacity: isActive ? 0.8 : 0.4,
        }}
        transition={{
          scale: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          },
          opacity: {
            duration: 0.3
          }
        }}
      />

      {/* Trail particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-teal-300 to-emerald-300 mix-blend-screen"
          style={{
            width: particle.size,
            height: particle.size,
            left: particle.x,
            top: particle.y,
          }}
          initial={{
            opacity: particle.opacity,
            scale: 0,
            y: particle.y,
          }}
          animate={{
            opacity: 0,
            scale: 1,
            y: particle.y - 100,
          }}
          transition={{
            duration: 2,
            delay: particle.delay,
            ease: "easeOut"
          }}
          onAnimationComplete={() => {
            setParticles(prev => prev.filter(p => p.id !== particle.id));
          }}
        />
      ))}

      {/* Background ambient particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`ambient-${i}`}
          className="absolute w-1 h-1 rounded-full bg-teal-400/30"
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}
    </div>
  );
}
