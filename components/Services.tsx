
import React from 'react';

const serviceList = [
  { title: "Tvorba webov", desc: "Moderné, rýchle a konverzne optimalizované webstránky na mieru.", icon: "🌐" },
  { title: "Social Media", desc: "Komplexná správa a tvorba obsahu, ktorý buduje komunitu.", icon: "📱" },
  { title: "Grafika & Logá", desc: "Logo manuály a vizuálne identity, ktoré vás odlíšia.", icon: "🎨" },
  { title: "Fotenie", desc: "Profesionálne produktové a lifestyle fotenie pre vašu značku.", icon: "📸" }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="font-giaza text-5xl text-[#F43182] mb-4">Čo pre vás robíme</h2>
          <div className="w-24 h-1 bg-[#F43182]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceList.map((service, idx) => (
            <div key={idx} className="group p-8 border border-white/10 hover:border-[#F43182] transition-all duration-500 rounded-xl bg-[#0a0a0a]">
              <div className="text-4xl mb-6 group-hover:scale-125 transition-transform duration-500 inline-block">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-white uppercase tracking-wider">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
