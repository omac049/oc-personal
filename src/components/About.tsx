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
      {/* Enhanced Interactive Background Elements */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: parallaxY, x: parallaxX }}
      >
        {/* Morphing geometric shapes */}
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-500/15 to-purple-500/8 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 0.8, 1.2, 1],
            rotate: [0, 180, 270, 360],
            borderRadius: ['50%', '30%', '60%', '40%', '50%']
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-purple-500/12 to-green-500/6 blur-3xl"
          animate={{ 
            scale: [1.2, 0.9, 1.4, 1],
            rotate: [360, 180, 90, 0],
            borderRadius: ['40%', '70%', '30%', '50%', '40%']
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Floating orbs with mouse interaction */}
        <motion.div
          className="absolute top-1/4 left-1/3 w-32 h-32 bg-gradient-to-r from-cyan-400/20 to-blue-500/15 rounded-full blur-2xl"
          animate={{
            y: [0, -30, 20, -10, 0],
            x: [0, 15, -20, 10, 0],
            scale: [1, 1.2, 0.9, 1.1, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          style={{
            x: useTransform(smoothMouseX, [-100, 100], [-20, 20]),
            y: useTransform(smoothMouseY, [-100, 100], [-15, 15]),
          }}
        />
        
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-gradient-to-r from-orange-400/18 to-red-500/12 rounded-full blur-2xl"
          animate={{
            y: [0, 25, -15, 30, 0],
            x: [0, -20, 25, -10, 0],
            scale: [1.1, 0.8, 1.3, 0.9, 1.1]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          style={{
            x: useTransform(smoothMouseX, [-100, 100], [15, -15]),
            y: useTransform(smoothMouseY, [-100, 100], [10, -10]),
          }}
        />

        {/* Dynamic mesh grid */}
        <motion.div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(96, 165, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(96, 165, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '60px 60px', '0px 0px'],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        {/* Particle system */}
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${20 + (i * 7)}%`,
              top: `${15 + (i * 5)}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
              y: [0, -100, -200],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeOut"
            }}
          />
        ))}
      </motion.div>

      {/* Mouse-Reactive Floating Elements - Repositioned to avoid conflicts */}
      {modernElements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute z-5 pointer-events-none"
          style={{
            ...element.position,
            x: useTransform(smoothMouseX, [-100, 100], [-15 + index * 2, 15 - index * 2]),
            y: useTransform(smoothMouseY, [-100, 100], [-10 + index * 1.5, 10 - index * 1.5]),
          }}
          animate={{
            rotate: [0, 360],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            rotate: { duration: 15 + index * 3, repeat: Infinity, ease: "linear" },
            opacity: { duration: 4 + index * 0.5, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <motion.div
            className={`${element.size} rounded-lg backdrop-blur-sm flex items-center justify-center`}
            style={{ 
              backgroundColor: `${element.color}15`,
              boxShadow: `0 0 15px ${element.color}20`
            }}
            whileHover={{ scale: 1.3, opacity: 0.8 }}
          >
            <FontAwesomeIcon 
              icon={element.icon} 
              className="w-full h-full p-1"
              style={{ color: element.color }}
            />
          </motion.div>
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto px-6 relative z-30 pt-20 pb-20">
        {/* Modern Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="text-center mb-32"
        >
          {/* Title Section with proper spacing */}
          <motion.div 
            className="relative inline-block mb-16"
            style={{
              x: mouseParallaxX,
              y: mouseParallaxY,
            }}
          >
            <motion.h2 
              className="text-6xl md:text-8xl font-black text-white mb-8 leading-none"
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

            {/* Enhanced Dynamic underline with better positioning */}
            <motion.div
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-full shadow-lg"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: '100%', opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              style={{
                boxShadow: '0 0 20px rgba(96, 165, 250, 0.5)'
              }}
            />
          </motion.div>
          
          {/* Descriptive text with proper spacing */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed relative z-10"
              style={{
                x: useTransform(smoothMouseX, [-50, 50], [-5, 5]),
              }}
            >
              Pioneering the future of search with artificial intelligence and data-driven strategies
            </motion.p>
            
            {/* Subtle accent decoration */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl opacity-20 pointer-events-none"
              animate={{
                background: [
                  'radial-gradient(ellipse at center, rgba(96, 165, 250, 0.1), transparent)',
                  'radial-gradient(ellipse at center, rgba(139, 92, 246, 0.1), transparent)',
                  'radial-gradient(ellipse at center, rgba(96, 165, 250, 0.1), transparent)',
                ]
              }}
              transition={{ duration: 6, repeat: Infinity }}
            />
          </motion.div>
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

              {/* Omar's Professional Headshot */}
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
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className="w-full h-full rounded-xl overflow-hidden bg-white relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="/omar.jpeg"
                    alt="Omar Corral - AI-Powered SEO Specialist"
                    className="w-full h-full object-cover object-center"
                    style={{
                      filter: 'brightness(1.1) contrast(1.05) saturate(1.1)'
                    }}
                  />
                  
                  {/* Professional overlay gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-purple-900/10"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Subtle glow effect on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-xl"
                    initial={{ boxShadow: 'inset 0 0 0 0 rgba(255, 255, 255, 0)' }}
                    whileHover={{ boxShadow: 'inset 0 0 20px 0 rgba(255, 255, 255, 0.1)' }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
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
             className="lg:col-span-3 space-y-16"
             initial={{ opacity: 0, x: 100 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 1.2, delay: 0.5 }}
             viewport={{ once: true }}
           >
             {/* Creative Interactive Content Blocks */}
             <div className="space-y-16">
               {/* AI Expertise Block - Creative Card Design */}
               <motion.div
                 className="relative group cursor-pointer perspective-1000"
                 initial={{ opacity: 0, y: 80, rotateX: 30 }}
                 whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                 transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                 viewport={{ once: true }}
                 style={{
                   x: useTransform(smoothMouseX, [-100, 100], [-12, 12]),
                   rotateY: useTransform(smoothMouseX, [-100, 100], [-3, 3]),
                 }}
                 whileHover={{ scale: 1.03, z: 50, rotateX: -5 }}
               >
                 <motion.div 
                   className="relative bg-gradient-to-br from-blue-500/15 to-purple-500/8 backdrop-blur-2xl rounded-[2rem] p-10 border border-blue-500/30 overflow-hidden transform-gpu"
                   whileHover={{ 
                     boxShadow: "0 40px 80px rgba(59, 130, 246, 0.3), 0 0 100px rgba(139, 92, 246, 0.2)",
                     borderColor: "rgba(59, 130, 246, 0.6)"
                   }}
                 >
                   {/* Dynamic corner accents */}
                   <motion.div
                     className="absolute top-0 left-0 w-20 h-20 bg-blue-400/20 rounded-br-full"
                     animate={{
                       scale: [1, 1.2, 1],
                       opacity: [0.2, 0.4, 0.2]
                     }}
                     transition={{ duration: 3, repeat: Infinity }}
                   />
                   <motion.div
                     className="absolute bottom-0 right-0 w-16 h-16 bg-purple-400/20 rounded-tl-full"
                     animate={{
                       scale: [1.2, 1, 1.2],
                       opacity: [0.4, 0.2, 0.4]
                     }}
                     transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                   />

                   {/* Floating icon with orbit animation */}
                   <motion.div
                     className="absolute top-8 right-8 w-16 h-16"
                     animate={{ rotate: [0, 360] }}
                     transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                   >
                     <motion.div
                       className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center shadow-lg"
                       whileHover={{ scale: 1.3, rotate: 180 }}
                       animate={{
                         boxShadow: [
                           '0 0 20px rgba(59, 130, 246, 0.5)',
                           '0 0 40px rgba(6, 182, 212, 0.7)',
                           '0 0 20px rgba(59, 130, 246, 0.5)'
                         ]
                       }}
                       transition={{ 
                         boxShadow: { duration: 2, repeat: Infinity },
                         scale: { duration: 0.3 },
                         rotate: { duration: 0.6 }
                       }}
                     >
                       <FontAwesomeIcon icon={faBrain} className="text-white text-lg" />
                     </motion.div>
                   </motion.div>

                   {/* Animated background waves */}
                   <motion.div
                     className="absolute inset-0 opacity-[0.07]"
                     animate={{
                       background: [
                         'conic-gradient(from 0deg at 20% 20%, #3b82f6, #8b5cf6, #06b6d4, #3b82f6)',
                         'conic-gradient(from 180deg at 80% 80%, #8b5cf6, #06b6d4, #3b82f6, #8b5cf6)',
                         'conic-gradient(from 360deg at 20% 20%, #06b6d4, #3b82f6, #8b5cf6, #06b6d4)',
                       ]
                     }}
                     transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                   />

                   {/* Content with staggered animations */}
                   <div className="relative z-10">
                     <motion.div
                       className="flex items-start gap-4 mb-6"
                       initial={{ opacity: 0, x: -30 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       transition={{ delay: 0.4, duration: 0.8 }}
                     >
                       <motion.div
                         className="w-1 h-16 bg-gradient-to-b from-blue-400 via-cyan-400 to-purple-400 rounded-full"
                         initial={{ scaleY: 0 }}
                         whileInView={{ scaleY: 1 }}
                         transition={{ delay: 0.6, duration: 1 }}
                       />
                       <div>
                         <motion.h3 
                           className="text-3xl font-black text-white mb-2 bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent"
                           whileHover={{ scale: 1.05 }}
                           style={{
                             x: useTransform(smoothMouseX, [-50, 50], [-2, 2]),
                           }}
                         >
                           AI-Powered SEO Innovation
                         </motion.h3>
                         <motion.div
                           className="flex gap-2 mb-4"
                           initial={{ opacity: 0 }}
                           whileInView={{ opacity: 1 }}
                           transition={{ delay: 0.8, duration: 0.6 }}
                         >
                           {['AI', 'LLM', 'SGE'].map((tag, i) => (
                             <motion.span
                               key={tag}
                               className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full border border-blue-400/30"
                               whileHover={{ scale: 1.1, backgroundColor: 'rgba(59, 130, 246, 0.3)' }}
                               animate={{
                                 borderColor: [
                                   'rgba(59, 130, 246, 0.3)',
                                   'rgba(6, 182, 212, 0.5)',
                                   'rgba(59, 130, 246, 0.3)'
                                 ]
                               }}
                               transition={{ 
                                 borderColor: { duration: 2, repeat: Infinity, delay: i * 0.3 },
                                 scale: { duration: 0.2 }
                               }}
                             >
                               {tag}
                             </motion.span>
                           ))}
                         </motion.div>
                       </div>
                     </motion.div>
                     
                     <motion.div
                       className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6"
                       initial={{ opacity: 0, y: 20 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       transition={{ delay: 1, duration: 0.8 }}
                     >
                       {[
                         { icon: faRobot, text: 'AI Integration', color: 'blue' },
                         { icon: faLightbulb, text: 'Smart Strategy', color: 'cyan' },
                         { icon: faChartLine, text: 'Data-Driven', color: 'purple' }
                       ].map((item, i) => (
                         <motion.div
                           key={i}
                           className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10"
                           whileHover={{ 
                             backgroundColor: 'rgba(255, 255, 255, 0.08)',
                             scale: 1.05 
                           }}
                           animate={{
                             borderColor: [
                               'rgba(255, 255, 255, 0.1)',
                               `rgba(${item.color === 'blue' ? '59, 130, 246' : item.color === 'cyan' ? '6, 182, 212' : '139, 92, 246'}, 0.3)`,
                               'rgba(255, 255, 255, 0.1)'
                             ]
                           }}
                           transition={{ 
                             borderColor: { duration: 3, repeat: Infinity, delay: i * 0.5 }
                           }}
                         >
                           <FontAwesomeIcon 
                             icon={item.icon} 
                             className={`text-${item.color}-400 text-sm`} 
                           />
                           <span className="text-gray-300 text-sm font-medium">{item.text}</span>
                         </motion.div>
                       ))}
                     </motion.div>
                     
                     <motion.p 
                       className="text-gray-200 leading-relaxed text-lg group-hover:text-white transition-colors duration-700"
                       style={{
                         x: useTransform(smoothMouseX, [-50, 50], [-2, 2]),
                       }}
                       initial={{ opacity: 0 }}
                       whileInView={{ opacity: 1 }}
                       transition={{ delay: 1.2, duration: 1 }}
                     >
                       I'm a forward-thinking SEO specialist and digital marketing strategist who combines traditional SEO expertise with cutting-edge AI technologies to help businesses dominate search results. My approach integrates comprehensive SEO strategies with advanced LLM optimization, AI-driven content creation, and Search Generative Experience (SGE) optimization.
                     </motion.p>
                   </div>
                 </motion.div>
               </motion.div>

               {/* LLM Specialization Block */}
               <motion.div
                 className="relative group cursor-pointer"
                 initial={{ opacity: 0, y: 60 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 1, delay: 0.4 }}
                 viewport={{ once: true }}
                 style={{
                   x: useTransform(smoothMouseX, [-100, 100], [6, -6]),
                   rotateY: useTransform(smoothMouseX, [-100, 100], [2, -2]),
                 }}
                 whileHover={{ scale: 1.02, z: 20 }}
               >
                 <motion.div 
                   className="bg-gradient-to-br from-purple-500/10 to-green-500/5 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/20 relative overflow-hidden"
                   whileHover={{ 
                     boxShadow: "0 30px 60px rgba(139, 92, 246, 0.2)",
                     borderColor: "rgba(139, 92, 246, 0.4)"
                   }}
                 >
                   {/* Animated icon */}
                   <motion.div
                     className="absolute top-6 right-6 w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center"
                     animate={{ 
                       scale: [1, 1.1, 1],
                       rotate: [0, 180, 360]
                     }}
                     transition={{ duration: 15, repeat: Infinity }}
                     whileHover={{ scale: 1.2 }}
                   >
                     <FontAwesomeIcon icon={faRobot} className="text-purple-400 text-lg" />
                   </motion.div>

                   {/* Moving background pattern */}
                   <motion.div
                     className="absolute inset-0 opacity-10"
                     animate={{
                       background: [
                         'radial-gradient(circle at 100% 0%, #8b5cf6, transparent)',
                         'radial-gradient(circle at 0% 100%, #8b5cf6, transparent)',
                         'radial-gradient(circle at 100% 0%, #8b5cf6, transparent)',
                       ]
                     }}
                     transition={{ duration: 10, repeat: Infinity }}
                   />

                   <div className="relative z-10">
                     <motion.h3 
                       className="text-2xl font-bold text-white mb-4 flex items-center gap-3"
                       whileHover={{ x: 5 }}
                     >
                       <motion.span
                         className="w-2 h-2 bg-purple-400 rounded-full"
                         animate={{ scale: [1, 1.5, 1] }}
                         transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                       />
                       LLM & AI Tools Mastery
                     </motion.h3>
                     
                     <motion.p 
                       className="text-gray-200 leading-relaxed group-hover:text-white transition-colors duration-500"
                       style={{
                         x: useTransform(smoothMouseX, [-50, 50], [3, -3]),
                       }}
                     >
                       I specialize in leveraging Large Language Models and AI tools like ChatGPT, Claude, and custom AI solutions to enhance SEO performance. From AI-powered keyword research and automated content optimization to prompt engineering for SEO-focused content creation, I stay at the forefront of the AI revolution in search marketing.
                     </motion.p>
                   </div>
                 </motion.div>
               </motion.div>

               {/* Technical Excellence Block */}
               <motion.div
                 className="relative group cursor-pointer"
                 initial={{ opacity: 0, y: 60 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 1, delay: 0.6 }}
                 viewport={{ once: true }}
                 style={{
                   x: useTransform(smoothMouseX, [-100, 100], [-4, 4]),
                   rotateY: useTransform(smoothMouseX, [-100, 100], [-1, 1]),
                 }}
                 whileHover={{ scale: 1.02, z: 20 }}
               >
                 <motion.div 
                   className="bg-gradient-to-br from-green-500/10 to-yellow-500/5 backdrop-blur-xl rounded-3xl p-8 border border-green-500/20 relative overflow-hidden"
                   whileHover={{ 
                     boxShadow: "0 30px 60px rgba(34, 197, 94, 0.2)",
                     borderColor: "rgba(34, 197, 94, 0.4)"
                   }}
                 >
                   {/* Animated icon */}
                   <motion.div
                     className="absolute top-6 right-6 w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center"
                     animate={{ 
                       y: [0, -5, 0],
                       rotate: [0, 360]
                     }}
                     transition={{ 
                       y: { duration: 3, repeat: Infinity },
                       rotate: { duration: 25, repeat: Infinity, ease: "linear" }
                     }}
                     whileHover={{ scale: 1.2 }}
                   >
                     <FontAwesomeIcon icon={faCog} className="text-green-400 text-lg" />
                   </motion.div>

                   {/* Moving background pattern */}
                   <motion.div
                     className="absolute inset-0 opacity-10"
                     animate={{
                       background: [
                         'radial-gradient(circle at 50% 0%, #22c55e, transparent)',
                         'radial-gradient(circle at 50% 100%, #22c55e, transparent)',
                         'radial-gradient(circle at 50% 0%, #22c55e, transparent)',
                       ]
                     }}
                     transition={{ duration: 12, repeat: Infinity }}
                   />

                   <div className="relative z-10">
                     <motion.h3 
                       className="text-2xl font-bold text-white mb-4 flex items-center gap-3"
                       whileHover={{ x: 5 }}
                     >
                       <motion.span
                         className="w-2 h-2 bg-green-400 rounded-full"
                         animate={{ scale: [1, 1.5, 1] }}
                         transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                       />
                       Technical Excellence & Strategy
                     </motion.h3>
                     
                     <motion.p 
                       className="text-gray-200 leading-relaxed group-hover:text-white transition-colors duration-500"
                       style={{
                         x: useTransform(smoothMouseX, [-50, 50], [-2, 2]),
                       }}
                     >
                       My expertise extends beyond traditional SEO to include LLM content optimization, AI-assisted technical audits, automated schema markup generation, and developing strategies that perform well in both traditional search results and AI-powered search experiences. I use industry-leading tools including Google Search Console, Google Analytics, SEMrush, Moz, Ahrefs, alongside AI platforms to deliver comprehensive solutions.
                     </motion.p>
                   </div>
                 </motion.div>
               </motion.div>

               {/* Future-Forward Commitment Block */}
               <motion.div
                 className="relative group cursor-pointer"
                 initial={{ opacity: 0, y: 60 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 1, delay: 0.8 }}
                 viewport={{ once: true }}
                 style={{
                   x: useTransform(smoothMouseX, [-100, 100], [5, -5]),
                   rotateY: useTransform(smoothMouseX, [-100, 100], [1.5, -1.5]),
                 }}
                 whileHover={{ scale: 1.02, z: 20 }}
               >
                 <motion.div 
                   className="bg-gradient-to-br from-orange-500/10 to-red-500/5 backdrop-blur-xl rounded-3xl p-8 border border-orange-500/20 relative overflow-hidden"
                   whileHover={{ 
                     boxShadow: "0 30px 60px rgba(249, 115, 22, 0.2)",
                     borderColor: "rgba(249, 115, 22, 0.4)"
                   }}
                 >
                   {/* Animated icon */}
                   <motion.div
                     className="absolute top-6 right-6 w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center"
                     animate={{ 
                       scale: [1, 1.2, 1],
                       rotate: [0, -180, 0]
                     }}
                     transition={{ duration: 8, repeat: Infinity }}
                     whileHover={{ scale: 1.2 }}
                   >
                     <FontAwesomeIcon icon={faRocket} className="text-orange-400 text-lg" />
                   </motion.div>

                   {/* Moving background pattern */}
                   <motion.div
                     className="absolute inset-0 opacity-10"
                     animate={{
                       background: [
                         'radial-gradient(circle at 0% 50%, #f97316, transparent)',
                         'radial-gradient(circle at 100% 50%, #f97316, transparent)',
                         'radial-gradient(circle at 0% 50%, #f97316, transparent)',
                       ]
                     }}
                     transition={{ duration: 14, repeat: Infinity }}
                   />

                   <div className="relative z-10">
                     <motion.h3 
                       className="text-2xl font-bold text-white mb-4 flex items-center gap-3"
                       whileHover={{ x: 5 }}
                     >
                       <motion.span
                         className="w-2 h-2 bg-orange-400 rounded-full"
                         animate={{ scale: [1, 1.5, 1] }}
                         transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                       />
                       Future-Proofing Your Business
                     </motion.h3>
                     
                     <motion.p 
                       className="text-gray-200 leading-relaxed group-hover:text-white transition-colors duration-500"
                       style={{
                         x: useTransform(smoothMouseX, [-50, 50], [2, -2]),
                       }}
                     >
                       Whether it's optimizing content for AI search engines, implementing AI-driven SEO workflows, or developing LLM-enhanced content strategies, I'm committed to delivering cutting-edge results that future-proof your business in the evolving search landscape.
                     </motion.p>
                   </div>
                 </motion.div>
               </motion.div>
             </div>

             {/* Modern Stats Visualization */}
             <motion.div 
               className="mt-20"
               initial={{ opacity: 0, y: 80 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 1, delay: 1 }}
               viewport={{ once: true }}
             >
               <motion.h3 
                 className="text-3xl font-bold text-white text-center mb-12"
                 style={{
                   x: useTransform(smoothMouseX, [-100, 100], [-10, 10]),
                 }}
               >
                 Key Achievements
               </motion.h3>
               
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 {aboutData.stats.map((stat, index) => (
                   <motion.div
                     key={index}
                     className="relative group cursor-pointer"
                     initial={{ opacity: 0, y: 100, rotateX: -30 }}
                     whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                     transition={{ 
                       duration: 0.8, 
                       delay: index * 0.15,
                       ease: [0.22, 1, 0.36, 1]
                     }}
                     viewport={{ once: true }}
                     onClick={() => setSelectedStat(selectedStat === index ? null : index)}
                     whileHover={{ 
                       scale: 1.08,
                       rotateY: 8,
                       z: 50
                     }}
                     style={{
                       x: useTransform(smoothMouseX, [-100, 100], [-8 + index * 2, 8 - index * 2]),
                       y: useTransform(smoothMouseY, [-100, 100], [-5 + index, 5 - index]),
                     }}
                   >
                     <motion.div 
                       className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 relative overflow-hidden h-40"
                       animate={{
                         borderColor: selectedStat === index ? '#60a5fa' : 'rgba(255, 255, 255, 0.1)',
                         boxShadow: selectedStat === index 
                           ? '0 30px 60px rgba(96, 165, 250, 0.4)'
                           : '0 15px 35px rgba(0, 0, 0, 0.2)'
                       }}
                       transition={{ duration: 0.3 }}
                     >
                       {/* Enhanced animated background */}
                       <motion.div
                         className="absolute inset-0 opacity-20"
                         animate={{
                           background: selectedStat === index
                             ? [
                                 'conic-gradient(from 0deg at 50% 50%, #3b82f6, #8b5cf6, #34d399, #f59e0b, #3b82f6)',
                                 'conic-gradient(from 120deg at 50% 50%, #8b5cf6, #34d399, #f59e0b, #3b82f6, #8b5cf6)',
                                 'conic-gradient(from 240deg at 50% 50%, #34d399, #f59e0b, #3b82f6, #8b5cf6, #34d399)',
                               ]
                             : 'linear-gradient(45deg, transparent, transparent)'
                         }}
                         transition={{ duration: 4, repeat: Infinity }}
                       />
                       
                       <div className="relative z-10 text-center h-full flex flex-col justify-center">
                         <motion.div 
                           className="text-5xl font-black mb-3 text-white"
                           animate={{
                             scale: selectedStat === index ? [1, 1.15, 1] : 1,
                             color: selectedStat === index ? ['#ffffff', '#60a5fa', '#8b5cf6', '#34d399', '#ffffff'] : '#ffffff'
                           }}
                           transition={{ 
                             duration: 1.2, 
                             repeat: selectedStat === index ? Infinity : 0 
                           }}
                         >
                           {stat.number}
                         </motion.div>
                         
                         <p className="text-gray-300 text-base font-medium group-hover:text-white transition-colors duration-300">
                           {stat.label}
                         </p>
                       </div>

                       {/* Enhanced indicator */}
                       <motion.div
                         className="absolute top-4 right-4 w-3 h-3 rounded-full"
                         animate={{
                           backgroundColor: selectedStat === index ? '#60a5fa' : '#ffffff30',
                           scale: selectedStat === index ? [1, 1.8, 1] : [1, 1.2, 1],
                           boxShadow: selectedStat === index 
                             ? ['0 0 0 0 rgba(96, 165, 250, 0.7)', '0 0 0 10px rgba(96, 165, 250, 0)']
                             : '0 0 10px rgba(255, 255, 255, 0.3)'
                         }}
                         transition={{ duration: 1.5, repeat: Infinity }}
                       />
                     </motion.div>
                   </motion.div>
                 ))}
               </div>
             </motion.div>
           </motion.div>
        </div>
      </div>
    </section>
  );
}
