
import React, { useState } from 'react';

interface Project {
  id: string;
  title: string;
  cat: string;
  img: string;
  desc: string;
  tags: string[];
}

const projects: Project[] = [
    { 
      id: "01",
      title: "HABESH COFFEE", 
      cat: "BRANDING", 
      img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800",
      desc: "Komplexná rebrandová identita pre slovenskú pražiareň kávy. Od loga až po obaly produktov.",
      tags: ["Logo", "Print", "Webdesign", "UX/UI"]
    },
    { 
      id: "02",
      title: "HAPPY WOK", 
      cat: "E-COMMERCE", 
      img: "https://images.unsplash.com/photo-1512058560366-cd242d4532be?q=80&w=800",
      desc: "Ázijské potraviny a eshop s dôrazom na rýchlosť nákupu a vizuálnu sýtosť.",
      tags: ["Web", "Marketing", "Ads"]
    },
    { 
      id: "03",
      title: "ADVITERRA", 
      cat: "CORPORATE", 
      img: "https://images.unsplash.com/photo-1554774853-719586f82d77?q=80&w=800",
      desc: "Moderný vizuál pre poradenskú spoločnosť, kde profesionalita stretáva dizajn.",
      tags: ["UI/UX", "Identity", "Logo"]
    },
    { 
      id: "04",
      title: "KARAVAN 365", 
      cat: "SOCIAL GROWTH", 
      img: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?q=80&w=800",
      desc: "Správa sociálnych sietí a tvorba obsahu pre najväčšiu požičovňu karavanov.",
      tags: ["Content", "Reels", "Strategy"]
    },
    { 
      id: "05",
      title: "LOKAL ROASTERY", 
      cat: "PRODUCTION", 
      img: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=800",
      desc: "Produktová fotografia a video produkcia pre lokálnu značku kávy.",
      tags: ["Photo", "Video", "Post-prod"]
    },
    { 
      id: "06",
      title: "URBAN STYLE", 
      cat: "DESIGN", 
      img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=800",
      desc: "Vizuálny koncept pre streetwear značku s dôrazom na typografiu.",
      tags: ["Branding", "Print", "Social"]
    },
    { 
      id: "07",
      title: "DIVADLO ŽILINA", 
      cat: "BRANDING", 
      img: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?q=80&w=800",
      desc: "Minimalistická identita pre kultúrnu inštitúciu s historickým presahom.",
      tags: ["Identity", "Typography", "Art"]
    },
    { 
      id: "08",
      title: "TERMÍNOVKA", 
      cat: "APP DESIGN", 
      img: "https://images.unsplash.com/photo-1551288049-bbbda5366392?q=80&w=800",
      desc: "Návrh rozhrania pre finančnú aplikáciu novej generácie.",
      tags: ["Mobile App", "UI/UX", "Figma"]
    }
];

export const PortfolioDetail: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState('všetko');

  const filteredProjects = filter === 'všetko' 
    ? projects 
    : projects.filter(p => 
        p.cat.toLowerCase().includes(filter.toLowerCase()) || 
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
                
                {/* Filters without emojis */}
                <div className="flex flex-wrap gap-x-12 gap-y-6 pt-4 text-base font-bold uppercase tracking-[0.2em]">
                    <button 
                        onClick={() => setFilter('web')} 
                        className={`transition-all hover:text-white ${filter === 'web' ? 'text-white underline underline-offset-8 decoration-2' : 'text-[#F43182]'}`}
                    >
                        weby
                    </button>
                    <button 
                        onClick={() => setFilter('dizajn')} 
                        className={`transition-all hover:text-white ${filter === 'dizajn' ? 'text-white underline underline-offset-8 decoration-2' : 'text-[#F43182]'}`}
                    >
                        dizajn
                    </button>
                    <button 
                        onClick={() => setFilter('social')} 
                        className={`transition-all hover:text-white ${filter === 'social' ? 'text-white underline underline-offset-8 decoration-2' : 'text-[#F43182]'}`}
                    >
                        sociálne siete
                    </button>
                    <button 
                        onClick={() => setFilter('photo')} 
                        className={`transition-all hover:text-white ${filter === 'photo' ? 'text-white underline underline-offset-8 decoration-2' : 'text-[#F43182]'}`}
                    >
                        fotografia
                    </button>
                    {filter !== 'všetko' && (
                        <button 
                            onClick={() => setFilter('všetko')}
                            className="text-[#F43182]/40 hover:text-white transition-colors border-l border-white/10 pl-12"
                        >
                            zobraziť všetko
                        </button>
                    )}
                </div>
            </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {filteredProjects.map((p) => (
            <div 
              key={p.id} 
              onClick={() => setSelectedProject(p)}
              className="group relative cursor-pointer"
            >
              <div className="aspect-[3/4] overflow-hidden rounded-[2.5rem] bg-[#0a0a0a] border border-white/5 group-hover:border-[#F43182]/40 transition-all duration-700">
                <img 
                    src={p.img} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" 
                    alt={p.title}
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                    <span className="text-[#F43182] font-black tracking-widest text-[10px] uppercase mb-2">{p.cat}</span>
                    <h3 className="font-giaza text-3xl text-white tracking-tighter mb-4">{p.title}</h3>
                    <div className="flex flex-wrap gap-2">
                        {p.tags.map(t => (
                            <span key={t} className="text-[8px] border border-white/20 px-2 py-1 rounded-full text-white/60 uppercase">{t}</span>
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
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Overlay */}
      {selectedProject && (
        <div className="fixed inset-0 z-[200] bg-black/98 backdrop-blur-3xl overflow-y-auto pt-24 px-6">
          <button 
            onClick={() => setSelectedProject(null)}
            className="fixed top-10 right-10 z-[210] p-4 bg-white/5 hover:bg-[#F43182] rounded-full transition-all group"
          >
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
          </button>

          <div className="max-w-5xl mx-auto pb-40">
            <div className="mb-20">
                <span className="text-[#F43182] font-black tracking-[0.5em] text-xs uppercase mb-6 block">{selectedProject.cat}</span>
                <h2 className="font-giaza text-7xl md:text-9xl text-white mb-10">{selectedProject.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-20 items-start">
                    <div className="md:col-span-2">
                        <p className="text-gray-400 text-2xl font-giaza leading-relaxed uppercase tracking-wider">
                            {selectedProject.desc}
                        </p>
                    </div>
                    <div className="space-y-8 pt-4">
                        <div className="space-y-4">
                            <p className="text-[#F43182] text-[10px] font-black uppercase tracking-widest">Služby pre klienta</p>
                            <div className="flex flex-wrap gap-2">
                                {selectedProject.tags.map(t => (
                                    <span key={t} className="bg-white/5 border border-white/10 px-4 py-2 rounded-full text-xs text-white uppercase font-bold tracking-tighter">{t}</span>
                                ))}
                            </div>
                        </div>
                        <div className="pt-8 border-t border-white/10">
                            <button className="bg-white text-black px-10 py-4 rounded-full font-black text-xs uppercase tracking-widest hover:bg-[#F43182] hover:text-white transition-all w-full">Mám záujem</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="space-y-8">
              <div className="rounded-[3rem] overflow-hidden border border-white/5">
                <img src={selectedProject.img} className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
