import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
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
    image: PlaceHolderImages.find((img) => img.id === 'precasprep')?.imageUrl || '',
    tags: ['Problem Research', 'UI/UX Designing', 'Web Application Development'],
    liveUrl: '#',
  },
  {
    title: 'Emirates Secretarial Services (ESS / KBC)',
    subtitle: 'Business setup and government services',
    description: 'Web platform for business setup and government services in Dubai.',
    image: PlaceHolderImages.find((img) => img.id === 'ess')?.imageUrl || '',
    tags: ['UI/UX Designing', 'Website Development', 'Tracking Configuration'],
    liveUrl: '#',
  },
  {
    title: 'Atlas Document Attestation',
    subtitle: 'Government-approved attestation service',
    description: 'Reliable and government-approved attestation service platform.',
    image: PlaceHolderImages.find((img) => img.id === 'atlas')?.imageUrl || '',
    tags: ['Problem Research', 'Website Development', 'Tracking Configuration'],
    liveUrl: '#',
  },
  {
    title: 'Hidayath Heavy Industry',
    subtitle: 'Digital experience for metal fabrication',
    description: 'Industrial-grade digital experience for a global metal fabrication leader.',
    image: PlaceHolderImages.find((img) => img.id === 'hidayath')?.imageUrl || '',
    tags: ['Problem Research', 'Website Development', 'Tracking Configuration'],
    liveUrl: 'https://www.industrialsolution.ae/',
  },
  {
    title: 'Hello Tara Rose',
    subtitle: 'Personal branding and booking platform',
    description: 'Personal branding and booking platform for an astrologer and life coach.',
    image: PlaceHolderImages.find((img) => img.id === 'hellotararose')?.imageUrl || '',
    tags: ['UI/UX Designing', 'Website Development', 'Tracking Configuration'],
    liveUrl: '#',
  },
  {
    title: 'Middle East Fuji Group',
    subtitle: 'Oracle, Odoo, SAP, Cloud Infrastructure',
    description: 'Customized and integrated internal systems to streamline cross-functional workflows across departments.',
    image: PlaceHolderImages.find((img) => img.id === 'mefg')?.imageUrl || '',
    tags: ['Oracle', 'Odoo', 'SAP', 'Cloud Infrastructure'],
    liveUrl: '#',
  },
  {
    title: 'Warehouse Management System',
    subtitle: 'Odoo, AS400',
    description: "Streamlined Middle East Fuji's end-to-end business workflow—from data upload in Dubai to order processing in the Philippines, quotation approval, warehouse fulfillment, and final delivery via logistics.",
    image: PlaceHolderImages.find((img) => img.id === 'wms')?.imageUrl || '', 
    tags: ['Odoo', 'AS400', 'Workflow Automation'],
    liveUrl: '#',
  },
  {
    title: 'Diaflower',
    subtitle: 'E-commerce Flower Shop',
    description: 'A beautiful online store for a flower shop.',
    image: PlaceHolderImages.find((img) => img.id === 'diaflower')?.imageUrl || '',
    tags: ['E-commerce', 'UI/UX'],
    liveUrl: 'https://diaflower.com',
  },
  {
    title: 'Uber E-Visa',
    subtitle: 'Visa Service Platform',
    description: 'A comprehensive platform for online visa application and processing, offering services for visit visas, pick & drop, cruises, and resort bookings.',
    image: PlaceHolderImages.find((img) => img.id === 'uber-evisa')?.imageUrl || '',
    tags: ['Visa Services', 'Web Application', 'Automation'],
    liveUrl: '#',
  },
  {
    title: 'Human Resource Management System (HRMS)',
    subtitle: 'Odoo, Custom HR Modules',
    description: 'Developed and implemented a comprehensive HRMS to manage employee lifecycle, payroll, and performance tracking.',
    image: PlaceHolderImages.find((img) => img.id === 'hrms')?.imageUrl || '',
    tags: ['Odoo', 'HRMS', 'Python', 'System Design'],
    liveUrl: '#',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-16 md:py-24 lg:py-32 overflow-hidden bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <Animated as="div" className="space-y-2 text-center mb-12">
          <h2 className="text-4xl font-bold sm:text-5xl md:text-6xl uppercase tracking-tight">
            My Projects
          </h2>
          <p className="max-w-[700px] mx-auto text-foreground/80 text-base md:text-lg uppercase">
            Here are some of the key projects I've worked on.
          </p>
        </Animated>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Animated as="div" delay={0.1 * (index % 3)} key={`${project.title}-${index}`}>
              <Card className="group flex flex-col overflow-hidden h-full bg-card rounded-lg border border-transparent hover:border-primary/50 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                {project.image && (
                  <div className="overflow-hidden aspect-video">
                    <Image
                      src={project.image}
                      alt={project.description}
                      width={600}
                      height={400}
                      className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
                    />
                  </div>
                )}
                <CardContent className="flex flex-col flex-1 p-6 space-y-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold tracking-tight">{project.title}</h3>
                    <p className="text-sm font-medium text-muted-foreground">{project.subtitle}</p>
                    <p className="text-base text-foreground/80 mt-3">{project.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-sm bg-secondary hover:bg-secondary/80 rounded-md">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button variant="ghost" size="sm" asChild className="text-base text-muted-foreground hover:text-primary">
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Site
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </Animated>
          ))}
        </div>
      </div>
    </section>
  );
}
