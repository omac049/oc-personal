const SITE_URL = "https://omar-corral.com";

export const seoData = {
  personal: {
    name: "Omar Corral",
    jobTitle: "Digital Strategist | SEO, AI Search & Growth Strategy",
    email: "omar.seogears@gmail.com",
    location: {
      city: "Phoenix",
      state: "Arizona",
      country: "United States",
      region: "Arizona"
    },
    social: {
      linkedin: "https://linkedin.com/in/omarrcorral",
      twitter: "https://twitter.com/omarrcorral",
      github: "https://github.com/omac049",
      website: SITE_URL
    }
  },

  website: {
    name: "Omar Corral — Digital Strategist",
    url: SITE_URL,
    domain: "omar-corral.com",
    logo: `${SITE_URL}/logo.png`,
    favicon: `${SITE_URL}/favicon.ico`,
    language: "en-US",
    locale: "en_US",
    timezone: "America/Phoenix"
  },

  meta: {
    title: "Omar Corral — Digital Strategist | SEO, AI Search & Growth Strategy",
    description: "Omar Corral — digital strategist with 12+ years in organic search. SEO, AI search optimization, and growth strategy for brands that want to lead.",
    keywords: [
      "AI SEO specialist",
      "LLM optimization expert",
      "Search Generative Experience",
      "AI-powered digital marketing",
      "Omar Corral SEO",
      "technical SEO expert",
      "Core Web Vitals optimization",
      "schema markup specialist",
      "SEO consultant Phoenix",
      "Arizona digital marketing",
      "enterprise SEO",
      "e-commerce SEO",
      "SEO audit services",
      "content optimization",
      "organic traffic growth",
    ],
    author: "Omar Corral",
    publisher: "Omar Corral",
    category: "Technology",
    tags: ["SEO", "AI", "Digital Marketing", "LLM", "Technology", "Analytics"]
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Omar Corral — Digital Strategist",
    title: "Omar Corral — Digital Strategist | SEO, AI Search & Growth Strategy",
    description: "Omar Corral — digital strategist with 12+ years in organic search. SEO, AI search optimization, and growth strategy for brands that want to lead.",
    images: [
      {
        url: `${SITE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Omar Corral — Digital Strategist",
        type: "image/png"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    site: "@omarrcorral",
    creator: "@omarrcorral",
    title: "Omar Corral — Digital Strategist | SEO, AI Search & Growth Strategy",
    description: "Omar Corral — digital strategist with 12+ years in organic search. SEO, AI search optimization, and growth strategy for brands that want to lead.",
    image: `${SITE_URL}/twitter-image`,
    imageAlt: "Omar Corral — Digital Strategist"
  },

  structuredData: {
    person: {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": `${SITE_URL}#person`,
      "name": "Omar Corral",
      "url": SITE_URL,
      "image": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/omar.jpeg`,
        "width": 300,
        "height": 300
      },
      "jobTitle": "Digital Strategist | SEO, AI Search & Growth Strategy",
      "worksFor": {
        "@type": "Organization",
        "name": "Independent Consultant",
        "url": SITE_URL
      },
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "University of Arizona Global Campus",
        "url": "https://www.uagc.edu"
      },
      "knowsAbout": [
        "Search Engine Optimization",
        "Generative Engine Optimization (GEO)",
        "AI Search Optimization",
        "Technical SEO",
        "Core Web Vitals",
        "Topical Authority & Content Strategy",
        "SEO Analytics & Revenue Attribution",
        "WebMCP & AI-Agent Web Architecture",
        "Zero-Click Search Strategy"
      ],
      "sameAs": [
        "https://linkedin.com/in/omarrcorral",
        "https://twitter.com/omarrcorral",
        "https://github.com/omac049"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Phoenix",
        "addressRegion": "AZ",
        "addressCountry": "US"
      },
      "email": "omar.seogears@gmail.com"
    },

    website: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${SITE_URL}#website`,
      "url": SITE_URL,
      "name": "Omar Corral — Digital Strategist",
      "description": "Digital strategist combining traditional search optimization with AI technologies.",
      "publisher": {
        "@id": `${SITE_URL}#person`
      },
      "inLanguage": "en-US"
    },

    organization: {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}#organization`,
      "name": "Omar Corral SEO Consulting",
      "url": SITE_URL,
      "logo": `${SITE_URL}/logo.png`,
      "description": "SEO strategy, AI search optimization (GEO), and technical SEO consulting. Helps brands get found and cited across Google, ChatGPT, Perplexity, and AI Overviews.",
      "founder": {
        "@id": `${SITE_URL}#person`
      },
      "employee": {
        "@id": `${SITE_URL}#person`
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Phoenix",
        "addressRegion": "AZ",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "33.4484",
        "longitude": "-112.0740"
      },
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "serviceType": [
        "SEO Audit & Strategy",
        "AI Search & GEO Strategy",
        "Content Strategy & Topical Authority",
        "SEO Analytics & Revenue Attribution"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "SEO Audit & Strategy",
              "description": "Comprehensive technical and content SEO audit with a prioritized 90-day roadmap tied to business outcomes.",
              "url": `${SITE_URL}/services/seo-audit/`
            },
            "category": "SEO Strategy"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI Search & GEO Strategy",
              "description": "Optimization strategy for AI Overviews, ChatGPT, Perplexity, and generative search surfaces. Includes GEO audit, structured data implementation, and E-E-A-T signal strengthening.",
              "url": `${SITE_URL}/services/ai-search-strategy/`
            },
            "category": "AI Search Optimization"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Content Strategy & Topical Authority",
              "description": "Topical cluster architecture, intent mapping, and content audit framework for compounding organic growth.",
              "url": `${SITE_URL}/services/`
            },
            "category": "Content Strategy"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "SEO Analytics & Revenue Attribution",
              "description": "Tying organic search KPIs to business outcomes — beyond rankings and traffic to pipeline and revenue. Includes zero-click impact analysis and GA4 + GSC integration.",
              "url": `${SITE_URL}/services/`
            },
            "category": "Analytics"
          }
        ]
      },
      "priceRange": "$$",
      "currenciesAccepted": "USD",
      "email": "omar.seogears@gmail.com",
      "sameAs": [
        "https://linkedin.com/in/omarrcorral",
        "https://twitter.com/omarrcorral"
      ]
    },

    breadcrumb: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": SITE_URL
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
          "name": "Contact",
          "item": `${SITE_URL}/#contact`
        }
      ]
    }
  },

  analytics: {
    googleAnalytics: "G-2GXQ6627P1",
  },

  technical: {
    themeColor: "#000000",
    backgroundColor: "#000000",
    canonicalUrl: SITE_URL,
  },
};

export const { analytics } = seoData;
