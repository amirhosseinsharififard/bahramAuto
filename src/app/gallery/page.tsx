"use client";
import React, { useState } from "react";

import { Calendar, Fuel, Gauge, Search, Settings } from "lucide-react";
import Image from "next/image";

import AnimatedBackground from "@/components/AnimatedBackground";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useLanguage } from "@/contexts/LanguageContext";
import { useExcelData } from "@/hooks/useExcelData";

const GalleryPage = () => {
  const { language, setLanguage, t } = useLanguage();
  const [selectedFilter, setSelectedFilter] = useState("alle");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCar, setSelectedCar] = useState<any | null>(null);

  // Load data from Excel files
  const { cars, loading, error } = useExcelData();

  // Use Excel data if available
  const availableCars = cars.length > 0 ? cars : [];

  const filteredCars = availableCars.filter(
    (car) =>
      (selectedFilter === "alle" || car.category === selectedFilter) &&
      (car.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.model.toLowerCase().includes(searchTerm.toLowerCase())),
  );

  // Show loading state
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="text-center">
          <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-b-2 border-white"></div>
          <p className="text-white">Loading content...</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"
      dir={t("direction")}
    >
      <AnimatedBackground />
      <Header language={language} setLanguage={setLanguage} />

      {/* Error notification */}
      {error && (
        <div className="fixed right-4 top-4 z-50 rounded-lg bg-yellow-500 px-4 py-2 text-black shadow-lg">
          <p className="text-sm">{error}</p>
        </div>
      )}

      <main className="relative z-10 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
              {t("gallery.title")}
            </h1>
            <p className="text-xl text-gray-300">{t("gallery.subtitle")}</p>
          </div>

          {/* Search & Filter Section */}
          <div className="mb-12 rounded-xl border border-white/10 bg-gradient-to-r from-blue-800/30 to-purple-800/30 p-6 shadow-lg backdrop-blur-sm">
            <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
              <div className="relative w-full lg:flex-1">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
                <input
                  type="text"
                  placeholder={t("search.placeholder")}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full rounded-xl border border-white/20 bg-gray-800/50 py-3 pl-12 pr-4 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex w-full flex-wrap justify-center gap-2 lg:w-auto">
                {[
                  { key: "alle", label: t("search.filters.all") },
                  { key: "limousine", label: t("search.filters.limousine") },
                  { key: "suv", label: t("search.filters.suv") },
                  { key: "sportwagen", label: t("search.filters.sportwagen") },
                  { key: "kombi", label: t("search.filters.kombi") },
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
                {t("gallery.details.back")}
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
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-gray-400" />
                        <div>
                          <p className="text-sm text-gray-400">
                            {t("gallery.details.year")}
                          </p>
                          <p className="font-medium text-white">
                            {selectedCar.year}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <Gauge className="h-4 w-4 text-gray-400" />
                        <div>
                          <p className="text-sm text-gray-400">
                            {t("gallery.details.mileage")}
                          </p>
                          <p className="font-medium text-white">
                            {selectedCar.mileage} km
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <Fuel className="h-4 w-4 text-gray-400" />
                        <div>
                          <p className="text-sm text-gray-400">
                            {t("gallery.details.fuel")}
                          </p>
                          <p className="font-medium text-white">
                            {selectedCar.fuel}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <Settings className="h-4 w-4 text-gray-400" />
                        <div>
                          <p className="text-sm text-gray-400">
                            {t("gallery.details.transmission")}
                          </p>
                          <p className="font-medium text-white">
                            {selectedCar.transmission}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="mb-3 text-lg font-semibold text-white">
                      {t("gallery.details.features")}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedCar.features.map(
                        (feature: string, index: number) => (
                          <span
                            key={index}
                            className="rounded-full bg-blue-500/20 px-3 py-1 text-sm text-blue-300"
                          >
                            {feature}
                          </span>
                        ),
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 sm:flex-row">
                    <div className="rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-center text-white">
                      <p className="text-sm">{t("gallery.details.price")}</p>
                      <p className="text-2xl font-bold">€{selectedCar.price}</p>
                    </div>
                    <div className="rounded-xl bg-gradient-to-r from-green-600 to-teal-600 p-6 text-center text-white">
                      <p className="text-sm">
                        {t("gallery.details.financing")}
                      </p>
                      <p className="text-2xl font-bold">
                        €{selectedCar.financing}
                        {t("gallery.details.month")}
                      </p>
                    </div>
                  </div>

                  <button className="mt-8 w-full rounded-full bg-gradient-to-r from-blue-600 to-purple-600 py-3 font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30">
                    {t("gallery.details.contact")}
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
                        <div className="flex items-center justify-center gap-2 text-xs opacity-75">
                          <Gauge className="h-3 w-3 text-gray-400" />
                          <p>{t("carLabels.mileage")}</p>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="font-medium">{car.fuel}</div>
                        <div className="flex items-center justify-center gap-2 text-xs opacity-75">
                          <Fuel className="h-3 w-3 text-gray-400" />
                          <p>{t("carLabels.fuel")}</p>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="font-medium">{car.transmission}</div>
                        <div className="flex items-center justify-center gap-2 text-xs opacity-75">
                          <Settings className="h-3 w-3 text-gray-400" />
                          <p>{t("carLabels.transmission")}</p>
                        </div>
                      </div>
                    </div>

                    <div className="mb-4 flex flex-wrap gap-1">
                      {car.features
                        .slice(0, 2)
                        .map((feature: string, index: number) => (
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
                      {t("gallery.details.financing")} €{car.financing}
                      {t("gallery.details.month")}
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
