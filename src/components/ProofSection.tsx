'use client';

import { motion } from 'framer-motion';

const metrics = [
  { value: '31%', label: 'Avg. organic sessions increase', context: 'Higher Education' },
  { value: '95%', label: 'Content efficiency gain with AI', context: 'Enterprise Workflows' },
  { value: '10+', label: 'Years in search', context: 'Agency, in-house, consulting' },
];

const approach = [
  { num: '01', title: 'Audit', desc: 'Technical, content, and competitive analysis grounded in data — not assumptions.' },
  { num: '02', title: 'Strategy', desc: 'A roadmap prioritized by impact, tied to business outcomes the org actually cares about.' },
  { num: '03', title: 'Execute', desc: 'Implementation across technical fixes, content, schema, and link acquisition.' },
  { num: '04', title: 'Measure', desc: 'Monthly review of what moved, what didn\'t, and what changes next.' },
];

export default function ProofSection() {
  return (
    <section
      className="py-32 px-6 bg-slate-900"
      aria-labelledby="proof-heading"
    >
      <div className="max-w-5xl mx-auto">
        
        {/* Metrics Section */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="mb-16 md:mb-24"
          >
            <h2 id="proof-heading" className="text-3xl md:text-5xl font-light text-white mb-6 tracking-tight">
              By the numbers
            </h2>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed">
              A few outcomes from recent work across higher education, professional services, and enterprise.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-x-12 gap-y-16">
            {metrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="border-t border-slate-800 pt-8">
                  <span className="block text-7xl md:text-8xl font-extralight text-white mb-6 tracking-tighter group-hover:text-blue-400 transition-colors duration-500">
                    {m.value}
                  </span>
                  <span className="block text-slate-200 text-lg mb-2">
                    {m.label}
                  </span>
                  <span className="block text-slate-500 text-sm">
                    {m.context}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Approach Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="mb-16 md:mb-20"
          >
            <h3 className="text-3xl md:text-5xl font-light text-white mb-6 tracking-tight">
              My approach
            </h3>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed">
              The same disciplined loop whether it&apos;s a one-time audit or an ongoing engagement.
            </p>
          </motion.div>

          <div className="border-t border-slate-800">
            {approach.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="group border-b border-slate-800 flex flex-col md:flex-row md:items-start py-10 md:py-12 gap-6 md:gap-12 hover:bg-slate-800/20 transition-colors duration-500"
              >
                <div className="md:w-16 shrink-0 pt-1">
                  <span className="text-sm font-medium text-slate-600 tracking-wider">
                    {step.num}
                  </span>
                </div>
                <div className="md:w-1/3 shrink-0">
                  <h4 className="text-2xl md:text-3xl font-light text-white group-hover:text-blue-400 transition-colors duration-500">
                    {step.title}
                  </h4>
                </div>
                <div>
                  <p className="text-slate-400 text-lg leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
