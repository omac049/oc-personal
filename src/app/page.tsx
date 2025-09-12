import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import ScrollRocket from '@/components/ScrollRocket';
import FAQSection from '@/components/FAQSection';

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
            Omar Corral - SEO Specialist & AI-Enhanced Digital Marketing Expert in Phoenix, Arizona
          </h1>
          <p itemProp="description">
            Professional SEO specialist combining traditional search engine optimization with cutting-edge AI technologies including ChatGPT, Claude, and Search Generative Experience (SGE) strategies.
          </p>
        </header>
        
        {/* Hero Section - Primary Landing */}
        <section 
          id="hero" 
          aria-labelledby="hero-heading"
          aria-label="Introduction and overview"
          itemScope
          itemType="https://schema.org/WebPageElement"
        >
          <Hero />
        </section>
        
        {/* About Section - Professional Background */}
        <section 
          id="about" 
          aria-labelledby="about-heading"
          aria-label="Professional background and expertise"
          itemScope
          itemType="https://schema.org/AboutPage"
        >
          <About />
        </section>
        
        {/* Skills Section - Technical Expertise */}
        <section 
          id="skills" 
          aria-labelledby="skills-heading"
          aria-label="Technical skills and specializations"
          itemScope
          itemType="https://schema.org/ItemList"
        >
          <Skills />
        </section>
        
        {/* Experience Section - Work History */}
        <section 
          id="experience" 
          aria-labelledby="experience-heading"
          aria-label="Professional experience and achievements"
          itemScope
          itemType="https://schema.org/WorkHistory"
        >
          <Experience />
        </section>
        
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
          <Contact />
        </section>
      </main>

      {/* Hidden SEO Content for Crawlers */}
      <div className="sr-only" aria-hidden="true">
        <h1>Omar Corral - SEO Specialist & AI-Enhanced Digital Marketing Expert</h1>
        <h2>Professional Services</h2>
        <ul>
          <li>AI-Enhanced Search Engine Optimization</li>
          <li>Large Language Model (LLM) Content Optimization</li>
          <li>Search Generative Experience (SGE) Strategies</li>
          <li>Technical SEO Audits and Implementation</li>
          <li>Content Strategy and AI-Driven Creation</li>
          <li>Analytics and Performance Monitoring</li>
          <li>International and E-commerce SEO</li>
          <li>Core Web Vitals Optimization</li>
        </ul>
        
        <h2>Expertise Areas</h2>
        <ul>
          <li>ChatGPT and Claude AI Integration</li>
          <li>Prompt Engineering for SEO</li>
          <li>Machine Learning Applications</li>
          <li>Schema Markup and Structured Data</li>
          <li>Mobile-First Indexing</li>
          <li>Site Speed and Performance</li>
          <li>Google Analytics and Search Console</li>
          <li>Conversion Rate Optimization</li>
        </ul>
        
        <h2>Location and Contact</h2>
        <address>
          <span itemProp="addressLocality">Phoenix</span>, 
          <span itemProp="addressRegion">Arizona</span>, 
          <span itemProp="addressCountry">United States</span>
          <br />
          Email: <span itemProp="email">omar@omarrcorral.com</span>
          <br />
          Phone: <span itemProp="telephone">+1-555-SEO-GURU</span>
        </address>
      </div>
    </>
  );
}
