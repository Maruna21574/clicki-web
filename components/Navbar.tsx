

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ${isScrolled ? 'bg-black/90 backdrop-blur-xl py-4' : 'bg-transparent py-10'}`}>
      <div className="max-w-[1440px] mx-auto px-10 flex justify-between items-center">
        <Link to="/" className="flex items-center group overflow-hidden">
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
        </Link>

        <div className="hidden lg:flex items-center gap-12 font-bold uppercase tracking-[0.3em] text-[10px]">
          <Link
            to="/sluzby"
            className={`transition-all duration-300 relative group ${location.pathname === '/sluzby' ? 'text-[#F43182]' : 'text-white hover:text-[#F43182]'}`}
          >
            Služby
            <span className={`absolute -bottom-1 left-0 h-[1px] bg-[#F43182] transition-all duration-500 ${location.pathname === '/sluzby' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </Link>
          <Link
            to="/portfolio"
            className={`transition-all duration-300 relative group ${location.pathname === '/portfolio' ? 'text-[#F43182]' : 'text-white hover:text-[#F43182]'}`}
          >
            Portfólio
            <span className={`absolute -bottom-1 left-0 h-[1px] bg-[#F43182] transition-all duration-500 ${location.pathname === '/portfolio' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </Link>
          <Link
            to="/cenik"
            className={`transition-all duration-300 relative group ${location.pathname === '/cenik' ? 'text-[#F43182]' : 'text-white hover:text-[#F43182]'}`}
          >
            Cenník
            <span className={`absolute -bottom-1 left-0 h-[1px] bg-[#F43182] transition-all duration-500 ${location.pathname === '/cenik' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </Link>
          <Link
            to="/changelog"
            className={`transition-all duration-300 relative group ${location.pathname === '/changelog' ? 'text-[#F43182]' : 'text-white hover:text-[#F43182]'}`}
          >
            Changelog
            <span className={`absolute -bottom-1 left-0 h-[1px] bg-[#F43182] transition-all duration-500 ${location.pathname === '/changelog' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </Link>
          <Link
            to="/kontakt"
            className="px-8 py-3 bg-[#F43182] text-white rounded-full hover:bg-white hover:text-black transition-all duration-500 transform hover:scale-105"
          >
            KONTAKT
          </Link>
        </div>
      </div>
    </nav>
  );
};
