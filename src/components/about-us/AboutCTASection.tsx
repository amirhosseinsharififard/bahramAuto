'use client';

import { Globe } from 'lucide-react';
import Link from 'next/link';

interface AboutCTASectionProps {
  t: (key: string) => string;
}

const AboutCTASection = ({ t }: AboutCTASectionProps) => {
  return (
    <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-blue-800/30 to-purple-800/30 p-8 shadow-lg backdrop-blur-sm">
      <div className="flex flex-col items-center text-center">
        {/* CTA icon */}
        <div className="mb-6 rounded-full bg-blue-500/20 p-4">
          <Globe className="h-10 w-10 text-blue-400" />
        </div>
        {/* CTA title */}
        <h2 className="mb-4 text-3xl font-bold text-white">
          {t('about.cta.title')}
        </h2>
        {/* CTA description */}
        <p className="mb-8 max-w-2xl text-gray-300">
          {t('about.cta.description')}
        </p>
        {/* CTA button */}
        <Link
          href="/contact-us"
          className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30"
        >
          {t('about.cta.button')}
        </Link>
      </div>
    </div>
  );
};

export default AboutCTASection;
