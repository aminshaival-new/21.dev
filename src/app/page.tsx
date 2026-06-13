import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import About from '@/components/About';
import Services from '@/components/Services';
import Classes from '@/components/Classes';
import Team from '@/components/Team';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="noise-overlay">
      <Hero />
      <StatsBar />
      <About />
      <Services />
      <Classes />
      <Team />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}
