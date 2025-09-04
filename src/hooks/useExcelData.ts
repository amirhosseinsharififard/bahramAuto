import { useState, useEffect } from 'react';
import { ExcelReader, TranslationData, CarData } from '@/utils/excelReader';

export const useExcelData = () => {
  const [translations, setTranslations] = useState<{ de: any; fa: any }>({ de: {}, fa: {} });
  const [cars, setCars] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadExcelData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Load translations
      const translationData = await ExcelReader.readTranslations('/excel/translations.xlsx');
      if (translationData.length > 0) {
        const convertedTranslations = ExcelReader.convertTranslationsToObject(translationData);
        console.log('Loaded translations:', convertedTranslations);
        console.log('advantageItems DE:', convertedTranslations.de?.advantageItems);
        console.log('advantageItems FA:', convertedTranslations.fa?.advantageItems);
        setTranslations(convertedTranslations);
      } else {
        throw new Error('No translation data found');
      }

      // Load cars
      const carData = await ExcelReader.readCars('/excel/cars.xlsx');
      if (carData.length > 0) {
        const convertedCars = ExcelReader.convertCarsToAppFormat(carData);
        setCars(convertedCars);
      } else {
        throw new Error('No car data found');
      }

    } catch (err) {
      console.error('Error loading Excel data:', err);
      setError('Failed to load content data. Using default data.');
      
      // Fallback to default data if Excel files are not available
      const { de } = await import('@/constants/de');
      const { fa } = await import('@/constants/fa');
      setTranslations({ de, fa });
      setCars(de.cars);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadExcelData();
  }, []);

  const refreshData = async () => {
    await loadExcelData();
  };

  return {
    translations,
    cars,
    loading,
    error,
    refreshData
  };
};
