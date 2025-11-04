// Plik: src/components/NavbarArtist.tsx

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Ważne: import dla linku "Strona Główna"
import { Menu, X } from 'lucide-react';

export default function NavbarArtist() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Definiujemy linki-kotwice (anchor links)
  const navLinks = [
    // Zakładam, że sekcje będą miały takie ID
    { href: "#wywiady", label: "Wywiady" },
    { href: "#droga-artystyczna", label: "Droga artystyczna" },
    { href: "#filmy", label: "Filmy" },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 w-full bg-white/90 backdrop-blur transition-shadow duration-300 ${isScrolled ? 'shadow-md' : ''}`}
    >
      <div className="container mx-auto flex h-20 max-w-7xl items-center px-4">
        
        {/* Logo po lewej (zawsze linkuje do strony głównej) */}
        <Link 
          to="/" 
          className="text-3xl font-bold text-slate-900 whitespace-nowrap" 
          onClick={() => setIsMenuOpen(false)}
        >
          Nowa <span className="text-red-600">Ekspresja</span>
        </Link>

        {/* Nawigacja wyśrodkowana (nowe linki) */}
        <nav className="hidden items-center gap-6 lg:flex ml-auto mr-auto">
          
          {/* Link do strony głównej (używa React Router) */}
          <Link 
            to="/" 
            className="font-medium text-slate-800 transition-colors hover:text-red-600"
          >
            Strona Główna
          </Link>
          
          {/* Linki-kotwice (używają zwykłego <a>) */}
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              className="font-medium text-slate-800 transition-colors hover:text-red-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Przycisk po prawej (nowy - "Galeria") */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#galeria" // Link-kotwica do galerii
            className="inline-flex h-11 items-center justify-center rounded-full bg-red-600 px-8 font-semibold text-white shadow-sm transition-all hover:bg-red-700 focus-visible:outline-none"
          >
            Galeria
          </a>
        </div>

        {/* Przycisk menu mobilnego (burger) */}
        <div className="flex items-center gap-2 lg:hidden ml-auto">
          <button
            className="text-slate-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
            <span className="sr-only">Otwórz menu</span>
          </button>
        </div>
      </div>

      {/* Rozwijane menu mobilne (nowe linki) */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full border-t border-slate-200 bg-white shadow-lg lg:hidden">
          <nav className="flex flex-col items-center gap-8 p-8">
            
            {/* Link do strony głównej (React Router) */}
            <Link 
              to="/" 
              className="text-xl font-bold text-slate-800" 
              onClick={() => setIsMenuOpen(false)}
            >
              Strona Główna
            </Link>

            {/* Linki-kotwice (<a>) */}
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href} 
                className="text-xl font-bold text-slate-800" 
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            
            {/* Przycisk "Galeria" */}
            <a 
              href="#galeria"
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-8 py-3 text-center font-semibold text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Galeria
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}