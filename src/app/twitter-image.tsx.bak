import { ImageResponse } from 'next/og';

export const dynamic = 'force-static';

// Image metadata for Twitter
export const size = {
  width: 1200,
  height: 600,
};

export const contentType = 'image/png';

// Twitter image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          color: 'white',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
          padding: '60px',
        }}
      >
        {/* Left Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            flex: 1,
            maxWidth: '60%',
          }}
        >
          {/* Name */}
          <div
            style={{
              fontSize: 56,
              fontWeight: 'bold',
              marginBottom: 15,
              background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
              backgroundClip: 'text',
              color: 'transparent',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Omar Corral
          </div>
          
          {/* Title */}
          <div
            style={{
              fontSize: 28,
              color: '#cbd5e1',
              marginBottom: 25,
              lineHeight: 1.3,
            }}
          >
            AI-Powered SEO Specialist & LLM Optimization Expert
          </div>
          
          {/* Key Skills */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
            }}
          >
            <div style={{ fontSize: 18, color: '#94a3b8', display: 'flex', alignItems: 'center' }}>🤖 ChatGPT & Claude Integration</div>
            <div style={{ fontSize: 18, color: '#94a3b8', display: 'flex', alignItems: 'center' }}>🔍 Search Generative Experience</div>
            <div style={{ fontSize: 18, color: '#94a3b8', display: 'flex', alignItems: 'center' }}>📊 Phoenix, Arizona SEO</div>
          </div>
          
          {/* Domain */}
          <div
            style={{
              fontSize: 20,
              color: '#3b82f6',
              marginTop: 30,
              fontWeight: 500,
            }}
          >
            📱 omar-corral.com
          </div>
        </div>
        
        {/* Right Visual Element */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '35%',
            height: '100%',
            position: 'relative',
          }}
        >
          {/* Large Icon */}
          <div
            style={{
              fontSize: 120,
              marginBottom: 20,
            }}
          >
            🚀
          </div>
          
          {/* Tech Stack */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 8,
              maxWidth: 300,
            }}
          >
            <div style={{ fontSize: 14, background: 'rgba(59, 130, 246, 0.2)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: 20, padding: '6px 12px', color: '#93c5fd' }}>AI</div>
            <div style={{ fontSize: 14, background: 'rgba(59, 130, 246, 0.2)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: 20, padding: '6px 12px', color: '#93c5fd' }}>SEO</div>
            <div style={{ fontSize: 14, background: 'rgba(59, 130, 246, 0.2)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: 20, padding: '6px 12px', color: '#93c5fd' }}>LLM</div>
            <div style={{ fontSize: 14, background: 'rgba(59, 130, 246, 0.2)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: 20, padding: '6px 12px', color: '#93c5fd' }}>SGE</div>
          </div>
        </div>
        
        {/* Background Pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `repeating-linear-gradient(
              90deg,
              rgba(59, 130, 246, 0.05) 0px,
              rgba(59, 130, 246, 0.05) 1px,
              transparent 1px,
              transparent 40px
            )`,
            zIndex: -1,
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
