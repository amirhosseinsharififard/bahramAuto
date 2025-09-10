'use client';

import { LucideIcon } from 'lucide-react';

interface ContactInfoItemProps {
  t: (key: string) => string;
  icon: LucideIcon;
  titleKey: string;
  contentKey: string;
  iconColor?: string;
}

const ContactInfoItem = ({
  t,
  icon: IconComponent,
  titleKey,
  contentKey,
  iconColor = 'bg-blue-500/20 text-blue-400',
}: ContactInfoItemProps) => {
  return (
    <div className="flex items-start gap-4">
      <div
        className={`mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full ${iconColor}`}
      >
        <IconComponent className="h-6 w-6" />
      </div>
      <div>
        <h3 className="mb-1 font-medium text-white">{t(titleKey)}</h3>
        <p className="text-gray-300">{t(contentKey)}</p>
      </div>
    </div>
  );
};

export default ContactInfoItem;
