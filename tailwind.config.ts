/**
 * Tailwind CSS Configuration
 * 
 * This file configures Tailwind CSS for the Bahram Autohaus application.
 * It defines custom colors, fonts, animations, and other design system tokens.
 * 
 * Key Features:
 * - Custom color palette for brand consistency
 * - Custom animations and keyframes
 * - Extended design system tokens
 * - Responsive design utilities
 * 
 * @fileoverview Tailwind CSS configuration for Bahram Autohaus
 * @author Amir Hossein Shrififard
 * @version 1.0.0
 */

// Tailwind CSS type imports
import type { Config } from "tailwindcss";

/**
 * Tailwind CSS configuration object
 * 
 * This configuration extends Tailwind's default design system with custom
 * colors, animations, and utilities specific to the Bahram Autohaus brand.
 */
const config: Config = {
  // File paths to scan for Tailwind classes
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",        // Next.js pages directory
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",   // React components directory
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",          // Next.js app directory
  ],
  // Theme customization
  theme: {
    extend: {
      // Custom color palette for brand consistency
      colors: {
        // Primary blue color palette
        primary: {
          50: '#eff6ff',   // Lightest blue
          100: '#dbeafe',  // Very light blue
          200: '#bfdbfe',  // Light blue
          300: '#93c5fd',  // Medium light blue
          400: '#60a5fa',  // Medium blue
          500: '#3b82f6',  // Base blue
          600: '#2563eb',  // Medium dark blue
          700: '#1d4ed8',  // Dark blue
          800: '#1e40af',  // Very dark blue
          900: '#1e3a8a',  // Darkest blue
        },
        // Secondary purple color palette
        secondary: {
          50: '#faf5ff',   // Lightest purple
          100: '#f3e8ff',  // Very light purple
          200: '#e9d5ff',  // Light purple
          300: '#d8b4fe',  // Medium light purple
          400: '#c084fc',  // Medium purple
          500: '#a855f7',  // Base purple
          600: '#9333ea',  // Medium dark purple
          700: '#7c3aed',  // Dark purple
          800: '#6b21a8',  // Very dark purple
          900: '#581c87',  // Darkest purple
        },
      },
      // Custom font families
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],      // Default sans-serif font
        display: ['Inter', 'system-ui', 'sans-serif'],   // Display font for headings
      },
      
      // Custom animations for enhanced user experience
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',           // Fade in animation
        'slide-up': 'slideUp 0.5s ease-out',            // Slide up animation
        'slide-down': 'slideDown 0.5s ease-out',        // Slide down animation
        'scale-in': 'scaleIn 0.3s ease-out',            // Scale in animation
        'float': 'float 3s ease-in-out infinite',       // Floating animation
      },
      
      // Custom keyframes for animations
      keyframes: {
        // Fade in keyframes
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        // Slide up keyframes
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        // Slide down keyframes
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        // Scale in keyframes
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        // Float keyframes for subtle movement
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      // Custom backdrop blur values
      backdropBlur: {
        xs: '2px',  // Extra small backdrop blur
      },
      
      // Custom box shadows for depth and glow effects
      boxShadow: {
        'glow': '0 0 20px rgba(59, 130, 246, 0.3)',           // Blue glow effect
        'glow-purple': '0 0 20px rgba(147, 51, 234, 0.3)',    // Purple glow effect
        'inner-glow': 'inset 0 0 20px rgba(59, 130, 246, 0.1)', // Inner glow effect
      },
      
      // Custom background images for gradients
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',  // Radial gradient
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))', // Conic gradient
      },
    },
  },
  
  // Tailwind CSS plugins (none currently used)
  plugins: [],
};

// Export the configuration
export default config;
