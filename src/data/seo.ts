export const seoData = {
  // Personal Information
  personal: {
    name: "Omar Corral",
    jobTitle: "SEO Specialist & AI-Enhanced Digital Marketing Strategist",
    email: "omar@omarrcorral.com",
    phone: "+1-555-SEO-GURU", // Replace with actual number
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
      website: "https://omar-corral.com"
    }
  },

  // Website Information
  website: {
    name: "Omar Corral - SEO Specialist & AI Marketing Expert",
    url: "https://omar-corral.com",
    domain: "omar-corral.com",
    logo: "https://omar-corral.com/logo.png",
    favicon: "https://omar-corral.com/favicon.ico",
    language: "en-US",
    locale: "en_US",
    timezone: "America/Phoenix"
  },

  // SEO Metadata
  meta: {
    title: "Omar Corral - SEO Specialist & AI-Enhanced Digital Marketing Expert",
    description: "Human SEO specialist expertly combining traditional search optimization with cutting-edge AI technologies. Specializing in LLM optimization, AI-driven content creation, and Search Generative Experience (SGE) strategies for maximum visibility and growth.",
    keywords: [
      // Primary Keywords
      "AI SEO specialist",
      "LLM optimization expert", 
      "Search Generative Experience",
      "AI-powered digital marketing",
      "Omar Corral SEO",
      
      // Technical SEO
      "technical SEO expert",
      "Core Web Vitals optimization",
      "schema markup specialist",
      "site speed optimization",
      "mobile-first indexing",
      
      // AI & LLM Keywords
      "ChatGPT SEO optimization",
      "Claude AI content creation",
      "AI content strategy",
      "machine learning SEO",
      "prompt engineering SEO",
      
      // Location-based
      "SEO consultant Phoenix",
      "Arizona digital marketing",
      "Phoenix SEO expert",
      
      // Service Keywords
      "enterprise SEO",
      "e-commerce SEO",
      "international SEO",
      "local SEO optimization",
      "SEO audit services",
      "content optimization",
      "link building strategies",
      "keyword research",
      "competitor analysis",
      "Google Analytics expert",
      "Search Console optimization",
      
      // Industry Terms
      "SERP optimization",
      "organic traffic growth", 
      "conversion rate optimization",
      "digital marketing ROI",
      "search engine marketing",
      "online visibility",
      "brand awareness SEO"
    ],
    author: "Omar Corral",
    publisher: "Omar Corral",
    category: "Technology",
    tags: ["SEO", "AI", "Digital Marketing", "LLM", "Technology", "Analytics"]
  },

  // Open Graph Data
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://omar-corral.com",
    siteName: "Omar Corral - SEO Specialist & AI Marketing Expert",
    title: "Omar Corral - SEO Specialist & AI-Enhanced Digital Marketing Expert",
    description: "Expert SEO specialist combining traditional search optimization with cutting-edge AI technologies for maximum visibility and growth.",
    images: [
      {
        url: "https://omar-corral.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Omar Corral - SEO Specialist & AI Marketing Expert",
        type: "image/jpeg"
      },
      {
        url: "https://omar-corral.com/og-image-square.jpg", 
        width: 600,
        height: 600,
        alt: "Omar Corral - SEO Expert",
        type: "image/jpeg"
      }
    ]
  },

  // Twitter Card Data
  twitter: {
    card: "summary_large_image",
    site: "@omarrcorral",
    creator: "@omarrcorral", 
    title: "Omar Corral - SEO Specialist & AI-Enhanced Digital Marketing Expert",
    description: "Expert SEO specialist combining traditional search optimization with cutting-edge AI technologies.",
    image: "https://omar-corral.com/twitter-card.jpg",
          imageAlt: "Omar Corral - SEO Specialist & AI Marketing Expert"
  },

  // Structured Data (Schema.org)
  structuredData: {
    person: {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": "https://omar-corral.com#person",
      "name": "Omar Corral",
      "url": "https://omar-corral.com",
      "image": {
        "@type": "ImageObject",
        "url": "https://omar-corral.com/omar-corral-profile.jpg",
        "width": 300,
        "height": 300
      },
      "jobTitle": "SEO Specialist & AI Marketing Expert",
      "worksFor": {
        "@type": "Organization",
        "name": "Independent Consultant",
        "url": "https://omar-corral.com"
      },
      "alumniOf": {
        "@type": "EducationalOrganization", 
        "name": "University of Arizona Global Campus",
        "url": "https://www.uagc.edu"
      },
      "knowsAbout": [
        "Search Engine Optimization",
        "Artificial Intelligence",
        "Large Language Models",
        "Digital Marketing",
        "Content Strategy",
        "Technical SEO",
        "Analytics",
        "Machine Learning"
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
      "email": "omar@omarrcorral.com",
      "telephone": "+1-555-SEO-GURU"
    },

    website: {
      "@context": "https://schema.org",
      "@type": "WebSite", 
      "@id": "https://omar-corral.com#website",
      "url": "https://omar-corral.com",
      "name": "Omar Corral - SEO Specialist & AI Marketing Expert",
      "description": "Expert SEO specialist combining traditional search optimization with cutting-edge AI technologies.",
      "publisher": {
        "@id": "https://omar-corral.com#person"
      },
      "inLanguage": "en-US",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://omar-corral.com/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    },

    organization: {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": "https://omar-corral.com#organization",
      "name": "Omar Corral SEO Consulting",
      "url": "https://omar-corral.com",
      "logo": "https://omar-corral.com/logo.png",
      "image": "https://omar-corral.com/omar-corral-consulting.jpg",
      "description": "Professional SEO consulting services leveraging AI technologies for LLM optimization and Search Generative Experience strategies.",
      "founder": {
        "@id": "https://omar-corral.com#person"
      },
      "employee": {
        "@id": "https://omar-corral.com#person" 
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
        "Search Engine Optimization",
        "AI-Enhanced Digital Marketing",
        "LLM Content Optimization", 
        "Technical SEO Audits",
        "Content Strategy",
        "Analytics & Reporting"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "SEO Services Catalog",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI-Enhanced SEO Consultation",
              "description": "Comprehensive SEO strategy using artificial intelligence and machine learning technologies"
            },
            "category": "SEO Consulting"
          },
          {
            "@type": "Offer", 
            "itemOffered": {
              "@type": "Service",
              "name": "Technical SEO Audit",
              "description": "Complete technical analysis including Core Web Vitals, mobile optimization, and site architecture"
            },
            "category": "Technical SEO"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service", 
              "name": "Content Optimization for SGE",
              "description": "Search Generative Experience optimization for AI-powered search engines"
            },
            "category": "Content Strategy"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Local SEO Phoenix",
              "description": "Local search optimization for Phoenix and Arizona businesses"
            },
            "category": "Local SEO"
          }
        ]
      },
      "priceRange": "$$",
      "paymentAccepted": ["Cash", "Credit Card", "PayPal", "Bank Transfer"],
      "currenciesAccepted": "USD",
      "openingHours": [
        "Mo-Fr 09:00-17:00",
        "Sa 10:00-14:00"
      ],
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "17:00"
        },
        {
          "@type": "OpeningHoursSpecification", 
          "dayOfWeek": "Saturday",
          "opens": "10:00",
          "closes": "14:00"
        }
      ],
      "telephone": "+1-555-SEO-GURU",
      "email": "omar@omarrcorral.com",
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
          "item": "https://omar-corral.com"
        },
        {
          "@type": "ListItem", 
          "position": 2,
          "name": "About",
          "item": "https://omar-corral.com#about"
        },
        {
          "@type": "ListItem",
          "position": 3, 
          "name": "Skills",
          "item": "https://omar-corral.com#skills"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Experience", 
          "item": "https://omar-corral.com#experience"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Contact",
          "item": "https://omar-corral.com#contact"
        }
      ]
    }
  },

  // Analytics & Tracking (Update with real IDs for production)
  analytics: {
    googleAnalytics: "G-XXXXXXXXXX", // TODO: Replace with actual GA4 ID
    googleTagManager: "GTM-XXXXXXX", // TODO: Replace with actual GTM ID
    googleSearchConsole: "google-site-verification=xxxxxxxxxxxxxxxxxxxxxx", // TODO: Replace with actual verification code
    bingWebmaster: "msvalidate.01=xxxxxxxxxxxxxxxxxxxxxx", // TODO: Replace with actual Bing code
    facebookPixel: "xxxxxxxxxxxxx" // TODO: Replace with actual Facebook Pixel ID
  },

  // Performance & Technical
  technical: {
    themeColor: "#1e293b", // slate-800
    backgroundColor: "#0f172a", // slate-900
    manifestUrl: "/manifest.json",
    robotsUrl: "/robots.txt",
    sitemapUrl: "/sitemap.xml",
    rssUrl: "/rss.xml",
    canonicalUrl: "https://omar-corral.com",
    hreflang: [
      { lang: "en", href: "https://omar-corral.com" },
      { lang: "es", href: "https://omar-corral.com/es" }, // Future Spanish version
      { lang: "x-default", href: "https://omar-corral.com" }
    ]
  },

  // Content Security Policy
  security: {
    contentSecurityPolicy: {
      "default-src": "'self'",
      "script-src": "'self' 'unsafe-inline' 'unsafe-eval' *.google.com *.googletagmanager.com *.google-analytics.com",
      "style-src": "'self' 'unsafe-inline' fonts.googleapis.com",
      "font-src": "'self' fonts.gstatic.com",
      "img-src": "'self' data: *.google.com *.google-analytics.com *.googletagmanager.com",
      "connect-src": "'self' *.google-analytics.com *.google.com"
    }
  }
};

// Export individual sections for easier imports
export const { personal, website, meta, openGraph, twitter, structuredData, analytics, technical, security } = seoData;
