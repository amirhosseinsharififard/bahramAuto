"use client";

import React from "react";

import { Car, Mail, MapPin, Phone, Star } from "lucide-react";
import Link from "next/link";

interface FooterProps {
  language: string;
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  const content = {
    de: {
      contact: "Kontakt",
      address: "Adresse",
      company: {
        description:
          "Seit über 15 Jahren Ihr vertrauensvoller Partner für Premium-Fahrzeuge. Qualität, Service und Kundenzufriedenheit stehen bei uns an erster Stelle.",
        rating: "4.9/5 (482 Bewertungen)",
      },
      services: {
        financing: "Finanzierung & Leasing",
        warranty: "Garantie & Service",
        tradeIn: "Inzahlungnahme",
        export: "Export weltweit",
      },
      legal: {
        title: "Rechtliches",
        privacy: "Datenschutz",
        terms: "AGB",
        imprint: "Impressum",
      },
      certifications: {
        title: "Zertifiziert durch:",
        tuv: "TÜV SÜD",
        dekra: "DEKRA",
        association: "Autohändler-Verband",
      },
      copyright: "© 2024 Bahram Autohaus. Alle Rechte vorbehalten.",
      contactInfo: {
        phone: "+49 221 123 4567",
        phoneHours: "Mo-Fr: 9:00-18:00",
        email: "info@bahramautohaus.de",
        emailSupport: "24/7 E-Mail Support",
        address: {
          street: "Musterstraße 123",
          city: "50667 Köln",
          country: "Deutschland",
        },
      },
      servicesTitle: "Services & Info",
    },
    fa: {
      contact: "تماس",
      address: "آدرس",
      company: {
        description:
          "بیش از ۱۵ سال شریک قابل اعتماد شما برای خودروهای پریمیوم. کیفیت، خدمات و رضایت مشتری در اولویت ماست.",
        rating: "۴.۹/۵ (۴۸۲ نظر)",
      },
      services: {
        financing: "تامین مالی و لیزینگ",
        warranty: "ضمانت و خدمات",
        tradeIn: "تحویل خودرو قدیمی",
        export: "صادرات جهانی",
      },
      legal: {
        title: "قانونی",
        privacy: "حریم خصوصی",
        terms: "شرایط و ضوابط",
        imprint: "مشخصات",
      },
      certifications: {
        title: "تایید شده توسط:",
        tuv: "TÜV SÜD",
        dekra: "DEKRA",
        association: "انجمن فروشندگان خودرو",
      },
      copyright: "© ۲۰۲۴ بهرام اتوهاوس. تمامی حقوق محفوظ است.",
      contactInfo: {
        phone: "+49 221 123 4567",
        phoneHours: "دوشنبه تا جمعه: ۹:۰۰-۱۸:۰۰",
        email: "info@bahramautohaus.de",
        emailSupport: "پشتیبانی ایمیل ۲۴/۷",
        address: {
          street: "خیابان نمونه ۱۲۳",
          city: "۵۰۶۶۷ کلن",
          country: "آلمان",
        },
      },
      servicesTitle: "خدمات و اطلاعات",
    },
  };

  const t = content[language as keyof typeof content];

  return (
    <footer className="relative z-10 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 py-12 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="mb-6 flex items-center space-x-3">
              <div className="rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 p-3">
                <Car className="h-8 w-8 text-white" />
              </div>
              <div>
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-2xl font-bold text-transparent">
                  Bahram Autohaus
                </span>
                <p className="text-sm text-gray-400">
                  Premium Cars Deutschland
                </p>
              </div>
            </div>
            <p className="mb-6 max-w-md text-gray-300">
              {t.company.description}
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-sm">
                <Star className="h-5 w-5 fill-current text-yellow-400" />
                <Star className="h-5 w-5 fill-current text-yellow-400" />
                <Star className="h-5 w-5 fill-current text-yellow-400" />
                <Star className="h-5 w-5 fill-current text-yellow-400" />
                <Star className="h-5 w-5 fill-current text-yellow-400" />
                <span className="ml-2 text-gray-300">{t.company.rating}</span>
              </div>
            </div>
          </div>

          {/* Kontaktinfo */}
          <div>
            <h3 className="mb-6 text-xl font-bold text-white">{t.contact}</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-blue-400" />
                <div>
                  <p className="font-medium text-white">
                    {t.contactInfo.phone}
                  </p>
                  <p className="text-sm text-gray-400">
                    {t.contactInfo.phoneHours}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-blue-400" />
                <div>
                  <p className="text-white">{t.contactInfo.email}</p>
                  <p className="text-sm text-gray-400">
                    {t.contactInfo.emailSupport}
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-blue-400" />
                <div>
                  <p className="text-white">{t.contactInfo.address.street}</p>
                  <p className="text-white">{t.contactInfo.address.city}</p>
                  <p className="text-sm text-gray-400">
                    {t.contactInfo.address.country}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Services & Legal */}
          <div>
            <h3 className="mb-6 text-xl font-bold text-white">
              {t.servicesTitle}
            </h3>
            <div className="space-y-3">
              <Link
                href="/service"
                className="block text-gray-400 transition-colors hover:text-blue-400"
              >
                {t.services.financing}
              </Link>
              <Link
                href="/service"
                className="block text-gray-400 transition-colors hover:text-blue-400"
              >
                {t.services.warranty}
              </Link>
              <Link
                href="/service"
                className="block text-gray-400 transition-colors hover:text-blue-400"
              >
                {t.services.tradeIn}
              </Link>
              <Link
                href="/service"
                className="block text-gray-400 transition-colors hover:text-blue-400"
              >
                {t.services.export}
              </Link>
              <div className="border-t border-gray-700 pt-4">
                <h4 className="mb-3 text-lg font-semibold text-white">
                  {t.legal.title}
                </h4>
                <div className="space-y-2">
                  <a
                    href="#privacy"
                    className="block text-sm text-gray-400 transition-colors hover:text-blue-400"
                  >
                    {t.legal.privacy}
                  </a>
                  <a
                    href="#terms"
                    className="block text-sm text-gray-400 transition-colors hover:text-blue-400"
                  >
                    {t.legal.terms}
                  </a>
                  <a
                    href="#imprint"
                    className="block text-sm text-gray-400 transition-colors hover:text-blue-400"
                  >
                    {t.legal.imprint}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="text-sm text-gray-400">{t.copyright}</p>
            <div className="mt-4 flex items-center space-x-6 md:mt-0">
              <span className="text-sm text-gray-400">
                {t.certifications.title}
              </span>
              <div className="flex space-x-4">
                <div className="rounded bg-gray-800 px-3 py-1 text-xs text-gray-300">
                  {t.certifications.tuv}
                </div>
                <div className="rounded bg-gray-800 px-3 py-1 text-xs text-gray-300">
                  {t.certifications.dekra}
                </div>
                <div className="rounded bg-gray-800 px-3 py-1 text-xs text-gray-300">
                  {t.certifications.association}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
