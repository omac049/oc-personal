import { Metadata } from 'next';
import { generateMetadata as createSEOMetadata } from '@/utils/seo';
import CaseStudiesPageContent from './CaseStudiesPageContent';

export const metadata: Metadata = createSEOMetadata({
  title: 'Case Studies — Real SEO & AI Search Results',
  description:
    'Real results from SEO and AI search strategy engagements. E-commerce traffic growth, AI platform citations, and revenue attribution from organic search.',
  alternates: { canonical: 'https://omar-corral.com/case-studies/' },
});

export default function CaseStudiesPage() {
  return <CaseStudiesPageContent />;
}
