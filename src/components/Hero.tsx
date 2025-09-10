'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { heroData } from '@/data/hero';
import AnimatedText from './AnimatedText';
import ParallaxContainer from './ParallaxContainer';

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <section 
      id="hero"
      ref={containerRef}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-900 via-teal-900 to-slate-900 text-white relative overflow-hidden"
    >
      {/* Animated Background Layers */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-black/20"
      ></motion.div>
      
      <ParallaxContainer speed={0.3} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-800/30 via-teal-800/30 to-slate-800/30"></div>
      </ParallaxContainer>

      {/* Floating Elements */}
      <motion.div
        animate={{ 
          y: [0, -10, 0],
          rotate: [0, 1, 0],
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut" 
        }}
        className="absolute top-20 left-20 w-2 h-2 bg-teal-400 rounded-full opacity-60"
      />
      <motion.div
        animate={{ 
          y: [0, 10, 0],
          rotate: [0, -1, 0],
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-32 right-32 w-3 h-3 bg-emerald-400 rounded-full opacity-40"
      />
      
      {/* Main Content */}
      <motion.div 
        style={{ y: textY }}
        className="relative z-10 text-center max-w-4xl mx-auto px-6"
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
            className="text-5xl md:text-7xl font-bold leading-tight"
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
              boxShadow: "0 20px 40px rgba(13, 148, 136, 0.3)",
              rotateY: 5
            }}
            whileTap={{ scale: 0.95 }}
            className="group inline-block bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-500 shadow-lg hover:shadow-xl relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/5"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6 }}
            />
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
