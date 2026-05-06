'use client';

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const featured = [
  {
    title: 'How AI Is Changing SEO: What You Need to Know in 2025',
    summary:
      'AI Overviews, ChatGPT, and Perplexity are reshaping discovery. Here\'s what SEO practitioners need to adapt.',
    href: '/seo-resources/blog/ai-search-optimization-guide',
    tag: 'AI & Search',
    tagColor: 'bg-purple-500/10 text-purple-300',
  },
  {
    title: 'The Three Pillars of SEO: Authority, Relevance & Experience',
    summary:
      'A framework for thinking about organic growth that applies whether you\'re optimizing for Google or AI search.',
    href: '/seo-resources/docs/getting-started/seo-pillars',
    tag: 'Fundamentals',
    tagColor: 'bg-blue-500/10 text-blue-300',
  },
  {
    title: 'Structured Data & Schema Markup Guide',
    summary:
      'Schema is table stakes for AI citations. How to implement it correctly and which types actually matter.',
    href: '/seo-resources/docs/technical-seo/structured-data',
    tag: 'Technical SEO',
    tagColor: 'bg-emerald-500/10 text-emerald-300',
  },
];

export default function InsightsSection() {
  return (
    <section
      className="py-24 px-6 bg-slate-900"
      aria-labelledby="insights-heading"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-14"
        >
          <div>
            <h2
              id="insights-heading"
              className="text-3xl md:text-4xl font-light text-white mb-3"
            >
              Latest thinking
            </h2>
            <p className="text-slate-400 max-w-lg">
              Practical takes on SEO strategy, AI-driven search, and what actually moves the needle.
            </p>
          </div>
          <a
            href="/seo-resources/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors whitespace-nowrap"
          >
            All resources
            <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3" />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {featured.map((item, i) => (
            <motion.a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group block border border-slate-700/50 rounded-xl p-6 hover:border-slate-600 hover:bg-slate-800/30 transition-all"
            >
              <span className={`inline-block text-xs px-2.5 py-1 rounded-full mb-4 ${item.tagColor}`}>
                {item.tag}
              </span>
              <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors leading-snug">
                {item.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {item.summary}
              </p>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 text-center md:hidden"
        >
          <a
            href="/seo-resources/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
          >
            All resources
            <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
