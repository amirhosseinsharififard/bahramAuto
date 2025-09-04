/**
 * Root Layout Component
 *
 * This is the root layout component for the Bahram Autohaus Next.js application.
 * It wraps all pages and provides the basic HTML structure, metadata, and
 * global context providers.
 *
 * Key Features:
 * - Sets up HTML document structure
 * - Provides global metadata for SEO
 * - Includes PWA manifest for mobile app functionality
 * - Wraps all content with LanguageProvider for internationalization
 * - Applies global CSS styles
 * - Prevents horizontal scrolling with overflow-x-hidden
 *
 * @fileoverview Root layout component for Bahram Autohaus
 * @author Amir Hossein Shrififard
 * @version 1.0.0
 */

// Next.js type imports for metadata and React node types
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

// Import language provider for internationalization
import { LanguageProvider } from '@/contexts/LanguageContext';

// Import global CSS styles
import './globals.css';

/**
 * Application metadata configuration
 *
 * This metadata is used for SEO, social media sharing, and PWA functionality.
 * It defines the title, description, and other meta information for the site.
 */
export const metadata: Metadata = {
  title: 'Bahram Autohaus - Premium Cars Deutschland', // Main page title
  manifest: '/manifest.webmanifest', // PWA manifest for mobile app functionality
};

/**
 * Root Layout Component
 *
 * This component serves as the root layout for all pages in the application.
 * It provides the basic HTML structure and wraps all content with necessary
 * context providers.
 *
 * @param {object} props - Component props
 * @param {ReactNode} props.children - Child components (pages)
 * @returns {JSX.Element} Root layout component
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen w-full overflow-x-hidden">
        {/* Language provider wraps all content for internationalization */}
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
