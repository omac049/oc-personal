'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSearch, faFileText, faLink, faCog, faMobileAlt, faMapMarkerAlt,
  faShoppingCart, faCode, faChartLine, faSearchPlus, faChartBar,
  faEdit, faLanguage, faRobot, faBrain, faEye, faArrowUp, faPlay,
  faTrophy, faGlobe, faBolt, faShield, faMagic, faGem, faStar,
  faFire, faLightbulb, faChartPie, faGraduationCap, faCertificate,
  faAward, faRocket, faUsers, faTools, faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import { skillsData } from '@/data/skills';
import SkillModal from './SkillModal';
import { useRef, useState, useEffect, useCallback } from 'react';

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

// Professional Achievements & Certifications
const achievements = [
  {
    id: 'experience',
    title: '10+ Years',
    subtitle: 'SEO Expertise',
    icon: faGraduationCap,
    color: 'from-blue-500 to-blue-600',
    description: 'Decade of proven SEO success'
  },
  {
    id: 'ai_innovation',
    title: 'AI Pioneer',
    subtitle: 'LLM Integration',
    icon: faBrain,
    color: 'from-purple-500 to-purple-600',
    description: 'Leading edge AI-powered SEO'
  },
  {
    id: 'results',
    title: '500+',
    subtitle: 'Projects Delivered',
    icon: faRocket,
    color: 'from-amber-500 to-amber-600',
    description: 'Successful SEO campaigns'
  },
  {
    id: 'expertise',
    title: 'Bilingual',
    subtitle: 'SEO Specialist',
    icon: faGlobe,
    color: 'from-green-500 to-green-600',
    description: 'English & Spanish markets'
  }
];

// Skill Proficiency Levels
const getSkillLevel = (proficiency: number) => {
  if (proficiency >= 95) return { level: 'Expert', color: 'text-amber-400', bgColor: 'bg-amber-400' };
  if (proficiency >= 85) return { level: 'Advanced', color: 'text-blue-400', bgColor: 'bg-blue-400' };
  if (proficiency >= 75) return { level: 'Proficient', color: 'text-green-400', bgColor: 'bg-green-400' };
  return { level: 'Intermediate', color: 'text-gray-400', bgColor: 'bg-gray-400' };
};

export default function Skills() {
  const containerRef = useRef<HTMLElement>(null);
  const [selectedSkill, setSelectedSkill] = useState<{
    name: string;
    icon: string;
    proficiency: number;
  } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], ['0%', '-10%']);

  useEffect(() => {
    setMounted(true);
  }, []);

  const openSkillModal = useCallback((skill: { name: string; icon: string; proficiency: number }) => {
    setSelectedSkill(skill);
    setIsModalOpen(true);
  }, []);

  const closeSkillModal = useCallback(() => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedSkill(null), 300);
  }, []);

  // Professional Achievements Section
  const ProfessionalAchievements = () => (
    <div className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h3 className="text-2xl font-semibold text-white mb-4 flex items-center justify-center gap-2">
          <FontAwesomeIcon icon={faAward} className="text-amber-400" />
          Professional Excellence
        </h3>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Recognized expertise and proven track record in AI-powered SEO optimization
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.id}
            className="relative group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
          >
            <div className="bg-slate-800 rounded-xl border border-slate-600 p-6 text-center relative overflow-hidden group-hover:border-slate-500 transition-all duration-300">
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <motion.div
                  className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${achievement.color} rounded-full flex items-center justify-center`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <FontAwesomeIcon icon={achievement.icon} className="text-white text-xl" />
                </motion.div>
                
                <h4 className="text-2xl font-bold text-white mb-1">{achievement.title}</h4>
                <p className="text-blue-400 font-medium mb-2">{achievement.subtitle}</p>
                <p className="text-gray-400 text-sm">{achievement.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  // Interactive Skills Visualization
  const SkillsVisualization = () => (
    <div className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h3 className="text-2xl font-semibold text-white mb-4 flex items-center justify-center gap-2">
          <FontAwesomeIcon icon={faTools} className="text-blue-400" />
          Core Competencies
        </h3>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Comprehensive skill set spanning traditional SEO, AI integration, and cutting-edge optimization techniques
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {skillsData.categories.map((category, categoryIndex) => {
          const avgProficiency = Math.round(
            category.skills.reduce((acc, skill) => acc + skill.proficiency, 0) / category.skills.length
          );
          const skillLevel = getSkillLevel(avgProficiency);

          return (
            <motion.div
              key={category.name}
              className="bg-slate-800 rounded-xl border border-slate-600 p-6 relative overflow-hidden group hover:border-slate-500 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredCategory(category.name)}
              onMouseLeave={() => setHoveredCategory(null)}
              whileHover={{ y: -4 }}
            >
              {/* Category Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">{category.name}</h4>
                  <div className="flex items-center gap-2">
                    <span className={`text-sm font-medium ${skillLevel.color}`}>{skillLevel.level}</span>
                    <span className="text-gray-400 text-sm">• {avgProficiency}% Mastery</span>
                  </div>
                </div>
                <div className={`w-16 h-16 rounded-full ${skillLevel.bgColor} bg-opacity-20 flex items-center justify-center`}>
                  <span className={`text-2xl font-bold ${skillLevel.color}`}>{avgProficiency}</span>
                </div>
              </div>

              {/* Category Progress Bar */}
              <div className="mb-6">
                <div className="w-full bg-slate-700 rounded-full h-3">
                  <motion.div
                    className={`h-full ${skillLevel.bgColor} rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${avgProficiency}%` }}
                    transition={{ duration: 1.5, delay: categoryIndex * 0.2 }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>

              {/* Individual Skills */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => {
                  const individualSkillLevel = getSkillLevel(skill.proficiency);
                  
                  return (
                    <motion.div
                      key={skill.name}
                      className="flex items-center justify-between p-3 bg-slate-700 rounded-lg cursor-pointer hover:bg-slate-650 transition-all duration-200 group/skill"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: skillIndex * 0.1 + categoryIndex * 0.2 }}
                      viewport={{ once: true }}
                      onClick={() => openSkillModal(skill)}
                      whileHover={{ x: 4 }}
                    >
                      <div className="flex items-center gap-3 flex-1">
                        <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center group-hover/skill:bg-blue-600 transition-colors">
                          <FontAwesomeIcon icon={iconMap[skill.icon]} className="text-white text-sm" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-300 font-medium group-hover/skill:text-white transition-colors">
                              {skill.name}
                            </span>
                            <div className="flex items-center gap-2">
                              <span className={`text-xs px-2 py-1 rounded ${individualSkillLevel.bgColor} bg-opacity-20 ${individualSkillLevel.color}`}>
                                {individualSkillLevel.level}
                              </span>
                              <span className="text-amber-400 font-mono text-sm font-semibold">
                                {skill.proficiency}%
                              </span>
                            </div>
                          </div>
                          
                          {/* Mini Progress Bar */}
                          <div className="w-full bg-slate-600 rounded-full h-1 mt-2">
                            <motion.div
                              className={`h-full ${individualSkillLevel.bgColor} rounded-full`}
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.proficiency}%` }}
                              transition={{ duration: 1, delay: skillIndex * 0.1 + categoryIndex * 0.2 + 0.5 }}
                              viewport={{ once: true }}
                            />
                          </div>
                        </div>
                      </div>
                      
                      <FontAwesomeIcon 
                        icon={faChevronRight} 
                        className="text-gray-500 group-hover/skill:text-blue-400 transition-colors ml-2" 
                      />
                    </motion.div>
                  );
                })}
              </div>

              {/* Hover Effect Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                initial={false}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );

  // Expertise Highlights
  const ExpertiseHighlights = () => (
    <div className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h3 className="text-2xl font-semibold text-white mb-4 flex items-center justify-center gap-2">
          <FontAwesomeIcon icon={faLightbulb} className="text-amber-400" />
          Areas of Specialization
        </h3>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Focused expertise in high-impact SEO strategies that drive measurable results
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: 'AI-Powered SEO',
            description: 'Leveraging machine learning and LLMs for next-generation optimization',
            icon: faRobot,
            skills: ['ChatGPT Integration', 'LLM Content Optimization', 'AI Keyword Research'],
            color: 'from-purple-500 to-blue-500'
          },
          {
            title: 'Technical SEO',
            description: 'Deep technical expertise in site optimization and performance',
            icon: faCog,
            skills: ['Core Web Vitals', 'Schema Markup', 'Site Architecture'],
            color: 'from-blue-500 to-cyan-500'
          },
          {
            title: 'Analytics & Insights',
            description: 'Data-driven strategies with comprehensive performance tracking',
            icon: faChartLine,
            skills: ['Google Analytics 4', 'Search Console', 'Performance Monitoring'],
            color: 'from-green-500 to-teal-500'
          },
          {
            title: 'Content Strategy',
            description: 'Strategic content development that ranks and converts',
            icon: faEdit,
            skills: ['Content Optimization', 'Keyword Strategy', 'User Intent Analysis'],
            color: 'from-amber-500 to-orange-500'
          },
          {
            title: 'International SEO',
            description: 'Bilingual optimization for global market reach',
            icon: faGlobe,
            skills: ['Multilingual SEO', 'Hreflang Implementation', 'Cultural Optimization'],
            color: 'from-pink-500 to-red-500'
          },
          {
            title: 'E-commerce SEO',
            description: 'Specialized optimization for online retail success',
            icon: faShoppingCart,
            skills: ['Product Optimization', 'Category Pages', 'Shopping Feed Optimization'],
            color: 'from-indigo-500 to-purple-500'
          }
        ].map((specialty, index) => (
          <motion.div
            key={specialty.title}
            className="bg-slate-800 rounded-xl border border-slate-600 p-6 group hover:border-slate-500 transition-all duration-300 relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
          >
            {/* Gradient Background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${specialty.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${specialty.color} rounded-lg flex items-center justify-center`}>
                  <FontAwesomeIcon icon={specialty.icon} className="text-white text-lg" />
                </div>
                <h4 className="text-lg font-semibold text-white">{specialty.title}</h4>
              </div>
              
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">{specialty.description}</p>
              
              <div className="space-y-2">
                {specialty.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    className="flex items-center gap-2 text-sm"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                    <span className="text-gray-300">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  if (!mounted) {
    return (
      <section ref={containerRef} id="skills" className="min-h-screen bg-slate-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 py-20">
          <div className="text-center">
            <motion.div
              className="animate-pulse space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="h-8 bg-slate-700 rounded w-64 mx-auto"></div>
              <div className="h-4 bg-slate-800 rounded w-96 mx-auto"></div>
              <div className="grid lg:grid-cols-3 gap-8 mt-8">
                <div className="h-64 bg-slate-800 rounded-xl"></div>
                <div className="h-64 bg-slate-800 rounded-xl"></div>
                <div className="h-64 bg-slate-800 rounded-xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={containerRef} id="skills" className="min-h-screen bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: parallaxY }}
      >
        <div className="absolute top-20 right-20 w-32 h-32 bg-blue-500 opacity-10 rounded-full" />
        <div className="absolute bottom-32 left-16 w-24 h-24 bg-amber-400 opacity-8 rounded-full" />
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-purple-500 opacity-6 rounded-full" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 py-20">
        {/* Main Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Skills & Expertise
          </motion.h2>
          
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-amber-400 mx-auto mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          
          <motion.p 
            className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Comprehensive SEO expertise enhanced with cutting-edge AI technologies. 
            Proven track record of delivering exceptional results through innovative optimization strategies 
            and data-driven insights.
          </motion.p>
        </motion.div>

        {/* Professional Achievements */}
        <ProfessionalAchievements />

        {/* Skills Visualization */}
        <SkillsVisualization />

        {/* Expertise Highlights */}
        <ExpertiseHighlights />

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-slate-800 rounded-2xl border border-slate-600 p-8"
        >
          <h3 className="text-2xl font-semibold text-white mb-4 flex items-center justify-center gap-2">
            <FontAwesomeIcon icon={faRocket} className="text-amber-400" />
            Ready to Leverage These Skills?
          </h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Let's discuss how my comprehensive SEO expertise and AI-powered strategies can drive exceptional results for your business.
          </p>
          <motion.button
            className="bg-blue-700 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-xl flex items-center gap-2 mx-auto"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <FontAwesomeIcon icon={faPlay} />
            Start Your SEO Transformation
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
