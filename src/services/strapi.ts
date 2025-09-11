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

  try {
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
  } catch (error) {
    if (error instanceof TypeError && error.message.includes('fetch')) {
      throw new Error(
        `Cannot connect to Strapi server at ${STRAPI_URL}. Please make sure Strapi is running.`
      );
    }
    throw error;
  }
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
 * Hero Section interface matching Strapi content type
 */
export interface HeroContent {
  id: number;
  attributes: {
    title: string;
    subtitle: string;
    description: string;
    ctaText: string;
    videoButtonText: string;
    backgroundImage: {
      data: {
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
      };
    };
    video: {
      data: {
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
      };
    };
    stats: {
      carsSold: number;
      customers: number;
      yearsExperience: number;
    };
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

/**
 * Create hero content data interface for API calls
 */
export interface CreateHeroData {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  videoButtonText: string;
  backgroundImage: number;
  video: number;
  stats: {
    carsSold: number;
    customers: number;
    yearsExperience: number;
  };
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

  /**
   * Get hero content
   */
  static async getHeroContent(): Promise<HeroContent> {
    try {
      const response = await strapiRequest(
        '/hero-contents?populate=backgroundImage,video&sort=createdAt:desc'
      );

      // Check if response has data
      if (!response.data || response.data.length === 0) {
        throw new Error('No hero content found in Strapi');
      }

      return response.data[0] as HeroContent;
    } catch (error) {
      console.error('Error fetching hero content:', error);

      // Check if it's a 400 error (content type doesn't exist)
      if (error instanceof Error && error.message.includes('400')) {
        throw new Error(
          'Hero Content content type does not exist in Strapi. Please create it first.'
        );
      }

      throw new Error('Failed to fetch hero content from Strapi');
    }
  }

  /**
   * Create hero content
   */
  static async createHeroContent(
    heroData: CreateHeroData
  ): Promise<HeroContent> {
    try {
      const response = await strapiRequest('/hero-contents', {
        method: 'POST',
        body: JSON.stringify({ data: heroData }),
      });
      return response.data as HeroContent;
    } catch (error) {
      console.error('Error creating hero content:', error);
      throw new Error('Failed to create hero content in Strapi');
    }
  }

  /**
   * Update hero content
   */
  static async updateHeroContent(
    id: number,
    heroData: Partial<CreateHeroData>
  ): Promise<HeroContent> {
    try {
      const response = await strapiRequest(`/hero-contents/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ data: heroData }),
      });
      return response.data as HeroContent;
    } catch (error) {
      console.error('Error updating hero content:', error);
      throw new Error('Failed to update hero content in Strapi');
    }
  }

  /**
   * Get hero content image URL
   */
  static getHeroImageUrl(heroContent: HeroContent): string {
    if (!heroContent.attributes.backgroundImage?.data) return '';

    return this.getImageUrl(heroContent.attributes.backgroundImage.data);
  }

  /**
   * Get hero content video URL
   */
  static getHeroVideoUrl(heroContent: HeroContent): string {
    if (!heroContent.attributes.video?.data) return '';

    return this.getImageUrl(heroContent.attributes.video.data);
  }
}

export default StrapiService;
