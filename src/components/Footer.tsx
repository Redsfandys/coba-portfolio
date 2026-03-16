export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-neutral-900 mt-auto">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 py-12 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Left Side: Brand & Copyright */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-sm font-medium text-neutral-200 tracking-wide">
            Reds.
          </span>
          {/* <span className="text-xs text-neutral-600 tracking-widest uppercase">
            © {currentYear} / Visuals & Code
          </span> */}
        </div>

        {/* Right Side: Social & Contact Links */}
        <nav className="flex gap-8 text-xs uppercase tracking-[0.2em] text-neutral-500">
          <a 
            href="redsfdys@gmail.com" 
            className="hover:text-neutral-50 transition-colors duration-500"
          >
            Email
          </a>
          <a 
            href="https://instagram.com/dyka_raihan" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-neutral-50 transition-colors duration-500"
          >
            Instagram
          </a>
          <a 
            href="https://github.com/Redsfandys" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-neutral-50 transition-colors duration-500"
          >
            GitHub
          </a>
        </nav>
        
      </div>
    </footer>
  );
}