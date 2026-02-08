

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { ServicesDetail } from './pages/ServicesDetail';
import { PortfolioDetail } from './pages/PortfolioDetail';
import { Pricing } from './pages/Pricing';
import { Footer } from './components/Footer';
import { Contact } from './components/Contact';
import { Changelog } from './pages/Changelog';



function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-black overflow-hidden flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sluzby" element={<ServicesDetail />} />
            <Route path="/portfolio" element={<PortfolioDetail />} />
         
            <Route path="/cenik" element={<Pricing />} />
            <Route path="/kontakt" element={<div className="pt-20"><Contact /></div>} />
            <Route path="/changelog" element={<Changelog />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
        {/* Global Aesthetic Overlay */}
        <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"/>
      </div>
    </Router>
  );
};

export default App;
