"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Wand2 } from 'lucide-react';
import { suggestPortfolioProjects, SuggestPortfolioProjectsOutput } from '@/ai/flows/suggest-portfolio-projects';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Animated } from '@/components/ui/animated';

const roshanSkills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Next.js', 'TypeScript', 'MongoDB'];

export default function AiSuggesterSection() {
  const [suggestions, setSuggestions] = useState<SuggestPortfolioProjectsOutput | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSuggestProjects = async () => {
    setLoading(true);
    setError(null);
    setSuggestions(null);
    try {
      const result = await suggestPortfolioProjects({ skills: roshanSkills });
      setSuggestions(result);
    } catch (e) {
      setError('An error occurred while generating suggestions. Please try again.');
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-suggester" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6 flex justify-center">
        <Animated as={Card} delay={0.3} className="w-full max-w-2xl shadow-xl">
          <CardHeader className="text-center">
            <Wand2 className="mx-auto h-10 w-10 text-primary mb-2" />
            <CardTitle className="text-2xl md:text-3xl font-bold font-headline">Need Project Ideas?</CardTitle>
            <CardDescription>Let AI suggest some projects based on my skills to impress employers.</CardDescription>
          </CardHeader>
          <CardContent>
            {error && (
              <Alert variant="destructive">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            {loading && (
              <div className="flex justify-center items-center h-40">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            )}
            {suggestions && (
              <div className="mt-4 space-y-4">
                <h4 className="font-semibold text-lg">Here are some ideas:</h4>
                <ul className="list-disc list-inside space-y-2 text-foreground/80">
                  {suggestions.projects.map((project, index) => (
                    <li key={index}>{project}</li>
                  ))}
                </ul>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button size="lg" onClick={handleSuggestProjects} disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Wand2 className="mr-2 h-4 w-4" />
                  Suggest Projects
                </>
              )}
            </Button>
          </CardFooter>
        </Animated>
      </div>
    </section>
  );
}
