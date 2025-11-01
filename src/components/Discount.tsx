'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Discount = () => {
  const { t } = useLanguage();
  const mainWhatsApp = '6282292713214';
  const waLink = `https://wa.me/${mainWhatsApp}?text=Saya%20tertarik%20dengan%20diskon%20menginap%20lebih%20lama.`;

  return (
    <section className="bg-gradient-to-r from-forest-green via-ocean-blue to-forest-green text-white py-20 px-6">
      <div className="container mx-auto text-center max-w-3xl">
        <h2 className="text-3xl font-bold text-yellow-400 mb-4">{t.discountTitle}</h2>
        <p className="text-base text-gray-300 mb-6">{t.discountDesc}</p>
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-ocean-light hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg text-sm transition duration-300 transform hover:scale-105 shadow-lg"
        >
          {t.claimDiscount}
        </a>
      </div>
    </section>
  );
};

export default Discount;
