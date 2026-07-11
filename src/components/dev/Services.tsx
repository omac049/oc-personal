'use client';

import { motion } from 'framer-motion';

interface RelatedReading {
  title: string;
  href: string;
}

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  relatedReading: RelatedReading[];
}

const SERVICES: Service[] = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
        <path d="m8 11 2 2 4-4" />
      </svg>
    ),
    title: 'SEO Audit & Strategy',
    description:
      'Comprehensive technical and content audits that surface what\u2019s actually holding your organic growth back \u2014 then a clear plan to fix it.',
    href: '/services/seo-audit/',
    relatedReading: [
      {
        title: 'The Three Pillars of SEO',
        href: '/seo-resources/docs/getting-started/seo-pillars',
      },
    ],
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
    description:
      'Position your brand to be cited by ChatGPT, Perplexity, Google AI Overviews, and whatever comes next.',
    href: '/services/ai-search-strategy/',
    relatedReading: [
      {
        title: 'GEO Fundamentals',
        href: '/seo-resources/docs/ai-search/geo-fundamentals',
      },
      {
        title: 'WebMCP Implementation',
        href: '/seo-resources/docs/ai-search/webmcp-implementation',
      },
    ],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="m7 16 4-8 4 5 4-7" />
      </svg>
    ),
    title: 'Growth & Analytics',
    description:
      'Turn organic traffic into revenue with attribution models, conversion tracking, and clear monthly reporting tied to business outcomes.',
    href: '#contact',
    relatedReading: [
      {
        title: 'We Won the Rankings. The Ecosystem Moved On.',
        href: '/seo-resources/blog/zero-click-search-rankings-traffic-decoupled',
      },
    ],
  },
];

const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1];

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT, staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE_OUT } },
};

export default function Services() {
  return (
    <section
      id="services"
      className="py-24"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.12)' }}
      aria-labelledby="services-heading"
    >
      <motion.div
        className="mx-auto max-w-4xl px-6"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 id="services-heading" className="sr-only">
          Services
        </h2>

        {SERVICES.map((service, i) => (
          <motion.div
            key={service.title}
            variants={itemVariants}
            className={`group/service relative py-12 ${i < SERVICES.length - 1 ? 'border-b' : ''}`}
            style={{ borderColor: 'var(--color-border)' }}
          >
            <div
              className="absolute left-0 top-12 bottom-12 w-[2px] origin-top scale-y-0 transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover/service:scale-y-100"
              style={{ backgroundColor: 'var(--color-accent)' }}
              aria-hidden="true"
            />

            <div className="flex items-start gap-5 transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover/service:translate-x-3">
              <span style={{ color: 'var(--color-accent)' }} aria-hidden="true">
                {service.icon}
              </span>

              <div>
                <h3
                  className="font-serif text-2xl md:text-4xl"
                  style={{ color: 'var(--color-white)' }}
                >
                  {service.title}
                </h3>
                <p
                  className="mt-3 max-w-xl text-base"
                  style={{ color: 'var(--color-muted)' }}
                >
                  {service.description}
                </p>
                <a
                  href={service.href}
                  className="group mt-4 inline-flex items-center gap-2 text-sm font-medium transition-[color,transform] duration-150 ease-out active:scale-[0.97]"
                  style={{ color: 'var(--color-accent)' }}
                >
                  Learn more
                  <span className="inline-block transition-transform duration-150 ease-out group-hover:translate-x-1">
                    →
                  </span>
                </a>

                <div className="mt-3 flex flex-col gap-2">
                  {service.relatedReading.map((reading) => (
                    <a
                      key={reading.href}
                      href={reading.href}
                      className="group inline-flex items-center gap-2 text-sm transition-opacity duration-150 ease-out hover:opacity-70"
                      style={{ color: 'var(--color-muted)' }}
                    >
                      <span>Related reading:</span>
                      <span className="underline decoration-white/20 underline-offset-2">
                        {reading.title}
                      </span>
                      <span className="inline-block transition-transform duration-150 ease-out group-hover:translate-x-1">
                        →
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
