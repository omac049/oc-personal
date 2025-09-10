'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSearch, faFileText, faLink, faCog, faMobileAlt, faMapMarkerAlt,
  faShoppingCart, faCode, faChartLine, faSearchPlus, faChartBar,
  faEdit, faLanguage, faRobot, faBrain, faEye, faArrowUp, faPlay,
  faDownload, faFilter, faCalendar, faBell, faUser, faRocket,
  faTrophy, faGlobe, faBolt, faShield, faMagic, faGem, faStar,
  faFire, faLightbulb, faChartPie, faKeyboard, faMicrophone, faExpand
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

// Advanced Achievement System
const achievements = [
  { id: 'seo_master', name: 'SEO Master', icon: faTrophy, progress: 95, color: 'text-amber-400' },
  { id: 'ai_expert', name: 'AI Expert', icon: faBrain, progress: 92, color: 'text-blue-400' },
  { id: 'analytics_pro', name: 'Analytics Pro', icon: faChartLine, progress: 98, color: 'text-green-400' },
  { id: 'innovation', name: 'Innovation Leader', icon: faRocket, progress: 88, color: 'text-purple-400' }
];

// Real-time Metrics Simulation
const generateMetrics = () => ({
  organicTraffic: Math.floor(Math.random() * 10000) + 45000,
  keywordRankings: Math.floor(Math.random() * 500) + 1200,
  conversionRate: (Math.random() * 2 + 3.5).toFixed(2),
  pageSpeed: (Math.random() * 0.5 + 2.5).toFixed(1),
  backlinks: Math.floor(Math.random() * 1000) + 8500,
  contentScore: Math.floor(Math.random() * 10) + 85
});

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
  const [activeTab, setActiveTab] = useState('overview');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [liveMetrics, setLiveMetrics] = useState(generateMetrics());
  const [aiAnalysisRunning, setAiAnalysisRunning] = useState(false);
  const [notifications, setNotifications] = useState<string[]>([]);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Advanced mount detection and real-time updates
  useEffect(() => {
    setMounted(true);
    
    // Real-time metrics updates
    const metricsInterval = setInterval(() => {
      setLiveMetrics(generateMetrics());
    }, 5000);

    // Simulated notifications
    const notificationTexts = [
      "🎯 New keyword ranking improvement detected",
      "📈 Traffic spike: +15% this hour",
      "🤖 AI optimization completed",
      "🔍 Technical SEO audit finished",
      "💎 Content quality score increased"
    ];

    const notificationInterval = setInterval(() => {
      const randomNotification = notificationTexts[Math.floor(Math.random() * notificationTexts.length)];
      setNotifications(prev => [randomNotification, ...prev.slice(0, 3)]);
    }, 8000);

    return () => {
      clearInterval(metricsInterval);
      clearInterval(notificationInterval);
    };
  }, []);

  const openSkillModal = useCallback((skill: { name: string; icon: string; proficiency: number }) => {
    setSelectedSkill(skill);
    setIsModalOpen(true);
  }, []);

  const closeSkillModal = useCallback(() => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedSkill(null), 300);
  }, []);

  const runAIAnalysis = useCallback(() => {
    setAiAnalysisRunning(true);
    setTimeout(() => {
      setAiAnalysisRunning(false);
      setNotifications(prev => ["🧠 AI Analysis Complete: 97% optimization potential", ...prev.slice(0, 3)]);
    }, 3000);
  }, []);

  // Advanced Tab System
  const tabs = [
    { id: 'overview', name: 'Command Overview', icon: faChartPie },
    { id: 'analytics', name: 'Live Analytics', icon: faChartLine },
    { id: 'ai-neural', name: 'AI Neural Net', icon: faBrain },
    { id: 'tools', name: 'SEO Tools', icon: faCog },
    { id: 'achievements', name: 'Achievements', icon: faTrophy }
  ];

  // Command Center Header with Advanced Features
  const CommandHeader = () => (
    <motion.div
      className="bg-slate-800 border-b border-slate-600 p-4 flex items-center justify-between"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center gap-4">
        <motion.div
          className="flex items-center gap-2"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <FontAwesomeIcon icon={faGlobe} className="text-blue-400 text-xl" />
        </motion.div>
        <div>
          <h1 className="text-xl font-bold text-white">SEO Command Center Pro</h1>
          <p className="text-sm text-gray-400">Advanced AI-Powered SEO Platform</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Live Status */}
        <div className="flex items-center gap-2">
          <motion.div
            className="w-2 h-2 bg-green-400 rounded-full"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-green-400 text-sm font-medium">LIVE</span>
        </div>

        {/* Notifications */}
        <motion.div
          className="relative cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FontAwesomeIcon icon={faBell} className="text-amber-400 text-lg" />
          {notifications.length > 0 && (
            <motion.div
              className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          )}
        </motion.div>

        {/* Fullscreen Toggle */}
        <motion.button
          className="text-gray-400 hover:text-white transition-colors"
          whileHover={{ scale: 1.1 }}
          onClick={() => setIsFullscreen(!isFullscreen)}
        >
          <FontAwesomeIcon icon={faExpand} />
        </motion.button>
      </div>
    </motion.div>
  );

  // Live Metrics Dashboard
  const LiveMetricsDashboard = () => (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
      {[
        { label: 'Organic Traffic', value: liveMetrics.organicTraffic.toLocaleString(), icon: faArrowUp, color: 'text-green-400' },
        { label: 'Keywords', value: liveMetrics.keywordRankings.toLocaleString(), icon: faSearch, color: 'text-blue-400' },
        { label: 'Conversion', value: `${liveMetrics.conversionRate}%`, icon: faBolt, color: 'text-amber-400' },
        { label: 'Page Speed', value: `${liveMetrics.pageSpeed}s`, icon: faRocket, color: 'text-purple-400' },
        { label: 'Backlinks', value: liveMetrics.backlinks.toLocaleString(), icon: faLink, color: 'text-cyan-400' },
        { label: 'Content Score', value: liveMetrics.contentScore, icon: faStar, color: 'text-pink-400' }
      ].map((metric, index) => (
        <motion.div
          key={metric.label}
          className="bg-slate-700 rounded-lg p-4 border border-slate-600"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.02, y: -2 }}
        >
          <div className="flex items-center gap-2 mb-2">
            <FontAwesomeIcon icon={metric.icon} className={`${metric.color} text-sm`} />
            <span className="text-xs text-gray-400 uppercase tracking-wide">{metric.label}</span>
          </div>
          <motion.div
            className={`text-2xl font-bold ${metric.color}`}
            key={metric.value}
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {metric.value}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );

  // AI Neural Network - Enhanced 10x
  const AdvancedAINeuralNetwork = () => {
    const aiSkills = skillsData.categories.find(cat => cat.name === "AI & LLM SEO")?.skills || [];
    
    return (
      <div className="bg-slate-900 rounded-xl border border-slate-600 p-6 relative overflow-hidden">
        {/* Neural Network Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <FontAwesomeIcon icon={faBrain} className="text-2xl text-amber-400" />
            </motion.div>
            <div>
              <h3 className="text-xl font-bold text-white">AI Neural Network</h3>
              <p className="text-sm text-gray-400">Advanced Machine Learning Pipeline</p>
            </div>
          </div>

          <motion.button
            className="bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={runAIAnalysis}
            disabled={aiAnalysisRunning}
          >
            <FontAwesomeIcon icon={aiAnalysisRunning ? faCog : faMagic} className={aiAnalysisRunning ? "animate-spin" : ""} />
            {aiAnalysisRunning ? 'Analyzing...' : 'Run AI Analysis'}
          </motion.button>
        </div>

        {/* Neural Network Visualization */}
        <div className="relative h-80">
          {/* Central AI Core */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center"
            animate={{ 
              boxShadow: [
                "0 0 20px rgba(59, 130, 246, 0.5)",
                "0 0 40px rgba(147, 51, 234, 0.7)",
                "0 0 20px rgba(59, 130, 246, 0.5)"
              ] 
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <FontAwesomeIcon icon={faBrain} className="text-white text-xl" />
          </motion.div>

          {/* Neural Nodes */}
          {aiSkills.map((skill, index) => {
            const angle = (index / aiSkills.length) * 2 * Math.PI;
            const radius = 120;
            const x = Math.cos(angle) * radius + 50;
            const y = Math.sin(angle) * radius + 50;

            return (
              <motion.div
                key={skill.name}
                className="absolute cursor-pointer group"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: 'translate(-50%, -50%)'
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.3 }}
                onClick={() => openSkillModal(skill)}
              >
                <motion.div
                  className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center border-2 border-blue-500"
                  animate={{ 
                    borderColor: ["#3b82f6", "#8b5cf6", "#06b6d4", "#3b82f6"],
                    boxShadow: [
                      "0 0 0 0 rgba(59, 130, 246, 0.4)",
                      "0 0 0 8px rgba(59, 130, 246, 0)",
                      "0 0 0 0 rgba(59, 130, 246, 0.4)"
                    ]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                >
                  <FontAwesomeIcon icon={faRobot} className="text-white text-sm" />
                </motion.div>

                {/* Skill Details Tooltip */}
                <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 px-3 py-2 rounded-lg border border-slate-600 whitespace-nowrap z-20">
                  <div className="text-white text-sm font-medium">{skill.name}</div>
                  <div className="text-blue-400 text-xs">{skill.proficiency}% Mastery</div>
                </div>

                {/* Neural Connections */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ left: '-50%', top: '-50%', width: '200%', height: '200%' }}>
                  <motion.line
                    x1="50%"
                    y1="50%"
                    x2="50%"
                    y2="50%"
                    stroke="#3b82f6"
                    strokeWidth="1"
                    opacity="0.3"
                    animate={{
                      opacity: [0.2, 0.6, 0.2],
                      strokeWidth: [1, 2, 1]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.3
                    }}
                  />
                </svg>
              </motion.div>
            );
          })}

          {/* Data Flow Particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-amber-400 rounded-full"
              style={{
                left: '50%',
                top: '50%'
              }}
              animate={{
                x: [0, Math.cos(i * 60 * Math.PI / 180) * 100, 0],
                y: [0, Math.sin(i * 60 * Math.PI / 180) * 100, 0],
                opacity: [0, 1, 0],
                scale: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.7,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* AI Analysis Progress */}
        <AnimatePresence>
          {aiAnalysisRunning && (
            <motion.div
              className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="text-center">
                <motion.div
                  className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                <div className="text-white font-medium">Running AI Analysis...</div>
                <div className="text-gray-400 text-sm">Optimizing neural pathways</div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  // Professional Tools Suite
  const ProfessionalToolsSuite = () => (
    <div className="grid md:grid-cols-2 gap-6">
      {/* Google Analytics Simulation */}
      <motion.div
        className="bg-white rounded-xl border border-gray-300 overflow-hidden"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
      >
        <div className="bg-blue-600 text-white p-4 flex items-center gap-3">
          <FontAwesomeIcon icon={faChartLine} />
          <div>
            <div className="font-semibold">Google Analytics 4</div>
            <div className="text-xs opacity-90">Real-time Performance</div>
          </div>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <div className="text-2xl font-bold text-gray-800">{liveMetrics.organicTraffic.toLocaleString()}</div>
              <div className="text-sm text-gray-600">Users (30 days)</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">+{liveMetrics.conversionRate}%</div>
              <div className="text-sm text-gray-600">Conversion Rate</div>
            </div>
          </div>
          <div className="h-20 flex items-end gap-1">
            {[...Array(14)].map((_, i) => (
              <motion.div
                key={i}
                className="flex-1 bg-blue-500 rounded-sm"
                initial={{ height: 0 }}
                animate={{ height: `${Math.random() * 100}%` }}
                transition={{ duration: 1, delay: i * 0.1 }}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* SEMrush Simulation */}
      <motion.div
        className="bg-slate-800 rounded-xl border border-slate-600 overflow-hidden"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
      >
        <div className="bg-orange-600 text-white p-4 flex items-center gap-3">
          <FontAwesomeIcon icon={faSearch} />
          <div>
            <div className="font-semibold">SEMrush Pro</div>
            <div className="text-xs opacity-90">Keyword Intelligence</div>
          </div>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <div className="text-2xl font-bold text-white">{liveMetrics.keywordRankings.toLocaleString()}</div>
              <div className="text-sm text-gray-400">Tracked Keywords</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-400">#{Math.floor(Math.random() * 3) + 1}</div>
              <div className="text-sm text-gray-400">Avg. Position</div>
            </div>
          </div>
          <div className="space-y-2">
            {['AI SEO optimization', 'machine learning seo', 'neural network marketing'].map((keyword, i) => (
              <div key={keyword} className="flex justify-between items-center text-sm">
                <span className="text-gray-300">{keyword}</span>
                <span className="text-green-400 font-mono">#{i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );

  // Achievement System
  const AchievementSystem = () => (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.id}
            className="bg-slate-700 rounded-xl p-4 border border-slate-600 relative overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -2 }}
          >
            {/* Achievement Progress Background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent to-blue-500/10"
              initial={{ width: 0 }}
              animate={{ width: `${achievement.progress}%` }}
              transition={{ duration: 2, delay: index * 0.2 }}
            />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-3">
                <FontAwesomeIcon 
                  icon={achievement.icon} 
                  className={`text-xl ${achievement.color}`} 
                />
                <div>
                  <div className="font-semibold text-white">{achievement.name}</div>
                  <div className="text-xs text-gray-400">{achievement.progress}% Complete</div>
                </div>
              </div>
              
              <div className="w-full bg-slate-600 rounded-full h-2">
                <motion.div
                  className={`h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600`}
                  initial={{ width: 0 }}
                  animate={{ width: `${achievement.progress}%` }}
                  transition={{ duration: 2, delay: index * 0.2 }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Skills Mastery Radar */}
      <div className="bg-slate-800 rounded-xl border border-slate-600 p-6">
        <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <FontAwesomeIcon icon={faStar} className="text-amber-400" />
          Skills Mastery Overview
        </h4>
        <div className="grid md:grid-cols-2 gap-6">
          {skillsData.categories.map((category, index) => (
            <div key={category.name} className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-300 font-medium">{category.name}</span>
                <span className="text-blue-400 font-mono text-sm">
                  {Math.round(category.skills.reduce((acc, skill) => acc + skill.proficiency, 0) / category.skills.length)}%
                </span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-3">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                  initial={{ width: 0 }}
                  animate={{ 
                    width: `${Math.round(category.skills.reduce((acc, skill) => acc + skill.proficiency, 0) / category.skills.length)}%`
                  }}
                  transition={{ duration: 2, delay: index * 0.3 }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Main Tab Content Renderer
  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            <LiveMetricsDashboard />
            <ProfessionalToolsSuite />
          </div>
        );
      case 'analytics':
        return <LiveMetricsDashboard />;
      case 'ai-neural':
        return <AdvancedAINeuralNetwork />;
      case 'tools':
        return <ProfessionalToolsSuite />;
      case 'achievements':
        return <AchievementSystem />;
      default:
        return <LiveMetricsDashboard />;
    }
  };

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
              <div className="grid lg:grid-cols-2 gap-8 mt-8">
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
    <section 
      ref={containerRef} 
      id="skills" 
      className={`min-h-screen bg-slate-900 relative overflow-hidden ${isFullscreen ? 'fixed inset-0 z-50' : ''}`}
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.5, 0.1]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10 h-full flex flex-col">
        <CommandHeader />

        {/* Navigation Tabs */}
        <div className="border-b border-slate-600 px-6">
          <div className="flex space-x-8">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                className={`py-4 px-2 border-b-2 font-medium text-sm flex items-center gap-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-400'
                    : 'border-transparent text-gray-400 hover:text-gray-300'
                }`}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FontAwesomeIcon icon={tab.icon} />
                {tab.name}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-6 overflow-y-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderTabContent()}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Live Notifications Sidebar */}
        <AnimatePresence>
          {notifications.length > 0 && (
            <motion.div
              className="fixed top-20 right-6 space-y-2 z-40"
              initial={{ x: 400 }}
              animate={{ x: 0 }}
              exit={{ x: 400 }}
            >
              {notifications.slice(0, 3).map((notification, index) => (
                <motion.div
                  key={`${notification}-${index}`}
                  className="bg-slate-800 border border-slate-600 rounded-lg p-3 shadow-lg max-w-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-white text-sm">{notification}</div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Call to Action Footer */}
        <motion.div
          className="p-6 bg-slate-800 border-t border-slate-600"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="text-center">
            <h3 className="text-xl font-semibold text-white mb-2 flex items-center justify-center gap-2">
              <FontAwesomeIcon icon={faRocket} className="text-amber-400" />
              Ready to Transform Your SEO Strategy?
            </h3>
            <p className="text-gray-400 mb-4 max-w-2xl mx-auto">
              Experience the power of AI-driven SEO optimization and data-driven insights that deliver exceptional results.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                className="bg-blue-700 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg flex items-center gap-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <FontAwesomeIcon icon={faPlay} />
                Start Your SEO Transformation
              </motion.button>
              <motion.button
                className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg flex items-center gap-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={runAIAnalysis}
              >
                <FontAwesomeIcon icon={faMagic} />
                Get Free AI Analysis
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Skill Modal */}
      <SkillModal 
        skill={selectedSkill}
        isOpen={isModalOpen}
        onClose={closeSkillModal}
      />
    </section>
  );
}
