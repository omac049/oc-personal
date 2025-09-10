'use client';

import { motion, useMotionValue, useSpring, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import ClientOnly from './ClientOnly';

interface FloatingElement {
  id: number;
  size: number;
  color: string;
  initialX: number;
  initialY: number;
  speed: number;
  blur: number;
}

interface InteractiveBackgroundProps {
  variant?: 'primary' | 'secondary';
  className?: string;
}

export default function InteractiveBackground({ 
  variant = 'primary',
  className = ''
}: InteractiveBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [elements, setElements] = useState<FloatingElement[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { damping: 30, stiffness: 200 });
  const smoothMouseY = useSpring(mouseY, { damping: 30, stiffness: 200 });

  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  // Generate floating elements (client-side only)
  useEffect(() => {
    const generateElements = () => {
      if (!dimensions.width || !dimensions.height) return;

      const colors = variant === 'primary' 
        ? ['rgba(59, 130, 246, 0.08)', 'rgba(16, 185, 129, 0.06)', 'rgba(139, 92, 246, 0.07)', 'rgba(239, 68, 68, 0.05)']
        : ['rgba(45, 212, 191, 0.08)', 'rgba(168, 85, 247, 0.06)', 'rgba(236, 72, 153, 0.07)', 'rgba(34, 197, 94, 0.05)'];

      // Use deterministic values to prevent hydration mismatch
      const newElements: FloatingElement[] = Array.from({ length: 8 }, (_, i) => {
        // Create pseudo-random values based on index for consistency
        const seedX = (i * 123 + 456) % 1000 / 1000;
        const seedY = (i * 789 + 234) % 1000 / 1000;
        const seedSize = (i * 345 + 678) % 100 / 100;
        const seedColor = i % colors.length;
        const seedBlur = (i * 567 + 890) % 20 / 20;
        
        return {
          id: i,
          size: seedSize * 150 + 80,
          color: colors[seedColor],
          initialX: seedX * dimensions.width,
          initialY: seedY * dimensions.height,
          speed: 0.3 + i * 0.05,
          blur: seedBlur * 20 + 15
        };
      });

      setElements(newElements);
    };

    // Only generate elements after component mounts to avoid hydration issues
    const timer = setTimeout(generateElements, 100);
    return () => clearTimeout(timer);
  }, [dimensions, variant]);

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        mouseX.set(x * 100);
        mouseY.set(y * 100);
      }
    };

    const handleResize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('resize', handleResize);
      handleResize();
      
      return () => {
        container.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [mouseX, mouseY]);

  return (
    <motion.div 
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden ${className}`}
      style={{ y: backgroundY }}
    >
      {/* Dynamic gradient overlay */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: variant === 'primary' 
            ? [
                'radial-gradient(ellipse 1200px 800px at 20% 30%, rgba(59, 130, 246, 0.12) 0%, transparent 50%)',
                'radial-gradient(ellipse 800px 1200px at 80% 20%, rgba(16, 185, 129, 0.10) 0%, transparent 50%)',
                'radial-gradient(ellipse 1000px 600px at 40% 80%, rgba(139, 92, 246, 0.08) 0%, transparent 50%)'
              ]
            : [
                'radial-gradient(ellipse 1200px 800px at 30% 20%, rgba(45, 212, 191, 0.12) 0%, transparent 50%)',
                'radial-gradient(ellipse 800px 1200px at 70% 30%, rgba(168, 85, 247, 0.10) 0%, transparent 50%)',
                'radial-gradient(ellipse 1000px 600px at 50% 70%, rgba(236, 72, 153, 0.08) 0%, transparent 50%)'
              ]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut'
        }}
      />

      {/* Floating interactive elements */}
      <ClientOnly>
        {elements.map((element) => (
          <motion.div
            key={element.id}
            className="absolute rounded-full pointer-events-none"
            style={{
              width: element.size,
              height: element.size,
              backgroundColor: element.color,
              filter: `blur(${element.blur}px)`,
              left: element.initialX,
              top: element.initialY,
            }}
            animate={{
              x: [0, 50, -30, 0],
              y: [0, -40, 60, 0],
              scale: [1, 1.2, 0.8, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20 + element.id * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: element.id * 0.8,
            }}
            whileHover={{
              scale: 1.5,
              transition: { duration: 0.3 }
            }}
          />
        ))}
      </ClientOnly>

      {/* Mouse-reactive elements */}
      <ClientOnly>
        <motion.div
          className="absolute w-96 h-96 rounded-full pointer-events-none opacity-30"
          style={{
            background: variant === 'primary' 
              ? 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(45, 212, 191, 0.2) 0%, transparent 70%)',
            x: smoothMouseX,
            y: smoothMouseY,
            left: '50%',
            top: '50%',
            marginLeft: '-12rem',
            marginTop: '-12rem',
          }}
        />
      </ClientOnly>

      {/* Geometric elements */}
      <motion.svg
        className="absolute inset-0 w-full h-full opacity-10"
        viewBox="0 0 1200 800"
      >
        <motion.circle
          cx="300"
          cy="200"
          r="2"
          fill={variant === 'primary' ? '#3b82f6' : '#2dd4bf'}
          animate={{ opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0 }}
        />
        <motion.circle
          cx="800"
          cy="300"
          r="1.5"
          fill={variant === 'primary' ? '#10b981' : '#a855f7'}
          animate={{ opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />
        <motion.circle
          cx="500"
          cy="600"
          r="2.5"
          fill={variant === 'primary' ? '#8b5cf6' : '#ec4899'}
          animate={{ opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 2 }}
        />
        
        {/* Animated paths */}
        <motion.path
          d="M200,400 Q600,200 1000,400"
          fill="none"
          stroke={variant === 'primary' ? 'rgba(59, 130, 246, 0.3)' : 'rgba(45, 212, 191, 0.3)'}
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.svg>

      {/* Interactive gradient mesh */}
      <ClientOnly>
        <motion.div
          className="absolute inset-0 opacity-40"
          style={{
            background: `
              conic-gradient(from 0deg at 50% 50%, 
                transparent 0deg, 
                ${variant === 'primary' ? 'rgba(59, 130, 246, 0.05)' : 'rgba(45, 212, 191, 0.05)'} 60deg, 
                transparent 120deg, 
                ${variant === 'primary' ? 'rgba(16, 185, 129, 0.05)' : 'rgba(168, 85, 247, 0.05)'} 180deg, 
                transparent 240deg, 
                ${variant === 'primary' ? 'rgba(139, 92, 246, 0.05)' : 'rgba(236, 72, 153, 0.05)'} 300deg, 
                transparent 360deg
              )
            `,
            x: useTransform(smoothMouseX, [-100, 100], [-20, 20]),
            y: useTransform(smoothMouseY, [-100, 100], [-20, 20]),
            rotate: useTransform(scrollYProgress, [0, 1], [0, 360]),
          }}
        />
      </ClientOnly>
    </motion.div>
  );
}
