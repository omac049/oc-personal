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
          <div className={styles.heroIcon}>📚</div>
          <Heading as="h1" className={styles.heroTitle}>
            SEO Resource Center
          </Heading>
          <p className={styles.heroSubtitle}>
            Your comprehensive guide to mastering search engine optimization from beginner to expert level
          </p>
          <div className={styles.heroStats}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>20+</div>
              <div className={styles.statLabel}>Comprehensive Guides</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>50+</div>
              <div className={styles.statLabel}>Free SEO Tools</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>100%</div>
              <div className={styles.statLabel}>Free Access</div>
            </div>
          </div>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/getting-started">
              Get Started with SEO - 5min ⏱️
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
      title: '🎓 For Beginners',
      icon: '🚀',
      description: (
        <>
          SEO fundamentals, keyword research basics, on-page optimization essentials, 
          and technical SEO foundations to get you started.
        </>
      ),
      link: '/docs/getting-started',
      linkText: 'Start Learning'
    },
    {
      title: '📈 For Intermediate Users',
      icon: '⚡',
      description: (
        <>
          Advanced keyword strategies, content optimization techniques, link building 
          best practices, and performance monitoring.
        </>
      ),
      link: '/docs/tools',
      linkText: 'Explore Tools'
    },
    {
      title: '🔬 For Advanced Practitioners',
      icon: '🎯',
      description: (
        <>
          AI-enhanced SEO strategies, enterprise approaches, international SEO, 
          and Search Generative Experience (SGE) optimization.
        </>
      ),
      link: '/docs',
      linkText: 'Advanced Topics'
    },
  ];

  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {features.map((feature, idx) => (
            <div key={idx} className={clsx('col col--4')}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>{feature.icon}</div>
                <div className={styles.featureContent}>
                  <Heading as="h3">{feature.title}</Heading>
                  <p>{feature.description}</p>
                  <Link
                    className="button button--primary button--sm"
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

function SEOQuickTips() {
  const tips = [
    {
      icon: '🔍',
      tip: 'Focus on long-tail keywords',
      description: 'Target specific phrases your audience actually searches for'
    },
    {
      icon: '📊',
      tip: 'Monitor Core Web Vitals',
      description: 'Page speed and user experience directly impact rankings'
    },
    {
      icon: '💡',
      tip: 'Create valuable content',
      description: 'Answer real questions your audience is asking'
    },
    {
      icon: '📱',
      tip: 'Optimize for mobile-first',
      description: 'Google uses mobile version for indexing and ranking'
    }
  ];

  return (
    <section className={styles.quickTips}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2">Quick SEO Tips for Beginners</Heading>
          <p>Essential SEO principles every website owner should know</p>
        </div>
        <div className="row">
          {tips.map((tip, idx) => (
            <div key={idx} className={clsx('col col--3')}>
              <div className={styles.tipCard}>
                <div className={styles.tipIcon}>{tip.icon}</div>
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
          <div className={styles.ctaIcon}>🚀</div>
          <Heading as="h2">Ready to Master SEO?</Heading>
          <p>
            While these resources are comprehensive, sometimes you need expert guidance 
            tailored to your specific situation.
          </p>
          <div className={styles.ctaButtons}>
            <Link
              className="button button--primary button--lg"
              href="https://omar-corral.com/services">
              Get Professional SEO Services
            </Link>
            <Link
              className="button button--secondary button--lg"
              href="https://omar-corral.com/#contact">
              Schedule Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Comprehensive SEO guides, tools, and best practices for beginners and experts. Learn search engine optimization from Omar Corral, SEO specialist in Phoenix, Arizona.">
      <SEOResourcesHero />
      <main>
        <SEOResourcesFeatures />
        <SEOQuickTips />
        <SEOResourcesCTA />
      </main>
    </Layout>
  );
}
