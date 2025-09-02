"use client";
import React, { useState } from "react";

import { Car, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface HeaderProps {
  language: string;
  setLanguage: (lang: string) => void;
}

const Header: React.FC<HeaderProps> = ({ language, setLanguage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const content = {
    de: {
      nav: {
        home: "Startseite",
        gallery: "Fahrzeuge",
        services: "Service",
        about: "Über uns",
        contact: "Kontakt",
      },
    },
    fa: {
      nav: {
        home: "صفحه اصلی",
        gallery: "خودروها",
        services: "خدمات",
        about: "درباره ما",
        contact: "تماس",
      },
    },
  };

  const t = content[language as keyof typeof content];

  const navigation = [
    { href: "/", label: t.nav.home, icon: "🏠" },
    { href: "/gallery", label: t.nav.gallery, icon: "🚗" },
    { href: "/service", label: t.nav.services, icon: "🔧" },
    { href: "/about-us", label: t.nav.about, icon: "ℹ️" },
    { href: "/contact-us", label: t.nav.contact, icon: "📞" },
  ];

  return (
    <header className="relative z-50 border-b border-white/10 bg-gradient-to-r from-gray-900/90 to-blue-900/90 shadow-lg backdrop-blur-md transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link
            href="/"
            className="group flex cursor-pointer items-center space-x-3"
          >
            <div className="rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 p-3 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
              <Car className="h-8 w-8 text-white transition-transform duration-300 group-hover:rotate-12" />
            </div>
            <div>
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-2xl font-bold text-transparent transition-all duration-300 group-hover:from-purple-400 group-hover:to-blue-400">
                Bahram Autohaus
              </span>
              <p className="text-xs text-gray-400 transition-colors duration-300 group-hover:text-blue-400">
                Premium Cars Deutschland
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-1 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative rounded-lg px-4 py-2 font-medium transition-all duration-300 ${
                  pathname === item.href ? "text-blue-400" : "text-gray-300"
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-1/2 h-0.5 w-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:left-0 group-hover:w-full`}
                />
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            {/* Language Switch */}
            <div className="flex items-center space-x-2 rounded-lg bg-gray-800/50 p-1">
              <button
                onClick={() => setLanguage("de")}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  language === "de"
                    ? "scale-105 transform bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
                    : "text-gray-300 hover:bg-gray-700/50 hover:text-gray-200"
                }`}
              >
                DE
              </button>
              <button
                onClick={() => setLanguage("fa")}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  language === "fa"
                    ? "scale-105 transform bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
                    : "text-gray-300 hover:bg-gray-700/50 hover:text-gray-200"
                }`}
              >
                FA
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-lg p-2 text-gray-300 transition-all duration-300 hover:bg-blue-900/50 hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 lg:hidden"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 rotate-90 transition-transform duration-300" />
              ) : (
                <Menu className="h-6 w-6 transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
            mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-white/10 pb-4 pt-4">
            <div className="flex flex-col space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex transform items-center space-x-3 rounded-lg px-4 py-3 transition-all duration-300 hover:translate-x-2 hover:bg-blue-900/30 ${
                    pathname === item.href
                      ? "bg-blue-900/30 text-blue-400"
                      : "text-gray-300 hover:text-blue-400"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
