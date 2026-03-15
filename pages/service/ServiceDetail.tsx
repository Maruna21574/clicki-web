import React from 'react';
import { useParams, Link } from 'react-router-dom';

// Príklad detailu pre službu Web Architecture
const serviceDetails = {
  'web-architecture': {
    title: 'Webová architektúra',
    description: 'Moderné, rýchle a konverzne optimalizované webstránky na mieru.',
    focus: [
      { name: 'UX/UI dizajn', desc: 'Tvoríme intuitívne rozhrania, ktoré vedú užívateľa k cieľu prirodzenou cestou.' },
      { name: 'Vlastný vývoj', desc: 'Píšeme čistý a škálovateľný kód na mieru vašim špecifickým potrebám.' },
      { name: 'E-commerce riešenia', desc: 'Pretvárame prehliadanie produktov na nákupnú skúsenosť, ktorú si klienti zamilujú.' },
      { name: 'Optimalizácia rýchlosti', desc: 'Zabezpečujeme bleskové načítanie, ktoré je kľúčové pre SEO aj konverzie.' },
    ],
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800',
    process: [
      'Úvodná konzultácia a analýza potrieb klienta.',
      'Návrh riešenia a UX/UI dizajnu.',
      'Vývoj a implementácia webu na mieru.',
      'Testovanie, optimalizácia a spustenie.',
      'Podpora a ďalší rozvoj podľa potreby.'
    ],
  },
  'identity-branding': {
    title: 'Identita & Branding',
    description: 'Logo manuály a vizuálne identity, ktoré vás odlíšia.',
    focus: [
      { name: 'Logo dizajn', desc: 'Vytvárame symboly, ktoré nesú DNA vašej značky a sú rozpoznateľné v zlomku sekundy.' },
      { name: 'Brand manuál', desc: 'Definujeme pravidlá, ktoré zabezpečia konzistentnú komunikáciu na všetkých kanáloch.' },
      { name: 'Typografia & farby', desc: 'Vyberáme vizuálny jazyk, ktorý evokuje tie správne emócie u vašej cieľovej skupiny.' },
      { name: 'Tlačoviny', desc: 'Prenášame digitálnu identitu do hmatateľnej podoby s dôrazom na prémiové materiály.' },
    ],
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800',
    process: [
      'Zistenie hodnôt a cieľov značky.',
      'Tvorba návrhov loga a vizuálnej identity.',
      'Pripomienkovanie a finalizácia dizajnu.',
      'Dodanie brand manuálu a podkladov.',
      'Podpora pri implementácii identity.'
    ],
  },
  'social-growth': {
    title: 'Sociálne siete & Content',
    description: 'Komplexná správa a tvorba obsahu, ktorý buduje komunitu.',
    focus: [
      { name: 'Tvorba obsahu', desc: 'Tvoríme vizuály a texty, ktoré v nekonečnom feede okamžite pritiahnu pozornosť.' },
      { name: 'Reels & video', desc: 'Krátke, úderné formáty navrhnuté pre maximálny organický dosah a engagement.' },
      { name: 'Stratégia', desc: 'Neplánujeme len príspevky, ale budujeme dlhodobú prítomnosť, ktorá má zmysel.' },
      { name: 'Správa reklám', desc: 'Precízne cielenie a optimalizácia rozpočtov pre dosiahnutie reálnych biznis výsledkov.' },
    ],
    image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=800',
    process: [
      'Analýza cieľovej skupiny a kanálov.',
      'Nastavenie stratégie a obsahového plánu.',
      'Tvorba a publikácia obsahu.',
      'Správa reklám a optimalizácia výkonu.',
      'Reportovanie výsledkov a odporúčania.'
    ],
  },
  'production': {
    title: 'Produkcia',
    description: 'Profesionálne produktové a lifestyle fotenie pre vašu značku.',
    focus: [
      { name: 'Produktové fotenie', desc: 'Zachytávame detaily a kvalitu vašich produktov tak, aby vynikla ich jedinečnosť.' },
      { name: 'Post-produkcia', desc: 'Profesionálna úprava, ktorá dodáva výslednému dielu filmový a luxusný nádych.' },
      { name: 'Event coverage', desc: 'Dokumentujeme dôležité momenty vašej firmy s dôrazom na atmosféru a emóciu.' },
    ],
    image: 'https://images.unsplash.com/photo-1493119508027-2b584f234d6c?q=80&w=800',
    process: [
      'Konzultácia a pochopenie potrieb klienta.',
      'Plánovanie a príprava produkcie.',
      'Realizácia fotenia alebo natáčania.',
      'Post-produkcia a úprava materiálov.',
      'Odovzdanie finálnych výstupov.'
    ],
  },
};

export const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const detail = slug ? serviceDetails[slug] : undefined;

  if (!detail) {
    return <div className="text-white p-10">Služba neexistuje.</div>;
  }

  return (
    <div className="min-h-screen bg-black text-white pt-64 pb-20 px-6 lg:px-20 flex flex-col items-center">
      <div className="w-full max-w-[1600px] mx-auto flex flex-col gap-12 items-center">
        <div className="w-full flex flex-col gap-2 mb-10">
          <Link to="/sluzby" className="text-xs text-[#F43182] uppercase tracking-widest font-bold hover:underline mb-2">← Späť na služby</Link>
          <h1 className="font-giaza text-5xl md:text-7xl font-black text-white leading-tight uppercase drop-shadow-lg mb-4 text-left">{detail.title}</h1>
          <p className="text-lg md:text-2xl text-gray-300 leading-relaxed font-medium border-l-4 border-[#F43182] pl-4 max-w-3xl text-left">{detail.description}</p>
        </div>
        <h2 className="text-[#F43182] font-black text-xs tracking-[0.4em] uppercase mb-6 w-full text-left">Zameranie</h2>
        <div className="flex flex-col gap-10 w-full max-w-3xl">
          {detail.focus.map((f, i) => (
            <div key={i} className="relative flex flex-col gap-2 w-full">
              <div className="flex items-center gap-4">
                <div className="h-0.5 w-10 bg-[#F43182] rounded-full mr-2" />
                <h3 className="text-xl md:text-2xl font-bold text-[#F43182] uppercase tracking-wide mb-0">{f.name}</h3>
              </div>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed pl-14">{f.desc}</p>
            </div>
          ))}
        </div>
        {/* Sekcia: Ako postupujeme */}
        {detail.process && (
          <div className="w-full max-w-3xl mt-16">
            <h2 className="text-[#F43182] font-black text-xs tracking-[0.4em] uppercase mb-6 w-full text-left">Ako postupujeme</h2>
            <ol className="list-decimal pl-8 text-gray-200 text-base md:text-lg flex flex-col gap-2">
              {detail.process.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceDetail;
