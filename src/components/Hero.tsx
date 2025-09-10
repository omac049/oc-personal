'use client';

import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { heroData } from '@/data/hero';
import AnimatedText from './AnimatedText';
import ParallaxContainer from './ParallaxContainer';
import ClientOnly from './ClientOnly';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSearch, 
  faChartLine, 
  faKeyboard, 
  faRocket, 
  faBullseye, 
  faEye,
  faHashtag,
  faLink,
  faCog,
  faLightbulb,
  faGlobe,
  faMagnifyingGlassChart,
  faArrowUp,
  faDesktop,
  faSitemap
} from '@fortawesome/free-solid-svg-icons';

// SEO-related floating icons data
const seoIcons = [
  { icon: faSearch, label: 'Keyword Research', position: { top: '15%', left: '10%' }, speed: 0.8, color: 'text-blue-400' },
  { icon: faChartLine, label: 'Analytics', position: { top: '25%', right: '15%' }, speed: 1.2, color: 'text-green-400' },
  { icon: faBullseye, label: 'Target SEO', position: { top: '60%', left: '8%' }, speed: 0.6, color: 'text-red-400' },
  { icon: faRocket, label: 'Performance', position: { bottom: '20%', right: '12%' }, speed: 1.4, color: 'text-purple-400' },
  { icon: faEye, label: 'Visibility', position: { top: '40%', right: '8%' }, speed: 0.9, color: 'text-yellow-400' },
  { icon: faHashtag, label: 'Keywords', position: { bottom: '35%', left: '15%' }, speed: 1.1, color: 'text-cyan-400' },
  { icon: faLink, label: 'Link Building', position: { top: '70%', right: '25%' }, speed: 0.7, color: 'text-indigo-400' },
  { icon: faLightbulb, label: 'Strategy', position: { top: '30%', left: '20%' }, speed: 1.3, color: 'text-orange-400' },
  { icon: faGlobe, label: 'Global SEO', position: { bottom: '45%', right: '20%' }, speed: 0.8, color: 'text-teal-400' },
  { icon: faMagnifyingGlassChart, label: 'SEO Analysis', position: { top: '80%', left: '25%' }, speed: 1.0, color: 'text-pink-400' },
  { icon: faArrowUp, label: 'Growth', position: { top: '50%', left: '5%' }, speed: 1.2, color: 'text-emerald-400' },
  { icon: faDesktop, label: 'Technical SEO', position: { top: '35%', left: '85%' }, speed: 1.0, color: 'text-rose-400' },
  { icon: faSitemap, label: 'Site Structure', position: { bottom: '60%', left: '30%' }, speed: 0.9, color: 'text-violet-400' },
];

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { damping: 50, stiffness: 400 });
  const smoothMouseY = useSpring(mouseY, { damping: 50, stiffness: 400 });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const mouseInfluenceX = useTransform(smoothMouseX, [-50, 50], [-10, 10]);
  const mouseInfluenceY = useTransform(smoothMouseY, [-50, 50], [-10, 10]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
        setMousePosition({ x, y });
        mouseX.set(x * 50);
        mouseY.set(y * 50);
      }
    };

    const element = containerRef.current;
    if (element) {
      element.addEventListener('mousemove', handleMouseMove);
      return () => element.removeEventListener('mousemove', handleMouseMove);
    }
  }, [mouseX, mouseY]);

  return (
    <section 
      id="hero"
      ref={containerRef}
      className="min-h-screen flex items-center justify-center bg-slate-900 text-white relative overflow-hidden"
    >
      {/* Animated Background Layers */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-black/20"
      ></motion.div>
      
      <ParallaxContainer speed={0.3} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-800/30 via-teal-800/30 to-slate-800/30"></div>
      </ParallaxContainer>

      {/* Dynamic SEO Pattern Background */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{ 
          y: useTransform(scrollYProgress, [0, 1], ['0%', '25%']),
          x: smoothMouseX
        }}
      >
        {/* Animated Grid Pattern */}
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <pattern id="seo-grid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <motion.circle 
                cx="50" 
                cy="50" 
                r="1" 
                fill="currentColor" 
                className="text-teal-400"
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, delay: Math.random() * 2 }}
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#seo-grid)" />
        </svg>
      </motion.div>

      {/* Floating Network Connections */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '40%']) }}
      >
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          {/* Animated connection lines */}
          <motion.path
            d="M200,200 Q400,100 600,200 T1000,200"
            fill="none"
            stroke="rgba(13, 148, 136, 0.5)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M100,400 Q500,300 800,400 T1100,500"
            fill="none"
            stroke="rgba(16, 185, 129, 0.5)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </svg>
      </motion.div>

      {/* Mouse-Interactive Glow */}
      <motion.div
        className="absolute w-96 h-96 bg-gradient-radial from-teal-500/20 to-transparent rounded-full pointer-events-none"
        style={{
          x: smoothMouseX,
          y: smoothMouseY,
          left: '50%',
          top: '50%',
          marginLeft: '-12rem',
          marginTop: '-12rem',
        }}
      />

      {/* Interactive SEO Icons */}
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
              className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-black/80 text-white text-xs rounded-lg whitespace-nowrap backdrop-blur-sm pointer-events-none"
            >
              {seoIcon.label}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/80"></div>
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
            
            {/* Glow Effect */}
            <motion.div
              className="absolute inset-0 rounded-full blur-xl opacity-40"
              style={{ backgroundColor: 'currentColor' }}
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.2, 0.6, 0.2]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                delay: index * 0.1,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>
      ))}

      {/* Additional Parallax Layers */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '15%']) }}
      >
        {/* Floating Code Snippets Effect */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`code-${i}`}
            className="absolute text-emerald-300/30 font-mono text-xs select-none"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + (i % 2) * 70}%`,
            }}
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
              y: [0, -20, 0],
            }}
            transition={{ 
              duration: 5 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut"
            }}
          >
            {['<title>SEO</title>', 'meta name="keywords"', 'schema.org', 'robots.txt', 'sitemap.xml', 'alt="image"'][i]}
          </motion.div>
        ))}
      </motion.div>
      
      {/* Main Content */}
      <motion.div 
        style={{ 
          y: textY,
          x: useTransform(smoothMouseX, [-50, 50], [-10, 10])
        }}
        className="relative z-30 text-center max-w-4xl mx-auto px-6"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 1.2, 
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-6"
        >
          <AnimatedText
            text={heroData.name}
            className="text-5xl md:text-6xl font-light tracking-tight"
            stagger={0.05}
            delay={0.3}
            as="h1"
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30, rotateX: 90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ 
            duration: 1,
            delay: 0.8,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="mb-8"
        >
          <AnimatedText
            text={heroData.headline}
            className="text-2xl md:text-3xl font-light text-emerald-100"
            stagger={0.02}
            delay={1.2}
            as="h2"
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 1.6,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="mb-12"
        >
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            {heroData.subheading}
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 2,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          <motion.a
            href={heroData.cta.href}
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 20px 40px rgba(13, 148, 136, 0.4)",
              y: -5
            }}
            whileTap={{ scale: 0.95 }}
            className="group inline-block bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-500 shadow-lg hover:shadow-xl relative overflow-hidden"
          >
              {/* Particle Trail Effect */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{ 
                  background: [
                    'radial-gradient(circle at 20% 50%, rgba(13, 148, 136, 0.3) 0%, transparent 50%)',
                    'radial-gradient(circle at 80% 50%, rgba(16, 185, 129, 0.3) 0%, transparent 50%)',
                    'radial-gradient(circle at 20% 50%, rgba(13, 148, 136, 0.3) 0%, transparent 50%)'
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/5"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
              
              {/* Floating Icons around button */}
              <motion.div
                className="absolute -top-2 -left-2 text-teal-200 opacity-0 group-hover:opacity-70"
                animate={{ 
                  rotate: [0, 360],
                  scale: [0.8, 1.2, 0.8]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <FontAwesomeIcon icon={faRocket} className="w-3 h-3" />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-2 -right-2 text-emerald-200 opacity-0 group-hover:opacity-70"
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
