// Plik: src/components/artist-blocks/VideosBlock.tsx

import { useState } from 'react';

// --- Funkcja pomocnicza do wyodrębniania ID z linku YouTube ---
const getYouTubeVideoId = (url: string) => {
  let videoId = '';
  if (url.includes("youtube.com/watch?v=")) {
    videoId = url.split("v=")[1].split("&")[0];
  } else if (url.includes("youtu.be/")) {
    videoId = url.split("youtu.be/")[1].split("?")[0];
  } else if (url.includes("youtube.com/shorts/")) {
    videoId = url.split("shorts/")[1].split("?")[0];
  }
  return videoId;
};

// --- DEFINICJA DANYCH ---
// Definiujemy, jak wygląda pojedynczy film
interface VideoItem {
  title: string;
  url: string; // Oryginalny link do YouTube
}

// Definiujemy, jakie dane (props) ten komponent będzie przyjmował
export interface VideosBlockData {
  title: string;
  allVideos: VideoItem[]; // Tablica wszystkich filmów
  initialVisible: number; // Ile filmów pokazać na starcie
}

// --- KOMPONENT ---
export default function VideosBlock({ data }: { data: VideosBlockData }) {
  const [visibleVideos, setVisibleVideos] = useState(data.initialVisible);

  const loadMoreVideos = () => {
    setVisibleVideos(data.allVideos.length); // Pokaż wszystkie filmy
  };

  return (
    // --- POPRAWKA: Dodajemy ID pasujące do linku w Navbarze ---
    <section id="filmy" className="py-20 bg-gray-50">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
        {/* NAGŁÓWEK SEKCJI (DYNAMICZNY) */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-slate-800">
            {data.title}
          </h2>
          <div className="w-24 h-0.5 bg-red-500 my-6 mx-auto"></div>
        </div>

        {/* SIATKA Z KAFLKAMI FILMÓW (DYNAMICZNA) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Używamy .slice() do pokazania tylko widocznych filmów */}
          {data.allVideos.slice(0, visibleVideos).map((video, index) => {
            const videoId = getYouTubeVideoId(video.url);
            const embedUrl = `https://www.youtube.com/embed/${videoId}`;

            return (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-2xl">
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}> {/* Proporcje 16:9 */}
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-t-xl"
                    src={embedUrl}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={video.title}
                  ></iframe>
                </div>
                <div className="p-4">
                  <p className="text-lg font-semibold text-slate-800 mb-2">
                    {video.title}
                  </p>
                  <a 
                    href={video.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-red-600 hover:text-red-700 text-sm font-medium transition-colors"
                  >
                    Obejrzyj na YouTube
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Przycisk "Załaduj więcej" (jeśli jest co ładować) */}
        {visibleVideos < data.allVideos.length && (
          <div className="text-center mt-12">
            <button
              onClick={loadMoreVideos}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-xl hover:-translate-y-1"
            >
              Załaduj więcej
            </button>
          </div>
        )}
      </div>
    </section>
  );
}