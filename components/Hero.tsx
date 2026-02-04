
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#F43182]/10 blur-[120px] rounded-full"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div>
          <h1 className="font-giaza text-6xl md:text-8xl leading-tight mb-8">
            <span className="text-white">Dávame</span><br />
            <span className="text-[#F43182] italic">digitálny</span><br />
            <span className="text-white">život vašim</span><br />
            <span className="text-[#F43182]">víziám.</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-lg mb-10 leading-relaxed">
            Sme Clicki – kreatívna agentúra, ktorá mení značky na zážitky. 
            Od špičkových webov po pútavý content, sme vaším partnerom v raste.
          </p>
          <div className="flex flex-wrap gap-6">
            <a href="#portfolio" className="bg-[#F43182] text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-[#d1246d] transition-colors">
              Zobraziť našu prácu
            </a>
            <a href="#contact" className="border border-white/20 text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:border-[#F43182] transition-colors">
              Povedzte nám o sne
            </a>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-4 bg-[#F43182]/20 blur-xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
          <div className="relative overflow-hidden rounded-2xl aspect-[4/5] bg-black border border-[#F43182]/30">
            <img 
              src="https://picsum.photos/id/1/1000/1200" 
              alt="Creative Space" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute bottom-8 left-8">
                <span className="font-giaza text-8xl text-[#F43182] opacity-30 select-none">Li</span>
            </div>
          </div>
          {/* Decorative tag like in the sample image */}
          <div className="absolute top-12 -right-6 bg-white text-black px-4 py-2 rotate-90 font-bold uppercase tracking-tighter text-sm">
            SINCE 2024
          </div>
        </div>
      </div>
    </section>
  );
};
