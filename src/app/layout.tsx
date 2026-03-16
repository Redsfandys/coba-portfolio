import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer'; // 1. Import the new Footer

export const metadata: Metadata = {
  title: 'Director / Visual Artist',
  description: 'A cinematic showcase of photography, 3D renders, and video edits.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-black text-neutral-50 font-sans antialiased min-h-screen flex flex-col">
        <Navbar />
        
        {/* main has flex-grow so it pushes the footer to the bottom if the page is short */}
        <main className="flex-grow w-full max-w-screen-2xl mx-auto px-6 md:px-12 pt-32 pb-24">
          {children}
        </main>
        
        <Footer /> {/* 2. Place the Footer below the main content */}
      </body>
    </html>
  );
}