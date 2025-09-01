"use client";

import React, { useState } from "react";

import {
  Award,
  Car,
  Eye,
  Heart,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  PlayCircle,
  Search,
  Shield,
  Star,
  Users,
  X,
} from "lucide-react";
import Image from "next/image";

const BahramAutohaus = () => {
  const [language, setLanguage] = useState("de");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("alle");
  const [searchTerm, setSearchTerm] = useState("");

  const content = {
    de: {
      nav: {
        home: "Startseite",
        gallery: "Fahrzeuge",
        services: "Service",
        about: "Über uns",
        contact: "Kontakt",
      },
      hero: {
        title: "Bahram Autohaus",
        subtitle: "Ihr Premium Partner für Qualitätsfahrzeuge in Deutschland",
        description:
          "Seit über 15 Jahren Ihr vertrauensvoller Spezialist für deutsche und europäische Premiumfahrzeuge.",
        cta: "Fahrzeuge entdecken",
      },
      highlights: {
        title: "Aktuelle Top-Angebote",
        subtitle: "Handverlesene Premium-Fahrzeuge",
        viewAll: "Alle Fahrzeuge ansehen",
        financing: "Finanzierung ab",
        month: "/Monat",
      },
      advantages: {
        title: "Warum Bahram Autohaus?",
        subtitle: "Ihre Vorteile bei uns",
      },
      footer: {
        contact: "Kontakt",
        address: "Adresse",
        legal: "Rechtliches",
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
      hero: {
        title: "بهرام اتوهاوس",
        subtitle: "شریک برتر شما برای خودروهای باکیفیت در آلمان",
        description:
          "بیش از ۱۵ سال متخصص قابل اعتماد شما برای خودروهای پریمیوم آلمانی و اروپایی.",
        cta: "کشف خودروها",
      },
      highlights: {
        title: "بهترین پیشنهادات فعلی",
        subtitle: "خودروهای پریمیوم دست‌چین",
        viewAll: "مشاهده همه خودروها",
        financing: "تامین مالی از",
        month: "/ماه",
      },
      advantages: {
        title: "چرا بهرام اتوهاوس؟",
        subtitle: "مزایای شما نزد ما",
      },
      footer: {
        contact: "تماس",
        address: "آدرس",
        legal: "قانونی",
      },
    },
  };

  const advantageItems = [
    {
      icon: Shield,
      titleDe: "100% Geprüfte Qualität",
      titleFa: "کیفیت ۱۰۰٪ تضمینی",
      descriptionDe:
        "Alle Fahrzeuge mit Garantie und ausführlicher Dokumentation",
      descriptionFa: "تمام خودروها با ضمانت و مستندات کامل",
    },
    {
      icon: Award,
      titleDe: "Faire Preise",
      titleFa: "قیمت منصفانه",
      descriptionDe: "Transparente Preisgestaltung ohne versteckte Kosten",
      descriptionFa: "قیمت‌گذاری شفاف بدون هزینه‌های پنهان",
    },
    {
      icon: Users,
      titleDe: "Persönliche Beratung",
      titleFa: "مشاوره شخصی",
      descriptionDe: "Kompetente Beratung auf Deutsch, Englisch und Farsi",
      descriptionFa: "مشاوره متخصص به زبان‌های آلمانی، انگلیسی و فارسی",
    },
  ];

  const cars = [
    {
      id: 1,
      brand: "BMW",
      model: "X5 M50d",
      year: 2023,
      price: "78,900",
      financing: "499",
      mileage: "15,000",
      fuel: "Diesel",
      transmission: "Automatik",
      image: "/images/cars/bmw-x5.jpg",
      features: ["M-Paket", "Panorama", "HUD", "Harman Kardon"],
      category: "suv",
    },
    {
      id: 2,
      brand: "Mercedes",
      model: "C63 AMG",
      year: 2024,
      price: "95,500",
      financing: "649",
      mileage: "8,500",
      fuel: "Benzin",
      transmission: "Automatik",
      image: "/images/cars/mercedes-c63.jpg",
      features: ["AMG Performance", "Burmester", "Distronic", "360° Kamera"],
      category: "sportwagen",
    },
    {
      id: 3,
      brand: "Audi",
      model: "RS6 Avant",
      year: 2023,
      price: "112,000",
      financing: "799",
      mileage: "12,000",
      fuel: "Benzin",
      transmission: "Automatik",
      image: "/images/cars/audi-rs6.jpg",
      features: [
        "RS Performance",
        "Virtual Cockpit",
        "Matrix LED",
        "B&O Sound",
      ],
      category: "kombi",
    },
    {
      id: 4,
      brand: "Porsche",
      model: "Cayenne Turbo",
      year: 2023,
      price: "145,000",
      financing: "999",
      mileage: "6,800",
      fuel: "Benzin",
      transmission: "PDK",
      image: "/images/cars/porsche-cayenne.jpg",
      features: ["Sport Chrono", "Luftfederung", "PASM", "Bose Surround"],
      category: "suv",
    },
    {
      id: 5,
      brand: "Tesla",
      model: "Model S Plaid",
      year: 2024,
      price: "119,990",
      financing: "829",
      mileage: "3,200",
      fuel: "Elektro",
      transmission: "Automatik",
      image: "/images/cars/tesla-model-s.jpg",
      features: ["Plaid Mode", "Autopilot", "21 Zoll Räder", "Premium Audio"],
      category: "limousine",
    },
    {
      id: 6,
      brand: "BMW",
      model: "M4 Competition",
      year: 2024,
      price: "89,900",
      financing: "599",
      mileage: "5,500",
      fuel: "Benzin",
      transmission: "Automatik",
      image: "/images/cars/bmw-m4.png",
      features: ["M Competition", "Carbon Paket", "M Driver Package", "HiFi"],
      category: "sportwagen",
    },
  ];

  const t = content[language as keyof typeof content];

  const filteredCars = cars.filter(
    (car) =>
      (selectedFilter === "alle" || car.category === selectedFilter) &&
      (car.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.model.toLowerCase().includes(searchTerm.toLowerCase())),
  );

  const scrollLeft = () => {
    const container = document.getElementById("car-slider");
    if (container) {
      container.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    const container = document.getElementById("car-slider");
    if (container) {
      container.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100"
      dir={language === "fa" ? "rtl" : "ltr"}
    >
      <style>{`
        #car-slider::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 shadow-lg backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 p-3">
                <Car className="h-8 w-8 text-white" />
              </div>
              <div>
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-2xl font-bold text-transparent">
                  Bahram Autohaus
                </span>
                <p className="text-xs text-gray-500">
                  Premium Cars Deutschland
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden space-x-8 lg:flex">
              <a
                href="#home"
                className="font-medium text-gray-700 transition-colors hover:text-blue-600"
              >
                {t.nav.home}
              </a>
              <a
                href="#gallery"
                className="font-medium text-gray-700 transition-colors hover:text-blue-600"
              >
                {t.nav.gallery}
              </a>
              <a
                href="#services"
                className="font-medium text-gray-700 transition-colors hover:text-blue-600"
              >
                {t.nav.services}
              </a>
              <a
                href="#about"
                className="font-medium text-gray-700 transition-colors hover:text-blue-600"
              >
                {t.nav.about}
              </a>
              <a
                href="#contact"
                className="font-medium text-gray-700 transition-colors hover:text-blue-600"
              >
                {t.nav.contact}
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              {/* Language Switch */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setLanguage("de")}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    language === "de"
                      ? "bg-blue-600 text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  DE
                </button>
                <button
                  onClick={() => setLanguage("fa")}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    language === "fa"
                      ? "bg-blue-600 text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  FA
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="rounded-md p-2 text-gray-600 hover:bg-gray-100 lg:hidden"
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
            <div className="border-t border-gray-200 pb-4 lg:hidden">
              <div className="flex flex-col space-y-2 pt-4">
                <a
                  href="#home"
                  className="rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100"
                >
                  {t.nav.home}
                </a>
                <a
                  href="#gallery"
                  className="rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100"
                >
                  {t.nav.gallery}
                </a>
                <a
                  href="#services"
                  className="rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100"
                >
                  {t.nav.services}
                </a>
                <a
                  href="#contact"
                  className="rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100"
                >
                  {t.nav.contact}
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section id="home" className="relative overflow-hidden py-24">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90"></div>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url(/images/cars/hero-bg.jpg)",
            }}
          ></div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <h1 className="mb-6 text-6xl leading-tight font-bold text-white md:text-7xl">
                  {t.hero.title}
                </h1>
                <p className="mb-4 text-2xl text-white/90">{t.hero.subtitle}</p>
                <p className="mb-8 max-w-xl text-lg text-white/80">
                  {t.hero.description}
                </p>
                <div className="mb-8 flex flex-wrap gap-4">
                  <button className="transform rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-lg font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-xl">
                    {t.hero.cta}
                  </button>
                  <button className="rounded-full border border-white/30 bg-white/20 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/30">
                    <PlayCircle className="mr-2 inline-block h-5 w-5" />
                    Video ansehen
                  </button>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                <div className="rounded-2xl bg-white/10 p-6 text-center backdrop-blur-sm">
                  <div className="mb-2 text-4xl font-bold text-white">
                    2500+
                  </div>
                  <div className="text-white/80">Verkaufte Fahrzeuge</div>
                </div>
                <div className="rounded-2xl bg-white/10 p-6 text-center backdrop-blur-sm">
                  <div className="mb-2 text-4xl font-bold text-white">
                    1800+
                  </div>
                  <div className="text-white/80">Zufriedene Kunden</div>
                </div>
                <div className="rounded-2xl bg-white/10 p-6 text-center backdrop-blur-sm">
                  <div className="mb-2 text-4xl font-bold text-white">15+</div>
                  <div className="text-white/80">Jahre Erfahrung</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Search & Filter Section */}
        <section className="bg-white py-8 shadow-sm">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
              <div className="relative flex-1">
                <Search className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
                <input
                  type="text"
                  placeholder="Marke oder Modell suchen..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full rounded-xl border border-gray-300 py-3 pr-4 pl-12 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {["alle", "limousine", "suv", "sportwagen", "kombi"].map(
                  (filter) => (
                    <button
                      key={filter}
                      onClick={() => setSelectedFilter(filter)}
                      className={`rounded-full px-4 py-2 font-medium transition-colors ${
                        selectedFilter === filter
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {filter.charAt(0).toUpperCase() + filter.slice(1)}
                    </button>
                  ),
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Fahrzeug-Highlights */}
        <section
          id="gallery"
          className="bg-gradient-to-br from-slate-800 via-gray-900 to-slate-900 py-16"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-5xl font-bold text-transparent">
                {t.highlights.title}
              </h2>
              <p className="text-xl text-gray-300">{t.highlights.subtitle}</p>
            </div>

            {/* Horizontal Scrolling Container with Arrow Controls */}
            <div className="relative">
              {/* Left Arrow */}
              <button
                onClick={scrollLeft}
                className="absolute top-1/2 left-0 z-20 -translate-y-1/2 transform rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:from-blue-500 hover:to-purple-500"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              {/* Right Arrow */}
              <button
                onClick={scrollRight}
                className="absolute top-1/2 right-0 z-20 -translate-y-1/2 transform rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:from-blue-500 hover:to-purple-500"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              <div className="mx-12 overflow-hidden">
                <div
                  id="car-slider"
                  className="flex space-x-6 overflow-x-auto scroll-smooth pb-6"
                  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                  {filteredCars.map((car) => (
                    <div
                      key={car.id}
                      className="group w-96 flex-none transform cursor-pointer transition-all duration-500 hover:scale-105"
                    >
                      <div className="hover:shadow-glow relative overflow-hidden rounded-3xl border border-gray-700/50 bg-gradient-to-br from-gray-800/50 to-gray-900/80 shadow-2xl backdrop-blur-lg transition-all duration-500 group-hover:border-blue-500/50">
                        {/* Image with overlay */}
                        <div className="relative h-52 overflow-hidden">
                          <Image
                            src={car.image}
                            alt={`${car.brand} ${car.model}`}
                            fill
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>

                          {/* Floating price tag */}
                          <div className="absolute top-4 right-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 text-lg font-bold text-white shadow-lg">
                            €{car.price}
                          </div>

                          {/* Heart icon */}
                          <button className="absolute top-4 left-4 rounded-full bg-black/50 p-2 transition-colors hover:bg-black/70">
                            <Heart className="h-5 w-5 text-white" />
                          </button>
                        </div>

                        <div className="relative z-10 p-6">
                          <div className="mb-3 flex items-center justify-between">
                            <h3 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-blue-400">
                              {car.brand} {car.model}
                            </h3>
                            <span className="text-sm text-gray-400">
                              {car.year}
                            </span>
                          </div>

                          {/* Car specs */}
                          <div className="mb-4 grid grid-cols-3 gap-2 text-sm text-gray-300">
                            <div>{car.mileage} km</div>
                            <div>{car.fuel}</div>
                            <div>{car.transmission}</div>
                          </div>

                          {/* Features */}
                          <div className="mb-4 flex flex-wrap gap-1">
                            {car.features
                              .slice(0, 3)
                              .map((feature, featureIndex) => (
                                <span
                                  key={featureIndex}
                                  className="rounded-lg border border-blue-500/30 bg-blue-500/20 px-2 py-1 text-xs text-blue-300"
                                >
                                  {feature}
                                </span>
                              ))}
                            {car.features.length > 3 && (
                              <span className="rounded-lg bg-gray-500/20 px-2 py-1 text-xs text-gray-300">
                                +{car.features.length - 3}
                              </span>
                            )}
                          </div>

                          {/* Financing info */}
                          <div className="mb-4 rounded-lg border border-green-500/20 bg-green-500/10 p-3">
                            <div className="text-sm text-green-400">
                              {t.highlights.financing} €{car.financing}
                              {t.highlights.month}
                            </div>
                          </div>

                          {/* Action buttons */}
                          <div className="flex space-x-2">
                            <button className="flex-1 transform rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-3 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:from-blue-500 hover:to-blue-600">
                              <Eye className="mr-1 inline-block h-4 w-4" />
                              Details
                            </button>
                            <button className="flex-1 transform rounded-xl bg-gradient-to-r from-purple-600 to-purple-700 px-4 py-3 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:from-purple-500 hover:to-purple-600">
                              <MessageCircle className="mr-1 inline-block h-4 w-4" />
                              Kontakt
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* View all button */}
            <div className="mt-8 text-center">
              <button className="transform rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 px-10 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-blue-500/25">
                {t.highlights.viewAll} ({filteredCars.length})
              </button>
            </div>
          </div>
        </section>

        {/* Vorteile */}
        <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 py-20">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 h-72 w-72 animate-pulse rounded-full bg-blue-500/10 blur-3xl"></div>
            <div className="absolute right-10 bottom-10 h-96 w-96 animate-pulse rounded-full bg-purple-500/10 blur-3xl"></div>
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-5xl font-bold text-transparent">
                {t.advantages.title}
              </h2>
              <p className="mx-auto max-w-2xl text-xl text-gray-300">
                {t.advantages.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {advantageItems.map((advantage, index) => {
                const IconComponent = advantage.icon;
                const title =
                  language === "de" ? advantage.titleDe : advantage.titleFa;
                const description =
                  language === "de"
                    ? advantage.descriptionDe
                    : advantage.descriptionFa;

                return (
                  <div
                    key={index}
                    className="group relative transform transition-all duration-500 hover:scale-105"
                  >
                    <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:shadow-purple-500/20">
                      {/* Icon container */}
                      <div className="relative mb-8 flex justify-center">
                        <div className="relative">
                          <div className="absolute inset-0 scale-125 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-50 blur-lg transition-opacity duration-500 group-hover:opacity-100"></div>
                          <div className="relative transform rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-6 shadow-2xl transition-all duration-500 group-hover:rotate-6 group-hover:shadow-blue-500/50">
                            <IconComponent className="relative z-10 h-10 w-10 text-white" />
                          </div>
                        </div>
                      </div>

                      <div className="relative z-10 text-center">
                        <h3 className="mb-4 text-2xl font-bold text-white transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent">
                          {title}
                        </h3>
                        <p className="leading-relaxed text-gray-300 transition-colors duration-500 group-hover:text-white">
                          {description}
                        </p>
                      </div>

                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 text-white">
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
                Seit über 15 Jahren Ihr vertrauensvoller Partner für
                Premium-Fahrzeuge. Qualität, Service und Kundenzufriedenheit
                stehen bei uns an erster Stelle.
              </p>
              <div className="flex space-x-4">
                <div className="flex items-center space-x-2 text-sm">
                  <Star className="h-5 w-5 fill-current text-yellow-400" />
                  <Star className="h-5 w-5 fill-current text-yellow-400" />
                  <Star className="h-5 w-5 fill-current text-yellow-400" />
                  <Star className="h-5 w-5 fill-current text-yellow-400" />
                  <Star className="h-5 w-5 fill-current text-yellow-400" />
                  <span className="ml-2 text-gray-300">
                    4.9/5 (482 Bewertungen)
                  </span>
                </div>
              </div>
            </div>

            {/* Kontaktinfo */}
            <div>
              <h3 className="mb-6 text-xl font-bold text-white">
                {t.footer.contact}
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 flex-shrink-0 text-blue-400" />
                  <div>
                    <p className="font-medium text-white">+49 221 123 4567</p>
                    <p className="text-sm text-gray-400">Mo-Fr: 9:00-18:00</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 flex-shrink-0 text-blue-400" />
                  <div>
                    <p className="text-white">info@bahramautohaus.de</p>
                    <p className="text-sm text-gray-400">24/7 E-Mail Support</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-blue-400" />
                  <div>
                    <p className="text-white">Musterstraße 123</p>
                    <p className="text-white">50667 Köln</p>
                    <p className="text-sm text-gray-400">Deutschland</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services & Legal */}
            <div>
              <h3 className="mb-6 text-xl font-bold text-white">
                Services & Info
              </h3>
              <div className="space-y-3">
                <a
                  href="#financing"
                  className="block text-gray-400 transition-colors hover:text-blue-400"
                >
                  Finanzierung & Leasing
                </a>
                <a
                  href="#warranty"
                  className="block text-gray-400 transition-colors hover:text-blue-400"
                >
                  Garantie & Service
                </a>
                <a
                  href="#trade-in"
                  className="block text-gray-400 transition-colors hover:text-blue-400"
                >
                  Inzahlungnahme
                </a>
                <a
                  href="#export"
                  className="block text-gray-400 transition-colors hover:text-blue-400"
                >
                  Export weltweit
                </a>
                <div className="border-t border-gray-700 pt-4">
                  <h4 className="mb-3 text-lg font-semibold text-white">
                    {t.footer.legal}
                  </h4>
                  <div className="space-y-2">
                    <a
                      href="#privacy"
                      className="block text-sm text-gray-400 transition-colors hover:text-blue-400"
                    >
                      Datenschutz
                    </a>
                    <a
                      href="#terms"
                      className="block text-sm text-gray-400 transition-colors hover:text-blue-400"
                    >
                      AGB
                    </a>
                    <a
                      href="#imprint"
                      className="block text-sm text-gray-400 transition-colors hover:text-blue-400"
                    >
                      Impressum
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-12 border-t border-gray-800 pt-8">
            <div className="flex flex-col items-center justify-between md:flex-row">
              <p className="text-sm text-gray-400">
                © 2024 Bahram Autohaus. Alle Rechte vorbehalten.
              </p>
              <div className="mt-4 flex items-center space-x-6 md:mt-0">
                <span className="text-sm text-gray-400">
                  Zertifiziert durch:
                </span>
                <div className="flex space-x-4">
                  <div className="rounded bg-gray-800 px-3 py-1 text-xs text-gray-300">
                    TÜV SÜD
                  </div>
                  <div className="rounded bg-gray-800 px-3 py-1 text-xs text-gray-300">
                    DEKRA
                  </div>
                  <div className="rounded bg-gray-800 px-3 py-1 text-xs text-gray-300">
                    Autohändler-Verband
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BahramAutohaus;
