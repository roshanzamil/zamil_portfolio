'use server';

/**
 * @fileOverview A tool that suggests portfolio projects based on a list of skills.
 *
 * - suggestPortfolioProjects - A function that suggests portfolio projects.
 * - SuggestPortfolioProjectsInput - The input type for the suggestPortfolioProjects function.
 * - SuggestPortfolioProjectsOutput - The return type for the suggestPortfolioProjects function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestPortfolioProjectsInputSchema = z.object({
  skills: z
    .array(z.string())
    .describe('A list of web development skills, e.g., HTML, CSS, JavaScript, React, Node.js.'),
});

export type SuggestPortfolioProjectsInput = z.infer<
  typeof SuggestPortfolioProjectsInputSchema
>;

const SuggestPortfolioProjectsOutputSchema = z.object({
  projects: z
    .array(z.string())
    .describe(
      'A list of suggested side projects to enhance the portfolio, tailored to the provided skills.'
    ),
});

export type SuggestPortfolioProjectsOutput = z.infer<
  typeof SuggestPortfolioProjectsOutputSchema
>;

export async function suggestPortfolioProjects(
  input: SuggestPortfolioProjectsInput
): Promise<SuggestPortfolioProjectsOutput> {
  return suggestPortfolioProjectsFlow(input);
}

const suggestPortfolioProjectsPrompt = ai.definePrompt({
  name: 'suggestPortfolioProjectsPrompt',
  input: {schema: SuggestPortfolioProjectsInputSchema},
  output: {schema: SuggestPortfolioProjectsOutputSchema},
  prompt: `You are an expert web development portfolio advisor. Given the following list of skills, suggest some engaging side projects that would enhance a web developer's portfolio.

Skills: {{#each skills}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}

Suggest a few projects that would showcase these skills and impress potential employers. Focus on projects that are practical, innovative, and demonstrate a strong understanding of web development principles.`,
});

const suggestPortfolioProjectsFlow = ai.defineFlow(
  {
    name: 'suggestPortfolioProjectsFlow',
    inputSchema: SuggestPortfolioProjectsInputSchema,
    outputSchema: SuggestPortfolioProjectsOutputSchema,
  },
  async input => {
    const {output} = await suggestPortfolioProjectsPrompt(input);
    return output!;
  }
);
