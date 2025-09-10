'use client';

import { CheckCircle } from 'lucide-react';

interface ValuesSectionProps {
  t: (key: string) => string;
}

const ValuesSection = ({ t }: ValuesSectionProps) => {
  return (
    <div className="mb-20 rounded-2xl border border-white/10 bg-gradient-to-r from-indigo-900/80 via-purple-900/80 to-slate-900/80 p-8 text-white shadow-xl backdrop-blur-sm">
      {/* Section header */}
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold">{t('about.values.title')}</h2>
        <p className="text-blue-200">{t('about.values.subtitle')}</p>
      </div>

      {/* Values grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {[0, 1, 2, 3].map((index) => (
          <div
            key={index}
            className="rounded-xl bg-white/10 p-6 backdrop-blur-sm"
          >
            {/* Value icon */}
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-500/20">
              <CheckCircle className="h-8 w-8 text-blue-400" />
            </div>
            {/* Value title */}
            <h3 className="mb-2 text-xl font-bold text-white">
              {t(`about.values.${index}.title`)}
            </h3>
            {/* Value description */}
            <p className="text-blue-100">
              {t(`about.values.${index}.description`)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ValuesSection;
