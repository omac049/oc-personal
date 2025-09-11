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
        "name": "About",
        "item": "https://omar-corral.com/#about"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Services",
        "item": "https://omar-corral.com/#skills"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Experience", 
        "item": "https://omar-corral.com/#experience"
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

  // FAQ Schema for rich snippets
  faq: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is AI-powered SEO and how does it work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI-powered SEO combines traditional search engine optimization with artificial intelligence technologies like ChatGPT, Claude, and machine learning algorithms. It involves using AI for keyword research, content optimization, technical audits, and adapting strategies for Search Generative Experience (SGE)."
        }
      },
      {
        "@type": "Question", 
        "name": "How do you optimize content for Large Language Models (LLMs)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "LLM optimization involves structuring content for AI understanding, using natural language patterns, implementing comprehensive schema markup, creating conversational content formats, and optimizing for featured snippets and voice search queries."
        }
      },
      {
        "@type": "Question",
        "name": "What is Search Generative Experience (SGE) optimization?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SGE optimization prepares websites for AI-powered search engines that generate contextual answers. This includes optimizing for conversational queries, structured data implementation, authoritative content creation, and ensuring content appears in AI-generated search responses."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to see SEO results?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SEO results typically begin showing within 3-6 months, with significant improvements visible in 6-12 months. AI-powered strategies can accelerate certain aspects like content optimization and technical fixes, but organic growth requires consistent effort over time."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide local SEO services for Phoenix businesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, I specialize in local SEO for Phoenix, Arizona businesses. Services include Google Business Profile optimization, local keyword targeting, citation building, review management, and location-specific content strategies."
        }
      }
    ]
  },

  // How-To Schema for SEO guides
  howTo: {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Implement AI-Powered SEO Strategy",
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
    "headline": "AI-Powered SEO Specialist: Combining Traditional SEO with Artificial Intelligence",
    "description": "Professional portfolio showcasing AI-powered SEO expertise, LLM optimization, and Search Generative Experience strategies.",
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

  // Professional Service Schema
  service: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI-Powered SEO Consulting",
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

  // Review Schema for testimonials
  aggregateRating: {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    "itemReviewed": {
      "@type": "Service",
      "name": "Omar Corral SEO Services"
    },
    "ratingValue": "4.9",
    "ratingCount": "47",
    "bestRating": "5",
    "worstRating": "1"
  },

  // Course Schema for SEO training
  course: {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "AI-Powered SEO Strategies",
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
    "description": "Professional SEO consulting services available for businesses looking to improve their search engine visibility with AI-powered strategies.",
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
      "name": "Home",
      "url": "https://omar-corral.com/#hero"
    },
    {
      "@type": "SiteNavigationElement",
      "name": "About",
      "url": "https://omar-corral.com/#about" 
    },
    {
      "@type": "SiteNavigationElement",
      "name": "Skills",
      "url": "https://omar-corral.com/#skills"
    },
    {
      "@type": "SiteNavigationElement",
      "name": "Experience",
      "url": "https://omar-corral.com/#experience"
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
  "name": "Omar Corral - AI-Powered SEO Specialist",
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
