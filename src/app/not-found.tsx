'use client';

import { useState } from 'react';

import Link from 'next/link';

export default function NotFound() {
  const [language, setLanguage] = useState('de');

  const content = {
    de: {
      title: '404',
      subtitle: 'Seite nicht gefunden',
      description: 'Die gesuchte Seite existiert nicht.',
      backButton: 'Zurück zur Startseite',
      language: {
        de: 'Deutsch',
        fa: 'فارسی',
      },
    },
    fa: {
      title: '۴۰۴',
      subtitle: 'صفحه مورد نظر یافت نشد',
      description: 'صفحه‌ای که به دنبال آن هستید وجود ندارد.',
      backButton: 'بازگشت به صفحه اصلی',
      language: {
        de: 'آلمانی',
        fa: 'فارسی',
      },
    },
  };

  const t = content[language as keyof typeof content];

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="text-center">
        {/* Language Switcher */}
        <div className="absolute right-8 top-8">
          <div className="flex items-center space-x-2 rounded-xl border border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100 p-1 shadow-lg">
            <button
              onClick={() => setLanguage('de')}
              className={`relative flex items-center space-x-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                language === 'de'
                  ? 'scale-105 transform bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'text-gray-700 hover:bg-white hover:text-blue-600 hover:shadow-md'
              }`}
            >
              <span className="text-xs">🇩🇪</span>
              <span className="hidden sm:inline">{t.language.de}</span>
              <span className="sm:hidden">DE</span>
            </button>
            <button
              onClick={() => setLanguage('fa')}
              className={`relative flex items-center space-x-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                language === 'fa'
                  ? 'scale-105 transform bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'text-gray-700 hover:bg-white hover:text-blue-600 hover:shadow-md'
              }`}
            >
              <span className="text-xs">🇮🇷</span>
              <span className="hidden sm:inline">{t.language.fa}</span>
              <span className="sm:hidden">FA</span>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="mx-auto max-w-md px-4">
          <h1 className="mb-4 text-6xl font-bold text-gray-900">{t.title}</h1>
          <h2 className="mb-4 text-2xl font-semibold text-gray-700">
            {t.subtitle}
          </h2>
          <p className="mb-8 text-gray-600">{t.description}</p>
          <Link
            href="/"
            className="inline-block rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            {t.backButton}
          </Link>
        </div>
      </div>
    </div>
  );
}
