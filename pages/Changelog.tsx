import React from 'react';
import { Link } from 'react-router-dom';

export const Changelog: React.FC = () => {
  // Aktualizácia ku dňu: 8. február 2026
  const updatedAt = '8. február 2026';
  const done = [
    'Moderný dizajn a responzivita',
    'Kompletný obsah sekcií: služby, portfólio, cenník, kontakt',
    'Animácie a interaktívne prvky',
    'AI konzultant (demo)',
    'Prepojenie na vlastnú doménu a favicon',
    'Optimalizácia pre rýchlosť a SEO',
  ];
  const todo = [
    'Blog a novinky',
    'Viac prípadových štúdií v portfóliu',
    'Rozšírenie AI konzultanta o ďalšie funkcie',
    'Viac jazykových mutácií',
    'Klientska zóna pre správu objednávok',
    'Pravidelné aktualizácie changelogu',
  ];
  const progress = Math.round((done.length / (done.length + todo.length)) * 100);
  return (
    <div className="pt-80 md:pt-100 px-4 min-h-screen bg-gradient-to-br from-black via-[#181824] to-[#23233a] text-white flex flex-col items-center">
      <div className="w-full max-w-2xl bg-[#11111a] rounded-3xl shadow-2xl p-10 mt-8 border border-[#23233a]/60 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#F43182]/60 to-[#fbb6ce]/20 animate-pulse" />
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 mt-2">
          <h1 className="font-giaza text-5xl tracking-tight text-[#F43182] mb-6 uppercase leading-[0.85] font-black">CHANGELOG.</h1>
          <span className="text-xs text-gray-400 font-mono bg-[#23233a] rounded px-3 py-1 border border-[#F43182]/30">Aktualizácia ku dňu: {updatedAt}</span>
        </div>
        <p className="mb-8 text-lg text-gray-300 text-center font-light">Tento produkt je aktívne vyvíjaný. Sledujte, čo je nové a čo pripravujeme!</p>
        <div className="mb-10">
          <div className="flex justify-between items-end mb-2">
            <span className="text-sm text-gray-500 font-medium">Hotovo: {done.length}</span>
            <span className="text-sm text-gray-500 font-medium">Plánujeme: {todo.length}</span>
          </div>
          <div className="relative w-full h-3 bg-[#23233a] rounded-full overflow-hidden">
            <div className="absolute left-0 top-0 h-3 bg-gradient-to-r from-[#F43182] to-[#fbb6ce] rounded-full transition-all" style={{ width: `${progress}%` }}></div>
          </div>
          <div className="text-right text-xs text-gray-500 mt-1 font-light">{progress}% dokončené</div>
        </div>
        <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="font-giaza text-xl text-gray-400 mb-3 border-b border-gray-800 pb-1">Hotové</h2>
            <ul className="space-y-3">
              {done.map((item, i) => (
                <li key={i} className="text-gray-500 bg-gray-900/60 rounded-lg px-4 py-2 text-base font-light line-through">{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-giaza text-xl text-white mb-3 border-b border-[#F43182]/40 pb-1">Plánujeme</h2>
            <ul className="space-y-3">
              {todo.map((item, i) => (
                <li key={i} className="text-white bg-[#F43182]/10 rounded-lg px-4 py-2 text-base font-light">{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center mt-8">
          <span className="text-xs text-gray-400 mb-2 font-mono">Produkt je vo vývoji a pravidelne pribúdajú nové funkcie.</span>
          <Link to="/" className="px-8 py-3 bg-[#F43182] text-white rounded-full hover:bg-white hover:text-black transition-all font-black w-full shadow-lg text-center">Späť na úvod</Link>
        </div>
      </div>
    </div>
  );
};
