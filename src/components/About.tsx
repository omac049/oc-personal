'use client';

import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { aboutData } from '@/data/about';
import Image from 'next/image';
import AlgorithmBackground from './AlgorithmBackground';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faRocket, 
  faBrain, 
  faChartLine, 
  faLightbulb,
  faCog,
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
  const [selectedStat, setSelectedStat] = useState<number | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
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
    <section ref={containerRef} id="about" className="min-h-screen bg-slate-900 relative overflow-hidden">
      {/* Global Algorithm Background */}
      <AlgorithmBackground opacity="opacity-5" />
      
      {/* Simplified Interactive Background Elements */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: parallaxY, x: parallaxX }}
      >
        {/* Simplified morphing shapes */}
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-purple-500/8 to-green-500/4 blur-3xl"
          animate={{ 
            scale: [1.1, 0.9, 1.1],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Dynamic mesh grid */}
        <motion.div
          className="absolute inset-0 opacity-3"
          style={{
            backgroundImage: `
              linear-gradient(rgba(96, 165, 246, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(96, 165, 246, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '60px 60px', '0px 0px'],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      {/* Simplified Mouse-Reactive Floating Elements */}
      {modernElements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute z-5 pointer-events-none"
          style={{
            ...element.position,
          }}
          animate={{
            rotate: [0, 360],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            rotate: { duration: 15 + index * 3, repeat: Infinity, ease: "linear" },
            opacity: { duration: 4 + index * 0.5, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <motion.div
            className={`${element.size} rounded-lg backdrop-blur-sm flex items-center justify-center`}
            style={{ 
              backgroundColor: `${element.color}10`
            }}
            whileHover={{ scale: 1.2, opacity: 0.5 }}
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
          {/* Title Section */}
          <motion.div 
            className="relative inline-block mb-16"
            style={{
              x: mouseParallaxX,
              y: mouseParallaxY,
            }}
          >
            <motion.h2 
              className="text-5xl md:text-6xl font-light text-white mb-6 tracking-tight"
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

            {/* Simplified underline */}
            <motion.div
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-full"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: '100%', opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
          </motion.div>
          
          {/* Descriptive text */}
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
          </motion.div>
        </motion.div>

        {/* Modern Layout Grid - Mobile optimized */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Profile Section - Simplified Design */}
          <motion.div 
            className="lg:col-span-2 order-1 lg:order-none"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="relative bg-white/8 backdrop-blur-xl rounded-3xl p-8 border border-white/15 overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              style={{
                x: useTransform(smoothMouseX, [-100, 100], [-10, 10]),
                y: useTransform(smoothMouseY, [-100, 100], [-5, 5]),
              }}
            >
              {/* Simplified background gradient */}
              <motion.div
                className="absolute inset-0 opacity-20"
                animate={{
                  background: [
                    'linear-gradient(45deg, #3b82f6, #8b5cf6, #34d399)',
                    'linear-gradient(135deg, #8b5cf6, #34d399, #3b82f6)',
                    'linear-gradient(225deg, #34d399, #3b82f6, #8b5cf6)',
                  ]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />

              {/* Omar's Professional Headshot - Responsive sizing */}
              <motion.div 
                className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-green-600 p-1"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className="w-full h-full rounded-xl overflow-hidden bg-white relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="https://media.licdn.com/dms/image/v2/C4E03AQFSbqu1dYqIfQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1592950261941?e=1760572800&v=beta&t=Iwd5Dt6WeeGm5dR87fRLSggJZVgeDbO8enrBvt64SY4"
                    alt="Omar Corral - AI-Powered SEO Specialist"
                    fill
                    className="object-cover object-center"
                    style={{
                      filter: 'brightness(1.1) contrast(1.05) saturate(1.1)'
                    }}
                  />
                </motion.div>
              </motion.div>

              {/* Professional Info */}
              <div className="text-center relative z-10">
                <motion.h3 
                  className="text-xl sm:text-2xl font-bold text-white mb-2"
                >
                  Omar Corral
                </motion.h3>
                <p className="text-blue-200 mb-4 text-sm sm:text-base">AI-Powered SEO Specialist</p>
                
                {/* Skill badges */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {['AI Strategy', 'LLM Optimization', 'Technical SEO', 'Analytics'].map((skill, index) => (
                    <motion.span
                      key={skill}
                      className="px-2 py-1 sm:px-3 bg-white/10 backdrop-blur-sm rounded-full text-xs sm:text-xs text-white border border-white/20"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
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
            className="lg:col-span-3 space-y-8 lg:space-y-16 order-2 lg:order-none"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            viewport={{ once: true }}
          >
                         {/* Creative Content Blocks with Right-to-Left Animation */}
            <div className="space-y-16">
                             {/* AI Expertise Block */}
               <motion.div
                 className="relative group"
                 initial={{ opacity: 0, x: 300 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                 viewport={{ once: true, margin: "-100px" }}
                 whileHover={{ scale: 1.02, x: -10 }}
              >
                <motion.div 
                  className="relative bg-white/8 backdrop-blur-xl rounded-2xl p-8 border border-blue-500/20 overflow-hidden"
                  style={{
                    x: useTransform(smoothMouseX, [-100, 100], [-5, 5]),
                  }}
                >
                  {/* Simplified corner accent */}
                  <motion.div
                    className="absolute top-0 left-0 w-16 h-16 bg-blue-400/10 rounded-br-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />

                  {/* Simple floating icon */}
                  <motion.div
                    className="absolute top-6 right-6 w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <FontAwesomeIcon icon={faBrain} className="text-blue-400 text-lg" />
                  </motion.div>

                                     {/* Content with right slide-in animation */}
                   <div className="relative z-10">
                                          <motion.div
                        className="flex items-start gap-4 mb-6"
                        initial={{ opacity: 0, x: 200 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        viewport={{ once: true }}
                     >
                      <motion.div
                        className="w-1 h-16 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        transition={{ delay: 0.6, duration: 1 }}
                        viewport={{ once: true }}
                      />
                      <div>
                                                 <motion.h3 
                           className="text-xl sm:text-2xl font-bold text-white mb-2"
                           initial={{ opacity: 0, x: 150 }}
                           whileInView={{ opacity: 1, x: 0 }}
                           transition={{ delay: 0.5, duration: 0.8 }}
                           viewport={{ once: true }}
                        >
                          AI-Powered SEO Innovation
                        </motion.h3>
                                                 <motion.div
                           className="flex gap-2 mb-4"
                           initial={{ opacity: 0, x: 100 }}
                           whileInView={{ opacity: 1, x: 0 }}
                           transition={{ delay: 0.7, duration: 0.6 }}
                           viewport={{ once: true }}
                        >
                          {['AI', 'LLM', 'SGE'].map((tag, i) => (
                            <span
                              key={tag}
                              className="px-3 py-1 bg-blue-500/15 text-blue-300 text-sm rounded-full border border-blue-400/20"
                            >
                              {tag}
                            </span>
                          ))}
                        </motion.div>
                      </div>
                    </motion.div>
                    
                                         <motion.p 
                       className="text-gray-200 leading-relaxed text-sm sm:text-base"
                       initial={{ opacity: 0, x: 250 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       transition={{ delay: 0.9, duration: 1 }}
                       viewport={{ once: true }}
                    >
                      I&apos;m a forward-thinking SEO specialist and digital marketing strategist who combines traditional SEO expertise with cutting-edge AI technologies to help businesses dominate search results. My approach integrates comprehensive SEO strategies with advanced LLM optimization, AI-driven content creation, and Search Generative Experience (SGE) optimization.
                    </motion.p>
                  </div>
                </motion.div>
              </motion.div>

                             {/* LLM Specialization Block */}
               <motion.div
                 className="relative group"
                 initial={{ opacity: 0, x: 300 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                 viewport={{ once: true, margin: "-100px" }}
                 whileHover={{ scale: 1.02, x: -10 }}
              >
                <motion.div 
                  className="relative bg-white/8 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/20 overflow-hidden"
                  style={{
                    x: useTransform(smoothMouseX, [-100, 100], [5, -5]),
                  }}
                >
                  {/* Simplified corner accent */}
                  <motion.div
                    className="absolute top-0 right-0 w-20 h-20 bg-purple-400/10 rounded-bl-full"
                    animate={{
                      scale: [1.1, 1, 1.1],
                      opacity: [0.2, 0.1, 0.2]
                    }}
                    transition={{ duration: 3.5, repeat: Infinity }}
                  />

                  {/* Simple floating icon */}
                  <motion.div
                    className="absolute top-6 right-6 w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center"
                    animate={{ rotate: [0, -360] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  >
                    <FontAwesomeIcon icon={faRobot} className="text-purple-400 text-lg" />
                  </motion.div>

                                     {/* Content with right slide-in animation */}
                   <div className="relative z-10">
                                          <motion.div
                        className="flex items-start gap-4 mb-6"
                        initial={{ opacity: 0, x: 200 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                      <div>
                                                 <motion.h3 
                           className="text-2xl font-bold text-white mb-2"
                           initial={{ opacity: 0, x: 150 }}
                           whileInView={{ opacity: 1, x: 0 }}
                           transition={{ delay: 0.7, duration: 0.8 }}
                           viewport={{ once: true }}
                        >
                          LLM & AI Tools Mastery
                        </motion.h3>
                                                 <motion.div
                           className="flex gap-2 mb-4"
                           initial={{ opacity: 0, x: 100 }}
                           whileInView={{ opacity: 1, x: 0 }}
                           transition={{ delay: 0.9, duration: 0.6 }}
                           viewport={{ once: true }}
                        >
                          {['ChatGPT', 'Claude', 'Tools'].map((tag, i) => (
                            <span
                              key={tag}
                              className="px-3 py-1 bg-purple-500/15 text-purple-300 text-sm rounded-full border border-purple-400/20"
                            >
                              {tag}
                            </span>
                          ))}
                        </motion.div>
                      </div>
                      <motion.div
                        className="w-1 h-16 bg-gradient-to-b from-purple-400 to-green-400 rounded-full ml-auto"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        transition={{ delay: 0.8, duration: 1 }}
                        viewport={{ once: true }}
                      />
                    </motion.div>
                    
                                         <motion.p 
                       className="text-gray-200 leading-relaxed text-base"
                       initial={{ opacity: 0, x: 250 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       transition={{ delay: 1.1, duration: 1 }}
                       viewport={{ once: true }}
                    >
                      I specialize in leveraging Large Language Models and AI tools like ChatGPT, Claude, and custom AI solutions to enhance SEO performance. From AI-powered keyword research and automated content optimization to prompt engineering for SEO-focused content creation, I stay at the forefront of the AI revolution in search marketing.
                    </motion.p>
                  </div>
                </motion.div>
              </motion.div>

                             {/* Technical Excellence Block */}
               <motion.div
                 className="relative group"
                 initial={{ opacity: 0, x: 300 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                 viewport={{ once: true, margin: "-100px" }}
                 whileHover={{ scale: 1.02, x: -10 }}
              >
                <motion.div 
                  className="relative bg-white/8 backdrop-blur-xl rounded-2xl p-8 border border-green-500/20 overflow-hidden"
                  style={{
                    x: useTransform(smoothMouseX, [-100, 100], [-3, 3]),
                  }}
                >
                  {/* Simplified corner accent */}
                  <motion.div
                    className="absolute top-0 left-0 w-18 h-18 bg-green-400/10 rounded-br-full"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />

                  {/* Simple floating icon */}
                  <motion.div
                    className="absolute top-6 right-6 w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center"
                    animate={{ 
                      y: [0, -5, 0],
                      rotate: [0, 360]
                    }}
                    transition={{ 
                      y: { duration: 3, repeat: Infinity },
                      rotate: { duration: 25, repeat: Infinity, ease: "linear" }
                    }}
                  >
                    <FontAwesomeIcon icon={faCog} className="text-green-400 text-lg" />
                  </motion.div>

                                     {/* Content with right slide-in animation */}
                   <div className="relative z-10">
                                          <motion.div
                        className="flex items-start gap-4 mb-6"
                        initial={{ opacity: 0, x: 200 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                      <motion.div
                        className="w-1 h-16 bg-gradient-to-b from-green-400 to-yellow-400 rounded-full"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        viewport={{ once: true }}
                      />
                      <div>
                                                 <motion.h3 
                           className="text-2xl font-bold text-white mb-2"
                           initial={{ opacity: 0, x: 150 }}
                           whileInView={{ opacity: 1, x: 0 }}
                           transition={{ delay: 0.9, duration: 0.8 }}
                           viewport={{ once: true }}
                        >
                          Technical Excellence & Strategy
                        </motion.h3>
                                                 <motion.div
                           className="flex gap-2 mb-4"
                           initial={{ opacity: 0, x: 100 }}
                           whileInView={{ opacity: 1, x: 0 }}
                           transition={{ delay: 1.1, duration: 0.6 }}
                           viewport={{ once: true }}
                        >
                          {['Analytics', 'Audits', 'Schema'].map((tag, i) => (
                            <span
                              key={tag}
                              className="px-3 py-1 bg-green-500/15 text-green-300 text-sm rounded-full border border-green-400/20"
                            >
                              {tag}
                            </span>
                          ))}
                        </motion.div>
                      </div>
                    </motion.div>
                    
                                         <motion.p 
                       className="text-gray-200 leading-relaxed text-base"
                       initial={{ opacity: 0, x: 250 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       transition={{ delay: 1.3, duration: 1 }}
                       viewport={{ once: true }}
                    >
                      My expertise extends beyond traditional SEO to include LLM content optimization, AI-assisted technical audits, automated schema markup generation, and developing strategies that perform well in both traditional search results and AI-powered search experiences. I use industry-leading tools including Google Search Console, Google Analytics, SEMrush, Moz, Ahrefs, alongside AI platforms to deliver comprehensive solutions.
                    </motion.p>
                  </div>
                </motion.div>
              </motion.div>

                             {/* Future-Forward Commitment Block */}
               <motion.div
                 className="relative group"
                 initial={{ opacity: 0, x: 300 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                 viewport={{ once: true, margin: "-100px" }}
                 whileHover={{ scale: 1.02, x: -10 }}
              >
                <motion.div 
                  className="relative bg-white/8 backdrop-blur-xl rounded-2xl p-8 border border-orange-500/20 overflow-hidden"
                  style={{
                    x: useTransform(smoothMouseX, [-100, 100], [3, -3]),
                  }}
                >
                  {/* Simplified corner accent */}
                  <motion.div
                    className="absolute top-0 right-0 w-24 h-24 bg-orange-400/10 rounded-bl-full"
                    animate={{
                      scale: [1.2, 1, 1.2],
                      opacity: [0.2, 0.1, 0.2]
                    }}
                    transition={{ duration: 4.5, repeat: Infinity }}
                  />

                  {/* Simple floating icon */}
                  <motion.div
                    className="absolute top-6 right-6 w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 360]
                    }}
                    transition={{ 
                      scale: { duration: 2, repeat: Infinity },
                      rotate: { duration: 12, repeat: Infinity, ease: "easeInOut" }
                    }}
                  >
                    <FontAwesomeIcon icon={faRocket} className="text-orange-400 text-lg" />
                  </motion.div>

                                     {/* Content with right slide-in animation */}
                   <div className="relative z-10">
                                          <motion.div
                        className="flex items-start gap-4 mb-6"
                        initial={{ opacity: 0, x: 200 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                      <div>
                                                 <motion.h3 
                           className="text-2xl font-bold text-white mb-2"
                           initial={{ opacity: 0, x: 150 }}
                           whileInView={{ opacity: 1, x: 0 }}
                           transition={{ delay: 1.1, duration: 0.8 }}
                           viewport={{ once: true }}
                        >
                          Future-Proofing Your Business
                        </motion.h3>
                                                 <motion.div
                           className="flex gap-2 mb-4"
                           initial={{ opacity: 0, x: 100 }}
                           whileInView={{ opacity: 1, x: 0 }}
                           transition={{ delay: 1.3, duration: 0.6 }}
                           viewport={{ once: true }}
                        >
                          {['Innovation', 'Strategy', 'Growth'].map((tag, i) => (
                            <span
                              key={tag}
                              className="px-3 py-1 bg-orange-500/15 text-orange-300 text-sm rounded-full border border-orange-400/20"
                            >
                              {tag}
                            </span>
                          ))}
                        </motion.div>
                      </div>
                      <motion.div
                        className="w-1 h-16 bg-gradient-to-b from-orange-400 to-red-400 rounded-full ml-auto"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        transition={{ delay: 1.2, duration: 1 }}
                        viewport={{ once: true }}
                      />
                    </motion.div>
                    
                                         <motion.p 
                       className="text-gray-200 leading-relaxed text-base"
                       initial={{ opacity: 0, x: 250 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       transition={{ delay: 1.5, duration: 1 }}
                       viewport={{ once: true }}
                    >
                      Whether it&apos;s optimizing content for AI search engines, implementing AI-driven SEO workflows, or developing LLM-enhanced content strategies, I&apos;m committed to delivering cutting-edge results that future-proof your business in the evolving search landscape.
                    </motion.p>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Simplified Stats Visualization */}
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
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {aboutData.stats.map((stat, index) => (
                                     <motion.div
                     key={index}
                     className="relative group"
                     initial={{ opacity: 0, x: 200 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     transition={{ 
                       duration: 0.8, 
                       delay: index * 0.15,
                       ease: [0.22, 1, 0.36, 1]
                     }}
                     viewport={{ once: true }}
                     onClick={() => setSelectedStat(selectedStat === index ? null : index)}
                     whileHover={{ 
                       scale: 1.05,
                       x: -10
                     }}
                    style={{
                      x: mouseParallaxX,
                      y: mouseParallaxY,
                    }}
                  >
                    <motion.div 
                      className="bg-white/8 backdrop-blur-xl rounded-2xl p-8 border border-white/15 relative overflow-hidden h-40 cursor-pointer"
                      animate={{
                        borderColor: selectedStat === index ? '#60a5fa' : 'rgba(255, 255, 255, 0.15)',
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="relative z-10 text-center h-full flex flex-col justify-center">
                        <motion.div 
                          className="text-5xl font-black mb-3 text-white"
                          animate={{
                            scale: selectedStat === index ? [1, 1.1, 1] : 1,
                            color: selectedStat === index ? ['#ffffff', '#60a5fa', '#8b5cf6', '#ffffff'] : '#ffffff'
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

                      {/* Simple indicator */}
                      <motion.div
                        className="absolute top-4 right-4 w-3 h-3 rounded-full"
                        animate={{
                          backgroundColor: selectedStat === index ? '#60a5fa' : '#ffffff20',
                          scale: selectedStat === index ? [1, 1.5, 1] : 1,
                        }}
                        transition={{ duration: 1, repeat: selectedStat === index ? Infinity : 0 }}
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
