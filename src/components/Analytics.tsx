'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import { analytics } from '@/data/seo';

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

function GoogleAnalytics() {
  const gaId = analytics.googleAnalytics;

  if (!gaId) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <script
        id="google-analytics"
        suppressHydrationWarning
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', {
            page_title: document.title,
            page_location: window.location.href,
            send_page_view: true,
            anonymize_ip: true,
            cookie_flags: 'SameSite=None;Secure'
          });
        `}
      </script>
    </>
  );
}

export function useAnalytics() {
  const trackEvent = (eventName: string, parameters?: Record<string, unknown>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, {
        event_category: 'engagement',
        event_label: (parameters?.label as string) || '',
        value: (parameters?.value as number) || 0,
        ...parameters,
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

  return { trackEvent, trackFormSubmission };
}

function CoreWebVitalsTracking() {
  useEffect(() => {
    if (typeof window === 'undefined' || !window.gtag) return;

    const reportWebVitals = (metric: { name: string; id: string; value: number }) => {
      window.gtag('event', metric.name, {
        event_category: 'Web Vitals',
        event_label: metric.id,
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        non_interaction: true,
      });
    };

    import('web-vitals').then((webVitals) => {
      if (webVitals.onCLS) webVitals.onCLS(reportWebVitals);
      if (webVitals.onINP) webVitals.onINP(reportWebVitals);
      if (webVitals.onFCP) webVitals.onFCP(reportWebVitals);
      if (webVitals.onLCP) webVitals.onLCP(reportWebVitals);
      if (webVitals.onTTFB) webVitals.onTTFB(reportWebVitals);
    }).catch(() => {});
  }, []);

  return null;
}

export default function Analytics() {
  return (
    <>
      <GoogleAnalytics />
      <CoreWebVitalsTracking />
    </>
  );
}
