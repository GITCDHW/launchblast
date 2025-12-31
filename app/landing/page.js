import Hero from '@/components/Hero';
import Features from '@/components/Features';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </main>
  );
}
