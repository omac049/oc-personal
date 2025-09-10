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
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
      style={{
        pointerEvents: isVisible ? 'auto' : 'none'
      }}
    >
      <motion.div 
        className="bg-slate-800 border border-slate-600 rounded-2xl p-3 shadow-xl"
        whileHover={{ 
          scale: 1.02
        }}
      >
        <div className="flex items-center justify-center space-x-2">
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative p-3 rounded-xl transition-all duration-300 ${
                activeSection === item.id
                  ? 'text-white bg-blue-600'
                  : 'text-gray-300 hover:text-white hover:bg-slate-700'
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
              
              {/* Simple Tooltip */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-slate-700 text-white text-xs px-2 py-1 rounded whitespace-nowrap pointer-events-none"
              >
                {item.label}
              </motion.div>
            </motion.button>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
}
