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

  const parallaxY = useTransform(scrollYProgress, [0, 1], ['0%', '-5%']);

  const openSkillModal = (skill: { name: string; icon: string; proficiency: number }) => {
    setSelectedSkill(skill);
    setIsModalOpen(true);
  };

  const closeSkillModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedSkill(null), 300);
  };

  return (
    <section ref={containerRef} id="skills" className="min-h-screen bg-slate-800 relative overflow-hidden">
      {/* Simplified Background */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: parallaxY }}
      >
        {/* Clean geometric shapes */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-blue-700 opacity-10 rounded-full" />
        <div className="absolute bottom-32 left-16 w-24 h-24 bg-amber-400 opacity-8 rounded-full" />
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-blue-600 opacity-6 rounded-full" />
      </motion.div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 py-20">
        {/* Clean Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4 tracking-tight">
            {skillsData.title}
          </h2>
          
          <div className="w-20 h-1 bg-blue-700 mx-auto mb-6" />
          
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {skillsData.subtitle}
          </p>
        </motion.div>

        {/* Simplified Skills Grid */}
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
          viewport={{ once: true }}
        >
          {skillsData.categories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="bg-slate-700 rounded-2xl p-6 border border-slate-600 shadow-xl"
              variants={{
                hidden: { 
                  opacity: 0, 
                  y: 30
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    ease: "easeOut"
                  }
                }
              }}
              whileHover={{ 
                y: -4,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              {/* Category Header */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {category.name}
                </h3>
                <div className="w-12 h-0.5 bg-amber-400" />
              </div>
                
              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="group cursor-pointer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: skillIndex * 0.1,
                      ease: "easeOut"
                    }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      x: 4,
                      transition: { duration: 0.2 }
                    }}
                    onClick={() => openSkillModal(skill)}
                  >
                    {/* Skill Item */}
                    <div className="p-4 rounded-xl bg-slate-800 border border-slate-600 hover:border-blue-600 hover:bg-slate-750 transition-all duration-300">
                      {/* Skill Header */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-blue-700 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                            <FontAwesomeIcon 
                              icon={iconMap[skill.icon]} 
                              className="text-white text-sm"
                            />
                          </div>
                          
                          <span className="font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                            {skill.name}
                          </span>
                        </div>
                        
                        <span className="text-sm font-mono text-amber-400 font-semibold">
                          {skill.proficiency}%
                        </span>
                      </div>
                      
                      {/* Clean Progress Bar */}
                      <div className="relative h-2 bg-slate-600 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.proficiency}%` }}
                          transition={{ 
                            duration: 1, 
                            delay: skillIndex * 0.1 + 0.3,
                            ease: "easeOut"
                          }}
                          viewport={{ once: true }}
                          className="h-full bg-blue-700 rounded-full"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Want to see these skills in action? Let's discuss your project.
          </p>
          <motion.button
            className="bg-blue-700 hover:bg-blue-600 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </motion.button>
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
