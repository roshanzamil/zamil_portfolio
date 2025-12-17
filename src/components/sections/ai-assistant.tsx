"use client";

import { useState, useRef, useEffect, type FormEvent } from "react";
import { askMyAssistant, type AskMyAssistantInput } from "@/ai/flows/about-me-assistant";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";
import { Loader2, User, CornerDownLeft, Sparkles } from "lucide-react";
import { Animated } from "@/components/ui/animated";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const initialMessage: Message = {
  role: 'assistant',
  content: "Hello! I'm RZM-AI, Roshan Zamil Moulana's AI assistant. How can I help you today regarding Roshan's portfolio?"
};

const trialQuestions = [
  "What is Roshan's primary area of expertise?",
  "Tell me about his experience with e-commerce platforms.",
  "What was his role at Sunniva Solar?",
];

export default function AiAssistantSection() {
  const [messages, setMessages] = useState<Message[]>([initialMessage]);
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

  const handleSendMessage = async (messageContent: string) => {
    if (!messageContent.trim()) return;

    setIsLoading(true);
    const userMessage: Message = { role: "user", content: messageContent };
    setMessages((prev) => [...prev, userMessage]);
    
    // Clear input if the message came from the input field
    if (input === messageContent) {
      setInput("");
    }

    try {
      // Filter out the initial message before sending to the AI
      const history: AskMyAssistantInput['history'] = messages.filter(msg => msg.content !== initialMessage.content).map(msg => ({
        role: msg.role === 'assistant' ? 'assistant' : 'user',
        content: msg.content
      }));

      const response = await askMyAssistant({ history: [...history, { role: 'user', content: messageContent }] });
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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleSendMessage(input);
  };
  
  const handleTrialQuestionClick = (question: string) => {
    if (isLoading) return;
    handleSendMessage(question);
  }

  return (
    <section id="ai-assistant" className="w-full py-16 md:py-24 lg:py-32 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <Animated as="div" className="space-y-4 text-center mb-12">
            <div className="inline-block rounded-lg bg-primary text-primary-foreground px-3 py-1 text-sm font-semibold">
                <Sparkles className="h-4 w-4 inline-block mr-2" />
                My Assistant
            </div>
          <h2 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            ASK ME ANYTHING
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
                      <Avatar className="w-8 h-8 bg-muted">
                         <div className="flex items-center justify-center w-full h-full">
                            <User className="w-5 h-5 text-muted-foreground" />
                        </div>
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
              </div>
            </ScrollArea>
            <div className="p-4 border-t space-y-3">
              <div className="flex flex-wrap gap-2 justify-center">
                {trialQuestions.map((q) => (
                    <Button key={q} variant="outline" size="sm" onClick={() => handleTrialQuestionClick(q)} disabled={isLoading} className="text-xs sm:text-sm">
                        {q}
                    </Button>
                ))}
              </div>
              <form onSubmit={handleSubmit} className="flex gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Or type your own question..."
                  className="flex-1"
                  disabled={isLoading}
                />
                <Button type="submit" disabled={isLoading} size="icon">
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
