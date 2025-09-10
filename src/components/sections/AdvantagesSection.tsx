'use client';

import { Award, Shield, Users } from 'lucide-react';

interface AdvantagesSectionProps {
  t: (key: string) => string;
  translations: any;
  language: string;
}

const AdvantagesSection = ({
  t,
  translations,
  language,
}: AdvantagesSectionProps) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 py-20">
      {/* Animated background elements for visual appeal */}
      <div className="absolute inset-0">
        <div className="absolute left-10 top-10 h-72 w-72 animate-pulse rounded-full bg-blue-500/10 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 h-96 w-96 animate-pulse rounded-full bg-purple-500/10 blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text py-2 text-5xl font-bold text-transparent">
            {t('advantages.title')}
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-300">
            {t('advantages.subtitle')}
          </p>
        </div>

        {/* Advantages grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {translations[language].advantageItems.map(
            (advantage: any, index: number) => {
              // Dynamic icon selection based on advantage type
              const IconComponent =
                advantage?.[index].icon === 'Shield'
                  ? Shield
                  : advantage?.[index].icon === 'Award'
                    ? Award
                    : advantage?.[index].icon === 'Users'
                      ? Users
                      : Shield; // Default to Shield icon

              const title = advantage?.[index]?.title;
              const description = advantage?.[index]?.description;

              return (
                <div
                  key={index}
                  className="group relative h-full transform transition-all duration-500 hover:scale-105"
                >
                  {/* Advantage card */}
                  <div className="flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:shadow-purple-500/20">
                    {/* Icon container with animated effects */}
                    <div className="relative mb-8 flex justify-center">
                      <div className="relative">
                        {/* Glow effect behind icon */}
                        <div className="absolute inset-0 scale-125 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-50 blur-lg transition-opacity duration-500 group-hover:opacity-100"></div>
                        {/* Icon container with rotation effect */}
                        <div className="relative transform rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-6 shadow-2xl transition-all duration-500 group-hover:rotate-6 group-hover:shadow-blue-500/50">
                          <IconComponent className="relative z-10 h-10 w-10 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Content area */}
                    <div className="relative z-10 flex flex-1 flex-col justify-center text-center">
                      <h3 className="mb-4 text-2xl font-bold text-white transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent">
                        {title}
                      </h3>
                      <p className="flex-1 leading-relaxed text-gray-300 transition-colors duration-500 group-hover:text-white">
                        {description}
                      </p>
                    </div>

                    {/* Hover overlay effect */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
