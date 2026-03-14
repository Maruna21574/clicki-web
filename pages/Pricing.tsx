
import React from 'react';
import { LiIcon } from '../components/LiIcon';

export const Pricing: React.FC = () => {
  return (
    <div className="bg-black min-h-screen pt-80 pb-40 px-6 lg:px-20 overflow-hidden text-[#F43182]">
      <div className="max-w-[1600px] mx-auto">
        {/* Header Section */}
        <div className="mb-32 reveal text-left">
          <h1 className="text-[12vw] leading-[0.85] text-white font-black uppercase mb-6 font-sans">CENNÍK.</h1>
          <h2 className="text-[#F43182] font-black tracking-[0.3em] text-3xl uppercase mb-8 font-sans">Koľko stojí klik?</h2>
          <p className="text-gray-400 text-xl md:text-2xl font-medium leading-relaxed uppercase tracking-wide max-w-2xl">
            Každý projekt je trochu iný, ale orientačne:
          </p>
        </div>

        {/* Pricing Content - sekcie pod seba */}
        <div className="flex flex-col gap-12">
          {/* Webstránky */}
          <div className="rounded-3xl border border-[#F43182]/30 bg-[#18181b] p-10 flex flex-col gap-8 shadow-lg">
            <div className="flex items-center gap-4 mb-2">
              <LiIcon size={32} />
              <h3 className="text-white text-4xl font-sans">Webstránky</h3>
            </div>
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-gray-500 font-black text-xs tracking-widest uppercase mb-1">Štartovacie riešenie</p>
                <div className="flex justify-between items-end gap-4 border-b border-white/10 pb-3">
                  <span className="text-white text-lg font-bold uppercase tracking-tighter">Jednoduchý web</span>
                  <span className="text-2xl font-sans">od 490 €</span>
                </div>
              </div>
              <div>
                <p className="text-gray-500 font-black text-xs tracking-widest uppercase mb-1">Pre firmy</p>
                <div className="flex justify-between items-end gap-4 border-b border-white/10 pb-3">
                  <span className="text-white text-lg font-bold uppercase tracking-tighter">Firemný web</span>
                  <span className="text-2xl font-sans">od 890 €</span>
                </div>
              </div>
              <div>
                <p className="text-gray-500 font-black text-xs tracking-widest uppercase mb-1">Custom build</p>
                <div className="flex justify-between items-end gap-4 border-b border-white/10 pb-3">
                  <span className="text-white text-lg font-bold uppercase tracking-tighter">Individuálne riešenia</span>
                  <span className="text-2xl font-sans">na mieru</span>
                </div>
              </div>
            </div>
          </div>
          {/* Sociálne siete */}
          <div className="rounded-3xl border border-[#F43182]/30 bg-[#18181b] p-10 flex flex-col gap-8 shadow-lg">
            <div className="flex items-center gap-4 mb-2">
              <LiIcon size={32} />
              <h3 className="text-white text-4xl font-sans">Sociálne siete</h3>
            </div>
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-gray-500 font-black text-xs tracking-widest uppercase mb-1">Mesačný paušál</p>
                <div className="flex justify-between items-end gap-4 border-b border-white/10 pb-3">
                  <span className="text-white text-lg font-bold uppercase tracking-tighter">Správa profilu</span>
                  <span className="text-2xl font-sans text-right leading-none">od 190 €<br/><small className="text-[10px] not-italic opacity-50 uppercase font-black">/ mesiac</small></span>
                </div>
              </div>
              <div>
                <p className="text-gray-500 font-black text-xs tracking-widest uppercase mb-1">Video obsah</p>
                <div className="flex justify-between items-end gap-4 border-b border-white/10 pb-3">
                  <span className="text-white text-lg font-bold uppercase tracking-tighter">Reels balíčky</span>
                  <span className="text-2xl font-sans">od 390 €</span>
                </div>
              </div>
            </div>
          </div>
          {/* Produkcia */}
          <div className="rounded-3xl border border-[#F43182]/30 bg-[#18181b] p-10 flex flex-col gap-8 shadow-lg">
            <div className="flex items-center gap-4 mb-2">
              <LiIcon size={32} />
              <h3 className="text-white text-4xl font-sans">Produkcia</h3>
            </div>
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-gray-500 font-black text-xs tracking-widest uppercase mb-1">Vizuálna identita</p>
                <div className="flex justify-between items-end gap-4 border-b border-white/10 pb-3">
                  <span className="text-white text-lg font-bold uppercase tracking-tighter">Fotografia & grafika</span>
                  <span className="text-sm font-black uppercase text-right leading-tight">podľa rozsahu a typu projektu</span>
                </div>
              </div>
              <div className="pt-6">
                <div className="p-8 rounded-3xl bg-[#0a0a0a] border border-[#F43182]/20 text-center">
                  <p className="text-white font-bold text-sm uppercase tracking-widest leading-relaxed">
                    Neplatíš za zbytočnosti.<br/>
                    <span className="text-[#F43182]">Platíš za výsledok.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-40 border-t border-white/10 pt-20 flex flex-col items-center text-center space-y-12">
            <div className="flex items-center gap-4 text-3xl md:text-5xl font-giaza text-white italic">
                <span className="text-4xl md:text-6xl"></span>
                Chceš presnú cenu? Napíš nám.
            </div>
            <button className="px-20 py-8 bg-[#F43182] text-white rounded-full font-black uppercase tracking-[0.2em] text-sm hover:bg-white hover:text-black transition-all duration-700 transform hover:scale-110">
                CHCEM CENOVÚ PONUKU
            </button>
        </div>
      </div>
    </div>
  );
};
