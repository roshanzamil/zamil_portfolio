import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { cn } from '@/lib/utils';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { GsapProvider } from '@/components/providers/gsap-provider';
import { Suspense } from 'react';
import Loading from './loading';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { ThemeToggleButton } from '@/components/ui/theme-toggle-button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const socialImage = PlaceHolderImages.find((img) => img.id === 'og-image');
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Roshan Zamil Moulana | Full Stack Developer & E-Commerce Specialist',
  description: 'The professional portfolio of Roshan Zamil Moulana, a passionate Full Stack Developer and E-Commerce Specialist based in Dubai. Explore projects, skills, and experience in React, Node.js, PHP, and more.',
  keywords: [
    'Full Stack Developer', 
    'E-Commerce Specialist', 
    'React Developer',
    'Node.js Developer',
    'PHP',
    'Symfony',
    'Laravel',
    'Dubai',
    'Web Developer',
    'Portfolio'
  ],
  authors: [{ name: 'Roshan Zamil Moulana', url: siteUrl }],
  creator: 'Roshan Zamil Moulana',
  publisher: 'Roshan Zamil Moulana',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Roshan Zamil Moulana | Full Stack Developer & E-Commerce Specialist',
    description: 'The professional portfolio of Roshan Zamil Moulana, a passionate Full Stack Developer and E-Commerce Specialist based in Dubai. Explore projects, skills, and experience in React, Node.js, PHP, and more.',
    url: siteUrl,
    siteName: 'RZM.dev',
    images: [
      {
        url: socialImage?.imageUrl || '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Roshan Zamil Moulana - Full Stack Developer Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roshan Zamil Moulana | Full Stack Developer & E-Commerce Specialist',
    description: 'The professional portfolio of Roshan Zamil Moulana, a passionate Full Stack Developer and E-Commerce Specialist based in Dubai. Explore projects, skills, and experience in React, Node.js, PHP, and more.',
    creator: '@roshan_zamil',
    images: [socialImage?.imageUrl || '/og-image.png'],
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn("antialiased", "bg-background")}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
          <GsapProvider>
            <div className="flex flex-col min-h-svh">
              <Header />
              <main className="flex-1">
                <Suspense fallback={<Loading />}>
                  {children}
                </Suspense>
              </main>
              <Footer />
            </div>
            <ThemeToggleButton />
            <Toaster />
          </GsapProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
