export const metadata = {
  title: "OC MCP — AI-Native Infrastructure | Omar Corral",
  description:
    "omar-corral.com exposes structured tool endpoints for AI agents — no Playwright scraping needed. 6 typed tools, .well-known manifest, WebMCP-ready.",
  alternates: { canonical: "https://omar-corral.com/oc-mcp/" },
};

const accent = "#00E55C";
const muted = "#71717a";
const bgDeep = "#0a0a0a";

const container: React.CSSProperties = {
  maxWidth: 900,
  marginLeft: "auto",
  marginRight: "auto",
  paddingLeft: "clamp(1.25rem, 4vw, 1.75rem)",
  paddingRight: "clamp(1.25rem, 4vw, 1.75rem)",
};

const sectionBase: React.CSSProperties = {
  paddingTop: "5rem",
  paddingBottom: "5rem",
};

const mono: React.CSSProperties = {
  fontFamily: "'Courier New', Courier, monospace",
};

function linkStyle(primary?: boolean): React.CSSProperties {
  return {
    color: primary ? accent : "#ffffff",
    textDecoration: "underline",
    textUnderlineOffset: 4,
    fontFamily: "var(--font-inter), system-ui, sans-serif",
    fontWeight: primary ? 600 : 500,
  };
}

const tools: { name: string; description: string; path: string }[] = [
  {
    name: "getProfile",
    description: "Bio, expertise, credentials, industries served",
    path: "/data/profile.json",
  },
  {
    name: "getServices",
    description: "Service offerings, scope, ideal client, outcomes",
    path: "/data/services.json",
  },
  {
    name: "getCaseStudies",
    description: "Case study summaries with challenge, approach, outcomes",
    path: "/data/case-studies.json",
  },
  {
    name: "getSEOResources",
    description: "Resource center topic map + guide URLs",
    path: "/data/seo-resources.json",
  },
  {
    name: "getContact",
    description: "Engagement process, response time, CTA",
    path: "/data/contact.json",
  },
  {
    name: "getInsights",
    description: "Recent analysis, blog posts, current focus",
    path: "/data/insights.json",
  },
];

const manifestSnippet = `{
  "version": "1.0",
  "publisher": { "name": "Omar Corral", "url": "https://omar-corral.com" },
  "tools": [
    { "name": "getProfile", "riskLevel": "low", "endpoint": "/data/profile.json" },
    { "name": "getServices", "riskLevel": "low", "endpoint": "/data/services.json" },
    { "name": "getCaseStudies", "riskLevel": "low", "endpoint": "/data/case-studies.json" }
  ]
}`;

export default function OcMcpPage() {
  return (
    <main
      style={{
        backgroundColor: "#000000",
        color: "#ffffff",
        fontFamily: "var(--font-inter), system-ui, sans-serif",
        minHeight: "100vh",
      }}
    >
      {/* Hero */}
      <section
        style={{
          ...sectionBase,
          backgroundColor: "#000000",
          borderTop: `5px solid ${accent}`,
        }}
      >
        <div style={container}>
          <p
            style={{
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontSize: "clamp(0.75rem, 2vw, 0.875rem)",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: accent,
              margin: 0,
              marginBottom: "1.25rem",
            }}
          >
            OC MCP — AI-Native Infrastructure
          </p>
          <h1
            style={{
              fontFamily: "var(--font-dm-serif), Georgia, serif",
              fontSize: "clamp(2rem, 6vw, 3.25rem)",
              fontWeight: 400,
              lineHeight: 1.12,
              margin: 0,
              marginBottom: "1.5rem",
              maxWidth: "22ch",
            }}
          >
            Give AI the answer. Don&apos;t make it guess.
          </h1>
          <p
            style={{
              fontSize: "clamp(1rem, 2.4vw, 1.125rem)",
              lineHeight: 1.65,
              color: muted,
              margin: 0,
              marginBottom: "2.75rem",
              maxWidth: "52ch",
            }}
          >
            omar-corral.com exposes structured tool endpoints so AI agents get
            clean, accurate data — no Playwright, no scraping, no hallucinations
            from mis-parsed HTML.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(min(100%, 180px), 1fr))",
              gap: "2rem 3rem",
              marginBottom: "2.75rem",
              borderTop: "1px solid #27272a",
              borderBottom: "1px solid #27272a",
              paddingTop: "2rem",
              paddingBottom: "2rem",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-dm-serif), Georgia, serif",
                fontSize: "clamp(1.75rem, 4vw, 2.25rem)",
                color: accent,
                lineHeight: 1.2,
              }}
            >
              ~65% fewer tokens
            </div>
            <div
              style={{
                fontFamily: "var(--font-dm-serif), Georgia, serif",
                fontSize: "clamp(1.75rem, 4vw, 2.25rem)",
                color: accent,
                lineHeight: 1.2,
              }}
            >
              6 tools available
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1.25rem 1.75rem",
              alignItems: "center",
            }}
          >
            <a
              href="/.well-known/webmcp.json"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle(true)}
            >
              View the manifest →
            </a>
            <a
              href="https://omac049.github.io/seo-zero-click/"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle(true)}
            >
              Read the zero-click case study →
            </a>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section style={{ ...sectionBase, backgroundColor: bgDeep }}>
        <div style={container}>
          <h2
            style={{
              fontFamily: "var(--font-dm-serif), Georgia, serif",
              fontSize: "clamp(1.5rem, 4vw, 2rem)",
              fontWeight: 400,
              margin: 0,
              marginBottom: "2rem",
            }}
          >
            The expensive path: Playwright browsing
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
              gap: "2rem",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: "0.8125rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: accent,
                  margin: 0,
                  marginBottom: "0.75rem",
                }}
              >
                Without
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: "clamp(0.9375rem, 2vw, 1.0625rem)",
                  lineHeight: 1.65,
                  color: muted,
                }}
              >
                Agent spins up browser → renders full page → scrapes HTML →
                parses DOM → extracts data → summarizes → 8,000–12,000 tokens
                consumed. Breaks on redesign. Hallucination risk from
                mis-parsed layout.
              </p>
            </div>
            <div>
              <p
                style={{
                  fontSize: "0.8125rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: accent,
                  margin: 0,
                  marginBottom: "0.75rem",
                }}
              >
                With OC MCP
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: "clamp(0.9375rem, 2vw, 1.0625rem)",
                  lineHeight: 1.65,
                  color: "#e4e4e7",
                }}
              >
                Agent calls getServices() → receives typed JSON → done. ~65%
                fewer tokens. Survives redesign. Zero hallucination from layout
                artifacts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The 6 Tools */}
      <section style={{ ...sectionBase, backgroundColor: "#000000" }}>
        <div style={container}>
          <h2
            style={{
              fontFamily: "var(--font-dm-serif), Georgia, serif",
              fontSize: "clamp(1.5rem, 4vw, 2rem)",
              fontWeight: 400,
              margin: 0,
              marginBottom: "2.5rem",
            }}
          >
            What agents can call
          </h2>
          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              display: "flex",
              flexDirection: "column",
              gap: 0,
            }}
          >
            {tools.map((tool, i) => (
              <li
                key={tool.name}
                style={{
                  paddingTop: i === 0 ? 0 : "1.75rem",
                  paddingBottom: "1.75rem",
                  borderBottom:
                    i === tools.length - 1 ? "none" : "1px solid #27272a",
                }}
              >
                <div
                  style={{
                    ...mono,
                    color: accent,
                    fontSize: "clamp(0.9375rem, 2vw, 1rem)",
                    marginBottom: "0.5rem",
                  }}
                >
                  {tool.name}
                </div>
                <p
                  style={{
                    margin: 0,
                    fontSize: "clamp(0.9375rem, 2vw, 1.0625rem)",
                    lineHeight: 1.6,
                    color: muted,
                    marginBottom: "0.35rem",
                  }}
                >
                  {tool.description}
                </p>
                <span style={{ ...mono, fontSize: "0.875rem", color: "#a1a1aa" }}>
                  {tool.path}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* The Manifest */}
      <section style={{ ...sectionBase, backgroundColor: bgDeep }}>
        <div style={container}>
          <h2
            style={{
              fontFamily: "var(--font-dm-serif), Georgia, serif",
              fontSize: "clamp(1.5rem, 4vw, 2rem)",
              fontWeight: 400,
              margin: 0,
              marginBottom: "1.25rem",
            }}
          >
            Discovery via .well-known
          </h2>
          <p
            style={{
              margin: 0,
              marginBottom: "1.75rem",
              fontSize: "clamp(0.9375rem, 2vw, 1.0625rem)",
              lineHeight: 1.65,
              color: muted,
              maxWidth: "62ch",
            }}
          >
            AI agents that support WebMCP discover available tools via{" "}
            <span style={{ ...mono, color: "#e4e4e7" }}>
              /.well-known/webmcp.json
            </span>
            . This manifest declares all tools, their schemas, endpoints, and
            rate limits.
          </p>
          <pre
            style={{
              ...mono,
              margin: 0,
              marginBottom: "1.75rem",
              padding: "1.25rem 1.25rem",
              backgroundColor: "#050505",
              border: "1px solid #27272a",
              borderRadius: 4,
              fontSize: "clamp(0.7rem, 2.5vw, 0.8125rem)",
              lineHeight: 1.55,
              color: "#d4d4d8",
              overflowX: "auto",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {manifestSnippet}
          </pre>
          <a
            href="/.well-known/webmcp.json"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle(true)}
          >
            View full manifest →
          </a>
        </div>
      </section>

      {/* Why This Matters */}
      <section style={{ ...sectionBase, backgroundColor: "#000000" }}>
        <div style={container}>
          <h2
            style={{
              fontFamily: "var(--font-dm-serif), Georgia, serif",
              fontSize: "clamp(1.5rem, 4vw, 2rem)",
              fontWeight: 400,
              margin: 0,
              marginBottom: "2.25rem",
            }}
          >
            The same architecture we build for clients
          </h2>
          <ol
            style={{
              margin: 0,
              padding: 0,
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
            }}
          >
            {[
              {
                n: 1,
                title: "Control the narrative",
                body: "You decide what information AI systems surface about you. Structured tools mean accurate, authoritative answers — not summaries of whatever the scraper caught.",
              },
              {
                n: 2,
                title: "Reduce agent overhead",
                body: "Every token an AI agent wastes on DOM parsing is a token not spent on reasoning. Clean tool contracts make AI interactions faster and cheaper for everyone.",
              },
              {
                n: 3,
                title: "Future-proof access",
                body: "The WebMCP browser API (W3C Web ML CG, Chrome early preview) will let agents discover and call tools natively in the browser. This manifest is ready for that moment.",
              },
            ].map((item) => (
              <li
                key={item.n}
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "minmax(2.5rem, auto) minmax(0, 1fr)",
                  gap: "clamp(1rem, 3vw, 1.5rem)",
                  alignItems: "start",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-dm-serif), Georgia, serif",
                    fontSize: "clamp(1.75rem, 4vw, 2.25rem)",
                    color: accent,
                    lineHeight: 1,
                  }}
                >
                  {item.n}
                </span>
                <div>
                  <strong
                    style={{
                      display: "block",
                      fontFamily: "var(--font-inter), system-ui, sans-serif",
                      fontSize: "clamp(1rem, 2.3vw, 1.125rem)",
                      fontWeight: 600,
                      color: "#ffffff",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {item.title}
                  </strong>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "clamp(0.9375rem, 2vw, 1.0625rem)",
                      lineHeight: 1.65,
                      color: muted,
                    }}
                  >
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section style={{ ...sectionBase, backgroundColor: bgDeep }}>
        <div style={container}>
          <h2
            style={{
              fontFamily: "var(--font-dm-serif), Georgia, serif",
              fontSize: "clamp(1.5rem, 4vw, 2rem)",
              fontWeight: 400,
              margin: 0,
              marginBottom: "1.25rem",
            }}
          >
            Want this for your site?
          </h2>
          <p
            style={{
              margin: 0,
              marginBottom: "2rem",
              fontSize: "clamp(0.9375rem, 2vw, 1.0625rem)",
              lineHeight: 1.65,
              color: muted,
              maxWidth: "62ch",
            }}
          >
            The same approach works for any web property — e-commerce product
            catalogs, university program directories, SaaS documentation. Define
            the tools your users actually need. Give agents a clean path to the
            answer.
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "1.25rem",
            }}
          >
            <a
              href="https://omar-corral.com/#contact"
              style={{
                display: "inline-block",
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontWeight: 600,
                fontSize: "1rem",
                padding: "0.875rem 1.5rem",
                backgroundColor: accent,
                color: "#000000",
                textDecoration: "none",
                borderRadius: 4,
              }}
            >
              Start a conversation →
            </a>
            <a
              href="https://omac049.github.io/seo-zero-click/"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle(true)}
            >
              See the zero-click research →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
