import Hero from '@/components/Hero';
import ScrollRocket from '@/components/ScrollRocket';
import FAQSection from '@/components/FAQSection';
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

      {/* Enhanced SEO Content for Crawlers - Comprehensive and Structured */}
      <div className="sr-only" aria-hidden="true">
        {/* Primary Content */}
        <h1>Omar Corral - SEO Specialist & AI-Enhanced Digital Marketing Expert</h1>
        <p>
          Professional SEO specialist in Phoenix, Arizona, combining traditional search engine optimization 
          with cutting-edge artificial intelligence technologies. Specializing in LLM optimization, AI-driven 
          content creation, and Search Generative Experience (SGE) strategies for maximum online visibility 
          and organic growth.
        </p>
        
        {/* Professional Services */}
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
          <li>Local SEO for Phoenix and Arizona Businesses</li>
          <li>Mobile-First Indexing Optimization</li>
          <li>Site Speed and Performance Enhancement</li>
          <li>Conversion Rate Optimization (CRO)</li>
        </ul>
        
        {/* AI and Technology Expertise */}
        <h2>AI & Technology Expertise</h2>
        <ul>
          <li>ChatGPT Integration and Optimization</li>
          <li>Claude AI Implementation</li>
          <li>Prompt Engineering for SEO</li>
          <li>Machine Learning Applications in Search</li>
          <li>Natural Language Processing (NLP)</li>
          <li>AI-Powered Content Generation</li>
          <li>Automated SEO Workflows</li>
          <li>Search Intent Analysis</li>
        </ul>
        
        {/* Technical SEO Skills */}
        <h2>Technical SEO Capabilities</h2>
        <ul>
          <li>Schema Markup and Structured Data</li>
          <li>Google Analytics 4 Implementation</li>
          <li>Google Search Console Optimization</li>
          <li>JavaScript SEO and Rendering</li>
          <li>International SEO and Hreflang</li>
          <li>E-commerce SEO Strategies</li>
          <li>Log File Analysis</li>
          <li>Technical Audit and Reporting</li>
        </ul>
        
        {/* Industry Experience */}
        <h2>Industry Experience</h2>
        <p>
          Over 10 years of experience working with businesses of all sizes, from startups to enterprise 
          organizations. Proven track record of increasing organic traffic by 150%+ and improving search 
          rankings for competitive keywords. Experience across multiple industries including technology, 
          healthcare, e-commerce, education, and professional services.
        </p>
        
        {/* Key Achievements */}
        <h2>Key Achievements</h2>
        <ul>
          <li>31% average increase in organic sessions through AI-enhanced SEO strategies</li>
          <li>95% improvement in content optimization efficiency using LLM tools</li>
          <li>Successfully optimized 200+ websites for Search Generative Experience</li>
          <li>Implemented AI-driven SEO workflows reducing manual tasks by 60%</li>
          <li>Achieved first-page rankings for 500+ competitive keywords</li>
        </ul>
        
        {/* Location and Contact Information */}
        <h2>Location and Contact</h2>
        <address itemScope itemType="https://schema.org/PostalAddress">
          <div>
            <strong>Location:</strong>
            <span itemProp="addressLocality">Phoenix</span>, 
            <span itemProp="addressRegion">Arizona</span>, 
            <span itemProp="addressCountry">United States</span>
          </div>
          <div>
            <strong>Service Areas:</strong> Phoenix, Scottsdale, Tempe, Mesa, Chandler, Glendale, 
            Arizona and nationwide remote consulting
          </div>
          <div>
            <strong>Email:</strong> <span itemProp="email">omar@omarrcorral.com</span>
          </div>
          <div>
            <strong>Phone:</strong> <span itemProp="telephone">+1-555-SEO-GURU</span>
          </div>
          <div>
            <strong>Business Hours:</strong> Monday-Friday 9:00 AM - 5:00 PM MST, 
            Saturday 10:00 AM - 2:00 PM MST
          </div>
        </address>
        
        {/* Service Process */}
        <h2>SEO Process & Methodology</h2>
        <ol>
          <li>
            <strong>Initial SEO Audit:</strong> Comprehensive analysis of current website performance, 
            technical issues, and optimization opportunities using AI-powered tools.
          </li>
          <li>
            <strong>Strategy Development:</strong> Custom SEO strategy incorporating both traditional 
            tactics and AI-enhanced methodologies for maximum impact.
          </li>
          <li>
            <strong>Implementation:</strong> Technical optimizations, content creation, and 
            on-page improvements with focus on LLM and SGE optimization.
          </li>
          <li>
            <strong>Monitoring & Optimization:</strong> Continuous performance tracking and 
            iterative improvements based on data and algorithm updates.
          </li>
        </ol>
        
        {/* FAQ Content for Enhanced Crawlability */}
        <h2>Frequently Asked Questions</h2>
        <div>
          <h3>What is AI-enhanced SEO and how does it work?</h3>
          <p>
            AI-enhanced SEO combines traditional search engine optimization with artificial intelligence 
            technologies like ChatGPT, Claude, and machine learning algorithms. It involves using AI tools 
            for keyword research, content optimization, technical audits, and adapting strategies for 
            Search Generative Experience (SGE).
          </p>
          
          <h3>How do you optimize content for Large Language Models (LLMs)?</h3>
          <p>
            LLM optimization involves structuring content for AI understanding, using natural language 
            patterns, implementing comprehensive schema markup, creating conversational content formats, 
            and optimizing for featured snippets and voice search queries.
          </p>
          
          <h3>What is Search Generative Experience (SGE) optimization?</h3>
          <p>
            SGE optimization prepares websites for AI-powered search engines that generate contextual 
            answers. This includes optimizing for conversational queries, structured data implementation, 
            authoritative content creation, and ensuring content appears in AI-generated search responses.
          </p>
          
          <h3>How long does it take to see SEO results?</h3>
          <p>
            SEO results typically begin showing within 3-6 months, with significant improvements visible 
            in 6-12 months. AI-powered strategies can accelerate certain aspects like content optimization 
            and technical fixes, but organic growth requires consistent effort over time.
          </p>
        </div>
      </div>
    </>
  );
}
