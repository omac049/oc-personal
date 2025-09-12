import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI-Enhanced SEO Services | Omar Corral - Digital Marketing Expert",
  description: "Comprehensive SEO services combining traditional optimization with AI technologies. LLM optimization, SGE strategies, technical audits, and AI-driven content creation.",
  keywords: "AI SEO services, LLM optimization, Search Generative Experience, technical SEO audit, AI content strategy, Phoenix SEO consultant",
  openGraph: {
    title: "AI-Enhanced SEO Services | Omar Corral",
    description: "Professional SEO services leveraging artificial intelligence for maximum search visibility and organic growth.",
    url: "https://omar-corral.com/services",
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            AI-Enhanced SEO Services
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Comprehensive search engine optimization services that combine traditional SEO expertise 
            with cutting-edge artificial intelligence technologies for maximum impact.
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <section>
            <h2 className="text-3xl font-bold mb-6 text-blue-400">AI-Powered SEO Strategy</h2>
            <div className="space-y-6">
              <div className="bg-slate-800/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Large Language Model (LLM) Optimization</h3>
                <p className="text-slate-300 mb-4">
                  Optimize your content for AI understanding using advanced natural language processing 
                  techniques, ensuring maximum visibility in AI-powered search results.
                </p>
                <ul className="text-slate-400 space-y-1">
                  <li>• Content structure optimization for AI comprehension</li>
                  <li>• Natural language pattern implementation</li>
                  <li>• Conversational query optimization</li>
                  <li>• Featured snippet targeting</li>
                </ul>
              </div>

              <div className="bg-slate-800/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Search Generative Experience (SGE)</h3>
                <p className="text-slate-300 mb-4">
                  Prepare your website for the future of search with SGE optimization strategies 
                  that ensure your content appears in AI-generated search responses.
                </p>
                <ul className="text-slate-400 space-y-1">
                  <li>• AI search engine optimization</li>
                  <li>• Contextual answer optimization</li>
                  <li>• Authoritative content development</li>
                  <li>• Structured data enhancement</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6 text-green-400">Technical SEO Excellence</h2>
            <div className="space-y-6">
              <div className="bg-slate-800/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Core Web Vitals Optimization</h3>
                <p className="text-slate-300 mb-4">
                  Comprehensive technical optimization to improve your site&apos;s loading speed, 
                  interactivity, and visual stability for better search rankings.
                </p>
                <ul className="text-slate-400 space-y-1">
                  <li>• Largest Contentful Paint (LCP) optimization</li>
                  <li>• First Input Delay (FID) improvements</li>
                  <li>• Cumulative Layout Shift (CLS) fixes</li>
                  <li>• Mobile performance enhancement</li>
                </ul>
              </div>

              <div className="bg-slate-800/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Advanced Schema Markup</h3>
                <p className="text-slate-300 mb-4">
                  Implementation of comprehensive structured data to help search engines 
                  understand your content and display rich snippets in search results.
                </p>
                <ul className="text-slate-400 space-y-1">
                  <li>• Business schema implementation</li>
                  <li>• Article and FAQ schema</li>
                  <li>• Local business markup</li>
                  <li>• Product and service schemas</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">AI-Driven Content Strategy</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-purple-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Content Creation</h3>
              <p className="text-slate-300">
                Leverage ChatGPT, Claude, and custom AI tools to create high-quality, 
                SEO-optimized content that ranks and converts.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Keyword Research 2.0</h3>
              <p className="text-slate-300">
                AI-powered keyword research that identifies opportunities traditional 
                tools miss, including semantic and intent-based keywords.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Performance Analytics</h3>
              <p className="text-slate-300">
                Advanced analytics and reporting using AI to identify trends, 
                opportunities, and optimization strategies.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Service Packages</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Starter</h3>
              <p className="text-slate-300 mb-6">Perfect for small businesses looking to establish their online presence</p>
              <ul className="space-y-3 text-slate-300 mb-8">
                <li>• Initial SEO audit</li>
                <li>• Basic AI content optimization</li>
                <li>• Core Web Vitals fixes</li>
                <li>• Schema markup setup</li>
                <li>• Monthly reporting</li>
              </ul>
              <div className="text-center">
                <p className="text-3xl font-bold text-white mb-2">Contact for Pricing</p>
                <p className="text-slate-400">3-month minimum</p>
              </div>
            </div>

            <div className="bg-slate-800/30 border-2 border-blue-500 rounded-lg p-8 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold mb-4 text-green-400">Professional</h3>
              <p className="text-slate-300 mb-6">Comprehensive AI-enhanced SEO for growing businesses</p>
              <ul className="space-y-3 text-slate-300 mb-8">
                <li>• Everything in Starter</li>
                <li>• LLM content optimization</li>
                <li>• SGE strategy development</li>
                <li>• Advanced technical SEO</li>
                <li>• Bi-weekly consultations</li>
                <li>• Competitive analysis</li>
              </ul>
              <div className="text-center">
                <p className="text-3xl font-bold text-white mb-2">Contact for Pricing</p>
                <p className="text-slate-400">6-month minimum</p>
              </div>
            </div>

            <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Enterprise</h3>
              <p className="text-slate-300 mb-6">Full-scale AI SEO transformation for large organizations</p>
              <ul className="space-y-3 text-slate-300 mb-8">
                <li>• Everything in Professional</li>
                <li>• Custom AI tool development</li>
                <li>• Team training & workshops</li>
                <li>• Priority support</li>
                <li>• Weekly strategy calls</li>
                <li>• Advanced automation</li>
              </ul>
              <div className="text-center">
                <p className="text-3xl font-bold text-white mb-2">Custom Pricing</p>
                <p className="text-slate-400">12-month minimum</p>
              </div>
            </div>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your SEO?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how AI-enhanced SEO can drive your business growth. 
            Schedule a free consultation to get started.
          </p>
          <div className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors cursor-pointer">
            Get Your Free SEO Consultation
          </div>
        </section>
      </div>
    </main>
  );
}
