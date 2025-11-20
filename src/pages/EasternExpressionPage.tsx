import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { easternExpressionData } from '../data/eastern-expression-data';
// Importujemy nowy komponent
import FilterableGallery from '../components/FilterableGallery';

export default function EasternExpressionsPage() {
  return (
    <div className="bg-white min-h-screen pb-20">
      
      {/* HERO SECTION */}
      <section className="bg-slate-900 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            Wschodnie <span className="text-red-600">Ekspresje</span>
          </h1>
          <div className="w-32 h-1 bg-red-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-300 italic max-w-2xl mx-auto">
            Transawangarda i nowa ekspresja w krajach Europy Środkowej i Wschodniej.
          </p>
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 mt-8 text-white/80 hover:text-white hover:underline transition-colors"
          >
            <ArrowLeft size={20} />
            Wróć do strony głównej
          </Link>
        </div>
      </section>

      {/* TREŚĆ */}
      <article className="max-w-4xl mx-auto px-6 py-16">
        {easternExpressionData.map((block, index) => {
          
          if (block.type === 'header') {
            return (
              <h2 key={index} className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mt-16 mb-8 border-l-4 border-red-600 pl-4">
                {block.text}
              </h2>
            );
          }

          if (block.type === 'paragraph') {
            return (
              <p key={index} className="text-lg text-slate-700 leading-relaxed mb-6 text-justify">
                {block.text}
              </p>
            );
          }

          if (block.type === 'image' && block.src) {
            return (
              <div key={index} className="my-12 flex flex-col items-center">
                <div className="relative rounded-xl overflow-hidden shadow-xl max-w-full">
                  <img 
                    src={block.src} 
                    alt={block.caption || "Zdjęcie"} 
                    className="w-full h-auto object-cover"
                  />
                  {block.caption && (
                    <div className="bg-white/95 backdrop-blur p-4 border-l-4 border-red-600 text-sm text-slate-800 font-medium shadow-sm mt-2 md:mt-0 md:absolute md:bottom-4 md:left-4 md:max-w-lg md:rounded-r-lg">
                      {block.caption}
                    </div>
                  )}
                </div>
              </div>
            );
          }

          // --- TUTAJ DODALIŚMY OBSŁUGĘ NOWEGO KLOCKA GALERII ---
          if (block.type === 'gallery-filter' && block.galleryItems) {
            return (
              <div key={index} className="mt-16 mb-16 w-full -mx-6 md:mx-0 px-6 md:px-0">
                 {/* Wychodzimy trochę poza margines tekstu, żeby galeria była szersza */}
                <FilterableGallery 
                  title={block.galleryTitle} 
                  items={block.galleryItems} 
                />
              </div>
            );
          }

          if (block.type === 'logo' && block.src) {
             return (
              <div key={index} className="mt-20 flex flex-col items-center justify-center border-t pt-10">
                <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">Partner</p>
                <img 
                  src={block.src} 
                  alt="Ministerstwo Kultury i Dziedzictwa Narodowego" 
                  className="h-24 md:h-32 w-auto transition-all duration-500"
                />
              </div>
            );
          }

          return null;
        })}
      </article>
    </div>
  );
}