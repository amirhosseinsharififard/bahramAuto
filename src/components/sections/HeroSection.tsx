'use client';

import { PlayCircle } from 'lucide-react';
import Link from 'next/link';

interface HeroSectionProps {
  t: (key: string) => string;
  onVideoClick: () => void;
}

const HeroSection = ({ t, onVideoClick }: HeroSectionProps) => {
  return (
    <section id="home" className="relative overflow-hidden py-24">
      {/* Dark gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90"></div>

      {/* Hero background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/images/cars/hero-bg.jpg)',
        }}
      ></div>

      {/* Hero content container */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Hero text content */}
          <div className="text-center lg:text-left">
            {/* Main headline */}
            <h1 className="mb-4 text-4xl font-bold leading-tight text-white sm:mb-6 sm:text-5xl lg:text-6xl xl:text-7xl">
              {t('hero.title')}
            </h1>

            {/* Subtitle */}
            <p className="mb-3 text-lg text-white/90 sm:mb-4 sm:text-xl lg:text-2xl">
              {t('hero.subtitle')}
            </p>

            {/* Description */}
            <p className="mx-auto mb-6 max-w-xl text-base text-white/80 sm:mb-8 sm:text-lg lg:mx-0">
              {t('hero.description')}
            </p>

            {/* Call-to-action buttons */}
            <div className="mb-6 flex flex-col justify-center gap-3 sm:mb-8 sm:flex-row sm:gap-4 lg:justify-start">
              {/* Primary CTA - View Gallery */}
              <Link
                href="/gallery"
                className="transform rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-base font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-xl sm:px-8 sm:py-4 sm:text-lg"
              >
                {t('hero.cta')}
              </Link>

              {/* Secondary CTA - Watch Video */}
              <button
                onClick={onVideoClick}
                className="rounded-full border border-white/30 bg-white/20 px-6 py-3 text-base font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/30 sm:px-8 sm:py-4 sm:text-lg"
              >
                <PlayCircle className="mr-2 inline-block h-4 w-4 sm:h-5 sm:w-5" />
                {t('hero.videoButton')}
              </button>
            </div>
          </div>

          {/* Company Statistics */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
            {/* Cars Sold Statistic */}
            <div className="rounded-2xl bg-white/10 p-4 text-center backdrop-blur-sm sm:p-6">
              <div className="mb-2 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                2500+
              </div>
              <div className="text-xs text-white/80 sm:text-sm">
                {t('hero.stats.sold')}
              </div>
            </div>

            {/* Customers Statistic */}
            <div className="rounded-2xl bg-white/10 p-4 text-center backdrop-blur-sm sm:p-6">
              <div className="mb-2 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                1800+
              </div>
              <div className="text-xs text-white/80 sm:text-sm">
                {t('hero.stats.customers')}
              </div>
            </div>

            {/* Years of Experience Statistic */}
            <div className="rounded-2xl bg-white/10 p-4 text-center backdrop-blur-sm sm:p-6">
              <div className="mb-2 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                15+
              </div>
              <div className="text-xs text-white/80 sm:text-sm">
                {t('hero.stats.experience')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
