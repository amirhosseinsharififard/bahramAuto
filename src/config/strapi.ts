/**
 * Strapi Configuration
 *
 * This file contains the configuration for connecting to Strapi backend.
 * Make sure to set the environment variables in your .env.local file.
 */

export const STRAPI_CONFIG = {
  // Strapi backend URL
  url: process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337',

  // API token for authentication
  apiToken: process.env.NEXT_PUBLIC_STRAPI_API_TOKEN || '',

  // Content types
  contentTypes: {
    cars: 'cars',
  },

  // API endpoints
  endpoints: {
    upload: '/api/upload',
    cars: '/api/cars',
  },
};

/**
 * Check if Strapi is properly configured
 */
export const isStrapiConfigured = (): boolean => {
  return !!(STRAPI_CONFIG.url && STRAPI_CONFIG.apiToken);
};

/**
 * Get Strapi image URL
 */
export const getStrapiImageUrl = (imagePath: string): string => {
  if (!imagePath) return '';

  // If it's already a full URL, return as is
  if (imagePath.startsWith('http')) {
    return imagePath;
  }

  // Otherwise, prepend the Strapi URL
  return `${STRAPI_CONFIG.url}${imagePath}`;
};
