import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
  const avatar = PlaceHolderImages.find((img) => img.id === 'roshan-avatar');

  return (
    <section id="home" className="relative w-full h-[calc(100svh-4rem)] flex items-center justify-center">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="flex flex-col items-center space-y-6">
          {avatar && (
            <Image
              src={avatar.imageUrl}
              alt={avatar.description}
              width={144}
              height={144}
              className="rounded-full object-cover border-4 border-primary shadow-lg"
              data-ai-hint={avatar.imageHint}
              priority
            />
          )}
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline text-primary">
              Roshan
            </h1>
            <p className="max-w-[700px] mx-auto text-foreground/80 md:text-xl">
              A passionate Web Developer specializing in creating modern, responsive, and user-friendly web applications.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg">
              <Link href="#contact">Contact Me</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#projects">View My Work <ArrowDown className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
