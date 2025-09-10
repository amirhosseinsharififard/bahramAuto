'use client';

import { Calendar, Fuel, Gauge, Settings } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

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

interface CarDetailViewProps {
  car: Car;
  t: (key: string) => string;
  onBack: () => void;
}

const CarDetailView = ({ car, t, onBack }: CarDetailViewProps) => {
  return (
    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-gray-800/80 to-gray-900/90 p-6 shadow-xl backdrop-blur-sm">
      {/* Back button */}
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
        {t('highlights.back')}
      </button>

      {/* Car detail content grid */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Car image */}
        <div>
          <div className="relative h-96 overflow-hidden rounded-xl">
            <Image
              src={car.image}
              alt={`${car.brand} ${car.model}`}
              fill
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Car information */}
        <div>
          {/* Car title */}
          <h2 className="mb-4 text-3xl font-bold text-white">
            {car.brand} {car.model}
          </h2>

          {/* Car description */}
          <p className="mb-6 text-gray-300">{car.description}</p>

          {/* Car specifications grid */}
          <div className="mb-8 grid grid-cols-2 gap-4 rounded-lg bg-gray-800/50 p-4">
            {/* Year specification */}
            <div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-400">
                    {t('highlights.year')}
                  </p>
                  <p className="font-medium text-white">{car.year}</p>
                </div>
              </div>
            </div>

            {/* Mileage specification */}
            <div>
              <div className="flex items-center gap-2">
                <Gauge className="h-4 w-4 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-400">
                    {t('carLabels.mileage')}
                  </p>
                  <p className="font-medium text-white">{car.mileage}</p>
                </div>
              </div>
            </div>

            {/* Fuel specification */}
            <div>
              <div className="flex items-center gap-2">
                <Fuel className="h-4 w-4 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-400">{t('carLabels.fuel')}</p>
                  <p className="font-medium text-white">{car.fuel}</p>
                </div>
              </div>
            </div>

            {/* Transmission specification */}
            <div>
              <div className="flex items-center gap-2">
                <Settings className="h-4 w-4 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-400">
                    {t('carLabels.transmission')}
                  </p>
                  <p className="font-medium text-white">{car.transmission}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Car features */}
          <div className="mb-8">
            <h3 className="mb-4 text-xl font-semibold text-white">
              {t('highlights.features')}
            </h3>
            <div className="flex flex-wrap gap-2">
              {car.features.map((feature: string, index: number) => (
                <span
                  key={index}
                  className="rounded-lg border border-blue-500/30 bg-blue-500/20 px-3 py-1 text-sm text-blue-300"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Price and financing information */}
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* Total price */}
        <div className="rounded-lg border border-green-500/20 bg-green-500/10 p-4 text-center">
          <h4 className="mb-2 text-lg font-semibold text-green-400">
            {t('highlights.totalPrice')}
          </h4>
          <p className="text-2xl font-bold text-white">€{car.price}</p>
        </div>

        {/* Monthly financing */}
        <div className="rounded-lg border border-blue-500/20 bg-blue-500/10 p-4 text-center">
          <h4 className="mb-2 text-lg font-semibold text-blue-400">
            {t('highlights.financing')}
          </h4>
          <p className="text-2xl font-bold text-white">
            €{car.financing}
            <span className="text-sm text-gray-300">
              {t('highlights.month')}
            </span>
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col gap-3">
          <Link
            href="/contact-us"
            className="transform rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 text-center font-medium text-white transition-all duration-300 hover:scale-105 hover:from-blue-500 hover:to-blue-600"
          >
            {t('highlights.contact')}
          </Link>
          <button
            onClick={onBack}
            className="transform rounded-lg border border-gray-600 bg-gray-800/50 px-6 py-3 font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-gray-700/50"
          >
            {t('highlights.back')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarDetailView;
