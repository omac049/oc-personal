'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSearch, faFileText, faLink, faCog, faMobileAlt, faMapMarkerAlt,
  faShoppingCart, faCode, faChartLine, faSearchPlus, faChartBar,
  faEdit, faLanguage, faRobot
} from '@fortawesome/free-solid-svg-icons';
import { skillsData } from '@/data/skills';
import AnimatedText from './AnimatedText';
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

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  const openSkillModal = (skill: { name: string; icon: string; proficiency: number }) => {
    setSelectedSkill(skill);
    setIsModalOpen(true);
  };

  const closeSkillModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedSkill(null), 300);
  };

  return (
    <section ref={containerRef} id="skills" className="py-20 bg-white relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 opacity-10"
      >
        <div className="absolute top-20 right-20 w-64 h-64 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      </motion.div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2 className="text-4xl md:text-5xl font-bold mb-4">
            <AnimatedText
              text={skillsData.title}
              className="modern-text-gradient"
              as="span"
              stagger={0.05}
            />
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 mb-8"
          >
            {skillsData.subtitle}
          </motion.p>
          
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-teal-500 to-emerald-600 mx-auto"
          ></motion.div>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-12"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3
              }
            }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skillsData.categories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={{
                hidden: { 
                  opacity: 0, 
                  y: 60, 
                  rotateX: -15 
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                  transition: {
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1]
                  }
                }
              }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 25px 50px rgba(13, 148, 136, 0.15)",
                transition: { duration: 0.3 }
              }}
              className="group bg-gray-50/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-teal-50 to-emerald-50 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
              
              <div className="relative z-10">
                <motion.h3 
                  className="text-2xl font-bold text-gray-900 mb-8 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: categoryIndex * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                >
                  {category.name}
                </motion.h3>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                        ease: [0.22, 1, 0.36, 1]
                      }}
                      viewport={{ once: true }}
                                           whileHover={{ 
                       x: 5,
                       transition: { duration: 0.2 }
                     }}
                     onClick={() => openSkillModal(skill)}
                     className="skill-item group/skill cursor-pointer"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <motion.div 
                            className="w-8 h-8 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-lg flex items-center justify-center"
                            whileHover={{ 
                              scale: 1.1,
                              rotate: 5,
                              boxShadow: "0 5px 15px rgba(13, 148, 136, 0.3)"
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            <FontAwesomeIcon 
                              icon={iconMap[skill.icon]} 
                              className="text-white text-sm"
                            />
                          </motion.div>
                          <span className="font-semibold text-gray-900 group-hover/skill:text-teal-700 transition-colors">
                            {skill.name}
                          </span>
                        </div>
                        <motion.span 
                          className="font-bold text-teal-600"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ 
                            delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3 
                          }}
                          viewport={{ once: true }}
                        >
                          {skill.proficiency}%
                        </motion.span>
                      </div>
                      
                      <div className="w-full bg-gray-300 rounded-full h-3 overflow-hidden">
                        <motion.div
                          initial={{ width: 0, opacity: 0 }}
                          whileInView={{ 
                            width: `${skill.proficiency}%`,
                            opacity: 1
                          }}
                          transition={{ 
                            duration: 1.5, 
                            delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.5,
                            ease: [0.22, 1, 0.36, 1]
                          }}
                          whileHover={{
                            backgroundImage: "linear-gradient(90deg, #0d9488, #059669, #0d9488)"
                          }}
                          viewport={{ once: true }}
                          className="bg-gradient-to-r from-teal-500 to-emerald-600 h-full rounded-full relative"
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent"
                            initial={{ x: '-100%' }}
                            animate={{ x: '100%' }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              repeatDelay: 3,
                              ease: "easeInOut"
                            }}
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
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
