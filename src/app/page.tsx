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
        videoButton: "Video ansehen",
        stats: {
          sold: "Verkaufte Fahrzeuge",
          customers: "Zufriedene Kunden",
          experience: "Jahre Erfahrung",
        },
      },
      highlights: {
        title: "Aktuelle Top-Angebote",
        subtitle: "Handverlesene Premium-Fahrzeuge",
        viewAll: "Alle Fahrzeuge ansehen",
        financing: "Finanzierung ab",
        month: "/Monat",
        details: "Details",
        contact: "Kontakt",
        features: "Features",
        mileage: "km",
        fuel: "Kraftstoff",
        transmission: "Getriebe",
      },
      advantages: {
        title: "Warum Bahram Autohaus?",
        subtitle: "Ihre Vorteile bei uns",
      },
      footer: {
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
        videoButton: "مشاهده ویدیو",
        stats: {
          sold: "خودروهای فروخته شده",
          customers: "مشتریان راضی",
          experience: "سال تجربه",
        },
      },
      highlights: {
        title: "بهترین پیشنهادات فعلی",
        subtitle: "خودروهای پریمیوم دست‌چین",
        viewAll: "مشاهده همه خودروها",
        financing: "تامین مالی از",
        month: "/ماه",
        details: "جزئیات",
        contact: "تماس",
        features: "ویژگی‌ها",
        mileage: "کیلومتر",
        fuel: "سوخت",
        transmission: "گیربکس",
      },
      advantages: {
        title: "چرا بهرام اتوهاوس؟",
        subtitle: "مزایای شما نزد ما",
      },
      footer: {
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

  // const scrollLeft = () => {
  //   const container = document.getElementById("car-slider");
  //   if (container) {
  //     container.scrollBy({ left: -400, behavior: "smooth" });
  //   }
  // };

  // const scrollRight = () => {
  //   const container = document.getElementById("car-slider");
  //   if (container) {
  //     container.scrollBy({ left: 400, behavior: "smooth" });
  //   }
  // };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100"
      dir={language === "fa" ? "rtl" : "ltr"}
    >
      {/* <style>{`
        #car-slider::-webkit-scrollbar {
          display: none;
        }
      `}</style> */}

      {/* Header */}
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
                { href: "#home", label: t.nav.home },
                { href: "#gallery", label: t.nav.gallery },
                { href: "#services", label: t.nav.services },
                { href: "#about", label: t.nav.about },
                { href: "#contact", label: t.nav.contact },
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
                  { href: "#home", label: t.nav.home, icon: "🏠" },
                  { href: "#gallery", label: t.nav.gallery, icon: "🚗" },
                  { href: "#services", label: t.nav.services, icon: "🔧" },
                  { href: "#about", label: t.nav.about, icon: "ℹ️" },
                  { href: "#contact", label: t.nav.contact, icon: "📞" },
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
            <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
              <div className="text-center lg:text-left">
                <h1 className="mb-4 text-4xl font-bold leading-tight text-white sm:mb-6 sm:text-5xl lg:text-6xl xl:text-7xl">
                  {t.hero.title}
                </h1>
                <p className="mb-3 text-lg text-white/90 sm:mb-4 sm:text-xl lg:text-2xl">
                  {t.hero.subtitle}
                </p>
                <p className="mx-auto mb-6 max-w-xl text-base text-white/80 sm:mb-8 sm:text-lg lg:mx-0">
                  {t.hero.description}
                </p>
                <div className="mb-6 flex flex-col justify-center gap-3 sm:mb-8 sm:flex-row sm:gap-4 lg:justify-start">
                  <button className="transform rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-base font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-xl sm:px-8 sm:py-4 sm:text-lg">
                    {t.hero.cta}
                  </button>
                  <button className="rounded-full border border-white/30 bg-white/20 px-6 py-3 text-base font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/30 sm:px-8 sm:py-4 sm:text-lg">
                    <PlayCircle className="mr-2 inline-block h-4 w-4 sm:h-5 sm:w-5" />
                    {language === "fa" ? "مشاهده ویدیو" : "Video ansehen"}
                  </button>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
                <div className="rounded-2xl bg-white/10 p-4 text-center backdrop-blur-sm sm:p-6">
                  <div className="mb-2 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                    2500+
                  </div>
                  <div className="text-xs text-white/80 sm:text-sm">
                    {language === "fa"
                      ? "خودروهای فروخته شده"
                      : "Verkaufte Fahrzeuge"}
                  </div>
                </div>
                <div className="rounded-2xl bg-white/10 p-4 text-center backdrop-blur-sm sm:p-6">
                  <div className="mb-2 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                    1800+
                  </div>
                  <div className="text-xs text-white/80 sm:text-sm">
                    {language === "fa" ? "مشتریان راضی" : "Zufriedene Kunden"}
                  </div>
                </div>
                <div className="rounded-2xl bg-white/10 p-4 text-center backdrop-blur-sm sm:p-6">
                  <div className="mb-2 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                    15+
                  </div>
                  <div className="text-xs text-white/80 sm:text-sm">
                    {language === "fa" ? "سال تجربه" : "Jahre Erfahrung"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Search & Filter Section */}
        <section className="bg-white py-6 shadow-sm sm:py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
              <div className="relative w-full lg:flex-1">
                <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400 sm:h-5 sm:w-5" />
                <input
                  type="text"
                  placeholder={
                    language === "fa"
                      ? "جستجوی برند یا مدل..."
                      : "Marke oder Modell suchen..."
                  }
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full rounded-xl border border-gray-300 py-2 pl-10 pr-4 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 sm:py-3 sm:pl-12 sm:text-base"
                />
              </div>
              <div className="flex w-full flex-wrap justify-center gap-2 lg:w-auto">
                {[
                  { key: "alle", label: language === "fa" ? "همه" : "Alle" },
                  {
                    key: "limousine",
                    label: language === "fa" ? "سدان" : "Limousine",
                  },
                  { key: "suv", label: "SUV" },
                  {
                    key: "sportwagen",
                    label: language === "fa" ? "اسپرت" : "Sportwagen",
                  },
                  {
                    key: "kombi",
                    label: language === "fa" ? "استیشن" : "Kombi",
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
        </section>

        {/* Fahrzeug-Highlights */}
        <section
          id="gallery"
          className="bg-gradient-to-br from-slate-800 via-gray-900 to-slate-900 py-16"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-5 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text py-2 text-5xl font-bold text-transparent">
                {t.highlights.title}
              </h2>
              <p className="text-xl text-gray-300">{t.highlights.subtitle}</p>
            </div>

            {/* Horizontal Scrolling Container with Arrow Controls - SLIDER DISABLED */}
            <div className="relative">
              {/* Left Arrow - Hidden on mobile - DISABLED */}
              {/* <button
                onClick={scrollLeft}
                className="absolute left-0 top-1/2 z-20 hidden -translate-y-1/2 transform rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:from-blue-500 hover:to-purple-500 lg:block"
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
              </button> */}

              {/* Right Arrow - Hidden on mobile - DISABLED */}
              {/* <button
                onClick={scrollRight}
                className="absolute right-0 top-1/2 z-20 hidden -translate-y-1/2 transform rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:from-blue-500 hover:to-purple-500 lg:block"
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
              </button> */}

              <div className="mx-4 overflow-hidden sm:mx-8 lg:mx-12">
                <div
                  id="car-slider"
                  className="grid grid-cols-2 gap-3 pb-6 sm:gap-4 md:grid-cols-2 lg:grid-cols-3"
                >
                  {filteredCars.map((car) => (
                    <div
                      key={car.id}
                      className="group w-full transform cursor-pointer transition-all duration-500"
                    >
                      <div className="relative overflow-hidden rounded-2xl border border-gray-700/50 bg-gradient-to-br from-gray-800/50 to-gray-900/80 shadow-xl backdrop-blur-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                        {/* Image with overlay */}
                        <div className="relative h-48 overflow-hidden sm:h-52">
                          <Image
                            src={car.image}
                            alt={`${car.brand} ${car.model}`}
                            fill
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>

                          {/* Floating price tag */}
                          <div className="absolute right-4 top-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 text-lg font-bold text-white shadow-lg">
                            €{car.price}
                          </div>

                          {/* Heart icon */}
                          <button className="absolute left-4 top-4 rounded-full bg-black/50 p-2 transition-colors hover:bg-black/70">
                            <Heart className="h-5 w-5 text-white" />
                          </button>
                        </div>

                        <div className="relative z-10 p-3 sm:p-4 lg:p-6">
                          <div className="mb-3 flex items-center justify-between">
                            <h3 className="text-base font-bold text-white transition-colors duration-300 group-hover:text-blue-400 sm:text-lg lg:text-xl">
                              {car.brand} {car.model}
                            </h3>
                            <span className="text-xs text-gray-400 sm:text-sm">
                              {car.year}
                            </span>
                          </div>

                          {/* Car specs */}
                          <div className="mb-4 grid grid-cols-3 gap-1 text-xs text-gray-300 sm:gap-2 sm:text-sm">
                            <div className="text-center">
                              <div className="font-medium">{car.mileage}</div>
                              <div className="text-xs opacity-75">
                                {language === "fa" ? "کیلومتر" : "km"}
                              </div>
                            </div>
                            <div className="text-center">
                              <div className="font-medium">{car.fuel}</div>
                              <div className="text-xs opacity-75">
                                {language === "fa" ? "سوخت" : "Kraftstoff"}
                              </div>
                            </div>
                            <div className="text-center">
                              <div className="font-medium">
                                {car.transmission}
                              </div>
                              <div className="text-xs opacity-75">
                                {language === "fa" ? "گیربکس" : "Getriebe"}
                              </div>
                            </div>
                          </div>

                          {/* Features */}
                          <div className="mb-4 flex flex-wrap gap-1">
                            {car.features
                              .slice(0, 2)
                              .map((feature, featureIndex) => (
                                <span
                                  key={featureIndex}
                                  className="rounded-lg border border-blue-500/30 bg-blue-500/20 px-2 py-1 text-xs text-blue-300"
                                >
                                  {feature}
                                </span>
                              ))}
                            {car.features.length > 2 && (
                              <span className="rounded-lg bg-gray-500/20 px-2 py-1 text-xs text-gray-300">
                                +{car.features.length - 2}
                              </span>
                            )}
                          </div>

                          {/* Financing info */}
                          <div className="mb-4 rounded-lg border border-green-500/20 bg-green-500/10 p-2 sm:p-3">
                            <div className="text-center text-xs text-green-400 sm:text-sm">
                              {t.highlights.financing} €{car.financing}
                              {t.highlights.month}
                            </div>
                          </div>

                          {/* Action buttons */}
                          <div className="flex flex-col gap-2 sm:flex-row">
                            <button className="flex-1 transform rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-2 py-1.5 text-xs font-medium text-white transition-all duration-300 hover:scale-105 hover:from-blue-500 hover:to-blue-600 sm:px-3 sm:py-2 sm:text-sm">
                              <Eye className="mr-1 inline-block h-3 w-3 sm:h-4 sm:w-4" />
                              {language === "fa" ? "جزئیات" : "Details"}
                            </button>
                            <button className="flex-1 transform rounded-lg bg-gradient-to-r from-purple-600 to-purple-700 px-2 py-1.5 text-xs font-medium text-white transition-all duration-300 hover:scale-105 hover:from-purple-500 hover:to-purple-600 sm:px-3 sm:py-2 sm:text-sm">
                              <MessageCircle className="mr-1 inline-block h-3 w-3 sm:h-4 sm:w-4" />
                              {language === "fa" ? "تماس" : "Kontakt"}
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
                {t.highlights.viewAll} 
              </button>
            </div>
          </div>
        </section>

        {/* Vorteile */}
        <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 py-20">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute left-10 top-10 h-72 w-72 animate-pulse rounded-full bg-blue-500/10 blur-3xl"></div>
            <div className="absolute bottom-10 right-10 h-96 w-96 animate-pulse rounded-full bg-purple-500/10 blur-3xl"></div>
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text py-2 text-5xl font-bold text-transparent">
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
                {t.footer.company.description}
              </p>
              <div className="flex space-x-4">
                <div className="flex items-center space-x-2 text-sm">
                  <Star className="h-5 w-5 fill-current text-yellow-400" />
                  <Star className="h-5 w-5 fill-current text-yellow-400" />
                  <Star className="h-5 w-5 fill-current text-yellow-400" />
                  <Star className="h-5 w-5 fill-current text-yellow-400" />
                  <Star className="h-5 w-5 fill-current text-yellow-400" />
                  <span className="ml-2 text-gray-300">
                    {t.footer.company.rating}
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
                    <p className="font-medium text-white">
                      {t.footer.contactInfo.phone}
                    </p>
                    <p className="text-sm text-gray-400">
                      {t.footer.contactInfo.phoneHours}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 flex-shrink-0 text-blue-400" />
                  <div>
                    <p className="text-white">{t.footer.contactInfo.email}</p>
                    <p className="text-sm text-gray-400">
                      {t.footer.contactInfo.emailSupport}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-blue-400" />
                  <div>
                    <p className="text-white">
                      {t.footer.contactInfo.address.street}
                    </p>
                    <p className="text-white">
                      {t.footer.contactInfo.address.city}
                    </p>
                    <p className="text-sm text-gray-400">
                      {t.footer.contactInfo.address.country}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services & Legal */}
            <div>
              <h3 className="mb-6 text-xl font-bold text-white">
                {t.footer.servicesTitle}
              </h3>
              <div className="space-y-3">
                <a
                  href="#financing"
                  className="block text-gray-400 transition-colors hover:text-blue-400"
                >
                  {t.footer.services.financing}
                </a>
                <a
                  href="#warranty"
                  className="block text-gray-400 transition-colors hover:text-blue-400"
                >
                  {t.footer.services.warranty}
                </a>
                <a
                  href="#trade-in"
                  className="block text-gray-400 transition-colors hover:text-blue-400"
                >
                  {t.footer.services.tradeIn}
                </a>
                <a
                  href="#export"
                  className="block text-gray-400 transition-colors hover:text-blue-400"
                >
                  {t.footer.services.export}
                </a>
                <div className="border-t border-gray-700 pt-4">
                  <h4 className="mb-3 text-lg font-semibold text-white">
                    {t.footer.legal.title}
                  </h4>
                  <div className="space-y-2">
                    <a
                      href="#privacy"
                      className="block text-sm text-gray-400 transition-colors hover:text-blue-400"
                    >
                      {t.footer.legal.privacy}
                    </a>
                    <a
                      href="#terms"
                      className="block text-sm text-gray-400 transition-colors hover:text-blue-400"
                    >
                      {t.footer.legal.terms}
                    </a>
                    <a
                      href="#imprint"
                      className="block text-sm text-gray-400 transition-colors hover:text-blue-400"
                    >
                      {t.footer.legal.imprint}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-12 border-t border-gray-800 pt-8">
            <div className="flex flex-col items-center justify-between md:flex-row">
              <p className="text-sm text-gray-400">{t.footer.copyright}</p>
              <div className="mt-4 flex items-center space-x-6 md:mt-0">
                <span className="text-sm text-gray-400">
                  {t.footer.certifications.title}
                </span>
                <div className="flex space-x-4">
                  <div className="rounded bg-gray-800 px-3 py-1 text-xs text-gray-300">
                    {t.footer.certifications.tuv}
                  </div>
                  <div className="rounded bg-gray-800 px-3 py-1 text-xs text-gray-300">
                    {t.footer.certifications.dekra}
                  </div>
                  <div className="rounded bg-gray-800 px-3 py-1 text-xs text-gray-300">
                    {t.footer.certifications.association}
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
