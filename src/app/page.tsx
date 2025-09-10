import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import ScrollRocket from '@/components/ScrollRocket';

export default function Home() {
  return (
    <main className="min-h-screen relative bg-slate-900">
      <ScrollRocket />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
