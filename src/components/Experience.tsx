'use client';

import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { experienceData } from '@/data/experience';
import AlgorithmBackground from './AlgorithmBackground';
import { useDeviceDetection, getAnimationConfig } from '@/hooks/useDeviceDetection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBriefcase, faCalendarAlt, faRocket, faTrophy, faChartLine,
  faCrown, faStar, faGem, faLightbulb, faMagic, faInfinity,
  faBolt, faAtom, faFire, faWandMagicSparkles
} from '@fortawesome/free-solid-svg-icons';

// Professional floating elements for enhanced engagement
const professionalElements = [
  { icon: faRocket, color: '#60a5fa', size: 'w-8 h-8', position: { top: '15%', left: '10%' }, label: 'Growth' },
  { icon: faTrophy, color: '#f59e0b', size: 'w-7 h-7', position: { top: '25%', right: '15%' }, label: 'Achievement' },
  { icon: faChartLine, color: '#10b981', size: 'w-6 h-6', position: { top: '60%', left: '8%' }, label: 'Performance' },
  { icon: faCrown, color: '#8b5cf6', size: 'w-9 h-9', position: { bottom: '20%', right: '12%' }, label: 'Leadership' },
  { icon: faStar, color: '#06b6d4', size: 'w-5 h-5', position: { top: '40%', right: '8%' }, label: 'Excellence' },
  { icon: faGem, color: '#ec4899', size: 'w-6 h-6', position: { bottom: '35%', left: '15%' }, label: 'Quality' },
  { icon: faLightbulb, color: '#f97316', size: 'w-7 h-7', position: { top: '70%', right: '25%' }, label: 'Innovation' },
  { icon: faMagic, color: '#84cc16', size: 'w-8 h-8', position: { top: '30%', left: '20%' }, label: 'Strategy' },
  { icon: faInfinity, color: '#3b82f6', size: 'w-6 h-6', position: { bottom: '45%', right: '20%' }, label: 'Scalability' },
  { icon: faBolt, color: '#eab308', size: 'w-5 h-5', position: { top: '80%', left: '25%' }, label: 'Speed' },
  { icon: faAtom, color: '#a855f7', size: 'w-7 h-7', position: { top: '50%', left: '5%' }, label: 'Technical' },
  { icon: faFire, color: '#ef4444', size: 'w-6 h-6', position: { top: '35%', left: '85%' }, label: 'Passion' },
  { icon: faWandMagicSparkles, color: '#06b6d4', size: 'w-8 h-8', position: { bottom: '60%', left: '30%' }, label: 'Transformation' },
];

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const deviceInfo = useDeviceDetection();
  const animConfig = getAnimationConfig(deviceInfo);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { damping: 30, stiffness: 200 });
  const smoothMouseY = useSpring(mouseY, { damping: 30, stiffness: 200 });

  // Parallax transforms based on scroll and mouse
  const parallaxY = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);
  const parallaxX = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);
  const mouseParallaxX = useTransform(smoothMouseX, [-200, 200], [-30, 30]);
  const mouseParallaxY = useTransform(smoothMouseY, [-200, 200], [-20, 20]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (rect) {
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
        mouseX.set(x * 200);
        mouseY.set(y * 200);
      }
    };

    const element = sectionRef.current;
    if (element) {
      element.addEventListener('mousemove', handleMouseMove);
      return () => element.removeEventListener('mousemove', handleMouseMove);
    }
  }, [mouseX, mouseY]);

  return (
    <section 
      ref={sectionRef}
      id="experience" 
      className="min-h-screen py-20 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900 relative overflow-hidden"
      suppressHydrationWarning
    >
      {/* Algorithm Background */}
      <AlgorithmBackground opacity="opacity-5" />

      {/* Professional Floating Elements */}
      <div className="hidden lg:block">
        {professionalElements.map((element, index) => (
          <motion.div
            key={index}
            className={`absolute z-20 opacity-60 hover:opacity-100 transition-all duration-500 group cursor-pointer`}
            style={{
              ...element.position,
              color: element.color,
              x: mouseParallaxX,
              y: mouseParallaxY,
            }}
            whileHover={{ 
              scale: 1.8,
              rotate: 360,
              transition: { duration: 0.6 }
            }}
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 3 + index * 0.5,
              repeat: Infinity,
              delay: index * 0.3,
              ease: "easeInOut"
            }}
          >
            <FontAwesomeIcon icon={element.icon} className={element.size} />
            
            {/* Tooltip */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-gray-900/90 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-30">
              {element.label}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Enhanced Particle System */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        style={{
          y: parallaxY,
          x: parallaxX,
        }}
      >
        {Array.from({ length: 30 }, (_, i) => {
          // Generate deterministic pseudo-random values based on index
          const leftSeed = (i * 31 + 17) % 97;
          const topSeed = (i * 23 + 41) % 89;
          const sizeSeed = (i * 13 + 7) % 5;
          const delaySeed = (i * 19 + 29) % 37;
          
          return (
            <motion.div
              key={i}
              className="absolute bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full"
              style={{
                left: `${(leftSeed / 97) * 100}%`,
                top: `${(topSeed / 89) * 100}%`,
                width: `${2 + sizeSeed}px`,
                height: `${2 + sizeSeed}px`,
              }}
              animate={{
                y: [0, -20 - sizeSeed * 5, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.2 + sizeSeed * 0.1, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 4 + sizeSeed,
                repeat: Infinity,
                delay: (delaySeed / 37) * 3,
                ease: "easeInOut"
              }}
            />
          );
        })}
      </motion.div>

              <motion.div 
          className="max-w-6xl mx-auto px-6 relative z-10"
          style={{
            y: useTransform(scrollYProgress, [0, 1], ['0%', '-10%']),
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
            A journey through technology leadership, innovation, and growth
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
