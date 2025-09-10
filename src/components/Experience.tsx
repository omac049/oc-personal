'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { experienceData } from '@/data/experience';
import AnimatedText from './AnimatedText';
import ParallaxContainer from './ParallaxContainer';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50 jade-pattern">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.div className="mb-4">
            <AnimatedText
              text={experienceData.title}
              className="text-4xl md:text-5xl font-bold jade-text-gradient"
              as="h2"
              stagger={0.08}
              delay={0.2}
            />
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 mb-8"
          >
            {experienceData.subtitle}
          </motion.p>
          
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-teal-500 to-emerald-600 mx-auto"
          />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-500 to-emerald-600"></div>

          <div className="space-y-12">
            {experienceData.timeline.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ 
                  opacity: 0, 
                  y: 80, 
                  rotateX: index % 2 === 0 ? -15 : 15,
                  rotateY: index % 2 === 0 ? -10 : 10
                }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  rotateX: 0,
                  rotateY: 0
                }}
                transition={{ 
                  duration: 1, 
                  delay: index * 0.2,
                  ease: [0.22, 1, 0.36, 1]
                }}
                viewport={{ once: true, margin: "-50px" }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:justify-between group`}
              >
                {/* Enhanced Timeline dot */}
                <motion.div 
                  className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-1/2 w-4 h-4 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-full border-4 border-white shadow-lg z-10"
                  whileHover={{
                    scale: 1.3,
                    boxShadow: "0 0 20px rgba(13, 148, 136, 0.6)",
                    transition: { duration: 0.2 }
                  }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.2 + 0.5, duration: 0.5, type: "spring", bounce: 0.4 }}
                  viewport={{ once: true }}
                />

                {/* Enhanced Content */}
                <motion.div 
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? 'md:pr-12 pl-20 md:pl-0' : 'md:pl-12 pl-20 md:pr-0'
                  }`}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  <motion.div 
                    className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden group-hover:shadow-2xl transition-all duration-500"
                    whileHover={{
                      boxShadow: "0 25px 50px rgba(13, 148, 136, 0.15)",
                      y: -5
                    }}
                  >
                    {/* Gradient overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-teal-50/50 to-emerald-50/50 opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.3 }}
                    />
                    
                    <div className="relative z-10">
                      <motion.div className="mb-4">
                        <motion.h3 
                          className="text-2xl font-bold text-gray-900 mb-2"
                          initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.2 + 0.3, duration: 0.6 }}
                          viewport={{ once: true }}
                        >
                          {job.position}
                        </motion.h3>
                        
                        <motion.div 
                          className="flex flex-wrap items-center gap-4 mb-2"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: index * 0.2 + 0.4 }}
                          viewport={{ once: true }}
                        >
                          <h4 className="text-lg font-semibold text-teal-600 hover:text-teal-700 transition-colors cursor-pointer">
                            {job.company}
                          </h4>
                          <span className="text-sm text-gray-500">
                            {job.location}
                          </span>
                        </motion.div>
                        
                        <motion.p 
                          className="text-sm font-medium text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full inline-block"
                          initial={{ scale: 0, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          transition={{ 
                            delay: index * 0.2 + 0.5, 
                            duration: 0.4,
                            type: "spring",
                            bounce: 0.3
                          }}
                          viewport={{ once: true }}
                          whileHover={{ 
                            scale: 1.05,
                            boxShadow: "0 4px 12px rgba(5, 150, 105, 0.3)"
                          }}
                        >
                          {job.period}
                        </motion.p>
                      </motion.div>
                      
                      <motion.p 
                        className="text-gray-700 mb-6 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 + 0.6, duration: 0.6 }}
                        viewport={{ once: true }}
                      >
                        {job.description}
                      </motion.p>

                      <motion.div 
                        className="mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 + 0.7, duration: 0.6 }}
                        viewport={{ once: true }}
                      >
                        <h5 className="font-semibold text-gray-900 mb-3">Key Achievements:</h5>
                        <ul className="space-y-2">
                          {job.achievements.map((achievement, achIndex) => (
                            <motion.li 
                              key={achIndex} 
                              className="flex items-start space-x-2 group/achievement"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ 
                                delay: index * 0.2 + 0.8 + achIndex * 0.1,
                                duration: 0.5
                              }}
                              whileHover={{ x: 5 }}
                              viewport={{ once: true }}
                            >
                              <motion.div 
                                className="w-2 h-2 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-full mt-2 flex-shrink-0"
                                whileHover={{ scale: 1.5 }}
                              />
                              <span className="text-gray-700 text-sm group-hover/achievement:text-gray-900 transition-colors">
                                {achievement}
                              </span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 + 1, duration: 0.6 }}
                        viewport={{ once: true }}
                      >
                        <h5 className="font-semibold text-gray-900 mb-3">Technologies & Skills:</h5>
                        <div className="flex flex-wrap gap-2">
                          {job.technologies.map((tech, techIndex) => (
                            <motion.span
                              key={techIndex}
                              className="bg-gray-100 hover:bg-teal-50 text-gray-800 hover:text-teal-800 text-xs px-3 py-1 rounded-full font-medium cursor-pointer transition-colors"
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ 
                                delay: index * 0.2 + 1.1 + techIndex * 0.05,
                                duration: 0.3
                              }}
                              whileHover={{ 
                                scale: 1.05,
                                boxShadow: "0 2px 8px rgba(13, 148, 136, 0.2)"
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
