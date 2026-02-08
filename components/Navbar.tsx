

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

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

        {/* Desktop nav */}
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

        {/* Hamburger for mobile */}
        <button
          className="lg:hidden flex flex-col justify-center items-center w-12 h-12 z-[110] relative group"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Otvoriť menu"
        >
          <span className={`block h-0.5 w-8 bg-white rounded transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block h-0.5 w-8 bg-white rounded transition-all duration-300 my-1 ${mobileOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block h-0.5 w-8 bg-white rounded transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Mobile nav overlay */}
        <div
          className={`fixed inset-0 bg-black/95 z-[105] flex flex-col items-center justify-center gap-4 transition-all duration-500 lg:hidden ${mobileOpen ? 'translate-x-0 opacity-100 pointer-events-auto' : 'translate-x-full opacity-0 pointer-events-none'}`}
        >
          <Link
            to="/sluzby"
            className={`text-sm font-black uppercase tracking-widest transition-all ${location.pathname === '/sluzby' ? 'text-[#F43182]' : 'text-white hover:text-[#F43182]'}`}
            onClick={() => setMobileOpen(false)}
          >
            Služby
          </Link>
          <Link
            to="/portfolio"
            className={`text-sm font-black uppercase tracking-widest transition-all ${location.pathname === '/portfolio' ? 'text-[#F43182]' : 'text-white hover:text-[#F43182]'}`}
            onClick={() => setMobileOpen(false)}
          >
            Portfólio
          </Link>
          <Link
            to="/cenik"
            className={`text-sm font-black uppercase tracking-widest transition-all ${location.pathname === '/cenik' ? 'text-[#F43182]' : 'text-white hover:text-[#F43182]'}`}
            onClick={() => setMobileOpen(false)}
          >
            Cenník
          </Link>
          <Link
            to="/changelog"
            className={`text-sm font-black uppercase tracking-widest transition-all ${location.pathname === '/changelog' ? 'text-[#F43182]' : 'text-white hover:text-[#F43182]'}`}
            onClick={() => setMobileOpen(false)}
          >
            Changelog
          </Link>
          <Link
            to="/kontakt"
            className="px-4 py-2 bg-[#F43182] text-white rounded-full text-sm font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500 transform hover:scale-105"
            onClick={() => setMobileOpen(false)}
          >
            KONTAKT
          </Link>
        </div>
      </div>
    </nav>
  );
};
