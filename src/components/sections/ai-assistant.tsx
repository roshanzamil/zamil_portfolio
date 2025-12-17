"use client";

import { useState, useRef, useEffect, type FormEvent } from "react";
import { askMyAssistant, type AskMyAssistantInput } from "@/ai/flows/about-me-assistant";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";
import { Loader2, Bot, User, CornerDownLeft, Sparkles } from "lucide-react";
import { Animated } from "@/components/ui/animated";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function AiAssistantSection() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const avatar = PlaceHolderImages.find((img) => img.id === 'roshan-avatar');


  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setIsLoading(true);
    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const history: AskMyAssistantInput['history'] = messages.map(msg => ({
        role: msg.role === 'assistant' ? 'assistant' : 'user',
        content: msg.content
      }));

      const response = await askMyAssistant({ history: [...history, { role: 'user', content: input }] });
      const assistantMessage: Message = { role: "assistant", content: response.answer };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error asking assistant:", error);
      const errorMessage: Message = {
        role: "assistant",
        content: "Sorry, something went wrong. Please try again.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ai-assistant" className="w-full py-16 md:py-24 lg:py-32 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <Animated as="div" className="space-y-4 text-center mb-12">
            <div className="inline-block rounded-lg bg-primary text-primary-foreground px-3 py-1 text-sm font-semibold">
                <Sparkles className="h-4 w-4 inline-block mr-2" />
                My Assistant
            </div>
          <h2 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            Ask Me Anything
          </h2>
          <p className="max-w-[700px] mx-auto text-foreground/80 text-base md:text-lg">
            Have a question about my skills or experience? Ask my AI assistant. 
            It's trained on my resume and project history.
          </p>
        </Animated>

        <Animated as="div" delay={0.3} className="max-w-3xl mx-auto">
          <div className="bg-card shadow-lg rounded-lg border">
            <ScrollArea className="h-[400px] p-4" ref={scrollAreaRef}>
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={cn(
                      "flex items-start gap-3",
                      message.role === "user" ? "justify-end" : "justify-start"
                    )}
                  >
                    {message.role === "assistant" && (
                      <Avatar className="w-8 h-8 border-2 border-primary">
                         {avatar && <AvatarImage src={avatar.imageUrl} alt="RZM-AI" />}
                        <AvatarFallback>AI</AvatarFallback>
                      </Avatar>
                    )}
                    <div
                      className={cn(
                        "rounded-lg px-4 py-2 text-base max-w-[80%]",
                        message.role === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      )}
                    >
                      <p>{message.content}</p>
                    </div>
                     {message.role === "user" && (
                      <Avatar className="w-8 h-8">
                        <AvatarFallback><User/></AvatarFallback>
                      </Avatar>
                    )}
                  </div>
                ))}
                {isLoading && (
                  <div className="flex items-start gap-3 justify-start">
                    <Avatar className="w-8 h-8 border-2 border-primary">
                      {avatar && <AvatarImage src={avatar.imageUrl} alt="RZM-AI" />}
                      <AvatarFallback>AI</AvatarFallback>
                    </Avatar>
                    <div className="rounded-lg px-4 py-2 text-base bg-muted text-muted-foreground flex items-center">
                      <Loader2 className="h-5 w-5 animate-spin mr-2" />
                      Thinking...
                    </div>
                  </div>
                )}
                 {messages.length === 0 && (
                    <div className="text-center text-muted-foreground py-16">
                        <Bot className="h-12 w-12 mx-auto mb-4" />
                        <p className="text-lg">Hi, I'm RZM-AI. Ask me a question about Roshan!</p>
                        <p className="text-sm">e.g., "What are his strongest skills?"</p>
                    </div>
                 )}
              </div>
            </ScrollArea>
            <div className="p-4 border-t">
              <form onSubmit={handleSubmit} className="flex gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask a question..."
                  className="flex-1"
                  disabled={isLoading}
                />
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : <CornerDownLeft className="h-5 w-5"/>}
                  <span className="sr-only">Send</span>
                </Button>
              </form>
            </div>
          </div>
        </Animated>
      </div>
    </section>
  );
}
