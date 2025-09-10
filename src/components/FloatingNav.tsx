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
      initial={{ opacity: 0, y: 50 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 50
      }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none"
      style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
    >
      <motion.div 
        className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-full p-2 shadow-2xl"
        whileHover={{ scale: 1.05 }}
      >
        <div className="flex items-center space-x-1">
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative p-3 rounded-full transition-all duration-300 ${
                activeSection === item.id
                  ? 'text-white bg-gradient-to-r from-teal-500 to-emerald-600'
                  : 'text-gray-300 hover:text-white hover:bg-white/20'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <FontAwesomeIcon icon={item.icon} className="w-4 h-4" />
              
              {/* Tooltip */}
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap"
              >
                {item.label}
              </motion.span>

              {/* Active indicator */}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute inset-0 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  style={{ zIndex: -1 }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
}
