/**
 * Sample car data with gallery images for testing the CarDetailView component
 */

export interface SampleCar {
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
  gallery?: string[];
}

export const sampleCarWithGallery: SampleCar = {
  id: '1',
  brand: 'BMW',
  model: 'X5 M50d',
  year: 2023,
  price: 78900,
  financing: 499,
  mileage: 15000,
  fuel: 'Diesel',
  transmission: 'Automatik',
  features: [
    'M-Paket',
    'Panorama',
    'HUD',
    'Harman Kardon',
    'LED Scheinwerfer',
    'Sport Lenkrad',
  ],
  image: '/images/cars/bmw-x5.jpg',
  description:
    'Ein außergewöhnlicher SUV mit beeindruckender Leistung und luxuriöser Ausstattung. Der BMW X5 M50d vereint Sportlichkeit mit Alltagstauglichkeit.',
  gallery: [
    '/images/cars/bmw-x5.jpg',
    '/images/cars/mercedes-c63.jpg',
    '/images/cars/audi-rs6.jpg',
    '/images/cars/porsche-cayenne.jpg',
    '/images/cars/tesla-model-s.jpg',
    '/images/cars/bmw-m4.png',
  ],
};

export const sampleCarWithoutGallery: SampleCar = {
  id: '2',
  brand: 'Mercedes',
  model: 'C63 AMG',
  year: 2024,
  price: 95500,
  financing: 649,
  mileage: 8500,
  fuel: 'Benzin',
  transmission: 'Automatik',
  features: ['AMG Performance', 'Burmester', 'Distronic', '360° Kamera'],
  image: '/images/cars/mercedes-c63.jpg',
  description:
    'Ein Hochleistungs-Sportwagen mit beeindruckender AMG-Performance und luxuriöser Ausstattung.',
};
