import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Animated } from '@/components/ui/animated';

export default function AboutSection() {
  const aboutImage = PlaceHolderImages.find((img) => img.id === 'about-image');

  return (
    <section id="about" className="w-full py-16 md:py-24 lg:py-32 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <Animated as="div" className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
              About Me
            </h2>
            <div className="text-foreground/80 space-y-4 text-base md:text-lg">
              <p>
                I am an accomplished Full Stack Developer and E-Commerce Specialist. I have successfully developed a million-euro web application that increased revenue by 35%, improved customer engagement by 50%, and optimized conversion rates by 30% using sales funnel techniques. 
              </p>
              <p>
                Skilled in PHP, NodeJS, Symfony, Laravel, Java, Python, AngularJS, ReactJS, and cloud infrastructure, with expertise in API integrations, DevOps, CI/CD pipelines, and database performance optimization. I have a proven ability to lead cross-functional teams, streamline development processes, and deliver scalable, high-performing applications.
              </p>
            </div>
          </Animated>
          <Animated as="div" delay={0.2} x={50} className="flex justify-center">
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
          </Animated>
        </div>
      </div>
    </section>
  );
}
