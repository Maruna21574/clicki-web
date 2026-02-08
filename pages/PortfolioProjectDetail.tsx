import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

// Importuj projekty zo súboru PortfolioDetail alebo ich presuň do samostatného súboru, ak budeš chcieť zdieľať.
// Tu je ukážka, ako by to mohlo vyzerať:
const projects = [
  {
    id: "03",
    slug: "adviterra",
    title: "ADVITERRA",
    cat: "CORPORATE",
    img: "https://images.unsplash.com/photo-1554774853-719586f82d77?q=80&w=800",
    desc: "Moderný vizuál pre poradenskú spoločnosť, kde profesionalita stretáva dizajn.",
    tags: ["UI/UX", "Identity", "Logo"]
  },
  // ...ostatné projekty
];


export const PortfolioProjectDetail: React.FC = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.slug === slug);

  // Disable background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  if (!project) {
    return (
      <div className="fixed inset-0 z-[200] bg-black/90 flex flex-col items-center justify-center overflow-y-auto">
        <div className="max-w-2xl w-full p-10 bg-[#181824] rounded-3xl shadow-2xl text-white flex flex-col items-center">
          <h1 className="font-giaza text-5xl mb-6 uppercase">Projekt nebol nájdený</h1>
          <Link to="/portfolio" className="px-8 py-3 bg-[#F43182] text-white rounded-full mt-8">Späť na portfólio</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center overflow-y-auto">
      <div className="max-w-3xl w-full p-10 bg-[#181824] rounded-3xl shadow-2xl text-white relative overflow-y-auto max-h-[90vh]">
        <button
          onClick={() => navigate('/portfolio')}
          className="absolute top-6 right-6 text-white bg-[#F43182] rounded-full w-10 h-10 flex items-center justify-center text-2xl hover:bg-white hover:text-[#F43182] transition-all"
          aria-label="Zavrieť detail"
        >
          ×
        </button>
        <h1 className="font-giaza text-[8vw] leading-[0.85] text-white font-black uppercase mb-6">{project.title}</h1>
        <img src={project.img} alt={project.title} className="w-full rounded-3xl mb-10" />
        <div className="mb-8 text-[#F43182] font-black uppercase tracking-widest">{project.cat}</div>
        <p className="text-gray-300 text-xl mb-8">{project.desc}</p>
        <div className="flex flex-wrap gap-4 mb-12">
          {project.tags.map(tag => (
            <span key={tag} className="bg-[#F43182]/20 text-[#F43182] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">{tag}</span>
          ))}
        </div>
        <Link to="/portfolio" className="px-8 py-3 bg-[#F43182] text-white rounded-full">Späť na portfólio</Link>
      </div>
    </div>
  );
};
