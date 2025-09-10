'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSearch, faFileText, faLink, faCog, faMobileAlt, faMapMarkerAlt,
  faShoppingCart, faCode, faChartLine, faSearchPlus, faChartBar,
  faEdit, faLanguage, faRobot, faBrain, faEye, faArrowUp, faPlay,
  faDownload, faFilter, faCalendar, faBell, faUser, faRocket
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

export default function Skills() {
  const containerRef = useRef<HTMLElement>(null);
  const [selectedSkill, setSelectedSkill] = useState<{
    name: string;
    icon: string;
    proficiency: number;
  } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [mounted, setMounted] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Stable mount detection to prevent hydration issues
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

  // AI Neural Network Component - Optimized
  const AINeuralNetwork = () => {
    const aiSkills = skillsData.categories.find(cat => cat.name === "AI & LLM SEO")?.skills || [];
    
    if (!mounted) {
      // Static fallback for SSR
      return (
        <div className="relative h-64 bg-slate-900 rounded-xl border border-slate-600 p-4 overflow-hidden">
          <div className="flex items-center gap-2 mb-4">
            <FontAwesomeIcon icon={faBrain} className="text-amber-400" />
            <span className="text-white font-medium">AI Neural Network</span>
            <div className="ml-auto flex gap-1">
              <div className="w-2 h-2 bg-green-400 rounded-full" />
              <span className="text-xs text-green-400">Loading...</span>
            </div>
          </div>
          <div className="relative h-48 flex items-center justify-center">
            <span className="text-gray-400 text-sm">Initializing AI Network...</span>
          </div>
        </div>
      );
    }
    
    return (
      <div className="relative h-64 bg-slate-900 rounded-xl border border-slate-600 p-4 overflow-hidden">
        <div className="flex items-center gap-2 mb-4">
          <FontAwesomeIcon icon={faBrain} className="text-amber-400" />
          <span className="text-white font-medium">AI Neural Network</span>
          <div className="ml-auto flex gap-1">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-xs text-green-400">Active</span>
          </div>
        </div>
        
        <div className="relative h-48">
          {aiSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="absolute cursor-pointer group"
              style={{
                left: `${20 + (index % 2) * 60}%`,
                top: `${15 + index * 25}%`
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
              whileHover={{ scale: 1.2 }}
              onClick={() => openSkillModal(skill)}
            >
              {/* Neural Node */}
              <div className="relative">
                <motion.div
                  className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center border-2 border-blue-500"
                  animate={{ 
                    boxShadow: [
                      "0 0 0 0 rgba(59, 130, 246, 0.4)", 
                      "0 0 0 8px rgba(59, 130, 246, 0)", 
                      "0 0 0 0 rgba(59, 130, 246, 0)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                >
                  <FontAwesomeIcon icon={faRobot} className="text-white text-xs" />
                </motion.div>
                
                {/* Skill Label */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 px-2 py-1 rounded text-xs text-white whitespace-nowrap z-10">
                  {skill.name} ({skill.proficiency}%)
                </div>
                
                {/* Neural Connections */}
                {index < aiSkills.length - 1 && (
                  <motion.div
                    className="absolute top-4 left-8 w-16 h-px bg-blue-500 opacity-30"
                    animate={{ opacity: [0.2, 0.6, 0.2] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  />
                )}
              </div>
            </motion.div>
          ))}
          
          {/* Optimized Data Flow Animation */}
          <motion.div
            className="absolute top-1/2 left-1/2 w-2 h-2 bg-amber-400 rounded-full"
            animate={{ 
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </div>
      </div>
    );
  };

  // SEO Search Console Component - Optimized
  const SEOSearchConsole = () => {
    const seoSkills = skillsData.categories.find(cat => cat.name === "SEO Fundamentals")?.skills || [];
    
    const filteredSkills = seoSkills.filter(skill => 
      skill.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (!mounted) {
      // Static fallback for SSR
      return (
        <div className="bg-white rounded-xl border border-slate-300 overflow-hidden">
          <div className="bg-blue-700 text-white p-3 flex items-center gap-3">
            <FontAwesomeIcon icon={faSearchPlus} />
            <span className="font-medium">SEO Search Console</span>
            <div className="ml-auto flex items-center gap-2 text-xs">
              <span className="bg-gray-500 px-2 py-1 rounded">Loading</span>
            </div>
          </div>
          <div className="p-8 text-center text-gray-500">
            <span>Loading SEO Console...</span>
          </div>
        </div>
      );
    }
    
    return (
      <div className="bg-white rounded-xl border border-slate-300 overflow-hidden">
        {/* Google Search Console Header */}
        <div className="bg-blue-700 text-white p-3 flex items-center gap-3">
          <FontAwesomeIcon icon={faSearchPlus} />
          <span className="font-medium">SEO Search Console</span>
          <div className="ml-auto flex items-center gap-2 text-xs">
            <span className="bg-green-500 px-2 py-1 rounded">Live</span>
            <span>Last updated: now</span>
          </div>
        </div>
        
        {/* Search Bar */}
        <div className="p-4 border-b border-slate-200">
          <div className="relative">
            <FontAwesomeIcon icon={faSearch} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search skills and expertise..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
        </div>
        
        {/* Skills as Search Results */}
        <div className="p-4 space-y-3 min-h-[200px]">
          {filteredSkills.length > 0 ? (
            filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="flex items-center gap-4 p-3 hover:bg-slate-50 rounded-lg cursor-pointer border border-transparent hover:border-blue-200 transition-all"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => openSkillModal(skill)}
              >
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={iconMap[skill.icon]} className="text-blue-700 text-sm" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-slate-800">{skill.name}</span>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">Optimized</span>
                  </div>
                  <div className="text-sm text-slate-600">Proficiency: {skill.proficiency}% • Expert Level</div>
                </div>
                
                {/* Performance Indicator */}
                <div className="text-right">
                  <div className="text-xs text-slate-500">Performance</div>
                  <div className="text-green-600 font-semibold">+{Math.floor(skill.proficiency * 0.8)}%</div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="text-center py-8 text-gray-500">
              {searchQuery ? `No skills found for "${searchQuery}"` : "Loading skills..."}
            </div>
          )}
        </div>
      </div>
    );
  };

  // Analytics Dashboard Component - Already optimized, keeping the fix
  const AnalyticsDashboard = () => {
    const analyticsSkills = skillsData.categories.find(cat => cat.name === "Analytics & Tools")?.skills || [];
    const [chartData, setChartData] = useState<number[][]>([]);
    const [chartMounted, setChartMounted] = useState(false);
    
    // Initialize chart data after mount to prevent hydration mismatch
    useEffect(() => {
      if (!mounted) return;
      
      const initialData = analyticsSkills.map(() => 
        Array.from({ length: 8 }, () => Math.random() * 100)
      );
      setChartData(initialData);
      setChartMounted(true);
      
      // Reduced update frequency to prevent flickering
      const interval = setInterval(() => {
        setChartData(prev => 
          prev.map(skillData => 
            skillData.map(() => Math.random() * 100)
          )
        );
      }, 3000); // Increased from 2000ms to 3000ms
      
      return () => clearInterval(interval);
    }, [mounted, analyticsSkills.length]);

    if (!mounted) {
      // Static fallback for SSR
      return (
        <div className="bg-slate-800 rounded-xl border border-slate-600 p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faChartLine} className="text-amber-400" />
              <span className="text-white font-medium">Analytics Dashboard</span>
            </div>
            <div className="text-xs text-slate-400">Loading...</div>
          </div>
          <div className="text-center py-8 text-gray-400">
            <span>Initializing Analytics...</span>
          </div>
        </div>
      );
    }
    
    return (
      <div className="bg-slate-800 rounded-xl border border-slate-600 p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faChartLine} className="text-amber-400" />
            <span className="text-white font-medium">Analytics Dashboard</span>
          </div>
          <div className="text-xs text-slate-400">Real-time data</div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {analyticsSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="bg-slate-700 rounded-lg p-3 cursor-pointer hover:bg-slate-650 transition-colors"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.15 + 0.5 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => openSkillModal(skill)}
            >
              <div className="flex items-center gap-2 mb-2">
                <FontAwesomeIcon icon={iconMap[skill.icon]} className="text-blue-400 text-sm" />
                <span className="text-white text-sm font-medium">{skill.name}</span>
              </div>
              
              {/* Live Chart Simulation */}
              <div className="h-12 flex items-end gap-1">
                {chartMounted && chartData[index] ? (
                  chartData[index].map((height, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 bg-blue-700 rounded-sm"
                      initial={{ height: '50%' }}
                      animate={{ height: `${height}%` }}
                      transition={{ duration: 2, ease: 'easeInOut' }}
                    />
                  ))
                ) : (
                  // Static placeholder during SSR/initial render
                  [...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-blue-700 rounded-sm"
                      style={{ height: '50%' }}
                    />
                  ))
                )}
              </div>
              
              <div className="flex justify-between items-center mt-2">
                <span className="text-xs text-slate-400">Proficiency</span>
                <span className="text-amber-400 font-semibold">{skill.proficiency}%</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  };

  // Don't render until mounted to prevent hydration issues
  if (!mounted) {
    return (
      <section ref={containerRef} id="skills" className="min-h-screen bg-slate-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 py-20">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-slate-700 rounded w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-slate-800 rounded w-96 mx-auto mb-8"></div>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="h-64 bg-slate-800 rounded-xl animate-pulse"></div>
              <div className="h-64 bg-slate-800 rounded-xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={containerRef} id="skills" className="min-h-screen bg-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10 py-20">
        {/* Dashboard Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <FontAwesomeIcon icon={faCog} className="text-amber-400 text-2xl animate-spin" style={{ animationDuration: '4s' }} />
            <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">
              SEO Command Center
            </h2>
            <FontAwesomeIcon icon={faEye} className="text-blue-400 text-2xl" />
          </div>
          
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6">
            Experience my expertise through interactive tools and real-time demonstrations
          </p>
          
          {/* Optimized Status Indicators */}
          <div className="flex items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <motion.div 
                className="w-2 h-2 bg-green-400 rounded-full"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-green-400">Systems Online</span>
            </div>
            <div className="flex items-center gap-2">
              <motion.div 
                className="w-2 h-2 bg-blue-400 rounded-full"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.7 }}
              />
              <span className="text-blue-400">AI Models Active</span>
            </div>
            <div className="flex items-center gap-2">
              <motion.div 
                className="w-2 h-2 bg-amber-400 rounded-full"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1.4 }}
              />
              <span className="text-amber-400">Analytics Running</span>
            </div>
          </div>
        </motion.div>

        {/* Interactive Dashboard Grid */}
        <motion.div
          className="grid lg:grid-cols-2 gap-8 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
          viewport={{ once: true }}
        >
          {/* AI Neural Network */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <AINeuralNetwork />
          </motion.div>

          {/* Analytics Dashboard */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <AnalyticsDashboard />
          </motion.div>
        </motion.div>

        {/* SEO Search Console - Full Width */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <SEOSearchConsole />
        </motion.div>

        {/* Specialized Skills Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {skillsData.categories
            .filter(cat => !["SEO Fundamentals", "AI & LLM SEO", "Analytics & Tools"].includes(cat.name))
            .map((category, index) => (
            <motion.div
              key={category.name}
              className="bg-slate-800 rounded-xl border border-slate-600 p-6"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.5 }}
              whileHover={{ y: -2 }}
            >
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <FontAwesomeIcon icon={faCode} className="text-amber-400" />
                {category.name}
              </h3>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="flex items-center justify-between p-3 bg-slate-700 rounded-lg hover:bg-slate-650 cursor-pointer transition-colors"
                    whileHover={{ x: 4 }}
                    onClick={() => openSkillModal(skill)}
                  >
                    <div className="flex items-center gap-3">
                      <FontAwesomeIcon icon={iconMap[skill.icon]} className="text-blue-400" />
                      <span className="text-gray-300">{skill.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-2 bg-slate-600 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-blue-700 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.proficiency}%` }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 + 0.8 }}
                        />
                      </div>
                      <span className="text-amber-400 text-sm font-mono w-10">{skill.proficiency}%</span>
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
          className="text-center mt-16 p-8 bg-slate-800 rounded-2xl border border-slate-600"
        >
          <div className="mb-4">
            <FontAwesomeIcon icon={faRocket} className="text-4xl text-amber-400 mb-4" />
          </div>
          <h3 className="text-2xl font-semibold text-white mb-4">Ready to Experience These Skills?</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Let's discuss how my AI-powered SEO expertise can drive exceptional results for your business.
          </p>
          <motion.button
            className="bg-blue-700 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-xl flex items-center gap-2 mx-auto"
            whileHover={{ scale: 1.05 }}
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
