'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

type Intensity = 'full' | 'low' | 'off';

interface Particle {
  x: number;
  y: number;
  baseY: number;
  vx: number;
  vy: number;
  speed: number;
  phase: number;
  amplitude: number;
  radius: number;
  opacity: number;
  layer: number;
}

interface IntensityConfig {
  particles: number;
  connectionDistance: number;
  mouseRadius: number;
  mouseRepelRadius: number;
}

const INTENSITY_MAP: Record<Exclude<Intensity, 'off'>, IntensityConfig> = {
  full: {
    particles: 160,
    connectionDistance: 200,
    mouseRadius: 240,
    mouseRepelRadius: 80,
  },
  low: {
    particles: 50,
    connectionDistance: 120,
    mouseRadius: 160,
    mouseRepelRadius: 50,
  },
};

const LERP_SPEED = 0.08;
const STORAGE_KEY = 'oc-signal-flow';
const CYCLE_ORDER: Intensity[] = ['full', 'low', 'off'];

function createParticle(
  width: number,
  height: number,
  spawnAtLeft = true,
): Particle {
  const layer = Math.random();
  const depth = 0.4 + layer * 0.6;
  const y = Math.random() * height;
  return {
    x: spawnAtLeft ? -Math.random() * width * 0.2 : Math.random() * width,
    y,
    baseY: y,
    vx: 0,
    vy: 0,
    speed: (0.3 + Math.random() * 0.6) * depth,
    phase: Math.random() * Math.PI * 2,
    amplitude: (6 + Math.random() * 14) * depth,
    radius: (0.8 + Math.random() * 1.2) * depth,
    opacity: 0.25 + layer * 0.4,
    layer,
  };
}

function getDefaultIntensity(): Intensity {
  if (typeof window === 'undefined') return 'low';
  return window.innerWidth < 768 ? 'low' : 'full';
}

function useIntensityPreference() {
  const [intensity, setIntensity] = useState<Intensity>('low');
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Intensity | null;
    if (stored && CYCLE_ORDER.includes(stored)) {
      setIntensity(stored);
    } else {
      setIntensity(getDefaultIntensity());
    }
    setHydrated(true);
  }, []);

  const cycle = useCallback(() => {
    setIntensity((prev) => {
      const idx = CYCLE_ORDER.indexOf(prev);
      const next = CYCLE_ORDER[(idx + 1) % CYCLE_ORDER.length];
      localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  }, []);

  return { intensity, cycle, hydrated };
}

function IntensityIcon({ level }: { level: Intensity }) {
  const full = level === 'full';
  const low = level === 'low';
  const active = full || low;

  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="1"
        y="10"
        width="3"
        height="5"
        rx="0.75"
        fill="currentColor"
        opacity={active ? 1 : 0.25}
      />
      <rect
        x="6.5"
        y="6"
        width="3"
        height="9"
        rx="0.75"
        fill="currentColor"
        opacity={active ? 1 : 0.25}
      />
      <rect
        x="12"
        y="1"
        width="3"
        height="14"
        rx="0.75"
        fill="currentColor"
        opacity={full ? 1 : 0.25}
      />
    </svg>
  );
}

const ARIA_LABELS: Record<Intensity, string> = {
  full: 'Animation: full intensity. Click to reduce.',
  low: 'Animation: low intensity. Click to turn off.',
  off: 'Animation: off. Click to turn on.',
};

export default function SignalFlow() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const smoothMouseRef = useRef({ x: -1000, y: -1000 });
  const { intensity, cycle, hydrated } = useIntensityPreference();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const resize = () => {
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    if (intensity === 'off') {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      return;
    }

    const config = INTENSITY_MAP[intensity];
    let cancelled = false;
    let idleHandle: number | undefined;
    let timeoutHandle: ReturnType<typeof setTimeout> | undefined;

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    const onTouchMove = (e: TouchEvent) => {
      const t = e.touches[0];
      if (t) mouseRef.current = { x: t.clientX, y: t.clientY };
    };
    const onPointerLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('mouseleave', onPointerLeave);
    window.addEventListener('touchend', onPointerLeave);

    const w = () => canvas.offsetWidth;
    const h = () => canvas.offsetHeight;

    const initCanvas = () => {
      if (cancelled) return;

      particlesRef.current = Array.from({ length: config.particles }, () =>
        createParticle(w(), h(), false),
      );

      const particles = particlesRef.current;
      const sm = smoothMouseRef.current;
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches;
      const connDistSq = config.connectionDistance * config.connectionDistance;

      const drawFrame = (animated: boolean, time = 0) => {
        ctx.clearRect(0, 0, w(), h());

        sm.x += (mouseRef.current.x - sm.x) * LERP_SPEED;
        sm.y += (mouseRef.current.y - sm.y) * LERP_SPEED;

        if (animated) {
          for (const p of particles) {
            const targetY =
              p.baseY + Math.sin(time * 0.0008 + p.phase) * p.amplitude;

            p.x += p.speed;
            p.y += (targetY - p.y) * 0.05;

            const mdx = p.x - sm.x;
            const mdy = p.y - sm.y;
            const mDist = Math.sqrt(mdx * mdx + mdy * mdy);

            if (mDist < config.mouseRadius && mDist > 0) {
              const nx = mdx / mDist;
              const ny = mdy / mDist;

              if (mDist < config.mouseRepelRadius) {
                const repel = (1 - mDist / config.mouseRepelRadius) * 2.5;
                p.vx += nx * repel;
                p.vy += ny * repel;
              } else {
                const ratio =
                  (mDist - config.mouseRepelRadius) /
                  (config.mouseRadius - config.mouseRepelRadius);
                const attract = (1 - ratio) * 0.15;
                p.vx -= nx * attract;
                p.vy -= ny * attract;
              }
            }

            p.vx *= 0.92;
            p.vy *= 0.92;
            p.x += p.vx;
            p.y += p.vy;

            if (p.x > w() + 20) {
              const next = createParticle(w(), h(), true);
              Object.assign(p, next);
            }
          }
        }

        const mouseOnScreen = sm.x > -500 && sm.y > -500;

        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const a = particles[i];
            const b = particles[j];
            const dx = a.x - b.x;
            const dy = a.y - b.y;
            const distSq = dx * dx + dy * dy;
            if (distSq < connDistSq) {
              const dist = Math.sqrt(distSq);
              const proximity = 1 - dist / config.connectionDistance;
              let alpha = 0.14 * proximity;

              if (mouseOnScreen) {
                const mx = (a.x + b.x) * 0.5 - sm.x;
                const my = (a.y + b.y) * 0.5 - sm.y;
                const mDist = Math.sqrt(mx * mx + my * my);
                if (mDist < config.mouseRadius) {
                  alpha += 0.14 * (1 - mDist / config.mouseRadius);
                }
              }

              const depthAvg = (a.layer + b.layer) * 0.5;
              const thickness = 0.3 + depthAvg * 1.4 + proximity * 0.8;

              ctx.strokeStyle = `rgba(0, 229, 92, ${alpha})`;
              ctx.lineWidth = thickness;
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.stroke();
            }
          }
        }

        for (const p of particles) {
          let alpha = p.opacity;

          if (mouseOnScreen) {
            const mdx = p.x - sm.x;
            const mdy = p.y - sm.y;
            const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
            if (mDist < config.mouseRadius) {
              alpha += 0.25 * (1 - mDist / config.mouseRadius);
            }
          }

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0, 229, 92, ${alpha})`;
          ctx.fill();
        }
      };

      if (prefersReducedMotion) {
        drawFrame(false);
        return;
      }

      const loop = (time: number) => {
        if (cancelled) return;
        drawFrame(true, time);
        animationRef.current = requestAnimationFrame(loop);
      };
      animationRef.current = requestAnimationFrame(loop);
    };

    if ('requestIdleCallback' in window) {
      idleHandle = window.requestIdleCallback(initCanvas, { timeout: 2000 });
    } else {
      timeoutHandle = setTimeout(initCanvas, 100);
    }

    return () => {
      cancelled = true;
      if (idleHandle !== undefined && 'cancelIdleCallback' in window) {
        window.cancelIdleCallback(idleHandle);
      }
      if (timeoutHandle !== undefined) clearTimeout(timeoutHandle);
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('mouseleave', onPointerLeave);
      window.removeEventListener('touchend', onPointerLeave);
    };
  }, [intensity]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 h-full w-full"
        style={{ zIndex: 0 }}
        aria-hidden="true"
      />

      {hydrated && (
        <button
          type="button"
          onClick={cycle}
          aria-label={ARIA_LABELS[intensity]}
          className="fixed bottom-5 right-5 z-50 flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-150 ease-out hover:border-[var(--color-accent)]"
          style={{
            borderColor: 'var(--color-border)',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            backdropFilter: 'blur(8px)',
            color:
              intensity === 'off'
                ? 'var(--color-muted)'
                : 'var(--color-accent)',
          }}
        >
          <IntensityIcon level={intensity} />
        </button>
      )}
    </>
  );
}
