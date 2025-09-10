'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { aboutData } from '@/data/about';
import AnimatedText from './AnimatedText';
import ParallaxContainer from './ParallaxContainer';
import InteractiveBackground from './InteractiveBackground';

export default function About() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const statsY = useTransform(scrollYProgress, [0, 1], ['0%', '-10%']);

  return (
    <section ref={containerRef} id="about" className="py-20 dynamic-bg relative overflow-hidden">
      {/* Interactive Background */}
      <InteractiveBackground variant="primary" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.div className="mb-4">
            <AnimatedText
              text={aboutData.title}
              className="text-4xl md:text-5xl font-bold modern-text-gradient"
              as="h2"
              stagger={0.08}
              delay={0.2}
            />
          </motion.div>
          
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-teal-500 to-emerald-600 mx-auto"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -60, rotateY: -10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ 
              duration: 1, 
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1]
            }}
            viewport={{ once: true }}
            className="space-y-6 group"
          >
            <div className="prose prose-lg max-w-none text-gray-700">
              {aboutData.content.split('\n\n').map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.5 + index * 0.1,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  viewport={{ once: true }}
                  className="mb-6 group-hover:text-gray-800 transition-colors duration-300"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            style={{ y: statsY }}
            initial={{ opacity: 0, x: 60, rotateY: 10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ 
              duration: 1, 
              delay: 0.5,
              ease: [0.22, 1, 0.36, 1]
            }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div 
              className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden group"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 30px 60px rgba(13, 148, 136, 0.2)",
                transition: { duration: 0.3 }
              }}
            >
              {/* Gradient overlay on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-teal-50 to-emerald-50 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
              
              <div className="relative z-10">
                <motion.h3 
                  className="text-2xl font-bold text-gray-900 mb-8 text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  Key Achievements
                </motion.h3>
                
                <div className="space-y-6">
                  {aboutData.stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30, scale: 0.8 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: 0.8 + index * 0.15,
                        ease: [0.22, 1, 0.36, 1]
                      }}
                      whileHover={{ 
                        x: 10,
                        transition: { duration: 0.2 }
                      }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-4 group/stat cursor-pointer"
                    >
                      <motion.div 
                        className="bg-gradient-to-r from-teal-500 to-emerald-600 text-white px-4 py-2 rounded-lg font-bold text-lg min-w-[80px] text-center relative overflow-hidden"
                        whileHover={{
                          scale: 1.1,
                          boxShadow: "0 10px 25px rgba(13, 148, 136, 0.4)",
                          transition: { duration: 0.2 }
                        }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/5"
                          initial={{ x: '-100%' }}
                          whileHover={{ x: '100%' }}
                          transition={{ duration: 0.6 }}
                        />
                        <span className="relative z-10">{stat.number}</span>
                      </motion.div>
                      <p className="text-gray-700 font-medium group-hover/stat:text-teal-700 transition-colors duration-300">
                        {stat.label}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
