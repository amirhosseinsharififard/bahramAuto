/**
 * Simple Hero Data Hook - Fallback Only
 *
 * This hook provides hero content using only fallback data to prevent
 * infinite loops and API issues during development.
 */

import { useState } from 'react';

// Unified hero interface
export interface UnifiedHeroContent {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  videoButtonText: string;
  backgroundImage: string;
  videoUrl: string;
  stats: {
    carsSold: number;
    customers: number;
    yearsExperience: number;
  };
}

// Hook return interface
interface UseSimpleHeroDataReturn {
  heroContent: UnifiedHeroContent;
  loading: boolean;
  error: string | null;
  dataSource: 'fallback';
  setDataSource: (source: 'fallback') => void;
  refreshData: () => Promise<void>;
}

// Fallback hero data
const fallbackHeroContent: UnifiedHeroContent = {
  id: 'fallback',
  title: 'Bahram Autohaus',
  subtitle: 'Ihr Premium Partner für Qualitätsfahrzeuge in Deutschland',
  description:
    'Seit über 15 Jahren Ihr vertrauensvoller Spezialist für deutsche und europäische Premiumfahrzeuge.',
  ctaText: 'Fahrzeuge entdecken',
  videoButtonText: 'Video ansehen',
  backgroundImage: '/images/cars/hero-bg.jpg',
  videoUrl: '/videos/intro.mp4',
  stats: {
    carsSold: 2500,
    customers: 1800,
    yearsExperience: 15,
  },
};

export const useSimpleHeroData = (): UseSimpleHeroDataReturn => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Update data source (no-op for fallback)
  const setDataSource = (source: 'fallback') => {
    // No-op since we only support fallback
  };

  // Refresh data (no-op for fallback)
  const refreshData = async () => {
    // No-op since we only use static fallback data
  };

  return {
    heroContent: fallbackHeroContent,
    loading,
    error,
    dataSource: 'fallback',
    setDataSource,
    refreshData,
  };
};
