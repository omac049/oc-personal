'use client';

import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCog, faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const navItems = [
  { id: 'hero', label: 'Home', icon: faHome },
  { id: 'about', label: 'About', icon: faUser },
  { id: 'skills', label: 'Skills', icon: faCog },
  { id: 'experience', label: 'Experience', icon: faBriefcase },
  { id: 'contact', label: 'Contact', icon: faEnvelope },
];

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  });

  useEffect(() => {
    const observerOptions = {
      threshold: 0.6,
      rootMargin: '-20% 0px -20% 0px',
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    navItems.forEach((item) => {
      const element = document.getElementById(item.id === 'hero' ? 'hero' : item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId === 'hero' ? 'hero' : sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 50,
        scale: isVisible ? 1 : 0.8
      }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], type: "spring", bounce: 0.2 }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40"
    >
      <motion.div 
        className="bg-slate-900/80 backdrop-blur-xl border border-blue-500/30 rounded-2xl p-3 shadow-2xl mx-auto"
        whileHover={{ 
          scale: 1.02,
          boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)"
        }}
        animate={{
          borderColor: [
            'rgba(59, 130, 246, 0.3)',
            'rgba(139, 92, 246, 0.4)',
            'rgba(6, 182, 212, 0.3)',
            'rgba(59, 130, 246, 0.3)'
          ]
        }}
        transition={{
          borderColor: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <div className="flex items-center justify-center space-x-2">
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative p-3 rounded-xl transition-all duration-300 ${
                activeSection === item.id
                  ? 'text-white bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
              whileHover={{ 
                scale: 1.1,
                y: -2
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: index * 0.1,
                type: "spring",
                bounce: 0.3
              }}
            >
              <FontAwesomeIcon icon={item.icon} className="w-4 h-4" />
              
              {/* Enhanced Tooltip */}
              <motion.div
                initial={{ opacity: 0, y: 15, scale: 0.8 }}
                whileHover={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ type: "spring", bounce: 0.3 }}
                className="absolute -top-14 left-1/2 transform -translate-x-1/2 bg-slate-900/90 backdrop-blur-sm text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap border border-blue-500/30"
              >
                {item.label}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 bg-slate-900 rotate-45 border-r border-b border-blue-500/30"></div>
              </motion.div>

              {/* Enhanced Active indicator */}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl"
                  style={{ zIndex: -1 }}
                  animate={{
                    boxShadow: [
                      '0 0 20px rgba(59, 130, 246, 0.5)',
                      '0 0 30px rgba(139, 92, 246, 0.6)'
                    ]
                  }}
                  transition={{
                    // Layout transition for smooth indicator movement
                    layout: { type: "spring", bounce: 0.2, duration: 0.6 },
                    // BoxShadow animation transition
                    boxShadow: { 
                      duration: 2, 
                      repeat: Infinity, 
                      repeatType: "reverse",
                      ease: "easeInOut"
                    }
                  }}
                />
              )}
              
              {/* Hover glow effect */}
              <motion.div
                className="absolute inset-0 rounded-xl bg-white/5 opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
            </motion.button>
          ))}
        </div>
        
        {/* Navigation container glow */}
        <motion.div
          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0"
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.nav>
  );
}
