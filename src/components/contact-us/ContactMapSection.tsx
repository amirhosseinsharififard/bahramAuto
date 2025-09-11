'use client';

import Image from 'next/image';

import MapOverlay from './MapOverlay';

interface ContactMapSectionProps {
  t: (key: string) => string;
}

const ContactMapSection = ({ t }: ContactMapSectionProps) => {
  return (
    <div className="mt-20 rounded-2xl border border-white/10 bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-8 shadow-lg backdrop-blur-sm">
      <div className="mb-8 text-center">
        <h2 className="mb-4 text-3xl font-bold text-white">
          {t('contact.map.title')}
        </h2>
        <p className="text-gray-300">{t('contact.map.description')}</p>
      </div>

      <div className="relative h-96 overflow-hidden rounded-xl">
        <Image
          src="/images/map.jpg"
          alt="Map of Bahram Autohaus location"
          fill
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        <MapOverlay t={t} />
      </div>
    </div>
  );
};

export default ContactMapSection;
