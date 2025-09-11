'use client';

import { Calendar, Fuel, Gauge, Settings } from 'lucide-react';
import Image from 'next/image';

import CarSpecItem from './CarSpecItem';
import FeatureTag from './FeatureTag';
import PriceCard from './PriceCard';

interface Car {
  id: number;
  brand: string;
  model: string;
  year: number;
  price: string;
  financing: string;
  mileage: string;
  fuel: string;
  transmission: string;
  image: string;
  features: string[];
  category: string;
  description: string;
}

interface GalleryCarDetailViewProps {
  t: (key: string) => string;
  car: Car;
  onBack: () => void;
}

const GalleryCarDetailView = ({
  t,
  car,
  onBack,
}: GalleryCarDetailViewProps) => {
  return (
    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-gray-800/80 to-gray-900/90 p-6 shadow-xl backdrop-blur-sm">
      <button
        onClick={onBack}
        className="mb-6 flex items-center text-blue-400 transition-colors hover:text-blue-300"
      >
        <svg
          className="mr-2 h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        {t('gallery.details.back')}
      </button>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="relative h-96 overflow-hidden rounded-xl">
          <Image
            src={car.image}
            alt={`${car.brand} ${car.model}`}
            fill
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <h2 className="mb-2 text-3xl font-bold text-white">
            {car.brand} {car.model}
          </h2>
          <p className="mb-6 text-gray-300">{car.description}</p>

          <div className="mb-8 grid grid-cols-2 gap-4 rounded-lg bg-gray-800/50 p-4">
            <CarSpecItem
              t={t}
              icon={Calendar}
              labelKey="gallery.details.year"
              value={car.year.toString()}
            />
            <CarSpecItem
              t={t}
              icon={Gauge}
              labelKey="gallery.details.mileage"
              value={`${car.mileage} km`}
            />
            <CarSpecItem
              t={t}
              icon={Fuel}
              labelKey="gallery.details.fuel"
              value={car.fuel}
            />
            <CarSpecItem
              t={t}
              icon={Settings}
              labelKey="gallery.details.transmission"
              value={car.transmission}
            />
          </div>

          <div className="mb-8">
            <h3 className="mb-3 text-lg font-semibold text-white">
              {t('gallery.details.features')}
            </h3>
            <div className="flex flex-wrap gap-2">
              {Array.isArray(car.features) &&
                car.features.map((feature: string, index: number) => (
                  <FeatureTag key={index} feature={feature} index={index} />
                ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <PriceCard
              t={t}
              labelKey="gallery.details.price"
              value={`€${car.price}`}
              gradient="from-blue-600 to-purple-600"
            />
            <PriceCard
              t={t}
              labelKey="gallery.details.financing"
              value={`€${car.financing}${t('gallery.details.month')}`}
              gradient="from-green-600 to-teal-600"
            />
          </div>

          <button className="mt-8 w-full rounded-full bg-gradient-to-r from-blue-600 to-purple-600 py-3 font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30">
            {t('gallery.details.contact')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GalleryCarDetailView;
