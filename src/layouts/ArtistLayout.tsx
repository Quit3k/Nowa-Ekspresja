// Plik: src/layouts/ArtistLayout.tsx

import { Outlet } from 'react-router-dom';
// POPRAWKA: Importujemy nowe, dedykowane komponenty
import NavbarArtist from '../components/NavbarArtist';
import FooterArtist from '../components/FooterArtist';

/*
  Ten komponent to "opakowanie" dla wszystkich stron ARTYSTÓW.
  Teraz używa dedykowanego Navbara i Footera.
*/
export default function ArtistLayout() {
  return (
    <>
      {/* POPRAWKA: Używamy nowego komponentu */}
      <NavbarArtist /> 
      
      <main>
        <Outlet />
      </main>
      
      {/* POPRAWKA: Używamy nowego komponentu */}
      <FooterArtist />
    </>
  );
}