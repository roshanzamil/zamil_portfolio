import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Animated } from '@/components/ui/animated';
import { ProjectDetailsModal, type Project } from './project-details-modal';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';

const projects: Project[] = [
  {
    title: 'PreCASPrep',
    subtitle: 'Web platform for university interview practice',
    description: 'Web platform for university interview practice with expert feedback and progress tracking.',
    image: PlaceHolderImages.find((img) => img.id === 'precasprep')?.imageUrl || '',
    tags: ['Problem Research', 'UI/UX Designing', 'Web Application Development'],
    liveUrl: '#',
    details: {
      longDescription: "PreCASPrep is a specialized web platform designed to help university applicants practice for their admissions interviews. It provides a realistic interview simulation, connects users with subject matter experts for personalized feedback, and offers robust tools for tracking progress over time. The goal is to build confidence and significantly improve interview performance.",
      keyFeatures: [
        "Realistic video interview simulations",
        "Expert feedback and scoring rubric",
        "Progress tracking and performance analytics",
        "Library of common interview questions"
      ],
      technologies: ["ReactJS", "Node.js", "MongoDB", "WebRTC", "Stripe API"]
    }
  },
  {
    title: 'Emirates Secretarial Services (ESS / KBC)',
    subtitle: 'Business setup and government services',
    description: 'Web platform for business setup and government services in Dubai.',
    image: PlaceHolderImages.find((img) => img.id === 'ess')?.imageUrl || '',
    tags: ['UI/UX Designing', 'Website Development', 'Tracking Configuration'],
    liveUrl: '#',
    details: {
      longDescription: "This platform serves as a digital one-stop-shop for entrepreneurs looking to establish their business in Dubai. It simplifies the complex process of company formation, visa applications, and other government services by providing a clear, step-by-step online workflow, document management, and real-time status updates.",
      keyFeatures: [
        "Guided business setup wizard",
        "Secure document upload and management",
        "Online payment processing for services",
        "Real-time application status tracking"
      ],
      technologies: ["Laravel", "MySQL", "Vue.js", "Google Cloud", "Git"]
    }
  },
  {
    title: 'Atlas Document Attestation',
    subtitle: 'Government-approved attestation service',
    description: 'Reliable and government-approved attestation service platform.',
    image: PlaceHolderImages.find((img) => img.id === 'atlas')?.imageUrl || '',
    tags: ['Problem Research', 'Website Development', 'Tracking Configuration'],
    liveUrl: '#',
    details: {
      longDescription: "Atlas Document Attestation provides a seamless online portal for individuals and businesses to get their documents legally attested for use in the UAE and abroad. The platform streamlines the entire process, from document submission and payment to tracking and secure delivery, minimizing paperwork and delays.",
      keyFeatures: [
        "Online document submission and verification",
        "Integration with multiple government attestation bodies",
        "Secure payment gateway",
        "Door-to-door courier service integration"
      ],
      technologies: ["PHP", "CodeIgniter", "JavaScript", "MySQL", "API Integration"]
    }
  },
  {
    title: 'Hidayath Heavy Industry',
    subtitle: 'Digital experience for metal fabrication',
    description: 'Industrial-grade digital experience for a global metal fabrication leader.',
    image: PlaceHolderImages.find((img) => img.id === 'hidayath')?.imageUrl || '',
    tags: ['Problem Research', 'Website Development', 'Tracking Configuration'],
    liveUrl: 'https://www.industrialsolution.ae/',
    details: {
      longDescription: "A comprehensive B2B digital platform for a global leader in metal fabrication. The website showcases their extensive capabilities, project portfolio, and technical specifications, serving as a vital tool for sales, marketing, and client communication in the heavy industrial sector.",
      keyFeatures: [
        "Extensive project portfolio gallery",
        "Detailed service and capability showcase",
        "Request for Quote (RFQ) and contact forms",
        "SEO optimization for industrial keywords"
      ],
      technologies: ["WordPress", "HTML5", "CSS3", "JavaScript", "SEO"]
    }
  },
  {
    title: 'Hello Tara Rose',
    subtitle: 'Personal branding and booking platform',
    description: 'Personal branding and booking platform for an astrologer and life coach.',
    image: PlaceHolderImages.find((img) => img.id === 'hellotararose')?.imageUrl || '',
    tags: ['UI/UX Designing', 'Website Development', 'Tracking Configuration'],
    liveUrl: '#',
    details: {
      longDescription: "A personal branding website and client management portal for a professional astrologer and life coach. The platform effectively communicates her brand, services, and philosophy while providing an integrated booking and payment system for her clients worldwide.",
      keyFeatures: [
        "Online booking and scheduling system",
        "E-commerce for digital products and services",
        "Blog and content management system",
        "Client testimonial and portfolio sections"
      ],
      technologies: ["Shopify", "Liquid", "JavaScript", "Figma"]
    }
  },
  {
    title: 'Human Resource Management System (HRMS)',
    subtitle: 'Odoo, SAP, Custom HR Modules',
    description: 'Developed and implemented a comprehensive HRMS to manage employee lifecycle, payroll, and performance tracking. Integrated internal systems like Oracle, Odoo, and SAP to streamline cross-functional workflows.',
    image: PlaceHolderImages.find((img) => img.id === 'hrms')?.imageUrl || '',
    tags: ['Odoo', 'HRMS', 'Python', 'System Design', 'Oracle', 'SAP'],
    liveUrl: '#',
    details: {
      longDescription: 'This comprehensive Human Resource Management System was engineered to unify and automate all aspects of employee management for Middle East Fuji. It integrates disparate systems like Oracle, Odoo, and SAP, creating a single source of truth for the entire employee lifecycle—from recruitment and onboarding to payroll, performance reviews, and offboarding.',
      keyFeatures: [
        'Centralized employee database',
        'Automated payroll and benefits administration',
        'Performance management and appraisal workflows',
        'Seamless integration with Oracle, Odoo, and SAP',
      ],
      technologies: ['Python', 'Odoo', 'SAP Integration', 'Oracle DB', 'XML-RPC', 'JavaScript']
    }
  },
  {
    title: 'Warehouse Management System',
    subtitle: 'Odoo, AS400',
    description: "Streamlined Middle East Fuji's end-to-end business workflow—from data upload in Dubai to order processing in the Philippines, quotation approval, warehouse fulfillment, and final delivery via logistics.",
    image: PlaceHolderImages.find((img) => img.id === 'wms')?.imageUrl || '', 
    tags: ['Odoo', 'AS400', 'Workflow Automation'],
    liveUrl: '#',
    details: {
      longDescription: "This WMS automated the entire supply chain for Middle East Fuji. The system managed a complex international workflow, starting from data uploads in Dubai, routing orders to the Philippines for processing, managing quotation approvals, and coordinating with the warehouse and logistics for final delivery. The integration with legacy AS400 systems was a key challenge overcome in this project.",
      keyFeatures: [
        "End-to-end workflow automation",
        "Real-time inventory and order tracking",
        "Integration with legacy AS400 systems",
        "Automated quotation and approval process"
      ],
      technologies: ["Odoo", "Python", "AS400/DB2", "XML", "JavaScript"]
    }
  },
  {
    title: 'Diaflower',
    subtitle: 'E-commerce Flower Shop',
    description: 'A beautiful online store for a flower shop.',
    image: PlaceHolderImages.find((img) => img.id === 'diaflower')?.imageUrl || '',
    tags: ['E-commerce', 'UI/UX'],
    liveUrl: 'https://diaflower.com',
    details: {
      longDescription: 'Diaflower is a visually-driven e-commerce platform for a boutique flower shop. The site focuses on high-quality imagery and a simple, elegant user experience to make ordering flowers online a delightful experience. It includes features for occasion-based filtering, custom bouquets, and a streamlined checkout process.',
      keyFeatures: [
        'Visually-rich product catalog',
        'Custom bouquet builder',
        'Scheduled delivery options',
        'Secure online payment integration',
      ],
      technologies: ['Shopify', 'Liquid', 'JavaScript', 'CSS3', 'Figma'],
    }
  },
  {
    title: 'Uber E-Visa',
    subtitle: 'Visa Service Platform',
    description: 'A comprehensive platform for online visa application and processing, offering services for visit visas, pick & drop, cruises, and resort bookings.',
    image: PlaceHolderImages.find((img) => img.id === 'uber-evisa')?.imageUrl || '',
    tags: ['Visa Services', 'Web Application', 'Automation'],
    liveUrl: '#',
    details: {
      longDescription: 'Uber E-Visa is an all-in-one portal designed to simplify the visa application process. It offers a user-friendly interface to apply for various types of visas, book associated travel services like pick & drop, and even explore leisure options such as cruises and resorts. The platform automates much of the application workflow to ensure speed and accuracy.',
      keyFeatures: [
        'Dynamic visa application forms',
        'Secure document and photo uploads',
        'Integrated booking for travel and leisure services',
        'Automated status updates and notifications',
      ],
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'REST API'],
    }
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
              <Dialog>
                <DialogTrigger asChild>
                  <Card className="group flex flex-col overflow-hidden h-full bg-card rounded-lg border border-transparent hover:border-primary/50 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
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
                  </Card>
                </DialogTrigger>
                <ProjectDetailsModal project={project} />
              </Dialog>
            </Animated>
          ))}
        </div>
      </div>
    </section>
  );
}
