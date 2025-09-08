import CarList from '@/components/CarList';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'فهرست خودروها - بهرام اتو',
  description: 'مشاهده تمام خودروهای موجود در نمایشگاه بهرام اتو',
};

export default function CarsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            فهرست خودروها
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            مجموعه کاملی از بهترین خودروهای موجود در نمایشگاه بهرام اتو
          </p>
        </div>

        <CarList />
      </div>
    </div>
  );
}


