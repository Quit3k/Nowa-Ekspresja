// Plik: src/components/artist-blocks/InterviewsBlock.tsx

// --- DEFINICJA DANYCH ---
// Definiujemy, jak wygląda pojedynczy wywiad
interface InterviewItem {
  year: string; // Rok jest używany jako klucz, ale zostawiam go też tutaj
  image: string; // Będziemy tu podawać PEŁNĄ ścieżkę (np. /Nowa-Ekspresja/assets/...)
  title: string;
  excerpt: string;
  readMoreUrl?: string; // Link do "Czytaj więcej..." (opcjonalny)
}

// Definiujemy, jakie dane (props) ten komponent będzie przyjmował
export interface InterviewsBlockData {
  title: string;
  quote: string;
  quoteAuthor: string;
  interviews: InterviewItem[]; // Tablica wywiadów
}

// --- KOMPONENT ---
export default function InterviewsBlock({ data }: { data: InterviewsBlockData }) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
        {/* NAGŁÓWEK SEKCJI (DYNAMICZNY) */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-slate-800">
            {data.title}
          </h2>
          <div className="w-24 h-0.5 bg-red-500 my-6 mx-auto"></div>
          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto italic">
            {data.quote}
          </p>
           <p className="text-md text-slate-500 leading-relaxed max-w-3xl mx-auto mt-2">
            - {data.quoteAuthor}
          </p>
        </div>

        {/* SIATKA Z KAFLKAMI (DYNAMICZNA) */}
        <div className="space-y-12">
          {/* Mapujemy po danych z propsów */}
          {data.interviews.map((item) => (
            <div key={item.year} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row transition-shadow duration-300 hover:shadow-2xl">
              {/* ZDJĘCIE (DYNAMICZNE) */}
              <div className="md:w-1/3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              {/* TREŚĆ (DYNAMICZNA) */}
              <div className="md:w-2/3 p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-slate-800 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {item.excerpt}
                  </p>
                </div>
                {/* DYNAMICZNY LINK "CZYTAJ WIĘCEJ" */}
                {item.readMoreUrl && (
                  <div className="mt-auto">
                    <a
                      href={item.readMoreUrl}
                      target="_blank" // Otwieraj linki do artykułów w nowej karcie
                      rel="noopener noreferrer"
                      className="text-red-600 font-semibold hover:text-red-700 transition-colors"
                    >
                      Czytaj więcej...
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}