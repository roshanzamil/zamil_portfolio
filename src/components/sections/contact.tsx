"use client";

import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Animated } from '@/components/ui/animated';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { sendEmail } from '@/app/actions/send-email';
import { Textarea } from '../ui/textarea';

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
  name: z.string().min(2, { message: "Please enter your name." }),
  lookingFor: z.string({ required_error: "Please select an option." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
});

export default function ContactSection() {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });
 
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const result = await sendEmail(values);

    if (result.success) {
      toast({
        title: "Message Sent!",
        description: `Thanks for reaching out, ${values.name}. I'll get back to you soon.`,
      });
      form.reset();
    } else {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: result.error || "There was a problem sending your message. Please try again.",
      });
    }
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
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <div className="text-xl md:text-2xl space-y-6">
                          
                          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-4">
                            <span>Hey, my name is</span>
                            <FormField
                              control={form.control}
                              name="name"
                              render={({ field }) => (
                                <FormItem className="flex-1 min-w-[150px]">
                                  <FormControl>
                                    <Input placeholder="Type Here" {...field} className="inline-block w-full bg-transparent border-0 border-b-2 border-input rounded-none text-xl md:text-2xl px-1 h-auto focus-visible:ring-0 focus-visible:ring-offset-0"/>
                                  </FormControl>
                                  <FormMessage className="!mt-2 text-sm" />
                                </FormItem>
                              )}
                            />
                            <span>and I'm looking for</span>
                          </div>

                           <div className="flex flex-wrap items-baseline gap-x-2 gap-y-4">
                             <FormField
                              control={form.control}
                              name="lookingFor"
                              render={({ field }) => (
                                 <FormItem className="flex-1 min-w-[200px]">
                                  <FormControl>
                                      <Select onValueChange={field.onChange} value={field.value}>
                                          <SelectTrigger className="w-full bg-transparent border-0 border-b-2 border-input rounded-none text-xl md:text-2xl px-1 h-auto py-0 focus:ring-0 focus:ring-offset-0 text-muted-foreground data-[placeholder]:text-muted-foreground">
                                              <SelectValue placeholder="Select Dropdown" />
                                          </SelectTrigger>
                                          <SelectContent>
                                              <SelectItem value="a full-time role">a full-time role</SelectItem>
                                              <SelectItem value="a freelance project">a freelance project</SelectItem>
                                              <SelectItem value="a collaboration">a collaboration</SelectItem>
                                              <SelectItem value="just to say hi">just to say hi</SelectItem>
                                          </SelectContent>
                                      </Select>
                                  </FormControl>
                                  <FormMessage className="!mt-2 text-sm" />
                                 </FormItem>
                              )}
                              />
                           </div>

                          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-4">
                            <span>Get in touch with me at</span>
                            <FormField
                              control={form.control}
                              name="email"
                              render={({ field }) => (
                                <FormItem className="flex-1 min-w-[200px]">
                                  <FormControl>
                                    <Input placeholder="Your Email ID Here" {...field} className="inline-block w-full bg-transparent border-0 border-b-2 border-input rounded-none text-xl md:text-2xl px-1 h-auto focus-visible:ring-0 focus-visible:ring-offset-0"/>
                                  </FormControl>
                                  <FormMessage className="!mt-2 text-sm" />
                                </FormItem>
                              )}
                            />
                            <span>!</span>
                          </div>
                        </div>
                        
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
