import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import Navigation from '@/components/navigation';
import { Toaster } from "@/components/ui/toaster"
import Footer from "@/components/footer";
import React from "react";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Echafée - Premium Nightclub Experience',
  description: 'Experience the ultimate nightlife at Echafée, a premium nightclub in the heart of the city.',
  icons: {
    icon: "/logo-echafee.png", // Icône principale
  },
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
    <body className={`${inter.className} bg-background`}>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <Navigation />
      <main>
        {children}
      </main>
      <Footer />
      <Toaster />
    </ThemeProvider>
    </body>
    </html>
  );
}