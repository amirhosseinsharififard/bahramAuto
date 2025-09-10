'use client';

import Link from 'next/link';
import CarCard from '../ui/CarCard';
import CarDetailView from '../ui/CarDetailView';

interface Car {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  financing: number;
  mileage: number;
  fuel: string;
  transmission: string;
  features: string[];
  image: string;
  description: string;
}

interface CarGallerySectionProps {
  t: (key: string) => string;
  filteredCars: Car[];
  selectedCar: Car | null;
  onViewDetails: (car: Car) => void;
  onBack: () => void;
}

const CarGallerySection = ({
  t,
  filteredCars,
  selectedCar,
  onViewDetails,
  onBack,
}: CarGallerySectionProps) => {
  return (
    <section
      id="gallery"
      className="bg-gradient-to-br from-slate-800 via-gray-900 to-slate-900 py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-5 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text py-2 text-5xl font-bold text-transparent">
            {t('highlights.title')}
          </h2>
          <p className="text-xl text-gray-300">{t('highlights.subtitle')}</p>
        </div>

        {/* Conditional rendering: Car Detail View or Car Grid View */}
        {selectedCar ? (
          <CarDetailView car={selectedCar} t={t} onBack={onBack} />
        ) : (
          <>
            {/* Car Grid View */}
            <div className="relative">
              <div className="mx-4 sm:mx-8 lg:mx-12">
                {/* Responsive car grid */}
                <div
                  id="car-slider"
                  className="grid grid-cols-1 gap-3 py-3 pb-6 sm:gap-4 md:grid-cols-2 lg:grid-cols-3"
                >
                  {filteredCars.slice(0, 6).map((car) => (
                    <CarCard
                      key={car.id}
                      car={car}
                      t={t}
                      onViewDetails={onViewDetails}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* View all cars button */}
            <div className="mt-8 text-center">
              <Link
                href="/gallery"
                className="transform rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 px-10 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-blue-500/25"
              >
                {t('highlights.viewAll')}
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default CarGallerySection;
