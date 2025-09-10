'use client';

import CarCard from './CarCard';

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

interface CarGridSectionProps {
  t: (key: string) => string;
  cars: Car[];
  onCarSelect: (car: Car) => void;
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
