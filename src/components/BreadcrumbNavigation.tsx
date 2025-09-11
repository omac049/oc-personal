'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faAngleRight } from '@fortawesome/free-solid-svg-icons';

interface BreadcrumbItem {
  name: string;
  href: string;
  active?: boolean;
}

const breadcrumbItems: BreadcrumbItem[] = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' }
];

export default function BreadcrumbNavigation() {
  const [activeSection, setActiveSection] = useState('hero');

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
    
    breadcrumbItems.forEach((item) => {
      const sectionId = item.href.replace('#', '');
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.replace('#', ''));
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav 
      aria-label="Breadcrumb navigation"
      className="fixed top-4 left-4 z-40 hidden lg:block"
      itemScope
      itemType="https://schema.org/BreadcrumbList"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="bg-slate-800/80 backdrop-blur-md rounded-xl p-3 border border-slate-600/50"
      >
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbItems.map((item, index) => {
            const sectionId = item.href.replace('#', '');
            const isActive = activeSection === sectionId;
            const isLast = index === breadcrumbItems.length - 1;
            
            return (
              <li 
                key={item.name}
                className="flex items-center"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                <meta itemProp="position" content={String(index + 1)} />
                
                {index === 0 && (
                  <FontAwesomeIcon 
                    icon={faHome} 
                    className="w-3 h-3 mr-1 text-slate-400"
                  />
                )}
                
                <button
                  onClick={() => scrollToSection(item.href)}
                  className={`transition-colors duration-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded px-1 py-0.5 ${
                    isActive 
                      ? 'text-blue-400 font-medium' 
                      : 'text-slate-300 hover:text-white'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                  itemProp="item"
                >
                  <span itemProp="name">{item.name}</span>
                </button>
                
                {!isLast && (
                  <FontAwesomeIcon 
                    icon={faAngleRight} 
                    className="w-3 h-3 mx-2 text-slate-500"
                    aria-hidden="true"
                  />
                )}
              </li>
            );
          })}
        </ol>
      </motion.div>
    </nav>
  );
}
