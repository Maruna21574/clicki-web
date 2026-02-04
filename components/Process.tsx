
import React from 'react';

const steps = [
  { num: "01", title: "Konzultácia", desc: "Zistíme vaše ciele, pochopíme vašu značku a určíme stratégiu." },
  { num: "02", title: "Dizajn & Koncept", desc: "Vytvoríme vizuálny návrh, ktorý reflektuje vašu identitu a potreby." },
  { num: "03", title: "Vývoj & Produkcia", desc: "Pretavíme návrh do reality – kódujeme, fotíme, tvoríme." },
  { num: "04", title: "Launch & Rast", desc: "Odovzdáme hotové dielo a nastavíme cestu pre ďalší úspech." }
];

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-32 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="font-giaza text-5xl md:text-7xl mb-8">Náš <span className="text-[#F43182]">postup</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Od prvého kliku až po finálnu produkciu. Transparentne, kreatívne a s dôrazom na detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            {/* Connector line for desktop */}
            <div className="hidden md:block absolute top-[4.5rem] left-0 w-full h-px bg-white/5 z-0"></div>
            
            {steps.map((step, idx) => (
                <div key={idx} className="relative z-10 flex flex-col items-center text-center px-4">
                    <div className="w-16 h-16 rounded-full border-2 border-[#F43182] bg-black flex items-center justify-center mb-8 group hover:bg-[#F43182] transition-all duration-300">
                        <span className="font-giaza text-xl text-[#F43182] group-hover:text-white">{step.num}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-4 uppercase tracking-tighter">{step.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                        {step.desc}
                    </p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};
