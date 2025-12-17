"use client";

import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Animated } from '@/components/ui/animated';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';

const contactInfo = [
    {
      icon: <Mail className="h-8 w-8 text-primary"/>,
      title: 'Email',
      value: 'rshn.zamil@gmail.com',
      href: 'mailto:rshn.zamil@gmail.com'
    },
    {
      icon: <Phone className="h-8 w-8 text-primary"/>,
      title: 'Phone',
      value: '+971 588 254 527',
      href: 'tel:+971588254527'
    },
    {
      icon: <MapPin className="h-8 w-8 text-primary"/>,
      title: 'Location',
      value: 'Al – Karama, Dubai',
    }
]

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function ContactSection() {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
 
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="w-full py-16 md:py-24 lg:py-32 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <Animated as="div" className="space-y-4 text-center mb-12">
          <h2 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            Get In Touch
          </h2>
          <p className="max-w-[700px] mx-auto text-foreground/80 text-base md:text-lg">
            Have a question or want to work together? Drop me a line.
          </p>
        </Animated>
        
        <div className="grid lg:grid-cols-5 gap-12 items-start">
            <Animated as="div" delay={0.2} className="lg:col-span-2 space-y-8">
                {contactInfo.map((info, i) => (
                    <div key={i} className="flex items-start gap-5">
                        <div className="flex-shrink-0 h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center">
                            {info.icon}
                        </div>
                        <div className='flex-1'>
                            <h3 className="font-bold text-xl">{info.title}</h3>
                            {info.href ? (
                                <a href={info.href} className="text-muted-foreground text-base hover:text-primary transition-colors">
                                    {info.value}
                                </a>
                            ) : (
                                <p className="text-muted-foreground text-base">{info.value}</p>
                            )}
                        </div>
                    </div>
                ))}
            </Animated>

            <Animated as={Card} delay={0.4} className="lg:col-span-3 shadow-lg rounded-lg border">
                <CardHeader>
                    <CardTitle className="text-2xl">Send me a message</CardTitle>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Your Name</FormLabel>
                              <FormControl>
                                <Input placeholder="John Doe" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Your Email</FormLabel>
                              <FormControl>
                                <Input placeholder="john.doe@example.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Your Message</FormLabel>
                              <FormControl>
                                <Textarea placeholder="Hi Roshan, I'd like to talk about..." {...field} rows={5} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <Button type="submit" size="lg" className="w-full text-base" disabled={form.formState.isSubmitting}>
                           {form.formState.isSubmitting ? 'Sending...' : 'Send Message'} <Send className="ml-2 h-4 w-4"/>
                        </Button>
                      </form>
                    </Form>
                </CardContent>
            </Animated>
        </div>
      </div>
    </section>
  );
}
