import HeroSection from '@/components/sections/hero';
import AiSuggesterSection from '@/components/sections/ai-suggester';

export default function Home() {
  return (
    <main className="flex-1">
      <HeroSection />
      <AiSuggesterSection />
    </main>
  );
}
