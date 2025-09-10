'use client';

import { Map } from 'lucide-react';

interface MapOverlayProps {
  t: (key: string) => string;
}

const MapOverlay = ({ t }: MapOverlayProps) => {
  return (
    <div className="absolute bottom-8 left-8 rounded-xl border border-white/10 bg-gradient-to-br from-gray-800/90 to-gray-900/90 p-6 shadow-lg backdrop-blur-sm">
      <h3 className="mb-2 text-xl font-bold text-white">Bahram Autohaus</h3>
      <p className="text-gray-300">
        {t('contact.data.address.street')}, {t('contact.data.address.city')}
      </p>
      <a
        href="https://maps.google.com"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center text-blue-400 transition-colors hover:text-blue-300"
      >
        <Map className="mr-2 h-5 w-5" />
        In Google Maps öffnen
      </a>
    </div>
  );
};

export default MapOverlay;
