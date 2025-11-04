import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// --- STARE IMPORTY KOMPONENTÓW STRONY GŁÓWNEJ ---
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ArtistListSection from './components/ArtistListSection';
import HistorySection from './components/HistorySection';
import MainExhibitionsSection from './components/MainExhibitionsSection';
import PlacesSection from './components/PlacesSection';
import EasternExpressionsSection from './components/EasternExpressionsSection';

// --- NOWE IMPORTY LAYOUTÓW ---
import MainLayout from './layouts/MainLayout';
import ArtistLayout from './layouts/ArtistLayout';

// --- NOWY IMPORT PODSTRONY ARTYSTY ---
// Wskazujemy na plik, który stworzyliśmy w Kroku 7
import ArtistDetailPage from './pages/ArtistDetailPage';


// --- Komponent do obsługi przewijania (bez zmian) ---
function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }

    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    }
  }, [pathname, hash]);

  return null;
}

// --- Komponent grupujący sekcje strony głównej (bez zmian) ---
function HomePageContent() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ArtistListSection />
      <HistorySection />
      <MainExhibitionsSection />
      <PlacesSection />
      <EasternExpressionsSection />
    </>
  );
}

// --- ArtistDetailPage ZOSTAŁ STĄD USUNIĘTY ---
// (ponieważ jest teraz w osobnym pliku)


// --- GŁÓWNY KOMPONENT APLIKACJI (bez zmian w logice) ---
export default function App() {
  return (
    <>
      <ScrollToHash />
      
      <Routes>
        
        {/* ŚCIEŻKI UŻYWAJĄCE GŁÓWNEGO LAYOUTU */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePageContent />} />
        </Route>

        {/* ŚCIEŻKI UŻYWAJĄCE LAYOUTU ARTYSTY */}
        <Route element={<ArtistLayout />}>
          <Route path="/artysci/:slug" element={<ArtistDetailPage />} />
        </Route>

      </Routes>
    </>
  );
}