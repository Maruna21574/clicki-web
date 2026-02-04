
import React from 'react';
import { LiIcon } from '../components/LiIcon';
import { Page } from '../App';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="pt-20">
      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col justify-center px-10 relative">
        <div className="absolute top-0 right-0 w-2/3 h-full overflow-hidden opacity-30 pointer-events-none">
            <span className="font-giaza text-[60vw] text-[#F43182] absolute -right-20 -top-20 leading-none select-none italic">Li</span>
        </div>

        <div className="max-w-[1440px] mx-auto w-full relative z-10">
          <h1 className="font-giaza text-[12vw] leading-[0.85] font-black mb-6 reveal">
            <span className="text-[#F43182]">CLICK.</span> <br />
            <span className="text-white uppercase">A MÁŠ</span> <br />
            <span className="text-white uppercase">WEB.</span>
          </h1>
          <p className="text-[#F43182] font-black tracking-[0.5em] text-2xl uppercase mb-12 block reveal">
            Digitálny svet, ktorý funguje.
          </p>
          
          <div className="flex flex-col md:flex-row gap-10 items-start md:items-center">
            <button 
              onClick={() => onNavigate('contact' as Page)}
              className="group relative px-12 py-6 overflow-hidden bg-[#F43182] text-white rounded-full font-black uppercase tracking-widest transition-all duration-500 hover:pr-20"
            >
              <span className="relative z-10">CHCEM WEB, ČO MÁ ŠŤAVU</span>
              <div className="absolute right-0 top-0 h-full w-0 bg-white group-hover:w-16 transition-all duration-500 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#F43182]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </div>
            </button>
            <div className="max-w-md">
                <p className="text-gray-500 font-medium leading-relaxed uppercase text-[10px] tracking-widest mb-4">
                    Sme CLICKI. Tvoríme vizuálne svety, ktoré v digitálnom priestore nielen prežívajú, ale dominujú.
                </p>
                <div className="flex items-center gap-4 text-[#F43182] font-black text-[10px] uppercase tracking-widest cursor-pointer group" onClick={() => (window as any).setAIAgentOpen?.(true)}>
                    <span className="w-8 h-px bg-current transition-all group-hover:w-12"></span>
                    Vyskúšajte nášho AI konzultanta
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CLICKI SECTION */}
      <section className="py-40 px-10 bg-[#050505] relative overflow-hidden">
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#F43182]/5 blur-[100px] rounded-full"></div>
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 relative z-10">
            <div className="space-y-12">
                <span className="text-[#F43182] font-black tracking-[0.5em] text-xs uppercase block">PREČO PRÁVE CLICKI?</span>
                <h2 className="font-giaza text-7xl text-white leading-tight">
                    Lebo nerobíme weby <br /><span className="text-[#F43182]">„len aby boli“.</span>
                </h2>
                <div className="space-y-8">
                  <p className="text-gray-400 text-xl font-medium leading-relaxed uppercase tracking-wide">
                    Robíme ich tak, aby dávali zmysel tvojmu biznisu a zároveň vyzerali sakramentsky dobre.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10">
                    {[
                      "premyslený dizajn",
                      "čistý kód a rýchlosť",
                      "jasná štruktúra",
                      "moderný vizuál",
                      "ľudský prístup"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-4 group">
                        <span className="w-2 h-2 rounded-full bg-[#F43182] group-hover:scale-150 transition-transform"></span>
                        <span className="text-lg font-bold text-white uppercase tracking-widest">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-16 border-t border-white/5">
                  <p className="font-giaza text-4xl text-[#F43182] italic">
                    Bez zbytočností. Bez chaosu. Bez limitov.
                  </p>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                    <div className="relative group overflow-hidden rounded-2xl aspect-square">
                        <img 
                            src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=600" 
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-110" 
                            alt="Gallery 1"
                        />
                    </div>
                    <div className="relative group overflow-hidden rounded-2xl aspect-[3/4]">
                        <img 
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600" 
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-110" 
                            alt="Gallery 2"
                        />
                    </div>
                </div>
                <div className="space-y-4 pt-12">
                    <div className="relative group overflow-hidden rounded-2xl aspect-[3/4]">
                        <img 
                            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600" 
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-110" 
                            alt="Gallery 3"
                        />
                    </div>
                    <div className="relative group overflow-hidden rounded-2xl aspect-square">
                        <img 
                            src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=600" 
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-110" 
                            alt="Gallery 4"
                        />
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* QUICK SERVICES HIGHLIGHT */}
      <section className="py-40 px-10">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32">
            <div className="space-y-12">
                <h2 className="font-giaza text-7xl text-white leading-tight">
                    Vaša vízia,<br />naša <span className="text-[#F43182]">exekúcia.</span>
                </h2>
                <div className="flex flex-col gap-6">
                    {[
                        "WEBOVÉ STRÁNKY NA MIERU",
                        "SOCIAL MEDIA DOMINANCIA",
                        "LOGO MANUÁLY A BRANDING",
                        "PRODUKTOVÁ FOTOGRAFIA"
                    ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-6 group cursor-pointer" onClick={() => onNavigate('services')}>
                            <LiIcon size={30} className="group-hover:rotate-12 transition-transform" />
                            <span className="text-2xl font-giaza text-white group-hover:text-[#F43182] transition-colors">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="relative group overflow-hidden rounded-3xl">
                <img src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000&auto=format&fit=crop" className="w-full grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-500"></div>
                <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
                    <span className="font-giaza text-8xl text-[#F43182] opacity-50">01</span>
                    <button onClick={() => onNavigate('services')} className="bg-white text-black px-8 py-3 rounded-full font-black text-xs uppercase tracking-widest hover:bg-[#F43182] hover:text-white transition-all">Detaily</button>
                </div>
            </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-60 px-10 relative overflow-hidden text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#F43182]/5 blur-[200px] rounded-full"></div>
        <div className="max-w-[1440px] mx-auto relative z-10">
          <h2 className="font-giaza text-[8vw] leading-none font-black text-white mb-8">
            Máš nápad? My ho <br />
            <span className="text-[#F43182] italic">klikneme do reality.</span>
          </h2>
          <p className="text-gray-400 text-2xl font-giaza mb-16 max-w-3xl mx-auto">
            Napíš nám a poďme to rozbehnúť. Tvoj úspech začína jedným klikom.
          </p>
          
          <button 
            onClick={() => onNavigate('contact' as Page)}
            className="px-20 py-8 bg-white text-black rounded-full font-black uppercase tracking-[0.2em] text-sm hover:bg-[#F43182] hover:text-white transition-all duration-700 transform hover:scale-110"
          >
            KONTAKTOVAŤ CLICKI
          </button>
        </div>
      </section>
    </div>
  );
};
