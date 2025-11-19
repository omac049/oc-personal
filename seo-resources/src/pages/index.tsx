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
          <div className={styles.heroIcon}>🎯</div>
          <Heading as="h1" className={styles.heroTitle}>
            Modern SEO Mastery
          </Heading>
          <p className={styles.heroSubtitle}>
            Master the Three Pillars of SEO: Authority, Relevance, and Experience. 
            From search intent optimization to Core Web Vitals—everything you need for SEO success.
          </p>
          <div className={styles.heroHighlights}>
            <div className={styles.highlightItem}>
              <span className={styles.highlightIcon}>🏗️</span>
              <span>Three Pillars Framework</span>
            </div>
            <div className={styles.highlightItem}>
              <span className={styles.highlightIcon}>🔍</span>
              <span>Search Intent Mastery</span>
            </div>
            <div className={styles.highlightItem}>
              <span className={styles.highlightIcon}>⚡</span>
              <span>Core Web Vitals</span>
            </div>
            <div className={styles.highlightItem}>
              <span className={styles.highlightIcon}>🤖</span>
              <span>AI-Era SEO</span>
            </div>
          </div>
          <div className={styles.heroStats}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>3</div>
              <div className={styles.statLabel}>Core SEO Pillars</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>4</div>
              <div className={styles.statLabel}>Search Intent Types</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>100%</div>
              <div className={styles.statLabel}>Expert-Level Content</div>
            </div>
          </div>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/getting-started">
              🚀 Start Your SEO Journey
            </Link>
            <Link
              className="button button--outline button--secondary button--lg"
              to="/docs/getting-started/seo-pillars">
              📚 Explore Three Pillars
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
      title: 'Authority: Do You Matter?',
      icon: '🎯',
      description: (
        <>
          Master strategic link building, E-A-T optimization, and expert content creation. 
          Learn how Google's PageRank algorithm determines which sites deserve to rank.
        </>
      ),
      link: '/docs/getting-started/seo-pillars',
      linkText: 'Master Authority',
      color: 'blue'
    },
    {
      title: 'Relevance: Answer Search Intent',
      icon: '🔍',
      description: (
        <>
          Understand the 4 types of search intent, the 3Cs framework, and SERP feature optimization. 
          Create content that perfectly matches what users are actually searching for.
        </>
      ),
      link: '/docs/getting-started/search-intent-optimization',
      linkText: 'Optimize Intent',
      color: 'orange'
    },
    {
      title: 'Experience: Delight Users & Bots',
      icon: '⚡',
      description: (
        <>
          Excel at Core Web Vitals, mobile-first excellence, and technical SEO foundations. 
          Ensure both users and search bots have an exceptional experience on your site.
        </>
      ),
      link: '/docs/getting-started/seo-pillars',
      linkText: 'Perfect Experience',
      color: 'purple'
    },
  ];

  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {features.map((feature, idx) => (
            <div key={idx} className={clsx('col col--4')}>
              <div className={clsx(styles.featureCard, styles[`feature${feature.color}`])}>
                <div className={styles.featureIcon}>{feature.icon}</div>
                <div className={styles.featureContent}>
                  <Heading as="h3">{feature.title}</Heading>
                  <p>{feature.description}</p>
                  <Link
                    className={clsx("button button--primary button--sm", styles[`button${feature.color}`])}
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
      icon: '🎯',
      tip: 'Match Search Intent Precisely',
      description: 'Use the 3Cs framework: analyze content type, format, and angle of top-ranking pages'
    },
    {
      icon: '⚡',
      tip: 'Optimize Core Web Vitals',
      description: 'LCP under 2.5s, FID under 100ms, CLS under 0.1 for superior user experience'
    },
    {
      icon: '🏗️',
      tip: 'Build Authority Through E-A-T',
      description: 'Demonstrate expertise, authoritativeness, and trustworthiness in your content'
    },
    {
      icon: '🔍',
      tip: 'Leverage SERP Features',
      description: 'Optimize for featured snippets, People Also Ask, and knowledge panels'
    }
  ];

  return (
    <section className={styles.quickTips}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2">Expert SEO Insights</Heading>
          <p>Advanced techniques that separate professionals from beginners</p>
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

function SEOKnowledgeShowcase() {
  const frameworks = [
    {
      title: "The Three Pillars Framework",
      description: "Revolutionary approach to modern SEO",
      items: ["Authority Building", "Relevance Optimization", "Experience Excellence"],
      link: "/docs/getting-started/seo-pillars"
    },
    {
      title: "Search Intent Mastery",
      description: "Complete guide to understanding user intent",
      items: ["4 Intent Types", "3Cs Analysis", "SERP Features"],
      link: "/docs/getting-started/search-intent-optimization"
    },
    {
      title: "Technical Excellence",
      description: "Advanced crawling, indexing, and ranking insights",
      items: ["Core Web Vitals", "Mobile-First", "Schema Markup"],
      link: "/docs/getting-started/how-search-engines-work"
    }
  ];

  return (
    <section className={styles.knowledgeShowcase}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2">🧠 Deep SEO Knowledge Base</Heading>
          <p>Comprehensive frameworks and methodologies developed through years of SEO expertise</p>
        </div>
        <div className="row">
          {frameworks.map((framework, idx) => (
            <div key={idx} className="col col--4">
              <div className={styles.frameworkCard}>
                <h3>{framework.title}</h3>
                <p className={styles.frameworkDescription}>{framework.description}</p>
                <ul className={styles.frameworkItems}>
                  {framework.items.map((item, itemIdx) => (
                    <li key={itemIdx}>✓ {item}</li>
                  ))}
                </ul>
                <Link
                  className="button button--outline button--primary"
                  to={framework.link}>
                  Learn More
                </Link>
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
          <Heading as="h2">Ready to Implement Modern SEO?</Heading>
          <p>
            These advanced frameworks and methodologies represent cutting-edge SEO knowledge. 
            Get personalized implementation guidance for your specific situation.
          </p>
          <div className={styles.ctaButtons}>
            <Link
              className="button button--primary button--lg"
              href="https://omar-corral.com/#contact">
              Schedule Strategy Call
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
      title="Modern SEO Mastery | Expert Resource Center"
      description="Master the Three Pillars of SEO: Authority, Relevance, and Experience. Expert-level search intent optimization, Core Web Vitals, and modern SEO frameworks by Omar Corral.">
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
