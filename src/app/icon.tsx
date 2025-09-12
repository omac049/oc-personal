import { ImageResponse } from 'next/og';

export const dynamic = 'force-static';

// Image metadata
export const size = {
  width: 32,
  height: 32,
};

export const contentType = 'image/png';

// Dynamic favicon generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 20,
          background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          fontFamily: 'system-ui, sans-serif',
          borderRadius: '6px',
          position: 'relative',
        }}
      >
        {/* Gradient overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3) 0%, transparent 50%)',
            borderRadius: '6px',
          }}
        />
        
        {/* Letter O */}
        <div
          style={{
            position: 'relative',
            zIndex: 1,
          }}
        >
          O
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
