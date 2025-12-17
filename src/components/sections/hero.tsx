import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, Download, Sparkles } from 'lucide-react';
import { Animated } from '@/components/ui/animated';

export default function HeroSection() {
  const avatar = PlaceHolderImages.find((img) => img.id === 'roshan-avatar');

  return (
    <section id="home" className="relative w-full min-h-[calc(100svh-4rem)] flex flex-col justify-center py-16 sm:py-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="flex flex-col items-center space-y-6">
          {avatar && (
            <Animated as="div" delay={0.2}>
              <Image
                src={avatar.imageUrl}
                alt={avatar.description}
                width={256}
                height={256}
                className="rounded-full object-cover border-4 border-primary shadow-lg"
                data-ai-hint={avatar.imageHint}
                priority
                unoptimized
              />
            </Animated>
          )}
          <div className="space-y-2">
            <Animated as="h1" delay={0.3} className="text-5xl font-bold sm:text-6xl md:text-7xl lg:text-8xl text-primary font-headline">
              Roshan Zamil Moulana
            </Animated>
            <Animated as="p" delay={0.4} className="max-w-[700px] mx-auto text-foreground/80 text-lg md:text-xl font-headline">
              Full Stack Developer – E-Commerce Specialist
            </Animated>
            <Animated as="p" delay={0.5} className="max-w-[700px] mx-auto text-foreground/80 text-base md:text-lg pt-4">
              I am an accomplished Full Stack Developer and E-Commerce Specialist. I have successfully developed a million-euro web application that increased revenue by 35% and improved customer engagement by 50%.
            </Animated>
          </div>
          <Animated as="div" delay={0.6} className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="text-base">
              <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4" /> Latest Resume
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base">
               <Link href="#ai-assistant">
                <Sparkles className="mr-2 h-4 w-4" /> My Assistant
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base">
              <Link href="/projects">
                View My Work <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </Animated>
        </div>
      </div>
    </section>
  );
}
