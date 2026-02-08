
import React, { useState } from 'react';

interface SubService {
  name: string;
  desc: string;
}

interface ServiceItem {
  id: string;
  title: string;
  category: string;
  image: string;
  subServices: SubService[];
}

const servicesData: ServiceItem[] = [
  {
    id: "01",
    title: "WEB ARCHITECTURE",
    category: "UX/UI & DEV",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800",
    subServices: [
      { name: "UX/UI Design", desc: "Tvoríme intuitívne rozhrania, ktoré vedú užívateľa k cieľu prirodzenou cestou." },
      { name: "Custom Coding", desc: "Píšeme čistý a škálovateľný kód na mieru vašim špecifickým potrebám." },
      { name: "E-commerce riešenia", desc: "Pretvárame prehliadanie produktov na nákupnú skúsenosť, ktorú si klienti zamilujú." },
      { name: "Optimalizácia rýchlosti", desc: "Zabezpečujeme bleskové načítanie, ktoré je kľúčové pre SEO aj konverzie." }
    ]
  },
  {
    id: "02",
    title: "IDENTITY & BRANDING",
    category: "DESIGN & IDENTITY",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800",
    subServices: [
      { name: "Logo Design", desc: "Vytvárame symboly, ktoré nesú DNA vašej značky a sú rozpoznateľné v zlomku sekundy." },
      { name: "Brand Manual", desc: "Definujeme pravidlá, ktoré zabezpečia konzistentnú komunikáciu na všetkých kanáloch." },
      { name: "Typografia & Farby", desc: "Vyberáme vizuálny jazyk, ktorý evokuje tie správne emócie u vašej cieľovej skupiny." },
      { name: "Tlačoviny", desc: "Prenášame digitálnu identitu do hmatateľnej podoby s dôrazom na prémiové materiály." }
    ]
  },
  {
    id: "03",
    title: "SOCIAL GROWTH",
    category: "MARKETING & CONTENT",
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=800",
    subServices: [
      { name: "Content Creation", desc: "Tvoríme vizuály a texty, ktoré v nekonečnom feede okamžite pritiahnu pozornosť." },
      { name: "Reels & Video", desc: "Krátke, úderné formáty navrhnuté pre maximálny organický dosah a engagement." },
      { name: "Social Strategy", desc: "Neplánujeme len príspevky, ale budujeme dlhodobú prítomnosť, ktorá má zmysel." },
      { name: "Ads Management", desc: "Precízne cielenie a optimalizácia rozpočtov pre dosiahnutie reálnych biznis výsledkov." }
    ]
  },
  {
    id: "04",
    title: "PRODUCTION",
    category: "PHOTO & VIDEO",
    image: "https://images.unsplash.com/photo-1493119508027-2b584f234d6c?q=80&w=800",
    subServices: [
      { name: "Produktové fotenie", desc: "Zachytávame detaily a kvalitu vašich produktov tak, aby vynikla ich jedinečnosť." },
      { name: "Post-produkcia", desc: "Profesionálna úprava, ktorá dodáva výslednému dielu filmový a luxusný nádych." },
      { name: "Event Coverage", desc: "Dokumentujeme dôležité momenty vašej firmy s dôrazom na atmosféru a emóciu." }
    ]
  }
];

export const ServicesDetail: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [activeSubService, setActiveSubService] = useState<{serviceId: string, subName: string} | null>(null);

  return (
    <div className="bg-black min-h-screen pt-80 pb-20 px-6 lg:px-20 overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        <div className="mb-24 reveal">
            <h1 className="font-giaza text-[10vw] leading-[0.85] text-white font-black uppercase mb-6">SLUŽBY.</h1>
            <p className="text-[#F43182] font-black tracking-[0.5em] text-sm uppercase mt-4">Naša expertíza pre váš rast</p>
        </div>

        <div className="border-t border-white/10 relative">
          {servicesData.map((service) => (
            <div key={service.id} className="relative">
              <div 
                onMouseEnter={() => setActiveId(service.id)}
                onMouseLeave={() => setActiveId(null)}
                onClick={() => setExpandedId(expandedId === service.id ? null : service.id)}
                className="group flex flex-col lg:flex-row items-start lg:items-center justify-between py-8 sm:py-10 md:py-12 lg:py-20 border-b border-white/10 cursor-pointer transition-all duration-500 hover:px-2 sm:hover:px-4 md:hover:px-8 bg-transparent relative z-20 text-left"
              >
                {/* ID and Title */}
                <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-6 md:gap-10 w-full lg:w-auto">
                  <span className="font-giaza text-[#F43182] text-base sm:text-xl mt-2 sm:mt-4">/ {service.id}</span>
                  <h2 className="font-giaza text-lg sm:text-2xl md:text-5xl lg:text-[4vw] font-black text-white leading-tight uppercase transition-all duration-500">
                    {service.title}
                  </h2>
                </div>

                {/* Right Side Info */}
                <div className="flex flex-col items-start lg:items-end gap-1 sm:gap-2 text-left lg:text-right mt-4 sm:mt-8 lg:mt-0">
                  <span className="text-gray-500 font-black text-[10px] tracking-[0.2em] uppercase">{service.category}</span>
                  <div className="flex items-center gap-1 sm:gap-2 group/btn">
                    <span className="text-[#F43182] font-bold text-xs sm:text-sm tracking-widest uppercase transition-all group-hover/btn:mr-2">
                        {expandedId === service.id ? 'Zavrieť' : 'Zobraziť'}
                    </span>
                    <svg className={`w-4 h-4 text-[#F43182] transition-transform duration-500 ${expandedId === service.id ? 'rotate-180' : 'rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                    </svg>
                  </div>
                </div>

                {/* Static Image Preview - Appears on hover in a fixed spot for the row */}
                <div className={`hidden lg:block absolute right-1/4 top-1/2 -translate-y-1/2 pointer-events-none z-[30] transition-all duration-700 w-[200px] h-[280px] overflow-hidden rounded-xl border border-white/10 ${activeId === service.id ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-95 translate-x-10'}`}> 
                    <img 
                        src={service.image} 
                        className="w-full h-full object-cover grayscale" 
                        alt={service.title}
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                </div>
                {/* Mobile image preview */}
                <div className={`block lg:hidden w-full mt-4 transition-all duration-700 ${activeId === service.id ? 'opacity-100 scale-100' : 'opacity-80 scale-95'}`}>
                  <img 
                    src={service.image}
                    className="w-full h-40 object-cover grayscale rounded-xl border border-white/10"
                    alt={service.title}
                  />
                </div>
              </div>

              {/* Expanded Detail (Sub-services) */}
                <div className={`overflow-hidden transition-all duration-700 ease-in-out bg-[#050505]/50 ${expandedId === service.id ? 'max-h-[1000px] opacity-100 py-10 sm:py-12 md:py-16 px-4 sm:px-8 md:px-12' : 'max-h-0 opacity-0 px-4 sm:px-8 md:px-12'}`}>
                <div className="lg:pl-32 pr-6">
                  <p className="text-[#F43182] font-black text-[10px] tracking-[0.4em] uppercase mb-12 opacity-50 text-left">ZAMERANIE (KLIKNITE PRE DETAILY)</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {service.subServices.map((sub, i) => (
                      <div 
                        key={i} 
                        className="flex flex-col gap-4 group/sub cursor-pointer text-left"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveSubService(activeSubService?.subName === sub.name ? null : {serviceId: service.id, subName: sub.name});
                        }}
                      >
                        <div className={`h-[1px] transition-all duration-700 ${activeSubService?.subName === sub.name ? 'w-full bg-[#F43182]' : 'w-8 bg-white/20 group-hover/sub:w-16 group-hover/sub:bg-[#F43182]'}`}></div>
                        <span className={`text-sm font-bold tracking-[0.1em] uppercase transition-colors duration-500 ${activeSubService?.subName === sub.name ? 'text-[#F43182]' : 'text-white/60 group-hover/sub:text-white'}`}>
                          {sub.name}
                        </span>
                                
                        <div className={`overflow-hidden transition-all duration-500 ${activeSubService?.subName === sub.name ? 'max-h-32 opacity-100 mt-2' : 'max-h-0 opacity-0 mt-0'}`}>
                          <p className="text-gray-500 text-xs font-medium leading-relaxed uppercase tracking-wider">
                            {sub.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
