import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
  const mainWhatsApp = '6282292713214';
  const waLink = `https://wa.me/${mainWhatsApp}?text=Halo,%20saya%20ingin%20bertanya%20tentang%20FHie%20Homestay.`;

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-ocean-teal hover:bg-teal-600 text-white p-3 rounded-full shadow-lg flex items-center justify-center z-50 transition duration-300 transform hover:scale-110"
      aria-label="Hubungi via WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
};

export default FloatingWhatsApp;
