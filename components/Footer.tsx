
import React from 'react';
import { Page } from '../App';

export const Footer: React.FC<{ onNavigate: (page: Page) => void }> = ({ onNavigate }) => {
  return (
    <footer className="py-20 px-10 bg-black border-t border-white/5">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row justify-between items-start gap-20">
        <div>
          <button onClick={() => onNavigate('home')} className="font-giaza text-6xl font-black text-[#F43182] mb-6">CLICKI</button>
          <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px] max-w-xs">
            Vytvárame digitálnu budúcnosť pre značky, ktoré sa neboja vyniknúť.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-20">
          <div className="space-y-4">
            <span className="text-white font-black text-[10px] tracking-widest uppercase block mb-6">STRÁNKY</span>
            {['services', 'portfolio', 'pricing'].map(p => (
                <button key={p} onClick={() => onNavigate(p as Page)} className="block text-gray-500 hover:text-[#F43182] transition-colors text-xs font-bold uppercase tracking-widest">
                    {p === 'services' ? 'Služby' : p === 'portfolio' ? 'Portfólio' : 'Cenník'}
                </button>
            ))}
          </div>
          <div className="space-y-4">
            <span className="text-white font-black text-[10px] tracking-widest uppercase block mb-6">SOCIÁLNE SIETE</span>
            <a href="#" className="block text-gray-500 hover:text-[#F43182] transition-colors text-xs font-bold uppercase tracking-widest">Instagram</a>
            <a href="#" className="block text-gray-500 hover:text-[#F43182] transition-colors text-xs font-bold uppercase tracking-widest">Behance</a>
            <a href="#" className="block text-gray-500 hover:text-[#F43182] transition-colors text-xs font-bold uppercase tracking-widest">LinkedIn</a>
          </div>
          <div className="space-y-4">
            <span className="text-white font-black text-[10px] tracking-widest uppercase block mb-6">ADRESA</span>
            <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Bratislava, Slovensko</p>
            <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">hello@clicki.sk</p>
          </div>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <span className="text-gray-700 text-[10px] font-black tracking-widest uppercase">© 2024 CLICKI AGENCY. ALL RIGHTS RESERVED.</span>
        <span className="text-gray-700 text-[10px] font-black tracking-widest uppercase">MADE WITH LOVE FOR DESIGN</span>
      </div>
    </footer>
  );
};
