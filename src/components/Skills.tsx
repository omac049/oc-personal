'use client';

import { motion, useScroll, useTransform, AnimatePresence, useAnimationControls } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCog, faBrain, faChartLine, faGlobe, faShoppingCart, faLightbulb,
  faCrown, faInfinity, faWandMagicSparkles, faWandSparkles, faGem, faStar,
  faAtom, faHeart, faRocket, faMagic, faPlay, faPause, faEye, faEyeSlash,
  faSearchPlus, faSearchMinus, faExpand, faCompress, faBars, faCube
} from '@fortawesome/free-solid-svg-icons';
import SkillModal from './SkillModal';
import AlgorithmBackground from './AlgorithmBackground';
import { useRef, useState, useEffect, useCallback } from 'react';

// Enhanced skill universe data with realistic orbital mechanics
const skillUniverse = [
  {
    id: 'seo-core',
    name: 'SEO Mastery',
    icon: faCrown,
    description: 'The heart of search optimization',
    color: 'from-amber-400 to-amber-600',
    size: 'large',
    orbit: 0,
    distance: 120,
    speed: 25,
    skills: ['Technical SEO', 'On-Page Optimization', 'Link Building', 'Keyword Research']
  },
  {
    id: 'ai-brain',
    name: 'AI Integration',
    icon: faBrain,
    description: 'Cutting-edge AI-powered strategies',
    color: 'from-purple-400 to-purple-600',
    size: 'large',
    orbit: 45,
    distance: 160,
    speed: 35,
    skills: ['ChatGPT Integration', 'LLM Optimization', 'AI Content Creation', 'Machine Learning']
  },
  {
    id: 'analytics-insights',
    name: 'Data Analytics',
    icon: faChartLine,
    description: 'Deep insights from data patterns',
    color: 'from-blue-400 to-blue-600',
    size: 'medium',
    orbit: 90,
    distance: 200,
    speed: 45,
    skills: ['Google Analytics', 'Search Console', 'Performance Tracking', 'ROI Analysis']
  },
  {
    id: 'content-magic',
    name: 'Content Strategy',
    icon: faWandMagicSparkles,
    description: 'Magical content that converts',
    color: 'from-green-400 to-green-600',
    size: 'medium',
    orbit: 135,
    distance: 150,
    speed: 30,
    skills: ['Content Optimization', 'Copywriting', 'User Intent', 'Content Planning']
  },
  {
    id: 'technical-wizardry',
    name: 'Technical Excellence',
    icon: faCog,
    description: 'Advanced technical optimization',
    color: 'from-cyan-400 to-cyan-600',
    size: 'medium',
    orbit: 180,
    distance: 180,
    speed: 40,
    skills: ['Core Web Vitals', 'Schema Markup', 'Site Speed', 'Mobile Optimization']
  },
  {
    id: 'global-reach',
    name: 'International SEO',
    icon: faGlobe,
    description: 'Worldwide optimization expertise',
    color: 'from-pink-400 to-pink-600',
    size: 'small',
    orbit: 225,
    distance: 240,
    speed: 50,
    skills: ['Multilingual SEO', 'Hreflang', 'Cultural Adaptation', 'Global Strategy']
  },
  {
    id: 'ecommerce-power',
    name: 'E-commerce SEO',
    icon: faShoppingCart,
    description: 'Driving online sales success',
    color: 'from-orange-400 to-orange-600',
    size: 'small',
    orbit: 270,
    distance: 100,
    speed: 20,
    skills: ['Product Optimization', 'Category Pages', 'Shopping Feeds', 'Conversion Focus']
  },
  {
    id: 'innovation-spark',
    name: 'Innovation',
    icon: faLightbulb,
    description: 'Always ahead of the curve',
    color: 'from-indigo-400 to-indigo-600',
    size: 'small',
    orbit: 315,
    distance: 280,
    speed: 55,
    skills: ['Emerging Trends', 'Beta Testing', 'Experimental SEO', 'Future-Proofing']
  }
];

export default function Skills() {
  const containerRef = useRef<HTMLElement>(null);
  const [selectedSkill, setSelectedSkill] = useState<{
    name: string;
    icon: string;
    proficiency: number;
  } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [selectedPlanet, setSelectedPlanet] = useState<string | null>(null);
  
  // SEO Solar System Control States
  const [controlsOpen, setControlsOpen] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState(1); // 0.25, 0.5, 1, 2, 4
  const [viewMode, setViewMode] = useState<'2d' | '3d'>('2d');
  const [planetSize, setPlanetSize] = useState(1); // 0.7, 1, 1.3, 1.6
  const [orbitalDistance, setOrbitalDistance] = useState(1); // 0.7, 1, 1.3
  const [showRings, setShowRings] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const centerY = useTransform(scrollYProgress, [0, 1], ['20%', '80%']);

  useEffect(() => {
    setMounted(true);
    
    // Keyboard shortcuts
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        e.preventDefault();
        setIsPaused(!isPaused);
      } else if (e.code === 'KeyC') {
        setControlsOpen(!controlsOpen);
      } else if (e.code === 'KeyR') {
        setShowRings(!showRings);
      }
    };
    
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isPaused, controlsOpen, showRings]);

  const openSkillModal = useCallback((skill: { name: string; icon: string; proficiency: number }) => {
    setSelectedSkill(skill);
    setIsModalOpen(true);
  }, []);

  const closeSkillModal = useCallback(() => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedSkill(null), 300);
  }, []);

  // Simplified Space Background - Optimized for Performance
  const SpaceBackground = () => (
    <div className="absolute inset-0 overflow-hidden">
      {/* Site-consistent gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900" />
      
      {/* Reduced stars for better performance */}
      {[...Array(80)].map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute rounded-full bg-white/60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
          }}
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Simplified nebula effect */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            'radial-gradient(ellipse at 30% 40%, rgba(96, 165, 246, 0.1) 0%, transparent 60%)',
            'radial-gradient(ellipse at 70% 60%, rgba(139, 92, 246, 0.15) 0%, transparent 60%)',
            'radial-gradient(ellipse at 30% 40%, rgba(96, 165, 246, 0.1) 0%, transparent 60%)',
          ]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Reduced cosmic dust */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`dust-${i}`}
          className="absolute rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-sm"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
          }}
          animate={{
            x: [0, Math.random() * 60 - 30],
            y: [0, Math.random() * 60 - 30],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: Math.random() * 8 + 8,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );

  // Simplified Cosmic Particles - Performance Optimized
  const CosmicParticles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, Math.random() * 20 - 10, 0],
            rotate: [0, 180],
            opacity: [0.4, 0.8, 0.4],
            scale: [0.5, 1.2, 0.5]
          }}
          transition={{
            duration: Math.random() * 6 + 6,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut"
          }}
        >
          <FontAwesomeIcon 
            icon={[faWandSparkles, faGem, faStar][Math.floor(Math.random() * 3)]} 
            className="text-blue-300/60 text-sm" 
            style={{
              filter: 'drop-shadow(0 0 6px rgba(59, 130, 246, 0.4))',
            }}
          />
        </motion.div>
      ))}
    </div>
  );

  // Aligned Circular Orbital Rings - Perfect Match with Planet Paths
  const OrbitalRings = () => (
    <motion.div 
      className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      style={{ 
        y: centerY,
      }}
      animate={{
        opacity: showRings ? 1 : 0,
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {skillUniverse.map((skill, index) => {
        // Calculate exact same orbital radius as planets use
        const orbitalRadius = skill.distance * orbitalDistance;
        
        return (
          <motion.div
            key={`orbit-${skill.id}`}
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: showRings ? 1 : 0, scale: 1 }}
            transition={{ duration: 1.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Perfectly Aligned Orbital Ring */}
            <motion.div
              className="border rounded-full absolute"
              style={{
                width: `${orbitalRadius * 2}px`,
                height: `${orbitalRadius * 2}px`,
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                borderColor: selectedPlanet === skill.id ? 'rgba(96, 165, 246, 0.6)' : 'rgba(255, 255, 255, 0.15)',
                borderWidth: selectedPlanet === skill.id ? '2px' : '1px',
              }}
              animate={{
                borderColor: selectedPlanet === skill.id 
                  ? [
                      'rgba(96, 165, 246, 0.6)',
                      'rgba(139, 92, 246, 0.8)',
                      'rgba(96, 165, 246, 0.6)'
                    ]
                  : 'rgba(255, 255, 255, 0.15)',
                opacity: showRings ? (selectedPlanet === skill.id ? 0.8 : 0.4) : 0,
              }}
              transition={{
                borderColor: {
                  duration: 2,
                  repeat: selectedPlanet === skill.id ? Infinity : 0,
                  ease: "easeInOut"
                },
                opacity: { duration: 0.6 }
              }}
            />

            {/* Aligned Path Markers */}
            {showRings && [...Array(12)].map((_, markerIndex) => (
              <motion.div
                key={markerIndex}
                className="absolute w-1 h-1 bg-white/40 rounded-full"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
                animate={{
                  x: Math.cos((markerIndex * 30) * Math.PI / 180) * orbitalRadius,
                  y: Math.sin((markerIndex * 30) * Math.PI / 180) * orbitalRadius,
                  opacity: isPaused ? 0.6 : [0.2, 0.6, 0.2],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  opacity: {
                    duration: isPaused ? 0 : 4,
                    repeat: isPaused ? 0 : Infinity,
                    delay: markerIndex * 0.2
                  },
                  scale: {
                    duration: isPaused ? 0 : 3,
                    repeat: isPaused ? 0 : Infinity,
                    delay: markerIndex * 0.1
                  }
                }}
              />
            ))}
          </motion.div>
        );
      })}
    </motion.div>
  );

  // PROPER ORBITAL MECHANICS - Planets Actually Orbit Around the Sun
  const SkillPlanet = ({ skill, index }: { skill: typeof skillUniverse[0], index: number }) => {
    const basePlanetSize = skill.size === 'large' ? 24 : skill.size === 'medium' ? 18 : 14;
    const actualPlanetSize = basePlanetSize * planetSize;
    const planetSizeClass = `w-${Math.round(actualPlanetSize)} h-${Math.round(actualPlanetSize)}`;
    const iconSize = skill.size === 'large' ? 'text-2xl' : skill.size === 'medium' ? 'text-xl' : 'text-lg';
    const isSelected = selectedPlanet === skill.id;
    
    // Calculate proper orbital position using trigonometry
    const currentAngle = skill.orbit; // Starting angle
    const orbitalRadius = skill.distance * orbitalDistance;
    
    return (
      <motion.div
        className="absolute cursor-pointer group z-30"
        style={{
          // Position at the center (where the sun is)
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          // Rotate the entire container around the center point
          rotate: isPaused ? currentAngle : [currentAngle, currentAngle + 360],
        }}
        transition={{
          rotate: {
            duration: isPaused ? 0 : skill.speed / animationSpeed,
            repeat: isPaused ? 0 : Infinity,
            ease: "linear"
          }
        }}
        whileHover={{ 
          scale: 1.1,
          zIndex: 50,
        }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          setSelectedPlanet(isSelected ? null : skill.id);
        }}
      >
        {/* Planet positioned at orbital distance */}
        <motion.div
          className="absolute"
          style={{
            // Position planet at orbital distance from center
            left: `${orbitalRadius}px`,
            top: '0px',
            transform: 'translate(-50%, -50%)',
            transformStyle: viewMode === '3d' ? 'preserve-3d' : 'flat',
            rotateY: viewMode === '3d' ? 30 : 0,
          }}
          animate={{
            rotateY: viewMode === '3d' ? [30, 60, 30] : 0,
          }}
          transition={{
            rotateY: {
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          {/* Planet Atmosphere */}
          <motion.div
            className={`absolute inset-0 rounded-full bg-gradient-to-br ${skill.color} blur-lg`}
            style={{
              width: `${actualPlanetSize * 4}px`,
              height: `${actualPlanetSize * 4}px`,
            }}
            animate={{
              scale: isPaused 
                ? (isSelected ? 1.3 : 1.1) 
                : (isSelected ? [1, 1.6, 1] : [1, 1.3, 1]),
              opacity: isPaused 
                ? (isSelected ? 0.5 : 0.3) 
                : (isSelected ? [0.4, 0.7, 0.4] : [0.2, 0.4, 0.2])
            }}
            transition={{
              duration: isPaused ? 0 : 3 / animationSpeed,
              repeat: isPaused ? 0 : Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Planet Body */}
                     <motion.div
             className={`relative bg-gradient-to-br ${skill.color} rounded-full flex items-center justify-center shadow-xl border border-white/20 backdrop-blur-sm`}
             style={{
               width: `${actualPlanetSize * 4}px`,
               height: `${actualPlanetSize * 4}px`,
               filter: `drop-shadow(0 0 ${15 * planetSize}px rgba(255, 255, 255, 0.2))`,
             }}
             animate={{
               boxShadow: isPaused 
                 ? (isSelected ? "0 0 40px rgba(96,165,246,0.6)" : "0 0 20px rgba(255,255,255,0.3)")
                 : (isSelected 
                   ? ["0 0 30px rgba(96,165,246,0.5)", "0 0 50px rgba(96,165,246,0.8)", "0 0 30px rgba(96,165,246,0.5)"]
                   : ["0 0 15px rgba(255,255,255,0.2)", "0 0 25px rgba(255,255,255,0.4)", "0 0 15px rgba(255,255,255,0.2)"]),
               scale: isPaused 
                 ? (isSelected ? 1.05 : 1.02) 
                 : (isSelected ? [1, 1.1, 1] : [1, 1.05, 1]),
             }}
             transition={{
               duration: isPaused ? 0 : 2.5 / animationSpeed,
               repeat: isPaused ? 0 : Infinity,
               ease: "easeInOut"
             }}
          >
            <FontAwesomeIcon 
              icon={skill.icon} 
              className={`text-white ${iconSize} drop-shadow-lg`}
              style={{
                fontSize: `${actualPlanetSize * 0.6}px`
              }}
            />
            
            {/* Surface Details */}
            <div className="absolute inset-0 rounded-full overflow-hidden opacity-20">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/20" />
            </div>
          </motion.div>

          {/* Orbiting Moons for large planets */}
          {skill.size === 'large' && (
            <motion.div
              className="absolute w-2 h-2 bg-white/70 rounded-full"
              style={{
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
              }}
              animate={{
                rotate: isPaused ? [0] : [0, 360],
              }}
              transition={{
                rotate: {
                  duration: isPaused ? 0 : 6 / animationSpeed,
                  repeat: isPaused ? 0 : Infinity,
                  ease: "linear"
                }
              }}
            >
              <motion.div 
                className="absolute w-2 h-2 bg-white/70 rounded-full shadow-lg"
                style={{
                  left: `${35 * planetSize}px`,
                  top: '0px',
                  transform: 'translate(-50%, -50%)',
                }}
                animate={{
                  boxShadow: isPaused 
                    ? "0 0 5px rgba(255, 255, 255, 0.4)"
                    : ["0 0 3px rgba(255,255,255,0.3)", "0 0 8px rgba(255,255,255,0.6)", "0 0 3px rgba(255,255,255,0.3)"]
                }}
                transition={{
                  duration: isPaused ? 0 : 4 / animationSpeed,
                  repeat: isPaused ? 0 : Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          )}

          {/* Selection Particles */}
          {isSelected && [...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-300 rounded-full"
              style={{
                left: '50%',
                top: '50%'
              }}
              animate={{
                x: [0, Math.cos((i * 45) * Math.PI / 180) * 60],
                y: [0, Math.sin((i * 45) * Math.PI / 180) * 60],
                opacity: [1, 0],
                scale: [1, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeOut"
              }}
            />
          ))}

          {/* Planet Info Label */}
          <motion.div
            className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-white bg-slate-800/80 backdrop-blur-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-white/10"
            initial={{ opacity: 0, y: 10 }}
            whileHover={{ opacity: 1, y: 0 }}
          >
            {skill.name}
          </motion.div>
        </motion.div>
      </motion.div>
    );
  };

  // Simplified Skill Card - Performance Optimized
  const SkillCard = () => {
    const selectedSkillData = skillUniverse.find(skill => skill.id === selectedPlanet);
    if (!selectedSkillData) return null;

    return (
      <motion.div
        className="fixed bottom-24 left-1/2 transform -translate-x-1/2 z-[60]"
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 50, scale: 0.95 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div 
          className="bg-slate-800/95 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-2xl min-w-[350px] max-w-[450px]"
          style={{
            background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.95), rgba(51, 65, 85, 0.95))',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(96, 165, 246, 0.1)'
          }}
        >
          {/* Card Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 bg-gradient-to-br ${selectedSkillData.color} rounded-xl flex items-center justify-center shadow-lg`}>
                <FontAwesomeIcon 
                  icon={selectedSkillData.icon} 
                  className="text-white text-lg" 
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">{selectedSkillData.name}</h3>
                <p className="text-gray-300 text-sm">Expert Level Mastery</p>
              </div>
            </div>
            <motion.button
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center text-gray-300 hover:text-white text-sm"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSelectedPlanet(null)}
            >
              ✕
            </motion.button>
          </div>

          {/* Card Description */}
          <p className="text-gray-200 mb-4">
            {selectedSkillData.description}
          </p>

          {/* Skills Grid */}
          <div className="space-y-2">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wide opacity-80">
              Core Capabilities
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {selectedSkillData.skills.map((skillName, i) => (
                <motion.div
                  key={i}
                  className={`bg-gradient-to-r ${selectedSkillData.color} text-white px-3 py-2 rounded-lg font-medium text-sm shadow-lg text-center`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.02, y: -1 }}
                >
                  {skillName}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mt-6">
            <motion.button
              className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white py-2 rounded-lg font-semibold text-sm transition-all duration-300"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                const mockSkill = {
                  name: selectedSkillData.name,
                  icon: 'robot',
                  proficiency: 95
                };
                openSkillModal(mockSkill);
                setSelectedPlanet(null);
              }}
            >
              View Details
            </motion.button>
            <motion.button
              className="flex-1 bg-white/10 hover:bg-white/20 text-white py-2 rounded-lg font-semibold text-sm transition-all duration-300 border border-white/20"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Let&apos;s Discuss
            </motion.button>
          </div>
        </div>
      </motion.div>
    );
  };

  // Fixed Central SEO Sun 
  const SEOSun = () => (
    <motion.div
      className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
      style={{ 
        y: centerY,
      }}
      animate={{
        rotate: isPaused ? 0 : 360,
        scale: isPaused ? 1.02 : [1, 1.05, 1],
      }}
      transition={{
        rotate: {
          duration: isPaused ? 0 : 50 / animationSpeed,
          repeat: isPaused ? 0 : Infinity,
          ease: "linear"
        },
        scale: {
          duration: isPaused ? 0 : 6 / animationSpeed,
          repeat: isPaused ? 0 : Infinity,
          ease: "easeInOut"
        }
      }}
    >
      {/* Simplified Solar Corona */}
      <motion.div
        className="absolute inset-0 w-32 h-32 bg-gradient-radial from-amber-300/30 via-orange-400/20 to-transparent rounded-full blur-2xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Simplified Solar Flares */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-16 bg-gradient-to-t from-amber-400/60 to-transparent blur-sm"
          style={{
            left: '50%',
            top: '50%',
            transformOrigin: '50% 100%',
            transform: `translate(-50%, -100%) rotate(${i * 60}deg)`,
          }}
          animate={{
            scaleY: [0.5, 1.2, 0.8, 1, 0.5],
            opacity: [0.4, 0.7, 0.5, 0.6, 0.4]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Main Sun Body */}
      <motion.div
        className="relative w-20 h-20 bg-gradient-to-br from-amber-300 via-orange-400 to-amber-500 rounded-full flex items-center justify-center shadow-xl border-2 border-amber-300/50"
        whileHover={{ scale: 1.1 }}
        animate={{
          boxShadow: [
            "0 0 20px rgba(251, 191, 36, 0.5)",
            "0 0 40px rgba(251, 191, 36, 0.8)",
            "0 0 20px rgba(251, 191, 36, 0.5)"
          ]
        }}
        transition={{
          boxShadow: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
        style={{
          background: 'radial-gradient(circle at 30% 30%, #fbbf24, #f59e0b, #d97706)',
          filter: 'drop-shadow(0 0 25px rgba(251, 191, 36, 0.6))',
        }}
      >
        <FontAwesomeIcon icon={faInfinity} className="text-white text-2xl drop-shadow-lg" />
      </motion.div>

      {/* Simplified Solar Particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-amber-400 rounded-full"
          style={{
            left: '50%',
            top: '50%'
          }}
          animate={{
            x: [0, Math.cos((i * 30) * Math.PI / 180) * (60 + Math.random() * 20)],
            y: [0, Math.sin((i * 30) * Math.PI / 180) * (60 + Math.random() * 20)],
            opacity: [1, 0.2, 0],
            scale: [1, 0.3, 0]
          }}
          transition={{
            duration: 3 + Math.random(),
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeOut"
          }}
        />
      ))}
    </motion.div>
  );

  // SEO Solar System Control Panel - Fixed positioning and visibility
  const ControlPanel = () => (
    <motion.div
      className="fixed top-20 right-4 z-50"
      initial={{ x: 350, opacity: 0, scale: 0.9 }}
      animate={{ 
        x: controlsOpen ? 0 : 350, 
        opacity: controlsOpen ? 1 : 0,
        scale: controlsOpen ? 1 : 0.9
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      style={{
        pointerEvents: controlsOpen ? 'auto' : 'none'
      }}
    >
      <motion.div
        className="bg-slate-800/95 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-2xl min-w-[300px]"
        style={{
          background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.95), rgba(51, 65, 85, 0.95))',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(96, 165, 246, 0.1)'
        }}
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-white font-semibold flex items-center gap-2">
            <FontAwesomeIcon icon={faInfinity} className="text-amber-400" />
            SEO Solar System
          </h3>
          <motion.button
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center text-gray-300 hover:text-white text-sm"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setControlsOpen(false)}
          >
            ✕
          </motion.button>
        </div>

        <div className="space-y-5">
          {/* Animation Control */}
          <div>
            <label className="block text-gray-300 text-sm mb-2 font-medium">Animation</label>
            <motion.button
              className={`w-full py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                isPaused ? 'bg-red-500/20 text-red-300 border border-red-500/30' : 'bg-green-500/20 text-green-300 border border-green-500/30'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsPaused(!isPaused)}
            >
              <FontAwesomeIcon icon={isPaused ? faPlay : faPause} className="mr-2" />
              {isPaused ? 'Start Orbiting' : 'Pause Orbits'}
            </motion.button>
          </div>

          {/* Speed Control */}
          <div>
            <label className="block text-gray-300 text-sm mb-2 font-medium">Orbital Speed: {animationSpeed}x</label>
            <div className="grid grid-cols-5 gap-1">
              {[0.25, 0.5, 1, 2, 4].map((speed) => (
                <motion.button
                  key={speed}
                  className={`py-2 px-2 rounded-lg text-xs font-medium transition-all ${
                    animationSpeed === speed 
                      ? 'bg-blue-500/30 text-blue-300 border border-blue-500/50' 
                      : 'bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setAnimationSpeed(speed)}
                >
                  {speed}x
                </motion.button>
              ))}
            </div>
          </div>

          {/* View Mode (2D/3D) */}
          <div>
            <label className="block text-gray-300 text-sm mb-2 font-medium">View Mode</label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { value: '2d' as const, label: '2D View', icon: faExpand },
                { value: '3d' as const, label: '3D View', icon: faCube }
              ].map((mode) => (
                <motion.button
                  key={mode.value}
                  className={`py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                    viewMode === mode.value 
                      ? 'bg-amber-500/30 text-amber-300 border border-amber-500/50' 
                      : 'bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setViewMode(mode.value)}
                >
                  <FontAwesomeIcon icon={mode.icon} className="mr-1" />
                  {mode.label}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Planet Size Control */}
          <div>
            <label className="block text-gray-300 text-sm mb-2 font-medium">Planet Size: {Math.round(planetSize * 100)}%</label>
            <div className="grid grid-cols-4 gap-1">
              {[0.7, 1, 1.3, 1.6].map((size) => (
                <motion.button
                  key={size}
                  className={`py-2 px-2 rounded-lg text-xs font-medium transition-all ${
                    planetSize === size 
                      ? 'bg-green-500/30 text-green-300 border border-green-500/50' 
                      : 'bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setPlanetSize(size)}
                >
                  {Math.round(size * 100)}%
                </motion.button>
              ))}
            </div>
          </div>

          {/* Orbital Distance Control */}
          <div>
            <label className="block text-gray-300 text-sm mb-2 font-medium">Orbital Distance: {Math.round(orbitalDistance * 100)}%</label>
            <div className="grid grid-cols-3 gap-1">
              {[0.7, 1, 1.3].map((distance) => (
                <motion.button
                  key={distance}
                  className={`py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                    orbitalDistance === distance 
                      ? 'bg-purple-500/30 text-purple-300 border border-purple-500/50' 
                      : 'bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setOrbitalDistance(distance)}
                >
                  {distance === 0.7 ? 'Close' : distance === 1 ? 'Normal' : 'Far'}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Show Rings Toggle */}
          <div>
            <motion.button
              className={`w-full py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                showRings 
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' 
                  : 'bg-white/5 text-gray-400 border border-white/10'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowRings(!showRings)}
            >
              <FontAwesomeIcon icon={showRings ? faEye : faEyeSlash} className="mr-2" />
              {showRings ? 'Hide' : 'Show'} Orbital Rings
            </motion.button>
          </div>
        </div>

        {/* Keyboard Shortcuts */}
        <div className="mt-6 pt-4 border-t border-white/10">
          <div className="text-xs text-gray-400">
            <div className="flex justify-between mb-1">
              <span>Space:</span>
              <span>Pause/Play</span>
            </div>
            <div className="flex justify-between mb-1">
              <span>C:</span>
              <span>Toggle Controls</span>
            </div>
            <div className="flex justify-between">
              <span>R:</span>
              <span>Toggle Rings</span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  // Control Toggle Button - Fixed with better visibility
  const ControlToggle = () => (
    <div className="fixed top-4 right-4 z-40">
      <motion.button
        className={`w-14 h-14 bg-gradient-to-br ${controlsOpen ? 'from-green-600 to-green-700' : 'from-blue-600 to-purple-600'} backdrop-blur-lg rounded-full border-2 border-white/30 shadow-2xl flex items-center justify-center text-white hover:from-blue-500 hover:to-purple-500 transition-all`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          console.log('Control toggle clicked, current state:', controlsOpen);
          setControlsOpen(!controlsOpen);
        }}
        title="SEO Solar System Controls"
      >
        <FontAwesomeIcon icon={controlsOpen ? faCompress : faBars} size="lg" />
      </motion.button>
      {/* Debug indicator */}
      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-white bg-black/50 px-2 py-1 rounded">
        {controlsOpen ? 'OPEN' : 'CLOSED'}
      </div>
    </div>
  );

  if (!mounted) {
    return (
      <section ref={containerRef} id="skills" className="min-h-screen bg-slate-900 relative overflow-hidden">
        <AlgorithmBackground opacity="opacity-5" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 py-20">
          <div className="text-center">
            <motion.div
              className="animate-pulse space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="h-12 bg-slate-700 rounded w-96 mx-auto"></div>
              <div className="h-6 bg-slate-800 rounded w-[600px] mx-auto"></div>
              <div className="w-96 h-96 bg-slate-800 rounded-full mx-auto mt-16"></div>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={containerRef} id="skills" className="min-h-screen bg-slate-900 relative overflow-hidden">
      {/* Site-consistent Algorithm Background */}
      <AlgorithmBackground opacity="opacity-5" />
      
      {/* Optimized Space Background */}
      <SpaceBackground />

      {/* Simplified Cosmic Particles */}
      <CosmicParticles />

      <div className="max-w-7xl mx-auto px-6 relative z-10 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-4 sm:mb-6 tracking-tight px-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span
              className="bg-gradient-to-r from-blue-400 via-purple-400 to-amber-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              style={{
                backgroundSize: '200% 100%',
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              SEO Solar System
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="hidden lg:inline">Navigate through the cosmic expanse of SEO expertise. Each skill planet orbits with precision, representing specialized domains of search optimization mastery.</span>
            <span className="lg:hidden">Explore my specialized domains of SEO and digital marketing expertise.</span>
          </motion.p>
        </motion.div>

        {/* Fixed Desktop Solar System with Proper Scaling */}
        <motion.div
          className="hidden lg:block relative h-[600px] mx-auto max-w-4xl"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          viewport={{ once: true }}
          animate={{
            scale: orbitalDistance,
          }}
          style={{
            transformOrigin: 'center center',
          }}
        >
          {/* Orbital Rings */}
          <OrbitalRings />

          {/* Central SEO Sun */}
          <SEOSun />

          {/* Skill Planets */}
          {skillUniverse.map((skill, index) => (
            <SkillPlanet key={skill.id} skill={skill} index={index} />
          ))}

          {/* Aligned Circular Asteroid Belt */}
          <motion.div 
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            animate={{
              opacity: showRings ? 0.6 : 0.2,
            }}
            transition={{ duration: 0.6 }}
          >
            {[...Array(40)].map((_, i) => {
              // Use consistent asteroid belt radius (between planet orbits)
              const asteroidRadius = 320 * orbitalDistance;
              
              return (
                <motion.div
                  key={i}
                  className="absolute w-0.5 h-0.5 bg-gray-300 rounded-full shadow-sm"
                  style={{
                    left: '50%',
                    top: '50%',
                    filter: 'drop-shadow(0 0 2px rgba(255, 255, 255, 0.3))',
                  }}
                  animate={{
                    x: Math.cos((i * 9) * Math.PI / 180) * asteroidRadius,
                    y: Math.sin((i * 9) * Math.PI / 180) * asteroidRadius,
                    opacity: isPaused ? 0.4 : [0.2, 0.6, 0.2],
                    scale: isPaused ? 1 : [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    x: {
                      duration: isPaused ? 0 : 60 / animationSpeed,
                      repeat: isPaused ? 0 : Infinity,
                      ease: "linear",
                      delay: i * 0.1
                    },
                    y: {
                      duration: isPaused ? 0 : 60 / animationSpeed,
                      repeat: isPaused ? 0 : Infinity,
                      ease: "linear",
                      delay: i * 0.1
                    },
                    opacity: {
                      duration: isPaused ? 0 : 5,
                      repeat: isPaused ? 0 : Infinity,
                      delay: i * 0.05
                    },
                    scale: {
                      duration: isPaused ? 0 : 4,
                      repeat: isPaused ? 0 : Infinity,
                      delay: i * 0.03
                    }
                  }}
                />
              );
            })}
          </motion.div>
        </motion.div>
        
        {/* Mobile Grid Layout - Shown only on mobile */}
        <motion.div
          className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {skillUniverse.map((skill, index) => (
            <motion.div
              key={skill.id}
              className="bg-white/8 backdrop-blur-xl rounded-2xl p-6 border border-white/15 hover:border-white/30 transition-all duration-300 group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedPlanet(selectedPlanet === skill.id ? null : skill.id)}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${skill.color} rounded-xl flex items-center justify-center shadow-lg`}>
                  <FontAwesomeIcon 
                    icon={skill.icon} 
                    className="text-white text-lg" 
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-1">{skill.name}</h3>
                  <p className="text-gray-300 text-sm">{skill.description}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                {skill.skills.slice(0, 4).map((skillName, i) => (
                  <div
                    key={i}
                    className={`bg-gradient-to-r ${skill.color} text-white px-2 py-1 rounded-lg text-xs font-medium text-center opacity-80`}
                  >
                    {skillName}
                  </div>
                ))}
              </div>
              
              {skill.skills.length > 4 && (
                <div className="text-center mt-2">
                  <span className="text-gray-400 text-xs">+{skill.skills.length - 4} more</span>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Interaction Hint */}
        <motion.div
          className="text-center mt-12 lg:mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-gray-300 text-base lg:text-lg mb-6 lg:mb-8 flex items-center justify-center gap-3 font-medium px-4"
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <FontAwesomeIcon icon={faHeart} className="text-pink-400" />
            <span className="hidden lg:inline">Click on skill planets to explore orbital expertise</span>
            <span className="lg:hidden">Tap on skills to explore expertise</span>
            <FontAwesomeIcon icon={faWandSparkles} className="text-amber-400" />
          </motion.p>

          {/* Call to Action */}
          <motion.button
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-6 py-3 rounded-full font-semibold shadow-xl transition-all duration-300 flex items-center gap-2 mx-auto min-w-[44px] min-h-[44px]"
            whileHover={{ 
              scale: 1.05, 
              y: -2,
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <FontAwesomeIcon icon={faRocket} />
            <span className="hidden sm:inline">Launch Your SEO Journey</span>
            <span className="sm:hidden">Get Started</span>
            <FontAwesomeIcon icon={faMagic} />
          </motion.button>
        </motion.div>
      </div>

      {/* Skill Card */}
      <AnimatePresence>
        {selectedPlanet && <SkillCard />}
      </AnimatePresence>

      {/* Skill Detail Modal */}
      <SkillModal 
        skill={selectedSkill}
        isOpen={isModalOpen}
        onClose={closeSkillModal}
      />

      {/* SEO Solar System Control Panel */}
      <ControlPanel />
      <ControlToggle />
    </section>
  );
}
