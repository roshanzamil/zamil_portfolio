import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Database, Server, Settings, TerminalSquare, Star, Wind } from 'lucide-react';
import { ReactIcon, NodejsIcon, JavaScriptIcon, HtmlIcon, CssIcon, TypeScriptIcon } from '@/components/icons';

const skillsData = [
  {
    category: 'Languages & Frameworks',
    icon: <Code className="h-8 w-8 text-primary" />,
    skills: [
      { name: 'HTML5', icon: <HtmlIcon className="h-8 w-8" /> },
      { name: 'CSS3', icon: <CssIcon className="h-8 w-8" /> },
      { name: 'JavaScript', icon: <JavaScriptIcon className="h-8 w-8" /> },
      { name: 'PHP', icon: <Code className="h-8 w-8" /> },
      { name: 'Java', icon: <Code className="h-8 w-8" /> },
      { name: 'Python', icon: <Code className="h-8 w-8" /> },
      { name: 'ReactJS', icon: <ReactIcon className="h-8 w-8" /> },
      { name: 'AngularJS', icon: <Code className="h-8 w-8" /> },
      { name: 'NodeJS', icon: <NodejsIcon className="h-8 w-8" /> },
      { name: 'Symfony', icon: <Code className="h-8 w-8" /> },
      { name: 'Laravel', icon: <Code className="h-8 w-8" /> },
    ],
  },
  {
    category: 'Platforms & Infrastructure',
    icon: <Server className="h-8 w-8 text-primary" />,
    skills: [
      { name: 'Cloud Infrastructure', icon: <Wind className="h-8 w-8" /> },
      { name: 'Shopify', icon: <Star className="h-8 w-8" /> },
      { name: 'WooCommerce', icon: <Star className="h-8 w-8" /> },
      { name: 'RESTful APIs', icon: <Code className="h-8 w-8" /> },
      { name: 'WebSockets', icon: <Code className="h-8 w-8" /> },
      { name: 'Payment Gateways', icon: <Code className="h-8 w-8" /> },
    ],
  },
  {
    category: 'Tools & Expertise',
    icon: <Settings className="h-8 w-8 text-primary" />,
    skills: [
      { name: 'Digital Marketing / SEO', icon: <Code className="h-8 w-8" /> },
      { name: 'Figma', icon: <Code className="h-8 w-8" /> },
      { name: 'Adobe XD', icon: <Code className="h-8 w-8" /> },
      { name: 'Git & GitHub', icon: <TerminalSquare className="h-8 w-8" /> },
      { name: 'Database Management', icon: <Database className="h-8 w-8" /> },
      { name: 'DevOps/CI-CD', icon: <Code className="h-8 w-8" /> },
    ],
  },
];

const SkillCard = ({ name, icon }: { name: string; icon: React.ReactNode }) => (
  <div className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg bg-background hover:bg-accent/50 transition-colors">
    {icon}
    <p className="text-sm font-medium text-center">{name}</p>
  </div>
);

export default function SkillsSection() {
  return (
    <section id="skills" className="w-full py-16 md:py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            Skills & Expertise
          </h2>
          <p className="max-w-[700px] mx-auto text-foreground/80 md:text-xl">
            The tools and technologies I use to bring projects to life.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          {skillsData.map((category) => (
            <Card key={category.category} className="shadow-lg">
              <CardHeader className="flex flex-row items-center gap-4">
                {category.icon}
                <CardTitle className="text-2xl font-bold">{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {category.skills.map((skill) => (
                    <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
