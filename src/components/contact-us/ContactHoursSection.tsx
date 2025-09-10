'use client';

import { Map, Wrench } from 'lucide-react';

import HoursItem from './HoursItem';

interface ContactHoursSectionProps {
  t: (key: string) => string;
}

const ContactHoursSection = ({ t }: ContactHoursSectionProps) => {
  return (
    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-gray-800/70 to-gray-900/80 p-8 shadow-xl backdrop-blur-md">
      <h2 className="mb-6 text-2xl font-bold text-white">
        {t('contact.info.hours')}
      </h2>

      <div className="space-y-4">
        <HoursItem
          t={t}
          icon={Map}
          titleKey="contact.info.showroom"
          hoursKey="contact.data.hours.showroom"
        />
        <HoursItem
          t={t}
          icon={Wrench}
          titleKey="contact.info.service"
          hoursKey="contact.data.hours.service"
        />
      </div>
    </div>
  );
};

export default ContactHoursSection;
