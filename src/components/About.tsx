'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="bg-gradient-to-r from-brand-dark via-ocean-blue to-brand-dark py-20 px-6">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="relative w-full h-80 md:h-full rounded-lg overflow-hidden shadow-2xl">
          <Image 
            src="/fhie-homestay-site/images/interior.jpg"
            alt="Interior FHie Homestay"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="text-brand-light">
          <h2 className="text-3xl font-bold text-white mb-4">{t.aboutTitle}</h2>
          <p className="text-base mb-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: t.aboutText1.replace(/Bolaang Mongondow Selatan/g, '<strong class="text-yellow-400">Bolaang Mongondow Selatan</strong>') }} />
          <p className="text-base mb-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: t.aboutText2.replace(/kekayaan alam bawah laut|underwater natural wealth/g, '<strong class="text-yellow-400">$&</strong>').replace(/keanekaragaman hayati burung endemik Sulawesi|endemic Sulawesi bird biodiversity/g, '<strong class="text-yellow-400">$&</strong>') }} />
          <p className="text-base font-semibold text-yellow-400">
            {t.aboutCredentials}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
