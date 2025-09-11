export const skillsSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://omar-corral.com#person",
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "name": "AI-Powered SEO Specialist Certification",
      "description": "Advanced certification in AI-driven search engine optimization strategies",
      "credentialCategory": "Professional Certification",
      "recognizedBy": {
        "@type": "Organization",
        "name": "SEO Industry Standards"
      },
      "validFor": "P3Y",
      "dateCreated": "2024-01-01"
    },
    {
      "@type": "EducationalOccupationalCredential", 
      "name": "Google Analytics Certified",
      "description": "Google Analytics Individual Qualification",
      "credentialCategory": "Professional Certification",
      "recognizedBy": {
        "@type": "Organization",
        "name": "Google",
        "url": "https://skillshop.withgoogle.com"
      },
      "validFor": "P1Y",
      "dateCreated": "2024-01-01"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "name": "Search Console Expert",
      "description": "Advanced Google Search Console optimization and analysis",
      "credentialCategory": "Professional Expertise",
      "recognizedBy": {
        "@type": "Organization", 
        "name": "Google"
      }
    }
  ],
  "hasSkill": [
    {
      "@type": "DefinedTerm",
      "@id": "https://omar-corral.com#skill-ai-seo",
      "name": "AI-Powered SEO",
      "description": "Advanced search engine optimization using artificial intelligence and machine learning",
      "inDefinedTermSet": {
        "@type": "DefinedTermSet",
        "name": "SEO Skills",
        "hasDefinedTerm": "AI SEO"
      }
    },
    {
      "@type": "DefinedTerm",
      "@id": "https://omar-corral.com#skill-llm-optimization",
      "name": "Large Language Model Optimization",
      "description": "Optimization strategies for LLMs like ChatGPT and Claude for SEO applications",
      "inDefinedTermSet": {
        "@type": "DefinedTermSet",
        "name": "AI Skills",
        "hasDefinedTerm": "LLM Optimization"
      }
    },
    {
      "@type": "DefinedTerm",
      "@id": "https://omar-corral.com#skill-sge",
      "name": "Search Generative Experience (SGE)",
      "description": "Optimization for AI-powered search experiences and generative search results",
      "inDefinedTermSet": {
        "@type": "DefinedTermSet",
        "name": "Advanced SEO",
        "hasDefinedTerm": "SGE Optimization"
      }
    },
    {
      "@type": "DefinedTerm",
      "@id": "https://omar-corral.com#skill-technical-seo",
      "name": "Technical SEO",
      "description": "Core Web Vitals, mobile optimization, schema markup, and site architecture",
      "inDefinedTermSet": {
        "@type": "DefinedTermSet",
        "name": "Technical Skills",
        "hasDefinedTerm": "Technical SEO"
      }
    },
    {
      "@type": "DefinedTerm",
      "@id": "https://omar-corral.com#skill-content-strategy",
      "name": "AI Content Strategy",
      "description": "Content planning and optimization using artificial intelligence tools",
      "inDefinedTermSet": {
        "@type": "DefinedTermSet",
        "name": "Content Skills",
        "hasDefinedTerm": "Content Strategy"
      }
    },
    {
      "@type": "DefinedTerm",
      "@id": "https://omar-corral.com#skill-analytics",
      "name": "Advanced Analytics",
      "description": "Google Analytics, Search Console, and AI-powered analytics interpretation",
      "inDefinedTermSet": {
        "@type": "DefinedTermSet",
        "name": "Analytics Skills", 
        "hasDefinedTerm": "Analytics"
      }
    }
  ],
  "knowsAbout": [
    {
      "@type": "Thing",
      "@id": "https://omar-corral.com#topic-chatgpt-seo",
      "name": "ChatGPT SEO Integration",
      "description": "Using ChatGPT for keyword research, content optimization, and SEO strategy development"
    },
    {
      "@type": "Thing",
      "@id": "https://omar-corral.com#topic-claude-ai",
      "name": "Claude AI for Content",
      "description": "Leveraging Claude AI for long-form content creation and SEO copywriting"
    },
    {
      "@type": "Thing",
      "@id": "https://omar-corral.com#topic-prompt-engineering",
      "name": "Prompt Engineering for SEO",
      "description": "Crafting effective prompts for AI tools to generate SEO-optimized content"
    },
    {
      "@type": "Thing",
      "@id": "https://omar-corral.com#topic-core-web-vitals",
      "name": "Core Web Vitals Optimization",
      "description": "LCP, FID, CLS optimization for better search rankings and user experience"
    },
    {
      "@type": "Thing",
      "@id": "https://omar-corral.com#topic-schema-markup",
      "name": "Advanced Schema Markup",
      "description": "JSON-LD implementation for rich snippets and enhanced search results"
    }
  ]
};

export const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "@id": "https://omar-corral.com#ai-seo-mastery",
  "name": "AI-Powered SEO Mastery",
  "description": "Comprehensive training program combining traditional SEO with cutting-edge AI technologies for maximum search visibility.",
  "provider": {
    "@type": "Person",
    "@id": "https://omar-corral.com#person"
  },
  "instructor": {
    "@type": "Person",
    "@id": "https://omar-corral.com#person"
  },
  "courseCode": "AI-SEO-2024",
  "educationalLevel": "Intermediate to Advanced",
  "teaches": [
    "AI-powered keyword research techniques",
    "ChatGPT and Claude integration for SEO",
    "Search Generative Experience optimization",
    "LLM content optimization strategies",
    "Technical SEO with AI assistance",
    "Prompt engineering for SEO applications"
  ],
  "coursePrerequisites": "Basic understanding of SEO principles",
  "timeRequired": "PT8H",
  "numberOfCredits": 8,
  "inLanguage": "en-US",
  "availableLanguage": ["en-US"],
  "dateCreated": "2024-01-01",
  "dateModified": "2024-12-01",
  "learningResourceType": "Professional Development",
  "educationalUse": "Professional Training",
  "audience": {
    "@type": "EducationalAudience",
    "audienceType": "SEO Professionals, Digital Marketers, Business Owners"
  }
};
