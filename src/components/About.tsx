'use client';

import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { aboutData } from '@/data/about';
import AnimatedText from './AnimatedText';
import ParallaxContainer from './ParallaxContainer';
import InteractiveBackground from './InteractiveBackground';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faRocket, 
  faBrain, 
  faCode, 
  faChartLine, 
  faLightbulb,
  faCog,
  faSearch,
  faRobot
} from '@fortawesome/free-solid-svg-icons';

export default function About() {
  const containerRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedStat, setSelectedStat] = useState<number | null>(null);
  const [isHoveringProfile, setIsHoveringProfile] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { damping: 50, stiffness: 400 });
  const smoothMouseY = useSpring(mouseY, { damping: 50, stiffness: 400 });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const profileRotateX = useTransform(smoothMouseY, [-300, 300], [10, -10]);
  const profileRotateY = useTransform(smoothMouseX, [-300, 300], [-10, 10]);

  // Floating skill icons data
  const skillIcons = [
    { icon: faBrain, color: '#3b82f6', label: 'AI Strategy' },
    { icon: faRobot, color: '#8b5cf6', label: 'LLM Optimization' },
    { icon: faSearch, color: '#10b981', label: 'SEO Research' },
    { icon: faCode, color: '#f59e0b', label: 'Technical SEO' },
    { icon: faChartLine, color: '#ef4444', label: 'Analytics' },
    { icon: faLightbulb, color: '#06b6d4', label: 'Innovation' },
    { icon: faCog, color: '#6366f1', label: 'Optimization' },
    { icon: faRocket, color: '#ec4899', label: 'Growth' },
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePosition({ x, y });
        mouseX.set(x - rect.width / 2);
        mouseY.set(y - rect.height / 2);
      }
    };

    const element = containerRef.current;
    if (element) {
      element.addEventListener('mousemove', handleMouseMove);
      return () => element.removeEventListener('mousemove', handleMouseMove);
    }
  }, [mouseX, mouseY]);

  return (
    <section ref={containerRef} id="about" className="py-20 dynamic-bg relative overflow-hidden">
      {/* Interactive Background */}
      <InteractiveBackground variant="primary" />

      {/* Floating Skill Icons */}
      {skillIcons.map((skill, index) => (
        <motion.div
          key={index}
          className="absolute z-20 pointer-events-none opacity-60"
          style={{
            left: `${10 + (index % 4) * 25}%`,
            top: `${20 + Math.floor(index / 4) * 60}%`,
          }}
          animate={{
            x: useTransform(smoothMouseX, [-500, 500], [-30 + index * 5, 30 - index * 5]),
            y: useTransform(smoothMouseY, [-500, 500], [-20 + index * 3, 20 - index * 3]),
            rotate: [0, 360],
          }}
          transition={{
            rotate: { duration: 20 + index * 2, repeat: Infinity, ease: "linear" },
          }}
        >
          <motion.div
            className="relative"
            whileHover={{ scale: 1.5, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm"
              style={{ backgroundColor: `${skill.color}20` }}
              animate={{
                boxShadow: [
                  `0 0 20px ${skill.color}40`,
                  `0 0 40px ${skill.color}60`,
                  `0 0 20px ${skill.color}40`,
                ],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <FontAwesomeIcon 
                icon={skill.icon} 
                className="w-5 h-5"
                style={{ color: skill.color }}
              />
            </motion.div>
            
            {/* Tooltip */}
            <motion.div
              className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0"
              whileHover={{ opacity: 1, y: -5 }}
            >
              {skill.label}
            </motion.div>
          </motion.div>
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Creative Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <motion.div className="relative inline-block">
            <AnimatedText
              text={aboutData.title}
              className="text-5xl md:text-7xl font-bold modern-text-gradient"
              as="h2"
              stagger={0.08}
              delay={0.2}
            />
            
            {/* Decorative elements around title */}
            <motion.div
              className="absolute -top-4 -right-8 w-8 h-8 bg-blue-500/20 rounded-full"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-4 -left-8 w-6 h-6 bg-purple-500/20 rounded-full"
              animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
          
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 mx-auto mt-6"
          />
        </motion.div>

        {/* Creative Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Profile Card - Creative 3D Design */}
          <motion.div 
            className="lg:col-span-5 relative"
            style={{
              rotateX: profileRotateX,
              rotateY: profileRotateY,
            }}
            onHoverStart={() => setIsHoveringProfile(true)}
            onHoverEnd={() => setIsHoveringProfile(false)}
          >
            <motion.div
              className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 overflow-hidden"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 40px 80px rgba(59, 130, 246, 0.3)",
              }}
              transition={{ duration: 0.4 }}
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 opacity-30"
                animate={{
                  background: [
                    'radial-gradient(circle at 20% 20%, #3b82f6 0%, transparent 50%)',
                    'radial-gradient(circle at 80% 80%, #8b5cf6 0%, transparent 50%)',
                    'radial-gradient(circle at 20% 80%, #10b981 0%, transparent 50%)',
                    'radial-gradient(circle at 80% 20%, #f59e0b 0%, transparent 50%)',
                    'radial-gradient(circle at 20% 20%, #3b82f6 0%, transparent 50%)',
                  ]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Profile Avatar Placeholder */}
              <motion.div 
                className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center relative overflow-hidden"
                animate={{
                  boxShadow: isHoveringProfile 
                    ? ['0 0 0 0 rgba(59, 130, 246, 0.7)', '0 0 0 20px rgba(59, 130, 246, 0)']
                    : '0 10px 30px rgba(59, 130, 246, 0.3)'
                }}
                transition={{ duration: 1.5, repeat: isHoveringProfile ? Infinity : 0 }}
              >
                <FontAwesomeIcon icon={faRocket} className="text-white text-4xl" />
                
                {/* Orbiting elements */}
                <motion.div
                  className="absolute w-4 h-4 bg-white/30 rounded-full"
                  animate={{ 
                    rotate: 360,
                    x: [40, -40, 40],
                    y: [0, 40, -40, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>

              {/* Interactive Content */}
              <div className="relative z-10 text-center">
                <motion.h3 
                  className="text-2xl font-bold text-gray-800 mb-4"
                  animate={{ 
                    scale: isHoveringProfile ? [1, 1.05, 1] : 1 
                  }}
                  transition={{ duration: 2, repeat: isHoveringProfile ? Infinity : 0 }}
                >
                  AI-Powered SEO Expert
                </motion.h3>
                
                {/* Animated subtitle */}
                <motion.p 
                  className="text-gray-600 mb-6"
                  initial={{ opacity: 0.7 }}
                  whileHover={{ opacity: 1 }}
                >
                  Transforming search with intelligence
                </motion.p>

                {/* Interactive tags */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {['ChatGPT', 'Claude', 'SGE', 'LLM'].map((tag, index) => (
                    <motion.span
                      key={tag}
                      className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-sm font-medium cursor-pointer"
                      whileHover={{ 
                        scale: 1.1, 
                        backgroundColor: 'rgba(59, 130, 246, 0.2)',
                        color: '#1e40af'
                      }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Area - Creative Typography */}
          <motion.div
            className="lg:col-span-7 space-y-8"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {/* Creative text reveal */}
            <div className="space-y-6">
              {aboutData.content.split('\n\n').map((paragraph, index) => (
                <motion.div
                  key={index}
                  className="relative group cursor-pointer"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                  
                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: 0.5 + index * 0.2,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    viewport={{ once: true }}
                    className="text-gray-700 leading-relaxed text-lg group-hover:text-gray-900 transition-colors duration-300"
                  >
                    {paragraph}
                  </motion.p>
                </motion.div>
              ))}
            </div>

            {/* Interactive Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
              {aboutData.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="relative group cursor-pointer"
                  initial={{ opacity: 0, y: 50, rotateX: -20 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedStat(selectedStat === index ? null : index)}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div 
                    className="bg-white/60 backdrop-blur-lg rounded-2xl p-6 border border-white/30 relative overflow-hidden"
                    animate={{
                      boxShadow: selectedStat === index 
                        ? '0 20px 40px rgba(59, 130, 246, 0.3)'
                        : '0 10px 20px rgba(0, 0, 0, 0.1)'
                    }}
                  >
                    {/* Background animation */}
                    <motion.div
                      className="absolute inset-0 opacity-20"
                      animate={{
                        background: selectedStat === index
                          ? ['linear-gradient(45deg, #3b82f6, #8b5cf6)', 'linear-gradient(45deg, #8b5cf6, #3b82f6)']
                          : 'linear-gradient(45deg, transparent, transparent)'
                      }}
                      transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
                    />
                    
                    <div className="relative z-10 text-center">
                      <motion.div 
                        className="text-3xl font-bold mb-2"
                        style={{
                          background: 'linear-gradient(45deg, #3b82f6, #8b5cf6, #10b981)',
                          backgroundClip: 'text',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                        }}
                        animate={{
                          scale: selectedStat === index ? [1, 1.1, 1] : 1
                        }}
                        transition={{ duration: 0.5, repeat: selectedStat === index ? Infinity : 0 }}
                      >
                        {stat.number}
                      </motion.div>
                      
                      <p className="text-gray-600 text-sm font-medium group-hover:text-gray-800 transition-colors">
                        {stat.label}
                      </p>
                    </div>

                    {/* Interactive indicator */}
                    <motion.div
                      className="absolute bottom-2 right-2 w-2 h-2 bg-blue-500 rounded-full"
                      animate={{
                        scale: selectedStat === index ? [1, 1.5, 1] : [1, 1.2, 1],
                        opacity: selectedStat === index ? [1, 0.5, 1] : [0.5, 1, 0.5]
                      }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
