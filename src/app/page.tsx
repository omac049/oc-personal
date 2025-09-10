import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import ScrollRocket from '@/components/ScrollRocket';
import FloatingNav from '@/components/FloatingNav';

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <ScrollRocket />
      <FloatingNav />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
