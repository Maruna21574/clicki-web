import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { netacadUniza } from '../portfolio/netacad-uniza';
import { niluniza } from '../portfolio/niluniza';
import { penzionEso } from '../portfolio/penzion-eso';
import { exteraMartin } from '../portfolio/extera-martin';
import { stolarskaVyroba } from '../portfolio/stolarska-vyroba';
import { targosSk } from '../portfolio/targos-sk';
import GallerySlider from '../components/gallery-slider';

// Typ projektu
interface Project {
  id: string;
  slug: string;
  title: string;
  cat: string;
  img?: string; // obrázok už nie je povinný, slider je v úvode
  type: string;
  about: string;
  client: string;
  services: string[];
  highlights: string[];
  forWhom: string[];
  tags: string[];
  webUrl?: string;
  logo?: string;
  gallery?: string[];
}

// Rovnaké projekty ako v PortfolioDetail
const projects: Project[] = [
  netacadUniza,
  niluniza,
  penzionEso,
  exteraMartin,
  stolarskaVyroba,
  targosSk,
];

export const PortfolioProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return <div className="text-white p-10">Projekt neexistuje.</div>;
  }

  return (
    <>
      <div className="bg-black min-h-screen pt-80 pb-40 px-6 lg:px-20 overflow-hidden text-[#F43182]">
        <div className="max-w-[1000px] mx-auto">
          <button onClick={() => navigate(-1)} className="text-xs text-[#F43182] uppercase tracking-widest font-bold hover:underline mb-8">← Späť na portfólio</button>
          <span className="text-[#F43182] font-black tracking-[0.5em] text-xs uppercase mb-6 block">{project.cat}</span>
          <h2 className="font-giaza text-7xl md:text-9xl text-white mb-10">{project.title}</h2>
          {/* Sekcia: Tagy */}
          <div className="space-y-8 pt-4 mb-10">
            <p className="text-[#F43182] text-[10px] font-black uppercase tracking-widest">Tagy</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(t => (
                <span key={t} className="bg-white/5 border border-white/10 px-4 py-2 rounded-full text-xs text-white uppercase font-bold tracking-tighter">{t}</span>
              ))}
            </div>
          </div>
          {/* Sekcia: Slider galérie */}
          {project.gallery && project.gallery.length > 0 ? (
            <div className="rounded-[1rem] overflow-hidden border border-white/5 mb-12">
              <GallerySlider images={project.gallery} />
            </div>
          ) : null}

          {/* Sekcia: O projekte */}
          {project.about && (
            <section className="mb-10">
              <h3 className="text-2xl text-white font-bold mb-2">O projekte</h3>
              <p className="text-gray-300 text-lg">{project.about}</p>
            </section>
          )}

          {/* Sekcia: Klient */}
          {project.client && (
            <section className="mb-10">
              <h3 className="text-2xl text-white font-bold mb-2">Klient</h3>
              <p className="text-gray-300 text-lg">{project.client}</p>
            </section>
          )}

          {/* Sekcia: Zameranie */}
          {project.type && (
            <section className="mb-10">
              <h3 className="text-2xl text-white font-bold mb-2">Typ a zameranie</h3>
              <p className="text-gray-300 text-lg mb-2">{project.type}</p>
              {project.highlights && (
                <ul className="list-disc pl-6 text-gray-400 text-base">
                  {project.highlights.map((h, i) => <li key={i}>{h}</li>)}
                </ul>
              )}
            </section>
          )}

          {/* Sekcia: Služby */}
          {project.services && (
            <section className="mb-10">
              <h3 className="text-2xl text-white font-bold mb-2">Služby pre klienta</h3>
              <ul className="list-disc pl-6 text-gray-400 text-base">
                {project.services.map((s, i) => <li key={i}>{s}</li>)}
              </ul>
            </section>
          )}

          {/* Sekcia: Pre koho */}
          {project.forWhom && (
            <section className="mb-10">
              <h3 className="text-2xl text-white font-bold mb-2">Pre koho je projekt určený</h3>
              <ul className="list-disc pl-6 text-gray-400 text-base">
                {project.forWhom.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
            </section>
          )}

          {/* Sekcia: Ukážka webu */}
          <section className="mb-14">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center bg-gradient-to-br from-[#1a1a1a] to-[#2d002b] rounded-[1rem] p-10 border border-[#F43182]/30 shadow-2xl">
              {/* Logo a tlačidlo */}
              <div className="flex flex-col items-center">
                <div className="w-40 h-40 mb-6 flex items-center justify-center bg-white rounded-lg shadow-lg">
                  <img src={project.logo || '/img/netacad-logo.png'} alt="Logo webu" className="w-32 h-32 object-contain" />
                </div>
                {project.webUrl ? (
                  <a href={project.webUrl} target="_blank" rel="noopener noreferrer" className="inline-block bg-[#F43182] text-white font-bold px-8 py-3 rounded-full text-lg shadow-lg hover:bg-[#d11a6b] transition-colors mt-2 tracking-wider">Navštíviť web</a>
                ) : (
                  <span className="inline-block bg-gray-700 text-white font-bold px-8 py-3 rounded-full text-lg shadow-lg mt-2 tracking-wider opacity-60 cursor-not-allowed">Web nie je verejný</span>
                )}
              </div>
              {/* Popis */}
              <div className="col-span-2 flex flex-col items-center md:items-start text-center md:text-left">
                <h4 className="text-white text-2xl font-black mb-3 flex items-center gap-2">
                  <span className="text-[#F43182] text-3xl">🌐</span>
                  Moderný web na mieru
                </h4>
                <p className="text-gray-300 text-base mb-4 max-w-xl">
                  Pozrite si reálnu ukážku webu, ktorý sme vytvorili pre klienta. Web je plne responzívny, optimalizovaný pre rýchlosť a SEO, s vlastným dizajnom a funkciami na mieru.
                </p>
              </div>
            </div>
          </section>

          {/* --- Recenzia od klienta --- */}
          <section className="max-w-[900px] mx-auto mt-20 mb-10">
            <div className="flex flex-col md:flex-row items-center gap-8 bg-black/90 rounded-2xl p-0 md:p-0">
              <div className="flex-shrink-0 flex items-center justify-center w-20 h-20 rounded-full bg-[#F43182]/20 shadow-lg">
                <svg width="40" height="40" fill="none" viewBox="0 0 24 24"><path d="M7.5 8.5A2.5 2.5 0 1 1 12.5 8.5A2.5 2.5 0 1 1 7.5 8.5Z" stroke="#F43182" strokeWidth="2"/><path d="M2 20c0-2.7614 2.2386-5 5-5h2c2.7614 0 5 2.2386 5 5" stroke="#F43182" strokeWidth="2"/><path d="M17 8.5A2.5 2.5 0 1 1 22 8.5A2.5 2.5 0 1 1 17 8.5Z" stroke="#F43182" strokeWidth="2"/><path d="M14.5 20c0-2.7614 2.2386-5 5-5h2c2.7614 0 5 2.2386 5 5" stroke="#F43182" strokeWidth="2"/></svg>
              </div>
              <div className="flex-1">
                <blockquote className="text-2xl md:text-3xl text-white font-semibold mb-4 italic leading-snug">„Spolupráca bola rýchla, profesionálna a výsledný web je moderný, prehľadný a presne podľa našich predstáv. Oceňujeme komunikáciu, ochotu a rýchle zapracovanie našich požiadaviek.“</blockquote>
                <div className="flex items-center gap-3 mt-2">
                  <span className="font-bold text-white text-lg">Ing. Ján Novák</span>
                  <span className="text-[#F43182] text-xs font-black uppercase tracking-widest">Cisco Sieťová akadémia, UNIZA</span>
                </div>
              </div>
            </div>
          </section>
          {/* --- Proces spolupráce --- */}
          <section className="mx-auto mb-20">
            <div className="flex flex-col justify-center items-center gap-10 bg-black/90 rounded-2xl py-14 px-4 md:px-12 relative overflow-hidden">
              {/* Dekoratívny gradientový pruh */}
              <div className="absolute left-0 top-0 w-full h-2 bg-gradient-to-r from-[#F43182] via-[#d11a6b] to-[#F43182] opacity-70 rounded-t-2xl" />
              <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-10 text-left tracking-tight drop-shadow-lg w-full pt-16">Ako prebieha spolupráca?</h3>
              <ol className="flex flex-col gap-10 w-full relative z-10">
                <li className="flex items-start gap-6 group">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#F43182] to-[#d11a6b] flex items-center justify-center shadow-2xl animate-bounce group-hover:scale-110 transition-transform duration-200 mt-1">
                    <span className="text-white text-2xl font-black">1</span>
                  </div>
                  <div>
                    <span className="text-white font-bold text-lg group-hover:text-[#F43182] transition-colors duration-200 block mb-1">Nezáväzná konzultácia</span>
                    <p className="text-white/70 text-base leading-snug">Krátky online alebo osobný rozhovor, kde zistíme vaše potreby, ciele a predstavy o projekte.</p>
                  </div>
                </li>
                <li className="flex items-start gap-6 group">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#F43182] to-[#d11a6b] flex items-center justify-center shadow-2xl animate-bounce delay-100 group-hover:scale-110 transition-transform duration-200 mt-1">
                    <span className="text-white text-2xl font-black">2</span>
                  </div>
                  <div>
                    <span className="text-white font-bold text-lg group-hover:text-[#F43182] transition-colors duration-200 block mb-1">Návrh riešenia a cenová ponuka</span>
                    <p className="text-white/70 text-base leading-snug">Navrhneme optimálne riešenie na mieru a pripravíme jasnú cenovú ponuku bez skrytých poplatkov.</p>
                  </div>
                </li>
                <li className="flex items-start gap-6 group">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#F43182] to-[#d11a6b] flex items-center justify-center shadow-2xl animate-bounce delay-200 group-hover:scale-110 transition-transform duration-200 mt-1">
                    <span className="text-white text-2xl font-black">3</span>
                  </div>
                  <div>
                    <span className="text-white font-bold text-lg group-hover:text-[#F43182] transition-colors duration-200 block mb-1">Realizácia a testovanie</span>
                    <p className="text-white/70 text-base leading-snug">Vytvoríme web, aplikáciu alebo riešenie, všetko priebežne konzultujeme a testujeme s vami.</p>
                  </div>
                </li>
                <li className="flex items-start gap-6 group">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#F43182] to-[#d11a6b] flex items-center justify-center shadow-2xl animate-bounce delay-300 group-hover:scale-110 transition-transform duration-200 mt-1">
                    <span className="text-white text-2xl font-black">4</span>
                  </div>
                  <div>
                    <span className="text-white font-bold text-lg group-hover:text-[#F43182] transition-colors duration-200 block mb-1">Spustenie a podpora</span>
                    <p className="text-white/70 text-base leading-snug">Web spustíme, zaškolíme vás a poskytujeme dlhodobú podporu aj po odovzdaní projektu.</p>
                  </div>
                </li>
              </ol>
            </div>
          </section>
     
          {/* Moderná CTA sekcia na konci portfólia */}
          <section className="max-w-[1000px] mx-auto mt-24 mb-10">
            <div className="relative overflow-hidden rounded-[2rem] p-0 md:p-0 shadow-2xl border border-[#F43182]/40 group">
              {/* Dekoratívne gradienty */}
              <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#F43182]/30 rounded-full blur-3xl opacity-70 pointer-events-none z-0 animate-pulse" />
              <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#F43182]/20 rounded-full blur-3xl opacity-60 pointer-events-none z-0 animate-pulse" />
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 bg-gradient-to-br from-[#1a1a1a] via-[#2d002b] to-[#F43182]/10 p-8 md:p-16">
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-3xl md:text-4xl font-black text-white mb-3 tracking-tight leading-tight drop-shadow-lg">Chcete podobný web?</h3>
                  <p className="text-lg md:text-xl text-white/80 mb-6 max-w-xl mx-auto md:mx-0 drop-shadow">Navrhneme a vytvoríme pre vás moderný web, ktorý zaujme a prinesie výsledky. Neváhajte nás kontaktovať a získajte nezáväznú konzultáciu zdarma.</p>
                </div>
                <div className="flex flex-col items-center gap-4 flex-shrink-0">
                  <a href="/kontakt" className="inline-block bg-gradient-to-r from-[#F43182] to-[#d11a6b] hover:from-[#d11a6b] hover:to-[#F43182] text-white font-extrabold px-12 py-5 rounded-full text-xl shadow-xl transition-all duration-200 tracking-wider uppercase scale-100 group-hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#F43182]/40">Kontaktujte nás</a>
                  <span className="text-xs text-white/60 mt-1">Odpovieme do 24 hodín</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default PortfolioProjectDetail;
