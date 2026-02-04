
import React from 'react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-black min-h-screen">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Quick Contact Bar - "Hneď na začiatok" */}
        <div className="flex flex-wrap items-center justify-start gap-x-16 gap-y-8 mb-24 pb-12 border-b border-white/5 reveal">
            <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full border border-[#F43182] flex items-center justify-center text-[#F43182] group-hover:bg-[#F43182] group-hover:text-white transition-all">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                </div>
                <div className="flex flex-col">
                    <span className="text-[10px] text-gray-500 font-black uppercase tracking-widest mb-1">e-mail</span>
                    <a href="mailto:info@clicki.sk" className="text-lg font-giaza text-white hover:text-[#F43182] transition-colors">info@clicki.sk</a>
                </div>
            </div>

            <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full border border-[#F43182] flex items-center justify-center text-[#F43182] group-hover:bg-[#F43182] group-hover:text-white transition-all">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                </div>
                <div className="flex flex-col">
                    <span className="text-[10px] text-gray-500 font-black uppercase tracking-widest mb-1">telefón</span>
                    <span className="text-lg font-giaza text-white">+421 9XX XXX XXX</span>
                </div>
            </div>

            <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full border border-[#F43182] flex items-center justify-center text-[#F43182] group-hover:bg-[#F43182] group-hover:text-white transition-all">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                </div>
                <div className="flex flex-col">
                    <span className="text-[10px] text-gray-500 font-black uppercase tracking-widest mb-1">flexibilita</span>
                    <span className="text-lg font-giaza text-white">pôsobíme online aj offline</span>
                </div>
            </div>
        </div>

        {/* Main Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="reveal">
            <h2 className="font-giaza text-7xl md:text-9xl text-white mb-10 leading-[0.9]">
              Poďme <span className="text-[#F43182] italic">kliknúť</span> <br />
              tvoj projekt.
            </h2>
            
            <p className="text-gray-400 text-xl md:text-2xl font-medium leading-relaxed uppercase tracking-wider max-w-xl mb-12">
              Máš nápad, otázku alebo len tušíš, že tvoj web potrebuje refresh? 
              Ozvi sa – radi sa na to pozrieme.
            </p>

            <div className="pt-20">
                <p className="font-giaza text-5xl md:text-6xl text-[#F43182] italic tracking-tighter">
                    CLICKI – klik a ide sa.
                </p>
            </div>
          </div>

          <div className="bg-[#0a0a0a] border border-white/5 p-10 md:p-16 rounded-[3rem] relative reveal">
            <form className="space-y-10">
              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-[0.3em] font-black text-[#F43182]">Tvoje meno</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-white/10 py-4 focus:border-[#F43182] outline-none transition-all text-xl text-white font-giaza" 
                  placeholder="Ako vás volajú?" 
                />
              </div>
              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-[0.3em] font-black text-[#F43182]">E-mail</label>
                <input 
                  type="email" 
                  className="w-full bg-transparent border-b border-white/10 py-4 focus:border-[#F43182] outline-none transition-all text-xl text-white font-giaza" 
                  placeholder="Kde vás zastihneme?" 
                />
              </div>
              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-[0.3em] font-black text-[#F43182]">Správa</label>
                <textarea 
                  rows={4} 
                  className="w-full bg-transparent border-b border-white/10 py-4 focus:border-[#F43182] outline-none transition-all text-xl text-white font-giaza resize-none" 
                  placeholder="Napíšte nám pár slov o vašom projekte..."
                ></textarea>
              </div>
              <button className="group flex items-center justify-between w-full bg-[#F43182] text-white font-black uppercase px-10 py-6 rounded-2xl hover:bg-white hover:text-black transition-all duration-500 tracking-[0.2em] text-sm">
                <span>Odoslať dopyt</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
