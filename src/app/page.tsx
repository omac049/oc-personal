import Hero from '@/components/Hero';
import ProofStrip from '@/components/ProofStrip';
import Services from '@/components/Services';
import CaseStudies from '@/components/CaseStudies';
import ScrollRocket from '@/components/ScrollRocket';
import FAQSection from '@/components/FAQSection';
import SEOResourcesCTA from '@/components/SEOResourcesCTA';
import { 
  LazyAbout, 
  LazySkills, 
  LazyExperience, 
  LazyContact 
} from '@/components/LazyComponents';

export default function Home() {
  return (
    <>
      {/* Skip Navigation for Accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-md"
      >
        Skip to main content
      </a>



      {/* Main Content with Enhanced Semantics */}
      <main 
        id="main-content"
        className="min-h-screen relative bg-slate-900"
        role="main"
        aria-label="Omar Corral - SEO Specialist & AI Marketing Expert Portfolio"
        itemScope
        itemType="https://schema.org/Person"
      >
        {/* Enhanced Scroll Component */}
        <ScrollRocket />
        
        {/* Page Header with Hidden H1 for SEO */}
        <header className="sr-only">
          <h1 itemProp="name">
            Omar Corral - SEO Specialist in Phoenix, Arizona
          </h1>
          <p itemProp="description">
            SEO specialist helping brands rank in search and AI through data-driven strategy, technical execution, and tools like ChatGPT and Claude.
          </p>
        </header>
        
        {/* Hero, proof, services, case studies (Signal rebrand) */}
        <Hero />
        <ProofStrip />
        <Services />
        <CaseStudies />
        
        {/* About Section - Professional Background */}
        <section 
          id="about" 
          aria-labelledby="about-heading"
          aria-label="Professional background and expertise"
          itemScope
          itemType="https://schema.org/AboutPage"
        >
          <LazyAbout />
        </section>
        
        {/* Skills Section - Technical Expertise */}
        <section 
          id="skills" 
          aria-labelledby="skills-heading"
          aria-label="Technical skills and specializations"
          itemScope
          itemType="https://schema.org/ItemList"
        >
          <LazySkills />
        </section>
        
        {/* Experience Section - Work History */}
        <section 
          id="experience" 
          aria-labelledby="experience-heading"
          aria-label="Professional experience and achievements"
          itemScope
          itemType="https://schema.org/WorkHistory"
        >
          <LazyExperience />
        </section>
        
        {/* SEO Resources CTA - Link to Resource Center */}
        <SEOResourcesCTA />
        
        {/* FAQ Section - Frequently Asked Questions */}
        <section 
          id="faq" 
          aria-labelledby="faq-heading"
          aria-label="Frequently asked questions about AI-powered SEO services"
          itemScope
          itemType="https://schema.org/FAQPage"
        >
          <FAQSection />
        </section>
        
        {/* Contact Section - Communication */}
        <section 
          id="contact" 
          aria-labelledby="contact-heading"
          aria-label="Contact information and communication options"
          itemScope
          itemType="https://schema.org/ContactPage"
        >
          <LazyContact />
        </section>
      </main>

      {/* Structured data for crawlers */}
      <div className="sr-only" aria-hidden="true">
        <h1>Omar Corral - SEO Specialist & AI-Enhanced Digital Marketing</h1>
        <p>
          SEO specialist in Phoenix, Arizona with 10+ years of experience. Combines traditional 
          search engine optimization with AI tools including ChatGPT, Claude, and LLM optimization 
          to grow organic traffic and search visibility.
        </p>
        
        <h2>Services</h2>
        <ul>
          <li>Search Engine Optimization (Technical, On-Page, Off-Page)</li>
          <li>AI & LLM Content Optimization</li>
          <li>Search Generative Experience (SGE) Strategy</li>
          <li>Technical SEO Audits</li>
          <li>Analytics & Performance Reporting</li>
          <li>Local SEO for Phoenix and Arizona</li>
          <li>E-commerce and International SEO</li>
        </ul>
        
        <h2>Location</h2>
        <address itemScope itemType="https://schema.org/PostalAddress">
          <span itemProp="addressLocality">Phoenix</span>, 
          <span itemProp="addressRegion">Arizona</span>, 
          <span itemProp="addressCountry">United States</span>
        </address>
      </div>
    </>
  );
}
