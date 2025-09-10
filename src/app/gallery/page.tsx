'use client';
import { useState } from 'react';

import AnimatedBackground from '@/components/AnimatedBackground';
import {
  CarGridSection,
  GalleryCarDetailView,
  GalleryHeroSection,
  GalleryLoadingComponent,
  GallerySearchFilterSection,
} from '@/components/gallery';
import { Footer, Header } from '@/components/layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { useExcelData } from '@/hooks/useExcelData';

const GalleryPage = () => {
  const { language, setLanguage, t } = useLanguage();
  const [selectedFilter, setSelectedFilter] = useState('alle');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCar, setSelectedCar] = useState<any | null>(null);

  // Load data from Excel files
  const { cars, loading, error } = useExcelData();

  // Fallback car data in case Excel files fail to load
  const fallbackCars = [
    {
      id: 1,
      brand: 'BMW',
      model: 'X5 M50d',
      year: 2023,
      price: '78900',
      financing: '499',
      mileage: '15000',
      fuel: 'Diesel',
      transmission: 'Automatik',
      image: '/images/cars/bmw-x5.jpg',
      features: ['M-Paket', 'Panorama', 'HUD', 'Harman Kardon'],
      category: 'suv',
      description:
        'Der BMW X5 M50d bietet beeindruckende Leistung und exklusiven Komfort.',
    },
    {
      id: 2,
      brand: 'Mercedes',
      model: 'C63 AMG',
      year: 2024,
      price: '95500',
      financing: '649',
      mileage: '8500',
      fuel: 'Benzin',
      transmission: 'Automatik',
      image: '/images/cars/mercedes-c63.jpg',
      features: ['AMG Performance', 'Burmester', 'Distronic', '360° Kamera'],
      category: 'sportwagen',
      description:
        'Der Mercedes-AMG C63 ist die Definition von Performance und Luxus.',
    },
    {
      id: 3,
      brand: 'Audi',
      model: 'RS6 Avant',
      year: 2023,
      price: '112000',
      financing: '799',
      mileage: '12000',
      fuel: 'Benzin',
      transmission: 'Automatik',
      image: '/images/cars/audi-rs6.jpg',
      features: [
        'RS Performance',
        'Virtual Cockpit',
        'Matrix LED',
        'B&O Sound',
      ],
      category: 'kombi',
      description:
        'Der Audi RS6 Avant kombiniert die Praktikabilität eines Kombis mit der Performance eines Sportwagens.',
    },
  ];

  // Use Excel data if available, otherwise use fallback data
  const availableCars = cars.length > 0 ? cars : fallbackCars;

  const filteredCars = availableCars.filter(
    (car) =>
      (selectedFilter === 'alle' || car.category === selectedFilter) &&
      (car.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.model.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Show loading state
  if (loading) {
    return <GalleryLoadingComponent />;
  }

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"
      dir={t('direction')}
    >
      <AnimatedBackground />
      <Header language={language} setLanguage={setLanguage} />

      {/* Error notification */}
      {error && (
        <div className="fixed right-4 top-4 z-50 rounded-lg bg-yellow-500 px-4 py-2 text-black shadow-lg">
          <p className="text-sm">{error}</p>
        </div>
      )}

      <main className="relative z-10 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <GalleryHeroSection t={t} />

          <GallerySearchFilterSection
            t={t}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
          />

          {selectedCar ? (
            <GalleryCarDetailView
              t={t}
              car={selectedCar}
              onBack={() => setSelectedCar(null)}
            />
          ) : (
            <CarGridSection
              t={t}
              cars={filteredCars}
              onCarSelect={setSelectedCar}
            />
          )}
        </div>
      </main>

      <Footer language={language} />
    </div>
  );
};

export default GalleryPage;
