// Plik: src/components/artist-blocks/SocialsBlock.tsx

import { Globe, Instagram } from 'lucide-react'; // Ikony dla przycisków

// --- DEFINICJA DANYCH ---
// Definiujemy, jakie dane (props) ten komponent będzie przyjmował
export interface SocialsBlockData {
  title: string;
  description: string;
  websiteUrl: string;
  instagramUrl: string;
}

// --- KOMPONENT ---
export default function SocialsBlock({ data }: { data: SocialsBlockData }) {
  return (
    <section className="py-20 bg-white">
      <div className="w-full max-w-4xl mx-auto px-6 lg:px-8 text-center">
        {/* NAGŁÓWEK (DYNAMICZNY) */}
        <h2 className="text-4xl lg:text-5xl font-serif font-bold text-slate-800">
          {data.title}
        </h2>
        <div className="w-24 h-0.5 bg-red-500 my-6 mx-auto"></div>

        {/* TEKST ZACHĘCAJĄCY (DYNAMICZNY) */}
        <p className="text-lg text-slate-600 leading-relaxed mb-10">
          {data.description}
        </p>

        {/* PRZYCISKI (DYNAMICZNE) */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={data.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 h-12 bg-red-600 hover:bg-red-700 text-white px-8 rounded-lg font-semibold transition-all duration-200 hover:shadow-xl hover:-translate-y-1"
          >
            <Globe size={20} />
            <span>Strona Internetowa</span>
          </a>

          <a
            href={data.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 h-12 border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 rounded-lg font-semibold transition-all duration-200"
          >
            <Instagram size={20} />
            <span>Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
}