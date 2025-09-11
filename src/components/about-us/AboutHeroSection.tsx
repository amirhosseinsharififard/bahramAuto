'use client';

import Image from 'next/image';

interface AboutHeroSectionProps {
  t: (key: string) => string;
}

const AboutHeroSection = ({ t }: AboutHeroSectionProps) => {
  return (
    <>
      {/* Page header with enhanced styling */}
      <div className="mb-16 text-center">
        <div className="relative">
          {/* Animated background elements */}
          <div className="absolute -top-4 left-1/2 h-2 w-24 -translate-x-1/2 transform rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-60"></div>
          <h1 className="mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl lg:text-6xl">
            {t('about.title')}
          </h1>
        </div>
        <p className="mx-auto max-w-3xl text-xl text-gray-300 leading-relaxed">
          {t('about.subtitle')}
        </p>
      </div>

      {/* Hero Image Section with enhanced styling */}
      <div className="group relative mb-20 h-96 overflow-hidden rounded-3xl border border-white/20 shadow-2xl transition-all duration-500 hover:shadow-blue-500/20">
        <Image
          src="/images/showroom.jpg"
          alt="Bahram Autohaus Showroom"
          fill
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Enhanced gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/95 via-purple-900/70 to-transparent"></div>
        {/* Animated overlay elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

        {/* Enhanced overlay text */}
        <div className="absolute bottom-8 left-8 max-w-2xl text-white">
          <div className="mb-4 flex items-center">
            <div className="mr-3 h-1 w-12 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"></div>
            <span className="text-sm font-medium text-blue-300 uppercase tracking-wider">
              Our Story
            </span>
          </div>
          <h2 className="mb-4 text-3xl font-bold leading-tight lg:text-4xl">
            {t('about.story.title')}
          </h2>
          <p className="text-lg text-gray-200 leading-relaxed">
            {t('about.story.description')}
          </p>
        </div>

        {/* Decorative corner elements */}
        <div className="absolute top-4 right-4 h-8 w-8 rounded-full bg-white/10 backdrop-blur-sm"></div>
        <div className="absolute top-12 right-12 h-4 w-4 rounded-full bg-blue-400/30"></div>
      </div>
    </>
  );
};

export default AboutHeroSection;
