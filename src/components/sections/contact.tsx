"use client";

import { Mail, Phone, MapPin } from 'lucide-react';
import { Animated } from '@/components/ui/animated';

export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-16 md:py-24 lg:py-32 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <Animated as="div" className="space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            Get In Touch
          </h2>
          <p className="max-w-[700px] mx-auto text-foreground/80 md:text-xl">
            Have a question or want to work together? Here's how you can reach me.
          </p>
        </Animated>
        <div className="flex justify-center">
          <Animated as="div" delay={0.2} className="space-y-8 max-w-md w-full">
            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-primary mt-1"/>
              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <a href="mailto:rshn.zamil@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">rshn.zamil@gmail.com</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-primary mt-1"/>
              <div>
                <h3 className="font-semibold text-lg">Phone</h3>
                <a href="tel:+971588254527" className="text-muted-foreground hover:text-primary transition-colors">+971 588 254 527</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-primary mt-1"/>
              <div>
                <h3 className="font-semibold text-lg">Location</h3>
                <p className="text-muted-foreground">Al – Karama, Dubai</p>
              </div>
            </div>
          </Animated>
        </div>
      </div>
    </section>
  );
}
