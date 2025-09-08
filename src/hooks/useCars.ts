/**
 * Custom Hook for Car Data Management with Strapi
 *
 * This hook manages car data from Strapi backend, providing
 * CRUD operations and state management for the car gallery.
 */

import { Car, CreateCarData, StrapiService } from '@/services/strapi';
import { useCallback, useEffect, useState } from 'react';

/**
 * Hook return type interface
 */
interface UseCarsReturn {
  cars: Car[];
  loading: boolean;
  error: string | null;
  refreshCars: () => Promise<void>;
  createCar: (carData: CreateCarData, images?: File[]) => Promise<Car>;
  updateCar: (id: number, carData: Partial<CreateCarData>) => Promise<Car>;
  deleteCar: (id: number) => Promise<void>;
  uploadCarImages: (carId: number, images: File[]) => Promise<void>;
}

/**
 * Custom hook for managing cars with Strapi
 *
 * @returns {UseCarsReturn} Object containing cars data and management functions
 */
export const useCars = (): UseCarsReturn => {
  // State management
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  /**
   * Load cars from Strapi
   */
  const loadCars = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const carsData = await StrapiService.getCars();
      setCars(carsData);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'Failed to load cars';
      setError(errorMessage);
      console.error('Error loading cars:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  /**
   * Refresh cars data
   */
  const refreshCars = useCallback(async () => {
    await loadCars();
  }, [loadCars]);

  /**
   * Create a new car
   */
  const createCar = useCallback(
    async (carData: CreateCarData, images?: File[]): Promise<Car> => {
      try {
        setError(null);

        // Create the car first
        const newCar = await StrapiService.createCar(carData);

        // Upload images if provided
        if (images && images.length > 0) {
          await StrapiService.uploadCarImages(newCar.id, images);
        }

        // Refresh the cars list
        await loadCars();

        return newCar;
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : 'Failed to create car';
        setError(errorMessage);
        console.error('Error creating car:', err);
        throw err;
      }
    },
    [loadCars]
  );

  /**
   * Update an existing car
   */
  const updateCar = useCallback(
    async (id: number, carData: Partial<CreateCarData>): Promise<Car> => {
      try {
        setError(null);

        const updatedCar = await StrapiService.updateCar(id, carData);

        // Update the cars list
        setCars((prevCars) =>
          prevCars.map((car) => (car.id === id ? updatedCar : car))
        );

        return updatedCar;
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : 'Failed to update car';
        setError(errorMessage);
        console.error('Error updating car:', err);
        throw err;
      }
    },
    []
  );

  /**
   * Delete a car
   */
  const deleteCar = useCallback(async (id: number): Promise<void> => {
    try {
      setError(null);

      await StrapiService.deleteCar(id);

      // Remove from cars list
      setCars((prevCars) => prevCars.filter((car) => car.id !== id));
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'Failed to delete car';
      setError(errorMessage);
      console.error('Error deleting car:', err);
      throw err;
    }
  }, []);

  /**
   * Upload images for a car
   */
  const uploadCarImages = useCallback(
    async (carId: number, images: File[]): Promise<void> => {
      try {
        setError(null);

        await StrapiService.uploadCarImages(carId, images);

        // Refresh the cars list to get updated images
        await loadCars();
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : 'Failed to upload images';
        setError(errorMessage);
        console.error('Error uploading car images:', err);
        throw err;
      }
    },
    [loadCars]
  );

  // Load cars on mount
  useEffect(() => {
    loadCars();
  }, [loadCars]);

  return {
    cars,
    loading,
    error,
    refreshCars,
    createCar,
    updateCar,
    deleteCar,
    uploadCarImages,
  };
};
