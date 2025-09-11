/**
 * Unified Hero Data Hook
 *
 * This hook provides a unified interface for loading hero content from either
 * Strapi API or fallback data, with automatic fallback and data source switching.
 */

import { useCallback, useEffect, useState } from 'react';

import { HeroContent, StrapiService } from '@/services/strapi';

import { useHeroData } from './useHeroData';

// Unified hero interface that works with both data sources
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

// Data source types
export type HeroDataSource = 'strapi' | 'fallback' | 'auto';

// Hook return interface
interface UseUnifiedHeroDataReturn {
  heroContent: UnifiedHeroContent | null;
  loading: boolean;
  error: string | null;
  dataSource: HeroDataSource;
  setDataSource: (source: HeroDataSource) => void;
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

// Transform Strapi hero content to unified format
const transformStrapiHeroContent = (
  strapiHero: HeroContent
): UnifiedHeroContent => {
  return {
    id: strapiHero.id.toString(),
    title: strapiHero.attributes.title,
    subtitle: strapiHero.attributes.subtitle,
    description: strapiHero.attributes.description,
    ctaText: strapiHero.attributes.ctaText,
    videoButtonText: strapiHero.attributes.videoButtonText,
    backgroundImage: StrapiService.getHeroImageUrl(strapiHero),
    videoUrl: StrapiService.getHeroVideoUrl(strapiHero),
    stats: strapiHero.attributes.stats,
  };
};

export const useUnifiedHeroData = (): UseUnifiedHeroDataReturn => {
  // State management
  const [dataSource, setDataSource] = useState<HeroDataSource>('auto');
  const [heroContent, setHeroContent] = useState<UnifiedHeroContent | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Hook for Strapi data
  const strapiData = useHeroData();

  // Process data when Strapi data changes or data source changes
  useEffect(() => {
    const processData = () => {
      try {
        setError(null);

        let sourceToUse = dataSource;
        let transformedHeroContent: UnifiedHeroContent;

        // Auto-detect best available source
        if (dataSource === 'auto') {
          if (
            strapiData.heroContent &&
            !strapiData.error &&
            !strapiData.loading
          ) {
            sourceToUse = 'strapi';
          } else {
            sourceToUse = 'fallback';
          }
        }

        if (sourceToUse === 'strapi') {
          // Use Strapi data
          if (strapiData.loading) {
            // Still loading, keep current state
            return;
          }

          if (strapiData.error || !strapiData.heroContent) {
            // Strapi failed, use fallback data
            transformedHeroContent = fallbackHeroContent;
            if (dataSource !== 'fallback') {
              setDataSource('fallback');
            }
          } else {
            transformedHeroContent = transformStrapiHeroContent(
              strapiData.heroContent
            );
            if (dataSource !== 'strapi') {
              setDataSource('strapi');
            }
          }
        } else {
          // Use fallback data
          transformedHeroContent = fallbackHeroContent;
          if (dataSource !== 'fallback') {
            setDataSource('fallback');
          }
        }

        setHeroContent(transformedHeroContent);
        setLoading(false);
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : 'Failed to load hero content';
        setError(errorMessage);
        console.error('Error loading hero content:', err);

        // Use fallback data on error
        setHeroContent(fallbackHeroContent);
        setDataSource('fallback');
        setLoading(false);
      }
    };

    processData();
  }, [strapiData.loading, strapiData.error]);

  // Refresh data function
  const refreshData = useCallback(async () => {
    if (dataSource === 'strapi') {
      await strapiData.refreshHeroContent();
    }
    // The useEffect will automatically process the new data
  }, [dataSource, strapiData]);

  // Update data source
  const handleSetDataSource = useCallback((source: HeroDataSource) => {
    setDataSource(source);
  }, []);

  return {
    heroContent,
    loading: loading || (dataSource === 'strapi' ? strapiData.loading : false),
    error: error || (dataSource === 'strapi' ? strapiData.error : null),
    dataSource,
    setDataSource: handleSetDataSource,
    refreshData,
  };
};
