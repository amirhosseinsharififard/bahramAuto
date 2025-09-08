/**
 * Strapi API Service
 *
 * This service handles all communication with the Strapi backend,
 * including car data management and image uploads.
 */

// Strapi configuration
const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
const STRAPI_API_TOKEN = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN || '';

// Helper function to make API requests
const strapiRequest = async (endpoint: string, options: RequestInit = {}) => {
  const url = `${STRAPI_URL}/api${endpoint}`;
  const headers = {
    'Content-Type': 'application/json',
    ...(STRAPI_API_TOKEN && { Authorization: `Bearer ${STRAPI_API_TOKEN}` }),
    ...options.headers,
  };

  const response = await fetch(url, {
    ...options,
    headers,
  });

  if (!response.ok) {
    throw new Error(
      `Strapi API error: ${response.status} ${response.statusText}`
    );
  }

  return response.json();
};

/**
 * Car interface matching Strapi content type
 */
export interface Car {
  id: number;
  attributes: {
    name: string;
    brand: string;
    model: string;
    year: number;
    price: number;
    mileage: number;
    fuelType: string;
    transmission: string;
    engineSize: string;
    color: string;
    description: string;
    features: string[];
    images: {
      data: Array<{
        id: number;
        attributes: {
          name: string;
          alternativeText: string;
          caption: string;
          width: number;
          height: number;
          formats: any;
          hash: string;
          ext: string;
          mime: string;
          size: number;
          url: string;
          previewUrl: string | null;
          provider: string;
          provider_metadata: any;
          createdAt: string;
          updatedAt: string;
        };
      }>;
    };
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

/**
 * Create car data interface for API calls
 */
export interface CreateCarData {
  name: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuelType: string;
  transmission: string;
  engineSize: string;
  color: string;
  description: string;
  features: string[];
}

/**
 * Strapi API service class
 */
export class StrapiService {
  /**
   * Get all cars with images
   */
  static async getCars(): Promise<Car[]> {
    try {
      const response = await strapiRequest(
        '/cars?populate=images&sort=createdAt:desc'
      );
      return response.data as Car[];
    } catch (error) {
      console.error('Error fetching cars:', error);
      throw new Error('Failed to fetch cars from Strapi');
    }
  }

  /**
   * Get a single car by ID
   */
  static async getCar(id: number): Promise<Car> {
    try {
      const response = await strapiRequest(`/cars/${id}?populate=images`);
      return response.data as Car;
    } catch (error) {
      console.error('Error fetching car:', error);
      throw new Error('Failed to fetch car from Strapi');
    }
  }

  /**
   * Create a new car
   */
  static async createCar(carData: CreateCarData): Promise<Car> {
    try {
      const response = await strapiRequest('/cars', {
        method: 'POST',
        body: JSON.stringify({ data: carData }),
      });
      return response.data as Car;
    } catch (error) {
      console.error('Error creating car:', error);
      throw new Error('Failed to create car in Strapi');
    }
  }

  /**
   * Update an existing car
   */
  static async updateCar(
    id: number,
    carData: Partial<CreateCarData>
  ): Promise<Car> {
    try {
      const response = await strapiRequest(`/cars/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ data: carData }),
      });
      return response.data as Car;
    } catch (error) {
      console.error('Error updating car:', error);
      throw new Error('Failed to update car in Strapi');
    }
  }

  /**
   * Delete a car
   */
  static async deleteCar(id: number): Promise<void> {
    try {
      await strapiRequest(`/cars/${id}`, {
        method: 'DELETE',
      });
    } catch (error) {
      console.error('Error deleting car:', error);
      throw new Error('Failed to delete car from Strapi');
    }
  }

  /**
   * Upload images for a car
   */
  static async uploadCarImages(carId: number, files: File[]): Promise<void> {
    try {
      const formData = new FormData();

      // Add files to form data
      files.forEach((file) => {
        formData.append('files', file);
      });

      // Upload files
      const uploadResponse = await fetch(`${STRAPI_URL}/api/upload`, {
        method: 'POST',
        headers: {
          ...(STRAPI_API_TOKEN && {
            Authorization: `Bearer ${STRAPI_API_TOKEN}`,
          }),
        },
        body: formData,
      });

      if (!uploadResponse.ok) {
        throw new Error('Failed to upload images');
      }

      const uploadedFiles = await uploadResponse.json();

      // Associate uploaded files with the car
      const fileIds = uploadedFiles.map((file: any) => file.id);

      await strapiRequest(`/cars/${carId}`, {
        method: 'PUT',
        body: JSON.stringify({
          data: {
            images: fileIds,
          },
        }),
      });
    } catch (error) {
      console.error('Error uploading car images:', error);
      throw new Error('Failed to upload car images');
    }
  }

  /**
   * Get image URL from Strapi
   */
  static getImageUrl(image: any): string {
    if (!image) return '';

    const baseUrl = STRAPI_URL;
    const imageUrl = image.attributes?.url || image.url;

    if (imageUrl.startsWith('http')) {
      return imageUrl;
    }

    return `${baseUrl}${imageUrl}`;
  }

  /**
   * Get all image URLs for a car
   */
  static getCarImageUrls(car: Car): string[] {
    if (!car.attributes.images?.data) return [];

    return car.attributes.images.data.map((image) => this.getImageUrl(image));
  }
}

export default StrapiService;
