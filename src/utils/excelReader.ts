import * as XLSX from "xlsx";

export interface TranslationData {
  key: string;
  de: string;
  fa: string;
  category: string;
}

export interface CarData {
  id: number;
  brand: string;
  model: string;
  year: number;
  price: string;
  financing: string;
  mileage: string;
  fuel: string;
  transmission: string;
  image: string;
  features: string;
  category: string;
  description: string;
}

export class ExcelReader {
  /**
   * Read translation data from Excel file
   */
  static async readTranslations(filePath: string): Promise<TranslationData[]> {
    try {
      const response = await fetch(filePath);
      const arrayBuffer = await response.arrayBuffer();
      
      // Try to read as Excel first, then fallback to CSV
      let jsonData: any[][];
      try {
        const workbook = XLSX.read(arrayBuffer, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      } catch (excelError) {
        // If Excel reading fails, try CSV
        const text = await response.text();
        const lines = text.split('\n');
        jsonData = lines.map(line => line.split(',').map(cell => cell.trim().replace(/"/g, '')));
      }

      // Skip header row and convert to TranslationData format
      const translations: TranslationData[] = [];
      for (let i = 1; i < jsonData.length; i++) {
        const row = jsonData[i] as any[];
        if (row && row.length >= 4 && row[0]) {
          translations.push({
            key: row[0] || "",
            de: row[1] || "",
            fa: row[2] || "",
            category: row[3] || "general",
          });
        }
      }

      console.log('Parsed translations:', translations);
      return translations;
    } catch (error) {
      console.error("Error reading translations file:", error);
      return [];
    }
  }

  /**
   * Read car data from Excel file
   */
  static async readCars(filePath: string): Promise<CarData[]> {
    try {
      const response = await fetch(filePath);
      const arrayBuffer = await response.arrayBuffer();
      
      // Try to read as Excel first, then fallback to CSV
      let jsonData: any[][];
      try {
        const workbook = XLSX.read(arrayBuffer, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      } catch (excelError) {
        // If Excel reading fails, try CSV
        const text = await response.text();
        const lines = text.split('\n');
        jsonData = lines.map(line => line.split(',').map(cell => cell.trim().replace(/"/g, '')));
      }

      // Skip header row and convert to CarData format
      const cars: CarData[] = [];
      for (let i = 1; i < jsonData.length; i++) {
        const row = jsonData[i] as any[];
        if (row && row.length >= 13 && row[0]) {
          cars.push({
            id: parseInt(row[0]) || 0,
            brand: row[1] || "",
            model: row[2] || "",
            year: parseInt(row[3]) || 2024,
            price: row[4] || "",
            financing: row[5] || "",
            mileage: row[6] || "",
            fuel: row[7] || "",
            transmission: row[8] || "",
            image: row[9] || "",
            features: row[10] || "",
            category: row[11] || "",
            description: row[12] || "",
          });
        }
      }

      return cars;
    } catch (error) {
      console.error("Error reading cars file:", error);
      return [];
    }
  }

  /**
   * Convert translation data to nested object structure
   */
  static convertTranslationsToObject(translations: TranslationData[]): {
    de: any;
    fa: any;
  } {
    const de: any = {};
    const fa: any = {};

    // First pass: collect all array indices to determine array sizes
    const arraySizes: { [key: string]: number } = {};
    translations.forEach((translation) => {
      const keys = translation.key.split(".");
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if (!isNaN(Number(key))) {
          const parentKey = keys.slice(0, i).join(".");
          const index = Number(key);
          if (!arraySizes[parentKey] || arraySizes[parentKey] <= index) {
            arraySizes[parentKey] = index + 1;
          }
        }
      }
    });

    // Second pass: build the structure
    translations.forEach((translation) => {
      const keys = translation.key.split(".");
      let currentDe = de;
      let currentFa = fa;

      // Navigate/create nested structure
      for (let i = 0; i < keys.length - 1; i++) {
        const key = keys[i];
        const parentKey = keys.slice(0, i).join(".");
        
        // Handle array indices (e.g., "advantageItems.0")
        if (!isNaN(Number(key))) {
          const index = Number(key);
          if (!Array.isArray(currentDe)) {
            currentDe = [];
            // Initialize array with proper size
            const size = arraySizes[parentKey] || index + 1;
            for (let j = 0; j < size; j++) {
              currentDe.push({});
            }
          }
          if (!Array.isArray(currentFa)) {
            currentFa = [];
            // Initialize array with proper size
            const size = arraySizes[parentKey] || index + 1;
            for (let j = 0; j < size; j++) {
              currentFa.push({});
            }
          }
          
          currentDe = currentDe[index];
          currentFa = currentFa[index];
        } else {
          // Check if this should be an array based on next key
          const nextKey = keys[i + 1];
          if (nextKey && !isNaN(Number(nextKey))) {
            // This should be an array
            if (!Array.isArray(currentDe[key])) {
              currentDe[key] = [];
              currentFa[key] = [];
            }
          } else {
            // This should be an object
            if (!currentDe[key]) currentDe[key] = {};
            if (!currentFa[key]) currentFa[key] = {};
          }
          currentDe = currentDe[key];
          currentFa = currentFa[key];
        }
      }

      // Set the final value
      const finalKey = keys[keys.length - 1];
      currentDe[finalKey] = translation.de;
      currentFa[finalKey] = translation.fa;
    });

    return { de, fa };
  }

  /**
   * Convert car data to the format expected by the application
   */
  static convertCarsToAppFormat(cars: CarData[]): any[] {
    return cars.map((car) => ({
      ...car,
      features: car.features
        .split(",")
        .map((f) => f.trim())
        .filter((f) => f.length > 0),
    }));
  }
}
