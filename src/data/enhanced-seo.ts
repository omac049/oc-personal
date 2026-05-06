// Enhanced SEO data for better search engine HTML rendering
export const enhancedSEOData = {
  // Breadcrumb Schema for better navigation understanding
  breadcrumb: {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://omar-corral.com/"
      },
      {
        "@type": "ListItem", 
        "position": 2,
        "name": "Services",
        "item": "https://omar-corral.com/services/"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Case Studies",
        "item": "https://omar-corral.com/case-studies/"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "About",
        "item": "https://omar-corral.com/#about"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "FAQ",
        "item": "https://omar-corral.com/#faq"
      },
      {
        "@type": "ListItem",
        "position": 6,
        "name": "Contact",
        "item": "https://omar-corral.com/#contact"
      }
    ]
  },

  // FAQ Schema for rich snippets - matches FAQ.tsx content
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
          "text": "Yes. While I’m based in Phoenix, Arizona, most of my clients are remote. SEO and AI search strategy work is fully remote-friendly. I work with e-commerce, SaaS, healthcare, and finance brands across the US."
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

  // How-To Schema for SEO guides
  howTo: {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Implement AI-Enhanced SEO Strategy",
    "description": "Step-by-step guide to implementing artificial intelligence in your SEO strategy",
    "totalTime": "PT4H",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": "500-2000"
    },
    "supply": [
      {
        "@type": "HowToSupply",
        "name": "Website Analytics Access"
      },
      {
        "@type": "HowToSupply", 
        "name": "Content Management System"
      },
      {
        "@type": "HowToSupply",
        "name": "AI Tools (ChatGPT, Claude)"
      }
    ],
    "tool": [
      {
        "@type": "HowToTool",
        "name": "Google Search Console"
      },
      {
        "@type": "HowToTool",
        "name": "Google Analytics 4"
      },
      {
        "@type": "HowToTool",
        "name": "AI Content Tools"
      }
    ],
    "step": [
      {
        "@type": "HowToStep",
        "name": "Audit Current SEO Performance",
        "text": "Analyze existing website performance, identify opportunities, and establish baseline metrics.",
        "url": "https://omar-corral.com/#experience"
      },
      {
        "@type": "HowToStep",
        "name": "Implement AI Content Strategy",
        "text": "Develop content optimized for both traditional search and AI-powered search engines.",
        "url": "https://omar-corral.com/#skills"
      },
      {
        "@type": "HowToStep",
        "name": "Technical SEO Optimization",
        "text": "Optimize Core Web Vitals, mobile performance, and implement advanced schema markup.",
        "url": "https://omar-corral.com/#about"
      },
      {
        "@type": "HowToStep",
        "name": "Monitor and Iterate",
        "text": "Track performance metrics and continuously optimize based on AI and search engine updates.",
        "url": "https://omar-corral.com/#contact"
      }
    ]
  },

  // Article Schema for main content sections
  article: {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "SEO Specialist: Combining Traditional SEO with Artificial Intelligence",
    "description": "Professional portfolio showcasing AI-enhanced SEO expertise, LLM optimization, and Search Generative Experience strategies.",
    "image": "https://omar-corral.com/omar-social-card.jpg",
    "author": {
      "@type": "Person",
      "name": "Omar Corral",
      "url": "https://omar-corral.com",
      "sameAs": [
        "https://linkedin.com/in/omar-corral",
        "https://github.com/omac049"
      ]
    },
    "publisher": {
      "@type": "Organization",
      "name": "Omar Corral SEO Consulting",
      "logo": {
        "@type": "ImageObject",
        "url": "https://omar-corral.com/logo.png"
      }
    },
    "datePublished": "2024-01-01",
    "dateModified": new Date().toISOString().split('T')[0],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://omar-corral.com/"
    },
    "keywords": [
      "AI SEO",
      "LLM optimization", 
      "Search Generative Experience",
      "ChatGPT SEO",
      "Claude AI",
      "Technical SEO",
      "Phoenix SEO",
      "Content Strategy",
      "Machine Learning SEO"
    ]
  },

  // Professional Service Schema with embedded AggregateRating
  service: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI-Enhanced SEO Consulting",
    "description": "Comprehensive SEO services combining traditional optimization with artificial intelligence technologies for enhanced search performance.",
    "provider": {
      "@type": "Person",
      "name": "Omar Corral",
      "url": "https://omar-corral.com"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "47",
      "bestRating": "5",
      "worstRating": "1"
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

  // Course Schema for SEO training
  course: {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "AI-Enhanced SEO Strategies",
    "description": "Learn how to integrate artificial intelligence into your SEO workflow for better results.",
    "provider": {
      "@type": "Person",
      "name": "Omar Corral"
    },
    "courseMode": "online",
    "educationalLevel": "Intermediate",
    "about": [
      "AI in SEO",
      "LLM Optimization",
      "Search Generative Experience",
      "Technical SEO"
    ]
  },

  // Job Posting Schema for SEO opportunities
  jobPosting: {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "SEO Consulting Services Available",
    "description": "Professional SEO consulting services available for businesses looking to improve their search engine visibility with AI-enhanced strategies.",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "Omar Corral SEO Consulting"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Phoenix",
        "addressRegion": "AZ",
        "addressCountry": "US"
      }
    },
    "employmentType": "CONTRACTOR",
    "workHours": "Flexible",
    "datePosted": new Date().toISOString().split('T')[0]
  }
};

// Navigation Schema
export const navigationSchema = {
  "@context": "https://schema.org",
  "@type": "SiteNavigationElement",
  "name": "Main Navigation",
  "url": "https://omar-corral.com/",
  "hasPart": [
    {
      "@type": "SiteNavigationElement",
      "name": "Services",
      "url": "https://omar-corral.com/#services"
    },
    {
      "@type": "SiteNavigationElement",
      "name": "Proof",
      "url": "https://omar-corral.com/#proof"
    },
    {
      "@type": "SiteNavigationElement",
      "name": "About",
      "url": "https://omar-corral.com/#about"
    },
    {
      "@type": "SiteNavigationElement",
      "name": "FAQ",
      "url": "https://omar-corral.com/#faq"
    },
    {
      "@type": "SiteNavigationElement",
      "name": "Contact",
      "url": "https://omar-corral.com/#contact"
    }
  ]
};

// Performance Metrics Schema
export const performanceSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Omar Corral - SEO Specialist & AI Marketing Expert",
  "url": "https://omar-corral.com/",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://omar-corral.com/?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  },
  "mainEntity": {
    "@type": "Person",
    "name": "Omar Corral"
  },
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", "h2", ".speakable"]
  }
};
