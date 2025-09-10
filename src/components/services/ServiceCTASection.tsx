'use client';

import { FileText } from 'lucide-react';

interface ServiceCTASectionProps {
  t: (key: string) => string;
}

const ServiceCTASection = ({ t }: ServiceCTASectionProps) => {
  return (
    <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-blue-800/30 to-purple-800/30 p-8 shadow-lg backdrop-blur-sm">
      <div className="flex flex-col items-center text-center">
        <div className="mb-6 rounded-full bg-blue-500/20 p-4">
          <FileText className="h-10 w-10 text-blue-400" />
        </div>
        <h2 className="mb-4 text-3xl font-bold text-white">
          {t('services.cta.title')}
        </h2>
        <p className="mb-8 max-w-2xl text-gray-300">
          {t('services.cta.description')}
        </p>
        <a
          href="/contact-us"
          className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30"
        >
          {t('services.cta.button')}
        </a>
      </div>
    </div>
  );
};

export default ServiceCTASection;
