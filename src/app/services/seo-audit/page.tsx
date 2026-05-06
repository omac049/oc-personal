import { Metadata } from 'next';
import { generateMetadata as createSEOMetadata } from '@/utils/seo';
import SeoAuditPageContent from './SeoAuditPageContent';

export const metadata: Metadata = createSEOMetadata({
  title: 'SEO Audit & Strategy',
  description:
    'Comprehensive technical and content SEO audit with a prioritized 90-day strategy tied to business outcomes. Core Web Vitals, indexation, content gaps, and competitive analysis.',
  alternates: { canonical: 'https://omar-corral.com/services/seo-audit/' },
});

export default function SeoAuditPage() {
  return <SeoAuditPageContent />;
}
