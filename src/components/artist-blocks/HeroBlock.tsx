// Plik: src/components/artist-blocks/HeroBlock.tsx

import { ArrowRight, Camera } from 'lucide-react';

// --- DEFINICJA DANYCH ---
export interface HeroBlockData {
  artistName: string;
  artistImage: string;
  description: string;
  mainWorkImage: string;
  mainWorkTitle: string;
}

// --- KOMPONENT ---
export default function HeroBlock({ data }: { data: HeroBlockData }) {

  return (
    <section className="min-h-screen flex items-center pt-20 pb-10 lg:py-20 bg-white">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEWA STRONA: OPIS ARTYSTY */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            
            <div className="relative mb-8 w-full max-w-md">
              <img
                src={data.artistImage}
                alt={data.artistName}
                className="w-full h-auto object-cover rounded-xl shadow-lg"
              />
            </div>

            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-slate-800 leading-tight">
              {data.artistName}
            </h1>

            <div className="w-24 h-0.5 bg-red-500 my-6"></div>

            <p className="text-lg text-slate-600 leading-relaxed max-w-md">
              {data.description}
            </p>
            
            {/* --- POPRAWKA: ZMIANA <button> NA <a> --- */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <a
                href="#wywiady" // Link do sekcji
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-200 hover:shadow-xl hover:-translate-y-1"
              >
                <span>Wywiady</span>
                <ArrowRight size={20} />
              </a>

              <a
                href="#galeria" // Link do sekcji
                className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-200"
              >
                <Camera size={20} />
                <span>Zobacz galerię</span>
              </a>
            </div>
          </div>
          
          {/* PRAWA STRONA: OBRAZ */}
          <div className="relative w-full h-[400px] md:h-[520px] lg:h-[680px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={data.mainWorkImage}
              alt={data.mainWorkTitle}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-md">
              <p className="text-slate-800 text-sm font-semibold">
                {data.mainWorkTitle}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}