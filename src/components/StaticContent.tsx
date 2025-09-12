import React from 'react';

export default function StaticContent() {
  return (
    <noscript>
      {/* Fallback content for crawlers and users with JavaScript disabled */}
      <div className="min-h-screen bg-slate-900 text-white px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-light mb-4">
              Omar Corral
            </h1>
            <h2 className="text-2xl md:text-3xl text-slate-300 mb-6">
              SEO Specialist & AI-Enhanced Digital Marketing Expert
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Professional SEO specialist in Phoenix, Arizona, combining traditional search 
              optimization with cutting-edge AI technologies for maximum organic growth.
            </p>
          </header>

          <main>
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">About</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-lg mb-4">
                  I&apos;m a forward-thinking SEO specialist who combines traditional SEO expertise 
                  with cutting-edge AI technologies to help businesses dominate search results. 
                  My approach integrates comprehensive SEO strategies with advanced LLM optimization, 
                  AI-driven content creation, and Search Generative Experience (SGE) optimization.
                </p>
                <p className="text-lg mb-4">
                  With over 10 years of experience, I specialize in leveraging Large Language Models 
                  and AI tools like ChatGPT, Claude, and custom AI solutions to enhance SEO performance. 
                  From AI-powered keyword research to automated content optimization, I stay at the 
                  forefront of the AI revolution in search marketing.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Core Services</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-800/50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-blue-400">AI-Enhanced SEO</h3>
                  <ul className="space-y-2 text-slate-300">
                    <li>• LLM Content Optimization</li>
                    <li>• Search Generative Experience (SGE)</li>
                    <li>• AI-Powered Keyword Research</li>
                    <li>• Automated Technical Audits</li>
                  </ul>
                </div>
                
                <div className="bg-slate-800/50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-green-400">Technical SEO</h3>
                  <ul className="space-y-2 text-slate-300">
                    <li>• Core Web Vitals Optimization</li>
                    <li>• Schema Markup Implementation</li>
                    <li>• Mobile-First Indexing</li>
                    <li>• Site Speed Enhancement</li>
                  </ul>
                </div>
                
                <div className="bg-slate-800/50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-purple-400">Content Strategy</h3>
                  <ul className="space-y-2 text-slate-300">
                    <li>• AI-Driven Content Creation</li>
                    <li>• Prompt Engineering for SEO</li>
                    <li>• Content Gap Analysis</li>
                    <li>• Conversion Optimization</li>
                  </ul>
                </div>
                
                <div className="bg-slate-800/50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-amber-400">Analytics & Reporting</h3>
                  <ul className="space-y-2 text-slate-300">
                    <li>• Google Analytics 4 Setup</li>
                    <li>• Search Console Optimization</li>
                    <li>• Performance Monitoring</li>
                    <li>• ROI Tracking</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Professional Experience</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-semibold mb-2">SEO Specialist & AI Marketing Expert</h3>
                  <p className="text-slate-400 mb-2">Independent Consultant | 2020 - Present</p>
                  <ul className="text-slate-300 space-y-1">
                    <li>• Achieved 31% average increase in organic sessions using AI-enhanced strategies</li>
                    <li>• Improved content optimization efficiency by 95% using LLM tools</li>
                    <li>• Successfully optimized 200+ websites for Search Generative Experience</li>
                    <li>• Developed AI-driven SEO workflows reducing manual tasks by 60%</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-semibold mb-2">Digital Marketing Strategist</h3>
                  <p className="text-slate-400 mb-2">Various Agencies | 2015 - 2020</p>
                  <ul className="text-slate-300 space-y-1">
                    <li>• Managed SEO campaigns for 50+ enterprise clients</li>
                    <li>• Increased organic traffic by 150%+ for multiple clients</li>
                    <li>• Specialized in technical SEO and international optimization</li>
                    <li>• Pioneered early adoption of AI tools in SEO workflows</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Key Technologies & Tools</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <h4 className="font-semibold text-blue-400 mb-2">AI & Machine Learning</h4>
                  <p className="text-sm text-slate-300">ChatGPT, Claude, Custom LLMs, NLP Tools</p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-green-400 mb-2">SEO Platforms</h4>
                  <p className="text-sm text-slate-300">SEMrush, Ahrefs, Moz, Screaming Frog</p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-purple-400 mb-2">Analytics</h4>
                  <p className="text-sm text-slate-300">Google Analytics 4, Search Console, Data Studio</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <div className="bg-slate-800/50 p-6 rounded-lg">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Location</h4>
                    <p className="text-slate-300">Phoenix, Arizona, United States</p>
                    <p className="text-slate-400 text-sm">Serving Phoenix, Scottsdale, Tempe, Mesa, and nationwide</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Get in Touch</h4>
                    <p className="text-slate-300">Email: omar@omarrcorral.com</p>
                    <p className="text-slate-300">Phone: +1-555-SEO-GURU</p>
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">Business Hours</h4>
                  <p className="text-slate-300">Monday-Friday: 9:00 AM - 5:00 PM MST</p>
                  <p className="text-slate-300">Saturday: 10:00 AM - 2:00 PM MST</p>
                </div>
              </div>
            </section>
          </main>

          <footer className="text-center text-slate-400 text-sm border-t border-slate-700 pt-6">
            <p>&copy; 2025 Omar Corral. All rights reserved. | SEO Specialist & AI Marketing Expert</p>
          </footer>
        </div>
      </div>
    </noscript>
  );
}
