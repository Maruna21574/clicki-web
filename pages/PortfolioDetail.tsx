import React from 'react';
import { Link } from 'react-router-dom';

interface Project {
  id: string;
  slug?: string;
  title: string;
  cat: string;
  img: string;
  desc: string;
  tags: string[];
}

const projects: Project[] = [
    { 
      id: "01",
      slug: "netacad-uniza",
      title: "NetAcad Uniza", 
      cat: "WEBY", 
      img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800",
      desc: `Typ webu: Vzdelávacia platforma pre Cisco akadémiu a inštruktorské centrum na Žilinskej univerzite.\n\nZameranie: Vzdelávanie v oblasti sieťových technológií, bezpečnosti, Linux OS a IoT. Organizácia kurzov, školení a certifikácií pre študentov, učiteľov aj firmy.\n\nSlužby, ktoré som pre nich realizoval: kompletný dizajn, UX/UI návrh, programovanie frontendu aj backendu, SEO optimalizácia, generovanie mailov, kontaktné formuláre, podpora a rozvoj webu.\n\nWebová platforma pre študentov a lektorov Cisco akadémie na Žilinskej univerzite. Moderný dizajn, prehľadné rozhranie a integrácia s e-learningom.\n\nSme Cisco Sieťová Akadémia s viac ako 20-ročnou tradíciou, pôsobiaca pri Katedre informačných sietí FRI ŽU. Ako jedno z troch Inštruktorských tréningových centier (ITC) na Slovensku ponúkame akademické aj komerčné certifikované kurzy NetAcad. Pripravujeme študentov na získanie Cisco certifikátov a poskytujeme školenia v oblastiach IP sietí, bezpečnosti, Linux OS a IoT.\n\nPre koho sú kurzy určené?\n- Študenti, doktorandi, učitelia\n- Zamestnanci komerčných spoločností\n\nVýhody: moderné laboratóriá, skúsení inštruktori, praktické zručnosti, certifikácie Cisco.`,
      tags: ["Web", "Vzdelávanie", "Cisco", "Uniza", "NetAcad", "UX/UI", "SEO", "Programovanie", "Dizajn"]
    },
    { 
      id: "02",
      slug: "niluniza",
      title: "NilUniza", 
      cat: "WEBY", 
      img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?q=80&w=800",
      desc: "Informačný portál pre študentov a zamestnancov NilUniza. Dôraz na jednoduchosť, rýchlosť a dostupnosť informácií.",
      tags: ["Web", "Uniza", "Intranet", "UX/UI"]
    },
    {
      id: "09",
      slug: "penzion-eso",
      title: "Penzión Eso",
      cat: "WEBY",
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800",
      desc: "Moderný web pre rodinný penzión v srdci prírody. Rezervácie, galéria a prehľadné informácie pre hostí.",
      tags: ["Web", "Rezervácie", "Galéria", "UX/UI"]
    },
    {
      id: "10",
      slug: "extera-martin",
      title: "Extera Martin",
      cat: "WEBY",
      img: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?q=80&w=800",
      desc: "Webová prezentácia pre Extera Martin – odborníkov na vzdelávanie a kurzy. Dôraz na jednoduchosť a informovanosť.",
      tags: ["Web", "Vzdelávanie", "Kurzy", "Prezentácia"]
    },
    {
      id: "11",
      slug: "stolarska-vyroba",
      title: "Stolárska výroba",
      cat: "WEBY",
      img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=800",
      desc: "Firemný web pre stolársku výrobu s portfóliom realizácií a kontaktným formulárom.",
      tags: ["Web", "Portfólio", "Remeslo", "Kontakt"]
    },
    {
      id: "12",
      slug: "targos-sk",
      title: "targos.sk",
      cat: "WEBY",
      img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?q=80&w=800",
      desc: "Webová stránka pre spoločnosť targos.sk – prehľad služieb, referencie a moderný dizajn.",
      tags: ["Web", "Služby", "Referencie", "Dizajn"]
    },
];

export const PortfolioDetail: React.FC = () => {
  const [filter, setFilter] = React.useState('všetko');
  const categories = Array.from(new Set(projects.map(p => p.cat)));
  const filteredProjects = filter === 'všetko'
    ? projects
    : projects.filter(p =>
        p.cat.toLowerCase() === filter.toLowerCase() ||
        p.tags.some(t => t.toLowerCase().includes(filter.toLowerCase()))
      );
  return (
    <div className="bg-black min-h-screen pt-80 pb-40 px-6 lg:px-20 overflow-hidden text-[#F43182]">
      <div className="max-w-[1600px] mx-auto">
        {/* Header Section */}
        <div className="mb-24 reveal">
            <h1 className="font-giaza text-[12vw] leading-[0.85] text-white font-black uppercase mb-6">PORTFÓLIO.</h1>
            <h2 className="text-[#F43182] font-black tracking-[0.3em] text-2xl uppercase mb-8">Naše kliky v praxi</h2>
            
            <div className="max-w-4xl space-y-8">
                <p className="text-gray-400 text-xl md:text-2xl font-medium leading-relaxed uppercase tracking-wide">
                    Pozri si projekty, ktoré už žijú svoj digitálny život.<br />
                    Každý web, každá fotka a každý vizuál má jeden cieľ – fungovať.
                </p>
                
                {/* Dynamic category filters */}
                <div className="flex flex-wrap gap-x-12 gap-y-6 pt-4 text-base font-bold uppercase tracking-[0.2em]">
                  <button
                    onClick={() => setFilter('všetko')}
                    className={`transition-all hover:text-white ${filter === 'všetko' ? 'text-white underline underline-offset-8 decoration-2' : 'text-[#F43182]'}`}
                  >
                    zobraziť všetko
                  </button>
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setFilter(cat)}
                      className={`transition-all hover:text-white ${filter === cat ? 'text-white underline underline-offset-8 decoration-2' : 'text-[#F43182]'}`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
            </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {filteredProjects.map((p) => (
            <Link
              key={p.id}
              to={p.slug ? `/portfolio/${p.slug}` : '#'}
              className="group relative cursor-pointer"
            >
              <div className="aspect-[3/4] overflow-hidden rounded-[2.5rem] bg-[#0a0a0a] border border-white/5 group-hover:border-[#F43182]/40 transition-all duration-700">
                <img
                  src={p.img}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                  alt={p.title}
                />
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-start p-8">
                  <span className="text-[#F43182] font-black tracking-widest text-[10px] uppercase mb-2">{p.cat}</span>
                  <h3 className="font-giaza text-3xl text-white tracking-tighter mb-4">{p.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map(t => (
                      <span key={t} className="text-xs border border-[#F43182] bg-[#F43182]/20 px-3 py-1 rounded-full text-white uppercase font-bold">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between px-4">
                <div className="space-y-1">
                  <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest">{p.cat}</p>
                  <h4 className="text-lg font-giaza text-white group-hover:text-[#F43182] transition-colors">{p.title}</h4>
                </div>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#F43182] group-hover:border-[#F43182] transition-all">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Overlay removed, detail is now a separate page */}
    </div>
  );
};
