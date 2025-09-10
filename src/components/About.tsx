'use client';

import { motion, useScroll, useTransform, useMotionValue, useSpring, useAnimation } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { aboutData } from '@/data/about';
import AnimatedText from './AnimatedText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faRocket, 
  faBrain, 
  faCode, 
  faChartLine, 
  faLightbulb,
  faCog,
  faSearch,
  faRobot,
  faStar,
  faGem,
  faAtom,
  faMagic,
  faInfinity,
  faBolt
} from '@fortawesome/free-solid-svg-icons';

export default function About() {
  const containerRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedStat, setSelectedStat] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const { scrollY } = useScroll();
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { damping: 30, stiffness: 200 });
  const smoothMouseY = useSpring(mouseY, { damping: 30, stiffness: 200 });

  // Parallax transforms based on scroll and mouse
  const parallaxY = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);
  const parallaxX = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);
  const mouseParallaxX = useTransform(smoothMouseX, [-200, 200], [-50, 50]);
  const mouseParallaxY = useTransform(smoothMouseY, [-200, 200], [-30, 30]);

  // Modern floating elements
  const modernElements = [
    { icon: faAtom, color: '#60a5fa', size: 'w-8 h-8', position: { top: '10%', left: '15%' } },
    { icon: faGem, color: '#a78bfa', size: 'w-6 h-6', position: { top: '20%', right: '20%' } },
    { icon: faMagic, color: '#34d399', size: 'w-7 h-7', position: { top: '70%', left: '10%' } },
    { icon: faInfinity, color: '#f59e0b', size: 'w-9 h-9', position: { bottom: '30%', right: '15%' } },
    { icon: faBolt, color: '#ef4444', size: 'w-5 h-5', position: { top: '40%', right: '8%' } },
    { icon: faStar, color: '#06b6d4', size: 'w-6 h-6', position: { bottom: '50%', left: '25%' } },
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
        setMousePosition({ x, y });
        mouseX.set(x * 100);
        mouseY.set(y * 100);
      }
    };

    const element = containerRef.current;
    if (element) {
      element.addEventListener('mousemove', handleMouseMove);
      return () => element.removeEventListener('mousemove', handleMouseMove);
    }
  }, [mouseX, mouseY]);

  return (
    <section ref={containerRef} id="about" className="min-h-screen modern-about-bg relative overflow-hidden">
      {/* Modern Geometric Background Elements */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: parallaxY, x: parallaxX }}
      >
        {/* Large geometric shapes */}
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-purple-500/10 to-green-500/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      {/* Mouse-Reactive Floating Elements */}
      {modernElements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute z-10 pointer-events-none"
          style={{
            ...element.position,
            x: useTransform(smoothMouseX, [-100, 100], [-20 + index * 3, 20 - index * 3]),
            y: useTransform(smoothMouseY, [-100, 100], [-15 + index * 2, 15 - index * 2]),
          }}
          animate={{
            rotate: [0, 360],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            rotate: { duration: 15 + index * 3, repeat: Infinity, ease: "linear" },
            opacity: { duration: 3 + index * 0.5, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <motion.div
            className={`${element.size} rounded-lg backdrop-blur-sm flex items-center justify-center`}
            style={{ 
              backgroundColor: `${element.color}20`,
              boxShadow: `0 0 20px ${element.color}30`
            }}
            whileHover={{ scale: 1.5, opacity: 1 }}
          >
            <FontAwesomeIcon 
              icon={element.icon} 
              className="w-full h-full p-1"
              style={{ color: element.color }}
            />
          </motion.div>
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto px-6 relative z-20 pt-20 pb-20">
        {/* Modern Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <motion.div 
            className="relative inline-block"
            style={{
              x: mouseParallaxX,
              y: mouseParallaxY,
            }}
          >
            <motion.h2 
              className="text-6xl md:text-8xl font-black text-white mb-6 leading-none"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              style={{
                background: 'linear-gradient(90deg, #ffffff, #60a5fa, #a78bfa, #34d399, #ffffff)',
                backgroundSize: '300% 100%',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {aboutData.title}
            </motion.h2>

            {/* Dynamic underline */}
            <motion.div
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
          </motion.div>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Pioneering the future of search with artificial intelligence and data-driven strategies
          </motion.p>
        </motion.div>

        {/* Modern Layout Grid */}
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Profile Section - Modern Card Design */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -100, rotateY: -20 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 overflow-hidden"
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ duration: 0.4 }}
              style={{
                x: useTransform(smoothMouseX, [-100, 100], [-10, 10]),
                y: useTransform(smoothMouseY, [-100, 100], [-5, 5]),
              }}
            >
              {/* Animated mesh gradient background */}
              <motion.div
                className="absolute inset-0 opacity-30"
                animate={{
                  background: [
                    'conic-gradient(from 0deg at 50% 50%, #3b82f6, #8b5cf6, #34d399, #f59e0b, #3b82f6)',
                    'conic-gradient(from 120deg at 50% 50%, #8b5cf6, #34d399, #f59e0b, #3b82f6, #8b5cf6)',
                    'conic-gradient(from 240deg at 50% 50%, #34d399, #f59e0b, #3b82f6, #8b5cf6, #34d399)',
                  ]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />

              {/* Profile Image Placeholder - Modern Design */}
              <motion.div 
                className="relative w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-green-600 p-1"
                animate={{
                  boxShadow: [
                    '0 0 0 0 rgba(59, 130, 246, 0.7)',
                    '0 0 0 20px rgba(59, 130, 246, 0)',
                    '0 0 0 0 rgba(139, 92, 246, 0.7)',
                    '0 0 0 20px rgba(139, 92, 246, 0)',
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="w-full h-full bg-slate-800 rounded-xl flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <FontAwesomeIcon icon={faRocket} className="text-white text-6xl" />
                  </motion.div>
                  
                  {/* Overlay for future photo */}
                  <div className="absolute inset-0 rounded-xl bg-black/20 flex items-center justify-center">
                    <span className="text-white/50 text-sm font-medium">Omar's Photo</span>
                  </div>
                </div>
              </motion.div>

              {/* Professional Info */}
              <div className="text-center relative z-10">
                <motion.h3 
                  className="text-2xl font-bold text-white mb-2"
                  animate={{ opacity: [1, 0.8, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Omar Corral
                </motion.h3>
                <p className="text-blue-200 mb-4">AI-Powered SEO Specialist</p>
                
                {/* Modern skill badges */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {['AI Strategy', 'LLM Optimization', 'Technical SEO', 'Analytics'].map((skill, index) => (
                    <motion.span
                      key={skill}
                      className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white border border-white/20"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content & Stats Section */}
          <motion.div 
            className="lg:col-span-3 space-y-12"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Modern Content Display */}
            <div className="space-y-8">
              {aboutData.content.split('\n\n').map((paragraph, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 15 }}
                >
                  {/* Modern accent line */}
                  <motion.div
                    className="absolute -left-6 top-0 w-1 h-full rounded-full bg-gradient-to-b from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                  
                  <motion.p
                    className="text-gray-200 leading-relaxed text-lg group-hover:text-white transition-colors duration-300 pl-2"
                    style={{
                      x: useTransform(smoothMouseX, [-50, 50], [-5, 5]),
                    }}
                  >
                    {paragraph}
                  </motion.p>
                </motion.div>
              ))}
            </div>

            {/* Modern Stats Visualization */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {aboutData.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="relative group cursor-pointer"
                  initial={{ opacity: 0, y: 100, rotateX: -30 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.2,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedStat(selectedStat === index ? null : index)}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    z: 50
                  }}
                  style={{
                    x: useTransform(smoothMouseX, [-100, 100], [-5 + index, 5 - index]),
                    y: useTransform(smoothMouseY, [-100, 100], [-3 + index, 3 - index]),
                  }}
                >
                  <motion.div 
                    className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 relative overflow-hidden h-32"
                    animate={{
                      borderColor: selectedStat === index ? '#60a5fa' : 'rgba(255, 255, 255, 0.1)',
                      boxShadow: selectedStat === index 
                        ? '0 25px 50px rgba(96, 165, 250, 0.3)'
                        : '0 10px 30px rgba(0, 0, 0, 0.2)'
                    }}
                  >
                    {/* Animated background pattern */}
                    <motion.div
                      className="absolute inset-0 opacity-20"
                      animate={{
                        background: selectedStat === index
                          ? [
                              'linear-gradient(45deg, #3b82f6, transparent, #8b5cf6)',
                              'linear-gradient(45deg, #8b5cf6, transparent, #34d399)',
                              'linear-gradient(45deg, #34d399, transparent, #3b82f6)',
                            ]
                          : 'linear-gradient(45deg, transparent, transparent)'
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    
                    <div className="relative z-10 text-center h-full flex flex-col justify-center">
                      <motion.div 
                        className="text-4xl font-black mb-2 text-white"
                        animate={{
                          scale: selectedStat === index ? [1, 1.1, 1] : 1,
                          color: selectedStat === index ? ['#ffffff', '#60a5fa', '#ffffff'] : '#ffffff'
                        }}
                        transition={{ 
                          duration: 0.8, 
                          repeat: selectedStat === index ? Infinity : 0 
                        }}
                      >
                        {stat.number}
                      </motion.div>
                      
                      <p className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">
                        {stat.label}
                      </p>
                    </div>

                    {/* Modern indicator */}
                    <motion.div
                      className="absolute top-3 right-3 w-2 h-2 rounded-full"
                      animate={{
                        backgroundColor: selectedStat === index ? '#60a5fa' : '#ffffff40',
                        scale: selectedStat === index ? [1, 1.5, 1] : 1,
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
