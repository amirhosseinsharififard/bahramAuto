'use client';

interface GalleryHeroSectionProps {
  t: (key: string) => string;
}

const GalleryHeroSection = ({ t }: GalleryHeroSectionProps) => {
  return (
    <div className="mb-16 text-center">
      <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
        {t('gallery.title')}
      </h1>
      <p className="text-xl text-gray-300">{t('gallery.subtitle')}</p>
    </div>
  );
};

export default GalleryHeroSection;
