'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSearch, faFileText, faLink, faCog, faMobileAlt, faMapMarkerAlt,
  faShoppingCart, faCode, faChartLine, faSearchPlus, faChartBar,
  faEdit, faLanguage, faRobot
} from '@fortawesome/free-solid-svg-icons';
import { skillsData } from '@/data/skills';
import SkillModal from './SkillModal';
import { useRef, useState } from 'react';

const iconMap: { [key: string]: typeof faSearch } = {
  'search': faSearch,
  'file-text': faFileText,
  'link': faLink,
  'cog': faCog,
  'mobile-alt': faMobileAlt,
  'map-marker-alt': faMapMarkerAlt,
  'shopping-cart': faShoppingCart,
  'code': faCode,
  'chart-line': faChartLine,
  'search-plus': faSearchPlus,
  'chart-bar': faChartBar,
  'analytics': faChartBar,
  'edit': faEdit,
  'language': faLanguage,
  'robot': faRobot
};

export default function Skills() {
  const containerRef = useRef<HTMLElement>(null);
  const [selectedSkill, setSelectedSkill] = useState<{
    name: string;
    icon: string;
    proficiency: number;
  } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Simple parallax for background elements
  const parallaxY = useTransform(scrollYProgress, [0, 1], ['0%', '-10%']);

  const openSkillModal = (skill: { name: string; icon: string; proficiency: number }) => {
    setSelectedSkill(skill);
    setIsModalOpen(true);
  };

  const closeSkillModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedSkill(null), 300);
  };

  return (
    <section ref={containerRef} id="skills" className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 relative overflow-hidden">
      {/* Minimal Elegant Background */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: parallaxY }}
      >
        {/* Subtle gradient orbs */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-purple-500/4 rounded-full blur-3xl"
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
            {skillsData.title.split('').map((char, index) => (
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
            {skillsData.subtitle}
          </motion.p>
        </motion.div>

                {/* Sophisticated Skills Grid */}
        <motion.div 
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
              }
            }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillsData.categories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="group"
              variants={{
                hidden: { 
                  opacity: 0, 
                  y: 40,
                  filter: "blur(4px)"
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  transition: {
                    duration: 0.8,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }
                }
              }}
            >
              {/* Elegant category header */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: categoryIndex * 0.1 + 0.3, duration: 0.6 }}
              >
                <h3 className="text-xl font-medium text-white mb-1 tracking-wide">
                  {category.name}
                </h3>
                <motion.div
                  className="w-8 h-px bg-blue-400/60"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: categoryIndex * 0.1 + 0.5, duration: 0.6 }}
                />
              </motion.div>
                
              {/* Elegant Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="group/skill cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: categoryIndex * 0.05 + skillIndex * 0.05,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      x: 4,
                      transition: { duration: 0.2, ease: "easeOut" }
                    }}
                    onClick={() => openSkillModal(skill)}
                  >
                    {/* Skill item container */}
                    <motion.div
                      className="relative p-6 rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300"
                      whileHover={{
                        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)"
                      }}
                    >
                      {/* Skill header */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <motion.div 
                            className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center group-hover/skill:from-blue-500/30 group-hover/skill:to-purple-500/30 transition-all duration-300"
                            whileHover={{ 
                              scale: 1.1,
                              rotate: 5
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            <FontAwesomeIcon 
                              icon={iconMap[skill.icon]} 
                              className="text-blue-400 text-sm group-hover/skill:text-blue-300 transition-colors duration-300"
                            />
                          </motion.div>
                          
                          <span className="font-medium text-gray-300 group-hover/skill:text-white transition-colors duration-300">
                            {skill.name}
                          </span>
                        </div>
                        
                        <motion.span 
                          className="text-sm font-mono text-blue-400 group-hover/skill:text-blue-300 transition-colors duration-300"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ 
                            delay: categoryIndex * 0.05 + skillIndex * 0.05 + 0.2 
                          }}
                          viewport={{ once: true }}
                        >
                          {skill.proficiency}%
                        </motion.span>
                      </div>
                      
                      {/* Innovative progress visualization */}
                      <div className="relative h-1 bg-white/5 rounded-full overflow-hidden">
                        {/* Background track */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-gray-700/50 to-gray-600/50 rounded-full"
                        />
                        
                        {/* Animated progress fill */}
                        <motion.div
                          initial={{ 
                            width: 0,
                            background: "linear-gradient(90deg, rgba(59, 130, 246, 0.3), rgba(139, 92, 246, 0.3))"
                          }}
                          whileInView={{ 
                            width: `${skill.proficiency}%`,
                            background: [
                              "linear-gradient(90deg, rgba(59, 130, 246, 0.6), rgba(139, 92, 246, 0.6))",
                              "linear-gradient(90deg, rgba(139, 92, 246, 0.6), rgba(6, 182, 212, 0.6))",
                              "linear-gradient(90deg, rgba(6, 182, 212, 0.6), rgba(59, 130, 246, 0.6))"
                            ]
                          }}
                          transition={{ 
                            width: {
                              duration: 1.2, 
                              delay: categoryIndex * 0.05 + skillIndex * 0.05 + 0.4,
                              ease: [0.25, 0.46, 0.45, 0.94]
                            },
                            background: {
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }
                          }}
                          viewport={{ once: true }}
                          className="h-full rounded-full relative overflow-hidden"
                        >
                          {/* Elegant moving highlight */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                            initial={{ x: '-100%' }}
                            animate={{ x: '100%' }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              repeatDelay: 3,
                              ease: [0.25, 0.46, 0.45, 0.94]
                            }}
                          />
                        </motion.div>
                        
                        {/* Skill level markers */}
                        <div className="absolute inset-0 flex justify-between items-center px-1">
                          {[25, 50, 75].map((mark) => (
                            <motion.div
                              key={mark}
                              className="w-px h-2 bg-white/10"
                              initial={{ opacity: 0, scaleY: 0 }}
                              whileInView={{ opacity: 1, scaleY: 1 }}
                              transition={{ 
                                delay: categoryIndex * 0.05 + skillIndex * 0.05 + 0.6 + mark * 0.01,
                                duration: 0.3
                              }}
                              viewport={{ once: true }}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Subtle hover indicator */}
                      <motion.div
                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300 pointer-events-none"
                      />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Skill Detail Modal */}
      <SkillModal 
        skill={selectedSkill}
        isOpen={isModalOpen}
        onClose={closeSkillModal}
      />
    </section>
  );
}
