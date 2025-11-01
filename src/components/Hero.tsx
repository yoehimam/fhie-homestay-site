'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  const handleCheckAvailability = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format tanggal untuk tampilan yang lebih baik
    const formatDate = (dateString: string) => {
      const date = new Date(dateString);
      return date.toLocaleDateString('id-ID', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
    };
    
    // Buat pesan WhatsApp
    const message = `Halo, saya ingin mengecek ketersediaan kamar di FHie Homestay dengan detail berikut:

📅 *Check-in:* ${formatDate(checkIn)}
📅 *Check-out:* ${formatDate(checkOut)}
👥 *Jumlah Tamu:* ${adults} Dewasa${children > 0 ? `, ${children} Anak-anak` : ''}

Apakah masih tersedia? Terima kasih.`;
    
    // Nomor WhatsApp pemilik
    const mainWhatsApp = '6282292713214';
    const waLink = `https://wa.me/${mainWhatsApp}?text=${encodeURIComponent(message)}`;
    
    // Redirect ke WhatsApp
    window.open(waLink, '_blank');
  };

  return (
    <section
      className="relative h-screen bg-cover bg-center text-white flex flex-col justify-center items-center px-6"
      style={{ backgroundImage: "url('/images/pemandangan.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4 animate-fade-in-down">
          {t.heroTitle}
        </h1>
        <p className="text-base md:text-lg font-light mb-6 animate-fade-in-up">
          {t.heroSubtitle}
        </p>
        
        <form 
          onSubmit={handleCheckAvailability}
          className="bg-white bg-opacity-20 backdrop-blur-md p-4 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-5 gap-4 items-end animate-fade-in-up"
        >
          <div className="flex flex-col text-left">
            <label htmlFor="checkin" className="text-xs font-semibold mb-1">{t.checkIn}</label>
            <input type="date" id="checkin" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} className="p-2 text-sm rounded-md text-gray-800" required />
          </div>
          <div className="flex flex-col text-left">
            <label htmlFor="checkout" className="text-xs font-semibold mb-1">{t.checkOut}</label>
            <input type="date" id="checkout" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} className="p-2 text-sm rounded-md text-gray-800" required />
          </div>
          <div className="flex flex-col text-left">
            <label htmlFor="adults" className="text-xs font-semibold mb-1">{t.adults}</label>
            <input type="number" id="adults" min="1" value={adults} onChange={(e) => setAdults(parseInt(e.target.value))} className="p-2 text-sm rounded-md text-gray-800" />
          </div>
          <div className="flex flex-col text-left">
            <label htmlFor="children" className="text-xs font-semibold mb-1">{t.children}</label>
            <input type="number" id="children" min="0" value={children} onChange={(e) => setChildren(parseInt(e.target.value))} className="p-2 text-sm rounded-md text-gray-800" />
          </div>
          <button type="submit" className="bg-ocean-teal hover:bg-teal-600 text-white font-semibold p-2 rounded-md w-full h-full text-sm shadow-lg">{t.checkAvailability}</button>
        </form>
      </div>
    </section>
  );
};

export default Hero;
