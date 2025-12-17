import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    company: 'Sunniva Solar GMBH',
    role: 'Full Stack Developer',
    period: 'Sep 2024 – May 2025',
    description: 'Architect, develop, and maintain responsive, high-performance web applications and e-commerce platforms. Manage and customize Shopify, WooCommerce, and Magento. Deploy, monitor, and scale applications on AWS and Google Cloud. Design and implement RESTful and GraphQL APIs. Led a team of 10 junior developers, enhancing team productivity by 25%.',
    image: PlaceHolderImages.find((img) => img.id === 'project-1'),
    tags: ['PHP', 'NodeJS', 'Symfony', 'Laravel', 'Java', 'Python', 'AngularJS', 'ReactJS', 'AWS', 'GCP', 'Shopify', 'WooCommerce'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    company: 'Middle East Fuji Group LLC',
    role: 'Full Stack Developer',
    period: 'Jun 2022 - Sep 2024',
    description: 'Designed, developed, and maintained static and e-commerce websites. Managed Shopify and WooCommerce platforms. Deployed and managed applications on AWS and Google Cloud servers. Provided training and mentorship to junior web developers.',
    image: PlaceHolderImages.find((img) => img.id === 'project-2'),
    tags: ['Shopify', 'WooCommerce', 'AWS', 'Google Cloud', 'CodeIgniter', 'MySQL', 'API Integration'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    company: 'BroCrypt',
    role: 'Web Developer',
    period: 'Jan 2018 – Mar 2022',
    description: 'Utilized HTML, CSS, and JavaScript to create 100+ responsive landing pages for clients. Maintained graphic standards and branding. Implemented SEO strategies, increasing acquisition by an average of 200% each month.',
    image: PlaceHolderImages.find((img) => img.id === 'project-3'),
    tags: ['HTML', 'CSS', 'JavaScript', 'SEO'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    company: 'Saninro Tech',
    role: 'Full Stack Developer',
    period: 'Jan 2018 - Jan 2020',
    description: 'Worked with QA to test new pages and products. Rewrote HTML to meet industry standards for SEO and Accessibility. Built user interfaces for hotel systems and developed 3 WordPress sites.',
    image: PlaceHolderImages.find((img) => img.id === 'project-1'), // Re-using an image
    tags: ['HTML', 'SEO', 'Accessibility', 'WordPress', 'UI/UX'],
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
            My Experience
          </h2>
          <p className="max-w-[700px] mx-auto text-foreground/80 md:text-xl">
            A selection of my professional roles and accomplishments.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.company} className="flex flex-col overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
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
                <CardTitle className="text-xl font-bold">{project.role} at {project.company}</CardTitle>
                <p className="text-sm font-medium text-muted-foreground">{project.period}</p>
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
                    <ExternalLink className="mr-2 h-4 w-4" /> Company Site
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
