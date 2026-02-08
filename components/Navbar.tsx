
import React, { useState, useEffect } from 'react';
import { Page } from '../App';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const LiIcon = () => (
    <svg width="24" height="24" viewBox="0 0 100 100" className="inline-block mr-2 fill-[#F43182]">
      <path d="M40 20 L40 80 L70 80 Q75 80 75 75 L75 70" strokeWidth="4" fill="none" stroke="#F43182" />
      <circle cx="75" cy="25" r="8" />
      <path d="M75 40 L75 80" strokeWidth="4" stroke="#F43182" />
    </svg>
  );

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ${isScrolled ? 'bg-black/90 backdrop-blur-xl py-4' : 'bg-transparent py-10'}`}>
      <div className="max-w-[1440px] mx-auto px-10 flex justify-between items-center">
        <button onClick={() => onNavigate('home')} className="flex items-center group overflow-hidden">
          <span className="relative h-20 w-40 block">
            <img
              src="/img/clicki_logo_pink.png"
              alt="CLICKI Pink Logo"
              className="h-10 w-auto transition-transform duration-500 group-hover:-translate-y-full absolute left-0 top-0"
              style={{zIndex: 1}}
            />
            <img
              src="/img/clicki_logo_white.png"
              alt="CLICKI White Logo"
              className="h-10 w-auto transition-transform duration-500 translate-y-full group-hover:translate-y-0 absolute left-0 top-0"
              style={{zIndex: 2}}
            />
          </span>
          <span className="ml-2 w-2 h-2 rounded-full bg-white group-hover:bg-[#F43182] animate-pulse"></span>
        </button>

        <div className="hidden lg:flex items-center gap-12 font-bold uppercase tracking-[0.3em] text-[10px]">
          {['services', 'portfolio', 'pricing', 'changelog'].map((page) => (
            <button
              key={page}
              onClick={() => onNavigate(page as Page)}
              className={`transition-all duration-300 relative group ${currentPage === page ? 'text-[#F43182]' : 'text-white hover:text-[#F43182]'}`}
            >
              {page === 'services' ? 'Služby' : page === 'portfolio' ? 'Portfólio' : page === 'pricing' ? 'Cenník' : 'Changelog'}
              <span className={`absolute -bottom-1 left-0 h-[1px] bg-[#F43182] transition-all duration-500 ${currentPage === page ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </button>
          ))}
          <button 
            onClick={() => onNavigate('home')} 
            className="px-8 py-3 bg-[#F43182] text-white rounded-full hover:bg-white hover:text-black transition-all duration-500 transform hover:scale-105"
          >
            KONTAKT
          </button>
        </div>
      </div>
    </nav>
  );
};
