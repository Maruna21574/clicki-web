
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { ServicesDetail } from './pages/ServicesDetail';
import { PortfolioDetail } from './pages/PortfolioDetail';
import { Pricing } from './pages/Pricing';
import { Footer } from './components/Footer';
import { Contact } from './components/Contact';
import { Changelog } from './pages/Changelog';

export type Page = 'home' | 'services' | 'portfolio' | 'pricing' | 'contact' | 'changelog';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch(currentPage) {
      case 'home': return <Home onNavigate={setCurrentPage} />;
      case 'services': return <ServicesDetail />;
      case 'portfolio': return <PortfolioDetail />;
      case 'pricing': return <Pricing />;
      case 'contact': return <div className="pt-20"><Contact /></div>;
      case 'changelog': return <Changelog onNavigate={setCurrentPage} />;
      default: return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-black overflow-hidden flex flex-col">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
      


      {/* Global Aesthetic Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"></div>
    </div>
  );
};

export default App;
