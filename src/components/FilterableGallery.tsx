import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// Definicja pojedynczego zdjęcia
export interface GalleryItem {
  id: string;
  src: string;
  category?: string;
  alt?: string;
  caption?: string; // Pełny opis do wyświetlenia w Lightboxie
}

interface FilterableGalleryProps {
  title?: string;
  items: GalleryItem[];
}

export default function FilterableGallery({ title, items }: FilterableGalleryProps) {
  const [activeFilter, setActiveFilter] = useState<string>('Wszystkie');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  
  // Stan do obsługi "Pokaż więcej"
  const [visibleCount, setVisibleCount] = useState<number>(20);

  // 1. Wyciągamy unikalne kategorie
  const categories = ['Wszystkie', ...Array.from(new Set(items.map(item => item.category).filter(Boolean))) as string[]];

  // 2. Filtrujemy zdjęcia
  const filteredItems = activeFilter === 'Wszystkie'
    ? items
    : items.filter(item => item.category === activeFilter);

  // 3. Resetujemy licznik widocznych zdjęć, gdy zmieniamy filtr
  useEffect(() => {
    setVisibleCount(20);
  }, [activeFilter]);

  // 4. Wycinamy tylko te zdjęcia, które mają być widoczne
  const displayedItems = filteredItems.slice(0, visibleCount);

  // Funkcja do ładowania większej liczby zdjęć
  const loadMore = () => {
    setVisibleCount((prev) => prev + 20);
  };

  // Funkcje nawigacji Lightboxa
  const openModal = (index: number) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);

  const showNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! + 1) % filteredItems.length);
  }, [selectedIndex, filteredItems.length]);

  const showPrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! - 1 + filteredItems.length) % filteredItems.length);
  }, [selectedIndex, filteredItems.length]);

  // Obsługa klawiatury (Strzałki + ESC)
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, showNext, showPrev]);

  // Aktualne zdjęcie do wyświetlenia w modalu
  const currentImage = selectedIndex !== null ? filteredItems[selectedIndex] : null;

  return (
    <section className="py-12 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4">
        
        {title && (
          <h2 className="text-3xl font-serif font-bold text-slate-800 mb-8 text-center">
            {title}
          </h2>
        )}

        {/* --- FILTRY --- */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 
                ${activeFilter === cat 
                  ? 'bg-red-600 text-white shadow-lg scale-105' 
                  : 'bg-gray-100 text-slate-600 hover:bg-gray-200'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* --- SIATKA ZDJĘĆ (MASONRY) --- */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
          {displayedItems.map((item) => (
            <div 
              key={item.id} 
              className="break-inside-avoid overflow-hidden rounded-xl shadow-md cursor-pointer group relative"
              // POPRAWKA: Usunięto błędny onClick, zostawiono tylko ten poprawny poniżej
              onClick={(e) => {
                e.stopPropagation();
                // Znajdujemy index w pełnej liście przefiltrowanych elementów
                const realIndex = filteredItems.findIndex(i => i.id === item.id);
                openModal(realIndex);
              }}
            >
              <img
                src={item.src}
                alt={item.alt || "Zdjęcie z galerii"}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              {/* Overlay z kategorią */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-end p-4">
                {item.category && (
                  <span className="bg-white/90 text-slate-800 text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                    {item.category}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* --- KOMUNIKAT GDY BRAK ZDJĘĆ --- */}
        {filteredItems.length === 0 && (
          <p className="text-center text-slate-500 py-10">Brak zdjęć w tej kategorii.</p>
        )}

        {/* --- PRZYCISK ZAŁADUJ WIĘCEJ --- */}
        {visibleCount < filteredItems.length && (
          <div className="text-center mt-12">
            <button
              onClick={loadMore}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-xl hover:-translate-y-1"
            >
              Pokaż więcej zdjęć ({filteredItems.length - visibleCount} pozostało)
            </button>
          </div>
        )}

      </div>

      {/* --- MODAL (LIGHTBOX) --- */}
      {currentImage && (
        <div 
          className="fixed inset-0 z-100 bg-black/95 backdrop-blur-sm flex items-center justify-center"
          onClick={closeModal}
        >
          {/* Przycisk zamknij */}
          <button
            onClick={closeModal}
            className="fixed top-6 right-6 z-110 text-white/70 hover:text-white bg-black/20 hover:bg-red-600 rounded-full p-3 transition-all duration-200"
            aria-label="Zamknij"
          >
            <X size={32} />
          </button>

          {/* Strzałka w lewo */}
          <button
            onClick={(e) => { e.stopPropagation(); showPrev(); }}
            className="fixed left-4 top-1/2 -translate-y-1/2 z-110 text-white/70 hover:text-white bg-black/20 hover:bg-black/50 rounded-full p-3 transition-all duration-200 hidden md:block"
            aria-label="Poprzednie"
          >
            <ChevronLeft size={40} />
          </button>

          {/* Strzałka w prawo */}
          <button
            onClick={(e) => { e.stopPropagation(); showNext(); }}
            className="fixed right-4 top-1/2 -translate-y-1/2 z-110 text-white/70 hover:text-white bg-black/20 hover:bg-black/50 rounded-full p-3 transition-all duration-200 hidden md:block"
            aria-label="Następne"
          >
            <ChevronRight size={40} />
          </button>

          {/* Kontener zdjęcia i opisu */}
          <div 
            className="relative flex flex-col items-center justify-center w-full h-full p-4 md:p-12" 
            onClick={e => e.stopPropagation()}
          >
            <img 
              src={currentImage.src} 
              alt={currentImage.alt} 
              className="max-w-full max-h-[80vh] object-contain shadow-2xl rounded-sm"
            />
            
            <div className="mt-4 text-center">
              <p className="text-white/90 text-lg font-medium font-serif tracking-wide max-w-3xl mx-auto bg-black/40 px-6 py-3 rounded-lg backdrop-blur-md border-l-4 border-red-600">
                {currentImage.caption || currentImage.alt}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}