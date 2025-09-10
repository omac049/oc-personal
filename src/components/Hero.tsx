'use client';

import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { heroData } from '@/data/hero';
import AnimatedText from './AnimatedText';
import AlgorithmBackground from './AlgorithmBackground';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSearch, 
  faChartLine, 
  faRocket, 
  faBullseye, 
  faEye,
  faHashtag,
  faLink,
  faLightbulb,
  faGlobe,
  faMagnifyingGlassChart,
  faArrowUp,
  faDesktop,
  faSitemap
} from '@fortawesome/free-solid-svg-icons';



// SEO-related floating icons data - Updated with brand colors
const seoIcons = [
  { icon: faSearch, label: 'Keyword Research', position: { top: '15%', left: '10%' }, speed: 0.8, color: 'text-blue-700' },
  { icon: faChartLine, label: 'Analytics', position: { top: '25%', right: '15%' }, speed: 1.2, color: 'text-amber-400' },
  { icon: faBullseye, label: 'Target SEO', position: { top: '60%', left: '8%' }, speed: 0.6, color: 'text-blue-600' },
  { icon: faRocket, label: 'Performance', position: { bottom: '20%', right: '12%' }, speed: 1.4, color: 'text-amber-400' },
  { icon: faEye, label: 'Visibility', position: { top: '40%', right: '8%' }, speed: 0.9, color: 'text-blue-700' },
  { icon: faHashtag, label: 'Keywords', position: { bottom: '35%', left: '15%' }, speed: 1.1, color: 'text-amber-400' },
  { icon: faLink, label: 'Link Building', position: { top: '70%', right: '25%' }, speed: 0.7, color: 'text-blue-600' },
  { icon: faLightbulb, label: 'Strategy', position: { top: '30%', left: '20%' }, speed: 1.3, color: 'text-amber-400' },
  { icon: faGlobe, label: 'Global SEO', position: { bottom: '45%', right: '20%' }, speed: 0.8, color: 'text-blue-700' },
  { icon: faMagnifyingGlassChart, label: 'SEO Analysis', position: { top: '80%', left: '25%' }, speed: 1.0, color: 'text-blue-600' },
  { icon: faArrowUp, label: 'Growth', position: { top: '50%', left: '5%' }, speed: 1.2, color: 'text-amber-400' },
  { icon: faDesktop, label: 'Technical SEO', position: { top: '35%', left: '85%' }, speed: 1.0, color: 'text-blue-700' },
  { icon: faSitemap, label: 'Site Structure', position: { bottom: '60%', left: '30%' }, speed: 0.9, color: 'text-blue-600' },
];

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const mouseX = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { damping: 50, stiffness: 400 });

  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        mouseX.set(x * 50);
      }
    };

    const element = containerRef.current;
    if (element) {
      element.addEventListener('mousemove', handleMouseMove);
      return () => element.removeEventListener('mousemove', handleMouseMove);
    }
  }, [mouseX]);

  return (
    <section 
      id="hero"
      ref={containerRef}
      className="min-h-screen flex items-center justify-center bg-slate-900 text-white relative overflow-hidden"
    >
      {/* Global Algorithm Background */}
      <AlgorithmBackground opacity="opacity-10" />

      {/* Interactive SEO Icons - Updated colors */}
      {seoIcons.map((seoIcon, index) => (
        <motion.div
          key={index}
          className={`absolute z-20 ${seoIcon.color} opacity-70 hover:opacity-100 transition-opacity duration-300 group`}
          style={{
            ...seoIcon.position,
            transform: `translateY(${index * 2}px)`,
          }}
          whileHover={{ 
            scale: 1.8,
            rotate: 360,
            transition: { duration: 0.4 }
          }}
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{ 
            duration: 4 + index * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.2
          }}
        >
          <div className="relative">
            <FontAwesomeIcon 
              icon={seoIcon.icon} 
              className="w-6 h-6 md:w-8 md:h-8 drop-shadow-lg filter" 
            />
            
            {/* Floating Tooltip */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              whileHover={{ opacity: 1, scale: 1, y: 0 }}
              className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-slate-800/90 text-white text-xs rounded-lg whitespace-nowrap backdrop-blur-sm pointer-events-none border border-slate-700/50"
            >
              {seoIcon.label}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-800/90"></div>
            </motion.div>
            
            {/* Pulse Ring Effect */}
            <motion.div
              className="absolute inset-0 border-2 border-current rounded-full opacity-30"
              animate={{ 
                scale: [1, 2, 1],
                opacity: [0.3, 0, 0.3]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                delay: index * 0.3,
                ease: "easeOut"
              }}
            />
          </div>
        </motion.div>
      ))}
      
      {/* Main Content */}
      <motion.div 
        style={{ 
          y: textY,
          x: useTransform(smoothMouseX, [-50, 50], [-10, 10])
        }}
        className="relative z-30 text-center max-w-4xl mx-auto px-6"
      >
        <motion.div
          initial={{ opacity: 0.8, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.6, 
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-6"
        >
          <AnimatedText
            text={heroData.name}
            className="text-5xl md:text-6xl font-light tracking-tight"
            stagger={0.03}
            delay={0.1}
            as="h1"
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0.6, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="mb-8"
        >
          <AnimatedText
            text={heroData.headline}
            className="text-2xl md:text-3xl font-light text-slate-300"
            stagger={0.01}
            delay={0.3}
            as="h2"
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0.4, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.4, 
            delay: 0.4,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="mb-12"
        >
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {heroData.subheading}
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0.3, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5, 
            delay: 0.6,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          <motion.a
            href={heroData.cta.href}
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 20px 40px rgba(30, 64, 175, 0.4)",
              y: -5
            }}
            whileTap={{ scale: 0.95 }}
            className="group inline-block bg-blue-700 hover:bg-blue-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-500 shadow-lg hover:shadow-xl relative overflow-hidden"
          >
              {/* Floating Icons around button */}
              <motion.div
                className="absolute -top-2 -left-2 text-amber-400 opacity-0 group-hover:opacity-70"
                animate={{ 
                  rotate: [0, 360],
                  scale: [0.8, 1.2, 0.8]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <FontAwesomeIcon icon={faRocket} className="w-3 h-3" />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-2 -right-2 text-amber-400 opacity-0 group-hover:opacity-70"
                animate={{ 
                  rotate: [360, 0],
                  scale: [0.8, 1.2, 0.8]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                <FontAwesomeIcon icon={faChartLine} className="w-3 h-3" />
              </motion.div>
              
              <span className="relative z-10">{heroData.cta.text}</span>
            </motion.a>
        </motion.div>
      </motion.div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}
