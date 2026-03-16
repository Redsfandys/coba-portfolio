import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="w-full py-8 px-6 md:px-12 flex justify-between items-center absolute top-0 left-0 z-50">
      {/* Brand / Logo Area */}
      <Link 
        href="/" 
        className="text-lg font-medium tracking-wide hover:text-neutral-400 transition-colors duration-500"
      >
        Reds.
      </Link>

      {/* Navigation Links */}
      <nav className="flex gap-10 text-xs md:text-sm uppercase tracking-[0.2em] text-neutral-400">
        <Link 
          href="/work" 
          className="hover:text-neutral-50 transition-colors duration-500"
        >
          Works
        </Link>
        <Link 
          href="/useful-sites" 
          className="hover:text-neutral-50 transition-colors duration-500"
        >
          Useful Sites
        </Link>
      </nav>
    </header>
  );
}