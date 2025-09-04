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
      // Force reading as CSV with UTF-8 encoding
      const response = await fetch(filePath);
      const text = await response.text();
      
      
      // Parse CSV with proper UTF-8 handling
      const lines = text.split('\n').filter(line => line.trim());
      const jsonData = lines.map(line => {
        // Handle CSV parsing with proper UTF-8 support
        const result = [];
        let current = '';
        let inQuotes = false;
        
        for (let i = 0; i < line.length; i++) {
          const char = line[i];
          if (char === '"') {
            inQuotes = !inQuotes;
          } else if (char === ',' && !inQuotes) {
            result.push(current.trim());
            current = '';
          } else {
            current += char;
          }
        }
        result.push(current.trim());
        return result;
      });

      // Skip header row and convert to TranslationData format
      const translations: TranslationData[] = [];
      for (let i = 1; i < jsonData.length; i++) {
        const row = jsonData[i] as any[];
        if (row && row.length >= 4 && row[0]) {
          const translation = {
            key: row[0] || "",
            de: row[1] || "",
            fa: row[2] || "",
            category: row[3] || "general",
          };
          translations.push(translation);
          
        }
      }

      console.log('Total translations found:', translations.length);
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

    // Helper function to set nested value
    const setNestedValue = (obj: any, path: string, value: string) => {
      const keys = path.split('.');
      let current = obj;
      
      for (let i = 0; i < keys.length - 1; i++) {
        const key = keys[i];
        const nextKey = keys[i + 1];
        
        // Check if next key is a number (array index)
        if (!isNaN(Number(nextKey))) {
          // This should be an array
          if (!Array.isArray(current[key])) {
            current[key] = [];
          }
          // Ensure array is large enough
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
      
      // Set the final value
      const finalKey = keys[keys.length - 1];
      current[finalKey] = value;
    };

    // Process each translation
    translations.forEach((translation) => {
      if (translation.key && translation.de && translation.fa) {
        setNestedValue(de, translation.key, translation.de);
        setNestedValue(fa, translation.key, translation.fa);
      }
    });

    // Add direction property for RTL/LTR
    de.direction = "ltr";
    fa.direction = "rtl";

    console.log('Converted translations - DE:', de);
    console.log('Converted translations - FA:', fa);
    console.log('FA advantageItems:', fa.advantageItems);

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
