'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { useDeviceDetection, getAnimationConfig } from '@/hooks/useDeviceDetection';

// Algorithm visualization data structures
const algorithmNodes = [
  { id: 1, x: 200, y: 150, value: '12', type: 'array' },
  { id: 2, x: 280, y: 150, value: '8', type: 'array' },
  { id: 3, x: 360, y: 150, value: '15', type: 'array' },
  { id: 4, x: 440, y: 150, value: '3', type: 'array' },
  { id: 5, x: 520, y: 150, value: '9', type: 'array' },
  { id: 6, x: 600, y: 300, value: 'SEO', type: 'tree' },
  { id: 7, x: 550, y: 370, value: 'KW', type: 'tree' },
  { id: 8, x: 650, y: 370, value: 'Analytics', type: 'tree' },
  { id: 9, x: 800, y: 200, value: 'Page Rank', type: 'graph' },
  { id: 10, x: 900, y: 250, value: 'Backlinks', type: 'graph' }
];

const codeSnippets = [
  { code: 'fetch("/api/keywords")', x: 100, y: 400, delay: 0 },
  { code: 'analyze(seoData)', x: 750, y: 120, delay: 2 },
  { code: 'optimize.meta()', x: 150, y: 600, delay: 4 },
  { code: 'rank.increase()', x: 850, y: 450, delay: 6 },
  { code: 'traffic.boost()', x: 950, y: 350, delay: 8 }
];

interface AlgorithmBackgroundProps {
  opacity?: string;
  className?: string;
}

export default function AlgorithmBackground({ 
  opacity = 'opacity-10', 
  className = '' 
}: AlgorithmBackgroundProps) {
  const [algorithmStep, setAlgorithmStep] = useState(0);
  const deviceInfo = useDeviceDetection();
  const animConfig = getAnimationConfig(deviceInfo);
  
  const { scrollYProgress } = useScroll();
  
  // Always call hooks - React requirement
  const parallaxY1 = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const parallaxY2 = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const parallaxY3 = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);

  // Algorithm simulation - only on desktop for performance
  useEffect(() => {
    if (!animConfig.enableBackgroundAnimations) {
      return;
    }
    
    const interval = setInterval(() => {
      setAlgorithmStep(prev => (prev + 1) % 8);
    }, 3000); // Slower on mobile/tablet
    return () => clearInterval(interval);
  }, [animConfig.enableBackgroundAnimations]);

  // Return static background for mobile/low-performance devices
  if (!animConfig.enableBackgroundAnimations) {
    return (
      <div className={`absolute inset-0 ${opacity} ${className}`} suppressHydrationWarning>
        {/* Simple static pattern for mobile */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-amber-400 rounded-full"></div>
          <div className="absolute bottom-40 left-32 w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-2 h-2 bg-amber-500 rounded-full"></div>
          {/* Minimal static code elements */}
          <div className="absolute top-1/3 left-10 text-blue-700/20 font-mono text-xs">
            SEO.optimize()
          </div>
          <div className="absolute bottom-1/3 right-10 text-amber-400/20 font-mono text-xs">
            analytics.track()
          </div>
        </div>
      </div>
    );
  }

  return (
    <div suppressHydrationWarning>
      {/* Working Algorithm Background */}
      <motion.div
        className={`absolute inset-0 ${opacity} ${className}`}
        style={{ 
          y: parallaxY1
        }}
      >
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          {/* Binary Tree Visualization */}
          <g className="text-blue-700 fill-current">
            {/* Tree connections */}
            <motion.line
              x1="600" y1="300" x2="550" y2="370"
              stroke="currentColor"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: algorithmStep >= 1 ? 1 : 0 }}
              transition={{ duration: 0.8 }}
            />
            <motion.line
              x1="600" y1="300" x2="650" y2="370"
              stroke="currentColor"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: algorithmStep >= 2 ? 1 : 0 }}
              transition={{ duration: 0.8 }}
            />

            {/* Tree nodes */}
            {algorithmNodes.filter(node => node.type === 'tree').map((node) => (
              <motion.g key={node.id}>
                <motion.circle
                  cx={node.x}
                  cy={node.y}
                  r="20"
                  fill="currentColor"
                  initial={{ scale: 0 }}
                  animate={{ scale: algorithmStep >= node.id - 5 ? 1 : 0 }}
                  transition={{ duration: 0.5, delay: (node.id - 6) * 0.3 }}
                />
                <motion.text
                  x={node.x}
                  y={node.y + 5}
                  textAnchor="middle"
                  fontSize="10"
                  fill="white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: algorithmStep >= node.id - 5 ? 1 : 0 }}
                  transition={{ delay: (node.id - 6) * 0.3 + 0.5 }}
                >
                  {node.value}
                </motion.text>
              </motion.g>
            ))}
          </g>

          {/* Sorting Algorithm Visualization */}
          <g className="text-amber-400 fill-current">
            {algorithmNodes.filter(node => node.type === 'array').map((node, index) => (
              <motion.g key={node.id}>
                <motion.rect
                  x={node.x - 15}
                  y={node.y - 30}
                  width="30"
                  height={parseInt(node.value) * 3}
                  fill="currentColor"
                  initial={{ scaleY: 0 }}
                  animate={{ 
                    scaleY: 1,
                    x: algorithmStep >= 4 ? 
                      200 + index * 40 + Math.sin(algorithmStep * 0.5) * 20 : 
                      node.x - 15
                  }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />
                <motion.text
                  x={node.x}
                  y={node.y + 30}
                  textAnchor="middle"
                  fontSize="12"
                  fill="currentColor"
                  animate={{
                    x: algorithmStep >= 4 ? 
                      215 + index * 40 + Math.sin(algorithmStep * 0.5) * 20 : 
                      node.x
                  }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                >
                  {node.value}
                </motion.text>
              </motion.g>
            ))}
          </g>

          {/* Network Graph - SEO Link Structure */}
          <g className="text-blue-600 fill-current">
            {algorithmNodes.filter(node => node.type === 'graph').map((node, index) => (
              <motion.g key={node.id}>
                <motion.circle
                  cx={node.x}
                  cy={node.y}
                  r="15"
                  fill="currentColor"
                  initial={{ scale: 0 }}
                  animate={{ 
                    scale: algorithmStep >= 6 ? 1 : 0,
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ 
                    scale: { duration: 0.5, delay: index * 0.2 },
                    opacity: { duration: 2, repeat: Infinity, delay: index * 0.5 }
                  }}
                />
                <motion.text
                  x={node.x}
                  y={node.y + 25}
                  textAnchor="middle"
                  fontSize="8"
                  fill="currentColor"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: algorithmStep >= 6 ? 1 : 0 }}
                  transition={{ delay: index * 0.2 + 0.5 }}
                >
                  {node.value}
                </motion.text>
              </motion.g>
            ))}
            
            {/* Network connections */}
            <motion.line
              x1="800" y1="200" x2="900" y2="250"
              stroke="currentColor"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: algorithmStep >= 7 ? 1 : 0 }}
              transition={{ duration: 1 }}
            />
          </g>
        </svg>
      </motion.div>

      {/* Floating Code Execution */}
      <motion.div
        className={`absolute inset-0 opacity-20 ${className}`}
        style={{ y: parallaxY2 }}
      >
        {codeSnippets.map((snippet, i) => (
          <motion.div
            key={`code-${i}`}
            className="absolute text-blue-700/60 font-mono text-sm select-none bg-slate-800/30 px-2 py-1 rounded border border-blue-700/20"
            style={{
              top: `${snippet.y}px`,
              left: `${snippet.x}px`,
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: [0, 0.8, 0.8, 0],
              scale: [0.8, 1, 1, 0.8],
              y: [0, -20, -20, -40]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              delay: snippet.delay,
              ease: "easeInOut"
            }}
          >
            <FontAwesomeIcon icon={faCode} className="mr-2 text-amber-400" />
            {snippet.code}
          </motion.div>
        ))}
      </motion.div>

      {/* Data Flow Connections */}
      <motion.div
        className={`absolute inset-0 opacity-30 ${className}`}
        style={{ y: parallaxY3 }}
      >
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          {/* Data flow paths */}
          <motion.path
            d="M200,200 Q400,100 600,200 T1000,200"
            fill="none"
            stroke="#1E40AF"
            strokeWidth="2"
            strokeDasharray="5,5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M100,400 Q500,300 800,400 T1100,500"
            fill="none"
            stroke="#FBBF24"
            strokeWidth="2"
            strokeDasharray="5,5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          
          {/* Moving data packets with safe initial values */}
          <motion.circle
            cx="200"
            cy="200"
            r="4"
            fill="#1E40AF"
            animate={{
              cx: [200, 400, 600, 800, 1000, 200],
              cy: [200, 100, 200, 150, 200, 200]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
          <motion.circle
            cx="100"
            cy="400"
            r="3"
            fill="#FBBF24"
            animate={{
              cx: [100, 300, 500, 800, 1100, 100],
              cy: [400, 300, 400, 450, 500, 400]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 2
            }}
          />
        </svg>
      </motion.div>
    </div>
  );
}
