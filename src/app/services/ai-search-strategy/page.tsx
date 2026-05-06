import { Metadata } from 'next';
import { generateMetadata as createSEOMetadata } from '@/utils/seo';
import AiSearchStrategyPageContent from './AiSearchStrategyPageContent';

export const metadata: Metadata = createSEOMetadata({
  title: 'AI Search Strategy',
  description:
    'Get your brand cited by ChatGPT, Perplexity, Google AI Overviews, and Gemini. Entity optimization, structured data, and LLM-readability content strategy.',
  alternates: { canonical: 'https://omar-corral.com/services/ai-search-strategy/' },
});

export default function AiSearchStrategyPage() {
  return <AiSearchStrategyPageContent />;
}
