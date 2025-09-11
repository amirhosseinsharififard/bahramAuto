'use client';

import { CreditCard, Globe, Shield, Wrench } from 'lucide-react';

import ServiceCard from './ServiceCard';

interface ServiceGridSectionProps {
  t: (key: string) => string;
}

const ServiceGridSection = ({ t }: ServiceGridSectionProps) => {
  const serviceItems = [
    {
      icon: CreditCard,
      key: 'financing',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Shield,
      key: 'warranty',
      color: 'from-green-500 to-teal-500',
    },
    {
      icon: Wrench,
      key: 'tradeIn',
      color: 'from-amber-500 to-orange-500',
    },
    {
      icon: Globe,
      key: 'export',
      color: 'from-purple-500 to-indigo-500',
    },
  ];

  return (
    <div className="mb-20 grid grid-cols-1 gap-8 md:grid-cols-2">
      {serviceItems.map((service) => (
        <ServiceCard
          key={service.key}
          t={t}
          icon={service.icon}
          serviceKey={service.key}
          color={service.color}
        />
      ))}
    </div>
  );
};

export default ServiceGridSection;
