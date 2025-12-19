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
  - HTML5, CSS3, JavaScript, PHP, Java, Python
  - ReactJS, AngularJS, NodeJS, Symfony, Laravel
  - Cloud Infrastructure (AWS, Google Cloud)
  - E-commerce Platforms: Shopify, WooCommerce, Magento
  - Databases: MySQL, PostgreSQL, MongoDB, AS400/DB2
  - APIs: RESTful APIs, WebSockets, GraphQL, API Integration
  - Tools: Git, GitHub, Figma, Adobe XD, Odoo, SAP, Oracle
  - Expertise: Digital Marketing, SEO, DevOps, CI/CD, Payment Gateways, System Design, Workflow Automation

  RELEVANT PROFESSIONAL EXPERIENCE

  Senior Software developer (Sep 2024 – May 2025)
  Sunniva Solar GMBH - Business Bay, Dubai
  Architect, develop, and maintain responsive, high-performance web applications and e-commerce platforms. Manage and customize Shopify, WooCommerce, and Magento. Deploy, monitor, and scale applications on AWS and Google Cloud. Design and implement RESTful and GraphQL APIs. Led a team of 10 junior developers, enhancing team productivity by 25%.

  Full Stack Developer (Jun 2022 - Sep 2024)
  Middle East Fuji Group LLC - Al Quoz, Dubai
  Designed, developed, and maintained static and e-commerce websites. Managed Shopify and WooCommerce platforms. Deployed and managed applications on AWS and Google Cloud servers. Provided training and mentorship to junior web developers. Integrated internal systems like Oracle, Odoo, and SAP.

  Web Developer (Jan 2018 – Mar 2022)
  BroCrypt - Sri Lanka
  Utilized HTML, CSS, and JavaScript to create 100+ responsive landing pages. Maintained graphic standards and branding. Implemented SEO strategies, increasing acquisition by an average of 200% each month.

  Full Stack Developer (Jan 2018 - Jan 2020)
  Saninro Tech - Sri Lanka
  Worked with QA to test new pages and products. Rewrote HTML for SEO and Accessibility. Built user interfaces for hotel systems and developed 3 WordPress sites.

  PROJECT DETAILS

  1.  Uber E-Visa (Visa Service Platform)
      - Description: A comprehensive platform for online visa application and processing, offering services for visit visas, pick & drop, cruises, and resort bookings. It automates much of the application workflow to ensure speed and accuracy.
      - Key Features: Dynamic visa forms, secure document uploads, integrated travel service booking, automated status updates.
      - Technologies: React, Node.js, Express, MongoDB, REST API.

  2.  Diaflower (E-commerce Flower Shop)
      - Description: A visually-driven e-commerce platform for a boutique flower shop, focusing on a simple, elegant user experience.
      - Key Features: Visually-rich product catalog, custom bouquet builder, scheduled delivery, secure payment integration.
      - Technologies: Shopify, Liquid, JavaScript, CSS3, Figma.

  3.  Human Resource Management System (HRMS)
      - Description: Developed and implemented a comprehensive HRMS to manage employee lifecycle, payroll, and performance tracking. Integrated internal systems like Oracle, Odoo, and SAP to streamline cross-functional workflows and create a single source of truth for employee data.
      - Key Features: Centralized employee database, automated payroll, performance management workflows, seamless integration with Oracle, Odoo, and SAP.
      - Technologies: Python, Odoo, SAP Integration, Oracle DB, XML-RPC, JavaScript.

  4.  PreCASPrep (University Interview Practice Platform)
      - Description: A web platform for university applicants to practice for admissions interviews with expert feedback and progress tracking.
      - Key Features: Realistic video interview simulations, expert feedback and scoring, progress tracking, library of common interview questions.
      - Technologies: ReactJS, Node.js, MongoDB, WebRTC, Stripe API.

  5.  Emirates Secretarial Services (ESS / KBC)
      - Description: A digital one-stop-shop for entrepreneurs setting up businesses in Dubai, simplifying company formation, visa applications, and other government services.
      - Key Features: Guided business setup wizard, secure document management, online payment processing, real-time application tracking.
      - Technologies: Laravel, MySQL, Vue.js, Google Cloud, Git.

  6.  Atlas Document Attestation
      - Description: An online portal for individuals and businesses to get documents legally attested for use in the UAE and abroad, streamlining submission, payment, and tracking.
      - Key Features: Online document submission/verification, integration with government bodies, secure payment gateway, courier service integration.
      - Technologies: PHP, CodeIgniter, JavaScript, MySQL, API Integration.

  7.  Hidayath Heavy Industry
      - Description: A comprehensive B2B digital platform for a global leader in metal fabrication, serving as a vital tool for sales, marketing, and client communication.
      - Key Features: Extensive project portfolio, detailed service showcase, RFQ forms, SEO optimization.
      - Technologies: WordPress, HTML5, CSS3, JavaScript, SEO.

  8.  Hello Tara Rose
      - Description: A personal branding website and client management portal for a professional astrologer and life coach, with integrated booking and payment systems.
      - Key Features: Online booking/scheduling, e-commerce for digital products, blog/CMS, client testimonials.
      - Technologies: Shopify, Liquid, JavaScript, Figma.

  9.  Warehouse Management System (WMS)
      - Description: Streamlined an end-to-end international business workflow, from data upload in Dubai to order processing in the Philippines, quotation approval, warehouse fulfillment, and final delivery.
      - Key Features: End-to-end workflow automation, real-time inventory/order tracking, integration with legacy AS400 systems, automated quotation process.
      - Technologies: Odoo, Python, AS400/DB2, XML, JavaScript.

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
