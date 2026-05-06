'use client';

import { motion } from 'framer-motion';

interface SignalLogoProps {
  variant?: 'full' | 'mark';
  className?: string;
}

export default function SignalLogo({ variant = 'full', className = '' }: SignalLogoProps) {
  const omar = "OMAR".split("");
  const corral = "CORRAL".split("");

  return (
    <motion.span 
      className={`inline-flex items-center gap-4 cursor-pointer group ${className}`} 
      aria-label="Omar Corral"
      initial="initial"
      animate="animate"
      whileHover="hover"
    >
      <div className="relative flex items-center justify-center h-10 w-10 shrink-0">
        
        {/* Ambient Glow (Activates on hover) */}
        <motion.div 
          className="absolute inset-0 bg-green-500 rounded-xl blur-xl"
          variants={{
            initial: { opacity: 0 },
            animate: { opacity: 0 },
            hover: { opacity: 0.15, transition: { duration: 0.4 } }
          }}
        />

        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full overflow-visible"
          aria-hidden="true"
        >
          {/* Base Container */}
          <motion.rect 
            x="2" y="2" width="36" height="36" rx="8" 
            fill="var(--color-accent)" 
            style={{ transformOrigin: '20px 20px' }}
            variants={{
              initial: { opacity: 0, scale: 0.8 },
              animate: { opacity: 0.05, scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
              hover: { opacity: 0.1, scale: 1.05, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }
            }}
          />

          {/* High-Tech Data Ring (Appears and spins on hover) */}
          <motion.circle
            cx="20" cy="20" r="15"
            stroke="var(--color-accent)"
            strokeWidth="0.5"
            strokeDasharray="2 4"
            style={{ transformOrigin: '20px 20px' }}
            variants={{
              initial: { opacity: 0, scale: 0.5, rotate: 0 },
              animate: { opacity: 0, scale: 0.5, rotate: 0 },
              hover: { 
                opacity: 0.6, 
                scale: 1, 
                rotate: 180, 
                transition: { 
                  opacity: { duration: 0.3 },
                  scale: { type: "spring", bounce: 0.4 },
                  rotate: { duration: 8, repeat: Infinity, ease: "linear" } 
                } 
              }
            }}
          />

          {/* Viewfinder Corners (Search / Focus) */}
          <motion.g 
            style={{ transformOrigin: '20px 20px' }}
            variants={{
              initial: { rotate: 0 },
              animate: { rotate: 0 },
              hover: { 
                rotate: 90, 
                scale: 0.8, 
                transition: { type: "spring", stiffness: 200, damping: 12 } 
              }
            }}
          >
            <g stroke="var(--color-white)" strokeWidth="1.5" strokeLinecap="round">
              <motion.path d="M 14 4 L 8 4 Q 4 4 4 8 L 4 14" variants={{ initial: { pathLength: 0 }, animate: { pathLength: 1, transition: { duration: 1, ease: "easeOut" } } }} />
              <motion.path d="M 26 4 L 32 4 Q 36 4 36 8 L 36 14" variants={{ initial: { pathLength: 0 }, animate: { pathLength: 1, transition: { duration: 1, ease: "easeOut" } } }} />
              <motion.path d="M 36 26 L 36 32 Q 36 36 32 36 L 26 36" variants={{ initial: { pathLength: 0 }, animate: { pathLength: 1, transition: { duration: 1, ease: "easeOut" } } }} />
              <motion.path d="M 4 26 L 4 32 Q 4 36 8 36 L 14 36" variants={{ initial: { pathLength: 0 }, animate: { pathLength: 1, transition: { duration: 1, ease: "easeOut" } } }} />
            </g>
          </motion.g>

          {/* Center Spark (AI / Insight) */}
          <motion.path 
            d="M 20 8 Q 20 20 32 20 Q 20 20 20 32 Q 20 20 8 20 Q 20 20 20 8 Z" 
            style={{ transformOrigin: '20px 20px' }}
            variants={{
              initial: { scale: 0, opacity: 0, fill: "var(--color-accent)", strokeOpacity: 0 },
              animate: { 
                scale: 1, opacity: 1, fill: "var(--color-accent)", strokeOpacity: 0,
                transition: { duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] } 
              },
              hover: { 
                scale: 1.3, 
                rotate: -90, 
                fillOpacity: 0, 
                strokeOpacity: 1,
                stroke: "var(--color-accent)", 
                strokeWidth: 1,
                transition: { type: "spring", stiffness: 200, damping: 15 } 
              }
            }}
          />
          
          {/* Inner Core Dot */}
          <motion.circle 
            cx="20" cy="20" r="2" 
            variants={{
              initial: { scale: 0, fill: "var(--color-white)" },
              animate: { scale: 1, fill: "var(--color-white)", transition: { delay: 0.5 } },
              hover: { 
                fill: "var(--color-accent)",
                scale: [1, 1.5, 1],
                transition: { duration: 1, repeat: Infinity }
              }
            }}
          />
        </svg>
      </div>

      {variant === 'full' && (
        <motion.span 
          className="flex items-center gap-2 text-lg md:text-xl tracking-[0.25em] uppercase"
          variants={{
            hover: { x: 6, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }
          }}
        >
          {/* OMAR (Bold, White) */}
          <motion.span 
            className="font-bold text-white flex"
            variants={{
              hover: { transition: { staggerChildren: 0.04 } }
            }}
          >
            {omar.map((letter, i) => (
              <motion.span 
                key={i} 
                className="inline-block"
                variants={{
                  initial: { opacity: 0, y: 10 },
                  animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] } },
                  hover: { 
                    y: [0, -4, 0], 
                    color: ["#ffffff", "var(--color-accent)", "#ffffff"],
                    transition: { duration: 0.4 } 
                  }
                }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.span>

          {/* CORRAL (Light, Slate) */}
          <motion.span 
            className="font-light text-slate-400 flex"
            variants={{
              hover: { transition: { staggerChildren: 0.04, delayChildren: 0.15 } }
            }}
          >
            {corral.map((letter, i) => (
              <motion.span 
                key={i} 
                className="inline-block"
                variants={{
                  initial: { opacity: 0, y: 10 },
                  animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 + (i * 0.05), ease: [0.22, 1, 0.36, 1] } },
                  hover: { 
                    y: [0, -4, 0], 
                    color: ["#94a3b8", "#ffffff", "#ffffff"], // slate-400 to white
                    transition: { duration: 0.4 } 
                  }
                }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.span>
        </motion.span>
      )}
    </motion.span>
  );
}
