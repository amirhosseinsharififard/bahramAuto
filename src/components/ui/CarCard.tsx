'use client';

import { Eye, Fuel, Gauge, Heart, Mail, Settings } from 'lucide-react';
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

interface CarCardProps {
  car: Car;
  t: (key: string) => string;
  onViewDetails: (car: Car) => void;
}

const CarCard = ({ car, t, onViewDetails }: CarCardProps) => {
  return (
    <div
      className="group w-full transform cursor-pointer transition-all duration-500"
      onClick={() => onViewDetails(car)}
    >
      <div className="relative h-full overflow-hidden rounded-2xl border border-gray-700/50 bg-gradient-to-br from-gray-800/50 to-gray-900/80 shadow-xl backdrop-blur-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
        {/* Car image section */}
        <div className="relative h-48 overflow-hidden sm:h-52">
          <Image
            src={car.image}
            alt={`${car.brand} ${car.model}`}
            fill
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>

          {/* Floating price tag */}
          <div className="absolute right-4 top-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 text-lg font-bold text-white shadow-lg">
            €{car.price}
          </div>

          {/* Favorite button */}
          <button className="absolute left-4 top-4 rounded-full bg-black/50 p-2 transition-colors hover:bg-black/70">
            <Heart className="h-5 w-5 text-white" />
          </button>
        </div>

        {/* Car card content */}
        <div className="relative z-10 p-3 sm:p-4 lg:p-6">
          {/* Car title and year */}
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-base font-bold text-white transition-colors duration-300 group-hover:text-blue-400 sm:text-lg lg:text-xl">
              {car.brand} {car.model}
            </h3>
            <span className="text-xs text-gray-400 sm:text-sm">{car.year}</span>
          </div>

          {/* Car specifications grid */}
          <div className="mb-4 grid grid-cols-3 gap-1 text-xs text-gray-300 sm:gap-2 sm:text-sm">
            {/* Mileage specification */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-1">
                <span className="font-medium">{car.mileage}</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-xs opacity-75">
                <Gauge className="h-3 w-3 text-gray-400" />
                <p>{t('carLabels.mileage')}</p>
              </div>
            </div>

            {/* Fuel type specification */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-1">
                <span className="font-medium">{car.fuel}</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-xs opacity-75">
                <Fuel className="h-3 w-3 text-gray-400" />
                <p>{t('carLabels.fuel')}</p>
              </div>
            </div>

            {/* Transmission specification */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-1">
                <span className="font-medium">{car.transmission}</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-xs opacity-75">
                <Settings className="h-3 w-3 text-gray-400" />
                <p>{t('carLabels.transmission')}</p>
              </div>
            </div>
          </div>

          {/* Car features preview */}
          <div className="mb-4 flex flex-wrap gap-1">
            {car.features
              .slice(0, 2)
              .map((feature: string, featureIndex: number) => (
                <span
                  key={featureIndex}
                  className="rounded-lg border border-blue-500/30 bg-blue-500/20 px-2 py-1 text-xs text-blue-300"
                >
                  {feature}
                </span>
              ))}
            {/* Show count of additional features if more than 2 */}
            {car.features.length > 2 && (
              <span className="rounded-lg bg-gray-500/20 px-2 py-1 text-xs text-gray-300">
                +{car.features.length - 2}
              </span>
            )}
          </div>

          {/* Monthly financing information */}
          <div className="mb-4 rounded-lg border border-green-500/20 bg-green-500/10 p-2 sm:p-3">
            <div className="text-center text-xs text-green-400 sm:text-sm">
              {t('highlights.financing')} €{car.financing}
              {t('highlights.month')}
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col gap-2 sm:flex-row">
            {/* View details button */}
            <button
              onClick={() => onViewDetails(car)}
              className="flex-1 transform rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-2 py-1.5 text-xs font-medium text-white transition-all duration-300 hover:scale-105 hover:from-blue-500 hover:to-blue-600 sm:px-3 sm:py-2 sm:text-sm"
            >
              <Eye className="mr-1 inline-block h-3 w-3 sm:h-4 sm:w-4" />
              {t('highlights.details')}
            </button>

            {/* Contact button */}
            <Link
              href="/contact-us"
              className="flex-1 transform rounded-lg bg-gradient-to-r from-purple-600 to-purple-700 px-2 py-1.5 text-center text-xs font-medium text-white transition-all duration-300 hover:scale-105 hover:from-purple-500 hover:to-purple-600 sm:px-3 sm:py-2 sm:text-sm"
            >
              <Mail className="mr-1 inline-block h-3 w-3 sm:h-4 sm:w-4" />
              {t('highlights.contact')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
