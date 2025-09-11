'use client';

import { UnifiedCar } from '@/hooks/useCarData';

import CarCard from './CarCard';

interface CarGridSectionProps {
  t: (key: string) => string;
  cars: UnifiedCar[];
  onCarSelect: (car: UnifiedCar) => void;
}

const CarGridSection = ({ t, cars, onCarSelect }: CarGridSectionProps) => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {cars.map((car) => (
        <CarCard key={car.id} t={t} car={car} onSelect={onCarSelect} />
      ))}
    </div>
  );
};

export default CarGridSection;
