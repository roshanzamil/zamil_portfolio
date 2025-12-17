'use server';

/**
 * @fileOverview An AI assistant that can answer questions about Roshan Zamil Moulana.
 *
 * - askMyAssistant - A function that answers questions about Roshan.
 * - AskMyAssistantInput - The input type for the askMyAssistant function.
 * - AskMyAssistantOutput - The return type for the askMyAssistant function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const aboutMeContext = `
  Roshan Zamil Moulana
  Full Stack Developer – E-Commerce Specialist
  Location: Al – Karama, Dubai | Tel: +971 588 254 527
  Email: rshn.zamil@gmail.com | LinkedIn: linkedin.com/in/roshan-zamil/

  QUALIFICATION SUMMARY
  Accomplished Full Stack Developer and E-Commerce Specialist. Successfully developed a million-euro web application that increased revenue by 35%, improved customer engagement by 50%, and optimized conversion rates by 30% using sales funnel techniques. Skilled in PHP, NodeJS, Symfony, Laravel, Java, Python, AngularJS, ReactJS, and cloud infrastructure, with expertise in API integrations, DevOps, CI/CD pipelines, and database performance optimization. Proven ability to lead cross functional team of 5, streamline development processes, and deliver scalable, high performing applications.

  KEY SKILLS
  - HTML5, CSS3
  - Cloud Infrastructure
  - RESTful APIs/WebSockets
  - PHP/JavaScript
  - Shopify/WooCommerce
  - Payment Gateways
  - Digital Marketing /SEO
  - Figma, Adobe XD
  - Git, GitHub

  RELEVANT PROFESSIONAL EXPERIENCE

  Full Stack Developer (Sep 2024 – May 2025)
  Sunniva Solar GMBH - Business Bay, Dubai
  Results-driven Full Stack Developer with extensive experience in developing, deploying, and maintaining secure and scalable web applications. Proven ability to provide technical leadership, architect robust system designs, and optimize database performance. Adept at collaborating with cross-functional teams to translate business requirements into functional solutions, ensuring high-quality standards thorough testing and debugging.
  - Web Application Development: Architect, develop, and maintain responsive, high-performance web applications and e-commerce platforms.
  - E-commerce Platforms: Manage and customize Shopify, WooCommerce, and Magento, implementing optimized online shopping carts, payment gateways, and product catalogs.
  - Server & Cloud Management: Deploy, monitor, and scale applications on AWS and Google Cloud, ensuring security and performance optimization.
  - API Development & Integration: Design and implement RESTful and GraphQL APIs, integrating third-party services for enhanced functionality.
  - Version Control: Utilized Git and GitHub for managing code changes and collaborating across departments.
  - Database Management: Administer MySQL, PostgreSQL, and MongoDB, optimizing queries and enhancing performance.
  - Team Leadership & Mentorship: Guide and mentor junior developers, conduct code reviews, and enforce best development practices to drive continuous improvement.
    - Led a team of 10 junior developers, enhancing team productivity by 25%.
    - Integrated secure payment gateways, improving transaction success rates by 30%.

  Full Stack Developer (Jun 2022 - Sep 2024)
  Middle East Fuji Group LLC - Al Quoz, Dubai
  Full Stack Developer with expertise in both static and e-commerce websites. Bring experience in training and mentoring junior web developers. The role involves working with a group of companies, ensuring the seamless operation of their online platforms. Extensive knowledge in various e-commerce platforms, AWS servers, Google Cloud, 3rd party APIs, CodeIgniter programs, and database management.
  - Web Development: Design, develop, and maintain static and e-commerce websites for a group of companies. - Implement responsive and user-friendly interfaces to enhance the user experience. - Collaborate with UI/UX designers to translate design wireframes into functional web applications.
  - E-commerce Platforms: Managed and customized e-commerce platforms such as Shopify, and WooCommerce, ensuring optimal performance. - Implemented and optimized online shopping carts, payment gateways, and product catalogs. - Stayed updated on emerging trends and technologies in e-commerce.
  - Server Management: Deploy, manage, and monitor AWS and Google Cloud applications. - Ensure server security, scalability, and performance.
  - Training and Mentorship: Provide training and mentorship to web developers, fostering skill development and knowledge transfer. - Conduct code reviews to maintain coding standards and best practices.
  - API Integration: Integrate 3rd party APIs to enhance website functionality and connectivity. - Troubleshoot and debug API-related issues.
  - Database Management: Utilized SQL and MySQL for efficient database management. - Optimized database queries and performance.

  Web Developer (Jan 2018 – Mar 2022)
  BroCrypt - Sri Lanka
  - Utilized HTML, CSS, and JavaScript to create 100+ responsive landing pages for clients.
  - Used workspaces to promote efficient asynchronous and synchronous work for increased efficiency.
  - Maintained graphic standards and branding throughout the product’s interfaces.
  - Implemented SEO strategies for acquisition up by an average of 200% each month.

  Full Stack Developer (Jan 2018 - Jan 2020)
  Saninro Tech - Sri Lanka
  - Worked with Quality Assurance to get new pages/products tested, and addressed any issues within 48 hours.
  - Rewrote HTML to meet industry and company standards for SEO and Accessibility.
  - Building beautiful user interface for hotel system without compromising functionality for aesthetics.
  - Developed 3 WordPress sites with testing, deployment, and updates.

  EDUCATION
  - Computer Science, Bachelor of Science (2023) - Girne American University, Cyprus
  - Rapid Web Application Development (2018) - Institute of Java and Software Engineering, Sri Lanka
`;

const AskMyAssistantInputSchema = z.object({
  history: z.array(z.object({
    role: z.enum(['user', 'assistant']),
    content: z.string(),
  })),
});

export type AskMyAssistantInput = z.infer<typeof AskMyAssistantInputSchema>;

const AskMyAssistantOutputSchema = z.object({
  answer: z.string().describe('The answer to the user\'s question about Roshan Zamil Moulana.'),
});

export type AskMyAssistantOutput = z.infer<typeof AskMyAssistantOutputSchema>;

export async function askMyAssistant(
  input: AskMyAssistantInput
): Promise<AskMyAssistantOutput> {
  return askMyAssistantFlow(input);
}

const askMyAssistantPrompt = ai.definePrompt({
  name: 'askMyAssistantPrompt',
  input: {schema: AskMyAssistantInputSchema},
  output: {schema: AskMyAssistantOutputSchema},
  prompt: `You are a helpful AI assistant for Roshan Zamil Moulana's portfolio website. Your name is RZM-AI.
  You are having a conversation with a potential employer or recruiter.
  Your goal is to answer questions about Roshan based ONLY on the context provided below.
  Be friendly, professional, and concise.
  Do not make up any information. If the answer is not in the context, say "I don't have that information, but you can reach out to Roshan via the contact page."
  
  IMPORTANT: You must format your response as a JSON object with a single key called "answer".

  CONTEXT:
  ---
  ${aboutMeContext}
  ---

  CONVERSATION HISTORY:
  {{#each history}}
  {{role}}: {{{content}}}
  {{/each}}
  assistant:
  `,
});

const askMyAssistantFlow = ai.defineFlow(
  {
    name: 'askMyAssistantFlow',
    inputSchema: AskMyAssistantInputSchema,
    outputSchema: AskMyAssistantOutputSchema,
  },
  async (input) => {
    const {output} = await askMyAssistantPrompt(input);
    return output!;
  }
);
