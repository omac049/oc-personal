'use client';

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

export default function SEOResourcesCTA() {
  return (
    <section 
      id="seo-resources-cta" 
      className="py-16 px-6 bg-gradient-to-br from-slate-800 via-blue-900/80 to-slate-800 relative overflow-hidden"
      aria-labelledby="resources-cta-heading"
    >
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 
            id="resources-cta-heading"
            className="text-2xl md:text-3xl font-light mb-4 text-white"
          >
            Free SEO Resource Center
          </h2>
          <p className="text-base text-slate-300 max-w-2xl mx-auto mb-8">
            Guides, tools, and checklists to sharpen your SEO — whether you&apos;re starting out or scaling up.
          </p>
          
          <Link 
            href="/seo-resources"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <FontAwesomeIcon icon={faBookOpen} />
            Explore Resources
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
