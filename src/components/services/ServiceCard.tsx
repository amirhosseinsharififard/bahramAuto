'use client';

import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  t: (key: string) => string;
  icon: LucideIcon;
  serviceKey: string;
  color: string;
}

const ServiceCard = ({
  t,
  icon: IconComponent,
  serviceKey,
  color,
}: ServiceCardProps) => {
  const serviceData = {
    title: t(`services.${serviceKey}.title`),
    description: t(`services.${serviceKey}.description`),
    features: [
      t(`services.${serviceKey}.feature1`),
      t(`services.${serviceKey}.feature2`),
      t(`services.${serviceKey}.feature3`),
    ].filter((f) => f && !f.includes('services.')),
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-gray-800/70 to-gray-900/80 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
      <div className={`bg-gradient-to-r ${color} p-6`}>
        <div className="flex items-center space-x-4">
          <div className="rounded-full bg-white/20 p-3">
            <IconComponent className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white">{serviceData.title}</h2>
        </div>
      </div>
      <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/70 p-6">
        <p className="mb-6 text-gray-300">{serviceData.description}</p>

        <h3 className="mb-4 text-lg font-semibold text-white">
          {t('services.features.title')}
        </h3>
        <ul className="mb-6 space-y-3">
          {serviceData.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className="mr-3 mt-1 h-2 w-2 rounded-full bg-blue-500"></div>
              <span className="text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>

        <button className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 py-3 font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30">
          {t('services.learnMore')}
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
