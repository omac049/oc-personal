'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { experienceData } from '@/data/experience';

export default function Experience() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Simple parallax for background elements
  const parallaxY = useTransform(scrollYProgress, [0, 1], ['0%', '-10%']);

  return (
    <section ref={containerRef} id="experience" className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 relative overflow-hidden">
      {/* Minimal Elegant Background */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: parallaxY }}
      >
        {/* Subtle gradient orbs */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500/4 rounded-full blur-3xl"
          animate={{ 
            scale: [1.1, 1, 1.1],
            opacity: [0.4, 0.2, 0.4]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
      
      <div className="max-w-5xl mx-auto px-6 relative z-30 py-20">
        {/* Elegant Minimal Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-light text-white mb-6 tracking-tight"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {experienceData.title.split('').map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.02,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className="inline-block"
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.h2>

          <motion.div
            className="w-16 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto mb-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          />
          
          <motion.p 
            className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {experienceData.subtitle}
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Modern Timeline line */}
          <motion.div 
            className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-400/60 via-purple-400/40 to-cyan-400/60"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            viewport={{ once: true }}
          />

          <div className="space-y-16">
            {experienceData.timeline.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ 
                  opacity: 0, 
                  y: 60,
                  filter: "blur(4px)"
                }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  filter: "blur(0px)"
                }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:justify-between group`}
              >
                {/* Modern Timeline dot */}
                <motion.div 
                  className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-1/2 w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full border-2 border-slate-900 shadow-lg z-20"
                  whileHover={{
                    scale: 1.4,
                    boxShadow: "0 0 20px rgba(59, 130, 246, 0.6)",
                    transition: { duration: 0.2 }
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.15 + 0.4, duration: 0.4, type: "spring", bounce: 0.3 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  />
                </motion.div>

                {/* Modern Content Card */}
                <motion.div 
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? 'md:pr-12 pl-20 md:pl-0' : 'md:pl-12 pl-20 md:pr-0'
                  }`}
                  whileHover={{ 
                    y: -4,
                    transition: { duration: 0.2, ease: "easeOut" }
                  }}
                >
                  <motion.div 
                    className="relative p-8 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:border-white/20 hover:bg-white/[0.06] transition-all duration-300"
                    whileHover={{
                      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)"
                    }}
                  >
                    {/* Subtle gradient overlay */}
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    />
                    
                    <div className="relative z-10">
                      <motion.div className="mb-6">
                        <motion.h3 
                          className="text-2xl font-medium text-white mb-3"
                          initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.15 + 0.2, duration: 0.6 }}
                          viewport={{ once: true }}
                        >
                          {job.position}
                        </motion.h3>
                        
                        <motion.div 
                          className="flex flex-wrap items-center gap-4 mb-3"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: index * 0.15 + 0.3 }}
                          viewport={{ once: true }}
                        >
                          <h4 className="text-lg font-medium text-blue-400 hover:text-blue-300 transition-colors">
                            {job.company}
                          </h4>
                          <span className="text-sm text-gray-400">
                            {job.location}
                          </span>
                        </motion.div>
                        
                        <motion.span 
                          className="text-sm font-medium text-purple-300 bg-purple-500/20 px-3 py-1 rounded-full inline-block"
                          initial={{ scale: 0, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          transition={{ 
                            delay: index * 0.15 + 0.4, 
                            duration: 0.4,
                            type: "spring",
                            bounce: 0.2
                          }}
                          viewport={{ once: true }}
                          whileHover={{ 
                            scale: 1.05,
                            boxShadow: "0 4px 12px rgba(139, 92, 246, 0.3)"
                          }}
                        >
                          {job.period}
                        </motion.span>
                      </motion.div>
                      
                      <motion.p 
                        className="text-gray-300 mb-6 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.15 + 0.5, duration: 0.6 }}
                        viewport={{ once: true }}
                      >
                        {job.description}
                      </motion.p>

                      <motion.div 
                        className="mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.15 + 0.6, duration: 0.6 }}
                        viewport={{ once: true }}
                      >
                        <h5 className="font-medium text-white mb-4">Key Achievements:</h5>
                        <ul className="space-y-3">
                          {job.achievements.map((achievement, achIndex) => (
                            <motion.li 
                              key={achIndex} 
                              className="flex items-start space-x-3 group/achievement"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ 
                                delay: index * 0.15 + 0.7 + achIndex * 0.05,
                                duration: 0.5
                              }}
                              whileHover={{ x: 4 }}
                              viewport={{ once: true }}
                            >
                              <motion.div 
                                className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2 flex-shrink-0"
                                whileHover={{ scale: 1.3 }}
                              />
                              <span className="text-gray-300 text-sm group-hover/achievement:text-white transition-colors leading-relaxed">
                                {achievement}
                              </span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.15 + 0.8, duration: 0.6 }}
                        viewport={{ once: true }}
                      >
                        <h5 className="font-medium text-white mb-4">Technologies & Skills:</h5>
                        <div className="flex flex-wrap gap-2">
                          {job.technologies.map((tech, techIndex) => (
                            <motion.span
                              key={techIndex}
                              className="bg-white/10 hover:bg-blue-500/20 text-gray-300 hover:text-blue-300 text-xs px-3 py-1.5 rounded-full font-medium transition-all duration-200 border border-white/5 hover:border-blue-400/30"
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ 
                                delay: index * 0.15 + 0.9 + techIndex * 0.03,
                                duration: 0.3
                              }}
                              whileHover={{ 
                                scale: 1.05,
                                boxShadow: "0 4px 12px rgba(59, 130, 246, 0.2)"
                              }}
                              viewport={{ once: true }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
