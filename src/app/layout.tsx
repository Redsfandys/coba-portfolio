import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';

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
        {/* The main wrapper uses ample negative space */}
        <main className="flex-grow w-full max-w-screen-2xl mx-auto px-6 md:px-12 pt-32 pb-12">
          {children}
        </main>
      </body>
    </html>
  );
}