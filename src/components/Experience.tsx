'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { experienceData } from '@/data/experience';
import AlgorithmBackground from './AlgorithmBackground';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  return (
    <section 
      ref={sectionRef}
      id="experience" 
      className="min-h-screen py-20 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900 relative overflow-hidden"
      suppressHydrationWarning
    >
      <AlgorithmBackground opacity="opacity-5" />

      <motion.div 
          className="max-w-6xl mx-auto px-6 relative z-10"
          style={{
            y: useTransform(scrollYProgress, [0, 1], ['0%', '-5%']),
          }}
        >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-400 bg-clip-text text-transparent mb-4">
            Professional Experience
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            10+ years driving organic growth across education, agency, and enterprise environments
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-400 to-teal-400"></div>
          
          {/* Progress Indicator */}
          <motion.div
            className="absolute left-8 top-0 w-0.5 bg-gradient-to-b from-blue-300 to-cyan-300"
            style={{
              height: scrollYProgress.get() * 100 + '%',
              scaleY: scrollYProgress,
              transformOrigin: 'top'
            }}
          />

          {/* Experience Items */}
          <div className="space-y-12">
            {experienceData.timeline.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative pl-20"
              >
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                  className="absolute left-6 w-5 h-5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full border-4 border-gray-900 shadow-lg shadow-blue-500/30"
                />

                {/* Job Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300"
                >
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                        <FontAwesomeIcon icon={faBriefcase} className="text-blue-400" />
                        {job.position}
                      </h3>
                      <p className="text-xl text-blue-300 font-semibold">
                        {job.company}
                      </p>
                    </div>
                                         <div className="flex flex-col md:items-end gap-2 mt-4 md:mt-0">
                       <div className="flex items-center gap-2 text-gray-400">
                         <FontAwesomeIcon icon={faCalendarAlt} className="text-cyan-400" />
                         <span>{job.period}</span>
                       </div>
                     </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {job.description}
                  </p>

                  {/* Achievements */}
                  {job.achievements && job.achievements.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Key Achievements</h4>
                      <ul className="space-y-2">
                        {job.achievements.map((achievement, achIndex) => (
                          <motion.li
                            key={achIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.2 + achIndex * 0.1 }}
                            className="flex items-start gap-3 text-gray-300"
                          >
                            <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Technologies */}
                  {job.technologies && job.technologies.length > 0 && (
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {job.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.2 + techIndex * 0.05 }}
                            className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30 hover:bg-blue-500/30 transition-colors duration-200"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
        </motion.div>
    </section>
  );
};

export default Experience;
