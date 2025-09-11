'use client';

import AnimatedBackground from '@/components/AnimatedBackground';
import { Footer, Header } from '@/components/layout';
import {
  ServiceCTASection,
  ServiceGridSection,
  ServiceHeroSection,
  ServiceProcessSection,
} from '@/components/services';
import { useLanguage } from '@/contexts/LanguageContext';

const ServicesPage = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"
      dir={t('direction')}
    >
      <AnimatedBackground />
      <Header language={language} setLanguage={setLanguage} />

      <main className="relative z-10 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ServiceHeroSection t={t} />
          <ServiceGridSection t={t} />
          <ServiceProcessSection t={t} />
          <ServiceCTASection t={t} />
        </div>
      </main>

      <Footer language={language} />
    </div>
  );
};

export default ServicesPage;
