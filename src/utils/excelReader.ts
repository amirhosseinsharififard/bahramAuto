/**
 * Excel Reader Utility - Data Management for Bahram Autohaus
 *
 * This utility class handles reading and processing Excel/CSV files
 * for the Bahram Autohaus website. It provides methods to read
 * translation data from CSV files and car data from Excel files,
 * converting them into formats suitable for the React application.
 *
 * Key Features:
 * - CSV parsing with UTF-8 support for translations
 * - Excel file reading for car data
 * - Data conversion to application-specific formats
 * - Error handling and validation
 * - Support for nested object structures
 *
 * @fileoverview Utility for reading and processing Excel/CSV data
 * @author Amir Hossein Shrififard
 * @version 1.0.0
 */

// Import XLSX library for Excel file processing
// This library provides functionality to read Excel files in the browser
import * as XLSX from 'xlsx';

/**
 * Interface for translation data structure
 *
 * This interface defines the structure of translation data
 * that comes from the CSV file. Each translation entry
 * contains a key, German text, Persian text, and category.
 *
 * @interface TranslationData
 * @property {string} key - Translation key (e.g., "nav.home")
 * @property {string} de - German translation text
 * @property {string} fa - Persian translation text
 * @property {string} category - Category for organization (e.g., "navigation")
 */
export interface TranslationData {
  key: string; // Unique identifier for the translation
  de: string; // German translation
  fa: string; // Persian translation
  category: string; // Category for grouping translations
}

/**
 * Interface for car data structure
 *
 * This interface defines the structure of car data
 * that comes from the Excel file. It includes all
 * necessary information about each vehicle.
 *
 * @interface CarData
 * @property {number} id - Unique identifier for the car
 * @property {string} brand - Car manufacturer (e.g., "BMW")
 * @property {string} model - Car model (e.g., "X5")
 * @property {number} year - Manufacturing year
 * @property {string} price - Price with currency (e.g., "45.000 €")
 * @property {string} financing - Financing information
 * @property {string} mileage - Kilometers driven
 * @property {string} fuel - Fuel type (e.g., "Benzin")
 * @property {string} transmission - Transmission type (e.g., "Automatik")
 * @property {string} image - Image filename
 * @property {string} features - Car features list
 * @property {string} category - Car category (e.g., "suv")
 * @property {string} description - Detailed car description
 */
export interface CarData {
  id: number; // Unique car identifier
  brand: string; // Car manufacturer
  model: string; // Car model
  year: number; // Manufacturing year
  price: string; // Price with currency
  financing: string; // Financing options
  mileage: string; // Kilometers driven
  fuel: string; // Fuel type
  transmission: string; // Transmission type
  image: string; // Image filename
  features: string; // Car features
  category: string; // Car category
  description: string; // Car description
}

/**
 * ExcelReader class for processing Excel and CSV files
 *
 * This class provides static methods to read and process data from Excel files
 * and CSV files. It handles both translation data (from CSV) and car data (from Excel).
 *
 * Key Features:
 * - CSV parsing with proper UTF-8 support for international characters
 * - Excel file reading using XLSX library
 * - Data validation and error handling
 * - Conversion to application-specific data structures
 *
 * @class ExcelReader
 */
export class ExcelReader {
  /**
   * Read translation data from CSV file
   *
   * This method reads a CSV file containing translation data and converts it
   * to an array of TranslationData objects. The CSV format should be:
   * key,de,fa,category
   *
   * @param {string} filePath - Path to the CSV file (relative to public directory)
   * @returns {Promise<TranslationData[]>} Array of translation objects
   *
   * @example
   * const translations = await ExcelReader.readTranslations('/excel/translations.csv');
   */
  static async readTranslations(filePath: string): Promise<TranslationData[]> {
    try {
      // Fetch the CSV file from the public directory
      const response = await fetch(filePath);
      const text = await response.text();

      // Parse CSV with proper UTF-8 handling for international characters
      const lines = text.split('\n').filter((line) => line.trim());
      const jsonData = lines.map((line) => {
        // Custom CSV parser that handles quoted fields and UTF-8 characters
        const result = [];
        let current = '';
        let inQuotes = false;

        // Iterate through each character to properly handle quoted fields
        for (let i = 0; i < line.length; i++) {
          const char = line[i];
          if (char === '"') {
            // Toggle quote state when encountering quote character
            inQuotes = !inQuotes;
          } else if (char === ',' && !inQuotes) {
            // Split on comma only when not inside quotes
            result.push(current.trim());
            current = '';
          } else {
            // Add character to current field
            current += char;
          }
        }
        // Add the last field
        result.push(current.trim());
        return result;
      });

      // Skip header row and convert to TranslationData format
      const translations: TranslationData[] = [];
      for (let i = 1; i < jsonData.length; i++) {
        const row = jsonData[i] as any[];
        // Validate that row has at least 4 columns and first column is not empty
        if (row && row.length >= 4 && row[0]) {
          const translation = {
            key: row[0] || '', // Translation key (e.g., "nav.home")
            de: row[1] || '', // German translation
            fa: row[2] || '', // Persian translation
            category: row[3] || 'general', // Category for organization
          };
          translations.push(translation);
        }
      }

      console.log('Total translations found:', translations.length);
      return translations;
    } catch (error) {
      console.error('Error reading translations file:', error);
      return [];
    }
  }

  /**
   * Read car data from Excel file
   *
   * This method reads an Excel file containing car data and converts it
   * to an array of CarData objects. The Excel format should have columns:
   * id, brand, model, year, price, financing, mileage, fuel, transmission, image, features, category, description
   *
   * @param {string} filePath - Path to the Excel file (relative to public directory)
   * @returns {Promise<CarData[]>} Array of car objects
   *
   * @example
   * const cars = await ExcelReader.readCars('/excel/cars.xlsx');
   */
  static async readCars(filePath: string): Promise<CarData[]> {
    try {
      // Fetch the Excel file from the public directory
      const response = await fetch(filePath);
      const arrayBuffer = await response.arrayBuffer();

      // Try to read as Excel first, then fallback to CSV for compatibility
      let jsonData: any[][];
      try {
        // Use XLSX library to read Excel file
        const workbook = XLSX.read(arrayBuffer, { type: 'array' });
        const sheetName = workbook.SheetNames[0]; // Get first sheet
        const worksheet = workbook.Sheets[sheetName];
        // Convert worksheet to array of arrays (rows and columns)
        jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      } catch (excelError) {
        // If Excel reading fails, try reading as CSV
        const text = await response.text();
        const lines = text.split('\n');
        jsonData = lines.map((line) =>
          line.split(',').map((cell) => cell.trim().replace(/"/g, ''))
        );
      }

      // Skip header row and convert to CarData format
      const cars: CarData[] = [];
      for (let i = 1; i < jsonData.length; i++) {
        const row = jsonData[i] as any[];
        // Validate that row has at least 13 columns and first column is not empty
        if (row && row.length >= 13 && row[0]) {
          cars.push({
            id: parseInt(row[0]) || 0, // Car ID (unique identifier)
            brand: row[1] || '', // Car manufacturer (e.g., "BMW")
            model: row[2] || '', // Car model (e.g., "X5")
            year: parseInt(row[3]) || 2024, // Manufacturing year
            price: row[4] || '', // Price with currency (e.g., "45.000 €")
            financing: row[5] || '', // Monthly financing amount
            mileage: row[6] || '', // Kilometers driven
            fuel: row[7] || '', // Fuel type (e.g., "Benzin")
            transmission: row[8] || '', // Transmission type (e.g., "Automatik")
            image: row[9] || '', // Image filename
            features: row[10] || '', // Comma-separated features list
            category: row[11] || '', // Car category (e.g., "suv")
            description: row[12] || '', // Detailed car description
          });
        }
      }

      return cars;
    } catch (error) {
      console.error('Error reading cars file:', error);
      return [];
    }
  }

  /**
   * Convert translation data to nested object structure
   *
   * This method takes an array of TranslationData objects and converts them
   * into nested objects for German (de) and Persian (fa) languages.
   * It supports dot notation for nested keys (e.g., "nav.home" becomes nav.home)
   * and array indices (e.g., "advantageItems.0.title" becomes advantageItems[0].title)
   *
   * @param {TranslationData[]} translations - Array of translation data
   * @returns {object} Object with 'de' and 'fa' properties containing nested translation objects
   *
   * @example
   * const translations = [
   *   { key: "nav.home", de: "Startseite", fa: "صفحه اصلی", category: "navigation" },
   *   { key: "advantageItems.0.title", de: "Qualität", fa: "کیفیت", category: "advantages" }
   * ];
   * const result = ExcelReader.convertTranslationsToObject(translations);
   * // Result: { de: { nav: { home: "Startseite" }, advantageItems: [{ title: "Qualität" }] }, fa: {...} }
   */
  static convertTranslationsToObject(translations: TranslationData[]): {
    de: any;
    fa: any;
  } {
    // Initialize empty objects for each language
    const de: any = {};
    const fa: any = {};

    /**
     * Helper function to set nested values in an object using dot notation
     * Supports both object properties and array indices
     *
     * @param {any} obj - Target object to set values in
     * @param {string} path - Dot-separated path (e.g., "nav.home" or "items.0.title")
     * @param {string} value - Value to set at the specified path
     */
    const setNestedValue = (obj: any, path: string, value: string) => {
      const keys = path.split('.');
      let current = obj;

      // Navigate through the nested structure
      for (let i = 0; i < keys.length - 1; i++) {
        const key = keys[i];
        const nextKey = keys[i + 1];

        // Check if next key is a number (array index)
        if (!isNaN(Number(nextKey))) {
          // This should be an array
          if (!Array.isArray(current[key])) {
            current[key] = [];
          }
          // Ensure array is large enough for the index
          const index = Number(nextKey);
          while (current[key].length <= index) {
            current[key].push({});
          }
          current = current[key][index];
        } else {
          // This should be an object
          if (!current[key] || Array.isArray(current[key])) {
            current[key] = {};
          }
          current = current[key];
        }
      }

      // Set the final value at the end of the path
      const finalKey = keys[keys.length - 1];
      current[finalKey] = value;
    };

    // Process each translation and set values in both language objects
    translations.forEach((translation) => {
      if (translation.key && translation.de && translation.fa) {
        setNestedValue(de, translation.key, translation.de);
        setNestedValue(fa, translation.key, translation.fa);
      }
    });

    // Add direction property for RTL/LTR support
    de.direction = 'ltr'; // German is left-to-right
    fa.direction = 'rtl'; // Persian is right-to-left

    console.log('Converted translations - DE:', de);
    console.log('Converted translations - FA:', fa);
    console.log('FA advantageItems:', fa.advantageItems);

    return { de, fa };
  }

  /**
   * Convert car data to the format expected by the application
   *
   * This method processes the car data to ensure features are properly formatted
   * as an array instead of a comma-separated string. It also preserves all
   * other car properties while ensuring data consistency.
   *
   * @param {CarData[]} cars - Array of car data objects
   * @returns {any[]} Array of processed car objects with features as arrays
   *
   * @example
   * const cars = [
   *   { id: 1, brand: "BMW", features: "Navigation, Klimaanlage, Ledersitze" }
   * ];
   * const processed = ExcelReader.convertCarsToAppFormat(cars);
   * // Result: [{ id: 1, brand: "BMW", features: ["Navigation", "Klimaanlage", "Ledersitze"] }]
   */
  static convertCarsToAppFormat(cars: CarData[]): any[] {
    return cars.map((car) => ({
      ...car, // Spread all existing car properties
      // Convert comma-separated features string to array
      features: car.features
        .split(',') // Split by comma
        .map((f) => f.trim()) // Remove whitespace from each feature
        .filter((f) => f.length > 0), // Remove empty features
    }));
  }
}
