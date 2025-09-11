'use client';

import { useEffect } from 'react';

export default function ScrollToTop() {
  useEffect(() => {
    // Immediate scroll to top - no delay, no animation initially
    const scrollToTopImmediate = () => {
      // Use both methods to ensure compatibility across browsers
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    };
    
    // Execute immediately when component mounts
    scrollToTopImmediate();
    
    // Disable browser scroll restoration immediately
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    // Prevent any scroll restoration on page load
    const handleLoad = () => {
      scrollToTopImmediate();
    };

    // Ensure we're at top even after hydration and router changes
    const handlePageShow = (e: PageTransitionEvent) => {
      // Handle back/forward button navigation
      if (e.persisted) {
        scrollToTopImmediate();
      }
    };

    // Add event listeners
    window.addEventListener('load', handleLoad);
    window.addEventListener('pageshow', handlePageShow);

    // Cleanup
    return () => {
      window.removeEventListener('load', handleLoad);
      window.removeEventListener('pageshow', handlePageShow);
    };
  }, []);

  return null; // This component doesn't render anything
}
