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
  Roshan Zamil Moulana is an accomplished Full Stack Developer and E-Commerce Specialist.

  Summary:
  He has successfully developed a million-euro web application that increased revenue by 35%, improved customer engagement by 50%, and optimized conversion rates by 30% using sales funnel techniques. He is skilled in PHP, NodeJS, Symfony, Laravel, Java, Python, AngularJS, ReactJS, and cloud infrastructure, with expertise in API integrations, DevOps, CI/CD pipelines, and database performance optimization. He has a proven ability to lead cross-functional teams of 5, streamline development processes, and deliver scalable, high-performing applications.

  Experience:
  - Full Stack Developer at Sunniva Solar GMBH (Sep 2024 – May 2025): Architected, developed, and maintained responsive, high-performance web applications and e-commerce platforms. Managed and customized Shopify, WooCommerce, and Magento. Deployed, monitored, and scaled applications on AWS and Google Cloud. Designed and implemented RESTful and GraphQL APIs. Led a team of 10 junior developers, enhancing team productivity by 25%.
  - Full Stack Developer at Middle East Fuji Group LLC (Jun 2022 - Sep 2024): Designed, developed, and maintained static and e-commerce websites. Managed Shopify and WooCommerce platforms. Deployed and managed applications on AWS and Google Cloud servers. Provided training and mentorship to junior web developers.
  - Web Developer at BroCrypt (Jan 2018 – Mar 2022): Utilized HTML, CSS, and JavaScript to create 100+ responsive landing pages for clients. Maintained graphic standards and branding. Implemented SEO strategies, increasing acquisition by an average of 200% each month.
  - Full Stack Developer at Saninro Tech (Jan 2018 - Jan 2020): Worked with QA to test new pages and products. Rewrote HTML to meet industry standards for SEO and Accessibility. Built user interfaces for hotel systems and developed 3 WordPress sites.

  Skills:
  - Languages & Frameworks: HTML5, CSS3, JavaScript, PHP, Java, Python, ReactJS, AngularJS, NodeJS, Symfony, Laravel.
  - Platforms & Infrastructure: Cloud Infrastructure, Shopify, WooCommerce, RESTful APIs, WebSockets, Payment Gateways.
  - Tools & Expertise: Digital Marketing / SEO, Figma, Adobe XD, Git & GitHub, Database Management, DevOps/CI-CD.

  Projects:
  - Middle East Fuji Group: Customized and integrated internal systems (Oracle, Odoo, SAP) to streamline cross-functional workflows.
  - Sunniva Solar – Vendomnia Trading: Led a team to develop plugins for integrating Amazon, eBay, Kaufland, and Otto marketplaces using Shopware and React.
  - E-commerce Web Store (asgharfurniture.ae): Built an online store using PHP, JS, MySQL, and AWS, with live order tracking and secure payments.
  - Warehouse Management System: Streamlined Middle East Fuji's end-to-end business workflow from data upload to final delivery.
  - Diaflower (diaflower.com): An e-commerce flower shop.
  - Industrial Solution (industrialsolution.ae): A B2B platform for industrial supplies.
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
