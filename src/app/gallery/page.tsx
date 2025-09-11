'use client';
import { useState } from 'react';

import { DataSourceSwitcher } from '@/components';
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
import { useCarData } from '@/hooks/useCarData';

const GalleryPage = () => {
  const { language, setLanguage, t } = useLanguage();
  const [selectedFilter, setSelectedFilter] = useState('alle');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCar, setSelectedCar] = useState<any | null>(null);

  // Load data from Excel or Strapi using unified hook
  const {
    cars: availableCars,
    loading,
    error,
    dataSource,
    setDataSource,
  } = useCarData();

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

      {/* Data source switcher */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed left-4 top-4 z-40">
          <DataSourceSwitcher
            currentSource={dataSource}
            onSourceChange={setDataSource}
          />
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
