import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Middle East Fuji Group',
    subtitle: 'Oracle, Odoo, SAP, Cloud Infrastructure',
    description: 'Customized and integrated internal systems to streamline cross-functional workflows across departments.',
    image: PlaceHolderImages.find((img) => img.id === 'project-1'),
    tags: ['Oracle', 'Odoo', 'SAP', 'Cloud Infrastructure'],
    liveUrl: '#',
  },
  {
    title: 'Sunniva Solar – Vendomnia Trading',
    subtitle: 'Shopware, React, PHP Frameworks',
    description: 'Led a cross-functional team to develop plugins for integrating Amazon, eBay, Kaufland, and Otto marketplaces.',
    image: PlaceHolderImages.find((img) => img.id === 'project-2'),
    tags: ['Shopware', 'React', 'PHP', 'Amazon', 'eBay', 'Kaufland', 'Otto'],
    liveUrl: 'https://vendomnia.com',
  },
  {
    title: 'E-commerce Web Store',
    subtitle: 'JSON API, Google SDK, AWS',
    description: 'An online store using PHP, JS, MySQL, and AWS hosting. Live order tracking and secure payments via NETWORK.AE.',
    image: PlaceHolderImages.find((img) => img.id === 'project-3'),
    tags: ['PHP', 'JavaScript', 'MySQL', 'AWS', 'JSON API'],
    liveUrl: 'https://asgharfurniture.ae',
  },
  {
    title: 'Warehouse Management System',
    subtitle: 'Odoo, AS400',
    description: "Streamlined Middle East Fuji's end-to-end business workflow—from data upload in Dubai to order processing in the Philippines, quotation approval, warehouse fulfillment, and final delivery via logistics.",
    image: PlaceHolderImages.find((img) => img.id === 'project-1'), // Re-using an image
    tags: ['Odoo', 'AS400', 'Workflow Automation'],
    liveUrl: '#',
  },
    {
    title: 'Diaflower',
    subtitle: 'E-commerce Flower Shop',
    description: 'A beautiful online store for a flower shop.',
    image: PlaceHolderImages.find((img) => img.id === 'project-2'), // Re-using an image
    tags: ['E-commerce', 'UI/UX'],
    liveUrl: 'https://diaflower.com',
  },
  {
    title: 'Industrial Solution',
    subtitle: 'Industrial Supply E-commerce',
    description: 'A B2B platform for industrial solutions and supplies.',
    image: PlaceHolderImages.find((img) => img.id === 'project-3'), // Re-using an image
    tags: ['B2B', 'E-commerce', 'Industrial'],
    liveUrl: 'https://industrialsolution.ae',
  }
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
            Here are some of the key projects I've worked on.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
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
                <p className="text-sm font-medium text-muted-foreground">{project.subtitle}</p>
                <CardDescription className="text-sm text-foreground/80">{project.description}</CardDescription>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex justify-end gap-2">
                <Button variant="outline" size="sm" asChild>
                  <Link href={project.liveUrl} target="_blank">
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Site
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
