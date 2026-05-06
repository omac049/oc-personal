import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function SEOResourcesHero() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>SEO Resource Center by Omar Corral</p>
          <Heading as="h1" className={styles.heroTitle}>
            SEO that compounds.<br />Not campaigns that expire.
          </Heading>
          <p className={styles.heroSubtitle}>
            Frameworks, checklists, and in-depth guides for practitioners who want durable organic growth — 
            from search fundamentals to AI-era optimization.
          </p>
          <div className={styles.heroStats}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>6</div>
              <div className={styles.statLabel}>Topic Areas</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>30+</div>
              <div className={styles.statLabel}>In-Depth Guides</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>12+</div>
              <div className={styles.statLabel}>Years in SEO</div>
            </div>
          </div>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/getting-started">
              Start Learning
            </Link>
            <Link
              className="button button--outline button--secondary button--lg"
              to="/docs/checklists">
              View Checklists
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

function SEOResourcesFeatures() {
  const features = [
    {
      title: 'Authority',
      subtitle: 'Do you matter to Google?',
      description:
        'Link acquisition, E-E-A-T, digital PR, and the mechanics of PageRank. Learn how to build domain authority that compounds over time.',
      link: '/docs/link-building',
      linkText: 'Study Authority',
      colorClass: 'blue',
    },
    {
      title: 'Relevance',
      subtitle: 'Do you answer the right questions?',
      description:
        'Search intent mapping, the 3Cs framework, SERP feature optimization, and content architecture. Create pages that rank because they deserve to.',
      link: '/docs/content-optimization',
      linkText: 'Study Relevance',
      colorClass: 'orange',
    },
    {
      title: 'Experience',
      subtitle: 'Do users and bots stay?',
      description:
        'Core Web Vitals, mobile-first architecture, crawlability, and structured data. Make your site fast, accessible, and parseable.',
      link: '/docs/technical-seo',
      linkText: 'Study Experience',
      colorClass: 'purple',
    },
  ];

  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2">The Three Pillars of Modern SEO</Heading>
          <p>Every ranking factor maps back to one of these three dimensions. Master all three and rankings follow.</p>
        </div>
        <div className="row">
          {features.map((feature, idx) => (
            <div key={idx} className={clsx('col col--4')}>
              <div className={clsx(styles.featureCard, styles[`feature${feature.colorClass}`])}>
                <div className={styles.featureContent}>
                  <Heading as="h3">{feature.title}</Heading>
                  <p className={styles.featureSubtitle}>{feature.subtitle}</p>
                  <p>{feature.description}</p>
                  <Link
                    className={clsx('button button--primary button--sm', styles[`button${feature.colorClass}`])}
                    to={feature.link}>
                    {feature.linkText}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SEOKnowledgeShowcase() {
  const sections = [
    {
      title: 'Keyword Research',
      description: 'From search volume basics to competitive gap analysis and long-tail strategy.',
      items: ['Search intent mapping', 'Competitive analysis', 'Long-tail strategy'],
      link: '/docs/keyword-research',
    },
    {
      title: 'Technical SEO',
      description: 'Crawlability, indexing, site speed, and the infrastructure that makes rankings possible.',
      items: ['Core Web Vitals & INP', 'Structured data / schema', 'Mobile-first optimization'],
      link: '/docs/technical-seo',
    },
    {
      title: 'AI Search & GEO',
      description: 'Generative Engine Optimization — how to appear in AI Overviews, Perplexity, and ChatGPT answers.',
      items: ['LLM citation signals', 'AI Overview optimization', 'E-E-A-T for AI systems'],
      link: '/docs/ai-search',
    },
  ];

  return (
    <section className={styles.knowledgeShowcase}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2">What's Inside</Heading>
          <p>Practitioner-level content built for people who already know SEO matters and want to get better at it.</p>
        </div>
        <div className="row">
          {sections.map((section, idx) => (
            <div key={idx} className="col col--4">
              <div className={styles.frameworkCard}>
                <h3>{section.title}</h3>
                <p className={styles.frameworkDescription}>{section.description}</p>
                <ul className={styles.frameworkItems}>
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx}>{item}</li>
                  ))}
                </ul>
                <Link className="button button--outline button--primary" to={section.link}>
                  Explore
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SEOQuickTips() {
  const tips = [
    {
      tip: 'Match intent before keywords',
      description:
        'Use the 3Cs framework: analyze the content type, format, and angle of pages that currently rank for your target query.',
    },
    {
      tip: 'INP is the metric that matters now',
      description:
        'Interaction to Next Paint replaced FID as a Core Web Vitals metric. Target INP under 200ms — it measures real responsiveness.',
    },
    {
      tip: 'E-E-A-T is an LLM signal too',
      description:
        'Clear authorship, first-person expertise, and cited methodology are signals both Google and AI systems use to decide what to cite.',
    },
    {
      tip: 'Topical depth beats keyword density',
      description:
        'AI-driven search rewards comprehensive coverage of a subject. One authoritative guide outperforms ten shallow variations targeting long-tail keywords.',
    },
  ];

  return (
    <section className={styles.quickTips}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2">Practitioner Principles</Heading>
          <p>The non-obvious things that separate senior SEO strategy from beginner execution.</p>
        </div>
        <div className="row">
          {tips.map((tip, idx) => (
            <div key={idx} className={clsx('col col--3')}>
              <div className={styles.tipCard}>
                <h4>{tip.tip}</h4>
                <p>{tip.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SEOResourcesCTA() {
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <div className={styles.ctaContent}>
          <Heading as="h2">Need someone to execute, not just advise?</Heading>
          <p>
            I work with brands directly on SEO strategy, technical audits, and AI search readiness — 
            with measurable outcomes, not vanity metrics.
          </p>
          <div className={styles.ctaButtons}>
            <Link className="button button--primary button--lg" href="https://omar-corral.com/#contact">
              Start a Conversation
            </Link>
            <Link className="button button--outline button--secondary button--lg" href="https://omar-corral.com">
              View Portfolio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): React.ReactElement {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="SEO Resource Center — Guides, Checklists & Frameworks"
      description="Free SEO resource center by Omar Corral — in-depth guides, checklists, and frameworks covering technical SEO, AI search optimization, and organic growth strategy.">
      <SEOResourcesHero />
      <main>
        <SEOResourcesFeatures />
        <SEOKnowledgeShowcase />
        <SEOQuickTips />
        <SEOResourcesCTA />
      </main>
    </Layout>
  );
}
