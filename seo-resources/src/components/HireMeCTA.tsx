import React from 'react';

export default function HireMeCTA(): React.ReactElement {
  return (
    <div
      style={{
        margin: '2rem 0',
        padding: '1.5rem 2rem',
        borderLeft: '4px solid var(--ifm-color-primary)',
        background: 'var(--ifm-background-surface-color)',
        borderRadius: '0 8px 8px 0',
      }}
    >
      <p style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '0.5rem' }}>
        Need help implementing this?
      </p>
      <p style={{ marginBottom: '1rem', opacity: 0.85 }}>
        I help brands turn SEO strategy into measurable organic growth — from technical audits to AI search readiness.
      </p>
      <a
        href="https://omar-corral.com/#contact"
        style={{
          display: 'inline-block',
          padding: '0.5rem 1.25rem',
          background: 'var(--ifm-color-primary)',
          color: '#000',
          borderRadius: '6px',
          textDecoration: 'none',
          fontWeight: 600,
        }}
      >
        Start a Conversation
      </a>
    </div>
  );
}
