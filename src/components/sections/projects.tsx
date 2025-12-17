import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce site with product listings, a shopping cart, and a secure checkout process. Built with Next.js and Stripe.',
    image: PlaceHolderImages.find((img) => img.id === 'project-1'),
    tags: ['Next.js', 'React', 'TypeScript', 'Stripe', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Task Management App',
    description: 'A responsive task management application with drag-and-drop functionality to organize tasks across different boards.',
    image: PlaceHolderImages.find((img) => img.id === 'project-2'),
    tags: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Personal Blog',
    description: 'A statically generated blog using Next.js and Markdown for content. Features dark mode and fast performance.',
    image: PlaceHolderImages.find((img) => img.id === 'project-3'),
    tags: ['Next.js', 'Markdown', 'TypeScript', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            My Projects
          </h2>
          <p className="max-w-[700px] mx-auto text-foreground/80 md:text-xl">
            Here are some of the projects I'm proud to have worked on.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              {project.image && (
                <CardHeader className="p-0">
                  <Image
                    src={project.image.imageUrl}
                    alt={project.description}
                    width={600}
                    height={400}
                    className="object-cover w-full h-48"
                    data-ai-hint={project.image.imageHint}
                  />
                </CardHeader>
              )}
              <CardContent className="flex-1 p-6 space-y-3">
                <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex justify-end gap-2">
                <Button variant="outline" size="sm" asChild>
                  <Link href={project.liveUrl} target="_blank">
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href={project.githubUrl} target="_blank">
                    <Github className="mr-2 h-4 w-4" /> Source
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
