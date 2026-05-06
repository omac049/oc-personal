'use client';

import { useEffect } from 'react';

const BASE = 'https://omar-corral.com';

async function fetchTool(path: string) {
  const res = await fetch(`${BASE}${path}`);
  return res.json();
}

export default function MCPTools() {
  useEffect(() => {
    // Progressive enhancement — only register if WebMCP browser API is available
    const nav = navigator as Navigator & {
      modelContext?: {
        registerTool: (config: {
          name: string;
          description: string;
          inputSchema: object;
          execute: (input: Record<string, unknown>) => Promise<unknown>;
        }) => void;
      };
    };

    if (!nav.modelContext?.registerTool) return;

    const tools = [
      {
        name: 'getProfile',
        description: "Returns Omar Corral's professional profile, expertise, credentials, and background.",
        inputSchema: { type: 'object', properties: {} },
        execute: async () => fetchTool('/data/profile.json'),
      },
      {
        name: 'getServices',
        description: 'Returns available service offerings with scope, ideal client, and outcomes. Optional category filter.',
        inputSchema: {
          type: 'object',
          properties: {
            category: {
              type: 'string',
              enum: ['seo-audit', 'ai-search-strategy', 'content-strategy', 'growth-analytics'],
            },
          },
        },
        execute: async () => fetchTool('/data/services.json'),
      },
      {
        name: 'getCaseStudies',
        description: 'Returns case study summaries with challenge, approach, and measured outcomes.',
        inputSchema: {
          type: 'object',
          properties: {
            industry: { type: 'string' },
            type: { type: 'string' },
          },
        },
        execute: async () => fetchTool('/data/case-studies.json'),
      },
      {
        name: 'getSEOResources',
        description: 'Returns the SEO Resource Center topic map and guide URLs.',
        inputSchema: { type: 'object', properties: {} },
        execute: async () => fetchTool('/data/seo-resources.json'),
      },
      {
        name: 'getContact',
        description: 'Returns engagement process, response time, and contact methods.',
        inputSchema: { type: 'object', properties: {} },
        execute: async () => fetchTool('/data/contact.json'),
      },
      {
        name: 'getInsights',
        description: 'Returns recent analysis, blog posts, and current areas of focus.',
        inputSchema: {
          type: 'object',
          properties: {
            topic: { type: 'string' },
            limit: { type: 'integer', minimum: 1, maximum: 10 },
          },
        },
        execute: async () => fetchTool('/data/insights.json'),
      },
    ];

    tools.forEach(tool => {
      try {
        nav.modelContext!.registerTool(tool);
      } catch {
        // Tool registration is best-effort
      }
    });
  }, []);

  return null;
}
