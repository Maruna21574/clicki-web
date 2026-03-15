import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { netacadUniza } from '../portfolio/netacad-uniza';
import { niluniza } from '../portfolio/niluniza';
import { penzionEso } from '../portfolio/penzion-eso';
import { exteraMartin } from '../portfolio/extera-martin';
import { stolarskaVyroba } from '../portfolio/stolarska-vyroba';
import { targosSk } from '../portfolio/targos-sk';

// Rovnaké projekty ako v PortfolioDetail
const projects = [
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
    <div className="bg-black min-h-screen pt-80 pb-40 px-6 lg:px-20 overflow-hidden text-[#F43182]">
      <div className="max-w-[1000px] mx-auto">
        <button onClick={() => navigate(-1)} className="text-xs text-[#F43182] uppercase tracking-widest font-bold hover:underline mb-8">← Späť na portfólio</button>
        <span className="text-[#F43182] font-black tracking-[0.5em] text-xs uppercase mb-6 block">{project.cat}</span>
        <h2 className="font-giaza text-7xl md:text-9xl text-white mb-10">{project.title}</h2>
        <div className="rounded-[3rem] overflow-hidden border border-white/5 mb-12">
          <img src={project.img} className="w-full h-auto" alt={project.title} />
        </div>

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

        {/* Sekcia: Tagy */}
        <div className="space-y-8 pt-4 mb-10">
          <p className="text-[#F43182] text-[10px] font-black uppercase tracking-widest">Tagy</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map(t => (
              <span key={t} className="bg-white/5 border border-white/10 px-4 py-2 rounded-full text-xs text-white uppercase font-bold tracking-tighter">{t}</span>
            ))}
          </div>
        </div>

        {/* Sekcia: Ukážka webu */}
        {project.webUrl && (
          <section className="mb-10">
            <h3 className="text-2xl text-white font-bold mb-2">Ukážka webu</h3>
            <a href={project.webUrl} target="_blank" rel="noopener noreferrer" className="inline-block bg-[#F43182] text-white font-bold px-8 py-4 rounded-full text-lg shadow-lg hover:bg-[#d11a6b] transition-colors">Navštíviť web</a>
            <div className="mt-6 rounded-2xl overflow-hidden border border-white/10 shadow-lg">
              <iframe src={project.webUrl} title="Ukážka webu" className="w-full min-h-[500px] bg-white" style={{border:0}} loading="lazy" />
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default PortfolioProjectDetail;
