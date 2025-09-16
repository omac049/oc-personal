'use client';

import React, { useEffect, useState } from 'react';

// Performance monitoring hook
export const usePerformanceMonitor = () => {
  const [metrics, setMetrics] = useState({
    fcp: 0,
    lcp: 0,
    cls: 0,
    fid: 0,
  });

  useEffect(() => {
    // Monitor Core Web Vitals
    if (typeof window !== 'undefined' && 'performance' in window) {
      // First Contentful Paint
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === 'first-contentful-paint') {
            setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
          }
        }
      });
      
      try {
        observer.observe({ entryTypes: ['paint'] });
      } catch {
        // Fallback for older browsers
        console.log('Performance observer not supported');
      }

      // Cleanup
      return () => {
        try {
          observer.disconnect();
        } catch {
          // Silent fail
        }
      };
    }
  }, []);

  return metrics;
};

// Intersection Observer hook for lazy loading
export const useIntersectionObserver = (
  callback: () => void,
  options = {}
) => {
  const [ref, setRef] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callback();
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '50px',
        threshold: 0.1,
        ...options,
      }
    );

    observer.observe(ref);

    return () => {
      observer.disconnect();
    };
  }, [ref, callback, options]);

  return setRef;
};

// Debounced resize hook
export const useDebouncedResize = (callback: () => void, delay = 250) => {
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(callback, delay);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, [callback, delay]);
};

// Reduced motion preference detection
export const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
};

// Performance-aware animation config
export const getOptimizedAnimationConfig = (deviceInfo: any) => {
  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false;

  if (prefersReducedMotion) {
    return {
      enableComplexAnimations: false,
      enableParallax: false,
      enableHoverEffects: false,
      animationDuration: 0,
    };
  }

  // Reduce animations on low-end devices
  if (deviceInfo?.isLowEndDevice || deviceInfo?.isMobile) {
    return {
      enableComplexAnimations: false,
      enableParallax: false,
      enableHoverEffects: true,
      animationDuration: 0.2,
    };
  }

  return {
    enableComplexAnimations: true,
    enableParallax: true,
    enableHoverEffects: true,
    animationDuration: 0.3,
  };
};

// Memory-efficient component wrapper
export const withPerformanceOptimization = <P extends object>(
  Component: React.ComponentType<P>
) => {
  const PerformanceOptimizedComponent = React.memo((props: P) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useIntersectionObserver(() => setIsVisible(true));

    if (!isVisible) {
      return (
        <div 
          ref={ref} 
          className="min-h-screen flex items-center justify-center bg-slate-900"
        >
          <div className="animate-pulse">
            <div className="h-8 bg-slate-700 rounded w-48 mx-auto mb-4"></div>
            <div className="h-4 bg-slate-700 rounded w-96 mx-auto"></div>
          </div>
        </div>
      );
    }

    return <Component {...props} />;
  });
  
  PerformanceOptimizedComponent.displayName = `withPerformanceOptimization(${Component.displayName || Component.name})`;
  
  return PerformanceOptimizedComponent;
};
