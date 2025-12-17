import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero';
import AiSuggesterSection from '@/components/sections/ai-suggester';

export default function Home() {
  return (
    <div className="flex flex-col min-h-svh">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AiSuggesterSection />
      </main>
      <Footer />
    </div>
  );
}
