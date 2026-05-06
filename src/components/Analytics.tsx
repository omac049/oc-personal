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
