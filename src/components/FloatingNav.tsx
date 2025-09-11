'use client';

import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCog, faBriefcase, faQuestionCircle, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const navItems = [
  { id: 'hero', label: 'Home', icon: faHome },
  { id: 'about', label: 'About', icon: faUser },
  { id: 'skills', label: 'Skills', icon: faCog },
  { id: 'experience', label: 'Experience', icon: faBriefcase },
  { id: 'faq', label: 'FAQ', icon: faQuestionCircle },
  { id: 'contact', label: 'Contact', icon: faEnvelope },
];

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  const [hideInContact, setHideInContact] = useState(false);
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
          // Hide navigation when in contact section to prevent overlap with form
          setHideInContact(entry.target.id === 'contact');
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
        opacity: (isVisible && !hideInContact) ? 1 : 0,
        y: (isVisible && !hideInContact) ? 0 : 50,
        scale: (isVisible && !hideInContact) ? 1 : 0.8
      }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], type: "spring", bounce: 0.2 }}
      className="fixed bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 z-50 px-2 sm:px-4 lg:px-0 w-full max-w-md sm:max-w-lg lg:max-w-xl"
      style={{
        pointerEvents: (isVisible && !hideInContact) ? 'auto' : 'none'
      }}
    >
      <motion.div 
        className="bg-slate-800/95 border border-slate-600/80 rounded-2xl p-2 sm:p-2.5 lg:p-3 shadow-2xl backdrop-blur-md mx-auto"
        whileHover={{ 
          scale: 1.02
        }}
      >
        <div className="flex items-center justify-center space-x-1 sm:space-x-1.5 lg:space-x-2">
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative p-2 sm:p-2.5 lg:p-3 rounded-xl transition-all duration-300 min-w-[48px] min-h-[48px] sm:min-w-[52px] sm:min-h-[52px] lg:min-w-[56px] lg:min-h-[56px] flex items-center justify-center flex-1 max-w-[56px] ${
                activeSection === item.id
                  ? 'text-white bg-blue-600 shadow-lg'
                  : 'text-gray-300 hover:text-white hover:bg-slate-700'
              }`}
              whileHover={{ 
                scale: 1.05,
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
              <FontAwesomeIcon icon={item.icon} className="w-5 h-5 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
              
              {/* Simple Tooltip - Hidden on mobile for better UX */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="hidden sm:block absolute -top-12 left-1/2 transform -translate-x-1/2 bg-slate-700 text-white text-xs px-2 py-1 rounded whitespace-nowrap pointer-events-none z-50"
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
