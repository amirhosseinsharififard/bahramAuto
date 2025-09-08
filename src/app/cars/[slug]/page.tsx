import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import {
  Calendar,
  Car,
  Fuel,
  Gauge,
  Mail,
  MapPin,
  Phone,
  Wrench,
} from 'lucide-react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

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
  engineSize?: number;
  horsepower?: number;
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

interface CarPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: CarPageProps): Promise<Metadata> {
  const car = await getCar(params.slug);

  if (!car) {
    return {
      title: 'خودرو یافت نشد - بهرام اتو',
    };
  }

  return {
    title: `${car.brand} ${car.model} (${car.year}) - بهرام اتو`,
    description:
      car.description ||
      `خودرو ${car.brand} ${car.model} مدل ${car.year} با قیمت ${formatPrice(car.price)}`,
  };
}

async function getCar(slug: string): Promise<CarData | null> {
  try {
    const query = `*[_type == "car" && slug.current == $slug][0] {
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
      engineSize,
      horsepower,
      color,
      condition,
      description,
      images,
      features,
      isAvailable,
      isFeatured,
      contactInfo
    }`;

    const car = await client.fetch(query, { slug });
    return car;
  } catch (error) {
    console.error('Error fetching car:', error);
    return null;
  }
}

function formatPrice(price: number) {
  return new Intl.NumberFormat('fa-IR').format(price) + ' تومان';
}

function formatMileage(mileage: number) {
  return new Intl.NumberFormat('fa-IR').format(mileage) + ' کیلومتر';
}

function getFuelTypeLabel(fuelType: string) {
  const labels: { [key: string]: string } = {
    gasoline: 'بنزین',
    diesel: 'دیزل',
    hybrid: 'هیبرید',
    electric: 'الکتریکی',
    gas: 'گاز',
  };
  return labels[fuelType] || fuelType;
}

function getTransmissionLabel(transmission: string) {
  const labels: { [key: string]: string } = {
    manual: 'دستی',
    automatic: 'اتوماتیک',
    'semi-automatic': 'نیمه اتوماتیک',
  };
  return labels[transmission] || transmission;
}

function getConditionLabel(condition: string) {
  const labels: { [key: string]: string } = {
    new: 'نو',
    used: 'کارکرده',
    'second-hand': 'دست دوم',
  };
  return labels[condition] || condition;
}

export default async function CarPage({ params }: CarPageProps) {
  const car = await getCar(params.slug);

  if (!car) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* تصاویر */}
          {car.images && car.images.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
              <div className="aspect-video">
                <img
                  src={urlFor(car.images[0]).width(800).height(500).url()}
                  alt={car.images[0].alt || car.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              {car.images.length > 1 && (
                <div className="grid grid-cols-2 gap-2">
                  {car.images.slice(1, 5).map((image, index) => (
                    <div key={image._key} className="aspect-video">
                      <img
                        src={urlFor(image).width(400).height(250).url()}
                        alt={image.alt || `${car.title} - تصویر ${index + 2}`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          <div className="p-6">
            {/* عنوان و قیمت */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {car.brand} {car.model}
                </h1>
                <div className="flex items-center gap-4 text-gray-600">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{car.year}</span>
                  </div>
                  {car.condition && (
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">
                      {getConditionLabel(car.condition)}
                    </span>
                  )}
                  {car.isFeatured && (
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-sm">
                      ویژه
                    </span>
                  )}
                </div>
              </div>
              <div className="text-3xl font-bold text-green-600 mt-4 md:mt-0">
                {formatPrice(car.price)}
              </div>
            </div>

            {/* جزئیات فنی */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  مشخصات فنی
                </h3>

                {car.mileage && (
                  <div className="flex items-center gap-2">
                    <Gauge className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">
                      کیلومتر کارکرد: {formatMileage(car.mileage)}
                    </span>
                  </div>
                )}

                {car.fuelType && (
                  <div className="flex items-center gap-2">
                    <Fuel className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">
                      نوع سوخت: {getFuelTypeLabel(car.fuelType)}
                    </span>
                  </div>
                )}

                {car.transmission && (
                  <div className="flex items-center gap-2">
                    <Wrench className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">
                      گیربکس: {getTransmissionLabel(car.transmission)}
                    </span>
                  </div>
                )}

                {car.engineSize && (
                  <div className="flex items-center gap-2">
                    <Car className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">
                      حجم موتور: {car.engineSize} لیتر
                    </span>
                  </div>
                )}

                {car.horsepower && (
                  <div className="flex items-center gap-2">
                    <span className="text-gray-700">
                      قدرت موتور: {car.horsepower} اسب بخار
                    </span>
                  </div>
                )}

                {car.color && (
                  <div className="flex items-center gap-2">
                    <span className="text-gray-700">رنگ: {car.color}</span>
                  </div>
                )}
              </div>

              {/* امکانات */}
              {car.features && car.features.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    امکانات
                  </h3>
                  <div className="grid grid-cols-1 gap-2">
                    {car.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* اطلاعات تماس */}
              {car.contactInfo && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    اطلاعات تماس
                  </h3>
                  <div className="space-y-3">
                    {car.contactInfo.phone && (
                      <a
                        href={`tel:${car.contactInfo.phone}`}
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        <Phone className="w-5 h-5" />
                        <span>{car.contactInfo.phone}</span>
                      </a>
                    )}

                    {car.contactInfo.email && (
                      <a
                        href={`mailto:${car.contactInfo.email}`}
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        <Mail className="w-5 h-5" />
                        <span>{car.contactInfo.email}</span>
                      </a>
                    )}

                    {car.contactInfo.location && (
                      <div className="flex items-center gap-2 text-gray-700">
                        <MapPin className="w-5 h-5" />
                        <span>{car.contactInfo.location}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* توضیحات */}
            {car.description && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  توضیحات
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {car.description}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}


