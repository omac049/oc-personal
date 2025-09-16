'use client';

import dynamic from 'next/dynamic';

// Lazy load heavy components with loading fallbacks
export const LazySkills = dynamic(() => import('./Skills'), {
  loading: () => (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
        <p className="text-slate-300">Loading Skills Universe...</p>
      </div>
    </div>
  ),
  ssr: false, // Disable SSR for this heavy component
});

export const LazyAbout = dynamic(() => import('./About'), {
  loading: () => (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="text-center">
        <div className="animate-pulse">
          <div className="h-8 bg-slate-700 rounded w-48 mx-auto mb-4"></div>
          <div className="h-4 bg-slate-700 rounded w-96 mx-auto mb-2"></div>
          <div className="h-4 bg-slate-700 rounded w-80 mx-auto"></div>
        </div>
      </div>
    </div>
  ),
  ssr: false,
});

export const LazyExperience = dynamic(() => import('./Experience'), {
  loading: () => (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="text-center">
        <div className="animate-pulse">
          <div className="h-6 bg-slate-700 rounded w-32 mx-auto mb-6"></div>
          <div className="space-y-4">
            <div className="h-4 bg-slate-700 rounded w-64 mx-auto"></div>
            <div className="h-4 bg-slate-700 rounded w-56 mx-auto"></div>
            <div className="h-4 bg-slate-700 rounded w-72 mx-auto"></div>
          </div>
        </div>
      </div>
    </div>
  ),
  ssr: false,
});

// Projects component not currently implemented
// export const LazyProjects = dynamic(() => import('./Projects'), { ... });

export const LazyContact = dynamic(() => import('./Contact'), {
  loading: () => (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="text-center">
        <div className="animate-pulse max-w-md mx-auto">
          <div className="h-8 bg-slate-700 rounded w-48 mx-auto mb-6"></div>
          <div className="space-y-4">
            <div className="h-12 bg-slate-700 rounded"></div>
            <div className="h-12 bg-slate-700 rounded"></div>
            <div className="h-32 bg-slate-700 rounded"></div>
            <div className="h-12 bg-slate-700 rounded w-32 mx-auto"></div>
          </div>
        </div>
      </div>
    </div>
  ),
  ssr: false,
});

// Lazy load background components that are resource-intensive
export const LazyAlgorithmBackground = dynamic(() => import('./AlgorithmBackground'), {
  loading: () => <div className="absolute inset-0 bg-slate-900/50"></div>,
  ssr: false,
});

export const LazyInteractiveBackground = dynamic(() => import('./InteractiveBackground'), {
  loading: () => <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800"></div>,
  ssr: false,
});

// Utility function to create intersection observer for lazy loading
export const createIntersectionObserver = (callback: () => void, options = {}) => {
  if (typeof window === 'undefined') return null;
  
  const defaultOptions = {
    root: null,
    rootMargin: '100px', // Load 100px before element comes into view
    threshold: 0.1,
  };
  
  return new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        callback();
      }
    });
  }, { ...defaultOptions, ...options });
};
