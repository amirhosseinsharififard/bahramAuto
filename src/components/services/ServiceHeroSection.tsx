'use client';

interface ServiceHeroSectionProps {
  t: (key: string) => string;
}

const ServiceHeroSection = ({ t }: ServiceHeroSectionProps) => {
  return (
    <div className="mb-16 text-center">
      <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
        {t('services.title')}
      </h1>
      <p className="text-xl text-gray-300">{t('services.subtitle')}</p>
    </div>
  );
};

export default ServiceHeroSection;
