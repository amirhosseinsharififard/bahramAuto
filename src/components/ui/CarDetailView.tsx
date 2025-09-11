'use client';

import { useRef, useState } from 'react';

import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Fuel,
  Gauge,
  Settings,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Car as StrapiCar, StrapiService } from '@/services/strapi';

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
  gallery?: string[]; // Additional images for gallery
}

interface CarDetailViewProps {
  car: Car | StrapiCar;
  t: (key: string) => string;
  onBack: () => void;
}

// Helper function to transform Strapi car data to our Car interface
const transformStrapiCar = (strapiCar: StrapiCar): Car => {
  const images = StrapiService.getCarImageUrls(strapiCar);
  return {
    id: strapiCar.id.toString(),
    brand: strapiCar.attributes.brand,
    model: strapiCar.attributes.model,
    year: strapiCar.attributes.year,
    price: strapiCar.attributes.price,
    financing: 0, // This would need to be calculated or added to Strapi
    mileage: strapiCar.attributes.mileage,
    fuel: strapiCar.attributes.fuelType,
    transmission: strapiCar.attributes.transmission,
    features: strapiCar.attributes.features,
    image: images[0] || '',
    description: strapiCar.attributes.description,
    gallery: images.slice(1), // Additional images for gallery
  };
};

// Car Image Gallery Component
const CarImageGallery = ({
  images,
  onImageSelect,
  currentImage,
}: {
  images: string[];
  onImageSelect: (image: string) => void;
  currentImage: string;
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      <h3 className="mb-4 text-lg font-semibold text-white">تصاویر بیشتر</h3>

      {/* Scroll buttons */}
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-gray-800/80 p-2 text-white transition-all hover:bg-gray-700/80"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>

      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-gray-800/80 p-2 text-white transition-all hover:bg-gray-700/80"
      >
        <ChevronRight className="h-4 w-4" />
      </button>

      {/* Image gallery */}
      <div
        ref={scrollContainerRef}
        className="flex gap-3 overflow-x-auto scrollbar-hide pb-2"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="relative h-20 w-20 flex-shrink-0 cursor-pointer overflow-hidden rounded-lg transition-all duration-300 hover:scale-105"
            onClick={() => onImageSelect(image)}
          >
            <Image
              src={image}
              alt={`گالری ${index + 1}`}
              fill
              className={`object-cover transition-all duration-300 ${
                currentImage === image
                  ? 'opacity-100 scale-105'
                  : 'opacity-70 hover:opacity-90'
              }`}
              style={{
                filter:
                  currentImage === image
                    ? 'none'
                    : 'brightness(0.7) blur(0.5px)',
              }}
            />
            {currentImage === image && (
              <div className="absolute inset-0 rounded-lg border-2 border-blue-400" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const CarDetailView = ({ car, t, onBack }: CarDetailViewProps) => {
  // Transform Strapi car to our Car interface if needed
  const normalizedCar = 'attributes' in car ? transformStrapiCar(car) : car;

  const [currentImage, setCurrentImage] = useState(normalizedCar.image);

  // Create gallery images array (main image + additional gallery images)
  const galleryImages = normalizedCar.gallery
    ? [normalizedCar.image, ...normalizedCar.gallery]
    : [normalizedCar.image];

  const handleImageSelect = (image: string) => {
    setCurrentImage(image);
  };

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
          <div className="relative h-96 overflow-hidden rounded-xl transition-all duration-500">
            <Image
              src={currentImage}
              alt={`${normalizedCar.brand} ${normalizedCar.model}`}
              fill
              className="h-full w-full object-cover transition-all duration-500"
            />
          </div>
        </div>

        {/* Car information */}
        <div>
          {/* Car title */}
          <h2 className="mb-4 text-3xl font-bold text-white">
            {normalizedCar.brand} {normalizedCar.model}
          </h2>

          {/* Car description */}
          <p className="mb-6 text-gray-300">{normalizedCar.description}</p>

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
                  <p className="font-medium text-white">{normalizedCar.year}</p>
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
                  <p className="font-medium text-white">
                    {normalizedCar.mileage}
                  </p>
                </div>
              </div>
            </div>

            {/* Fuel specification */}
            <div>
              <div className="flex items-center gap-2">
                <Fuel className="h-4 w-4 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-400">{t('carLabels.fuel')}</p>
                  <p className="font-medium text-white">{normalizedCar.fuel}</p>
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
                  <p className="font-medium text-white">
                    {normalizedCar.transmission}
                  </p>
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
              {normalizedCar.features.map((feature: string, index: number) => (
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

      <div className="flex  gap-4">
        <div className="mt-8 w-1/2">
          <CarImageGallery
            images={galleryImages}
            onImageSelect={handleImageSelect}
            currentImage={currentImage}
          />
        </div>
        {/* Price and financing information */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 w-1/2">
          {/* Monthly financing */}
          <div className="rounded-lg border border-blue-500/20 bg-blue-500/10 p-4 text-center">
            <h4 className="mb-2 text-lg font-semibold text-blue-400">
              {t('highlights.financing')}
            </h4>
            <p className="text-2xl font-bold text-white">
              €{normalizedCar.financing}
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
    </div>
  );
};

export default CarDetailView;
