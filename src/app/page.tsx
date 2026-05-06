import Hero from '@/components/Hero';
import ProofStrip from '@/components/ProofStrip';
import Services from '@/components/Services';
import CaseStudies from '@/components/CaseStudies';
import About from '@/components/About';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="skip-link"
      >
        Skip to main content
      </a>

      <main
        id="main-content"
        role="main"
        aria-label="Omar Corral — Digital Strategist"
        itemScope
        itemType="https://schema.org/Person"
      >
        <Hero />
        <ProofStrip />
        <Services />
        <CaseStudies />
        <About />
        <FAQ />
        <Contact />
      </main>
    </>
  );
}
