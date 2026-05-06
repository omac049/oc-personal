import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const dynamic = 'force-static';
export const alt = 'Omar Corral — Digital Strategist';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  const [inter700, inter300] = await Promise.all([
    readFile(join(process.cwd(), 'public/fonts/Inter-Bold.ttf')),
    readFile(join(process.cwd(), 'public/fonts/Inter-Light.ttf')),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          background: '#000000',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '0 88px',
          position: 'relative',
          fontFamily: '"Inter", sans-serif',
        }}
      >
        {/* Signal-green top bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '5px',
            background: '#00E55C',
          }}
        />

        {/* Signal-O mark — top right */}
        <div
          style={{
            position: 'absolute',
            top: 52,
            right: 88,
            width: 44,
            height: 44,
            borderRadius: '50%',
            border: '3px solid #00E55C',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              width: 22,
              height: 22,
              borderRadius: '50%',
              border: '2px solid #00E55C',
            }}
          />
        </div>

        {/* Eyebrow */}
        <div
          style={{
            fontSize: 16,
            fontWeight: 300,
            color: '#00E55C',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            marginBottom: 28,
            display: 'flex',
          }}
        >
          omar-corral.com
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: 88,
            fontWeight: 700,
            color: '#ffffff',
            lineHeight: 1.05,
            marginBottom: 24,
            display: 'flex',
          }}
        >
          Omar Corral
        </div>

        {/* Role */}
        <div
          style={{
            fontSize: 32,
            fontWeight: 300,
            color: '#a1a1aa',
            marginBottom: 40,
            display: 'flex',
          }}
        >
          Digital Strategist
        </div>

        {/* Divider */}
        <div
          style={{
            width: 56,
            height: 3,
            background: '#00E55C',
            marginBottom: 40,
            display: 'flex',
          }}
        />

        {/* Tagline */}
        <div
          style={{
            fontSize: 22,
            fontWeight: 300,
            color: '#52525b',
            letterSpacing: '0.04em',
            display: 'flex',
          }}
        >
          SEO · AI Search · Organic Growth
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Inter', data: inter700, style: 'normal', weight: 700 },
        { name: 'Inter', data: inter300, style: 'normal', weight: 300 },
      ],
    }
  );
}
