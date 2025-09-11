'use client';

import React, { useEffect, useState } from 'react';

/**
 * Hook to safely handle client-only values that could cause hydration mismatches
 * Returns false during SSR and true after hydration
 */
export function useIsClient() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
}

/**
 * Component wrapper that only renders children on the client side
 * Useful for components that rely on browser APIs
 */
interface ClientOnlyProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export function ClientOnly({ children, fallback = null }: ClientOnlyProps): React.ReactElement | null {
  const isClient = useIsClient();
  
  if (!isClient) {
    return fallback ? React.createElement(React.Fragment, null, fallback) : null;
  }
  
  return React.createElement(React.Fragment, null, children);
}

/**
 * Development helper to detect potential hydration issues
 */
export function detectHydrationIssues() {
  if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
    const originalError = console.error;
    
    console.error = (...args) => {
      const message = args[0];
      if (typeof message === 'string' && message.includes('hydrat')) {
        console.warn('🚨 Potential hydration issue detected:', ...args);
        console.warn('💡 Consider using suppressHydrationWarning or ClientOnly wrapper');
      }
      originalError.apply(console, args);
    };
  }
}
