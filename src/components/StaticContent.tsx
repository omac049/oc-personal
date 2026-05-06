import { seoData } from '@/data/seo';

export default function StaticContent() {
  return (
    <noscript>
      <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1>{seoData.personal.name} — Digital Strategist</h1>
        <p>{seoData.meta.description}</p>

        <h2>Services</h2>
        <ul>
          <li>SEO Audit &amp; Strategy</li>
          <li>AI Search Strategy</li>
          <li>Growth &amp; Analytics</li>
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
