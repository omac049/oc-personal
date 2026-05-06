'use client';

import { motion } from 'framer-motion';

const SERVICES = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
        <path d="m8 11 2 2 4-4" />
      </svg>
    ),
    title: 'SEO Audit & Strategy',
    description: 'Comprehensive technical and content audits that surface what\u2019s actually holding your organic growth back \u2014 then a clear plan to fix it.',
    href: '/services/seo-audit/',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 1 4 4c0 1.95-1.4 3.58-3.25 3.93" />
        <path d="M8.24 4.03A4 4 0 0 0 8 6c0 1.95 1.4 3.58 3.25 3.93" />
        <path d="M12 12v4" />
        <path d="M8 18h8" />
        <path d="M10 22h4" />
      </svg>
    ),
    title: 'AI Search Strategy',
    description: 'Position your brand to be cited by ChatGPT, Perplexity, Google AI Overviews, and whatever comes next.',
    href: '/services/ai-search-strategy/',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="m7 16 4-8 4 5 4-7" />
      </svg>
    ),
    title: 'Growth & Analytics',
    description: 'Turn organic traffic into revenue with attribution models, conversion tracking, and clear monthly reporting tied to business outcomes.',
    href: '#contact',
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export default function Services() {
  return (
    <section
      id="services"
      className="py-24"
      style={{ backgroundColor: 'var(--color-black)' }}
      aria-labelledby="services-heading"
    >
      <motion.div
        className="mx-auto max-w-4xl px-6"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 id="services-heading" className="sr-only">Services</h2>

        {SERVICES.map((service, i) => (
          <motion.div
            key={service.title}
            variants={itemVariants}
            className={`py-12 ${i < SERVICES.length - 1 ? 'border-b' : ''}`}
            style={{ borderColor: 'var(--color-border)' }}
          >
            <div className="flex items-start gap-5">
              <span style={{ color: 'var(--color-accent)' }} aria-hidden="true">
                {service.icon}
              </span>

              <div>
                <h3 className="font-serif text-2xl md:text-4xl" style={{ color: 'var(--color-white)' }}>
                  {service.title}
                </h3>
                <p className="mt-3 max-w-xl text-base" style={{ color: 'var(--color-muted)' }}>
                  {service.description}
                </p>
                <a
                  href={service.href}
                  className="group mt-4 inline-flex items-center gap-2 text-sm font-medium transition-colors"
                  style={{ color: 'var(--color-accent)' }}
                >
                  Learn more
                  <span className="inline-block transition-transform duration-150 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
