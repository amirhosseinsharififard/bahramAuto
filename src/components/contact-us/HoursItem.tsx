'use client';

import { LucideIcon } from 'lucide-react';

interface HoursItemProps {
  t: (key: string) => string;
  icon: LucideIcon;
  titleKey: string;
  hoursKey: string;
}

const HoursItem = ({
  t,
  icon: IconComponent,
  titleKey,
  hoursKey,
}: HoursItemProps) => {
  return (
    <div className="flex items-center justify-between border-b border-gray-700/50 pb-4 last:border-b-0 last:pb-0">
      <div className="flex items-center gap-4">
        <div className="mr-3 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-500/20">
          <IconComponent className="h-5 w-5 text-blue-400" />
        </div>
        <h3 className="font-medium text-white">{t(titleKey)}</h3>
      </div>
      <p className="text-gray-300">{t(hoursKey)}</p>
    </div>
  );
};

export default HoursItem;
