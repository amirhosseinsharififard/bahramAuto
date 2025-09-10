'use client';
import React, { useState } from 'react';

import { Car, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useLanguage } from '@/contexts/LanguageContext';

/**
 * Header component props interface
 * @interface HeaderProps
 * @property {string} language - Current language setting ('de' or 'fa')
 * @property {function} setLanguage - Function to change language setting
 */
interface HeaderProps {
  language: 'de' | 'fa';
  setLanguage: (lang: 'de' | 'fa') => void;
}

/**
 * Header component for the Bahram Autohaus website
 * Features responsive navigation, language switching, and mobile menu
 * @param {HeaderProps} props - Component props
 * @returns {JSX.Element} Header component
 */
const Header: React.FC<HeaderProps> = ({ language, setLanguage }) => {
  // State for mobile menu visibility
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Get current pathname for active link highlighting
  const pathname = usePathname();

  // Get translation function from language context
  const { t } = useLanguage();

  // Navigation items with translated labels and icons
  const navigation = [
    { href: '/', label: t('nav.home'), icon: '🏠' },
    { href: '/gallery', label: t('nav.gallery'), icon: '🚗' },
    { href: '/service', label: t('nav.services'), icon: '🔧' },
    { href: '/about-us', label: t('nav.about'), icon: 'ℹ️' },
    { href: '/contact-us', label: t('nav.contact'), icon: '📞' },
  ];

  return (
    <header className="relative z-50 border-b border-white/10 bg-gradient-to-r from-gray-900/90 to-blue-900/90 shadow-lg backdrop-blur-md transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Company Logo and Branding */}
          <Link
            href="/"
            className="group flex cursor-pointer items-center gap-3"
          >
            {/* Animated logo icon with hover effects */}
            <div className="rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 p-3 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl flex-shrink-0">
              <Car className="h-8 w-8 text-white transition-transform duration-300 group-hover:rotate-12" />
            </div>
            {/* Company name and tagline */}
            <div className="text-left min-w-0">
              <h1 className="text-xl font-bold text-white truncate">
                Bahram Autohaus
              </h1>
              <p className="text-xs text-blue-200 truncate">
                Premium Cars Deutschland
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Menu */}
          <nav className="hidden md:flex md:gap-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative rounded-lg px-4 py-2 font-medium transition-all duration-300 ${
                  pathname === item.href ? 'text-blue-400' : 'text-gray-300'
                }`}
              >
                {item.label}
                {/* Animated underline effect on hover */}
                <span
                  className={`absolute bottom-0 left-1/2 h-0.5 w-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:left-0 group-hover:w-full`}
                />
              </Link>
            ))}
          </nav>

          {/* Language Switcher and Mobile Menu Controls */}
          <div className="flex items-center gap-4">
            {/* Desktop Language Switcher */}
            <div className="hidden md:flex md:gap-2">
              <button
                onClick={() => setLanguage('de')}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-all duration-300 ${
                  language === 'de'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                DE
              </button>
              <button
                onClick={() => setLanguage('fa')}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-all duration-300 ${
                  language === 'fa'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                FA
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-lg bg-white/10 p-2 text-white transition-colors hover:bg-white/20 md:hidden"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="border-t border-white/10 py-4 md:hidden">
            <nav className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex transform items-center gap-3 rounded-lg px-4 py-3 transition-all duration-300 hover:translate-x-2 hover:bg-blue-900/30 ${
                    pathname === item.href
                      ? 'bg-blue-900/30 text-blue-400'
                      : 'text-gray-300 hover:text-blue-400'
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                </Link>
              ))}
            </nav>

            {/* Mobile Language Switch */}
            <div className="mt-4 flex gap-2 border-t border-white/10 pt-4">
              <button
                onClick={() => {
                  setLanguage('de');
                  setMobileMenuOpen(false);
                }}
                className={`flex-1 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-300 ${
                  language === 'de'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Deutsch
              </button>
              <button
                onClick={() => {
                  setLanguage('fa');
                  setMobileMenuOpen(false);
                }}
                className={`flex-1 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-300 ${
                  language === 'fa'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                فارسی
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
