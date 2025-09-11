'use client';

import { LucideIcon } from 'lucide-react';

interface CarSpecItemProps {
  t: (key: string) => string;
  icon: LucideIcon;
  labelKey: string;
  value: string;
}

const CarSpecItem = ({
  t,
  icon: IconComponent,
  labelKey,
  value,
}: CarSpecItemProps) => {
  return (
    <div>
      <div className="flex items-center gap-2">
        <IconComponent className="h-4 w-4 text-gray-400" />
        <div>
          <p className="text-sm text-gray-400">{t(labelKey)}</p>
          <p className="font-medium text-white">{value}</p>
        </div>
      </div>
    </div>
  );
};

export default CarSpecItem;
