'use client';

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBookOpen, 
  faArrowRight,
  faGraduationCap,
  faTools,
  faFileAlt,
  faRocket
} from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const resourceHighlights = [
  {
    icon: faGraduationCap,
    title: "Beginner Guides",
    description: "Start your SEO journey with comprehensive fundamentals"
  },
  {
    icon: faTools,
    title: "Free Tools",
    description: "Essential SEO tools and resources for every budget"
  },
  {
    icon: faFileAlt,
    title: "Checklists",
    description: "Actionable checklists to never miss important SEO tasks"
  }
];

export default function SEOResourcesCTA() {
  return (
    <section 
      id="seo-resources-cta" 
      className="py-20 px-6 bg-gradient-to-br from-slate-800 via-blue-900 to-purple-900 relative overflow-hidden"
      aria-labelledby="resources-cta-heading"
      aria-label="SEO Resource Center call-to-action"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
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
          <div className="mb-6">
            <FontAwesomeIcon icon={faBookOpen} className="text-5xl text-blue-400 mb-4" />
          </div>
          <h2 
            id="resources-cta-heading"
            className="text-3xl md:text-5xl font-light mb-6 text-white"
          >
            Free SEO Resource Center
          </h2>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto mb-8">
            Access our comprehensive SEO documentation with guides, tools, and checklists. 
            Everything you need to master search engine optimization.
          </p>
        </motion.div>

        {/* Resource Highlights */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {resourceHighlights.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={resource.icon} className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{resource.title}</h3>
              <p className="text-slate-200 text-sm leading-relaxed">{resource.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Main CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
            <FontAwesomeIcon icon={faRocket} className="text-4xl text-yellow-400 mb-6" />
            <h3 className="text-2xl md:text-3xl font-light text-white mb-4">
              Ready to Master SEO?
            </h3>
            <p className="text-slate-200 mb-8 max-w-2xl mx-auto">
              Dive into our comprehensive SEO Resource Center with step-by-step guides, 
              tool recommendations, and actionable checklists.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/seo-resources"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <FontAwesomeIcon icon={faBookOpen} />
                Explore Resource Center
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
              <Link 
                href="#contact"
                className="inline-flex items-center gap-2 border border-white/50 text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-full font-semibold transition-all duration-300"
              >
                Get Personal Help
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <div className="text-white">
            <div className="text-3xl font-bold text-blue-400 mb-2">20+</div>
            <div className="text-slate-300">Comprehensive Guides</div>
          </div>
          <div className="text-white">
            <div className="text-3xl font-bold text-green-400 mb-2">50+</div>
            <div className="text-slate-300">Free SEO Tools</div>
          </div>
          <div className="text-white">
            <div className="text-3xl font-bold text-purple-400 mb-2">100%</div>
            <div className="text-slate-300">Free Access</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
