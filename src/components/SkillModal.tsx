'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCheckCircle, faStar } from '@fortawesome/free-solid-svg-icons';

interface SkillModalProps {
  skill: {
    name: string;
    icon: string;
    proficiency: number;
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

interface SkillDetail {
  description: string;
  tools: string[];
  achievements: string[];
  experience: string;
  certifications: string[];
}

const skillDetails: { [key: string]: SkillDetail } = {
  "Keyword Research": {
    description: "Advanced keyword analysis and strategy development for maximum organic visibility.",
    tools: ["SEMrush", "Ahrefs", "Google Keyword Planner", "Moz", "Ubersuggest"],
    achievements: [
      "Identified high-value keywords that increased organic traffic by 150%",
      "Developed long-tail keyword strategies for competitive markets",
      "Created keyword mapping frameworks for enterprise websites"
    ],
    experience: "5+ years",
    certifications: ["Google Analytics", "SEMrush Certified"]
  },
  "On-Page SEO": {
    description: "Complete on-page optimization including content, structure, and technical elements.",
    tools: ["Screaming Frog", "Google Search Console", "Yoast", "Surfer SEO"],
    achievements: [
      "Optimized 500+ pages resulting in 79% increase in organic sessions",
      "Implemented schema markup increasing rich snippet appearances by 200%",
      "Developed content optimization workflows for consistent results"
    ],
    experience: "5+ years",
    certifications: ["Google SEO Certified", "Moz Certified"]
  },
  "Technical SEO": {
    description: "Advanced technical optimization for website performance and crawlability.",
    tools: ["Google PageSpeed Insights", "GTMetrix", "Lighthouse", "Screaming Frog"],
    achievements: [
      "Improved Core Web Vitals scores by 40% across multiple sites",
      "Implemented structured data increasing organic CTR by 25%",
      "Fixed critical crawl errors improving site indexation by 60%"
    ],
    experience: "4+ years",
    certifications: ["Google Technical SEO", "Core Web Vitals Certified"]
  },
  "Google Analytics": {
    description: "Advanced analytics setup, tracking, and reporting for data-driven decisions.",
    tools: ["GA4", "Google Tag Manager", "Data Studio", "Looker Studio"],
    achievements: [
      "Set up comprehensive tracking for 50+ websites",
      "Created custom dashboards reducing reporting time by 70%",
      "Implemented enhanced ecommerce tracking increasing conversion insights"
    ],
    experience: "5+ years",
    certifications: ["Google Analytics Certified", "Google Tag Manager Certified"]
  },
  "Content Strategy": {
    description: "Strategic content planning and optimization for search visibility and user engagement.",
    tools: ["BuzzSumo", "ContentKing", "Clearscope", "MarketMuse"],
    achievements: [
      "Developed content strategies that increased organic traffic by 200%",
      "Created content calendars for consistent publishing and growth",
      "Optimized content achieving featured snippets for 30+ keywords"
    ],
    experience: "4+ years",
    certifications: ["Content Marketing Certified", "HubSpot Content Marketing"]
  }
};

export default function SkillModal({ skill, isOpen, onClose }: SkillModalProps) {
  if (!skill) return null;

  const details = skillDetails[skill.name] || {
    description: "Comprehensive expertise in " + skill.name.toLowerCase(),
    tools: ["Various industry tools"],
    achievements: ["Professional experience and proven results"],
    experience: "3+ years",
    certifications: ["Industry certified"]
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-teal-500 to-emerald-600 text-white p-6 relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <FontAwesomeIcon icon={faTimes} className="text-sm" />
              </button>
              
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                  <span className="text-2xl font-bold">
                    {skill.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{skill.name}</h2>
                  <div className="flex items-center space-x-2 mt-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <FontAwesomeIcon
                          key={i}
                          icon={faStar}
                          className={`w-4 h-4 ${
                            i < Math.floor(skill.proficiency / 20)
                              ? 'text-yellow-300'
                              : 'text-white/40'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-medium">{skill.proficiency}% Proficiency</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6 overflow-y-auto max-h-96">
              {/* Description */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Overview</h3>
                <p className="text-gray-700 leading-relaxed">{details.description}</p>
              </div>

              {/* Experience & Certifications */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Experience</h3>
                  <p className="text-teal-600 font-medium">{details.experience}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Certifications</h3>
                  <div className="flex flex-wrap gap-2">
                    {details.certifications.map((cert, index) => (
                      <span
                        key={index}
                        className="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tools */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Tools & Technologies</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {details.tools.map((tool, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 text-gray-800 text-sm px-3 py-2 rounded-lg text-center font-medium"
                    >
                      {tool}
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Achievements</h3>
                <div className="space-y-3">
                  {details.achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="text-teal-500 w-5 h-5 mt-0.5 flex-shrink-0"
                      />
                      <p className="text-gray-700 text-sm leading-relaxed">{achievement}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-gray-100 p-4 bg-gray-50">
              <button
                onClick={onClose}
                className="w-full bg-gradient-to-r from-teal-500 to-emerald-600 text-white py-3 rounded-xl font-semibold hover:from-teal-600 hover:to-emerald-700 transition-all duration-300"
              >
                Close Details
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
