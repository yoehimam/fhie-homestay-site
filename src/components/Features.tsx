'use client';

import React from 'react';
import { Bed, Wind, Thermometer, Tv, Wifi, Coffee } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Features = () => {
  const { t } = useLanguage();
  
  const features = [
    { icon: <Bed size={36} className="text-yellow-400" />, name: t.springBed },
    { icon: <Wind size={36} className="text-yellow-400" />, name: t.ac },
    { icon: <Thermometer size={36} className="text-yellow-400" />, name: t.heaterWater },
    { icon: <Tv size={36} className="text-yellow-400" />, name: t.tv },
    { icon: <Wifi size={36} className="text-yellow-400" />, name: t.freeWifi },
    { icon: <Coffee size={36} className="text-yellow-400" />, name: t.breakfast },
  ];
  
  return (
    <section id="features" className="bg-gradient-to-br from-forest-green via-brand-dark to-ocean-blue py-20 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-10">{t.featuresTitle}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center p-4 bg-ocean-blue bg-opacity-60 rounded-lg shadow-lg hover:bg-ocean-teal hover:bg-opacity-70 transition-colors duration-300 border border-ocean-teal border-opacity-30">
              <div className="mb-3">{feature.icon}</div>
              <h4 className="text-sm font-semibold text-white">{feature.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
