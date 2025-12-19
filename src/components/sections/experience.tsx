import { Badge } from '@/components/ui/badge';
import { Briefcase } from 'lucide-react';
import { Animated } from '@/components/ui/animated';

const experiences = [
  {
    company: 'Sunniva Solar GMBH',
    role: 'Senior Software developer',
    period: 'Sep 2024 – May 2025',
    description: 'Architect, develop, and maintain responsive, high-performance web applications and e-commerce platforms. Manage and customize Shopify, WooCommerce, and Magento. Deploy, monitor, and scale applications on AWS and Google Cloud. Design and implement RESTful and GraphQL APIs. Led a team of 10 junior developers, enhancing team productivity by 25%.',
    tags: ['PHP', 'NodeJS', 'Symfony', 'Laravel', 'Java', 'Python', 'AngularJS', 'ReactJS', 'AWS', 'GCP', 'Shopify', 'WooCommerce'],
  },
  {
    company: 'Middle East Fuji Group LLC',
    role: 'Full Stack Developer',
    period: 'Jun 2022 - Sep 2024',
    description: 'Designed, developed, and maintained static and e-commerce websites. Managed Shopify and WooCommerce platforms. Deployed and managed applications on AWS and Google Cloud servers. Provided training and mentorship to junior web developers.',
    tags: ['Shopify', 'WooCommerce', 'AWS', 'Google Cloud', 'CodeIgniter', 'MySQL', 'API Integration'],
  },
  {
    company: 'BroCrypt',
    role: 'Web Developer',
    period: 'Jan 2018 – Mar 2022',
    description: 'Utilized HTML, CSS, and JavaScript to create 100+ responsive landing pages for clients. Maintained graphic standards and branding. Implemented SEO strategies, increasing acquisition by an average of 200% each month.',
    tags: ['HTML', 'CSS', 'JavaScript', 'SEO'],
  },
  {
    company: 'Saninro Tech',
    role: 'Full Stack Developer',
    period: 'Jan 2018 - Jan 2020',
    description: 'Worked with QA to test new pages and products. Rewrote HTML to meet industry standards for SEO and Accessibility. Built user interfaces for hotel systems and developed 3 WordPress sites.',
    tags: ['HTML', 'SEO', 'Accessibility', 'WordPress', 'UI/UX'],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="w-full py-16 md:py-24 lg:py-32 overflow-hidden bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <Animated as="div" className="space-y-4 text-center mb-12">
          <h2 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            My Experience
          </h2>
          <p className="max-w-[700px] mx-auto text-foreground/80 text-base md:text-lg">
            A timeline of my professional roles and accomplishments.
          </p>
        </Animated>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 md:left-1/2 -ml-px w-0.5 h-full bg-border" aria-hidden="true"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <Animated key={experience.company} delay={0.2 * (index + 1)} className="relative flex items-start md:items-center md:justify-normal md:odd:flex-row-reverse group">
                {/* Icon in the middle */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-primary bg-background text-primary absolute left-0 md:left-1/2 -translate-x-1/2 z-10">
                  <Briefcase className="w-5 h-5" />
                </div>
                
                {/* Content */}
                <div className="w-full pl-16 md:pl-0 md:w-[calc(50%-2.5rem)] space-y-3">
                  <div className="bg-card p-6 rounded-lg shadow-md border border-border/50">
                    <h3 className="text-2xl font-bold text-primary">{experience.role}</h3>
                    <p className="font-semibold text-lg">{experience.company}</p>
                    <p className="text-sm text-muted-foreground mb-3">{experience.period}</p>
                    <p className="text-base text-foreground/80 mb-4">{experience.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {experience.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-sm">{tag}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Animated>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
