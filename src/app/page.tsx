import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import ScrollRocket from '@/components/ScrollRocket';

export default function Home() {
  return (
    <>
      {/* Main Content with Enhanced Semantics */}
      <main 
        id="main-content"
        className="min-h-screen relative bg-slate-900"
        role="main"
        aria-label="Omar Corral - AI-Powered SEO Specialist Portfolio"
        itemScope
        itemType="https://schema.org/Person"
      >
        {/* Enhanced Scroll Component */}
        <ScrollRocket />
        
        {/* Hero Section - Primary Landing */}
        <section aria-label="Introduction and overview">
          <Hero />
        </section>
        
        {/* About Section - Professional Background */}
        <section aria-label="Professional background and expertise">
          <About />
        </section>
        
        {/* Skills Section - Technical Expertise */}
        <section aria-label="Technical skills and specializations">
          <Skills />
        </section>
        
        {/* Experience Section - Work History */}
        <section aria-label="Professional experience and achievements">
          <Experience />
        </section>
        
        {/* Contact Section - Communication */}
        <section aria-label="Contact information and communication options">
          <Contact />
        </section>
      </main>

      {/* Hidden SEO Content for Crawlers */}
      <div className="sr-only" aria-hidden="true">
        <h1>Omar Corral - AI-Powered SEO Specialist & Digital Marketing Expert</h1>
        <h2>Professional Services</h2>
        <ul>
          <li>AI-Powered Search Engine Optimization</li>
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
