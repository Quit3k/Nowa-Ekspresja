// Plik: src/components/artist-blocks/MasonryGalleryBlock.tsx

import { useState } from 'react';

// --- DEFINICJA DANYCH ---
// Definiujemy, jakie dane (props) ten komponent będzie przyjmował
export interface MasonryGalleryBlockData {
  title: string;
  allImages: string[]; // Tablica ścieżek do obrazów
  initialVisible: number; // Ile obrazów pokazać na starcie
}

// --- KOMPONENT ---
export default function MasonryGalleryBlock({ data }: { data: MasonryGalleryBlockData }) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const loadMore = () => {
    setIsExpanded(true);
  };

  const openImage = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  // Logika dystrybucji obrazów do kolumn
  const columns: string[][] = [[], [], []];
  
  // Decydujemy, które obrazy pokazać
  const imagesToShow = isExpanded 
    ? data.allImages 
    : data.allImages.slice(0, data.initialVisible);

  // Rozdzielamy obrazy do 3 kolumn
  imagesToShow.forEach((image, index) => {
    columns[index % 3].push(image);
  });

  return (
    <>
      <section className="py-20 bg-white">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
          {/* NAGŁÓWEK SEKCJI (DYNAMICZNY) */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-slate-800">
              {data.title}
            </h2>
            <div className="w-24 h-0.5 bg-red-500 my-6 mx-auto"></div>
          </div>

          {/* Galeria w stylu Masonry (DYNAMICZNA) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {columns.map((column, colIndex) => (
              <div key={colIndex} className="flex flex-col gap-6">
                {column.map((imageUrl, imgIndex) => (
                  <div 
                    key={imgIndex} 
                    className="overflow-hidden rounded-xl shadow-md cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                    onClick={() => openImage(imageUrl)}
                  >
                    <img
                      src={imageUrl}
                      alt={`Dzieło sztuki ${colIndex}-${imgIndex}`}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Przycisk "Załaduj więcej" (pokazuje się, jeśli jest co ładować) */}
          {!isExpanded && data.allImages.length > data.initialVisible && (
            <div className="text-center mt-12">
              <button
                onClick={loadMore}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-xl hover:-translate-y-1"
              >
                Załaduj więcej zdjęć
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Modal (Lightbox) do wyświetlania pełnego obrazu */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4 transition-opacity duration-300"
          onClick={closeImage}
        >
          <div className="relative max-w-screen-lg max-h-[90vh] w-auto h-auto" onClick={(e: React.MouseEvent) => e.stopPropagation()}>
            <img 
              src={selectedImage} 
              alt="Powiększone dzieło sztuki" 
              className="object-contain w-full h-full rounded-lg"
            />
            <button
              onClick={closeImage}
              className="absolute -top-4 -right-4 bg-white text-slate-800 rounded-full h-10 w-10 flex items-center justify-center text-2xl font-bold shadow-lg hover:bg-red-500 hover:text-white transition-colors"
              aria-label="Zamknij"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
}