// Plik: src/components/artist-blocks/ArtisticJourneyBlock.tsx

// --- Funkcja pomocnicza do wideo (obsługuje linki YouTube) ---
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

// --- DEFINICJA DANYCH (ULEPSZONA) ---
interface TimelineItem {
  year: string;
  description: string;
  type: 'milestone' | 'exhibition';
  title?: string;
  imageUrl?: string;
  videoUrl?: string;
}

// Definicja propsów (bez zmian)
export interface ArtisticJourneyBlockData {
  title: string;
  timelineData: TimelineItem[];
  sidePattern: ('left' | 'right')[];
}

// --- KOMPONENT (ULEPSZONY) ---
export default function ArtisticJourneyBlock({ data }: { data: ArtisticJourneyBlockData }) {
  return (
    // --- POPRAWKA: Dodajemy ID pasujące do linku w Navbarze ---
    <section id="droga-artystyczna" className="py-20 bg-white">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
        {/* NAGŁÓWEK SEKCJI (DYNAMICZNY) */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-slate-800">
            {data.title}
          </h2>
          <div className="w-24 h-0.5 bg-red-500 my-6 mx-auto"></div>
        </div>

        {/* OŚ CZASU (DYNAMICZNA) */}
        <div className="relative">
          <div className="absolute left-1/2 top-0 h-full w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
          <div className="space-y-8">
            {data.timelineData.map((item, index) => {
              const side = data.sidePattern[index] || (index % 2 === 0 ? 'left' : 'right');
              const isLeft = side === 'left';
              const embedVideoId = item.videoUrl ? getYouTubeVideoId(item.videoUrl) : null;

              return (
                <div key={index} className="relative flex items-center w-full">
                  {/* Karta po lewej stronie */}
                  {isLeft && (
                    <div className="w-1/2 pr-8">
                      {/* --- NOWA STRUKTURA KAFELKA --- */}
                      <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden text-right">
                        {/* 1. SEKCJA MEDIA (jeśli istnieje) */}
                        {item.imageUrl && (
                          <img src={item.imageUrl} alt={item.title || item.description} className="w-full h-auto object-cover" />
                        )}
                        {embedVideoId && (
                          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}> {/* 16:9 */}
                            <iframe
                              className="absolute top-0 left-0 w-full h-full"
                              src={`https://www.youtube.com/embed/${embedVideoId}`}
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              title={item.title || 'Wideo'}
                            ></iframe>
                          </div>
                        )}
                        {/* 2. SEKCJA TEKSTOWA (zawsze ma padding) */}
                        <div className="p-6">
                          <p className="text-xl font-bold font-serif text-red-600 mb-2">{item.year}</p>
                          {item.type === 'exhibition' && <p className="font-semibold text-slate-700">{item.title}</p>}
                          <p className="text-slate-600 italic">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  )}
                  {!isLeft && <div className="w-1/2"></div>}

                  {/* Kropka na osi */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-red-500 rounded-full border-4 border-white z-10"></div>
                  
                  {/* Karta po prawej stronie */}
                  {!isLeft && (
                     <div className="w-1/2 pl-8">
                       {/* --- NOWA STRUKTURA KAFELKA --- */}
                      <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden text-left">
                        {/* 1. SEKCJA MEDIA (jeśli istnieje) */}
                        {item.imageUrl && (
                          <img src={item.imageUrl} alt={item.title || item.description} className="w-full h-auto object-cover" />
                        )}
                        {embedVideoId && (
                          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}> {/* 16:9 */}
                            <iframe
                              className="absolute top-0 left-0 w-full h-full"
                              src={`https://www.youtube.com/embed/${embedVideoId}`}
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              title={item.title || 'Wideo'}
                            ></iframe>
                          </div>
                        )}
                        {/* 2. SEKCJA TEKSTOWA (zawsze ma padding) */}
                        <div className="p-6">
                          <p className="text-xl font-bold font-serif text-red-600 mb-2">{item.year}</p>
                          {item.type === 'exhibition' && <p className="font-semibold text-slate-700">{item.title}</p>}
                          <p className="text-slate-600 italic">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  )}
                  {isLeft && <div className="w-1/2"></div>}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}