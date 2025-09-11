'use client';

import { useState, useEffect } from 'react';

interface DeviceInfo {
  isMobile: boolean;
  isTablet: boolean;
  isLowPerformance: boolean;
  prefersReducedMotion: boolean;
  screenWidth: number;
}

export function useDeviceDetection(): DeviceInfo {
  const [mounted, setMounted] = useState(false);
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>({
    isMobile: false,
    isTablet: false,
    isLowPerformance: false,
    prefersReducedMotion: false,
    screenWidth: 1920,
  });

  useEffect(() => {
    setMounted(true);
    
    const updateDeviceInfo = () => {
      // Only run on client side
      if (typeof window === 'undefined') return;
      
      const width = window.innerWidth;
      const isMobile = width < 768;
      const isTablet = width >= 768 && width < 1024;
      
      // Detect low performance devices
      const isLowPerformance = 
        // Touch devices are generally mobile
        'ontouchstart' in window ||
        // Low memory devices
        (navigator as any).deviceMemory < 4 ||
        // Slow connection
        (navigator as any).connection?.effectiveType === 'slow-2g' ||
        (navigator as any).connection?.effectiveType === '2g' ||
        // Mobile user agents
        /Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent);

      // Check for reduced motion preference
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      setDeviceInfo({
        isMobile,
        isTablet,
        isLowPerformance,
        prefersReducedMotion,
        screenWidth: width,
      });
    };

    updateDeviceInfo();
    window.addEventListener('resize', updateDeviceInfo);

    return () => window.removeEventListener('resize', updateDeviceInfo);
  }, []);

  // Return default (desktop) values during SSR to prevent hydration mismatch
  if (!mounted) {
    return {
      isMobile: false,
      isTablet: false,
      isLowPerformance: false,
      prefersReducedMotion: false,
      screenWidth: 1920,
    };
  }

  return deviceInfo;
}

// Animation configuration based on device capabilities
export function getAnimationConfig(deviceInfo: DeviceInfo) {
  if (deviceInfo.prefersReducedMotion) {
    return {
      enableComplexAnimations: false,
      enableParticles: false,
      enableBackgroundAnimations: false,
      animationDuration: 0.1,
      particleCount: 0,
    };
  }

  if (deviceInfo.isMobile || deviceInfo.isLowPerformance) {
    return {
      enableComplexAnimations: false,
      enableParticles: false,
      enableBackgroundAnimations: false,
      animationDuration: 0.3,
      particleCount: 0,
    };
  }

  if (deviceInfo.isTablet) {
    return {
      enableComplexAnimations: true,
      enableParticles: false,
      enableBackgroundAnimations: true,
      animationDuration: 0.5,
      particleCount: 5,
    };
  }

  // Desktop - full animations
  return {
    enableComplexAnimations: true,
    enableParticles: true,
    enableBackgroundAnimations: true,
    animationDuration: 0.8,
    particleCount: 15,
  };
}
