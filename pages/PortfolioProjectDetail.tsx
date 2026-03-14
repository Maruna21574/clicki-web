import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

// Rovnaké projekty ako v PortfolioDetail
const projects = [
    { 
      id: "01",
      slug: "netacad-uniza",
      title: "NetAcad Uniza", 
      cat: "WEBY", 
      img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800",
      desc: "Webová platforma pre študentov a lektorov Cisco akadémie na Žilinskej univerzite. Moderný dizajn, prehľadné rozhranie a integrácia s e-learningom.",
      tags: ["Web", "Uniza", "NetAcad", "UX/UI"]
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

export const PortfolioProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return <div className="text-white p-10">Projekt neexistuje.</div>;
  }

  return (
    <div className="bg-black min-h-screen pt-80 pb-40 px-6 lg:px-20 overflow-hidden text-[#F43182]">
      <div className="max-w-[1000px] mx-auto">
        <button onClick={() => navigate(-1)} className="text-xs text-[#F43182] uppercase tracking-widest font-bold hover:underline mb-8">← Späť na portfólio</button>
        <span className="text-[#F43182] font-black tracking-[0.5em] text-xs uppercase mb-6 block">{project.cat}</span>
        <h2 className="font-giaza text-7xl md:text-9xl text-white mb-10">{project.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 items-start mb-20">
          <div className="md:col-span-2">
            <p className="text-gray-400 text-2xl font-giaza leading-relaxed uppercase tracking-wider">{project.desc}</p>
          </div>
          <div className="space-y-8 pt-4">
            <p className="text-[#F43182] text-[10px] font-black uppercase tracking-widest">Služby pre klienta</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(t => (
                <span key={t} className="bg-white/5 border border-white/10 px-4 py-2 rounded-full text-xs text-white uppercase font-bold tracking-tighter">{t}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="rounded-[3rem] overflow-hidden border border-white/5 mb-8">
          <img src={project.img} className="w-full h-auto" alt={project.title} />
        </div>
      </div>
    </div>
  );
};

export default PortfolioProjectDetail;
