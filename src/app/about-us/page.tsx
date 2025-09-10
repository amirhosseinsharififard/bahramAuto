/**
 * About Us Page Component
 *
 * This page displays comprehensive information about Bahram Autohaus,
 * including company history, milestones, values, team members, and
 * a call-to-action section. The content is fully internationalized
 * with support for German and Persian languages.
 *
 * Key Features:
 * - Company history and milestones timeline
 * - Core values and principles
 * - Team member profiles
 * - Responsive design with animations
 * - Internationalization support
 * - Call-to-action for contact
 *
 * @fileoverview About us page for Bahram Autohaus
 * @author Amir Hossein Shrififard
 * @version 1.0.0
 */

'use client'; // Enable client-side rendering

// Custom components
import {
  AboutCTASection,
  AboutHeroSection,
  AnimatedBackground,
  Footer,
  Header,
  MilestonesSection,
  TeamSection,
  ValuesSection,
} from '@/components';
// Custom hooks and contexts
import { useLanguage } from '@/contexts/LanguageContext'; // Language context for translations

/**
 * About Page Component
 *
 * This component renders the about us page with company information,
 * history, values, and team details. It uses hardcoded content for
 * demonstration purposes, but in a real application, this could be
 * loaded from a CMS or database.
 *
 * @returns {JSX.Element} About us page component
 */
const AboutPage = () => {
  // Get language context for internationalization
  const { language, setLanguage, t } = useLanguage();

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"
      dir={language === 'fa' ? 'rtl' : 'ltr'} // Set text direction based on language
    >
      {/* Animated background with floating gradient orbs */}
      <AnimatedBackground />

      {/* Header with navigation and language switcher */}
      <Header language={language} setLanguage={setLanguage} />

      {/* Main content area */}
      <main className="relative z-10 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* About Hero Section */}
          <AboutHeroSection t={t} />

          {/* Company Milestones Timeline */}
          <MilestonesSection t={t} />

          {/* Company Values Section */}
          <ValuesSection t={t} />

          {/* Team Section */}
          <TeamSection t={t} />

          {/* Call-to-Action Section */}
          <AboutCTASection t={t} />
        </div>
      </main>

      {/* Footer component with company information and links */}
      <Footer language={language} />
    </div>
  );
};

// Export the component as default
export default AboutPage;
