import dynamic from 'next/dynamic';
import DevHero from '@/components/dev/Hero';
import SignalFlowClient from '@/components/dev/SignalFlowClient';

const PhilosophyStrip = dynamic(
  () => import('@/components/dev/PhilosophyStrip'),
);
const DevServices = dynamic(() => import('@/components/dev/Services'));
const DevCaseStudies = dynamic(() => import('@/components/dev/CaseStudies'));
const DevResourcesCTA = dynamic(() => import('@/components/dev/ResourcesCTA'));
const Beliefs = dynamic(() => import('@/components/dev/Beliefs'));
const WhatImLearning = dynamic(
  () => import('@/components/dev/WhatImLearning'),
);
const DevFAQ = dynamic(() => import('@/components/dev/FAQ'));
const DevContact = dynamic(() => import('@/components/dev/Contact'));

export default function DevHome() {
  return (
    <>
      <SignalFlowClient />

      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <main
        id="main-content"
        role="main"
        aria-label="Omar Corral — SEO Strategist"
        itemScope
        itemType="https://schema.org/Person"
        className="relative z-[1]"
      >
        <DevHero />
        <PhilosophyStrip />
        <DevServices />
        <DevCaseStudies />
        <DevResourcesCTA />
        <Beliefs />
        <WhatImLearning />
        <DevFAQ />
        <DevContact />
      </main>
    </>
  );
}
