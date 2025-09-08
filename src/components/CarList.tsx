'use client';

import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { Calendar, Car, Fuel, Gauge, MapPin, Phone } from 'lucide-react';
import { useEffect, useState } from 'react';

interface CarData {
  _id: string;
  title: string;
  slug: { current: string };
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage?: number;
  fuelType?: string;
  transmission?: string;
  color?: string;
  condition?: string;
  description?: string;
  images?: Array<{
    _key: string;
    asset: any;
    alt?: string;
  }>;
  features?: string[];
  isAvailable: boolean;
  isFeatured: boolean;
  contactInfo?: {
    phone?: string;
    email?: string;
    location?: string;
  };
}

interface CarListProps {
  limit?: number;
  featuredOnly?: boolean;
  brand?: string;
}

export default function CarList({
  limit = 12,
  featuredOnly = false,
  brand,
}: CarListProps) {
  const [cars, setCars] = useState<CarData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCars() {
      try {
        let query = `*[_type == "car" && isAvailable == true`;

        if (featuredOnly) {
          query += ` && isFeatured == true`;
        }

        if (brand) {
          query += ` && brand == "${brand}"`;
        }

        query += `] | order(_createdAt desc) [0...${limit}] {
          _id,
          title,
          slug,
          brand,
          model,
          year,
          price,
          mileage,
          fuelType,
          transmission,
          color,
          condition,
          description,
          images,
          features,
          isAvailable,
          isFeatured,
          contactInfo
        }`;

        const data = await client.fetch(query);
        setCars(data);
      } catch (err) {
        setError('خطا در بارگذاری خودروها');
        console.error('Error fetching cars:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchCars();
  }, [limit, featuredOnly, brand]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fa-IR').format(price) + ' تومان';
  };

  const formatMileage = (mileage: number) => {
    return new Intl.NumberFormat('fa-IR').format(mileage) + ' کیلومتر';
  };

  const getFuelTypeLabel = (fuelType: string) => {
    const labels: { [key: string]: string } = {
      gasoline: 'بنزین',
      diesel: 'دیزل',
      hybrid: 'هیبرید',
      electric: 'الکتریکی',
      gas: 'گاز',
    };
    return labels[fuelType] || fuelType;
  };

  const getTransmissionLabel = (transmission: string) => {
    const labels: { [key: string]: string } = {
      manual: 'دستی',
      automatic: 'اتوماتیک',
      'semi-automatic': 'نیمه اتوماتیک',
    };
    return labels[transmission] || transmission;
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return <div className="text-center p-8 text-red-600">{error}</div>;
  }

  if (cars.length === 0) {
    return (
      <div className="text-center p-8 text-gray-600">هیچ خودرویی یافت نشد</div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {cars.map((car) => (
        <div
          key={car._id}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
        >
          {car.images && car.images.length > 0 && (
            <div className="aspect-video w-full relative">
              <img
                src={urlFor(car.images[0]).width(400).height(250).url()}
                alt={car.images[0].alt || car.title}
                className="w-full h-full object-cover"
              />
              {car.isFeatured && (
                <div className="absolute top-2 right-2 bg-yellow-500 text-white px-2 py-1 rounded text-xs font-bold">
                  ویژه
                </div>
              )}
            </div>
          )}

          <div className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <Car className="w-4 h-4 text-blue-600" />
              <h3 className="text-lg font-bold text-gray-900">
                {car.brand} {car.model}
              </h3>
            </div>

            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{car.year}</span>
              </div>

              {car.mileage && (
                <div className="flex items-center gap-2">
                  <Gauge className="w-4 h-4" />
                  <span>{formatMileage(car.mileage)}</span>
                </div>
              )}

              {car.fuelType && (
                <div className="flex items-center gap-2">
                  <Fuel className="w-4 h-4" />
                  <span>{getFuelTypeLabel(car.fuelType)}</span>
                </div>
              )}

              {car.transmission && (
                <div className="flex items-center gap-2">
                  <span>گیربکس: {getTransmissionLabel(car.transmission)}</span>
                </div>
              )}

              {car.color && (
                <div className="flex items-center gap-2">
                  <span>رنگ: {car.color}</span>
                </div>
              )}

              {car.contactInfo?.location && (
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{car.contactInfo.location}</span>
                </div>
              )}
            </div>

            <div className="mt-4 pt-4 border-t">
              <div className="text-xl font-bold text-green-600 mb-2">
                {formatPrice(car.price)}
              </div>

              {car.contactInfo?.phone && (
                <a
                  href={`tel:${car.contactInfo.phone}`}
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>{car.contactInfo.phone}</span>
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}


