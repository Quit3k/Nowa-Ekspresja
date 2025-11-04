// Plik: src/data/artists/wojciech-tracewski.ts

// 1. Importujemy typy z naszych "klocków"
import type { HeroBlockData } from '../../components/artist-blocks/HeroBlock';
import type { ArtisticJourneyBlockData } from '../../components/artist-blocks/ArtisticJourneyBlock';
import type { InterviewsBlockData } from '../../components/artist-blocks/InterviewsBlock';
import type { MasonryGalleryBlockData } from '../../components/artist-blocks/MasonryGalleryBlock';
import type { VideosBlockData } from '../../components/artist-blocks/VideosBlock';
// NOWY IMPORT:
import type { SocialsBlockData } from '../../components/artist-blocks/SocialsBlock';

// --- Definicja danych artysty ---
interface ArtistData {
  hero: HeroBlockData;
  journey?: ArtisticJourneyBlockData;
  interviews?: InterviewsBlockData;
  gallery?: MasonryGalleryBlockData;
  videos?: VideosBlockData;
  socials?: SocialsBlockData; // Dodane pole socials
}

// --- Funkcja pomocnicza do galerii (bez zmian) ---
const generateGalleryImages = (): string[] => {
  const paths: string[] = [];
  const basePath = "/Nowa-Ekspresja/assets/wojciech-tracewski";

  paths.push(`${basePath}/as.jpg`);
  for (let i = 1; i <= 15; i++) {
    paths.push(`${basePath}/as${i}.jpg`);
  }
  return paths;
};

// --- DANE DLA WOJCIECHA TRACEWSKIEGO ---
export const tracewskiData: ArtistData = {
  
  // Dane dla klocka HeroBlock
  hero: {
    artistName: "Wojciech Tracewski",
    artistImage: "/Nowa-Ekspresja/assets/wojciech-tracewski/foto.JPG",
    description: "Artysta, malarz, twórca. To jest strona w całości poświęcona jego twórczości, pasji i wizji artystycznej.",
    mainWorkImage: "/Nowa-Ekspresja/assets/wojciech-tracewski/Dom1.jpg",
    mainWorkTitle: "praca pod tytułem \"Baba\""
  },

  // Dane dla klocka ArtisticJourneyBlock
  journey: {
    title: "Droga Artystyczna",
    sidePattern: ['left', 'right', 'right', 'left', 'right', 'left', 'left', 'right', 'right', 'left', 'right', 'left'],
    timelineData: [
      { year: "1962", description: "Urodzony 20 lutego w Warszawie.", type: 'milestone' },
      { year: "1981-1986", description: "Studia na Wydziale Malarstwa ASP w Warszawie.", type: 'milestone' },
      { year: "1983", description: "Pierwsze wspólne wystawy ze Zbigniewem Maciejem Dowgiałłą.", type: 'milestone' },
      { year: "1986", title: "Wystawa zbiorowa", description: "„Ekspresja lat 80-tych”, BWA, Sopot.", type: 'exhibition' },
      { year: "1987", description: "Rezygnacja z malarstwa i rozpoczęcie działalności jako nauczyciel buddyjski.", type: 'milestone' },
      { year: "1987", title: "Wystawa zbiorowa", description: "„Co słychać?”, d. Zakłady Norblina, Warszawa.", type: 'exhibition' },
      { year: "1988", title: "Wystawa zbiorowa", description: "„Świeżo malowane. Młode malarstwo polskie 1982-87”, Galeria Zachęta, Warszawa.", type: 'exhibition' },
      { year: "2008", title: "Wystawa zbiorowa", description: "„Republika bananowa. Ekspresja lat 80” (Wałbrzych, Szczecin, Toruń, Poznań, Gdańsk).", type: 'exhibition' },
      { year: "2010", title: "Wystawa zbiorowa", description: "„East Beast. Polska Nowa ekspresja od lat 80. XX w.”, Drezno, Niemcy.", type: 'exhibition' },
      { year: "2021", title: "Wystawa zbiorowa", description: "„Kolekcja Jerke”, Państwowa Galeria Sztuki w Sopocie.", type: 'exhibition' },
      { year: "2024", title: "Wystawa zbiorowa", description: "„Nowa ekspresja”, Centrum Sztuki Współczesnej Znaki Czasu w Toruniu.", type: 'exhibition' },
      { year: "2025", description: "Planowana indywidualna wystawa w Motril, Hiszpania oraz udział w wystawie „Pozytywna ekspresja” we Wrocławiu.", type: 'milestone' }
    ]
  },
  
  // Dane dla klocka InterviewsBlock
  interviews: {
    title: "Wywiady",
    quote: "„Stary Waran siadywał zwykle przed chatą i długim językiem gada zlizywał powoli krew z powalonych nocą dziewic. Truchła nieszczęsnych ofiar zalegały niestety stertami wszędzie wokół — nie sprzątane od miesięcy — i stara Waranowa patrzeć już nie mogła na to świństwo.”",
    quoteAuthor: "Wojciech Tracewski, utwór pt. „Waranie, Waranie\"",
    interviews: [
      { year: "1986", image: "/Nowa-Ekspresja/assets/wojciech-tracewski/1986.jpg", title: "Czterdzieści cztery dni sodomy. Plus trzy dni gomory", excerpt: "Sztuka: Co Panowie mają do powiedzenia? Tracewski: - Sztuka pojawia się jak błyskawica. Sztuka: - Co to znaczy? Dowgiałło: - Sztuka pojawia się jak błyskawica. Sztuka: - Więc o czym będziemy mówić ? Dowgiałło: - O kobietach.", readMoreUrl: "#" },
      { year: "2020", image: "/Nowa-Ekspresja/assets/wojciech-tracewski/2020.jpg", title: "Artystyczna historia Wojtka T.", excerpt: "Myślę, że każdy, kto tworzy sztukę, muzykę lub literaturę, ma to w jakiś sposób we krwi. Namalowałem pierwsze obrazy, gdy miałem 16 lat. W wieku 19 lat rozpocząłem studia malarstwo na Akademii Sztuk Pięknych w Warszawie; to był rok 1981.", readMoreUrl: "#" },
      { year: "2010", image: "/Nowa-Ekspresja/assets/wojciech-tracewski/2010.jpg", title: "O przerwie, której w pewnym sensie nie było", excerpt: "Jechałem na to spotkanie bardzo podekscytowany. Miałem zobaczyć obrazy, które namalował Wojtek Tracewski po 23 latach przerwy podczas trzytygodniowej sesji w pracowni Ryszarda Woźniaka w podwarszawskiej Wiązownej.", readMoreUrl: "#" },
      { year: "2025", image: "/Nowa-Ekspresja/assets/wojciech-tracewski/2025.jpeg", title: "Nota biograficzna", excerpt: "Ur. 20. II.1962 r. w Warszawie. Studia: 1981-86 ASP w Warszawie, Wydział Architektury Wnętrz, a następnie Wydział Malarstwa, dyplom 1986 w pracowni malarstwa prof. Tadeusza Dominika. Uprawiał malarstwo, rysunek, akcje artystyczne.", readMoreUrl: "#" },
      { year: "2008", image: "/Nowa-Ekspresja/assets/wojciech-tracewski/2008.jpg", title: "O SZCZĘŚCIU", excerpt: "Po wpisaniu do wyszukiwarki Google hasła: „Wojtek Tracewski”, najpierw otwiera się internetowy wywiad z serii „Inny Punkt Widzenia”, przeprowadzony w TVN24 przez Grzegorza Miecugowa w 2006 roku. Warto go obejrzeć z uwagą.", readMoreUrl: "#" }
    ]
  },

  // Dane dla klocka MasonryGalleryBlock
  gallery: {
    title: "Galeria",
    initialVisible: 14,
    allImages: generateGalleryImages()
  },

  // Dane dla klocka VideosBlock
  videos: {
    title: "Filmy",
    initialVisible: 6,
    allVideos: [
      { title: "WT w drodze na otwarcie „Co słychać”:", url: "https://www.youtube.com/shorts/YTEX9wpEC84" },
      { title: "Na wystawie Nowa ekspresja w Toruniu (Sławomir Ratajski, Wojciech Tracewski, Ryszard Woźniak):", url: "https://www.youtube.com/shorts/yr5mpWtB5z0" },
      { title: "Wystawa EAST BEAST w Dreźnie:", url: "https://www.youtube.com/watch?v=FBN57XjI7-0&t=6s" },
      { title: "Audycja o wystawie CO SŁYCHAĆ:", url: "https://www.youtube.com/watch?v=5S6qFSUM6Mk&t=66s" },
      { title: "AUDYCJA SHORT O NOWEJ EKSPRESJI W Toruniu:", url: "https://www.youtube.com/watch?v=-c-QK42QXRU" },
      { title: "Sztuka głęboka i niepoważna | Rozmowa z Wojciechem Tracewskim, malarzem, poetą Transawangardy #art:", url: "https://www.youtube.com/watch?app=desktop&v=htG5N2nXRt0" },
      { title: "Wojtek Tracewski i Zbigniew Maciej Dowgiałło o wystawie w Dużym Pawilonie SARP w 1986:", url: "https://www.youtube.com/shorts/t_66pg5D_B8" }
    ]
  },

  // NOWA SEKCJA: Dane dla klocka SocialsBlock
  socials: {
    title: "Bądź na bieżąco",
    description: "Jeśli chcesz głębiej zanurzyć się w świat mojej twórczości, śledzić najnowsze prace i być na bieżąco z nadchodzącymi wystawami, zapraszam do odwiedzenia moich profili w sieci. To najlepszy sposób, by pozostać w kontakcie i nie przegapić żadnych artystycznych nowości.",
    websiteUrl: "https://wojciechtracewski.art",
    instagramUrl: "https://www.instagram.com/wojciech_tracewski_art/"
  }
};