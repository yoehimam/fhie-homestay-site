'use client';

import React from 'react';
import Image from 'next/image';
import { Bed, Wind, Thermometer, Tv, Wifi, Coffee, ChevronLeft } from 'lucide-react';
import Link from 'next/link';

// Data kamar sementara - idealnya ini datang dari CMS atau database
export const roomData = {
  'kamar-deluxe': {
    name: 'Kamar Deluxe',
    description: 'Nikmati kenyamanan superior di Kamar Deluxe kami. Dirancang untuk para tamu yang menghargai kemewahan dan ruang, kamar ini menawarkan tempat tidur ukuran king yang mewah, area duduk yang nyaman, dan pemandangan taman yang menenangkan. Semua fasilitas modern tersedia untuk memastikan pengalaman menginap Anda tak terlupakan.',
    price: 'Rp 500.000',
    images: [
      '/images/kamar-deluxe.jpg',
      '/images/interior.jpg',
      '/images/kamar-mandi.jpg',
    ],
    facilities: [
      { icon: <Bed size={24} />, name: 'Spring Bed King Size' },
      { icon: <Wind size={24} />, name: 'AC' },
      { icon: <Thermometer size={24} />, name: 'Heater Water' },
      { icon: <Tv size={24} />, name: 'TV 42-inch' },
      { icon: <Wifi size={24} />, name: 'Free High-Speed WiFi' },
      { icon: <Coffee size={24} />, name: 'Breakfast Gratis' },
    ],
  },
  'suite-keluarga': {
    name: 'Suite Keluarga',
    description: 'Suite Keluarga kami adalah pilihan sempurna untuk liburan bersama orang terkasih. Dengan dua tempat tidur queen yang nyaman, ruang tamu terpisah, dan balkon pribadi dengan pemandangan alam, suite ini menawarkan privasi dan kenyamanan. Fasilitas lengkap memastikan semua kebutuhan keluarga Anda terpenuhi.',
    price: 'Rp 750.000',
    images: [
      '/images/kamar-twin.jpg',
      '/images/interior.jpg',
      '/images/kamar-mandi.jpg',
    ],
    facilities: [
      { icon: <Bed size={24} />, name: '2 Spring Bed Queen Size' },
      { icon: <Wind size={24} />, name: 'AC' },
      { icon: <Thermometer size={24} />, name: 'Heater Water' },
      { icon: <Tv size={24} />, name: 'TV 50-inch' },
      { icon: <Wifi size={24} />, name: 'Free High-Speed WiFi' },
      { icon: <Coffee size={24} />, name: 'Breakfast Gratis untuk 4 Orang' },
    ],
  },
};

const mainWhatsApp = '6282292713214';

export default function RoomDetailClient({ slug }: { slug: string }) {
  const room = roomData[slug as keyof typeof roomData];

  if (!room) {
    return <div className="h-screen flex items-center justify-center text-white">Kamar tidak ditemukan.</div>;
  }
  
  const waLink = `https://wa.me/${mainWhatsApp}?text=Halo,%20saya%20tertarik%20untuk%20memesan%20${room.name}.`;

  return (
    <div className="bg-brand-dark min-h-screen text-white">
      <header className="bg-black bg-opacity-50 sticky top-0 z-10 p-4">
        <div className="container mx-auto">
          <Link href="/" className="flex items-center text-yellow-400 hover:text-yellow-500 transition-colors">
            <ChevronLeft size={24} className="mr-2" />
            Kembali ke Beranda
          </Link>
        </div>
      </header>

      <main className="container mx-auto p-6">
        {/* Galeri Gambar */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="relative w-full h-96 rounded-lg overflow-hidden col-span-1 md:col-span-2">
            <Image src={room.images[0]} alt={room.name} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px" className="object-cover" priority />
          </div>
          {room.images.slice(1).map((img, index) => (
            <div key={index} className="relative w-full h-48 rounded-lg overflow-hidden">
              <Image src={img} alt={`${room.name} ${index + 1}`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
            </div>
          ))}
        </div>

        {/* Detail Kamar */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h1 className="text-3xl font-bold text-yellow-400 mb-4">{room.name}</h1>
            <p className="text-sm text-gray-300 leading-relaxed">{room.description}</p>
            
            <div className="h-px bg-gradient-to-r from-transparent via-ocean-teal to-transparent my-6 opacity-50"></div>
            
            <h2 className="text-xl font-bold text-white mb-4">Fasilitas Kamar</h2>
            <ul className="grid grid-cols-2 gap-4">
              {room.facilities.map((facility, index) => (
                <li key={index} className="flex items-center text-gray-300 text-sm">
                  <span className="text-yellow-400 mr-3">{facility.icon}</span>
                  {facility.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Kartu Pemesanan */}
          <div className="md:col-span-1">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg sticky top-24">
              <p className="text-xl font-bold text-white">Harga per malam</p>
              <p className="text-2xl font-bold text-yellow-400 mb-6">{room.price}</p>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center bg-ocean-teal hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded-lg text-sm transition duration-300 block shadow-lg"
              >
                Pesan Sekarang via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

