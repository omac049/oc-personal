'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

interface FAQItem {
  question: string;
  answer: string;
  keywords: string[];
}

const faqData: FAQItem[] = [
  {
    question: "What is AI-powered SEO and how does it work?",
    answer: "AI-powered SEO combines traditional search engine optimization with artificial intelligence technologies like ChatGPT, Claude, and machine learning algorithms. It involves using AI for keyword research, content optimization, technical audits, and adapting strategies for Search Generative Experience (SGE). This approach helps websites rank better in both traditional search results and AI-generated responses.",
    keywords: ["AI SEO", "ChatGPT", "Claude", "machine learning", "SGE"]
  },
  {
    question: "How do you optimize content for Large Language Models (LLMs)?",
    answer: "LLM optimization involves structuring content for AI understanding, using natural language patterns, implementing comprehensive schema markup, creating conversational content formats, and optimizing for featured snippets and voice search queries. I focus on making content that performs well in AI-powered search experiences while maintaining human readability.",
    keywords: ["LLM optimization", "natural language", "schema markup", "voice search"]
  },
  {
    question: "What is Search Generative Experience (SGE) optimization?",
    answer: "SGE optimization prepares websites for AI-powered search engines that generate contextual answers. This includes optimizing for conversational queries, structured data implementation, authoritative content creation, and ensuring content appears in AI-generated search responses. It's essential for staying visible as search evolves.",
    keywords: ["SGE", "conversational queries", "AI search", "structured data"]
  },
  {
    question: "How long does it take to see SEO results?",
    answer: "SEO results typically begin showing within 3-6 months, with significant improvements visible in 6-12 months. AI-powered strategies can accelerate certain aspects like content optimization and technical fixes, but organic growth requires consistent effort over time. I provide monthly reports to track progress and adjust strategies.",
    keywords: ["SEO timeline", "results", "organic growth", "monthly reports"]
  },
  {
    question: "Do you provide local SEO services for Phoenix businesses?",
    answer: "Yes, I specialize in local SEO for Phoenix, Arizona businesses. Services include Google Business Profile optimization, local keyword targeting, citation building, review management, and location-specific content strategies. I understand the Phoenix market and help businesses dominate local search results.",
    keywords: ["Phoenix SEO", "local SEO", "Google Business Profile", "Arizona"]
  },
  {
    question: "What tools do you use for AI-powered SEO?",
    answer: "I use a combination of traditional SEO tools (Google Analytics, Search Console, SEMrush, Ahrefs) and AI-powered tools including ChatGPT, Claude, custom automation scripts, and advanced analytics platforms. This hybrid approach ensures comprehensive optimization for both traditional and AI-powered search.",
    keywords: ["SEO tools", "Google Analytics", "SEMrush", "Ahrefs", "automation"]
  }
];

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section 
      className="py-16 bg-slate-800 relative overflow-hidden"
      itemScope
      itemType="https://schema.org/FAQPage"
      aria-labelledby="faq-heading"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(96, 165, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(96, 165, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-6">
            <FontAwesomeIcon 
              icon={faQuestionCircle} 
              className="text-4xl text-blue-500 mr-4"
            />
            <h2 
              id="faq-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
            >
              Frequently Asked Questions
            </h2>
          </div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Common questions about AI-powered SEO, LLM optimization, and my services
          </p>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-6"></div>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-600/30 overflow-hidden"
              itemScope
              itemType="https://schema.org/Question"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-slate-700/30 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                aria-expanded={openItems.includes(index)}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 
                  className="text-lg md:text-xl font-semibold text-white pr-4 speakable"
                  itemProp="name"
                >
                  {item.question}
                </h3>
                <FontAwesomeIcon 
                  icon={openItems.includes(index) ? faMinus : faPlus}
                  className="text-blue-400 text-xl flex-shrink-0"
                  aria-hidden="true"
                />
              </button>

              <AnimatePresence>
                {openItems.includes(index) && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                    itemScope
                    itemType="https://schema.org/Answer"
                  >
                    <div className="px-6 pb-6">
                      <div className="h-px bg-slate-600/50 mb-4"></div>
                      <p 
                        className="text-slate-300 leading-relaxed speakable"
                        itemProp="text"
                      >
                        {item.answer}
                      </p>
                      
                      {/* Keywords for SEO */}
                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.keywords.map((keyword, keyIndex) => (
                          <span
                            key={keyIndex}
                            className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full border border-blue-400/30"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12 p-8 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl border border-blue-500/30"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Have More Questions?
          </h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Get personalized answers about AI-powered SEO strategies for your business. 
            I&apos;m here to help you navigate the future of search.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
              });
            }}
          >
            Ask Your Questions
            <FontAwesomeIcon icon={faQuestionCircle} className="ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
