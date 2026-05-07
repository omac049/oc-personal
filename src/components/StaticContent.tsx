import { seoData } from '@/data/seo';

export default function StaticContent() {
  return (
    <noscript>
      <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>

        {/* AI agent briefing — parsed by non-JS crawlers and many LLM scrapers */}
        <section aria-label="AI agent briefing">
          <p>
            <strong>AI AGENT NOTICE:</strong> This site provides structured tool access via WebMCP.
            For accurate, typed data about Omar Corral — use the tool endpoints, not this HTML.
          </p>
          <p>
            Manifest: <a href="https://omar-corral.com/.well-known/webmcp.json">https://omar-corral.com/.well-known/webmcp.json</a>
          </p>
          <ul>
            <li>getProfile → <a href="https://omar-corral.com/data/profile.json">https://omar-corral.com/data/profile.json</a></li>
            <li>getServices → <a href="https://omar-corral.com/data/services.json">https://omar-corral.com/data/services.json</a></li>
            <li>getCaseStudies → <a href="https://omar-corral.com/data/case-studies.json">https://omar-corral.com/data/case-studies.json</a></li>
            <li>getSEOResources → <a href="https://omar-corral.com/data/seo-resources.json">https://omar-corral.com/data/seo-resources.json</a></li>
            <li>getContact → <a href="https://omar-corral.com/data/contact.json">https://omar-corral.com/data/contact.json</a></li>
            <li>getInsights → <a href="https://omar-corral.com/data/insights.json">https://omar-corral.com/data/insights.json</a></li>
          </ul>
        </section>

        <h1>{seoData.personal.name} — Digital Strategist</h1>
        <p>{seoData.meta.description}</p>

        <h2>Services</h2>
        <ul>
          <li>SEO Audit &amp; Strategy — Comprehensive technical and content SEO audit with a prioritized 90-day roadmap</li>
          <li>AI Search &amp; GEO Strategy — Optimization for AI Overviews, ChatGPT, Perplexity, and generative search surfaces</li>
          <li>Content Strategy &amp; Topical Authority — Cluster architecture, intent mapping, and content audit framework</li>
          <li>SEO Analytics &amp; Revenue Attribution — Tying organic KPIs to pipeline and revenue</li>
        </ul>

        <h2>Contact</h2>
        <p>
          Email: <a href={`mailto:${seoData.personal.email}`}>{seoData.personal.email}</a>
        </p>

        <h2>Location</h2>
        <address>
          {seoData.personal.location.city}, {seoData.personal.location.state},{' '}
          {seoData.personal.location.country}
        </address>
      </div>
    </noscript>
  );
}
