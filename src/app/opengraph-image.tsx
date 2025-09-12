import { ImageResponse } from 'next/og';

export const dynamic = 'force-static';

// Image metadata
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

// Image generation
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
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
        }}
      >
        {/* Background Pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `repeating-linear-gradient(
              45deg,
              rgba(59, 130, 246, 0.1) 0px,
              rgba(59, 130, 246, 0.1) 1px,
              transparent 1px,
              transparent 30px
            )`,
          }}
        />
        
        {/* Content Container */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            zIndex: 10,
            padding: '60px',
          }}
        >
          {/* Main Title */}
          <div
            style={{
              fontSize: 64,
              fontWeight: 'bold',
              marginBottom: 20,
              background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #06d6a0)',
              backgroundClip: 'text',
              color: 'transparent',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Omar Corral
          </div>
          
          {/* Subtitle */}
          <div
            style={{
              fontSize: 32,
              color: '#cbd5e1',
              marginBottom: 30,
              fontWeight: 300,
            }}
          >
            AI-Powered SEO Specialist
          </div>
          
                     {/* Keywords */}
           <div
             style={{
               display: 'flex',
               flexWrap: 'wrap',
               justifyContent: 'center',
               gap: 15,
               maxWidth: 800,
             }}
           >
             <div style={{ fontSize: 18, background: 'rgba(59, 130, 246, 0.2)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: 25, padding: '8px 16px', color: '#93c5fd' }}>AI SEO</div>
             <div style={{ fontSize: 18, background: 'rgba(59, 130, 246, 0.2)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: 25, padding: '8px 16px', color: '#93c5fd' }}>LLM Optimization</div>
             <div style={{ fontSize: 18, background: 'rgba(59, 130, 246, 0.2)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: 25, padding: '8px 16px', color: '#93c5fd' }}>SGE</div>
             <div style={{ fontSize: 18, background: 'rgba(59, 130, 246, 0.2)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: 25, padding: '8px 16px', color: '#93c5fd' }}>ChatGPT</div>
             <div style={{ fontSize: 18, background: 'rgba(59, 130, 246, 0.2)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: 25, padding: '8px 16px', color: '#93c5fd' }}>Claude</div>
             <div style={{ fontSize: 18, background: 'rgba(59, 130, 246, 0.2)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: 25, padding: '8px 16px', color: '#93c5fd' }}>Phoenix SEO</div>
           </div>
          
          {/* Domain */}
          <div
            style={{
              fontSize: 24,
              color: '#3b82f6',
              marginTop: 40,
              fontWeight: 500,
            }}
          >
            omar-corral.com
          </div>
        </div>
        
        {/* Corner Accent */}
        <div
          style={{
            position: 'absolute',
            top: 40,
            right: 40,
            width: 80,
            height: 80,
            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
            borderRadius: 20,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 32,
          }}
        >
          🚀
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
