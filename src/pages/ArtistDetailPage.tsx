// Plik: src/pages/ArtistDetailPage.tsx

import { useParams, Link } from 'react-router-dom';

// --- Import "Klocków", których będziemy używać ---
import HeroBlock from '../components/artist-blocks/HeroBlock';
import ArtisticJourneyBlock from '../components/artist-blocks/ArtisticJourneyBlock';
import InterviewsBlock from '../components/artist-blocks/InterviewsBlock';
import MasonryGalleryBlock from '../components/artist-blocks/MasonryGalleryBlock';
import VideosBlock from '../components/artist-blocks/VideosBlock';
// NOWY IMPORT:
import SocialsBlock from '../components/artist-blocks/SocialsBlock';

// --- Import DANYCH artystów ---
import { tracewskiData } from '../data/artists/wojciech-tracewski';

// --- "Baza danych" wszystkich artystów ---
const artistsDatabase = {
  'wojciech-tracewski': tracewskiData,
  // 'jan-kowalski': kowalskiData,
};

// --- Typ pomocniczy dla naszej bazy danych ---
type ArtistSlug = keyof typeof artistsDatabase;

export default function ArtistDetailPage() {
  // 1. Pobieramy `slug` z adresu URL
  const { slug } = useParams<{ slug: string }>();

  // 2. Sprawdzamy, czy slug istnieje i jest poprawnym kluczem
  if (!slug || !(slug in artistsDatabase)) {
    return (
      <main className="pt-32 pb-32 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-5xl font-serif font-bold text-slate-800 mb-4">
          Błąd 404
        </h1>
        <p className="text-lg text-slate-600">
          Nie znaleziono artysty o adresie: {slug}
        </p>
        <Link to="/" className="mt-8 inline-block text-red-600 font-semibold hover:underline">
          &larr; Wróć na stronę główną
        </Link>
      </main>
    );
  }

  // 3. Wiemy, że slug jest poprawny, więc pobieramy dane
  const artistData = artistsDatabase[slug as ArtistSlug];

  // 4. Renderujemy "klocki" na podstawie pobranych danych
  return (
    <div className="artist-page-container">
      {/* Klocek 1: Hero */}
      <HeroBlock data={artistData.hero} />

      {/* Klocek 2: Droga Artystyczna */}
      {artistData.journey && (
        <ArtisticJourneyBlock data={artistData.journey} />
      )}

      {/* Klocek 3: Wywiady */}
      {artistData.interviews && (
        <InterviewsBlock data={artistData.interviews} />
      )}

      {/* Klocek 4: Galeria */}
      {artistData.gallery && (
        <MasonryGalleryBlock data={artistData.gallery} />
      )}

      {/* Klocek 5: Filmy */}
      {artistData.videos && (
        <VideosBlock data={artistData.videos} />
      )}

      {/* NOWA SEKCJA: Klocek 6: Socials */}
      {artistData.socials && (
        <SocialsBlock data={artistData.socials} />
      )}

    </div>
  );
}