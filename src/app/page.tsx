'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Features from '@/components/Features';
import FeaturedUnits from '@/components/FeaturedUnits';
import Discount from '@/components/Discount';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Image from 'next/image';
import { Waves, Bird, Fish } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

// Gallery Images - Gunakan basePath untuk GitHub Pages
const basePath = '/fhie-homestay-site';
const galleryImages = [
  { src: `${basePath}/images/pemandangan.jpg`, alt: 'Pemandangan FHie Homestay', title: 'Pemandangan Alam' },
  { src: `${basePath}/images/interior.jpg`, alt: 'Interior FHie Homestay', title: 'Interior Nyaman' },
  { src: `${basePath}/images/kamar-deluxe.jpg`, alt: 'Kamar Deluxe', title: 'Kamar Deluxe' },
  { src: `${basePath}/images/kamar-twin.jpg`, alt: 'Kamar Twin', title: 'Kamar Twin' },
  { src: `${basePath}/images/kamar-mandi.jpg`, alt: 'Kamar Mandi', title: 'Kamar Mandi' },
  { src: `${basePath}/images/IMG-20251020-WA0007.jpg`, alt: 'Fasilitas Homestay', title: 'Fasilitas' },
];

export default function Home() {
  const { t } = useLanguage();
  
  // Tour Packages dengan translations
  const tourPackages = [
    {
      icon: <Waves size={40} className="text-yellow-400" />,
      name: t.divingTitle,
      description: t.divingDesc,
      price: 'Rp 850.000',
      duration: t.fullDay,
      packageIncludes: t.divingIncludes,
    },
    {
      icon: <Bird size={40} className="text-yellow-400" />,
      name: t.birdwatchingTitle,
      description: t.birdwatchingDesc,
      price: 'Rp 650.000',
      duration: t.halfDay,
      packageIncludes: t.birdwatchingIncludes,
    },
    {
      icon: <Fish size={40} className="text-yellow-400" />,
      name: t.fishingTitle,
      description: t.fishingDesc,
      price: 'Rp 1.200.000',
      duration: t.fullDay8h,
      packageIncludes: t.fishingIncludes,
    },
  ];
  
  return (
    <div className="bg-brand-dark">
      <Header />
      <main>
        <Hero />
        
        {/* Tour Packages Section */}
        <section id="tours" className="bg-gradient-to-br from-ocean-blue via-brand-dark to-forest-green py-20 px-6">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-white mb-10">{t.toursTitle}</h2>
            <p className="text-center text-gray-300 text-sm mb-10 max-w-3xl mx-auto leading-relaxed" dangerouslySetInnerHTML={{ __html: t.toursSubtitle.replace(/Bolaang Mongondow Selatan|South Bolaang Mongondow/g, '<strong class="text-yellow-400">$&</strong>') }} />
            
            <div className="grid md:grid-cols-3 gap-6">
              {tourPackages.map((tour, index) => {
                const mainWhatsApp = '6282292713214';
                const waLink = `https://wa.me/${mainWhatsApp}?text=Halo,%20saya%20tertarik%20dengan%20paket%20${encodeURIComponent(tour.name)}.%20Bisa%20info%20lebih%20detail?`;
                
                const cardClass = index === 0 
                  ? 'bg-gradient-to-br from-ocean-light to-ocean-blue border border-ocean-teal' 
                  : index === 1 
                  ? 'bg-gradient-to-br from-nature-green to-forest-green border border-green-500' 
                  : 'bg-gradient-to-br from-ocean-teal to-ocean-blue border border-blue-400';
                
                return (
                  <div 
                    key={index} 
                    className={`p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${cardClass}`}
                  >
                    <div className="flex justify-center mb-4">{tour.icon}</div>
                    <h3 className="text-xl font-bold text-yellow-400 mb-2 text-center">{tour.name}</h3>
                    
                    {/* Price & Duration */}
                    <div className="flex justify-center items-center gap-4 mb-3">
                      <span className="text-yellow-400 font-bold text-lg">{tour.price}</span>
                      <span className="text-gray-400 text-xs">•</span>
                      <span className="text-gray-300 text-sm">{tour.duration}</span>
                    </div>
                    
                    <p className="text-gray-300 text-sm mb-4 text-center leading-relaxed">{tour.description}</p>
                    
                    <div className="mb-6 bg-black bg-opacity-40 p-4 rounded-lg backdrop-blur-sm">
                      <h4 className="text-white font-semibold text-sm mb-3">{t.packageIncludes}</h4>
                      <ul className="space-y-2">
                        {tour.packageIncludes.map((item: string, idx: number) => (
                          <li key={idx} className="text-gray-400 text-xs flex items-start">
                            <span className="text-yellow-400 mr-2 mt-0.5">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center bg-ocean-light hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg text-sm transition duration-300 shadow-lg"
                    >
                      {t.bookPackage}
                    </a>
                  </div>
                );
              })}
            </div>
            
            {/* Operators Section */}
            <div className="mt-16 pt-12">
              <div className="h-px bg-gradient-to-r from-transparent via-ocean-teal to-transparent mb-12"></div>
              <h3 className="text-2xl font-bold text-center text-white mb-8">{t.operatorsTitle}</h3>
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-ocean-light to-ocean-blue p-6 rounded-lg text-center border border-ocean-teal hover:shadow-xl transition-shadow">
                  <div className="flex justify-center mb-3">
                    <Waves size={32} className="text-yellow-400" />
                  </div>
                  <h4 className="text-lg font-bold text-yellow-400 mb-2">{t.diveOperator}</h4>
                  <p className="text-gray-200 text-sm">{t.diveOperatorDesc}</p>
                </div>
                
                <div className="bg-gradient-to-br from-ocean-teal to-ocean-blue p-6 rounded-lg text-center border border-blue-400 hover:shadow-xl transition-shadow">
                  <div className="flex justify-center mb-3">
                    <Fish size={32} className="text-yellow-400" />
                  </div>
                  <h4 className="text-lg font-bold text-yellow-400 mb-2">{t.fishingOperator}</h4>
                  <p className="text-gray-200 text-sm">{t.fishingOperatorDesc}</p>
                </div>
                
                <div className="bg-gradient-to-br from-nature-green to-forest-green p-6 rounded-lg text-center border border-green-500 hover:shadow-xl transition-shadow">
                  <div className="flex justify-center mb-3">
                    <Bird size={32} className="text-yellow-400" />
                  </div>
                  <h4 className="text-lg font-bold text-yellow-400 mb-2">{t.birdGuide}</h4>
                  <p className="text-gray-200 text-sm">{t.birdGuideDesc}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Divider */}
        <div className="h-1 bg-gradient-to-r from-transparent via-ocean-teal to-transparent opacity-50"></div>
        
        <About />
        {/* Divider */}
        <div className="h-1 bg-gradient-to-r from-transparent via-forest-green to-transparent opacity-50"></div>
        
        <Features />
        {/* Divider */}
        <div className="h-1 bg-gradient-to-r from-transparent via-ocean-light to-transparent opacity-50"></div>
        
        <FeaturedUnits />
        {/* Divider */}
        <div className="h-1 bg-gradient-to-r from-transparent via-ocean-teal to-transparent opacity-50"></div>
        
        <Discount />
        
        {/* Divider */}
        <div className="h-1 bg-gradient-to-r from-transparent via-nature-green to-transparent opacity-50"></div>
        
        {/* Gallery Section */}
        <section id="gallery" className="bg-gradient-to-br from-ocean-teal via-brand-dark to-forest-green py-20 px-6">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-white mb-10">{t.galleryTitle}</h2>
            <p className="text-center text-gray-300 text-sm mb-10 max-w-2xl mx-auto">
              {t.galleryDesc}
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {galleryImages.map((image, index) => (
                <div 
                  key={index} 
                  className="relative h-64 rounded-lg overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <Image 
                    src={image.src} 
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-end p-4">
                    <h3 className="text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                      {image.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      {/* Divider before Footer */}
      <div className="h-1 bg-gradient-to-r from-ocean-blue via-ocean-teal to-ocean-blue opacity-70"></div>
      
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
