'use client';

import { UnifiedCar } from '@/hooks/useCarData';

import CarCard from './CarCard';

interface CarGridSectionProps {
  t: (key: string) => string;
  cars: UnifiedCar[];
  onCarSelect: (car: UnifiedCar) => void;
}

const CarGridSection = ({ t, cars, onCarSelect }: CarGridSectionProps) => {
  // Show empty state if no cars
  if (!cars || cars.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-6xl mb-4">🚗</div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          {t('empty.noCars') || 'هیچ خودرویی یافت نشد'}
        </h3>
        <p className="text-gray-600 mb-2">
          {t('empty.noCarsDescription') ||
            'در حال حاضر هیچ خودرویی در گالری موجود نیست'}
        </p>
        <p className="text-sm text-gray-500 mb-4">
          {t('empty.noCarsDescription.en') ||
            'No cars are currently available in the gallery'}
        </p>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 max-w-md mx-auto">
          <p className="text-yellow-800 text-sm">
            💡{' '}
            {t('empty.setupTip') ||
              'برای اضافه کردن خودرو، ابتدا Strapi backend را راه‌اندازی کنید'}
          </p>
          <p className="text-yellow-700 text-xs mt-1">
            {t('empty.setupTip.en') ||
              'To add cars, first set up the Strapi backend'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {cars.map((car) => (
        <CarCard key={car.id} t={t} car={car} onSelect={onCarSelect} />
      ))}
    </div>
  );
};

export default CarGridSection;
