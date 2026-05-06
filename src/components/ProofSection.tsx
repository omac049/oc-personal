'use client';

import { motion } from 'framer-motion';

const experience = [
  {
    context: 'Higher Education',
    detail:
      'Built and led the organic program for a multi-campus university system. Restructured site architecture across 200+ program pages, implemented schema at scale, and grew organic sessions 31% year-over-year — during a period when the sector was losing ground to paid.',
    tags: ['Site Architecture', 'Schema at Scale', 'Content Strategy'],
    accent: 'blue',
  },
  {
    context: 'Enterprise & AI Workflows',
    detail:
      'Developed an AI-assisted content pipeline that cut production time by 95% without sacrificing quality signals. Combined ChatGPT, Claude, and custom automation with editorial oversight to scale output from 4 pieces/month to 20+ while maintaining E-E-A-T standards.',
    tags: ['AI Tooling', 'Content Operations', 'E-E-A-T'],
    accent: 'purple',
  },
  {
    context: 'Agency & Consulting',
    detail:
      'Managed organic strategy across 15+ concurrent accounts spanning e-commerce, SaaS, professional services, and local businesses. Built reporting frameworks that connected SEO to pipeline and revenue — not just rankings and impressions.',
    tags: ['Multi-Vertical', 'Revenue Attribution', 'Reporting'],
    accent: 'emerald',
  },
];

const accentMap: Record<string, { border: string; tag: string }> = {
  blue: { border: 'border-blue-500/20', tag: 'bg-blue-500/10 text-blue-300' },
  purple: { border: 'border-purple-500/20', tag: 'bg-purple-500/10 text-purple-300' },
  emerald: { border: 'border-emerald-500/20', tag: 'bg-emerald-500/10 text-emerald-300' },
};

export default function ProofSection() {
  return (
    <section
      className="py-24 px-6 bg-gradient-to-b from-slate-900 via-slate-800/60 to-slate-900"
      aria-labelledby="proof-heading"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2
            id="proof-heading"
            className="text-3xl md:text-4xl font-light text-white mb-4"
          >
            Where I&apos;ve applied this
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto">
            A few contexts that shaped how I think about organic strategy.
          </p>
        </motion.div>

        <div className="space-y-12">
          {experience.map((item, i) => {
            const colors = accentMap[item.accent];
            return (
              <motion.div
                key={item.context}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                viewport={{ once: true }}
                className={`border-l-2 ${colors.border} pl-6`}
              >
                <span className="block text-xs font-medium tracking-wider text-slate-500 uppercase mb-2">
                  {item.context}
                </span>
                <p className="text-slate-300 leading-relaxed mb-4">
                  {item.detail}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs px-2.5 py-1 rounded-full ${colors.tag}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
