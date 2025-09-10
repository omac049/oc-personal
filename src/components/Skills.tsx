'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCog, faBrain, faChartLine, faGlobe, faShoppingCart, faLightbulb,
  faCrown, faInfinity, faWandMagicSparkles, faWandSparkles, faGem, faStar,
  faAtom, faHeart, faRocket, faMagic
} from '@fortawesome/free-solid-svg-icons';
import SkillModal from './SkillModal';
import AlgorithmBackground from './AlgorithmBackground';
import { useRef, useState, useEffect, useCallback } from 'react';

// Creative skill universe data with magical SEO themes
const skillUniverse = [
  {
    id: 'seo-core',
    name: 'SEO Mastery',
    icon: faCrown,
    description: 'The heart of search optimization',
    color: 'from-amber-400 to-amber-600',
    size: 'large',
    orbit: 0,
    skills: ['Technical SEO', 'On-Page Optimization', 'Link Building', 'Keyword Research']
  },
  {
    id: 'ai-brain',
    name: 'AI Integration',
    icon: faBrain,
    description: 'Cutting-edge AI-powered strategies',
    color: 'from-purple-400 to-purple-600',
    size: 'large',
    orbit: 120,
    skills: ['ChatGPT Integration', 'LLM Optimization', 'AI Content Creation', 'Machine Learning']
  },
  {
    id: 'analytics-insights',
    name: 'Data Analytics',
    icon: faChartLine,
    description: 'Deep insights from data patterns',
    color: 'from-blue-400 to-blue-600',
    size: 'medium',
    orbit: 240,
    skills: ['Google Analytics', 'Search Console', 'Performance Tracking', 'ROI Analysis']
  },
  {
    id: 'content-magic',
    name: 'Content Strategy',
    icon: faWandMagicSparkles,
    description: 'Magical content that converts',
    color: 'from-green-400 to-green-600',
    size: 'medium',
    orbit: 60,
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
    skills: ['Core Web Vitals', 'Schema Markup', 'Site Speed', 'Mobile Optimization']
  },
  {
    id: 'global-reach',
    name: 'International SEO',
    icon: faGlobe,
    description: 'Worldwide optimization expertise',
    color: 'from-pink-400 to-pink-600',
    size: 'small',
    orbit: 300,
    skills: ['Multilingual SEO', 'Hreflang', 'Cultural Adaptation', 'Global Strategy']
  },
  {
    id: 'ecommerce-power',
    name: 'E-commerce SEO',
    icon: faShoppingCart,
    description: 'Driving online sales success',
    color: 'from-orange-400 to-orange-600',
    size: 'small',
    orbit: 20,
    skills: ['Product Optimization', 'Category Pages', 'Shopping Feeds', 'Conversion Focus']
  },
  {
    id: 'innovation-spark',
    name: 'Innovation',
    icon: faLightbulb,
    description: 'Always ahead of the curve',
    color: 'from-indigo-400 to-indigo-600',
    size: 'small',
    orbit: 140,
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
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const centerY = useTransform(scrollYProgress, [0, 1], ['20%', '80%']);
  const rotateUniverse = useTransform(scrollYProgress, [0, 1], [0, 360]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const openSkillModal = useCallback((skill: { name: string; icon: string; proficiency: number }) => {
    setSelectedSkill(skill);
    setIsModalOpen(true);
  }, []);

  const closeSkillModal = useCallback(() => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedSkill(null), 300);
  }, []);

  // Floating Skill Particles Background
  const FloatingParticles = () => (
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
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            rotate: [0, 360],
            opacity: [0.2, 0.8, 0.2],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        >
          <FontAwesomeIcon 
            icon={[faWandSparkles, faGem, faStar, faAtom][Math.floor(Math.random() * 4)]} 
            className="text-blue-400 opacity-30 text-xs" 
          />
        </motion.div>
      ))}
    </div>
  );

  // Interactive Skill Planet
  const SkillPlanet = ({ skill, index }: { skill: typeof skillUniverse[0], index: number }) => {
    const planetSize = skill.size === 'large' ? 'w-24 h-24' : skill.size === 'medium' ? 'w-16 h-16' : 'w-12 h-12';
    const isSelected = selectedPlanet === skill.id;
    
    return (
      <motion.div
        className="absolute cursor-pointer group"
        style={{
          left: '50%',
          top: '50%',
        }}
        animate={{
          x: Math.cos((skill.orbit + index * 45) * Math.PI / 180) * (120 + index * 20),
          y: Math.sin((skill.orbit + index * 45) * Math.PI / 180) * (80 + index * 15),
          rotate: [0, 360],
        }}
        transition={{
          rotate: {
            duration: 20 + index * 5,
            repeat: Infinity,
            ease: "linear"
          },
          x: {
            duration: 2,
            ease: "easeOut"
          },
          y: {
            duration: 2,
            ease: "easeOut"
          }
        }}
        whileHover={{ 
          scale: 1.2,
          zIndex: 5
        }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          setSelectedPlanet(isSelected ? null : skill.id);
        }}
      >
        {/* Planet Glow Effect */}
        <motion.div
          className={`absolute inset-0 ${planetSize} rounded-full bg-gradient-to-br ${skill.color} opacity-20 blur-xl`}
          animate={{
            scale: isSelected ? [1, 1.5, 1] : [1, 1.2, 1],
            opacity: isSelected ? [0.3, 0.7, 0.3] : [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Main Planet */}
        <motion.div
          className={`relative ${planetSize} bg-gradient-to-br ${skill.color} rounded-full flex items-center justify-center shadow-2xl border-2 ${isSelected ? 'border-white/60' : 'border-white/20'} backdrop-blur-sm`}
          animate={{
            boxShadow: isSelected 
              ? ["0 0 30px rgba(255,255,255,0.5)", "0 0 50px rgba(255,255,255,0.8)", "0 0 30px rgba(255,255,255,0.5)"]
              : ["0 0 10px rgba(255,255,255,0.1)", "0 0 20px rgba(255,255,255,0.3)", "0 0 10px rgba(255,255,255,0.1)"]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <FontAwesomeIcon 
            icon={skill.icon} 
            className={`text-white ${skill.size === 'large' ? 'text-2xl' : skill.size === 'medium' ? 'text-xl' : 'text-lg'}`} 
          />
        </motion.div>

        {/* Orbital Ring */}
        <motion.div
          className={`absolute inset-0 rounded-full border ${isSelected ? 'border-white/40' : 'border-white/10'}`}
          style={{
            width: `${parseInt(planetSize.split(' ')[0].replace('w-', '')) * 8}px`,
            height: `${parseInt(planetSize.split(' ')[0].replace('w-', '')) * 8}px`,
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
          }}
          animate={{
            rotate: 360,
            opacity: isSelected ? 0.8 : 0.2
          }}
          transition={{
            rotate: {
              duration: 10 + index * 3,
              repeat: Infinity,
              ease: "linear"
            },
            opacity: {
              duration: 0.3
            }
          }}
        />

        {/* Selection Particles */}
        {isSelected && [...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: '50%',
              top: '50%'
            }}
            animate={{
              x: [0, Math.cos((i * 60) * Math.PI / 180) * 60],
              y: [0, Math.sin((i * 60) * Math.PI / 180) * 60],
              opacity: [1, 0],
              scale: [1, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeOut"
            }}
          />
        ))}
      </motion.div>
    );
  };

  // Upright Skill Card
  const SkillCard = () => {
    const selectedSkillData = skillUniverse.find(skill => skill.id === selectedPlanet);
    if (!selectedSkillData) return null;

    return (
      <motion.div
        className="fixed bottom-24 left-1/2 transform -translate-x-1/2 z-[60]"
        initial={{ opacity: 0, y: 100, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 100, scale: 0.9 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div 
          className="bg-slate-900/95 backdrop-blur-lg rounded-3xl p-8 border-2 border-white/30 shadow-2xl min-w-[400px] max-w-[500px]"
          style={{
            background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.95))',
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(255, 255, 255, 0.1)'
          }}
        >
          {/* Card Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className={`w-16 h-16 bg-gradient-to-br ${selectedSkillData.color} rounded-2xl flex items-center justify-center shadow-xl`}>
                <FontAwesomeIcon 
                  icon={selectedSkillData.icon} 
                  className="text-white text-2xl" 
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-1">{selectedSkillData.name}</h3>
                <p className="text-gray-300 text-sm opacity-80">Expert Level Mastery</p>
              </div>
            </div>
            <motion.button
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center text-gray-300 hover:text-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSelectedPlanet(null)}
            >
              ✕
            </motion.button>
          </div>

          {/* Card Description */}
          <p className="text-gray-100 text-lg leading-relaxed mb-6 font-medium">
            {selectedSkillData.description}
          </p>

          {/* Skills Grid */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wide opacity-80">
              Core Capabilities
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {selectedSkillData.skills.map((skillName, i) => (
                <motion.div
                  key={i}
                  className={`bg-gradient-to-r ${selectedSkillData.color} text-white px-4 py-3 rounded-xl font-medium shadow-lg backdrop-blur-sm border border-white/20 text-center`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  {skillName}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-8">
            <motion.button
              className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg"
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
                className="flex-1 bg-white/10 hover:bg-white/20 text-white py-3 rounded-xl font-semibold transition-all duration-300 border border-white/20"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Let&apos;s Discuss
              </motion.button>
          </div>

          {/* Subtle glow effect */}
          <motion.div
            className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${selectedSkillData.color} opacity-10 blur-sm -z-10`}
            animate={{
              opacity: [0.05, 0.15, 0.05],
              scale: [1, 1.02, 1]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    );
  };

  // Central SEO Core
  const SEOCore = () => (
    <motion.div
      className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
      style={{ y: centerY }}
      animate={{
        rotate: 360,
        scale: [1, 1.1, 1],
      }}
      transition={{
        rotate: {
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        },
        scale: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
    >
      {/* Central Glow */}
      <motion.div
        className="absolute inset-0 w-32 h-32 bg-gradient-to-r from-blue-500 via-purple-500 to-amber-500 rounded-full opacity-30 blur-2xl"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Core Planet */}
      <motion.div
        className="relative w-20 h-20 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full flex items-center justify-center shadow-2xl border-2 border-amber-400/50"
        whileHover={{ scale: 1.2 }}
        animate={{
          boxShadow: [
            "0 0 20px rgba(251, 191, 36, 0.3)",
            "0 0 40px rgba(251, 191, 36, 0.6)",
            "0 0 20px rgba(251, 191, 36, 0.3)"
          ]
        }}
        transition={{
          boxShadow: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >
        <FontAwesomeIcon icon={faInfinity} className="text-amber-400 text-2xl" />
      </motion.div>

      {/* Orbiting Elements */}
      {[faWandSparkles, faGem, faStar].map((icon, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 flex items-center justify-center"
          style={{
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
          }}
          animate={{
            x: Math.cos((i * 120) * Math.PI / 180) * 50,
            y: Math.sin((i * 120) * Math.PI / 180) * 50,
            rotate: -360,
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
            delay: i * 0.5
          }}
        >
          <FontAwesomeIcon icon={icon} className="text-amber-400 text-sm opacity-70" />
        </motion.div>
      ))}
    </motion.div>
  );

  if (!mounted) {
    return (
      <section ref={containerRef} id="skills" className="min-h-screen bg-slate-900 relative overflow-hidden">
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
      {/* Algorithm Background */}
      <AlgorithmBackground opacity="opacity-10" />

      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear"
        }}
      />

      {/* Floating Particles */}
      <FloatingParticles />

      <div className="max-w-7xl mx-auto px-6 relative z-10 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-light text-white mb-6 tracking-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span
              className="bg-gradient-to-r from-blue-400 via-purple-400 to-amber-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              SEO Skill Universe
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Explore the constellation of expertise that powers exceptional SEO results. 
            Click on each skill planet to discover the magic within.
          </motion.p>
        </motion.div>

        {/* Main Skill Universe */}
        <motion.div
          className="relative h-[600px] mx-auto max-w-4xl"
          style={{ rotate: rotateUniverse }}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {/* Central SEO Core */}
          <SEOCore />

          {/* Skill Planets */}
          {skillUniverse.map((skill, index) => (
            <SkillPlanet key={skill.id} skill={skill} index={index} />
          ))}

          {/* Connecting Lines/Energy */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
            <defs>
              <radialGradient id="energy-gradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
              </radialGradient>
            </defs>
            {skillUniverse.map((skill, index) => (
              <motion.circle
                key={skill.id}
                cx="50%"
                cy="50%"
                r={100 + index * 15}
                fill="none"
                stroke="url(#energy-gradient)"
                strokeWidth="1"
                strokeDasharray="5,5"
                animate={{
                  strokeDashoffset: [0, -20],
                  opacity: selectedPlanet ? 0.8 : 0.3
                }}
                transition={{
                  strokeDashoffset: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  },
                  opacity: {
                    duration: 0.3
                  }
                }}
              />
            ))}
          </svg>
        </motion.div>

        {/* Interaction Hint */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-gray-300 text-xl mb-8 flex items-center justify-center gap-3 font-medium"
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <FontAwesomeIcon icon={faHeart} className="text-pink-400 text-lg" />
            Click on each skill planet to discover the magic within
            <FontAwesomeIcon icon={faWandSparkles} className="text-amber-400 text-lg" />
          </motion.p>

          {/* Call to Action */}
          <motion.button
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-2xl transition-all duration-300 flex items-center gap-3 mx-auto"
            whileHover={{ 
              scale: 1.05, 
              y: -5,
              boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            animate={{
              boxShadow: [
                "0 10px 20px rgba(0,0,0,0.2)",
                "0 15px 30px rgba(59, 130, 246, 0.3)",
                "0 10px 20px rgba(0,0,0,0.2)"
              ]
            }}
            transition={{
              boxShadow: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            <FontAwesomeIcon icon={faRocket} />
            Launch Your SEO Journey
            <FontAwesomeIcon icon={faMagic} />
          </motion.button>
        </motion.div>
      </div>

      {/* Upright Skill Card */}
      <AnimatePresence>
        {selectedPlanet && <SkillCard />}
      </AnimatePresence>

      {/* Skill Detail Modal */}
      <SkillModal 
        skill={selectedSkill}
        isOpen={isModalOpen}
        onClose={closeSkillModal}
      />
    </section>
  );
}
