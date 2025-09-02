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

const GalleryPage = () => {
  const [language, setLanguage] = useState("de");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("alle");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCar, setSelectedCar] = useState<any>(null);

  const content = {
    de: {
      nav: {
        home: "Startseite",
        gallery: "Fahrzeuge",
        services: "Service",
        about: "Über uns",
        contact: "Kontakt",
      },
      title: "Fahrzeuggalerie",
      subtitle: "Entdecken Sie unsere Premium-Fahrzeuge",
      search: {
        placeholder: "Marke oder Modell suchen...",
        filters: {
          all: "Alle",
          limousine: "Limousine",
          suv: "SUV",
          sportwagen: "Sportwagen",
          kombi: "Kombi",
        },
      },
      details: {
        title: "Fahrzeugdetails",
        brand: "Marke",
        model: "Modell",
        year: "Baujahr",
        price: "Preis",
        financing: "Finanzierung ab",
        month: "/Monat",
        mileage: "Kilometerstand",
        fuel: "Kraftstoff",
        transmission: "Getriebe",
        features: "Ausstattung",
        contact: "Kontakt aufnehmen",
        back: "Zurück zur Galerie",
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
      title: "گالری خودروها",
      subtitle: "خودروهای پریمیوم ما را کشف کنید",
      search: {
        placeholder: "جستجوی برند یا مدل...",
        filters: {
          all: "همه",
          limousine: "سدان",
          suv: "SUV",
          sportwagen: "اسپرت",
          kombi: "استیشن",
        },
      },
      details: {
        title: "جزئیات خودرو",
        brand: "برند",
        model: "مدل",
        year: "سال ساخت",
        price: "قیمت",
        financing: "تامین مالی از",
        month: "/ماه",
        mileage: "کارکرد",
        fuel: "سوخت",
        transmission: "گیربکس",
        features: "ویژگی‌ها",
        contact: "تماس بگیرید",
        back: "بازگشت به گالری",
      },
    },
  };

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
      description:
        "Der BMW X5 M50d bietet beeindruckende Leistung und exklusiven Komfort. Mit dem M Sportpaket und der Panoramadachanlage steht er für sportliche Eleganz.",
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
      description:
        "Der Mercedes-AMG C63 ist die Definition von Performance und Luxus. Mit dem AMG Performance Paket und dem hochwertigen Burmester Soundsystem.",
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
      description:
        "Der Audi RS6 Avant kombiniert die Praktikabilität eines Kombis mit der Performance eines Sportwagens. Ausgestattet mit dem Virtual Cockpit und Matrix LED Scheinwerfern.",
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
      description:
        "Der Porsche Cayenne Turbo verkörpert die perfekte Symbiose aus Sportlichkeit und Komfort. Mit Luftfederung und Sport Chrono Paket für ein einzigartiges Fahrerlebnis.",
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
      description:
        "Das Tesla Model S Plaid setzt neue Maßstäbe in der Elektromobilität. Mit Plaid Mode, Autopilot und Premium Audio System für ein zukunftsweisendes Fahrerlebnis.",
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
      description:
        "Der BMW M4 Competition ist ein reiner Sportwagen pur. Mit dem Carbon Paket und M Driver Package für maximale Performance auf der Straße und der Rennstrecke.",
    },
  ];

  const t = content[language as keyof typeof content];

  const filteredCars = cars.filter(
    (car) =>
      (selectedFilter === "alle" || car.category === selectedFilter) &&
      (car.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.model.toLowerCase().includes(searchTerm.toLowerCase())),
  );

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100"
      dir={language === "fa" ? "rtl" : "ltr"}
    >
      {/* Header - Same as home page */}
      <header className="order-b sticky top-0 z-50 border-gray-200/50 bg-white/95 shadow-lg backdrop-blur-md transition-all duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="group flex cursor-pointer items-center space-x-3">
              <div className="rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 p-3 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
                <Car className="h-8 w-8 text-white transition-transform duration-300 group-hover:rotate-12" />
              </div>
              <div>
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-2xl font-bold text-transparent transition-all duration-300 group-hover:from-purple-600 group-hover:to-blue-600">
                  Bahram Autohaus
                </span>
                <p className="text-xs text-gray-500 transition-colors duration-300 group-hover:text-blue-600">
                  Premium Cars Deutschland
                </p>
              </div>
            </div>
            {/* Desktop Navigation */}
            <nav className="hidden items-center space-x-1 lg:flex">
              {[
                { href: "/", label: t.nav.home },
                { href: "/gallery", label: t.nav.gallery },
                { href: "/services", label: t.nav.services },
                { href: "/about", label: t.nav.about },
                { href: "/contact", label: t.nav.contact },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="group relative rounded-lg px-4 py-2 font-medium text-gray-700 transition-all duration-300 hover:text-blue-600"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:left-0 group-hover:w-full"></span>
                </a>
              ))}
            </nav>
            <div className="flex items-center space-x-4">
              {/* Language Switch */}
              <div className="flex items-center space-x-2 rounded-lg bg-gray-100 p-1">
                <button
                  onClick={() => setLanguage("de")}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                    language === "de"
                      ? "scale-105 transform bg-white text-blue-600 shadow-md"
                      : "text-gray-600 hover:bg-gray-200 hover:text-gray-900"
                  }`}
                >
                  DE
                </button>
                <button
                  onClick={() => setLanguage("fa")}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                    language === "fa"
                      ? "scale-105 transform bg-white text-blue-600 shadow-md"
                      : "text-gray-600 hover:bg-gray-200 hover:text-gray-900"
                  }`}
                >
                  FA
                </button>
              </div>
              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="rounded-lg p-2 text-gray-600 transition-all duration-300 hover:bg-blue-50 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 lg:hidden"
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
            <div className="border-t border-gray-200 pb-4 pt-4">
              <div className="flex flex-col space-y-1">
                {[
                  { href: "/", label: t.nav.home, icon: "🏠" },
                  { href: "/gallery", label: t.nav.gallery, icon: "🚗" },
                  { href: "/services", label: t.nav.services, icon: "🔧" },
                  { href: "/about", label: t.nav.about, icon: "ℹ️" },
                  { href: "/contact", label: t.nav.contact, icon: "📞" },
                ].map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="flex transform items-center space-x-3 rounded-lg px-4 py-3 text-gray-700 transition-all duration-300 hover:translate-x-2 hover:bg-blue-50 hover:text-blue-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
              {t.title}
            </h1>
            <p className="text-xl text-gray-600">{t.subtitle}</p>
          </div>

          {/* Search & Filter Section */}
          <div className="mb-12 rounded-xl bg-white p-6 shadow-lg">
            <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
              <div className="relative w-full lg:flex-1">
                <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400 sm:h-5 sm:w-5" />
                <input
                  type="text"
                  placeholder={t.search.placeholder}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full rounded-xl border border-gray-300 py-2 pl-10 pr-4 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 sm:py-3 sm:pl-12 sm:text-base"
                />
              </div>
              <div className="flex w-full flex-wrap justify-center gap-2 lg:w-auto">
                {[
                  { key: "alle", label: t.search.filters.all },
                  {
                    key: "limousine",
                    label: t.search.filters.limousine,
                  },
                  { key: "suv", label: t.search.filters.suv },
                  {
                    key: "sportwagen",
                    label: t.search.filters.sportwagen,
                  },
                  {
                    key: "kombi",
                    label: t.search.filters.kombi,
                  },
                ].map((filter) => (
                  <button
                    key={filter.key}
                    onClick={() => setSelectedFilter(filter.key)}
                    className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-300 sm:px-4 sm:py-2 sm:text-sm ${
                      selectedFilter === filter.key
                        ? "bg-blue-600 text-white shadow-md"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-sm"
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Car Grid */}
          {selectedCar ? (
            // Car Detail View
            <div className="rounded-2xl bg-white p-6 shadow-xl">
              <button
                onClick={() => setSelectedCar(null)}
                className="mb-6 flex items-center text-blue-600 transition-colors hover:text-blue-800"
              >
                <svg
                  className="mr-2 h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                {t.details.back}
              </button>

              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                <div className="relative h-96 overflow-hidden rounded-xl">
                  <Image
                    src={selectedCar.image}
                    alt={`${selectedCar.brand} ${selectedCar.model}`}
                    fill
                    className="h-full w-full object-cover"
                  />
                </div>

                <div>
                  <h2 className="mb-2 text-3xl font-bold text-gray-900">
                    {selectedCar.brand} {selectedCar.model}
                  </h2>
                  <p className="mb-6 text-gray-600">
                    {selectedCar.description}
                  </p>

                  <div className="mb-8 grid grid-cols-2 gap-4 rounded-lg bg-gray-50 p-4">
                    <div>
                      <p className="text-sm text-gray-500">{t.details.year}</p>
                      <p className="font-medium">{selectedCar.year}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">
                        {t.details.mileage}
                      </p>
                      <p className="font-medium">{selectedCar.mileage} km</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{t.details.fuel}</p>
                      <p className="font-medium">{selectedCar.fuel}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">
                        {t.details.transmission}
                      </p>
                      <p className="font-medium">{selectedCar.transmission}</p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="mb-3 text-lg font-semibold text-gray-900">
                      {t.details.features}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedCar.features.map(
                        (feature: any, index: number) => (
                          <span
                            key={index}
                            className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800"
                          >
                            {feature}
                          </span>
                        ),
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 sm:flex-row">
                    <div className="rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-center text-white">
                      <p className="text-sm">{t.details.price}</p>
                      <p className="text-2xl font-bold">€{selectedCar.price}</p>
                    </div>
                    <div className="rounded-xl bg-gradient-to-r from-green-600 to-teal-600 p-6 text-center text-white">
                      <p className="text-sm">{t.details.financing}</p>
                      <p className="text-2xl font-bold">
                        €{selectedCar.financing}
                        {t.details.month}
                      </p>
                    </div>
                  </div>

                  <button className="mt-8 w-full rounded-full bg-gradient-to-r from-blue-600 to-purple-600 py-3 font-semibold text-white transition-all duration-300 hover:shadow-lg">
                    {t.details.contact}
                  </button>
                </div>
              </div>
            </div>
          ) : (
            // Car Grid View
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredCars.map((car) => (
                <div
                  key={car.id}
                  className="group transform cursor-pointer overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
                  onClick={() => setSelectedCar(car)}
                >
                  <div className="relative h-48 overflow-hidden sm:h-56">
                    <Image
                      src={car.image}
                      alt={`${car.brand} ${car.model}`}
                      fill
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    <div className="absolute right-4 top-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 text-lg font-bold text-white shadow-lg">
                      €{car.price}
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="mb-3 flex items-center justify-between">
                      <h3 className="text-lg font-bold text-gray-900">
                        {car.brand} {car.model}
                      </h3>
                      <span className="text-sm text-gray-500">{car.year}</span>
                    </div>

                    <div className="mb-4 grid grid-cols-3 gap-1 text-sm text-gray-600">
                      <div className="text-center">
                        <div className="font-medium">{car.mileage}</div>
                        <div className="text-xs opacity-75">km</div>
                      </div>
                      <div className="text-center">
                        <div className="font-medium">{car.fuel}</div>
                        <div className="text-xs opacity-75">Kraftstoff</div>
                      </div>
                      <div className="text-center">
                        <div className="font-medium">{car.transmission}</div>
                        <div className="text-xs opacity-75">Getriebe</div>
                      </div>
                    </div>

                    <div className="mb-4 flex flex-wrap gap-1">
                      {car.features.slice(0, 2).map((feature, index) => (
                        <span
                          key={index}
                          className="rounded-lg border border-blue-500/30 bg-blue-500/20 px-2 py-1 text-xs text-blue-700"
                        >
                          {feature}
                        </span>
                      ))}
                      {car.features.length > 2 && (
                        <span className="rounded-lg bg-gray-100 px-2 py-1 text-xs text-gray-600">
                          +{car.features.length - 2}
                        </span>
                      )}
                    </div>

                    <div className="rounded-lg border border-green-500/20 bg-green-500/10 p-2 text-center text-sm text-green-700">
                      {t.details.financing} €{car.financing}
                      {t.details.month}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Footer - Same as home page */}
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
              <h3 className="mb-6 text-xl font-bold text-white">Kontakt</h3>
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
                  href="/services"
                  className="block text-gray-400 transition-colors hover:text-blue-400"
                >
                  Finanzierung & Leasing
                </a>
                <a
                  href="/services"
                  className="block text-gray-400 transition-colors hover:text-blue-400"
                >
                  Garantie & Service
                </a>
                <a
                  href="/services"
                  className="block text-gray-400 transition-colors hover:text-blue-400"
                >
                  Inzahlungnahme
                </a>
                <a
                  href="/services"
                  className="block text-gray-400 transition-colors hover:text-blue-400"
                >
                  Export weltweit
                </a>
                <div className="border-t border-gray-700 pt-4">
                  <h4 className="mb-3 text-lg font-semibold text-white">
                    Rechtliches
                  </h4>
                  <div className="space-y-2">
                    <a
                      href="#"
                      className="block text-sm text-gray-400 transition-colors hover:text-blue-400"
                    >
                      Datenschutz
                    </a>
                    <a
                      href="#"
                      className="block text-sm text-gray-400 transition-colors hover:text-blue-400"
                    >
                      AGB
                    </a>
                    <a
                      href="#"
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

export default GalleryPage;
