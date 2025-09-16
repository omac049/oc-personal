'use client';

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBookOpen, 
  faTools, 
  faFileAlt, 
  faGraduationCap,
  faArrowRight,
  faSearch,
  faChartLine,
  faCode,
  faLightbulb
} from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const featuredResources = [
  {
    title: "SEO Fundamentals Guide",
    description: "Complete beginner&apos;s guide to search engine optimization",
    icon: faGraduationCap,
    category: "Guide",
    difficulty: "Beginner",
    readTime: "15 min"
  },
  {
    title: "Free SEO Tools Collection",
    description: "Essential tools for keyword research, analytics, and optimization",
    icon: faTools,
    category: "Tools",
    difficulty: "All Levels",
    readTime: "Browse"
  },
  {
    title: "SEO Checklists",
    description: "Actionable checklists for website launches and maintenance",
    icon: faFileAlt,
    category: "Checklist",
    difficulty: "Beginner",
    readTime: "5 min"
  },
  {
    title: "Technical SEO Basics",
    description: "Website speed, mobile optimization, and crawlability",
    icon: faCode,
    category: "Guide",
    difficulty: "Intermediate",
    readTime: "20 min"
  }
];

const quickTips = [
  {
    icon: faSearch,
    tip: "Focus on long-tail keywords",
    description: "Target specific phrases your audience actually searches for"
  },
  {
    icon: faChartLine,
    tip: "Monitor Core Web Vitals",
    description: "Page speed and user experience directly impact rankings"
  },
  {
    icon: faLightbulb,
    tip: "Create valuable content",
    description: "Answer real questions your audience is asking"
  },
  {
    icon: faCode,
    tip: "Optimize for mobile-first",
    description: "Google uses mobile version for indexing and ranking"
  }
];

export default function Resources() {
  return (
    <section 
      id="resources" 
      className="min-h-screen py-20 px-6 bg-slate-900 relative overflow-hidden"
      aria-labelledby="resources-heading"
      aria-label="Free SEO resources and learning materials"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <FontAwesomeIcon icon={faBookOpen} className="text-5xl text-blue-400 mb-6" />
          <h2 
            id="resources-heading"
            className="text-4xl md:text-5xl font-light mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent"
          >
            Free SEO Resources
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Everything you need to learn SEO from scratch. Guides, tools, and checklists to boost your website&apos;s search rankings.
          </p>
          <Link 
            href="/resources"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
          >
            View All Resources
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </motion.div>

        {/* Featured Resources Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {featuredResources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300 cursor-pointer group"
            >
              <div className="text-center mb-4">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500 transition-colors duration-300">
                  <FontAwesomeIcon icon={resource.icon} className="text-white text-2xl" />
                </div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full">
                    {resource.category}
                  </span>
                  <span className="bg-slate-600 text-slate-300 text-xs px-2 py-1 rounded-full">
                    {resource.difficulty}
                  </span>
                </div>
                <span className="text-slate-400 text-xs">{resource.readTime}</span>
              </div>
              
              <h3 className="text-lg font-semibold text-white mb-3 text-center group-hover:text-blue-300 transition-colors duration-300">
                {resource.title}
              </h3>
              <p className="text-slate-400 text-sm text-center leading-relaxed">
                {resource.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Quick SEO Tips */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-slate-800 rounded-2xl p-8 border border-slate-700"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-light text-white mb-4">
              Quick SEO Tips for Beginners
            </h3>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Essential SEO principles every website owner should know
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickTips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-4 rounded-lg bg-slate-900 hover:bg-slate-750 transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FontAwesomeIcon icon={tip.icon} className="text-white text-lg" />
                </div>
                <h4 className="text-white font-semibold mb-2">{tip.tip}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{tip.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-light text-white mb-4">
              Need Personalized SEO Help?
            </h3>
            <p className="text-slate-200 mb-8 max-w-2xl mx-auto">
              Get expert guidance tailored to your specific business goals and challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/resources"
                className="bg-white text-blue-900 px-8 py-4 rounded-full font-semibold hover:bg-slate-100 transition-all duration-300 transform hover:scale-105"
              >
                Explore All Resources
              </Link>
              <Link 
                href="#contact"
                className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-full font-semibold transition-all duration-300"
              >
                Get Free Consultation
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
