/**
 * Unified Car Data Hook
 *
 * This hook provides a unified interface for loading car data from either
 * Excel files or Strapi API, with automatic fallback and data source switching.
 */

import { useCallback, useEffect, useState } from 'react';

import { Car as StrapiCar, StrapiService } from '@/services/strapi';

import { useCars } from './useCars';
import { useExcelData } from './useExcelData';

// Unified car interface that works with both data sources
export interface UnifiedCar {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  financing: number;
  mileage: number;
  fuel: string;
  transmission: string;
  features: string[];
  image: string;
  description: string;
  category?: string;
  gallery?: string[];
}

// Data source types
export type DataSource = 'excel' | 'strapi' | 'auto';

// Hook return interface
interface UseCarDataReturn {
  cars: UnifiedCar[];
  loading: boolean;
  error: string | null;
  dataSource: DataSource;
  setDataSource: (source: DataSource) => void;
  refreshData: () => Promise<void>;
}

// Transform Strapi car to unified format
const transformStrapiCar = (strapiCar: StrapiCar): UnifiedCar => {
  const images = StrapiService.getCarImageUrls(strapiCar);
  return {
    id: strapiCar.id.toString(),
    brand: strapiCar.attributes.brand,
    model: strapiCar.attributes.model,
    year: strapiCar.attributes.year,
    price: strapiCar.attributes.price,
    financing: 0, // This would need to be calculated or added to Strapi
    mileage: strapiCar.attributes.mileage,
    fuel: strapiCar.attributes.fuelType,
    transmission: strapiCar.attributes.transmission,
    features: strapiCar.attributes.features,
    image: images[0] || '',
    description: strapiCar.attributes.description,
    category: 'alle', // Default category, could be added to Strapi
    gallery: images.slice(1), // Additional images for gallery
  };
};

// Transform Excel car to unified format
const transformExcelCar = (excelCar: any): UnifiedCar => {
  return {
    id: excelCar.id?.toString() || Math.random().toString(),
    brand: excelCar.brand || '',
    model: excelCar.model || '',
    year: excelCar.year || 0,
    price:
      typeof excelCar.price === 'string'
        ? parseInt(excelCar.price.replace(/[^\d]/g, ''))
        : excelCar.price || 0,
    financing:
      typeof excelCar.financing === 'string'
        ? parseInt(excelCar.financing)
        : excelCar.financing || 0,
    mileage:
      typeof excelCar.mileage === 'string'
        ? parseInt(excelCar.mileage.replace(/[^\d]/g, ''))
        : excelCar.mileage || 0,
    fuel: excelCar.fuel || '',
    transmission: excelCar.transmission || '',
    features: Array.isArray(excelCar.features) ? excelCar.features : [],
    image: excelCar.image || '',
    description: excelCar.description || '',
    category: excelCar.category || 'alle',
    gallery: excelCar.gallery || [],
  };
};

export const useCarData = (): UseCarDataReturn => {
  // State management
  const [dataSource, setDataSource] = useState<DataSource>('auto');
  const [cars, setCars] = useState<UnifiedCar[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Hooks for different data sources
  const excelData = useExcelData();
  const strapiData = useCars();

  // Load data based on current source
  const loadData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      let sourceToUse = dataSource;

      // Auto-detect best available source
      if (dataSource === 'auto') {
        // Try Strapi first, fallback to Excel
        if (strapiData.cars.length > 0) {
          sourceToUse = 'strapi';
        } else if (excelData.cars.length > 0) {
          sourceToUse = 'excel';
        } else {
          // Both are empty, try to load from Strapi
          sourceToUse = 'strapi';
        }
      }

      let transformedCars: UnifiedCar[] = [];

      if (sourceToUse === 'strapi') {
        // Use Strapi data
        if (strapiData.loading) {
          // Wait for Strapi to load
          return;
        }

        if (strapiData.error) {
          // Strapi failed, try Excel as fallback
          if (excelData.cars.length > 0) {
            transformedCars = excelData.cars.map(transformExcelCar);
            setDataSource('excel');
          } else {
            throw new Error('Strapi failed and no Excel data available');
          }
        } else {
          transformedCars = strapiData.cars.map(transformStrapiCar);
          setDataSource('strapi');
        }
      } else {
        // Use Excel data
        if (excelData.loading) {
          // Wait for Excel to load
          return;
        }

        if (excelData.error) {
          // Excel failed, try Strapi as fallback
          if (strapiData.cars.length > 0) {
            transformedCars = strapiData.cars.map(transformStrapiCar);
            setDataSource('strapi');
          } else {
            throw new Error('Excel failed and no Strapi data available');
          }
        } else {
          transformedCars = excelData.cars.map(transformExcelCar);
          setDataSource('excel');
        }
      }

      setCars(transformedCars);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'Failed to load car data';
      setError(errorMessage);
      console.error('Error loading car data:', err);
    } finally {
      setLoading(false);
    }
  }, [dataSource, excelData, strapiData]);

  // Refresh data function
  const refreshData = useCallback(async () => {
    if (dataSource === 'strapi') {
      await strapiData.refreshCars();
    } else if (dataSource === 'excel') {
      excelData.refreshData();
    } else {
      // Auto mode - refresh both
      await Promise.all([strapiData.refreshCars(), excelData.refreshData()]);
    }
    await loadData();
  }, [dataSource, strapiData, excelData, loadData]);

  // Load data when dependencies change
  useEffect(() => {
    loadData();
  }, [loadData]);

  // Update data source
  const handleSetDataSource = useCallback((source: DataSource) => {
    setDataSource(source);
  }, []);

  return {
    cars,
    loading:
      loading ||
      (dataSource === 'strapi' ? strapiData.loading : excelData.loading),
    error:
      error || (dataSource === 'strapi' ? strapiData.error : excelData.error),
    dataSource,
    setDataSource: handleSetDataSource,
    refreshData,
  };
};
