/**
 * Bahram Autohaus - Main Homepage Component
 *
 * This is the main landing page for the Bahram Autohaus website.
 * It displays a premium car dealership interface with modular components:
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
 * @version 2.0.0
 */

'use client'; // Enable client-side rendering for this component

// React hooks for state management and side effects
import { useState } from 'react';

// Lucide React icons for UI elements
import { Settings } from 'lucide-react';

// Custom components
import {
  AdminPanel,
  AdvantagesSection,
  AnimatedBackground,
  CarGallerySection,
  Footer,
  Header,
  HeroSection,
  LoadingComponent,
  SearchFilterSection,
  VideoModal,
} from '@/components';
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

  // State for admin panel functionality
  const [isAdminPanelOpen, setIsAdminPanelOpen] = useState(false); // Whether admin panel is open

  // Load car data from Excel files using custom hook
  const { cars } = useExcelData();

  // Use Excel data if available, otherwise fallback to empty array
  // This ensures the component works even if Excel files are not loaded
  const availableCars = cars.length > 0 ? cars : [];

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
   */
  if (loading) {
    return <LoadingComponent />;
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
        {/* Hero Section */}
        <HeroSection t={t} onVideoClick={() => setIsVideoModalOpen(true)} />

        {/* Search & Filter Section */}
        <SearchFilterSection
          t={t}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />

        {/* Car Gallery Section */}
        <CarGallerySection
          t={t}
          filteredCars={filteredCars}
          selectedCar={selectedCar}
          onViewDetails={setSelectedCar}
          onBack={() => setSelectedCar(null)}
        />

        {/* Company Advantages Section */}
        <AdvantagesSection
          t={t}
          translations={translations}
          language={language}
        />
      </main>

      {/* Footer component with company information and links */}
      <Footer language={language} />

      {/* Video Modal */}
      <VideoModal isOpen={isVideoModalOpen} onClose={closeModal} t={t} />

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
