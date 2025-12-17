import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function AboutSection() {
  const aboutImage = PlaceHolderImages.find((img) => img.id === 'about-image');

  return (
    <section id="about" className="w-full py-16 md:py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
              About Me
            </h2>
            <div className="text-foreground/80 space-y-4 text-base md:text-lg">
              <p>
                Hello! I'm Roshan, a dedicated web developer with a passion for building beautiful and functional websites and applications. My journey into code started years ago, and since then, I've been honing my skills in both front-end and back-end technologies.
              </p>
              <p>
                I thrive on solving complex problems and turning ideas into reality. I'm proficient in a range of technologies, including React, Node.js, and modern JavaScript, and I'm always eager to learn more. When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and grabbing a good cup of coffee.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            {aboutImage && (
              <Card className="overflow-hidden shadow-xl">
                <CardContent className="p-0">
                  <Image
                    src={aboutImage.imageUrl}
                    alt={aboutImage.description}
                    width={600}
                    height={400}
                    className="object-cover w-full h-auto"
                    data-ai-hint={aboutImage.imageHint}
                  />
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
