'use client';

import ProcessStep from './ProcessStep';

interface ServiceProcessSectionProps {
  t: (key: string) => string;
}

const ServiceProcessSection = ({ t }: ServiceProcessSectionProps) => {
  return (
    <div className="mb-20 rounded-2xl border border-white/10 bg-gradient-to-r from-indigo-900/80 via-purple-900/80 to-slate-900/80 p-8 text-white shadow-xl backdrop-blur-sm">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold">
          {t('services.process.title')}
        </h2>
        <p className="text-blue-200">{t('services.process.subtitle')}</p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {[1, 2, 3].map((stepNumber) => (
          <ProcessStep key={stepNumber} t={t} stepNumber={stepNumber} />
        ))}
      </div>
    </div>
  );
};

export default ServiceProcessSection;
