import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ExternalLink } from 'lucide-react';
import { Animated } from '@/components/ui/animated';

const projects = [
  {
    title: 'PreCASPrep',
    subtitle: 'Web platform for university interview practice',
    description: 'Web platform for university interview practice with expert feedback and progress tracking.',
    image: PlaceHolderImages.find((img) => img.id === 'project-1'),
    tags: ['Problem Research', 'UI/UX Designing', 'Web Application Development'],
    liveUrl: '#',
  },
  {
    title: 'Emirates Secretarial Services (ESS / KBC)',
    subtitle: 'Business setup and government services',
    description: 'Web platform for business setup and government services in Dubai.',
    image: PlaceHolderImages.find((img) => img.id === 'project-2'),
    tags: ['UI/UX Designing', 'Website Development', 'Tracking Configuration'],
    liveUrl: '#',
  },
  {
    title: 'Atlas Document Attestation',
    subtitle: 'Government-approved attestation service',
    description: 'Reliable and government-approved attestation service platform.',
    image: PlaceHolderImages.find((img) => img.id === 'project-3'),
    tags: ['Problem Research', 'Website Development', 'Tracking Configuration'],
    liveUrl: '#',
  },
  {
    title: 'Hidayath Heavy Industry',
    subtitle: 'Digital experience for metal fabrication',
    description: 'Industrial-grade digital experience for a global metal fabrication leader.',
    image: PlaceHolderImages.find((img) => img.id === 'project-1'),
    tags: ['Problem Research', 'Website Development', 'Tracking Configuration'],
    liveUrl: '#',
  },
  {
    title: 'Intertech International Trading',
    subtitle: 'Web solution for a premium glass supplier',
    description: 'Comprehensive web solution for a premium glass supplier.',
    image: PlaceHolderImages.find((img) => img.id === 'project-2'),
    tags: ['Website Development', 'Tracking Configuration'],
    liveUrl: '#',
  },
  {
    title: 'Hello Tara Rose',
    subtitle: 'Personal branding and booking platform',
    description: 'Personal branding and booking platform for an astrologer and life coach.',
    image: PlaceHolderImages.find((img) => img.id === 'project-3'),
    tags: ['UI/UX Designing', 'Website Development', 'Tracking Configuration'],
    liveUrl: '#',
  },
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
    liveUrl: 'https://www.industrialsolution.ae/',
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-16 md:py-24 lg:py-32 overflow-hidden bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <Animated as="div" className="space-y-2 text-center mb-12">
          <h2 className="text-4xl font-bold sm:text-5xl md:text-6xl uppercase tracking-tight">
            My Projects
          </h2>
          <p className="max-w-[700px] mx-auto text-foreground/80 text-base md:text-lg uppercase">
            Here are some of the key projects I've worked on.
          </p>
        </Animated>
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Animated as="div" delay={0.2 * (index + 1)} key={project.title}>
              <Card className="flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-2xl h-full bg-card rounded-lg border-none shadow-lg">
                {project.image && (
                  <div className="overflow-hidden">
                    <Image
                      src={project.image.imageUrl}
                      alt={project.description}
                      width={600}
                      height={400}
                      className="object-cover w-full h-64 transition-transform duration-500 ease-in-out hover:scale-105"
                      data-ai-hint={project.image.imageHint}
                    />
                  </div>
                )}
                <CardContent className="flex-1 p-6 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold uppercase tracking-tight">{project.title}</h3>
                    <p className="text-sm font-medium text-muted-foreground uppercase">{project.subtitle}</p>
                  </div>
                  <p className="text-base text-foreground/80">{project.description}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-sm bg-secondary hover:bg-secondary/80 rounded-md">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
                <div className="p-6 pt-0 flex justify-end">
                  <Button variant="ghost" size="sm" asChild className="text-base text-muted-foreground hover:text-primary">
                    <Link href={project.liveUrl} target="_blank">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Site
                    </Link>
                  </Button>
                </div>
              </Card>
            </Animated>
          ))}
        </div>
      </div>
    </section>
  );
}
