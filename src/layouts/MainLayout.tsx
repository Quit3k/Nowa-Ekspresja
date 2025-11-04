import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

/*
  Ten komponent to "opakowanie" dla wszystkich stron, 
  które mają używać GŁÓWNEGO Navbara i Footera.

  <Navbar /> - renderuje się na górze.
  <Footer /> - renderuje się na dole.
  <Outlet /> - to magiczne miejsce, w którym React Router 
              "wstrzyknie" zawartość podstrony (np. stronę główną).
*/
export default function MainLayout() {
  return (
    <>
      <Navbar />
      
      <main>
        <Outlet />
      </main>
      
      <Footer />
    </>
  );
}