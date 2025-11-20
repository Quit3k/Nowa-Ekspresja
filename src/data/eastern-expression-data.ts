// POPRAWKA: Dodano 'type' do importu
import type { GalleryItem } from '../components/FilterableGallery';

export interface ContentBlock {
  type: 'header' | 'paragraph' | 'image' | 'logo' | 'gallery-filter';
  text?: string;
  src?: string;
  caption?: string;
  galleryItems?: GalleryItem[]; 
  galleryTitle?: string;
}

const basePath = "/Nowa-Ekspresja/assets/wschodnie";

// --- PEŁNA GALERIA ZDJĘĆ (b1 - b47) ---
const galleryPhotos: GalleryItem[] = [
  // --- BAŁKANY ---
  { id: 'b1', src: `${basePath}/b1.jpg`, category: 'Bałkany', alt: 'IRWIN, Malewicz między wojnami', caption: 'IRWIN, Malewicz między wojnami, 1985, technika mieszana, 77x51cm, fot. ArtMargins' },
  { id: 'b2', src: `${basePath}/b2.jpg`, category: 'Bałkany', alt: 'NSK-Leibach, Błękitny siewca', caption: 'NSK-Leibach, Błękitny siewca w gabinecie Lenina, 1982, fot. NSK' },

  // --- BIAŁORUŚ ---
  { id: 'b3', src: `${basePath}/b3.jpg`, category: 'Białoruś', alt: 'Alexei Lunev, Mięso', caption: 'Alexei Lunev, Mięso, 2010, kadr z filmu video, fot. Alexei Lunev, Galeria Y.' },
  { id: 'b4', src: `${basePath}/b4.jpg`, category: 'Białoruś', alt: 'Alexei Lunev, Sketchbook', caption: 'Alexei Lunev, Sketchbook, 2002-03, technika własna, papier, fot. Alexei Lunev, Galeria Y' },
  { id: 'b5', src: `${basePath}/b5.jpg`, category: 'Białoruś', alt: 'Artur Klinau, Nowy Rok', caption: 'Artur Klinau, Nowy Rok, 2008, olej, płótno, fot. Artur Klinau.' },
  { id: 'b6', src: `${basePath}/b6.jpg`, category: 'Białoruś', alt: 'Artur Klinau, Ostatnia Wieczerza', caption: 'Artur Klinau, Ostatnia Wieczerza, 2011, instalacja, słoma, 10x3x1,8 m, Biennale weneckie 2011, fot. Krzysztof Stanisławski' },
  { id: 'b7', src: `${basePath}/b7.jpg`, category: 'Białoruś', alt: 'Obrazy Victora Petrova', caption: 'Obrazy Victora Petrova po 2000, fot. Victor Petrov.' },
  { id: 'b8', src: `${basePath}/b8.jpg`, category: 'Białoruś', alt: 'Performance Petrova', caption: 'Performance Petrova przed jego obrazem Apokalipsa na otwarciu wystawy Biało-czerwono-biali, kurator Krzysztof Stanisławski, fot. KS.' },
  { id: 'b9', src: `${basePath}/b9.jpg`, category: 'Białoruś', alt: 'Victor Petrov, Apokalipsa', caption: 'Victor Petrov, Apokalipsa, 1997, olej, papier, 430x445 cm, 24. Biennale weneckie 2011, fot. Krzysztof Stanisławski.' },
  { id: 'b10', src: `${basePath}/b10.jpg`, category: 'Białoruś', alt: 'Victor Petrov, Marfa i Maria', caption: 'Victor Petrov, Marfa i Maria, 2008, olej, płótno, 150x180 cm, fot. Victor Petrov.' },

  // --- ESTONIA ---
  { id: 'b11', src: `${basePath}/b11.jpg`, category: 'Estonia', alt: 'Jaak Arro', caption: 'Jaak Arro, Na drodze na drugą stronę, 1988, olej, drzeworyt, drewno, wł.KUMU, fot.Krzysztof Stanisławski' },
  { id: 'b12', src: `${basePath}/b12.jpg`, category: 'Estonia', alt: 'Jaan Toomik, Duża głowa', caption: 'Jaan Toomik, Duża głowa, 1989-90, olej, płyta pilśniowa, 290x206cm, wł. i fot. Eesti Kunstimuuseum SA' },
  { id: 'b13', src: `${basePath}/b13.jpg`, category: 'Estonia', alt: 'Jaan Toomik, Menstruacja', caption: 'Jaan Toomik, Menstruacja, 1989, olej, płótno, 120x40cm, wł. KUMU, fot. Krzysztof Stanisławski' },
  { id: 'b14', src: `${basePath}/b14.jpg`, category: 'Estonia', alt: 'Jaan Toomik, Tancerz', caption: 'Jaan Toomik, Tancerz, 1991, technika mieszana, 260x230x17cm, wł. i fot. Eesti Kunstimuuseum SA' },

  // --- LITWA ---
  { id: 'b15', src: `${basePath}/b15.jpg`, category: 'Litwa', alt: 'Arunas Vaitiekunas', caption: 'Arunas Vaitiekunas, Fort Dweller, 2001-02, olej, płótno, 198x140cm, podczas ostatniej wizyty w pracowni za jego zycia.' },
  { id: 'b16', src: `${basePath}/b16.jpg`, category: 'Litwa', alt: 'Jaan Toomik, Tancerz', caption: 'Jaan Toomik, Tancerz, 1991, technika mieszana, 260x230x17cm, wł. i fot. Eesti Kunstimuuseum SA' },
  { id: 'b17', src: `${basePath}/b17.jpg`, category: 'Litwa', alt: 'Arunas Vaitiekunas', caption: 'Jeden z obrazów Arunasa Vaitiekunasa podczas wizyty w jego pracowni w 2008' },
  { id: 'b18', src: `${basePath}/b18.jpg`, category: 'Litwa', alt: 'Jonas Gasiunas', caption: 'Jonas Gasiunas, obraz' },
  { id: 'b19', src: `${basePath}/b19.jpg`, category: 'Litwa', alt: 'Jonas Gasiunas', caption: 'Jonas Gasiunas, Son of Frankenshtain raises a toast for You' },
  { id: 'b20', src: `${basePath}/b20.jpg`, category: 'Litwa', alt: 'Jonas', caption: 'Jonas, Kryminalista' },

  // --- ŁOTWA ---
  { id: 'b21', src: `${basePath}/b21.jpg`, category: 'Łotwa', alt: 'Aija Zarina', caption: 'Aija Zarina, Obraz' },
  { id: 'b22', src: `${basePath}/b22.jpg`, category: 'Łotwa', alt: 'Aija Zariņa', caption: 'Aija Zariņa, obraz1' },

  // --- NRD ---
  { id: 'b23', src: `${basePath}/b23.jpg`, category: 'NRD', alt: 'Angela Hampel', caption: 'Angela Hampel, Undine odchodzi, rzeźba stalowa, Drezno, fot.Wiki Commons' },
  { id: 'b24', src: `${basePath}/b24.jpg`, category: 'NRD', alt: 'Angela Hampel', caption: 'Angela Hampel, Bez tytułu, 2020, akwarela, papier, 42x29cm, fot.Invaluable.' },
  { id: 'b25', src: `${basePath}/b25.jpg`, category: 'NRD', alt: 'Angela Hampel, Medea', caption: 'Angela Hampel, Medea, 1988, olej, płótno, wł. Nationalgalerie, Berlin, fot. Krzysztof Stanisławski' },
  { id: 'b26', src: `${basePath}/b26.jpg`, category: 'NRD', alt: 'Angela Hampel, Młode malarstwo NRD', caption: 'Angela Hampel, Młode malarstwo NRD, 1985, litografia, papier, fot.Invaluable.' },
  { id: 'b27', src: `${basePath}/b27.jpg`, category: 'NRD', alt: 'Trak Wendisch', caption: 'Trak Wendisch, Berlin, Berlin III, 1988, olej, plótno, 211,4x202,3 cm, fot.MutualArt.' },
  { id: 'b28', src: `${basePath}/b28.jpg`, category: 'NRD', alt: 'Trak Wendisch, El Colosso', caption: 'Trak Wendisch, El Colosso, 1986-87, technika mieszana, płotno, 240x205cm, wł.National Galerie, Berlin, fot. Trak' },
  { id: 'b29', src: `${basePath}/b29.jpg`, category: 'NRD', alt: 'Trak Wendisch, Mężczyzna z psem', caption: 'Trak Wendisch, Mężczyzna z psem, 1984-85, olej, płyta, 235x125cm, fot. Trak' },
  { id: 'b30', src: `${basePath}/b30.jpg`, category: 'NRD', alt: 'Trak Wendisch, Niedzielny poranek', caption: 'Trak Wendisch, Niedzielny poranek, 1982-83, technika mieszana, płyta, 166x131cm, fot. TRAK' },

  // --- ROSJA ---
  { id: 'b31', src: `${basePath}/b31.jpg`, category: 'Rosja', alt: 'Andrei Roiter', caption: 'Andrei Roiter, Adidas, 1988, olej, płótno, 52x35 cm, fot.Vladey' },
  { id: 'b32', src: `${basePath}/b32.jpg`, category: 'Rosja', alt: 'Grisza Brushkin', caption: 'Grisza Brushkin, Scene Change, 2017, instalacja, materiały różne, multimedia, ekspozycja w pawilonie Rosji na Biennale weneckim 2017' },
  { id: 'b33', src: `${basePath}/b33.jpg`, category: 'Rosja', alt: 'Grisza Brushkin', caption: 'Grisza Brushkin, Pieriestrojka, 1988, olej, płótno, fot. Pinterest.' },
  { id: 'b34', src: `${basePath}/b34.jpg`, category: 'Rosja', alt: 'Grisza Bruszkin', caption: 'Grisza Bruszkin, Scene Change, 2017, instalacja, materiały rózne, multimedia, ekspozycja w pawilonie Rosji na Biennale weneckim, fot. Krzysztof Stanisławski' },
  { id: 'b35', src: `${basePath}/b35.jpg`, category: 'Rosja', alt: 'Sergey Bugaev -Afrika', caption: 'Sergey Bugaev -Afrika, Bez tytułu (Klinem bij starych) z cyklu Anty Lissitski, 1991, akryl, płyta, fot. Vladey.' },
  { id: 'b36', src: `${basePath}/b36.jpg`, category: 'Rosja', alt: 'Sergey Bugaev -Afrika', caption: 'Sergey Bugaev -Afrika, frament obrazu Assa, 1980, akryl,płyta, fot.Vladey' },
  { id: 'b37', src: `${basePath}/b37.jpg`, category: 'Rosja', alt: 'Sergey Bugaev -Afryka', caption: 'Sergey Bugaev -Afryka, Affazja 1994, technika włąsna, sztandar, fot.Vladey' },
  { id: 'b38', src: `${basePath}/b38.jpg`, category: 'Rosja', alt: 'Timur Novikow', caption: 'Timur Novikow, ZSRR, połowa lat 80., technika mieszana, płótno, 200x310 cm, fot. Vladey' },

  // --- UKRAINA ---
  { id: 'b39', src: `${basePath}/b39.jpg`, category: 'Ukraina', alt: 'Arsen Savadov', caption: 'Arsen Savadov, Collective Red (cz. I), 1999, fotografia inscenizowana, dibond, fot. WikiArt.' },
  { id: 'b40', src: `${basePath}/b40.jpg`, category: 'Ukraina', alt: 'Arsen Savadov', caption: 'Arsen Savadov, Donbass Chocolate, 1997, fotografia inscenizowana, fot. WikiArt (2)' },
  { id: 'b41', src: `${basePath}/b41.jpg`, category: 'Ukraina', alt: 'Arsen Savadov', caption: 'Arsen Savadov, Donbass Chocolate, 1997, fotografia inscenizowana, fot. WikiArt' },
  { id: 'b42', src: `${basePath}/b42.jpg`, category: 'Ukraina', alt: 'Arsen Savadov', caption: 'Arsen Savadov, Smutek Kleopatry, 1987, olej, płótno, fot. Wikiart' },
  { id: 'b43', src: `${basePath}/b43.jpg`, category: 'Ukraina', alt: 'Arsen Savadov', caption: 'Arsen Savadov, Święty Sebastian, 2018' },
  { id: 'b44', src: `${basePath}/b44.jpg`, category: 'Ukraina', alt: 'Oleg Holosij', caption: 'Oleg Holosij, Yellow Room, 1989, olej, płótno, fot. WikiArt.' },

  // --- WĘGRY ---
  { id: 'b45', src: `${basePath}/b45.jpg`, category: 'Węgry', alt: 'El Kazovszkij', caption: 'El Kazovszkij, Balet górski w ramie, 2002, fot. Varfok Gallery.' },
  { id: 'b46', src: `${basePath}/b46.jpg`, category: 'Węgry', alt: 'El Kazovszkij', caption: 'El Kazovszkij, Świąteczna choinka z dziewięcioma wilkami, 1994, olej, płyta, 80x60 cm, fot. Varfok Gallery.' },
  { id: 'b47', src: `${basePath}/b47.jpg`, category: 'Węgry', alt: 'Janos Veto', caption: 'Janos Veto, Kapitan lodów, 2020, akryl, płotno, tasma samoprzylepna, tekstura, 72x52 cm, fot. Artmagazin Online' },
];

// --- PEŁNA TREŚĆ ARTYKUŁU ---
export const easternExpressionData: ContentBlock[] = [
  // WSTĘP
  { type: 'paragraph', text: 'Nowa ekspresja była jednym z odłamów światowej transawangardy, która zdominowała sztukę, a zwłaszcza malarstwo końca lat 70. I całej dekadzie lat 80. Było to zjawisko zupełnie równorzędne i równoczesne w stosunku do tak powszechnie znanych kierunków jak niemieckie „Neue Wilde”, włoska „arte cifra”, zwana też „La Transavanguardia” (termin Achille Benito Olivy, rozszerzony później na całe spectrum międzynarodowe ruchu), francuska „Figuration libre” czy amerykańskie „New Image Painting”.' },
  { type: 'paragraph', text: 'Oliva sformułował założenia filozofii nowej sztuki przełomu lat 70. i 80., używając swoistego terminu transawangarda, który należy rozumieć jako przekraczanie awangardy (łac. trans-avanguardia). Według Olivy, sztuka nie musi podążać za linearną ewolucją i ciągłym poszukiwaniem nowości, co było swoistym terrorem ubiegłych dekad. Zamiast tego, postulował, by artyści swobodnie czerpali z całej historii sztuki i z dużą dowolnością cytowali zarówno dzieła, jak i style czy poetyki.' },
  { type: 'paragraph', text: 'Transawangarda była reakcją na intelektualny i zideologizowany charakter sztuki konceptualnej i tzw. zimnych mediów lat 70. Oliva przywrócił do łask malarstwo, uznając je za podstawowe medium artystyczne, co dodatkowo wpłynęło na zwiększenie stopnia rozumienia sztuki przez odbiorców, nawet masowych, a także napędziło rynek sztuki, który w latach 80. przeżywał prawdziwy boom.' },
  { type: 'paragraph', text: 'Pisał włoski krytyk: „Transawangarda wyzwoliła artystów. Moja teoria uwolniła twórców od ideologii darwinizmu lingwistycznego, czyli koncepcji linearnej ewolucji sztuki. Taki właśnie linearny charakter dominował do lat 70. ubiegłego wieku. Transawangarda przywróciła sztuce romantyczny aspekt, dała jej tożsamość antropologiczną i terytorium, które weszło w interakcje z rozmaitymi językami przekazu”.' },
  { type: 'paragraph', text: 'Termin Olivy i jego teksty zawarte w książce nie były tylko manifestem nowości, odnoszących się do twórczości kilku młodych Włochów z kręgu „sztuki szyfrów” (arte cifra), to było wyznanie uniwersalnych idei, które były zbieżne z poglądami wielu artystów tamtej epoki, także polskich.' },
  { type: 'paragraph', text: 'W swojej następnej książce „Transavanguardia internazionale” (1982) pisał o artystach z różnych krajów, którzy tworzyli w nurcie zbieżnym z ideami włoskiej Transawangardy, ale bez tych zza Żelaznej kurtyny. Wśród artystów spoza Włoch, znaleźli się m.in.: Amerykanie Julian Schnabel, David Salle, Amerykanka Susan Rothenberg, Jonathan Borofsky, Eric Fischl i Jean-Michel Basquiat, Niemcy Anselm Kiefer, A. R. Penck, Jörg Immendorff, Markus Lüpertz, Helmut Middendorf i Georg Baselitz, Brytyjki Eileen Cooper i Paula Rego oraz Braco Dimitrijević z Jugosławii, obecnie z Bośnia i Hercegowiny.' },
  { type: 'paragraph', text: 'A ja znam „dzikie” obrazy polskich malarzy z końca lat 70., widziałem i wystawiałem je wielokrotnie na swoich wystawach Nowej ekspresji po 2006. Powstały w tym samym czasie, co prace Sandro Chia, Mimmo Paladino, Enzo Cucchiego czy Francesco Clementego. Powstawały kompletnie osobno, równolegle, bez żadnego opóźnienia.' },
  { type: 'paragraph', text: 'Znam też „dzikie” dzieła artystów z innych krajów wschodnioeuropejskich.' },

  // KRAJE BAŁTYCKIE
  { type: 'header', text: 'KRAJE BAŁTYCKIE' },
  { type: 'paragraph', text: 'W latach 80. XX w. do pierwszych lat 90. właściwie Litewska, Łotewska i Estońska Socjalistyczne Republiki Radzieckie w ramach ZSRR.' },
  { type: 'paragraph', text: 'Obrazy „dzikich” Litwinów, powstawały od początku lat 80., aż do przełomu 80./90. Mowa o takich artystach, jak Jonas Gasiūnas, Rimvidas Jankauskas-KAMPAS, Arūnas Vaitiekūnas, Henrikas Čerapas (wszyscy z grupy ANGIS, 1990-93).' },
  { type: 'paragraph', text: 'Na szczególna uwagę zasługuje zwłaszcza Gasiūnas, w moim przekonaniu nie tylko najlepszy malarz litewski, ale jeden z najciekawszych w całej Europie. Zaczynał jako „dziki” neoekspresjonista i ta postawa, a nawet poetyka, pomimo używania odmiennych środków, ukształtowała go na całe życie.' },
  { type: 'paragraph', text: 'W pierwszym okresie swojej twórczości Gasiūnas tworzył równoległe z malarstwem rzeźby i instalacje. Były to działania dość typowe dla całej transawangardy europejskiej i amerykańskiej, choć trzeba przyznać, że prace Litwina z zakresu tych dyscyplin odznaczały się oryginalnością formy i przekazu, oraz że bliżej im było do instalacji Josepha Beuysa, niż rzeźb Georga Baselitza. Dotyczy to zwłaszcza monumentalnej instalacji „Arbeit macht Frei”, wykorzystującej materiały naturalne: paski kory wierzbowej zwijane w ogromny kłębek, zwisający z sufitu, a pod nimi morski piasek i muszle, albo kręgi niedopalonych pni (z palarni węgla drzewnego), ustawione na stołach i tworzących czarny, ażurowy mur, czy pokryte ciemnoszarą farbą ziemniaki, układające się w przerażający pas transmisyjny, przywodzący na myśl koszmar pracy przymusowej nie tylko w obozach hitlerowskich (na co jednoznacznie zdawałby się wskazywać tytuł instalacji – napis na bramie Auschwitz), ale i łagrów stalinowskich, co było bliższą dla niego perspektywą narodową i rodzinną.' },
  { type: 'paragraph', text: 'Gasiūnas debiutował dokładnie w połowie lat 80. jako neoekspresjonista, autor wielkoformatowych płócien. Te obrazy oraz następne, malowane już na początku lat 90., przyniosły artyście, co przyznaje historyk sztuki i kurator Kęstutis Kuizinas: „Gasiūnas nie występuje przeciwko "obrazowemu" rozumienie sztuki współczesnej na Litwie, a raczej kontynuuje takie podejście, uzupełniając je świeżymi aspektami języka wizualnego”. Owo „obrazowe” rozumienie, to nic innego, jak odniesienie do tradycji litewskiego malarstwa. Obrazy Gasiūnasa z przełomu lat 80. i 90. są przykładem dialogu młodego malarza z tradycją ekspresjonizmu litewskiego, któremu przecież dane było bezpośrednie zetknięcie z twórczością artystów „Die Brűcke”, tworzących tu „Künstlerkolonie Nidden“ w czasie I wojny światowej i w latach międzywojennych. To z jednej strony, z drugiej jednak silne były nawiązania do neoekresjonizmu niemieckiego lat 60. i 80. z kręgu Georga Baselitza, A. R. Pencka, Markusa Lüpertza czy niemal rówieśników Jonasa – artystów „Neue Wilde“ przełomu lat 70. i 80.' },
  
  { type: 'image', src: `${basePath}/p1.png`, caption: 'Jonas Gasiūnas, Sticks Perish in the Light, 1996, olej, płótno, 303x288 cm, fot. Galerija Meno parkas.' },
  { type: 'image', src: `${basePath}/p2.png`, caption: 'Jonas Gasiūnas, Kryminalista płacze w deszczu, 1992, olej, płótno 200x450 cm, fot. Galerija Meno parkas.' },

  { type: 'paragraph', text: '„Dziki” ekspresjonizm był dla Gasiūnasa szkołą myślenia o malarstwie, sposobem wyrażania siebie, ale i artykułowania najważniejszych kwestii na temat egzystencji własnej i własnego narodu.' },
  { type: 'paragraph', text: 'Styl transawangardowy w jego wydaniu nie był wcale „bardziej umiarkowany” i nie brakowało mu impetu i brutalności Baselitza, Hӧdickego, Salomego albo Fettinga, jak chciała litewska profesorka historii sztuki Raminta Jurėnaitė. Wręcz przeciwnie: jego ekspresja jest dużo ostrzejsza i bardziej dynamiczna, a przede wszystkim autentyczna, ponieważ stanowi wyraz buntu nie tylko przeciwko mieszczańskiemu spokojowi sytego kapitalizmu Zachodu lat 80., ale protest przeciw komunistycznemu uciskowi narodowemu i społecznemu, zamknięciu i biedzie Wschodu w tej samej i następnej dekadzie XX wieku.' },
  { type: 'paragraph', text: 'Estetycznie są to obrazy zbliżone, jednak emocjonalnie i ideowo dzieli je przepaść. Także czasowa, bo powstały wiele lat po pierwszych triumfach „nowych dzikich” we Włoszech i Niemczech.' },
  
  { type: 'image', src: `${basePath}/p3.png`, caption: 'Jonas Gasiūnas, Syn Frankensteina wznosi toast na Twoją cześć, 2024, olej, sadza, płótno, fot. Galerija Meno parkas.' },
  
  { type: 'paragraph', text: 'Te same słowa odnoszą się do nieco młodszego od Jonasa malarza kowieńskiego Arūnasa Vaitkūnasa, niezwykle utalentowanego neoekspresjonisty, niestety przedwcześnie zmarłego w 2005. W swoisty dla ekspresjonisty sposób łączył elementy przedstawiające z abstrakcją, wyrażając swoje emocje za pomocą ostrych form i barw, zachowując jednak doskonałe wyważenie proporcji i elegancję całości „dzikiego” dzieła. Był mistrzem dla całej grupy malarzy litewskich, skupionych w grupie ANGIS.' },

  { type: 'image', src: `${basePath}/p4.png`, caption: 'Arūnas Vaitkūnas, Mieszkaniec fortu, 2001-02, olej, płótno, 198x140cm, zdjęcie wykonane podczas ostatniej mojej wizyty w pracowni za jego życia, fot. Krzysztof Stanisławski.' },
  { type: 'image', src: `${basePath}/p5.png`, caption: 'Jeden z obrazów Arūnasa Vaitkūnasa, zdjęcie zrobione podczas wizyty w jego pracowni w Kownie w 2008, fot. Krzysztof Stanisławski.' },

  { type: 'paragraph', text: 'Wśród Łotyszek i Łotyszy z kręgu transawangardy należałoby zwrócić uwagę zwłaszcza na Aiję Zariņę, Sandrę Krastiņę czy Bruno Vasiļevskisa.' },
  { type: 'paragraph', text: 'Aija Zariņa (1954-2025) w latach 80. i 90. współtworzyła łotewską awangardę artystyczną, przełamując kanony sztuki sowieckiej i tworząc dzieła wykraczające poza tradycyjne gusta. Uprawiała malarstwo, tworzyła obiekty, instalacje, zajmowała się także land artem i scenografią. Należała do artystycznego środowiska tzw. trespassers, czyli intruzów, wkraczających na zakazany, prywatny teren. Tym terenem była oficjalna sztuka, do której pragnęli wtargnąć młodzi twórcy. Aija była liderką tej grupy, zyskując miano „skandalistki” czy wręcz „chuliganki”. Współpracowali z nią m. in. Sandra Krastiņa, Jānis Mitrēvics i Ieva Iltnere.' },
  { type: 'paragraph', text: 'W latach 80. Zariņa często nawiązywała w swojej twórczości do mitologii antycznej i wątków religijnych, które były parafrazowane i umieszczane w kontekście codziennego życia. Przez krytykę była opisywana jako ostra i niezwykła osobowość w łotewskiej sztuce lat 80., działająca poza strefą „szacownej sztuki”, uważająca, że sztuka jest obszarem przede wszystkim swobodnej auto ekspresji artysty. Co brzmiało jak herezja i swoista niesubordynacja w czasach sowieckich. Z tego też powodu władze tj. komisje Związku Artystów Plastyków i Ministerstwo Kultury zakazywały organizacji jej wystaw indywidualnych, a nawet zapraszania na wystawy zbiorowe, co faktycznie czyniło ją dysydentką artystyczną. Podobnie jak było w przypadku A. R. Pencka w NRD w tym samym okresie.' },
  { type: 'paragraph', text: 'Jej styl charakteryzował się maksymalną prostotą formy, ale jednocześnie wyrażał głęboką refleksję natury egzystencjalnej, co osiągała za pomocą użytych znaków i symboli.' },
  
  { type: 'image', src: `${basePath}/p6.png`, caption: 'Aija Zariņa, instalacja malarska.' },

  { type: 'paragraph', text: 'Wśród estońskich „dzikich” wyróżniał się zwłaszcza Jaan Toomik, dla którego jednak okres neokspresjonistycznego malarstwa z lat 80. zakończył się na początku 90. W ostatnich dekadach artysta tworzy głównie video art. Brał dwukrotnie udział w Biennale Sztuki w Wenecji. Jego filmy przyniosły mu sławę w kraju i uznanie międzynarodowe, czyniąc go najbardziej rozpoznawalnym estońskim artystą współczesnym na świecie.' },
  { type: 'paragraph', text: 'Jego wczesne prace charakteryzowały się dużymi formatami i otwartymi, zamaszystymi pociągnięciami pędzla, typowymi dla neoekspresjonizmu. Był liderem estońskich „dzikich”, współpracował m. in. z Grupą T. Na początku lat 90., pod wpływem zmian politycznych w na nowo niepodległej Estonii i własnych poszukiwań artystycznych, Toomik przeszedł od malarstwa do sztuki instalacji, performance i wideo, zachowując jednak swój emocjonalny, ekspresyjny styl.' },

  { type: 'image', src: `${basePath}/p7.png`, caption: 'Jaan Toomik, Tancerz, 1991, technika mieszana, 260x230x17cm, wł. i fot. Eesti Kunstimuuseum SA.' },
  { type: 'image', src: `${basePath}/p8.png`, caption: 'Jaan Toomik, Menstruacja, 1989, olej, płótno, 120x40cm, wł. KUMU, fot. Krzysztof Stanisławski.' },

  { type: 'paragraph', text: 'Grupa T (Rühmitus T) działała w Tartu, drugim po Tallinie mieście w Estonii, stąd T. Powstała w 1982 i odegrała ważną rolę w rozwoju neoekspresjonizmu w Estonii. W jej składzie znaleźli się: Andres Tolts, Jüri Palm, Jaan Elken i Jüri Arrak, a także Jaan Toomik.' },
  { type: 'paragraph', text: 'Artystą współpracującym z T był także wybitny „dziki” malarz, a później także scenograf teatralny i filmowy, Jaak Arro.' },

  { type: 'image', src: `${basePath}/p9.png`, caption: 'Jaak Arro, W drodze na drugą stronę, 1988, olej, drzeworyt, drewno, wł. KUMU, fot. Krzysztof Stanisławski.' },

  // WĘGRY
  { type: 'header', text: 'WĘGRY' },
  { type: 'paragraph', text: 'Na Węgrzech najważniejszą artystką tamtejszej transawangardy była El Kazovszkij, urodzona jako Elena Kazowska w 1948 w Leningradzie, która jednak wybrała Budapeszt jako swoje miejsce życia i pracy, ukończyła tam ASP i była jedną z koryfeuszy sztuki węgierskiej lat 80. Zmarła w 2008 w Budapeszcie.' },
  { type: 'paragraph', text: 'Była znana z kwestionowania i przekraczania norm płciowych. Przyjęła imię El, które było skrótem od Elena, ale jednocześnie miało męskie brzmienie, tak jak i nazwisko. Jej twórczość i działania publiczne były silnie związane ze świadomością płynności tożsamości płciowej oraz czerpaniem zarówno z typowo męskich, jak i żeńskich archetypów.' },
  { type: 'paragraph', text: 'Tworzyła rozbudowane, często malowane latami cykle obrazów, oparte na skomplikowanej, osobistej mitologii. Dzieła Kazovszkij są pełne symboliki, mitologicznych i pop kulturowych odniesień.' },
  { type: 'paragraph', text: 'Była reprezentantką neoekspresjonizmu figuratywnego z elementami surrealizmu. Używała mocnych, żywych kolorów i prostych, ale potężnych, rozbudowanych form. Tworzyła też rzeźby i instalacje, które nazywała „przestrzeniami” (terek). Te obiekty, często w połączeniu z jej malarstwem, tworzyły złożone układy i aranżowały przestrzeń wystawową.' },

  { type: 'image', src: `${basePath}/p10.png`, caption: 'El Kazovszkij, Podwójna głowa z syreną, 1988, olej, deska, 110x130cm, fot. Várfok Gallery.' },

  { type: 'paragraph', text: 'Młodsi trochę od El Kazovszkij Janos Vetö i Lóránt Méhes-Zuzu w latach 80. tworzyli razem obrazy, rzeźby i instalacje, posługując się pseudonimem Zuzu-Vető. W tym duecie organizowali wystawy i akcje artystyczne. Aż do 1989, kiedy Janos wyemigrował do Szwecji. Współpracę jednak wznowili w 2002.' },
  { type: 'paragraph', text: 'Byli i są neoekspresjonistami z silnymi wpływami stylistyki undergroundu punkowskiego, współpracowali zresztą z zespołami rockowymi. Krytyk László Beke określali ich sztukę oryginalnym terminem „postmodernistyczny socjalimpresjonistyczny neobarbaryzm”.' },
  { type: 'paragraph', text: 'W swoich pracach używali i używają sprayów, pisaków, farb przemysłowych, wklejają różne drobne przedmioty (np. koraliki, tekstylia, linijki). Ocierali się świadomie o kicz w swoich obrazach, które w zamierzeniu artystów są przejawem swojskiego miejskiego folkloru.' },
  { type: 'paragraph', text: 'W latach 90. styl Méhesa przesunął się w kierunku malarstwa ezoterycznego i magicznego. Artysta rozwinął unikalny styl malarski, który łączył abstrakcję geometryczną i konstruktywizm z wpływami buddyjskich mandal i motywów sakralnych hinduskich świątyń.' },
  { type: 'paragraph', text: 'Natomiast Vető zajął się tworzeniem obrazów cyfrowych, łącząc wydruki z video, działając pod pseudonimem NahTe (Pixelvideos). Nadal maluje też obrazy z użyciem farb akrylowych, są tak samo kolorowe i szalone jak te z lat 80.' },

  { type: 'image', src: `${basePath}/p11.png`, caption: 'Janos Vető, Kapitan lodów, 2020, akryl, płótno, taśma samoprzylepna, tektura, 72x52 cm, fot. Artmagazin Online.' },

  // BAŁKANY
  { type: 'header', text: 'BAŁKANY' },
  { type: 'paragraph', text: 'W Rumunii bliscy transawangardzie byli: Sorin Ilfoveanu i Stefan Caltia.' },
  { type: 'paragraph', text: 'W krajach ówczesnej Jugosławii działali artyści bliscy transawangardzie, jak wspomniany przez Achille Bonito Olivę Bośniak Braco Dimitrijević, ale także Serbowie Milan Marić i Goran Đorđević.' },
  { type: 'paragraph', text: 'Za zbliżoną do transawangardy, choć bardzo swoistą, można by uznać sztukę słoweńskiej grupy Neue Slowenische Kunst (NSK), która choć bardziej kojarzona z industrialem i prowokacją polityczną oraz sławną grupą rockową Leibach, miała w swoim składzie sekcję malarską Irwin, której członkowie starali się badać w swoich dziełach relacje między sztuką, ideologią i władzą, cytując i interpretując na nowo istniejące dzieła sztuki i inne arte fakty.' },
  { type: 'paragraph', text: 'Trzeba pamiętać, że w 1983, kiedy została założona NSK, słoweńska republika Federalnej Socjalistycznej Republiki Jugosławii, była państwem cieszącym się znaczną autonomią w bloku wschodnim w porównaniu do innych „demoludów”, ale jednak nie była demokratycznym i nie w pełni wolnym krajem. Twórca Jugosławii, kierujący nią twardą ręką przez dziesięciolecia, Josip Broz Tito nie żył już od 3 lat, a krajem rządziło prezydium partii socjalistycznej (SFRJ), w dodatku rotacyjnie. Wyraźnie brakowało jednego, charyzmatycznego przywódcy. Okres ten charakteryzował się narastającymi problemami gospodarczymi i politycznymi, które ostatecznie doprowadziły do rozpadu Jugosławii w latach 90.' },
  { type: 'paragraph', text: 'Zgodnie z oświadczeniem napisanym w 1982, grupa NSK Laibach Kunst określiła się jako jednolity kolektyw, a nie zespół indywidualności, podkreślając swoją anonimowość. Od początku na radykalną strategię NSK wpływała teoria słoweńskiej szkoły rozwijającej filozofię Jacquesa Lacana, która rozwinęła się w latach osiemdziesiątych wokół filozofa i psychoanalityka Slavoja Žižka.' },
  { type: 'paragraph', text: 'Członkowie założyciele NSK to Dušan Mandič, Miran Mohar, Andrej Savski, Roman Uranjek i Borut Vogelnik, wywodzący się ze środowisk punkowskich i graffiti w Lublanie. Początkowo artyści przyjęli nazwę “Rrose Irwin Sélavy”, nawiązując do Duchampowskiego presudonimu „Rrose Sélavy”, później skrócili ją do „Irwin”.' },
  { type: 'paragraph', text: 'Irwin wystawiała w wielu krajach w Europie (m. in. w Muzeum Sztuki w Łodzi) i USA, brała udział w Manifesta w Rotterdamie i Lublanie, a także w Bienniale weneckim.' },

  { type: 'image', src: `${basePath}/p12.png`, caption: 'NSK-Leibach, Błękitny siewca w gabinecie Lenina, 1982, fot. NSK.' },

  // NRD
  { type: 'header', text: 'NRD' },
  { type: 'paragraph', text: 'W NRD, choćby z racji tradycji ekspresjonistycznej z początku XX wieku oraz bliskości RFN, tendencje transawangardowe były bardzo silne i w tym zakresie działało wielu wybitnych malarzy i malarek oraz rzeźbiarzy, jak Walter Libuda, Angela Hampel, Hans Scheib, Frank Seidel, Klaus Killisch.' },
  { type: 'paragraph', text: 'Angela Hampel jest malarką, graficzką, rzeźbiarką i twórczynią instalacji, jedną z czołowych postaci związanych z ruchem neoekspresjonizmu we Wschodnich Niemczech. Była częścią ruchu sztuki nieoficjalnej, opozycyjnej, choć w ramach enerdowskiego systemu funkcjonowania i promocji sztuki, jako członkini związku artystów (na przyjęcie w poczet członków oczekiwała kilka lat). Często używała sztuki jako narzędzia do kwestionowania powszechnie przyjętej jako nadrzędna roli patriarchatu oraz wynikających z niego ról społecznych, w których kobiety były zwykle upośledzone.' },
  { type: 'paragraph', text: 'Jej twórczość jest zdecydowanie figuratywna i ekspresyjna, często na granicy „dzikości”. Posługuje się symboliką mitologiczną i biblijną, tworząc obrazy silnych, często androgynicznych postaci kobiecych, które przeciwstawiają się skostniałym strukturom społecznym.' },
  { type: 'paragraph', text: 'W okresie NRD Hampel działała aktywnie w nurcie sztuki nieoficjalnej. Jej obrazy z tego czasu, takie jak słynna „Medea” (1985), są mocnymi, często mitycznymi portretami kobiecej siły i buntu.' },

  { type: 'image', src: `${basePath}/p13.png`, caption: 'Angela Hampel, Medea, 1988, olej, płótno, wł. Nationalgalerie, Berlin, fot. Krzysztof Stanisławski.' },
  { type: 'image', src: `${basePath}/p14.png`, caption: 'Angela Hampel, Młode malarstwo NRD, 1985, litografia, papier, fot. Invaluable.' },
  { type: 'image', src: `${basePath}/p15.png`, caption: 'Angela Hampel, Undine odchodzi, rzeźba stalowa (korten), Drezno, fot. Wiki Commons.' },

  { type: 'paragraph', text: 'Również Trak lub Trakia (obie formy właściwe, pochodzą od Traute) Wendisch był wartym wyróżnienia, jednym z najoryginalniejszych malarzy wschodniej Neue Wilde, ale działał w enerdowskim zamknięciu i prawdziwe uznanie międzynarodowe zdobył dopiero po upadku muru berlińskiego.' },
  { type: 'paragraph', text: 'Jego prace z lat 80. należą do nurtu ekspresyjnej figuracji i są cenione ze względu na poruszanie tematyki relacji międzyludzkich i napięć społecznych w kontekście ówczesnego ustroju.' },
  { type: 'paragraph', text: 'Wendisch koncentruje się w swoich pracach na postaci ludzkiej, często przedstawionej w stanach psychologicznego napięcia lub izolacji. Przedstawia konflikty, seksualność, samotność swoich bohaterów i poszukiwanie przez nich własnej tożsamości. Mocne, dramatyczne sceny, namalowane ostrymi, kontrastowymi kolorami.' },

  { type: 'image', src: `${basePath}/p16.png`, caption: 'Trak Wendisch, El Colosso, 1986-87, technika mieszana, płótno, 240x205 cm, wł. Nationalgalerie, Berlin, fot. Trak.' },
  { type: 'image', src: `${basePath}/p17.png`, caption: 'Trak Wendisch, Niedzielny poranek, 1982-83, technika mieszana, płyta, 166x131 cm, fot. Trak.' },
  { type: 'image', src: `${basePath}/p18.png`, caption: 'Trak Wendisch, Mężczyzna z psem, 1984-85, olej, płyta, 235x125 cm, fot. Trak.' },
  { type: 'image', src: `${basePath}/p19.png`, caption: 'Trak Wendisch, Berlin, Berlin III, 1988, olej, płótno, 211,4x202,3 cm, fot. MutualArt.' },

  { type: 'paragraph', text: 'Warto też przypomnieć, że najbardziej prominentni dziś malarze niemieccy Georg Baselitz i Gerhard Richter, wyemigrowali do RFN z NRD, pierwszy już w 1957, zaś drugi w 1961, na kilka miesięcy przed postawieniem muru berlińskiego.' },
  { type: 'paragraph', text: 'Także A. R. Penck wyemigrował z NRD, ale bardzo późno, bo w 1980. Przez 30 lat był artystą enerdowskim, tworzącym niezależną sztukę, walczącym z reżimem, nie dopuszczającym go do związku artystów i sal wystawowych, ale dzięki pomocy zagranicznych przyjaciół funkcjonującym w obiegu międzynarodowym na długo przed emigracją do RFN.' },
  { type: 'paragraph', text: 'Była więc Niemiecka Republika Demokratyczna, z jednym z najbardziej opresyjnych systemów rządzenia spośród „demoludów”, prawdziwą wylęgarnią talentów artystów neoekspresjonistów, którzy działali w NRD, ale dopiero po przeniesieniu do RFN robili zawrotną karierę.' },

  // CZECHOSŁOWACJA
  { type: 'header', text: 'CZECHOSŁOWACJA' },
  { type: 'paragraph', text: 'W Czechosłowacji transawangarda też zaistniała, choć nie tak burzliwie, jak w Polsce czy na Węgrzech i NRD. Odpowiednikiem „nowych dzikich” byli malarze nurtu Novou figurací (Nowej figuracji). Do najważniejszych z nich należeli: Jiří Sopko, Jiří Načeradský, a przede wszystkim Jiří Georg Dokoupil, który przeniósł się z rodziną do Niemiec Zachodnich w 1968 po inwazji wojsk Układu Warszawskiego na Czechosłowację. Miał wtedy 14 lat. Później był jednym z najważniejszych artystów niemieckiej Neue Wilde.' },

  // UKRAINA
  { type: 'header', text: 'UKRAINA' },
  { type: 'paragraph', text: 'Pisałem już o nadbałtyckich socjalistycznych republikach radzieckich, trzeba więc wspomnieć o innych republikach ZSRR – ukraińskiej i białoruskiej.' },
  { type: 'paragraph', text: 'W Ukrainie w czasach sowieckich, a dokładnie w latach 80. nie funkcjonowało pojęcie transawangardy, co nie oznaczało, że tego zjawiska nie było. Było, ale przyjęło nazwę po prostu „ukraińskiej nowej fali”. Najważniejszymi jej przedstawicielami byli: pracujący w latach 80. w duecie Arsen Savadov i Georgij Senczenko, jako kijowska grupa Fantasm, twórcy serii nowofalowych, bliskich transawangardzie prac malarskich pt. „Голос степу” („Głos stepu” z 1987), przełomowego dla ukraińskiej nowej fali. Później Savadov już samodzielnie zajął się fotografią inscenizowaną (m.in. cykl „Donbas Chocolate”, 1997), gdzie artyście pozowali pod ziemią w kopalni Donbasu autentyczni górnicy w strojach baletowych i bez), a także multimedialnymi instalacjami, prezentowanymi m. in. na Biennale w Wenecji. Oczywiście, to już nie transawangarda, ale bezkompromisowość i ostrość ekspresyjnego spojrzenia przejawiają się w jego całej twórczości.' },

  { type: 'image', src: `${basePath}/p20.png`, caption: 'Arsen Savadov, Smutek Kleopatry, 1987, olej, płótno, fot. WikiArt.' },
  { type: 'image', src: `${basePath}/p21.png`, caption: 'Arsen Savadov, Donbass Chocolate, 1997, fotografia inscenizowana, dibond, fot. WikiArt.' },
  { type: 'image', src: `${basePath}/p22.png`, caption: 'Arsen Savadov, Donbass Chocolate (grupa), 1997, fotografia inscenizowana, dibond, fot. WikiArt.' },
  { type: 'image', src: `${basePath}/p23.png`, caption: 'Arsen Savadov, Collective Red (cz. I), 1999, fotografia inscenizowana, dibond, fot. WikiArt.' },

  { type: 'paragraph', text: 'Oprócz Savadova warto wspomnieć Olega Holosiya, wybitnego malarza nowej fali, który zginął tragicznie w 1993, także Wałerija Maszczuka, Ołeksandra Roitburda i Pawło Makarowa.' },

  { type: 'image', src: `${basePath}/p24.png`, caption: 'Oleg Holosiy, Yellow Room, 1989, olej, płótno, fot. WikiArt.' },

  { type: 'paragraph', text: 'Ukraińscy artyści okresu lat 80., dzięki swojej śmiałości i oryginalności otworzyli drogę do rozwoju sztuki współczesnej w niepodległej Ukrainie. To oni byli wystawiani w nowopowstałych instytucjach lub przeorganizowanych starych, to ich prace znalazły się w nowych państwowych i prywatnych, jak np. Victora Pinchuka, kolekcjach, i to ich zaczęto wysyłać na Biennale weneckie i inne międzynarodowe przeglądy sztuki.' },

  // BIAŁORUŚ
  { type: 'header', text: 'BIAŁORUŚ' },
  { type: 'paragraph', text: 'Artyści białoruskiej nowej fali o transawangardowych cechach, jaka pojawiła się w latach 80. w Mińsku i Witebsku jeszcze w erze ZSRR, oraz we wciąż nie wolnej, choć istniejącej jako osobne państwo Białorusi pod dyktatem wiecznie panującego Aleksandra Łukaszenki, faktycznie wasala Federacji Rosyjskiej, mogą tylko marzyć o pracy w wolnym kraju, bez ucisku i cenzury.' },
  { type: 'paragraph', text: 'Sytuacja białoruskich „nowych dzikich” buntujących się w latach 80. przeciwko opresji ze strony władz ZSRR i Łukaszenki, niewiele się zmieniła od tamtego czasu. Wielu z nich wyemigrowało, głównie do Niemiec lub Polski, choć wciąż utrzymują ścisły kontakt z krajem, inni wciąż prowadzą działalność artystyczną na miejscu. Miałem okazję dość dobrze poznać to środowisko i opisałem je w jedynej, jak dotąd, książce o sztuce Białorusi pt. „Współczesna sztuka białoruska Od nowa” (Warszawa 2011). Wśród prezentowanych w niej artystów znalazło się kilku „dzikich”.' },
  { type: 'paragraph', text: 'Przede wszystkim malarz neoekspresjonista i performer Victor Petrov z Mińska, człowiek instytucja. Jego obrazy z lat 80. i początku 90., wystawiane w niezależnej galerii „Szósta linia” stanowią idealny przykład transawangardy w wydaniu wschodnim. Artysta brał udział ze swoimi monumentalnymi obrazami (biało-czerwonymi) w 24. Biennale weneckim 2011 w oficjalnym, ale przygotowanym przez kuratora o dość niezależnym podejściu pawilonie białoruskim po raz pierwszy (i jak na razie ostatni) dobrze umiejscowionym na terenie Arsenale. Czterometrowy obraz Victora, wystawiony przed pawilonem, przyciągał rzesze widzów Biennale i był manifestacją wolności białoruskiej sztuki (później ten obraz na nowym blejtramie był pokazywany w Toruniu na wystawie „Biało-czerwono-biali”).' },

  { type: 'image', src: `${basePath}/p25.png`, caption: 'Victor Petrov, Marfa i Maria, 2008, olej, płótno, 150x180 cm, fot. Krzysztof Stanisławski.' },
  { type: 'image', src: `${basePath}/p26.png`, caption: 'Victor Petrov, Apokalipsa, 1997, olej, papier, 430x445 cm, 24. Biennale weneckie 2011, fot. Krzysztof Stanisławski.' },
  { type: 'image', src: `${basePath}/p27.png`, caption: 'Performance Victora Petrova przed jego obrazem „Apokalipsa” podczas otwarcia wystawy w CSW w Toruniu w 2017.' },

  { type: 'paragraph', text: 'Także Artur Klinau, również człowiek-instytucja, przede wszystkim autor instalacji ze słomy (m.in. ogromnej „Ostatniej Wieczerzy”, prezentowanej w Wenecji i Toruniu), wcześniej głównie malarz, ale też filmowiec i literat, niezależny wydawca książek o sztuce aktualnej w Białorusi.' },
  { type: 'paragraph', text: 'Obu: i Petrova, i Klinaua można uznać za najważniejszych przedstawiciela białoruskiej „nowej fali”. Pozostali w Mińsku, funkcjonując na styku środowiska niezależnego i oficjalnego. Czekają cierpliwie na rewolucję.' },

  { type: 'image', src: `${basePath}/p28.png`, caption: 'Artur Klinau, Nowy Rok, 2008, olej, płótno, fot. Artur Klinau.' },
  { type: 'image', src: `${basePath}/p29.png`, caption: 'Artur Klinau, Ostatnia Wieczerza, 2011, instalacja, słoma, fot. Krzysztof Stanisławski.' },
  { type: 'image', src: `${basePath}/p30.png`, caption: 'Artur Klinau, Ostatnia Wieczerza (widok ogólny), 2011, instalacja, słoma.' },

  { type: 'paragraph', text: 'Alexei Lunev jest niezależnym białoruskim malarzem, rysownikiem, rzeźbiarzem, autorem instalacji, performerem, twórcą video, dobrym duchem jedynej niezależnej Galerii Y w Mińsku, prowadzonej przez Valentinę Kisielievą, coraz częściej działającą też w Polsce. Jak sam przedstawiał się w katalogu: „Postrzegam siebie jako artystę skrajnie indywidualistycznego, który koncentruje się wyłącznie na refleksjach subiektywnych. Pomysły do swoich prac czerpię z osobistych doświadczeń i przeżyć”.' },
  { type: 'paragraph', text: 'Jest trochę za młody (ur. 1971), by stanąć w jednym szeregu z artystami transawangardy, ale jego twórczość cechuje prawdziwa i niczym nie skrępowana „dzikość”.' },

  { type: 'image', src: `${basePath}/p31.png`, caption: 'Alexei Lunev, Sketchbook, 2002-03, technika własna, papier, fot. Alexei Lunev, Galeria Y.' },
  { type: 'image', src: `${basePath}/p32.png`, caption: 'Alexei Lunev, Mięso, 2010, kadr z filmu video, fot. Alexei Lunev, Galeria Y.' },

  // ROSJA
  { type: 'header', text: 'ROSJA' },
  { type: 'paragraph', text: 'ROSJA, czyli ROSYJSKA FEDERACYJNA SOCJALISTYCZNA REPUBLIKA RADZIECKA (RFSRR)' },
  { type: 'paragraph', text: 'Najważniejszym rosyjskim ośrodkiem radzieckiej transawangardowej nowej fali lat 80. był Leningrad (wcześniej i obecnie Petersburg), gdzie działała grupa „Новые художники” („Nowi artyści"). Należeli do niej m. in. Timur Novikov, Sergey Bugaev Afrika i Vladislav Mamyszev Monroe. Niezrzeszony w „Nowych” był starszy od nich, długowłosy mistrz neoekspresjonizmu Boris Koszełochow, nazywany Bobem, czy jeszcze młodsi Oleg Masłow i Aleksiej Kozin.' },
  { type: 'paragraph', text: 'Specyficznym ugrupowaniem bliskim transawangardzie, ale o bardziej swojskim, bardzo rosyjskim kolorycie była grupa „Mit’ki” pod wodzą Walerija Miszina, której członkowie występowali zawsze w koszulkach ruskich matrosów.' },
  { type: 'paragraph', text: 'Młodzi „dzicy” pracowali w Leningradzie w opuszczonych, zrujnowanych kamienicach nad Newą z zamurowanymi oknami na parterze, więc wchodziło się do nich po drabinie i od razu na pierwsze piętro. Odwiedziłem te skłoty w 1987 i były to jedne z najbarwniejszych i najbardziej fascynujących peregrynacji artystycznych, jakich doświadczyłem w życiu.' },

  { type: 'image', src: `${basePath}/p33.png`, caption: 'Timur Novikow, ZSRR, połowa lat 80., technika mieszana, płótno, 200x310 cm, fot. Vladey.' },
  { type: 'image', src: `${basePath}/p34.png`, caption: 'Sergey Bugaev Afrika, fragment obrazu Assa, 1980, akryl, płyta, fot. Vladey.' },
  { type: 'image', src: `${basePath}/p35.png`, caption: 'Sergey Bugaev Afrika, Bez tytułu (Klinem bij starych) z cyklu Anty Lissitski, 1991, akryl, płyta, fot. Vladey.' },
  { type: 'image', src: `${basePath}/p36.png`, caption: 'Sergey Bugaev Afrika, Afazja, 1994, technika własna, sztandar, fot. Vladey.' },

  { type: 'paragraph', text: 'Poza Leningradem, w Moskwie, działała grupy „Детский сад” („Dietskij Sad”, czyli dosłownie „Ogród dziecięcy”, a w wolnym tłumaczeniu na polski „Ogródek jordanowski”), która powstała w 1985 po przejęciu opuszczonego budynku przedszkola w zaułku Chochłowskim. Należeli do niej m.in. czystej wody „dzicy” Andrei Roiter (który od 1984 pracował jako nocny stróż w przejętym później przedszkolu) i Nikołaj Filatov oraz Herman Vinogradov i Alexander Ivanov. To był pierwszy skłot artystyczny w Moskwie.' },

  { type: 'image', src: `${basePath}/p37.png`, caption: 'Andrei Roiter, Adidas, 1988, olej, płótno, 52x35 cm, fot. Vladey.' },

  { type: 'paragraph', text: 'Odwiedzałem skłoty, gdzie tworzyli cudowni i niezwykle zdolni młodzi twórcy niezależni. Żyli w biedzie w mieszkaniach komunalnych, bez pieniędzy na jedzenie i materiały malarskie. I pewnie większość tak jak żyła w 1987, tak żyła w następnych dekadach. Chyba, że wyemigrowali, jak kilku z wyżej wymienionych. Albo udało im się skorzystać z niezwykłej okazji – mianowicie światowego wzrostu zainteresowania wszystkim, co rosyjskie, po pieriestrojce. W zakresie sztuki znalazło to odzwierciedlenie w głośnej aukcji zorganizowanej przez jeden z dwóch największych na świecie domów aukcyjnych - Sotheby’s w Moskwie w lipcu 1988, na której znalazły się prace także wielu „nowych”. I tak rozpoczęła się ich kariera międzynarodowa i docenienie wartości ich dzieł według stawek zachodnich. Spośród młodych, których spotkałem i wymieniłem powyżej znaleźli się m. in. „skłotowiec” moskiewski Nikołaj Filatov z „Detskiego Sadu”, którego olejny obraz „Minotaur” z 1987 uzyskał cenę 11 tysięcy funtów szterlingów. Kolega z innej skłotowskiej grupy, grafik i malarz, urodzony w Poczdamie, syn radzieckiego żołnierza w NRD, Sergej Szutow sprzedał obraz „Aunts and Nephews” z 1987 za 3 tys. funtów. Oczywiście, gwiazdami aukcji byli znani już Rosjanie, którzy wkrótce wyemigrowali i stali się częścią światowego establishmentu artystycznego, jak Ilya Kabakow, Borys Kopystiansky czy Grisza Bruszkin, który za 32-częściowy obraz „Fundamental Lexicon” uzyskał rekordową cenę 220 tys. funtów. Ta aukcja Sotheby’s była przełomowa i symboliczna, ale i jednorazowa, bo przez długi czas nie było podobnych akcji międzynarodowych domów aukcyjnych czy galerii na tych terenach. To nie zmieniło trwale rynku na dzieła zwłaszcza młodych, ale było sygnałem, że wszystko jest możliwe, skoro zamiast przysłowiowych 50 czy 100 dolarów za obraz, za które nota bene cała rodzina mogła żyć i przez miesiąc, mogli uzyskać np. 11 tysięcy funtów szterlingów.' },

  { type: 'image', src: `${basePath}/p38.png`, caption: 'Grisza Brushkin, Pieriestrojka, 1988, olej, płótno, fot. Pinterest.' },
  { type: 'image', src: `${basePath}/p39.png`, caption: 'Grisza Brushkin, Scene Change, 2017, instalacja, materiały różne, fot. Krzysztof Stanisławski.' },
  { type: 'image', src: `${basePath}/p40.png`, caption: 'Grisza Brushkin, Scene Change (detal), 2017, instalacja, materiały różne.' },

  { type: 'paragraph', text: 'Dziś wielu wybitnych artystów transawangardy rosyjskiej lat 80. i 90. cieszy się zasłużonym prestiżem i sławą, a także dobrze żyje w kraju lub za granicą ze swojej sztuki, zwłaszcza z okresu „dzikości”. Niestety, to powodzenie po latach kusi w niektórych przypadkach do podejmowania nieciekawych działań, które miewają bardzo poważne konsekwencje.' },
  { type: 'paragraph', text: 'Jeden z liderów leningradzkiego undergroundu, Sergey Bugaev Afrika, który w 1999 reprezentował Rosję na 48. Biennale w Wenecji, a obecnie mieszka i pracuje przemiennie w Sankt Petersburgu, Miami i Nowym Jorku, został w 2013 pozwany do sądu przez grupę, swoich dawnych kolegów: Jewgenija Kozłowa, Olega Masłowa, Inala Sawczenkowa, Olega Zaika. Oskarżyli go o nielegalne posiadanie 25 ich dzieł z końca lat 80. Te prace uznawane były za zaginione od początku lat dziewięćdziesiątych, aż pojawiły się niespodziewanie w katalogu wystawy "ASSA. Ostatnie pokolenie leningradzkiej awangardy", zorganizowanej przez Siergieja Bugajewa w maju i czerwcu 2013 w państwowym Muzeum Badań Rosyjskiej Akademii Sztuki w St. Petersburgu. Sąd nakazał Bugajewowi zwrot prac. Bardzo nieprzyjemna sprawa, zważywszy zwłaszcza na ich wspólne początki.' },
  { type: 'paragraph', text: 'Ale wracając do szansy, jaką świtowy rynek dał rosyjskim artystom niezależnym (mniej lub bardziej). Nie będzie niespodzianką, jeśli napiszę, że specjaliści z Sotheby’s, ani Christie’s nie dotarli nad Wisłę, ani Wilejkę, Dźwinę, Dniepr, Wełtawę czy Dunaj i pewnie już nigdy nie dotrą… Szansę dostali Rosjanie, bo Rosjanie zawsze ciekawili Zachód, który oprócz zainteresowania obawiał się czasem bardziej, czasem mniej, rosyjskiego niedźwiedzia. Zaczęło się od Rosji i na Rosji skończyło. Artystom Wschodu, znajdującym się pod ruskim butem pozostawało radzić sobie samemu.' },
  { type: 'paragraph', text: 'I jeszcze uwaga: polscy kuratorzy i handlarze sztuką od połowy lat 80. bacznie przyglądali się temu, co w Imperium Zła dzieje się w dziedzinie malarstwa. Do Rosji wyjeżdżał i kupował obrazy w dużej ilości pierwszy prywatny galerzysta w Warszawie Piotr Nowicki, a także literat i marchand Andrzej Bonarski, który nawet zorganizował wystawę „Nowi Rosjanie” w lipcu 1988 w Pałacu Kultury i Nauki w Warszawie. Także właściciel Gdańskiego Kantoru Sztuki Mirosław Zeidler miał apetyt na młode malarstwo z ZSRR i postanowił spróbować swoich sił w promocji, a później sprzedaży dzieł rosyjskich „nowych dzikich”. Zaprosił do współpracy mnie, młodego krytyka ze „Sztuki” i początkującego kuratora, a następnie razem wyjechaliśmy do Leningradu. Zeidler kupił bardzo wiele wybieranych przeze mnie prac, ponoć zajęły one cały wagon towarowy i po powrocie do Gdańska zorganizował w swojej galerii przy Długim Targu pierwszą w Polsce wystawę „rosyjskiej transawangardy” pt. „Bez aureoli. Rosyjska transawangarda z Leningradu”, której byłem kuratorem .' },
  { type: 'paragraph', text: 'Oczywiście, polscy handlarze sztuki nie osiągnęli tak spektakularnych sukcesów, jak aukcjonerzy Sotheby’s. Ani nie zwiększyli znacząco swojego majątku, jak się wydaje, ani nie pomogli na dłużej młodym Rosjanom. Ale podjęli próbę i to się im chwali.' },
  { type: 'paragraph', text: 'Te próby, podejmowane w końcu lat 80., by zainteresować nową sztuką rosyjską polską publiczność i jeszcze na tym zarobić, niewiele dały. Sztuka rosyjska, zwłaszcza nowa czy najnowsza, nadal jest w Polsce nieznana, szczególnie teraz jej znajomość osiągnęła poziom zero.' },
  { type: 'paragraph', text: 'Powyższe przykłady, przyznaję podawane przeze mnie dość obficie, choć to przede wszystkim wyliczanka nazwisk i grup, trochę szerzej omówieni zostali nieliczni, brzmią jak opowieści z innej planety, z rejonów zapomnianych przez międzynarodową krytykę, kuratorów, kolekcjonerów, przynajmniej w latach 80. To przykłady wspaniałych postaw twórców walczących o swą niezależność w warunkach komunistycznego reżimu w ZSRR, a w jego składzie także dzisiejszych krajów bałtyckich, Białorusi i Ukrainy, oraz w warunkach tzw. obozu socjalistycznego, w tym PRL, NRD, Węgier, Czechosłowacji czy Rumunii i Jugosławii.' },
  { type: 'paragraph', text: 'Nie poświęcałbym tym zjawiskom i artystom tyle miejsca, gdyby nie to, że wszyscy oni, tak jak polscy transawangardyści byli ośmieszani przez ówczesną reżimową tzw. krytykę sztuki w latach 80., piętnowani, że naśladują zachodnie zdegenerowane trendy i to w dodatku z opóźnieniem. To miało całkowicie dyskredytować ich sztukę i załatwiało sprawę. Nie trzeba było nadwerężać swoich talentów krytycznych przy opisie i analizie nowych zjawisk. Bo po co?' },
  { type: 'paragraph', text: 'Czy naprawdę wszyscy oni: Litwini, Łotysze, Estończycy, Rosjanie, Enerdowcy, Czesi, Węgrzy, Jugosłowianie i Polacy umówili się w jakiś nadprzyrodzony sposób, bo przecież nie było internetu, możliwości swobodnego podróżowania i każdy żył w swoim zamkniętym socjalistycznym pudełku, że będą wszyscy razem naśladować i zapóźniać się w stosunku do Zachodu? Czy to była jakaś międzynarodówka naśladowców i spóźnialskich? Owszem, tak sformułowane zarzuty, brzmią dzisiaj absurdalnie i śmieszą, ale w latach 80. nie było nam: artystom, młodym krytykom i kuratorom do śmiechu.' },
  { type: 'paragraph', text: 'Przedstawiając wschodnie transawangardy chciałem pokazać, że nie tylko Polacy byli krzywdzeni przez swoje rządy i brak zainteresowania ze strony Europy i świata.' },
  { type: 'paragraph', text: 'Czy my w Polsce byliśmy szczególnie mocno doświadczeni? Owszem. Stan wojenny, walki uliczne, ofiary śmiertelne pacyfikacji milicyjnych, masowe internowania i terror MO i SB, pełne więzienia, kryzys gospodarczy najgłębszy od II wojny, kartki na żywność, emigracja setek tysięcy ludzi. Nie zapominajmy jednak o tym, że warunki życia w tamtych czasach w całym ZSRR były też skrajnie złe, nic nie było w sklepach, szalał terror milicji i tajnych służb, zapełniały się obozy pracy, a panujący tam system przypominał permanentny stan wojenny. Zresztą nie o martyrologię tu chodzi. O licytowanie się, kto miał gorzej. Wszyscy byliśmy poszkodowani i niesprawiedliwie traktowani. Ale przetrwaliśmy i żyjemy w wolnych krajach oraz Unii Europejskiej. Niestety poza Rosją i Białorusią oraz Ukrainą, gdzie trwa wojna.' },
  { type: 'paragraph', text: 'Post scriptum.' },
  { type: 'paragraph', text: 'Dla artystów Europy Wschodniej i Środkowej, to, co działo się na Zachodzie, a zwłaszcza w Monachium i Rzymie w XIX, oraz Paryżu na przełomie XIX i XX wieku, było najważniejszymi punktami odniesienia i wzorcami do naśladowania. Bardzo często także był to cel ich emigracji. Tylko dzięki wyjazdowi do Paryża możliwe stały się kariery Chaima Soutina, Marca Chagalla, Constantina Brancusiego czy Moïse (Mojżesza) Kislinga. Nie jest tajemnicą, że École de Paris, do dziś jeden z najbardziej charakterystycznych stylów sztuki europejskiej, tworzyli głównie nie-Francuzi: Żydzi litewskiego i polskiego pochodzenia, Włosi, Hiszpanie, Polacy, Czesi, Rosjanie, a nawet pewien Japończyk. W tym tyglu narodowościowym, skupionym w dwóch dzielnicach – na Montmartrze i Montparnasse, powstał styl „czysto paryski” i – w domyśle – francuski, choć wielu jego twórcom jeszcze po II wojnie światowej odmawiano francuskiego obywatelstwa.' },
  { type: 'paragraph', text: 'Nasze bogate w talenty tereny przestały interesować Zachód od razu po zakończeniu wojny. Sprzedając nas Stalinowi w Jałcie, oddawał (chyba bez szczególnego żalu) również naszą kulturę i sztukę. Pomijając, rzecz jasna, emigrantów, ale należy pamiętać, że stanowili oni znikomy procent potencjału narodów zamkniętych za Żelazną Kurtyną.' },
  { type: 'paragraph', text: 'Sowietyzowani, indoktrynowani na poziomie politycznym i estetycznym (socrealizm), spauperyzowani, odcięci od informacji, bez prawa do paszportu i podróży zagranicznych, niektórzy prześladowani, artyści wschodnioeuropejscy zostali skazani na mocy jałtańskiego targu na margines – życie poza międzynarodowym obiegiem, poza rynkiem sztuki i godziwymi warunkami bytu i tworzenia.' },
  { type: 'paragraph', text: 'Po przystąpieniu do Unii Europejskiej krajów postsowieckich: Litwy, Łotwy i Estonii oraz m. in. Polski, która była „tylko” wasalem ZSRR, wydawało się, że znów złączymy się z zachodnioeuropejską kulturą, do której dostęp blokowali nam moskiewscy towarzysze. I znów w Warszawie i Wilnie zaczęliśmy oglądać wystawy, filmy, przedstawienia teatralne, do których tęskniliśmy przez pół wieku. Zachód znów nas oczarował, zwłaszcza, że wyjazdy do Paryża, Londynu, Berlina stały się nie tylko łatwiejsze, ale i na każdą kieszeń.' },
  { type: 'paragraph', text: 'Niestety, powrotowi fascynacji Zachodem na Wschodzie nie towarzyszył proces w odwrotnym kierunku. Nikogo nadal nie interesuje, co się w tym zapomnianym zaścianku Europy dzieje. Niezwykle rzadko organizowane są wystawy lub przeglądy filmów, zaledwie kilku twórców z całego regionu może pochwalić się, że zrobiło na Zachodzie karierę.' },
  { type: 'paragraph', text: 'Czy nagle nasze kraje, w XIX wieku zagłębie talentów Europy, wyjałowiły się aż tak bardzo? W ostatnich trzech dekadach, jakie minęły od upadku komuny, tylko dwóch polskich artystów: Mirosław Bałka i Wilhelm Sasnal zdołali zaistnieć i utrzymać się na europejskim i światowym rynku sztuki. Można by dodać jeszcze kilka nazwisk z całego regionu. I jeszcze jedno, mówimy o karierach indywidualnych, niejako prywatnych, okupionych latami starań, zabiegów oraz – co znamienne – pracą zachodnich galerii, które zajęły się długofalową promocja tych artystów. Na szczęście ostatnio to się zmienia i coraz większą role zaczynają odgrywać rodzime galerie, czy to w Polsce, czy na Litwie i Łotwie.' },
  { type: 'paragraph', text: 'Bo przecież kultura europejska bez kultury wschodnioeuropejskiej jest niepełna. Jest wybrakowana, w efekcie zaniechania, którego nie można tłumaczyć tylko zaszłościami historycznymi i politycznymi, albo rynkowymi, czyli komercyjnymi.' },
  { type: 'paragraph', text: 'Przecież kultura i sztuka opierają się na wartościach nie tylko merkantylnych. I nie można godzić się na argument, że niemieckie lub francuskie muzeum nie kupuje obrazu jakiegoś artysty np. z Poznania czy Kowna tylko dlatego, że jego wartości nie można odnieść do notowań rynkowych i rejestrów cen (co gwarantowałoby stabilność wyceny wartości). Gdzieś w tym wszystkim zagubiło się myślenie o prawdziwych wartościach.' },
  { type: 'paragraph', text: 'Dzieła sztuki zachodniej kupowane są po 1989-90 do wschodnioeuropejskich kolekcji po zawyżonych cenach, często to dzieła słabsze, bo na pierwszorzędne po prostu nie stać tych placówek. Jednak dla dyrektorów i kuratorów ważne jest zapewnienie choćby skromnego zestawu prac kanonu europejskich twórców. Natomiast dzieła sztuki ze Wschodu prawie w ogóle nie trafiają do kolekcji zachodnich, nawet pomimo relatywnie niskich cen.' },
  { type: 'paragraph', text: 'To oczywiście nie fair, ale nie chodzi o użalanie się nad sobą. Powtórzę: sztuka europejska bez sztuki polskiej, litewskiej, łotewskiej, estońskiej, ale także białoruskiej i ukraińskiej, jest po prostu niepełna. Jest wybrakowana.' },
  { type: 'paragraph', text: 'OK, Zachód był zawsze zapatrzony w siebie, a Wschód zapatrzony na Zachód. Tak było przez stulecia, więc można mówić o pewnej mentalności. Ale w XXI wieku trzeba by pokusić się o zmianę tego nastawienia.' },
  { type: 'paragraph', text: 'Zwłaszcza, że w erze globalizacji kultury oferta pozaeuropejska: azjatycka, amerykańska, afrykańska, jest dziś w salach wystawowych Europy Zachodniej mniej egzotyczna, niż oferta z Wilna, Krakowa czy Mińska. A przecież sednem tego problemu jest to, że wcale nie jesteśmy egzotyczni, bo mamy te same korzenie kulturowe i w dodatku żyjemy w jednej Unii.' },
  { type: 'paragraph', text: 'Krzysztof Stanisławski' },
  
  { type: 'paragraph', text: 'TEKST POWSTAŁ W RAMACH STYPENDIUM MINISTRA KULTURY I DZIEDZICTWA NARODOWEGO.' },

  // --- TUTAJ JEST TA GALERIA KTÓRA SIĘ WYŚWIETLI NA KOŃCU ---
  { 
    type: 'gallery-filter', 
    galleryTitle: 'Galeria Prac', 
    galleryItems: galleryPhotos 
  },
  
  { type: 'logo', src: `${basePath}/d1.png` }
];