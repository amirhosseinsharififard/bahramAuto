"use client";
import React, { useState } from "react";

import { Eye, Heart, Mail, Search } from "lucide-react";
import Image from "next/image";

import AnimatedBackground from "@/components/AnimatedBackground";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useLanguage } from "@/contexts/LanguageContext";

const GalleryPage = () => {
  const { language, setLanguage } = useLanguage();
  const [selectedFilter, setSelectedFilter] = useState("alle");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCar, setSelectedCar] = useState<(typeof cars)[0] | null>(null);

  const content = {
    de: {
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
      className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"
      dir={language === "fa" ? "rtl" : "ltr"}
    >
      <AnimatedBackground />
      <Header language={language} setLanguage={setLanguage} />

      <main className="relative z-10 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
              {t.title}
            </h1>
            <p className="text-xl text-gray-300">{t.subtitle}</p>
          </div>

          {/* Search & Filter Section */}
          <div className="mb-12 rounded-xl border border-white/10 bg-gradient-to-r from-blue-800/30 to-purple-800/30 p-6 shadow-lg backdrop-blur-sm">
            <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
              <div className="relative w-full lg:flex-1">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
                <input
                  type="text"
                  placeholder={t.search.placeholder}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full rounded-xl border border-white/20 bg-gray-800/50 py-3 pl-12 pr-4 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex w-full flex-wrap justify-center gap-2 lg:w-auto">
                {[
                  { key: "alle", label: t.search.filters.all },
                  { key: "limousine", label: t.search.filters.limousine },
                  { key: "suv", label: t.search.filters.suv },
                  { key: "sportwagen", label: t.search.filters.sportwagen },
                  { key: "kombi", label: t.search.filters.kombi },
                ].map((filter) => (
                  <button
                    key={filter.key}
                    onClick={() => setSelectedFilter(filter.key)}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                      selectedFilter === filter.key
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
                        : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-gray-200"
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
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-gray-800/80 to-gray-900/90 p-6 shadow-xl backdrop-blur-sm">
              <button
                onClick={() => setSelectedCar(null)}
                className="mb-6 flex items-center text-blue-400 transition-colors hover:text-blue-300"
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
                  <h2 className="mb-2 text-3xl font-bold text-white">
                    {selectedCar.brand} {selectedCar.model}
                  </h2>
                  <p className="mb-6 text-gray-300">
                    {selectedCar.description}
                  </p>

                  <div className="mb-8 grid grid-cols-2 gap-4 rounded-lg bg-gray-800/50 p-4">
                    <div>
                      <p className="text-sm text-gray-400">{t.details.year}</p>
                      <p className="font-medium text-white">
                        {selectedCar.year}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">
                        {t.details.mileage}
                      </p>
                      <p className="font-medium text-white">
                        {selectedCar.mileage} km
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{t.details.fuel}</p>
                      <p className="font-medium text-white">
                        {selectedCar.fuel}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">
                        {t.details.transmission}
                      </p>
                      <p className="font-medium text-white">
                        {selectedCar.transmission}
                      </p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="mb-3 text-lg font-semibold text-white">
                      {t.details.features}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedCar.features.map((feature, index) => (
                        <span
                          key={index}
                          className="rounded-full bg-blue-500/20 px-3 py-1 text-sm text-blue-300"
                        >
                          {feature}
                        </span>
                      ))}
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

                  <button className="mt-8 w-full rounded-full bg-gradient-to-r from-blue-600 to-purple-600 py-3 font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30">
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
                  className="group transform cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/70 to-gray-900/80 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
                  onClick={() => setSelectedCar(car)}
                >
                  <div className="relative h-48 overflow-hidden sm:h-56">
                    <Image
                      src={car.image}
                      alt={`${car.brand} ${car.model}`}
                      fill
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
                    <div className="absolute right-4 top-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 text-lg font-bold text-white shadow-lg">
                      €{car.price}
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="mb-3 flex items-center justify-between">
                      <h3 className="text-lg font-bold text-white">
                        {car.brand} {car.model}
                      </h3>
                      <span className="text-sm text-gray-400">{car.year}</span>
                    </div>

                    <div className="mb-4 grid grid-cols-3 gap-1 text-sm text-gray-300">
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

                    <div className="rounded-lg border border-green-500/20 bg-green-500/10 p-2 text-center text-sm text-green-400">
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

      <Footer language={language} />
    </div>
  );
};

export default GalleryPage;
