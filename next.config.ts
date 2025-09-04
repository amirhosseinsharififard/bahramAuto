/**
 * Next.js Configuration
 * 
 * This file configures Next.js for the Bahram Autohaus application.
 * It includes PWA (Progressive Web App) configuration and image optimization settings.
 * 
 * Key Features:
 * - PWA support for mobile app-like experience
 * - Image optimization with remote patterns
 * - Development/production environment handling
 * 
 * @fileoverview Next.js configuration for Bahram Autohaus
 * @author Amir Hossein Shrififard
 * @version 1.0.0
 */

// Next.js type imports
import type { NextConfig } from "next";

// PWA plugin for Progressive Web App functionality
import withPWA from "next-pwa";

/**
 * Next.js configuration object
 * 
 * This configuration defines how Next.js should behave in different environments.
 * It includes image optimization settings and other Next.js-specific options.
 */
const nextConfig: NextConfig = {
  // Image optimization configuration
  images: {
    // Allow images from external domains
    remotePatterns: [
      new URL("https://upmusics.com/wp-content/**"),      // External music content
      new URL("https://biamusic.ir/wp-content/uploads/**"), // External music uploads
    ],
  },
};

/**
 * PWA configuration
 * 
 * This configuration enables Progressive Web App features including:
 * - Service worker registration
 * - Offline functionality
 * - App-like experience on mobile devices
 * - Automatic updates
 */
const pwaConfig = withPWA({
  dest: "public",                                    // Directory for PWA files
  register: true,                                    // Register service worker
  skipWaiting: true,                                 // Skip waiting for service worker updates
  disable: process.env.NODE_ENV === "development",  // Disable PWA in development
});

// Export the configured Next.js app with PWA support
export default pwaConfig(nextConfig as any);
