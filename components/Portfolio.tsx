
import React from 'react';

const projects = [
  { title: "E-commerce Redesign", category: "Web Design", img: "https://picsum.photos/id/20/800/1000" },
  { title: "SaaS Dashboard", category: "Web Development", img: "https://picsum.photos/id/48/800/1000" },
  { title: "Brand Identity", category: "Logo / Graphic", img: "https://picsum.photos/id/30/800/1000" },
  { title: "Lifestyle Photography", category: "Production", img: "https://picsum.photos/id/37/800/1000" },
];

export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <span className="text-[#F43182] font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Naša práca</span>
            <h2 className="font-giaza text-6xl text-white">Vybrané projekty</h2>
          </div>
          <p className="text-gray-400 max-w-sm text-right italic font-giaza">
            "Kvalita nie je náhoda, ale výsledok premysleného dizajnu."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-2xl cursor-pointer">
              <div className="aspect-[16/10] overflow-hidden">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                <span className="text-[#F43182] font-bold uppercase tracking-widest text-xs mb-2">{project.category}</span>
                <h3 className="font-giaza text-3xl text-white">{project.title}</h3>
              </div>
              {/* Overlay number hint like in visual sample */}
              <div className="absolute top-6 left-6 text-white/20 font-giaza text-6xl group-hover:text-[#F43182]/30 transition-colors pointer-events-none">
                0{idx + 1}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
            <button className="text-white hover:text-[#F43182] transition-colors font-bold uppercase tracking-[0.3em] text-xs underline underline-offset-8">
                Pozrieť celé portfólio
            </button>
        </div>
      </div>
    </section>
  );
};
