import { Metadata } from 'next';
import { generateMetadata as createSEOMetadata } from '@/utils/seo';
import ServicesPageContent from './ServicesPageContent';

export const metadata: Metadata = createSEOMetadata({
  title: 'Services — SEO Audit, AI Search Strategy & Growth Analytics',
  description:
    'Comprehensive SEO services: technical audits, AI search optimization for ChatGPT and Google AI Overviews, and growth analytics tied to revenue.',
  alternates: { canonical: 'https://omar-corral.com/services/' },
});

export default function ServicesPage() {
  return <ServicesPageContent />;
}
