'use client';

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowTrendDown,
  faRobot,
  faChartLine,
} from '@fortawesome/free-solid-svg-icons';

const perspectives = [
  {
    icon: faArrowTrendDown,
    heading: 'Most SEO plateaus are a strategy problem, not a traffic problem',
    body:
      'Algorithm updates, thin content, and accumulated technical debt don\'t announce themselves. By the time traffic flatlines, the root causes have been compounding for months. The fix isn\'t more content — it\'s a clear-eyed audit of what\'s actually holding the site back, followed by a prioritized roadmap that addresses decay before chasing growth.',
    tools: ['Search Console', 'Screaming Frog', 'SEMrush', 'GA4'],
    accent: 'blue',
  },
  {
    icon: faRobot,
    heading: 'AI search isn\'t coming — it\'s here, and most sites aren\'t built for it',
    body:
      'ChatGPT, Perplexity, and Google AI Overviews pull from structured, authoritative sources. They don\'t crawl like traditional search. If your content isn\'t formatted for extraction — direct answers, proper schema, topical depth — you\'re invisible on the fastest-growing search surfaces. This is the biggest shift in SEO since mobile-first indexing.',
    tools: ['ChatGPT', 'Claude', 'Schema.org', 'Perplexity'],
    accent: 'purple',
  },
  {
    icon: faChartLine,
    heading: 'The gap between "doing SEO" and measuring what matters keeps growing',
    body:
      'Rankings and impressions tell you what happened. They don\'t tell you why, or what to do next. The organizations winning at organic are connecting search data to business outcomes — revenue attribution, lead quality, pipeline influence — and using that signal to make faster, better decisions about where to invest.',
    tools: ['GA4', 'Looker Studio', 'Ahrefs', 'Search Console'],
    accent: 'emerald',
  },
];

const accentMap: Record<string, { border: string; icon: string; tag: string }> = {
  blue: { border: 'border-blue-500/20', icon: 'text-blue-400', tag: 'bg-blue-500/10 text-blue-300' },
  purple: { border: 'border-purple-500/20', icon: 'text-purple-400', tag: 'bg-purple-500/10 text-purple-300' },
  emerald: { border: 'border-emerald-500/20', icon: 'text-emerald-400', tag: 'bg-emerald-500/10 text-emerald-300' },
};

export default function ServicesOverview() {
  return (
    <section
      id="services"
      className="py-24 px-6 bg-slate-900"
      aria-labelledby="services-heading"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2
            id="services-heading"
            className="text-3xl md:text-4xl font-light text-white mb-4"
          >
            What I&apos;m seeing right now
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto">
            Three patterns showing up across almost every organic program I evaluate.
          </p>
        </motion.div>

        <div className="space-y-20">
          {perspectives.map((item, i) => {
            const colors = accentMap[item.accent];
            return (
              <motion.div
                key={item.heading}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-4 mb-5">
                  <FontAwesomeIcon
                    icon={item.icon}
                    className={`w-5 h-5 mt-1 ${colors.icon} shrink-0`}
                  />
                  <h3 className="text-xl md:text-2xl font-medium text-white leading-snug">
                    {item.heading}
                  </h3>
                </div>

                <div className={`border-l-2 ${colors.border} pl-6 ml-2`}>
                  <p className="text-slate-400 leading-relaxed mb-5">
                    {item.body}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tools.map((tool) => (
                      <span
                        key={tool}
                        className={`text-xs px-2.5 py-1 rounded-full ${colors.tag}`}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
