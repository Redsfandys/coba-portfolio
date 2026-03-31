import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer'; 
import CustomCursor from '@/components/CustomCursor';

export const metadata: Metadata = {
  title: 'Reds',
  description: 'Showcase of my creations.',
  
  openGraph: {
    title: 'Reds | Portfolio',
    description: 'Showcase of my creations',
    url: 'https://r3ds.xyz',
    siteName: 'R3DS Studio',
    images: [
      {
        url: 'https://res.cloudinary.com/diofdjc4m/image/upload/f_auto,q_auto/v1773614364/aeon_mall_rooftop_rx7_fc_ijiwzv.png', 
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  
  icons: {
    icon: [
      { url: '/favicon.ico' },
      new URL('/icon.svg', 'https://r3ds.xyz').href, 
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-black text-neutral-50 font-sans antialiased min-h-screen flex flex-col">
        <CustomCursor />
        <Navbar />
        <main className="flex-grow w-full max-w-screen-2xl mx-auto px-6 md:px-12 pt-32 pb-24">
          {children}
        </main>
        
        <Footer /> 
      </body>
    </html>
  );
}