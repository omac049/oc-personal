'use client';

import { useEffect } from 'react';

export default function ScrollToTop() {
  useEffect(() => {
    // Force scroll to top immediately on component mount
    window.scrollTo(0, 0);
    
    // Disable automatic scroll restoration
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    
    // Additional safety measure - force scroll after a brief delay
    const timeoutId = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 50);

    // Prevent any scroll restoration on page refresh
    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return null; // This component doesn't render anything
}
