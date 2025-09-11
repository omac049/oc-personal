'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import { analytics } from '@/data/seo';

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
    fbq: (...args: any[]) => void;
  }
}

/**
 * Google Analytics 4 Component
 */
function GoogleAnalytics() {
  const gaId = analytics.googleAnalytics;

  if (!gaId || gaId === 'G-XXXXXXXXXX') {
    return null; // Don't load analytics in development/demo
  }

  return (
    <>
      {/* Google Analytics Script */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', {
              page_title: document.title,
              page_location: window.location.href,
              send_page_view: true,
              anonymize_ip: true,
              cookie_flags: 'SameSite=None;Secure',
              custom_map: {
                'custom_dimension_1': 'user_type',
                'custom_dimension_2': 'page_category'
              }
            });
          `,
        }}
      />
    </>
  );
}

/**
 * Google Tag Manager Component
 */
function GoogleTagManager() {
  const gtmId = analytics.googleTagManager;

  if (!gtmId || gtmId === 'GTM-XXXXXXX') {
    return null; // Don't load GTM in development/demo
  }

  return (
    <>
      {/* GTM Script */}
      <Script
        id="google-tag-manager"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmId}');
          `,
        }}
      />
      {/* GTM NoScript Fallback */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
    </>
  );
}

/**
 * Facebook Pixel Component
 */
function FacebookPixel() {
  const pixelId = analytics.facebookPixel;

  if (!pixelId || pixelId === 'xxxxxxxxxxxxx') {
    return null; // Don't load pixel in development/demo
  }

  return (
    <Script
      id="facebook-pixel"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${pixelId}');
          fbq('track', 'PageView');
        `,
      }}
    />
  );
}

/**
 * Custom Analytics Events Hook
 */
export function useAnalytics() {
  const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, {
        event_category: 'engagement',
        event_label: parameters?.label || '',
        value: parameters?.value || 0,
        ...parameters,
      });
    }
  };

  const trackPageView = (url: string, title: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', analytics.googleAnalytics, {
        page_title: title,
        page_location: url,
      });
    }
  };

  const trackConversion = (conversionId: string, value?: number) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: conversionId,
        value: value || 0,
        currency: 'USD',
      });
    }
  };

  const trackFormSubmission = (formName: string, success: boolean = true) => {
    trackEvent('form_submit', {
      form_name: formName,
      success: success,
      event_category: 'form',
    });
  };

  const trackSocialShare = (platform: string, url: string) => {
    trackEvent('share', {
      method: platform,
      content_type: 'page',
      item_id: url,
      event_category: 'social',
    });
  };

  const trackDownload = (fileName: string, fileType: string) => {
    trackEvent('file_download', {
      file_name: fileName,
      file_extension: fileType,
      event_category: 'download',
    });
  };

  const trackOutboundClick = (url: string, linkText?: string) => {
    trackEvent('click', {
      link_url: url,
      link_text: linkText || '',
      event_category: 'outbound',
    });
  };

  const trackVideoPlay = (videoTitle: string, duration?: number) => {
    trackEvent('video_play', {
      video_title: videoTitle,
      video_duration: duration || 0,
      event_category: 'video',
    });
  };

  const trackScrollDepth = (percentage: number) => {
    trackEvent('scroll', {
      percent_scrolled: percentage,
      event_category: 'engagement',
    });
  };

  const trackUserTiming = (name: string, value: number, category: string = 'performance') => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'timing_complete', {
        name: name,
        value: value,
        event_category: category,
      });
    }
  };

  return {
    trackEvent,
    trackPageView,
    trackConversion,
    trackFormSubmission,
    trackSocialShare,
    trackDownload,
    trackOutboundClick,
    trackVideoPlay,
    trackScrollDepth,
    trackUserTiming,
  };
}

/**
 * Core Web Vitals Tracking
 */
function CoreWebVitalsTracking() {
  useEffect(() => {
    if (typeof window === 'undefined' || !window.gtag) return;

    // Track Core Web Vitals
    const reportWebVitals = (metric: any) => {
      window.gtag('event', metric.name, {
        event_category: 'Web Vitals',
        event_label: metric.id,
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        non_interaction: true,
      });
    };

    // Dynamically import web-vitals if available
    import('web-vitals').then((webVitals) => {
      if (webVitals.onCLS) webVitals.onCLS(reportWebVitals);
      if (webVitals.onINP) webVitals.onINP(reportWebVitals); // INP replaced FID
      if (webVitals.onFCP) webVitals.onFCP(reportWebVitals);
      if (webVitals.onLCP) webVitals.onLCP(reportWebVitals);
      if (webVitals.onTTFB) webVitals.onTTFB(reportWebVitals);
    }).catch(() => {
      // web-vitals library not available
      console.log('web-vitals library not found');
    });
  }, []);

  return null;
}

/**
 * Performance Monitoring
 */
function PerformanceMonitoring() {
  useEffect(() => {
    if (typeof window === 'undefined' || !window.gtag) return;

    // Track page load time
    window.addEventListener('load', () => {
      const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (perfData && perfData.loadEventEnd > 0) {
        const pageLoadTime = perfData.loadEventEnd - perfData.fetchStart;
        const domContentLoadedTime = perfData.domContentLoadedEventEnd - perfData.fetchStart;
        
        window.gtag('event', 'timing_complete', {
          name: 'page_load_time',
          value: Math.round(pageLoadTime),
          event_category: 'Performance',
        });

        window.gtag('event', 'timing_complete', {
          name: 'dom_content_loaded',
          value: Math.round(domContentLoadedTime),
          event_category: 'Performance',
        });
      }
    });

    // Track scroll depth
    let maxScroll = 0;
    const trackScrollDepth = () => {
      const scrollPercentage = Math.round(
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
      );
      
      if (scrollPercentage > maxScroll && scrollPercentage % 25 === 0) {
        maxScroll = scrollPercentage;
        window.gtag('event', 'scroll', {
          event_category: 'Engagement',
          event_label: `${scrollPercentage}%`,
          value: scrollPercentage,
        });
      }
    };

    window.addEventListener('scroll', trackScrollDepth, { passive: true });

    return () => {
      window.removeEventListener('scroll', trackScrollDepth);
    };
  }, []);

  return null;
}

/**
 * Main Analytics Component
 */
export default function Analytics() {
  return (
    <>
      <GoogleAnalytics />
      <GoogleTagManager />
      <FacebookPixel />
      <CoreWebVitalsTracking />
      <PerformanceMonitoring />
    </>
  );
}
