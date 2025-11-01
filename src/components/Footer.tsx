'use client';

import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-gradient-to-br from-ocean-blue via-brand-dark to-forest-green text-gray-200 py-12 px-6 relative overflow-hidden">
      {/* Decorative overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto grid md:grid-cols-3 gap-8 relative z-10">
        <div className="bg-ocean-blue bg-opacity-40 backdrop-blur-sm p-6 rounded-lg border border-ocean-teal border-opacity-30 hover:border-opacity-60 transition-all">
          <h3 className="text-xl font-bold text-yellow-400 mb-3">FHie Homestay</h3>
          <p className="text-sm text-gray-200 leading-relaxed">{t.footerDesc}</p>
        </div>
        <div className="bg-ocean-teal bg-opacity-30 backdrop-blur-sm p-6 rounded-lg border border-ocean-light border-opacity-30 hover:border-opacity-60 transition-all">
          <h3 className="text-lg font-bold text-yellow-400 mb-3">{t.contactUs}</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center text-gray-100"><Phone size={16} className="mr-2 text-yellow-400" /> 0822-9271-3214 (WA Utama)</li>
            <li className="flex items-center text-gray-100"><Phone size={16} className="mr-2 text-yellow-400" /> 0852-1314-1245</li>
            <li className="flex items-center text-gray-100"><Phone size={16} className="mr-2 text-yellow-400" /> 0812-4132-6800</li>
            <li className="flex items-center text-gray-100"><Mail size={16} className="mr-2 text-yellow-400" /> fhie.homestay@example.com</li>
          </ul>
        </div>
        <div className="bg-forest-green bg-opacity-30 backdrop-blur-sm p-6 rounded-lg border border-green-500 border-opacity-30 hover:border-opacity-60 transition-all">
          <h3 className="text-lg font-bold text-yellow-400 mb-3">{t.location}</h3>
          <p className="flex items-start text-sm text-gray-100 mb-3"><MapPin size={16} className="mr-2 mt-1 text-yellow-400 flex-shrink-0" /> Popodu, Bolaang Uki, South Bolaang Mongondow Regency, North Sulawesi</p>
          <div className="mt-3 h-32 bg-black bg-opacity-50 rounded-lg overflow-hidden border border-ocean-teal border-opacity-40">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.45758532561!2d123.8885!3d0.5773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x327eb95439761727%3A0x8f7b7c6b5e5d3b7c!2s9XGQ%2BWM%20Popodu%2C%20South%20Bolaang%20Mongondow%20Regency%2C%20North%20Sulawesi!5e0!3m2!1sen!2sid!4v1678886755321!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="mt-12 pt-6 text-center text-sm relative z-10">
        <div className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent mb-6 opacity-50"></div>
        <p className="text-gray-200">&copy; {year} {t.copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;
