'use client';

import React, { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const mainWhatsApp = '6282292713214';
  const waLink = `https://wa.me/${mainWhatsApp}`;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black bg-opacity-80 shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-white">FHie Homestay</h1>
        <nav className="hidden md:flex items-center space-x-4 text-sm">
          <a href="#about" className="text-white hover:text-yellow-400 transition">{t.about}</a>
          <a href="#features" className="text-white hover:text-yellow-400 transition">{t.features}</a>
          <a href="#rooms" className="text-white hover:text-yellow-400 transition">{t.rooms}</a>
          <a href="#gallery" className="text-white hover:text-yellow-400 transition">{t.gallery}</a>
          <a href="#tours" className="text-white hover:text-yellow-400 transition">{t.tours}</a>
          <a href="#contact" className="text-white hover:text-yellow-400 transition">{t.contact}</a>
          
          {/* Language Selector */}
          <div className="flex items-center gap-1 bg-ocean-blue bg-opacity-50 rounded-lg px-2 py-1 border border-ocean-teal border-opacity-30">
            <Globe size={16} className="text-ocean-teal" />
            <button
              onClick={() => setLanguage('id')}
              className={`px-2 py-1 text-xs font-semibold rounded transition-all ${
                language === 'id' 
                ? 'bg-ocean-teal text-white' 
                : 'text-gray-300 hover:text-white'
              }`}
            >
              ID
            </button>
            <span className="text-gray-500">|</span>
            <button
              onClick={() => setLanguage('en')}
              className={`px-2 py-1 text-xs font-semibold rounded transition-all ${
                language === 'en' 
                ? 'bg-ocean-teal text-white' 
                : 'text-gray-300 hover:text-white'
              }`}
            >
              EN
            </button>
          </div>
          
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-ocean-teal hover:bg-teal-600 text-white font-semibold text-sm py-1.5 px-3 rounded-lg transition duration-300 shadow-lg"
          >
            {t.bookNow}
          </a>
        </nav>
        {/* Mobile Menu Button can be added here */}
      </div>
    </header>
  );
};

export default Header;
