/**
 * Custom Hook for Hero Content Management with Strapi
 *
 * This hook manages hero content data from Strapi backend, providing
 * CRUD operations and state management for the hero section.
 */

import { useCallback, useEffect, useState } from 'react';

import { CreateHeroData, HeroContent, StrapiService } from '@/services/strapi';

/**
 * Hook return type interface
 */
interface UseHeroDataReturn {
  heroContent: HeroContent | null;
  loading: boolean;
  error: string | null;
  refreshHeroContent: () => Promise<void>;
  createHeroContent: (heroData: CreateHeroData) => Promise<HeroContent>;
  updateHeroContent: (
    id: number,
    heroData: Partial<CreateHeroData>
  ) => Promise<HeroContent>;
}

/**
 * Custom hook for managing hero content with Strapi
 *
 * @returns {UseHeroDataReturn} Object containing hero content data and management functions
 */
export const useHeroData = (): UseHeroDataReturn => {
  // State management
  const [heroContent, setHeroContent] = useState<HeroContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  /**
   * Load hero content from Strapi
   */
  const loadHeroContent = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      // Temporarily disable Strapi API calls to prevent infinite loop
      // TODO: Re-enable after creating Hero Content content type in Strapi
      throw new Error('Hero Content API temporarily disabled');

      // const heroData = await StrapiService.getHeroContent();
      // setHeroContent(heroData);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'Failed to load hero content';
      setError(errorMessage);
      console.error('Error loading hero content:', err);
      // Set heroContent to null on error to trigger fallback
      setHeroContent(null);
    } finally {
      setLoading(false);
    }
  }, []);

  /**
   * Refresh hero content data
   */
  const refreshHeroContent = useCallback(async () => {
    await loadHeroContent();
  }, [loadHeroContent]);

  /**
   * Create new hero content
   */
  const createHeroContent = useCallback(
    async (heroData: CreateHeroData): Promise<HeroContent> => {
      try {
        setError(null);

        const newHeroContent = await StrapiService.createHeroContent(heroData);

        // Refresh the hero content
        await loadHeroContent();

        return newHeroContent;
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : 'Failed to create hero content';
        setError(errorMessage);
        console.error('Error creating hero content:', err);
        throw err;
      }
    },
    [loadHeroContent]
  );

  /**
   * Update existing hero content
   */
  const updateHeroContent = useCallback(
    async (
      id: number,
      heroData: Partial<CreateHeroData>
    ): Promise<HeroContent> => {
      try {
        setError(null);

        const updatedHeroContent = await StrapiService.updateHeroContent(
          id,
          heroData
        );

        // Update the hero content state
        setHeroContent(updatedHeroContent);

        return updatedHeroContent;
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : 'Failed to update hero content';
        setError(errorMessage);
        console.error('Error updating hero content:', err);
        throw err;
      }
    },
    []
  );

  // Load hero content on mount
  useEffect(() => {
    loadHeroContent();
  }, []); // Empty dependency array to run only once

  return {
    heroContent,
    loading,
    error,
    refreshHeroContent,
    createHeroContent,
    updateHeroContent,
  };
};
