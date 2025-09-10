/**
 * Bahram Autohaus - Main Homepage Component
 *
 * This is the main landing page for the Bahram Autohaus website.
 * It displays a premium car dealership interface with:
 * - Hero section with company introduction
 * - Car search and filtering functionality
 * - Car gallery with detailed views
 * - Company advantages section
 * - Video modal for promotional content
 * - Admin panel for content management
 *
 * The component uses Excel-based content management system where
 * all car data and translations are loaded from Excel files.
 *
 * @fileoverview Main homepage component for Bahram Autohaus
 * @author Amir Hossein Shrififard
 * @version 1.0.0
 */

'use client'; // Enable client-side rendering for this component

// React hooks for state management and side effects
import { useEffect, useState } from 'react';

// Lucide React icons for UI elements
import {
  Award, // Award icon for advantages section
  Calendar, // Calendar icon for car year display
  Eye, // Eye icon for "view details" buttons
  Fuel, // Fuel icon for fuel type display
  Gauge, // Gauge icon for mileage display
  Heart, // Heart icon for favorites
  Mail, // Mail icon for contact buttons
  PlayCircle, // Play icon for video modal
  Search, // Search icon for search input
  Settings, // Settings icon for admin panel and transmission
  Shield, // Shield icon for advantages section
  Users, // Users icon for advantages section
  X, // X icon for closing modals
} from 'lucide-react';
// Next.js components for optimized images and navigation
import Image from 'next/image'; // Optimized image component
import Link from 'next/link'; // Client-side navigation component

// Custom components
import { AdminPanel } from '@/components/AdminPanel'; // Admin panel for content management
import AnimatedBackground from '@/components/AnimatedBackground'; // Animated background effects
import Footer from '@/components/Footer'; // Footer component
import Header from '@/components/Header'; // Header component with navigation
// Custom hooks and contexts
import { useLanguage } from '@/contexts/LanguageContext'; // Language context for translations
import { useExcelData } from '@/hooks/useExcelData'; // Hook for loading Excel data

/**
 * Main Bahram Autohaus component
 * @returns {JSX.Element} The complete homepage component
 */
const BahramAutohaus = () => {
  // Get language context values for internationalization
  const { language, setLanguage, t, translations, loading, error } =
    useLanguage();

  // State for car filtering functionality
  const [selectedFilter, setSelectedFilter] = useState('alle'); // Current selected filter (alle, limousine, suv, etc.)
  const [searchTerm, setSearchTerm] = useState(''); // Search input value for filtering cars

  // State for car detail view
  const [selectedCar, setSelectedCar] = useState<any | null>(null); // Currently selected car for detail view

  // State for video modal functionality
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false); // Whether video modal is open
  const [isModalAnimating, setIsModalAnimating] = useState(false); // Animation state for modal transitions

  // State for admin panel functionality
  const [isAdminPanelOpen, setIsAdminPanelOpen] = useState(false); // Whether admin panel is open

  // Load car data from Excel files using custom hook
  const { cars } = useExcelData();

  // Use Excel data if available, otherwise fallback to empty array
  // This ensures the component works even if Excel files are not loaded
  const availableCars = cars.length > 0 ? cars : [];

  /**
   * Handle modal animation states for smooth transitions
   * When modal opens, immediately set animating to true
   * When modal closes, wait 300ms before setting animating to false
   * This allows for smooth fade-out animations
   */
  useEffect(() => {
    if (isVideoModalOpen) {
      setIsModalAnimating(true); // Start animation when modal opens
    } else {
      // Delay hiding animation state to allow fade-out effect
      const timer = setTimeout(() => setIsModalAnimating(false), 300);
      return () => clearTimeout(timer); // Cleanup timer on unmount
    }
  }, [isVideoModalOpen]);

  /**
   * Close video modal function
   * Sets the modal open state to false, triggering close animation
   */
  const closeModal = () => {
    setIsVideoModalOpen(false);
  };

  /**
   * Filter cars based on selected category and search term
   * Filters by:
   * 1. Category (alle, limousine, suv, sportwagen, kombi)
   * 2. Brand or model name (case-insensitive search)
   */
  const filteredCars = availableCars.filter(
    (car) =>
      // Filter by category - 'alle' shows all categories
      (selectedFilter === 'alle' || car.category === selectedFilter) &&
      // Filter by search term in brand or model name
      (car.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.model.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  /**
   * Show loading state while Excel data is being fetched
   * Displays a centered spinner with loading message
   * Uses the same gradient background as the main page for consistency
   */
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="text-center">
          {/* Animated spinning loader */}
          <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-b-2 border-white"></div>
          <p className="text-white">Loading content...</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"
      dir={t('direction')} // Set text direction based on language (RTL for Persian, LTR for German)
    >
      {/* Animated background with floating gradient orbs */}
      <AnimatedBackground />

      {/* Header with navigation and language switcher */}
      <Header language={language} setLanguage={setLanguage} />

      {/* Error notification - shows if Excel data loading fails */}
      {error && (
        <div className="fixed right-4 top-4 z-50 rounded-lg bg-yellow-500 px-4 py-2 text-black shadow-lg">
          <p className="text-sm">{error}</p>
        </div>
      )}

      {/* Admin Panel Toggle - only visible in development mode */}
      {/* Allows content managers to refresh Excel data without restarting the app */}
      {process.env.NODE_ENV === 'development' && (
        <button
          onClick={() => setIsAdminPanelOpen(true)}
          className="fixed bottom-4 right-4 z-40 rounded-full bg-gray-800 p-3 text-white shadow-lg transition-colors hover:bg-gray-700"
          title="Content Management"
        >
          <Settings className="h-5 w-5" />
        </button>
      )}

      {/* Main Content Container */}
      <main className="relative z-10">
        {/* Hero Section - Main landing area with company introduction */}
        <section id="home" className="relative overflow-hidden py-24">
          {/* Dark gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90"></div>

          {/* Hero background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(/images/cars/hero-bg.jpg)', // Premium car showroom background
            }}
          ></div>

          {/* Hero content container */}
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
              {/* Hero text content */}
              <div className="text-center lg:text-left">
                {/* Main headline - dynamically sized for different screens */}
                <h1 className="mb-4 text-4xl font-bold leading-tight text-white sm:mb-6 sm:text-5xl lg:text-6xl xl:text-7xl">
                  {t('hero.title')}
                </h1>

                {/* Subtitle - company tagline */}
                <p className="mb-3 text-lg text-white/90 sm:mb-4 sm:text-xl lg:text-2xl">
                  {t('hero.subtitle')}
                </p>

                {/* Description - company introduction */}
                <p className="mx-auto mb-6 max-w-xl text-base text-white/80 sm:mb-8 sm:text-lg lg:mx-0">
                  {t('hero.description')}
                </p>
                {/* Call-to-action buttons */}
                <div className="mb-6 flex flex-col justify-center gap-3 sm:mb-8 sm:flex-row sm:gap-4 lg:justify-start">
                  {/* Primary CTA - View Gallery */}
                  <Link
                    href="/gallery"
                    className="transform rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-base font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-xl sm:px-8 sm:py-4 sm:text-lg"
                  >
                    {t('hero.cta')}
                  </Link>

                  {/* Secondary CTA - Watch Video */}
                  <button
                    onClick={() => setIsVideoModalOpen(true)}
                    className="rounded-full border border-white/30 bg-white/20 px-6 py-3 text-base font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/30 sm:px-8 sm:py-4 sm:text-lg"
                  >
                    <PlayCircle className="mr-2 inline-block h-4 w-4 sm:h-5 sm:w-5" />
                    {t('hero.videoButton')}
                  </button>
                </div>
              </div>

              {/* Company Statistics - Trust indicators */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
                {/* Cars Sold Statistic */}
                <div className="rounded-2xl bg-white/10 p-4 text-center backdrop-blur-sm sm:p-6">
                  <div className="mb-2 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                    2500+
                  </div>
                  <div className="text-xs text-white/80 sm:text-sm">
                    {t('hero.stats.sold')}
                  </div>
                </div>

                {/* Customers Statistic */}
                <div className="rounded-2xl bg-white/10 p-4 text-center backdrop-blur-sm sm:p-6">
                  <div className="mb-2 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                    1800+
                  </div>
                  <div className="text-xs text-white/80 sm:text-sm">
                    {t('hero.stats.customers')}
                  </div>
                </div>

                {/* Years of Experience Statistic */}
                <div className="rounded-2xl bg-white/10 p-4 text-center backdrop-blur-sm sm:p-6">
                  <div className="mb-2 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                    15+
                  </div>
                  <div className="text-xs text-white/80 sm:text-sm">
                    {t('hero.stats.experience')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Search & Filter Section - Car filtering interface */}
        <section className="bg-white/10 py-6 shadow-sm backdrop-blur-sm sm:py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
              {/* Search Input */}
              <div className="relative w-full lg:flex-1">
                <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400 sm:h-5 sm:w-5" />
                <input
                  type="text"
                  placeholder={t('search.placeholder')}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full rounded-xl border border-white/20 bg-white/10 py-2 pl-10 pr-4 text-sm text-white placeholder-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 sm:py-3 sm:pl-12 sm:text-base"
                />
              </div>

              {/* Category Filter Buttons */}
              <div className="flex w-full flex-wrap justify-center gap-2 lg:w-auto">
                {[
                  { key: 'alle', label: t('search.filters.all') }, // Show all cars
                  { key: 'limousine', label: t('search.filters.limousine') }, // Sedan cars
                  { key: 'suv', label: t('search.filters.suv') }, // SUV vehicles
                  { key: 'sportwagen', label: t('search.filters.sportwagen') }, // Sports cars
                  { key: 'kombi', label: t('search.filters.kombi') }, // Station wagons
                ].map((filter) => (
                  <button
                    key={filter.key}
                    onClick={() => setSelectedFilter(filter.key)}
                    className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-300 sm:px-4 sm:py-2 sm:text-sm ${
                      selectedFilter === filter.key
                        ? 'bg-blue-600 text-white shadow-md' // Active filter style
                        : 'bg-white/20 text-white hover:bg-white/30 hover:shadow-sm' // Inactive filter style
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Car Highlights Section - Featured vehicles display */}
        <section
          id="gallery"
          className="bg-gradient-to-br from-slate-800 via-gray-900 to-slate-900 py-16"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="mb-12 text-center">
              <h2 className="mb-5 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text py-2 text-5xl font-bold text-transparent">
                {t('highlights.title')}
              </h2>
              <p className="text-xl text-gray-300">
                {t('highlights.subtitle')}
              </p>
            </div>

            {/* Conditional rendering: Car Detail View or Car Grid View */}
            {selectedCar ? (
              // Car Detail View - Shows detailed information about selected car
              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-gray-800/80 to-gray-900/90 p-6 shadow-xl backdrop-blur-sm">
                {/* Back button to return to grid view */}
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
                  {t('highlights.back')}
                </button>

                {/* Car detail content grid */}
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  {/* Car image */}
                  <div className="relative h-96 overflow-hidden rounded-xl">
                    <Image
                      src={selectedCar.image}
                      alt={`${selectedCar.brand} ${selectedCar.model}`}
                      fill
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* Car information */}
                  <div>
                    {/* Car title */}
                    <h2 className="mb-4 text-3xl font-bold text-white">
                      {selectedCar.brand} {selectedCar.model}
                    </h2>

                    {/* Car description */}
                    <p className="mb-6 text-gray-300">
                      {selectedCar.description}
                    </p>

                    {/* Car specifications grid */}
                    <div className="mb-8 grid grid-cols-2 gap-4 rounded-lg bg-gray-800/50 p-4">
                      {/* Year specification */}
                      <div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-gray-400" />
                          <div>
                            <p className="text-sm text-gray-400">
                              {t('highlights.year')}
                            </p>
                            <p className="font-medium text-white">
                              {selectedCar.year}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Mileage specification */}
                      <div>
                        <div className="flex items-center gap-2">
                          <Gauge className="h-4 w-4 text-gray-400" />
                          <div>
                            <p className="text-sm text-gray-400">
                              {t('highlights.mileage')}
                            </p>
                            <p className="font-medium text-white">
                              {selectedCar.mileage} km
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Fuel type specification */}
                      <div>
                        <div className="flex items-center gap-2">
                          <Fuel className="h-4 w-4 text-gray-400" />
                          <div>
                            <p className="text-sm text-gray-400">
                              {t('highlights.fuel')}
                            </p>
                            <p className="font-medium text-white">
                              {selectedCar.fuel}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Transmission specification */}
                      <div>
                        <div className="flex items-center gap-2">
                          <Settings className="h-4 w-4 text-gray-400" />
                          <div>
                            <p className="text-sm text-gray-400">
                              {t('highlights.transmission')}
                            </p>
                            <p className="font-medium text-white">
                              {selectedCar.transmission}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Car features list */}
                    <div className="mb-8">
                      <h3 className="mb-3 text-lg font-semibold text-white">
                        {t('highlights.features')}
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
                          )
                        )}
                      </div>
                    </div>

                    {/* Pricing information */}
                    <div className="flex flex-col gap-4 sm:flex-row">
                      {/* Total price */}
                      <div className="rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-center text-white">
                        <p className="text-sm">{t('highlights.price')}</p>
                        <p className="text-2xl font-bold">
                          €{selectedCar.price}
                        </p>
                      </div>

                      {/* Monthly financing */}
                      <div className="rounded-xl bg-gradient-to-r from-green-600 to-teal-600 p-6 text-center text-white">
                        <p className="text-sm">{t('highlights.financing')}</p>
                        <p className="text-2xl font-bold">
                          €{selectedCar.financing}
                          {t('highlights.month')}
                        </p>
                      </div>
                    </div>

                    {/* Contact button */}
                    <Link
                      href="/contact-us"
                      className="mt-8 w-full rounded-full bg-gradient-to-r from-blue-600 to-purple-600 py-3 font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 text-center block"
                    >
                      {t('highlights.contactUs')}
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              // Car Grid View - Shows all cars in a responsive grid layout
              <div className="relative">
                <div className="mx-4 sm:mx-8 lg:mx-12">
                  {/* Responsive car grid */}
                  <div
                    id="car-slider"
                    className="grid grid-cols-1 gap-3 py-3 pb-6 sm:gap-4 md:grid-cols-2 lg:grid-cols-3"
                  >
                    {filteredCars.slice(0, 6).map((car) => (
                      <div
                        key={car.id}
                        className="group w-full transform cursor-pointer transition-all duration-500"
                        onClick={() => setSelectedCar(car)}
                      >
                        {/* Car card container with hover effects */}
                        <div className="relative h-full overflow-hidden rounded-2xl border border-gray-700/50 bg-gradient-to-br from-gray-800/50 to-gray-900/80 shadow-xl backdrop-blur-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                          {/* Car image section */}
                          <div className="relative h-48 overflow-hidden sm:h-52">
                            <Image
                              src={car.image}
                              alt={`${car.brand} ${car.model}`}
                              fill
                              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Dark gradient overlay for better text readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>

                            {/* Floating price tag */}
                            <div className="absolute right-4 top-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 text-lg font-bold text-white shadow-lg">
                              €{car.price}
                            </div>

                            {/* Favorite button */}
                            <button className="absolute left-4 top-4 rounded-full bg-black/50 p-2 transition-colors hover:bg-black/70">
                              <Heart className="h-5 w-5 text-white" />
                            </button>
                          </div>

                          {/* Car card content */}
                          <div className="relative z-10 p-3 sm:p-4 lg:p-6">
                            {/* Car title and year */}
                            <div className="mb-3 flex items-center justify-between">
                              <h3 className="text-base font-bold text-white transition-colors duration-300 group-hover:text-blue-400 sm:text-lg lg:text-xl">
                                {car.brand} {car.model}
                              </h3>
                              <span className="text-xs text-gray-400 sm:text-sm">
                                {car.year}
                              </span>
                            </div>

                            {/* Car specifications grid */}
                            <div className="mb-4 grid grid-cols-3 gap-1 text-xs text-gray-300 sm:gap-2 sm:text-sm">
                              {/* Mileage specification */}
                              <div className="text-center">
                                <div className="flex items-center justify-center gap-1">
                                  <span className="font-medium">
                                    {car.mileage}
                                  </span>
                                </div>
                                <div className="flex items-center justify-center gap-2 text-xs opacity-75">
                                  <Gauge className="h-3 w-3 text-gray-400" />
                                  <p>{t('carLabels.mileage')}</p>
                                </div>
                              </div>

                              {/* Fuel type specification */}
                              <div className="text-center">
                                <div className="flex items-center justify-center gap-1">
                                  <span className="font-medium">
                                    {car.fuel}
                                  </span>
                                </div>
                                <div className="flex items-center justify-center gap-2 text-xs opacity-75">
                                  <Fuel className="h-3 w-3 text-gray-400" />
                                  <p>{t('carLabels.fuel')}</p>
                                </div>
                              </div>

                              {/* Transmission specification */}
                              <div className="text-center">
                                <div className="flex items-center justify-center gap-1">
                                  <span className="font-medium">
                                    {car.transmission}
                                  </span>
                                </div>
                                <div className="flex items-center justify-center gap-2 text-xs opacity-75">
                                  <Settings className="h-3 w-3 text-gray-400" />
                                  <p>{t('carLabels.transmission')}</p>
                                </div>
                              </div>
                            </div>

                            {/* Car features preview (shows first 2 features) */}
                            <div className="mb-4 flex flex-wrap gap-1">
                              {car.features
                                .slice(0, 2) // Show only first 2 features to keep card compact
                                .map(
                                  (feature: string, featureIndex: number) => (
                                    <span
                                      key={featureIndex}
                                      className="rounded-lg border border-blue-500/30 bg-blue-500/20 px-2 py-1 text-xs text-blue-300"
                                    >
                                      {feature}
                                    </span>
                                  )
                                )}
                              {/* Show count of additional features if more than 2 */}
                              {car.features.length > 2 && (
                                <span className="rounded-lg bg-gray-500/20 px-2 py-1 text-xs text-gray-300">
                                  +{car.features.length - 2}
                                </span>
                              )}
                            </div>

                            {/* Monthly financing information */}
                            <div className="mb-4 rounded-lg border border-green-500/20 bg-green-500/10 p-2 sm:p-3">
                              <div className="text-center text-xs text-green-400 sm:text-sm">
                                {t('highlights.financing')} €{car.financing}
                                {t('highlights.month')}
                              </div>
                            </div>

                            {/* Action buttons */}
                            <div className="flex flex-col gap-2 sm:flex-row">
                              {/* View details button */}
                              <button
                                onClick={() => setSelectedCar(car)}
                                className="flex-1 transform rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-2 py-1.5 text-xs font-medium text-white transition-all duration-300 hover:scale-105 hover:from-blue-500 hover:to-blue-600 sm:px-3 sm:py-2 sm:text-sm"
                              >
                                <Eye className="mr-1 inline-block h-3 w-3 sm:h-4 sm:w-4" />
                                {t('highlights.details')}
                              </button>

                              {/* Contact button */}
                              <Link
                                href="/contact-us"
                                className="flex-1 transform rounded-lg bg-gradient-to-r from-purple-600 to-purple-700 px-2 py-1.5 text-center text-xs font-medium text-white transition-all duration-300 hover:scale-105 hover:from-purple-500 hover:to-purple-600 sm:px-3 sm:py-2 sm:text-sm"
                              >
                                <Mail className="mr-1 inline-block h-3 w-3 sm:h-4 sm:w-4" />
                                {t('highlights.contact')}
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

            {/* View all cars button - only shown when not in detail view */}
            {!selectedCar && (
              <div className="mt-8 text-center">
                <Link
                  href="/gallery"
                  className="transform rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 px-10 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-blue-500/25"
                >
                  {t('highlights.viewAll')}
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* Company Advantages Section - Why choose Bahram Autohaus */}
        <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 py-20">
          {/* Animated background elements for visual appeal */}
          <div className="absolute inset-0">
            <div className="absolute left-10 top-10 h-72 w-72 animate-pulse rounded-full bg-blue-500/10 blur-3xl"></div>
            <div className="absolute bottom-10 right-10 h-96 w-96 animate-pulse rounded-full bg-purple-500/10 blur-3xl"></div>
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Section header */}
            <div className="mb-16 text-center">
              <h2 className="mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text py-2 text-5xl font-bold text-transparent">
                {t('advantages.title')}
              </h2>
              <p className="mx-auto max-w-2xl text-xl text-gray-300">
                {t('advantages.subtitle')}
              </p>
            </div>

            {/* Advantages grid */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {translations[language].advantageItems.map(
                (advantage: any, index: number) => {
                  // Dynamic icon selection based on advantage type
                  const IconComponent =
                    advantage?.[index].icon === 'Shield'
                      ? Shield
                      : advantage?.[index].icon === 'Award'
                        ? Award
                        : advantage?.[index].icon === 'Users'
                          ? Users
                          : Shield; // Default to Shield icon

                  const title = advantage?.[index]?.title;
                  const description = advantage?.[index]?.description;

                  return (
                    <div
                      key={index}
                      className="group relative h-full transform transition-all duration-500 hover:scale-105"
                    >
                      {/* Advantage card */}
                      <div className="flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:shadow-purple-500/20">
                        {/* Icon container with animated effects */}
                        <div className="relative mb-8 flex justify-center">
                          <div className="relative">
                            {/* Glow effect behind icon */}
                            <div className="absolute inset-0 scale-125 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-50 blur-lg transition-opacity duration-500 group-hover:opacity-100"></div>
                            {/* Icon container with rotation effect */}
                            <div className="relative transform rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-6 shadow-2xl transition-all duration-500 group-hover:rotate-6 group-hover:shadow-blue-500/50">
                              <IconComponent className="relative z-10 h-10 w-10 text-white" />
                            </div>
                          </div>
                        </div>

                        {/* Content area */}
                        <div className="relative z-10 flex flex-1 flex-col justify-center text-center">
                          <h3 className="mb-4 text-2xl font-bold text-white transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent">
                            {title}
                          </h3>
                          <p className="flex-1 leading-relaxed text-gray-300 transition-colors duration-500 group-hover:text-white">
                            {description}
                          </p>
                        </div>

                        {/* Hover overlay effect */}
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </section>
      </main>

      {/* Footer component with company information and links */}
      <Footer language={language} />

      {/* Video Modal - Promotional video player */}
      {(isVideoModalOpen || isModalAnimating) && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${
            isVideoModalOpen ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Modal backdrop with blur effect */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
            onClick={closeModal}
          />

          {/* Modal content container */}
          <div
            className={`relative mx-4 w-full max-w-4xl transform transition-all duration-300 ease-out ${
              isVideoModalOpen
                ? 'translate-y-0 scale-100 opacity-100'
                : 'translate-y-4 scale-95 opacity-0'
            }`}
          >
            <div className="relative overflow-hidden rounded-2xl bg-gray-900 shadow-2xl">
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute right-4 top-4 z-10 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Video player container */}
              <div className="relative aspect-video w-full">
                <video
                  className="h-full w-full object-cover"
                  controls
                  autoPlay
                  onEnded={closeModal}
                  poster="/images/cars/hero-bg.jpg"
                >
                  {/* Multiple video formats for browser compatibility */}
                  <source
                    src="/videos/bahram-autohaus-intro.mp4"
                    type="video/mp4"
                  />
                  <source
                    src="/videos/bahram-autohaus-intro.webm"
                    type="video/webm"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Video information */}
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-white">
                  {t('hero.title')} - {t('hero.subtitle')}
                </h3>
                <p className="text-gray-300">{t('hero.description')}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Admin Panel - Content management interface */}
      <AdminPanel
        isOpen={isAdminPanelOpen}
        onClose={() => setIsAdminPanelOpen(false)}
      />
    </div>
  );
};

// Export the main component as default
export default BahramAutohaus;
