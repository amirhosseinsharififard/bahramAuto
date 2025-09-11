'use client';

import { UnifiedCar } from '@/hooks/useCarData';
import { Fuel, Gauge, Settings } from 'lucide-react';
import Image from 'next/image';

interface CarCardProps {
  t: (key: string) => string;
  car: UnifiedCar;
  onSelect: (car: UnifiedCar) => void;
}

const CarCard = ({ t, car, onSelect }: CarCardProps) => {
  return (
    <div
      className="group transform cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/70 to-gray-900/80 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
      onClick={() => onSelect(car)}
    >
      <div className="relative h-48 overflow-hidden sm:h-56">
        <Image
          src={car.image}
          alt={`${car.brand} ${car.model}`}
          fill
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
        <div className="absolute right-4 top-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 text-lg font-bold text-white shadow-lg">
          €{car.price}
        </div>
      </div>
      <div className="p-4">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-lg font-bold text-white">
            {car.brand} {car.model}
          </h3>
          <span className="text-sm text-gray-400">{car.year}</span>
        </div>

        <div className="mb-4 grid grid-cols-3 gap-1 text-sm text-gray-300">
          <div className="text-center">
            <div className="font-medium">{car.mileage}</div>
            <div className="flex items-center justify-center gap-2 text-xs opacity-75">
              <Gauge className="h-3 w-3 text-gray-400" />
              <p>{t('carLabels.mileage')}</p>
            </div>
          </div>
          <div className="text-center">
            <div className="font-medium">{car.fuel}</div>
            <div className="flex items-center justify-center gap-2 text-xs opacity-75">
              <Fuel className="h-3 w-3 text-gray-400" />
              <p>{t('carLabels.fuel')}</p>
            </div>
          </div>
          <div className="text-center">
            <div className="font-medium">{car.transmission}</div>
            <div className="flex items-center justify-center gap-2 text-xs opacity-75">
              <Settings className="h-3 w-3 text-gray-400" />
              <p>{t('carLabels.transmission')}</p>
            </div>
          </div>
        </div>

        <div className="mb-4 flex flex-wrap gap-1">
          {Array.isArray(car.features) &&
            car.features.slice(0, 2).map((feature: string, index: number) => (
              <span
                key={index}
                className="rounded-lg border border-blue-500/30 bg-blue-500/20 px-2 py-1 text-xs text-blue-300"
              >
                {feature}
              </span>
            ))}
          {Array.isArray(car.features) && car.features.length > 2 && (
            <span className="rounded-lg bg-gray-500/20 px-2 py-1 text-xs text-gray-300">
              +{car.features.length - 2}
            </span>
          )}
        </div>

        <div className="rounded-lg border border-green-500/20 bg-green-500/10 p-3 text-center">
          <div className="text-xs text-green-300 mb-1">
            {t('gallery.details.financing')}
          </div>
          <div className="text-sm font-semibold text-green-400">
            €{car.financing}
            {t('gallery.details.month')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
