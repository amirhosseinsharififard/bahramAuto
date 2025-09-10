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

// React imports

// Lucide React icons for UI elements
import { Building, CheckCircle, Globe } from 'lucide-react';
// Next.js components for optimized images and navigation
import Image from 'next/image';
import Link from 'next/link';

// Custom components
import AnimatedBackground from '@/components/AnimatedBackground'; // Animated background effects
import Footer from '@/components/Footer'; // Footer component
import Header from '@/components/Header'; // Header with navigation
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
          {/* Page header */}
          <div className="mb-16 text-center">
            <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
              {t('about.title')}
            </h1>
            <p className="text-xl text-gray-300">{t('about.subtitle')}</p>
          </div>

          {/* Hero Image Section */}
          <div className="relative mb-20 h-96 overflow-hidden rounded-3xl border border-white/10">
            <Image
              src="/images/showroom.jpg"
              alt="Bahram Autohaus Showroom"
              fill
              className="h-full w-full object-cover"
            />
            {/* Dark gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-purple-900/80 to-transparent"></div>
            {/* Overlay text with company story */}
            <div className="absolute bottom-8 left-8 max-w-2xl text-white">
              <h2 className="mb-4 text-3xl font-bold">
                {t('about.story.title')}
              </h2>
              <p className="text-lg text-gray-200">
                {t('about.story.description')}
              </p>
            </div>
          </div>

          {/* Company Milestones Timeline */}
          <div className="mb-20 rounded-2xl border border-white/10 bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-8 shadow-xl backdrop-blur-sm">
            <h2 className="mb-12 text-center text-3xl font-bold text-white">
              Unsere Meilensteine
            </h2>
            <div className="relative">
              {/* Vertical timeline line */}
              <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 transform bg-blue-500/30 md:block"></div>

              {/* Milestones list */}
              <div className="space-y-12">
                {[0, 1, 2, 3, 4].map((index) => (
                  <div
                    key={index}
                    className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
                  >
                    {/* Milestone content card */}
                    <div className="md:w-1/2 md:px-8">
                      <div
                        className={`rounded-2xl bg-gradient-to-br from-gray-800/70 to-gray-900/80 p-6 shadow-lg backdrop-blur-sm ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}
                      >
                        {/* Milestone header with icon and title */}
                        <div className="mb-4 flex items-center">
                          <div className="mr-4 rounded-full bg-blue-500/20 p-3">
                            <Building className="h-6 w-6 text-blue-400" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white">
                              {t(`about.story.milestones.${index}.title`)}
                            </h3>
                            <p className="text-blue-400">
                              {t(`about.story.milestones.${index}.year`)}
                            </p>
                          </div>
                        </div>
                        {/* Milestone description */}
                        <p className="text-gray-300">
                          {t(`about.story.milestones.${index}.description`)}
                        </p>
                      </div>
                    </div>

                    {/* Timeline node */}
                    <div className="hidden md:flex md:w-0 md:justify-center">
                      <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                        <span className="font-bold">{index + 1}</span>
                        {/* Timeline connectors */}
                        <div className="absolute -left-1/2 top-1/2 h-1 w-1/2 -translate-y-1/2 transform bg-blue-500/30"></div>
                        <div className="absolute -right-1/2 top-1/2 h-1 w-1/2 -translate-y-1/2 transform bg-blue-500/30"></div>
                      </div>
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className="md:w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Company Values Section */}
          <div className="mb-20 rounded-2xl border border-white/10 bg-gradient-to-r from-indigo-900/80 via-purple-900/80 to-slate-900/80 p-8 text-white shadow-xl backdrop-blur-sm">
            {/* Section header */}
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">
                {t('about.values.title')}
              </h2>
              <p className="text-blue-200">Was uns antreibt und auszeichnet</p>
            </div>

            {/* Values grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[0, 1, 2, 3].map((index) => (
                <div
                  key={index}
                  className="rounded-xl bg-white/10 p-6 backdrop-blur-sm"
                >
                  {/* Value icon */}
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-500/20">
                    <CheckCircle className="h-8 w-8 text-blue-400" />
                  </div>
                  {/* Value title */}
                  <h3 className="mb-2 text-xl font-bold text-white">
                    {t(`about.values.${index}.title`)}
                  </h3>
                  {/* Value description */}
                  <p className="text-blue-100">
                    {t(`about.values.${index}.description`)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-20 rounded-2xl border border-white/10 bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-8 shadow-lg backdrop-blur-sm">
            {/* Section header */}
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-white">
                {t('about.team.title')}
              </h2>
              <p className="text-gray-300">{t('about.team.description')}</p>
            </div>

            {/* Team members grid */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[0, 1, 2, 3].map((index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/70 to-gray-900/80 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
                >
                  {/* Team member photo */}
                  <div className="h-64 bg-gray-700">
                    <Image
                      src={`/images/team/member-${index + 1}.jpg`}
                      alt={t(`about.team.${index}.name`)}
                      width={300}
                      height={300}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  {/* Team member info */}
                  <div className="p-6">
                    <h3 className="mb-1 text-xl font-bold text-white">
                      {t(`about.team.${index}.name`)}
                    </h3>
                    <p className="mb-4 text-blue-400">
                      {t(`about.team.${index}.position`)}
                    </p>
                    <p className="text-gray-300">
                      {t(`about.team.${index}.bio`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call-to-Action Section */}
          <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-blue-800/30 to-purple-800/30 p-8 shadow-lg backdrop-blur-sm">
            <div className="flex flex-col items-center text-center">
              {/* CTA icon */}
              <div className="mb-6 rounded-full bg-blue-500/20 p-4">
                <Globe className="h-10 w-10 text-blue-400" />
              </div>
              {/* CTA title */}
              <h2 className="mb-4 text-3xl font-bold text-white">
                {t('about.cta.title')}
              </h2>
              {/* CTA description */}
              <p className="mb-8 max-w-2xl text-gray-300">
                {t('about.cta.description')}
              </p>
              {/* CTA button */}
              <Link
                href="/contact-us"
                className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30"
              >
                {t('about.cta.button')}
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer component with company information and links */}
      <Footer language={language} />
    </div>
  );
};

// Export the component as default
export default AboutPage;
