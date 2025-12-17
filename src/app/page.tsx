import HeroSection from '@/components/sections/hero';
import AiAssistantSection from '@/components/sections/ai-assistant';

export default function Home() {
  return (
    <main className="flex-1">
      <HeroSection />
      <AiAssistantSection />
    </main>
  );
}
