const SITE_URL = "https://omar-corral.com";

export const enhancedSEOData = {
  breadcrumb: {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": `${SITE_URL}/`
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": `${SITE_URL}/services/`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Case Studies",
        "item": `${SITE_URL}/case-studies/`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "About",
        "item": `${SITE_URL}/#about`
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "FAQ",
        "item": `${SITE_URL}/#faq`
      },
      {
        "@type": "ListItem",
        "position": 6,
        "name": "Contact",
        "item": `${SITE_URL}/#contact`
      }
    ]
  },

  faq: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is AI-powered SEO and how does it work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI-powered SEO combines traditional search engine optimization with artificial intelligence technologies like ChatGPT, Claude, and machine learning algorithms. It involves using AI for keyword research, content optimization, technical audits, and adapting strategies for AI Overviews and LLM-generated responses. The goal is ranking in both traditional results and AI-generated answers."
        }
      },
      {
        "@type": "Question",
        "name": "How do you optimize content for Large Language Models?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "LLM optimization involves structuring content for AI understanding — natural language patterns, comprehensive schema markup, conversational content formats, and entity-first information architecture. I focus on making content that performs well in AI-powered search while maintaining clarity for human readers."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to see SEO results?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SEO results typically begin within 3–6 months, with significant improvements at 6–12 months. AI-optimized strategies can accelerate content and technical wins, but organic growth requires sustained effort. I provide monthly reports tracking progress against specific business metrics."
        }
      },
      {
        "@type": "Question",
        "name": "Do you work with businesses outside Phoenix?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. While I'm based in Phoenix, Arizona, most of my clients are remote. SEO and AI search strategy work is fully remote-friendly. I work with e-commerce, SaaS, healthcare, and finance brands across the US."
        }
      },
      {
        "@type": "Question",
        "name": "What does an engagement look like?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Engagements typically start with a comprehensive audit, followed by a prioritized strategy and ongoing execution. I work on monthly retainers or project-based scopes depending on the need. Every engagement includes regular reporting tied to revenue, not just rankings."
        }
      }
    ]
  },

  howTo: {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Implement AI-Enhanced SEO Strategy",
    "description": "Step-by-step guide to implementing artificial intelligence in your SEO strategy",
    "totalTime": "PT4H",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Audit Current SEO Performance",
        "text": "Analyze existing website performance, identify opportunities, and establish baseline metrics.",
        "url": `${SITE_URL}/#services`
      },
      {
        "@type": "HowToStep",
        "name": "Implement AI Content Strategy",
        "text": "Develop content optimized for both traditional search and AI-powered search engines.",
        "url": `${SITE_URL}/#proof`
      },
      {
        "@type": "HowToStep",
        "name": "Technical SEO Optimization",
        "text": "Optimize Core Web Vitals, mobile performance, and implement advanced schema markup.",
        "url": `${SITE_URL}/#about`
      },
      {
        "@type": "HowToStep",
        "name": "Monitor and Iterate",
        "text": "Track performance metrics and continuously optimize based on AI and search engine updates.",
        "url": `${SITE_URL}/#contact`
      }
    ]
  },

  article: {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Digital Strategist: Combining Traditional SEO with AI Search",
    "description": "Professional portfolio showcasing AI-enhanced SEO expertise, LLM optimization, and Search Generative Experience strategies.",
    "image": `${SITE_URL}/og-image.jpg`,
    "author": {
      "@type": "Person",
      "name": "Omar Corral",
      "url": SITE_URL,
      "sameAs": [
        "https://linkedin.com/in/omarrcorral",
        "https://github.com/omac049"
      ]
    },
    "publisher": {
      "@type": "Organization",
      "name": "Omar Corral SEO Consulting",
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/logo.png`
      }
    },
    "datePublished": "2024-01-01",
    "dateModified": new Date().toISOString().split('T')[0],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${SITE_URL}/`
    },
    "keywords": [
      "AI SEO",
      "LLM optimization",
      "Search Generative Experience",
      "Technical SEO",
      "Phoenix SEO",
      "Content Strategy"
    ]
  },

  service: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI-Enhanced SEO Consulting",
    "description": "Comprehensive SEO services combining traditional optimization with artificial intelligence technologies for enhanced search performance.",
    "provider": {
      "@type": "Person",
      "name": "Omar Corral",
      "url": SITE_URL
    },
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "SEO Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Content Optimization"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Technical SEO Audit"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "LLM Strategy Development"
          }
        }
      ]
    }
  },
};

export const navigationSchema = {
  "@context": "https://schema.org",
  "@type": "SiteNavigationElement",
  "name": "Main Navigation",
  "url": `${SITE_URL}/`,
  "hasPart": [
    {
      "@type": "SiteNavigationElement",
      "name": "Services",
      "url": `${SITE_URL}/#services`
    },
    {
      "@type": "SiteNavigationElement",
      "name": "Proof",
      "url": `${SITE_URL}/#proof`
    },
    {
      "@type": "SiteNavigationElement",
      "name": "About",
      "url": `${SITE_URL}/#about`
    },
    {
      "@type": "SiteNavigationElement",
      "name": "FAQ",
      "url": `${SITE_URL}/#faq`
    },
    {
      "@type": "SiteNavigationElement",
      "name": "Contact",
      "url": `${SITE_URL}/#contact`
    }
  ]
};

export const performanceSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Omar Corral — Digital Strategist",
  "url": `${SITE_URL}/`,
  "mainEntity": {
    "@type": "Person",
    "name": "Omar Corral"
  },
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", "h2", ".speakable"]
  }
};
