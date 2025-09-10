'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorState, setCursorState] = useState('default');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Add cursor state change listeners
    const addCursorListeners = () => {
      // Interactive elements
      const interactiveElements = document.querySelectorAll(
        'button, a, [data-cursor="pointer"], .cursor-pointer, input, textarea'
      );
      
      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', () => setCursorState('pointer'));
        el.addEventListener('mouseleave', () => setCursorState('default'));
      });

      // Hover elements (cards, skills, etc.)
      const hoverElements = document.querySelectorAll(
        '[data-cursor="hover"], .skill-item, .group'
      );
      
      hoverElements.forEach((el) => {
        el.addEventListener('mouseenter', () => setCursorState('hover'));
        el.addEventListener('mouseleave', () => setCursorState('default'));
      });

      // Text elements
      const textElements = document.querySelectorAll(
        'h1, h2, h3, h4, h5, h6, p, span'
      );
      
      textElements.forEach((el) => {
        el.addEventListener('mouseenter', () => setCursorState('text'));
        el.addEventListener('mouseleave', () => setCursorState('default'));
      });
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseleave', handleMouseLeave);
    
    // Add listeners after a short delay to ensure DOM is ready
    setTimeout(addCursorListeners, 1000);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const cursorVariants = {
    default: {
      scale: 1,
      backgroundColor: 'rgba(13, 148, 136, 0.2)',
      border: '2px solid rgba(13, 148, 136, 0.5)',
    },
    pointer: {
      scale: 1.5,
      backgroundColor: 'rgba(13, 148, 136, 0.4)',
      border: '2px solid rgba(13, 148, 136, 0.8)',
    },
    hover: {
      scale: 2,
      backgroundColor: 'rgba(13, 148, 136, 0.1)',
      border: '2px solid rgba(13, 148, 136, 0.6)',
    },
    text: {
      scale: 0.5,
      backgroundColor: 'rgba(13, 148, 136, 0.6)',
      border: '1px solid rgba(13, 148, 136, 1)',
    },
  };

  // Hide custom cursor on touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null;
  }

  return (
    <>
      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>
      
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full mix-blend-difference"
        style={{
          width: '20px',
          height: '20px',
        }}
        animate={{
          x: mousePosition.x - 10,
          y: mousePosition.y - 10,
          opacity: isVisible ? 1 : 0,
          ...cursorVariants[cursorState as keyof typeof cursorVariants],
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />
      
      {/* Cursor trail effect */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full"
        style={{
          width: '6px',
          height: '6px',
          backgroundColor: 'rgba(13, 148, 136, 0.8)',
        }}
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.1,
        }}
      />
    </>
  );
}
