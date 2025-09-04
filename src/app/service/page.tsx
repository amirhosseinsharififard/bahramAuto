'use client';
import React from 'react';

import { CreditCard, FileText, Globe, Shield, Wrench } from 'lucide-react';

import AnimatedBackground from '@/components/AnimatedBackground';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { useLanguage } from '@/contexts/LanguageContext';

const ServicesPage = () => {
  const { language, setLanguage, t } = useLanguage();

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
    <div
      className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"
      dir={t('direction')}
    >
      <AnimatedBackground />
      <Header language={language} setLanguage={setLanguage} />

      <main className="relative z-10 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
              {t('services.title')}
            </h1>
            <p className="text-xl text-gray-300">{t('services.subtitle')}</p>
          </div>

          {/* Services Grid */}
          <div className="mb-20 grid grid-cols-1 gap-8 md:grid-cols-2">
            {serviceItems.map((service) => {
              const IconComponent = service.icon;
              // Simplified service data - using basic translation keys
              const serviceData = {
                title: t(`services.${service.key}.title`),
                description: t(`services.${service.key}.description`),
                features: [
                  t(`services.${service.key}.feature1`),
                  t(`services.${service.key}.feature2`),
                  t(`services.${service.key}.feature3`),
                ].filter((f) => f && !f.includes('services.')),
              };

              return (
                <div
                  key={service.key}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-gray-800/70 to-gray-900/80 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
                >
                  <div className={`bg-gradient-to-r ${service.color} p-6`}>
                    <div className="flex items-center space-x-4">
                      <div className="rounded-full bg-white/20 p-3">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-white">
                        {serviceData.title}
                      </h2>
                    </div>
                  </div>
                  <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/70 p-6">
                    <p className="mb-6 text-gray-300">
                      {serviceData.description}
                    </p>

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
            })}
          </div>

          {/* Process Section */}
          <div className="mb-20 rounded-2xl border border-white/10 bg-gradient-to-r from-indigo-900/80 via-purple-900/80 to-slate-900/80 p-8 text-white shadow-xl backdrop-blur-sm">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">
                {t('services.process.title')}
              </h2>
              <p className="text-blue-200">{t('services.process.subtitle')}</p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {[1, 2, 3].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-xl font-bold text-white shadow-lg">
                    {index + 1}
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-white">
                    {t(`services.process.step${index + 1}.title`)}
                  </h3>
                  <p className="text-blue-100 leading-relaxed">
                    {t(`services.process.step${index + 1}.description`)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
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
        </div>
      </main>

      <Footer language={language} />
    </div>
  );
};

export default ServicesPage;
