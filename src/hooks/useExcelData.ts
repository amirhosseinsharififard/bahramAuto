/**
 * Custom Hook for Excel Data Management
 *
 * This hook manages the loading and state of Excel data for the Bahram Autohaus application.
 * It handles both translation data (from CSV files) and car data (from Excel files),
 * providing a centralized way to manage content that can be updated without code changes.
 *
 * Key Features:
 * - Loads translations from CSV files for internationalization
 * - Loads car data from Excel files for dynamic content
 * - Provides loading and error states for UI feedback
 * - Offers refresh functionality for content updates
 * - Handles data conversion and validation
 *
 * @fileoverview Custom hook for Excel data management
 * @author Amir Hossein Shrififard
 * @version 1.0.0
 */

// React hooks for state management and side effects
import { useEffect, useState } from 'react';

// Import Excel reader utility for data processing
import { ExcelReader } from '@/utils/excelReader';

/**
 * Custom hook for managing Excel data (translations and cars)
 *
 * This hook provides a centralized way to manage all Excel-based content
 * in the application. It loads data on mount and provides refresh functionality
 * for content updates without requiring application restarts.
 *
 * @returns {object} Object containing:
 *   - translations: Object with 'de' and 'fa' properties containing nested translation objects
 *   - cars: Array of car objects with all vehicle information
 *   - loading: Boolean indicating if data is currently being loaded
 *   - error: String containing error message if data loading failed, null otherwise
 *   - refreshData: Function to manually reload all Excel data
 *
 * @example
 * const { translations, cars, loading, error, refreshData } = useExcelData();
 *
 * if (loading) return <LoadingSpinner />;
 * if (error) return <ErrorMessage error={error} />;
 *
 * return <CarGallery cars={cars} />;
 */
export const useExcelData = () => {
  // State for translations data (German and Persian)
  // Initialized as empty objects to prevent undefined errors
  const [translations, setTranslations] = useState<{ de: any; fa: any }>({
    de: {},
    fa: {},
  });

  // State for cars data - array of car objects
  const [cars, setCars] = useState<any[]>([]);

  // Loading state for data fetching - starts as true since we load data on mount
  const [loading, setLoading] = useState(true);

  // Error state for data loading errors - null when no error, string when error occurs
  const [error, setError] = useState<string | null>(null);

  /**
   * Load Excel data from files (translations and cars)
   *
   * This function handles the complete data loading process:
   * 1. Loads translation data from CSV files
   * 2. Loads car data from Excel files
   * 3. Converts data to application-specific formats
   * 4. Handles errors and provides fallback states
   *
   * The function is designed to be robust and provide clear error messages
   * when files are missing or corrupted.
   */
  const loadExcelData = async () => {
    try {
      // Set loading state and clear any previous errors
      setLoading(true);
      setError(null);

      // Load translations from CSV file
      const translationData = await ExcelReader.readTranslations(
        '/excel/translations-template.csv'
      );

      // Validate translation data
      if (translationData.length > 0) {
        // Convert CSV data to nested object structure for easy access
        const convertedTranslations =
          ExcelReader.convertTranslationsToObject(translationData);

        // Debug logging for development
        console.log('Loaded translations:', convertedTranslations);
        console.log(
          'advantageItems DE:',
          convertedTranslations.de?.advantageItems
        );
        console.log(
          'advantageItems FA:',
          convertedTranslations.fa?.advantageItems
        );

        // Update translations state
        setTranslations(convertedTranslations);
      } else {
        throw new Error('No translation data found');
      }

      // Load cars data from Excel file
      const carData = await ExcelReader.readCars('/excel/cars.xlsx');

      // Validate car data
      if (carData.length > 0) {
        // Convert Excel data to application format (features as arrays)
        const convertedCars = ExcelReader.convertCarsToAppFormat(carData);
        setCars(convertedCars);
      } else {
        throw new Error('No car data found');
      }
    } catch (err) {
      // Handle any errors during data loading
      console.error('Error loading Excel data:', err);
      setError(
        'Failed to load content data from Excel files. Please check if the Excel files exist in /public/excel/ directory.'
      );

      // No fallback data - system should only use Excel files
      // This ensures content managers know when files are missing
      console.error(
        'Excel files not found or corrupted. Please ensure translations.xlsx and cars.xlsx exist in /public/excel/ directory.'
      );
      setTranslations({ de: {}, fa: {} });
      setCars([]);
    } finally {
      // Always set loading to false, regardless of success or failure
      setLoading(false);
    }
  };

  /**
   * Load data on component mount
   *
   * This effect runs once when the component mounts to load all Excel data.
   * The empty dependency array ensures it only runs once.
   */
  useEffect(() => {
    loadExcelData();
  }, []);

  /**
   * Refresh data function for manual data reloading
   *
   * This function allows components (like the admin panel) to manually
   * reload Excel data without requiring a page refresh. This is useful
   * when content managers update Excel files and want to see changes
   * immediately.
   *
   * @returns {Promise<void>} Promise that resolves when data reload is complete
   */
  const refreshData = async () => {
    await loadExcelData();
  };

  /**
   * Return all data and functions for components to use
   *
   * This hook provides a complete interface for Excel data management,
   * including the data itself, loading states, error handling, and
   * refresh functionality.
   */
  return {
    translations, // Object with 'de' and 'fa' translation objects
    cars, // Array of car objects
    loading, // Boolean indicating loading state
    error, // String with error message or null
    refreshData, // Function to manually reload data
  };
};
