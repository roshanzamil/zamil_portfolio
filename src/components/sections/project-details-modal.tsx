import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, CheckCircle } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

export type Project = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  details: {
    longDescription: string;
    keyFeatures: string[];
    technologies: string[];
  };
};

type ProjectDetailsModalProps = {
  project: Project;
};

export function ProjectDetailsModal({ project }: ProjectDetailsModalProps) {
  return (
    <DialogContent className="max-w-4xl max-h-[90svh] flex flex-col">
      <DialogHeader className='pr-6'>
        <DialogTitle className="text-3xl font-bold font-headline">{project.title}</DialogTitle>
        <DialogDescription className="text-lg text-muted-foreground">{project.subtitle}</DialogDescription>
      </DialogHeader>
      <ScrollArea className="flex-1 -mx-6">
        <div className="px-6">
          <div className="relative aspect-video rounded-md overflow-hidden mb-6">
            <Image src={project.image} alt={project.title} fill className="object-cover" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2">About the Project</h3>
                <p className="text-base text-foreground/80">{project.details.longDescription}</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {project.details.keyFeatures.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-base text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.details.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </div>
               <div>
                <h3 className="text-xl font-bold mb-3">Project Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
              </div>
              {project.liveUrl && project.liveUrl !== '#' && (
                <div>
                  <h3 className="text-xl font-bold mb-3">Live Site</h3>
                  <Button asChild className='w-full'>
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Project
                    </Link>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </ScrollArea>
    </DialogContent>
  );
}
