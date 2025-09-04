'use client';

import React from 'react';

import { Car, Mail, MapPin, Phone, Star } from 'lucide-react';
import Link from 'next/link';

import { useLanguage } from '@/contexts/LanguageContext';

/**
 * Footer component props interface
 * @interface FooterProps
 * @property {string} language - Current language setting
 */
interface FooterProps {
  language: string;
}

/**
 * Footer component for the Bahram Autohaus website
 * Displays company information, contact details, services, and legal links
 * @param {FooterProps} props - Component props
 * @returns {JSX.Element} Footer component
 */
const Footer: React.FC<FooterProps> = ({ language }) => {
  // Get translation function and translations from language context
  const { t, translations } = useLanguage();

  return (
    <footer className="relative z-10 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 py-12 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Information Section */}
          <div className="lg:col-span-2">
            <div className="mb-6 flex items-center space-x-3">
              <div className="rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 p-3">
                <Car className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  {t('footer.company.name')}
                </h3>
                <p className="text-sm text-gray-300">
                  {t('footer.company.description')}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <Star className="h-5 w-5 fill-current text-yellow-400" />
              <Star className="h-5 w-5 fill-current text-yellow-400" />
              <Star className="h-5 w-5 fill-current text-yellow-400" />
              <Star className="h-5 w-5 fill-current text-yellow-400" />
              <Star className="h-5 w-5 fill-current text-yellow-400" />
              <span className="ml-2 text-gray-300">
                {t('footer.company.rating')}
              </span>
            </div>
          </div>

          {/* Kontaktinfo */}
          <div>
            <h3 className="mb-6 text-xl font-bold text-white">
              {t('footer.contact')}
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-500/20">
                  <Phone className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-300">
                    {t('footer.contactInfo.phone')}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-500/20">
                  <Mail className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-300">
                    {t('footer.contactInfo.email')}
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-500/20">
                  <MapPin className="mt-1 h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-white">
                    {t('footer.contactInfo.address.street')}
                  </p>
                  <p className="text-white">
                    {t('footer.contactInfo.address.city')}
                  </p>
                  <p className="text-sm text-gray-400">
                    {t('footer.contactInfo.address.country')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Services & Legal */}
          <div className="space-y-6">
            <div>
              <h3 className="mb-4 text-lg font-semibold text-white">
                {t('footer.services')}
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/gallery"
                    className="text-sm text-gray-300 transition-colors hover:text-blue-400"
                  >
                    {t('nav.gallery')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/service"
                    className="text-sm text-gray-300 transition-colors hover:text-blue-400"
                  >
                    {t('nav.services')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about-us"
                    className="text-sm text-gray-300 transition-colors hover:text-blue-400"
                  >
                    {t('nav.about')}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold text-white">
                {t('footer.legal')}
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-300 transition-colors hover:text-blue-400"
                  >
                    {t('footer.legal')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-300 transition-colors hover:text-blue-400"
                  >
                    {t('footer.privacy')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-300 transition-colors hover:text-blue-400"
                  >
                    {t('footer.imprint')}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-wrap items-center justify-center gap-4 text-center">
            <div className="rounded-lg bg-white/10 px-4 py-2 text-sm text-gray-300">
              TÜV Geprüft
            </div>
            <div className="rounded-lg bg-white/10 px-4 py-2 text-sm text-gray-300">
              ADAC Partner
            </div>
            <div className="rounded-lg bg-white/10 px-4 py-2 text-sm text-gray-300">
              Garantie
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-gray-400">{t('footer.copyright')}</p>
          <p className="mt-2 text-xs text-gray-500">
            Developed by Amir Hossein Shrififard
          </p>
          <p className="text-xs text-gray-500">
            Email: amirhosseinshrififard@gmail.com | Phone: +989172380487
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
