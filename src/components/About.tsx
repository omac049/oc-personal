'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { aboutData } from '@/data/about';
import AlgorithmBackground from './AlgorithmBackground';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faRocket, 
  faBrain, 
  faCog
} from '@fortawesome/free-solid-svg-icons';

export default function About() {
  const containerRef = useRef<HTMLElement>(null);
  const [selectedStat, setSelectedStat] = useState<number | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const parallaxY = useTransform(scrollYProgress, [0, 1], ['0%', '-10%']);

  return (
    <section ref={containerRef} id="about" className="min-h-screen bg-slate-900 relative overflow-hidden" suppressHydrationWarning>
      {/* Global Algorithm Background */}
      <AlgorithmBackground opacity="opacity-5" />
      
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: parallaxY }}
      >
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-purple-500/8 to-green-500/4 blur-3xl" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30 pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 lg:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20 lg:mb-24"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 sm:mb-6 tracking-tight">
            {aboutData.title}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-full mx-auto mb-6" />
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            SEO strategist who bridges traditional search and the AI era
          </p>
        </motion.div>

        {/* Modern Layout Grid - Enhanced Mobile optimized */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12 items-start">
          <motion.div 
            className="lg:col-span-2 order-1 lg:order-none px-2 sm:px-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative bg-white/8 backdrop-blur-xl rounded-3xl p-4 sm:p-6 lg:p-8 border border-white/15 overflow-hidden">
              <div className="relative z-10">
                <p className="text-gray-200 leading-relaxed text-sm sm:text-base mb-6">
                  I&apos;ve spent over a decade helping businesses grow through search. Today that means optimizing not just for Google, but for the AI models that increasingly shape how people discover brands.
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {['SEO Strategy', 'AI & LLM Optimization', 'Technical Audits', 'Analytics & Reporting'].map((skill, index) => (
                    <motion.span
                      key={skill}
                      className="px-2 py-1 sm:px-3 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white border border-white/20"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="lg:col-span-3 space-y-8 lg:space-y-12 order-2 lg:order-none"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              <motion.div
                 className="relative group"
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                 viewport={{ once: true, margin: "-50px" }}
              >
                <div className="relative bg-white/8 backdrop-blur-xl rounded-2xl p-4 sm:p-6 lg:p-8 border border-blue-500/20 overflow-hidden">
                  <div className="absolute top-0 left-0 w-16 h-16 bg-blue-400/10 rounded-br-full" />

                  <div className="absolute top-6 right-6 w-10 h-10 bg-blue-500/15 rounded-xl flex items-center justify-center">
                    <FontAwesomeIcon icon={faBrain} className="text-blue-400 text-sm" />
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-1 h-12 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full flex-shrink-0" />
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                          Search Strategy
                        </h3>
                        <div className="flex gap-2">
                          {['Keyword Research', 'Content Planning', 'SGE'].map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 bg-blue-500/15 text-blue-300 text-sm rounded-full border border-blue-400/20"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-200 leading-relaxed text-sm sm:text-base">
                      Building data-informed SEO strategies that account for how people search today — through Google, through AI overviews, and through LLMs like ChatGPT and Perplexity.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                 className="relative group"
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                 viewport={{ once: true, margin: "-50px" }}
              >
                <div className="relative bg-white/8 backdrop-blur-xl rounded-2xl p-4 sm:p-6 lg:p-8 border border-green-500/20 overflow-hidden">
                  <div className="absolute top-0 left-0 w-[4.5rem] h-[4.5rem] bg-green-400/10 rounded-br-full" />

                  <div className="absolute top-6 right-6 w-10 h-10 bg-green-500/15 rounded-xl flex items-center justify-center">
                    <FontAwesomeIcon icon={faCog} className="text-green-400 text-sm" />
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-1 h-12 bg-gradient-to-b from-green-400 to-yellow-400 rounded-full flex-shrink-0" />
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                          Technical Execution
                        </h3>
                        <div className="flex gap-2">
                          {['Audits', 'Schema', 'Core Web Vitals'].map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 bg-green-500/15 text-green-300 text-sm rounded-full border border-green-400/20"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-200 leading-relaxed text-sm sm:text-base">
                      Technical audits, structured data, site speed, and crawlability — using Google Search Console, Analytics, SEMrush, and Ahrefs to identify and fix what&apos;s holding your rankings back.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                 className="relative group"
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                 viewport={{ once: true, margin: "-50px" }}
              >
                <div className="relative bg-white/8 backdrop-blur-xl rounded-2xl p-4 sm:p-6 lg:p-8 border border-purple-500/20 overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-purple-400/10 rounded-bl-full" />

                  <div className="absolute top-6 right-6 w-10 h-10 bg-purple-500/15 rounded-xl flex items-center justify-center">
                    <FontAwesomeIcon icon={faRocket} className="text-purple-400 text-sm" />
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-4">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                          Measurable Growth
                        </h3>
                        <div className="flex gap-2">
                          {['Organic Traffic', 'Rankings', 'ROI'].map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 bg-purple-500/15 text-purple-300 text-sm rounded-full border border-purple-400/20"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="w-1 h-12 bg-gradient-to-b from-purple-400 to-blue-400 rounded-full ml-auto flex-shrink-0" />
                    </div>
                    
                    <p className="text-gray-200 leading-relaxed text-sm sm:text-base">
                      Every engagement is measured against real business outcomes — organic sessions, keyword rankings, and revenue attribution. Monthly reporting keeps strategy aligned with results.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div 
              className="mt-16"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-10">
                Key Achievements
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {aboutData.stats.map((stat, index) => (
                  <motion.div
                     key={index}
                     className="relative group"
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ 
                       duration: 0.5, 
                       delay: index * 0.1,
                       ease: [0.22, 1, 0.36, 1]
                     }}
                     viewport={{ once: true }}
                     onClick={() => setSelectedStat(selectedStat === index ? null : index)}
                     whileHover={{ scale: 1.03 }}
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
