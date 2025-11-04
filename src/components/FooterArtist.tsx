// Plik: src/components/FooterArtist.tsx

import { Globe, Instagram } from 'lucide-react'; // Ikony dla przycisków

export default function FooterArtist() {
  // Linki-kotwice do sekcji na stronie
  const navLinks = [
    { href: "#wywiady", label: "Wywiady" },
    // UWAGA: Link "#nota" na razie nie będzie działać,
    // dopóki nie stworzymy bloku <NotaBlock /> i nie nadamy mu id="nota"
    { href: "#nota", label: "Nota" }, 
    { href: "#galeria", label: "Galeria" },
  ];

  // Te linki możemy później przenieść do pliku danych,
  // jeśli każdy artysta ma mieć inne
  const websiteUrl = "https://wojciechtracewski.art"; 
  const instagramUrl = "https://www.instagram.com/wojciech_tracewski_art/";

  return (
    <footer className="bg-slate-800 text-white">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          
          {/* Kolumna 1: Logo i opis */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-bold whitespace-nowrap">
              Nowa <span className="text-red-500">Ekspresja</span>
            </h3>
            <p className="mt-4 text-slate-400">
              Strona poświęcona twórczości<br/>
              artysty Wojciecha Tracewskiego,<br/>
              przedstawiciela Nowej Ekspresji.
            </p>
          </div>

          {/* Kolumna 2: Menu */}
          <div className="flex flex-col items-center">
            <h4 className="text-lg font-semibold tracking-wider uppercase text-slate-300">Menu</h4>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-slate-400 hover:text-red-500 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolumna 3: Social Media */}
          <div className="flex flex-col items-center md:items-end">
            <h4 className="text-lg font-semibold tracking-wider uppercase text-slate-300">Social Media</h4>
            <div className="flex flex-col items-end space-y-4 mt-4">
              <a 
                href={websiteUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-red-500 transition-colors"
                aria-label="Strona internetowa"
              >
                <Globe size={24} />
              </a>
              <a 
                href={instagramUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-red-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>

        </div>

        {/* Linia oddzielająca i prawa autorskie */}
        <div className="mt-16 pt-8 border-t border-slate-700 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Nowa Ekspresja. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
}