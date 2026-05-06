import { Metadata } from 'next';
import MCPPageClient from './MCPPageClient';

export const metadata: Metadata = {
  title: 'OC MCP — The Front Door for AI Agents | Omar Corral',
  description:
    'How omar-corral.com built an AI-agent-native web layer: 6 typed tools, .well-known manifest, dual-layer scraper defense. The complete architecture brief.',
  alternates: { canonical: 'https://omar-corral.com/oc-mcp/' },
  openGraph: {
    title: 'OC MCP — The Front Door for AI Agents',
    description:
      'Complete architecture brief: authorized tool access + scraper defense. Live on omar-corral.com.',
  },
};

export default function OcMcpPage() {
  return <MCPPageClient />;
}
