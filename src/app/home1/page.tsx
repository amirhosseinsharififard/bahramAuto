"use client";

import React, { useState } from "react";

import {
  Award,
  Eye,
  Heart,
  Mail,
  PlayCircle,
  Search,
  Shield,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import AnimatedBackground from "@/components/AnimatedBackground";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { de } from "@/constants/de";
import { fa } from "@/constants/fa";
import { useLanguage } from "@/contexts/LanguageContext";

const BahramAutohaus = () => {
  const { language, setLanguage } = useLanguage();
  const [selectedFilter, setSelectedFilter] = useState("alle");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCar, setSelectedCar] = useState<(typeof de.cars)[0] | null>(
    null,
  );

  const content = { de, fa };
  const t = content[language as keyof typeof content];

  // advantageItems are now imported from language constants

  const filteredCars = t.cars.filter(
    (car) =>
      (selectedFilter === "alle" || car.category === selectedFilter) &&
      (car.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.model.toLowerCase().includes(searchTerm.toLowerCase())),
  );

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"
      dir={t.direction}
    >
      <AnimatedBackground />
      <Header language={language} setLanguage={setLanguage} />

      {/* Main Content */}
      <main className="relative z-10">
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
                  <Link
                    href="/gallery"
                    className="transform rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-base font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-xl sm:px-8 sm:py-4 sm:text-lg"
                  >
                    {t.hero.cta}
                  </Link>
                  <button className="rounded-full border border-white/30 bg-white/20 px-6 py-3 text-base font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/30 sm:px-8 sm:py-4 sm:text-lg">
                    <PlayCircle className="mr-2 inline-block h-4 w-4 sm:h-5 sm:w-5" />
                    {t.hero.videoButton}
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
                    {t.hero.stats.sold}
                  </div>
                </div>
                <div className="rounded-2xl bg-white/10 p-4 text-center backdrop-blur-sm sm:p-6">
                  <div className="mb-2 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                    1800+
                  </div>
                  <div className="text-xs text-white/80 sm:text-sm">
                    {t.hero.stats.customers}
                  </div>
                </div>
                <div className="rounded-2xl bg-white/10 p-4 text-center backdrop-blur-sm sm:p-6">
                  <div className="mb-2 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                    15+
                  </div>
                  <div className="text-xs text-white/80 sm:text-sm">
                    {t.hero.stats.experience}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Search & Filter Section */}
        <section className="bg-white/10 py-6 shadow-sm backdrop-blur-sm sm:py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
              <div className="relative w-full lg:flex-1">
                <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400 sm:h-5 sm:w-5" />
                <input
                  type="text"
                  placeholder={t.search.placeholder}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full rounded-xl border border-white/20 bg-white/10 py-2 pl-10 pr-4 text-sm text-white placeholder-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 sm:py-3 sm:pl-12 sm:text-base"
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
                        : "bg-white/20 text-white hover:bg-white/30 hover:shadow-sm"
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
        {/* background */}
        <section id="gallery" className="bg-gradient-to-br py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-5 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text py-2 text-5xl font-bold text-transparent">
                {t.highlights.title}
              </h2>
              <p className="text-xl text-gray-300">{t.highlights.subtitle}</p>
            </div>

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
                  {t.highlights.back}
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
                    <h2 className="mb-4 text-3xl font-bold text-white">
                      {selectedCar.brand} {selectedCar.model}
                    </h2>
                    <p className="mb-6 text-gray-300">
                      {selectedCar.description}
                    </p>

                    <div className="mb-8 grid grid-cols-2 gap-4 rounded-lg bg-gray-800/50 p-4">
                      <div>
                        <p className="text-sm text-gray-400">
                          {t.highlights.year}
                        </p>
                        <p className="font-medium text-white">
                          {selectedCar.year}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">
                          {t.highlights.mileage}
                        </p>
                        <p className="font-medium text-white">
                          {selectedCar.mileage} km
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">
                          {t.highlights.fuel}
                        </p>
                        <p className="font-medium text-white">
                          {selectedCar.fuel}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">
                          {t.highlights.transmission}
                        </p>
                        <p className="font-medium text-white">
                          {selectedCar.transmission}
                        </p>
                      </div>
                    </div>

                    <div className="mb-8">
                      <h3 className="mb-3 text-lg font-semibold text-white">
                        {t.highlights.features}
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
                        <p className="text-sm">{t.highlights.price}</p>
                        <p className="text-2xl font-bold">
                          €{selectedCar.price}
                        </p>
                      </div>
                      <div className="rounded-xl bg-gradient-to-r from-green-600 to-teal-600 p-6 text-center text-white">
                        <p className="text-sm">{t.highlights.financing}</p>
                        <p className="text-2xl font-bold">
                          €{selectedCar.financing}
                          {t.highlights.month}
                        </p>
                      </div>
                    </div>

                    <button className="mt-8 w-full rounded-full bg-gradient-to-r from-blue-600 to-purple-600 py-3 font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30">
                      {t.highlights.contactUs}
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              // Car Grid View
              <div className="relative">
                <div className="mx-4 sm:mx-8 lg:mx-12">
                  <div
                    id="car-slider"
                    className="grid grid-cols-2 gap-3 py-3 pb-6 sm:gap-4 md:grid-cols-2 lg:grid-cols-3"
                  >
                    {filteredCars.map((car) => (
                      <div
                        key={car.id}
                        className="group w-full transform cursor-pointer transition-all duration-500"
                        onClick={() => setSelectedCar(car)}
                      >
                        <div className="relative h-full overflow-hidden rounded-2xl border border-gray-700/50 bg-gradient-to-br from-gray-800/50 to-gray-900/80 shadow-xl backdrop-blur-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
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
                                  {t.carLabels.mileage}
                                </div>
                              </div>
                              <div className="text-center">
                                <div className="font-medium">{car.fuel}</div>
                                <div className="text-xs opacity-75">
                                  {t.carLabels.fuel}
                                </div>
                              </div>
                              <div className="text-center">
                                <div className="font-medium">
                                  {car.transmission}
                                </div>
                                <div className="text-xs opacity-75">
                                  {t.carLabels.transmission}
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
                              <button
                                onClick={() => setSelectedCar(car)}
                                className="flex-1 transform rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-2 py-1.5 text-xs font-medium text-white transition-all duration-300 hover:scale-105 hover:from-blue-500 hover:to-blue-600 sm:px-3 sm:py-2 sm:text-sm"
                              >
                                <Eye className="mr-1 inline-block h-3 w-3 sm:h-4 sm:w-4" />
                                {t.highlights.details}
                              </button>
                              <Link
                                href="/contact-us"
                                className="flex-1 transform rounded-lg bg-gradient-to-r from-purple-600 to-purple-700 px-2 py-1.5 text-center text-xs font-medium text-white transition-all duration-300 hover:scale-105 hover:from-purple-500 hover:to-purple-600 sm:px-3 sm:py-2 sm:text-sm"
                              >
                                <Mail className="mr-1 inline-block h-3 w-3 sm:h-4 sm:w-4" />
                                {t.highlights.contact}
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* View all button */}
            {!selectedCar && (
              <div className="mt-8 text-center">
                <Link
                  href="/gallery"
                  className="transform rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 px-10 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-blue-500/25"
                >
                  {t.highlights.viewAll}
                </Link>
              </div>
            )}
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
              {t.advantageItems.map((advantage, index) => {
                const IconComponent =
                  advantage.icon === "Shield"
                    ? Shield
                    : advantage.icon === "Award"
                      ? Award
                      : advantage.icon === "Users"
                        ? Users
                        : Shield;
                const title = advantage.title;
                const description = advantage.description;

                return (
                  <div
                    key={index}
                    className="group relative h-full transform transition-all duration-500 hover:scale-105"
                  >
                    <div className="flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:shadow-purple-500/20">
                      {/* Icon container */}
                      <div className="relative mb-8 flex justify-center">
                        <div className="relative">
                          <div className="absolute inset-0 scale-125 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-50 blur-lg transition-opacity duration-500 group-hover:opacity-100"></div>
                          <div className="relative transform rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-6 shadow-2xl transition-all duration-500 group-hover:rotate-6 group-hover:shadow-blue-500/50">
                            <IconComponent className="relative z-10 h-10 w-10 text-white" />
                          </div>
                        </div>
                      </div>

                      <div className="relative z-10 flex flex-1 flex-col justify-center text-center">
                        <h3 className="mb-4 text-2xl font-bold text-white transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent">
                          {title}
                        </h3>
                        <p className="flex-1 leading-relaxed text-gray-300 transition-colors duration-500 group-hover:text-white">
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

      <Footer language={language} />
    </div>
  );
};

export default BahramAutohaus;
