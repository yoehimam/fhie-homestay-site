'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

const basePath = '/fhie-homestay-site';
const units = [
  {
    name: 'Kamar Deluxe',
    slug: 'kamar-deluxe',
    description: 'Kamar luas dengan spring bed empuk dan AC untuk kenyamanan maksimal.',
    image: `${basePath}/images/kamar-deluxe.jpg`,
    price: 'Mulai dari Rp 500.000/malam',
  },
  {
    name: 'Suite Keluarga',
    slug: 'suite-keluarga',
    description: 'Ruang lebih besar dengan pemandangan taman, cocok untuk keluarga.',
    image: `${basePath}/images/kamar-twin.jpg`,
    price: 'Mulai dari Rp 750.000/malam',
  },
];

const FeaturedUnits = () => {
  const { t } = useLanguage();
  
  return (
    <section id="rooms" className="bg-gradient-to-bl from-ocean-blue via-brand-dark to-ocean-teal py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-10">{t.roomsTitle}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {units.map((unit, index) => (
            <div key={index} className="bg-gradient-to-br from-ocean-blue to-brand-dark border border-ocean-teal rounded-lg shadow-2xl overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
              <div className="relative w-full h-64">
                <Image src={unit.image} alt={unit.name} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
              </div>
              <div className="p-4 text-white">
                <h3 className="text-xl font-bold text-yellow-400 mb-2">{unit.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{unit.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold">{unit.price}</span>
                  <Link href={`/kamar/${unit.slug}`} className="bg-ocean-teal hover:bg-teal-600 text-white font-semibold text-sm py-1.5 px-3 rounded-lg transition duration-300 shadow-lg">
                    {t.viewDetails}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedUnits;
