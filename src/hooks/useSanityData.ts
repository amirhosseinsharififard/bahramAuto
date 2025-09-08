import { client } from '@/sanity/lib/client';
import { useEffect, useState } from 'react';

interface UseSanityDataOptions {
  query: string;
  params?: Record<string, any>;
  enabled?: boolean;
}

export function useSanityData<T>({
  query,
  params,
  enabled = true,
}: UseSanityDataOptions) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled) return;

    async function fetchData() {
      setLoading(true);
      setError(null);

      try {
        const result = await client.fetch(query, params || {});
        setData(result);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : 'خطا در بارگذاری داده‌ها'
        );
        console.error('Sanity fetch error:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [query, JSON.stringify(params), enabled]);

  const refetch = async () => {
    setLoading(true);
    setError(null);

    try {
      const result = await client.fetch(query, params || {});
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'خطا در بارگذاری داده‌ها');
      console.error('Sanity fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, refetch };
}

// Hook مخصوص خودروها
export function useCars(options?: {
  limit?: number;
  featuredOnly?: boolean;
  brand?: string;
  enabled?: boolean;
}) {
  const {
    limit = 12,
    featuredOnly = false,
    brand,
    enabled = true,
  } = options || {};

  let query = `*[_type == "car" && isAvailable == true`;

  if (featuredOnly) {
    query += ` && isFeatured == true`;
  }

  if (brand) {
    query += ` && brand == "${brand}"`;
  }

  query += `] | order(_createdAt desc) [0...${limit}] {
    _id,
    title,
    slug,
    brand,
    model,
    year,
    price,
    mileage,
    fuelType,
    transmission,
    color,
    condition,
    description,
    images,
    features,
    isAvailable,
    isFeatured,
    contactInfo
  }`;

  return useSanityData({ query, enabled });
}

// Hook مخصوص پست‌ها
export function usePosts(options?: {
  limit?: number;
  category?: string;
  enabled?: boolean;
}) {
  const { limit = 10, category, enabled = true } = options || {};

  let query = `*[_type == "post"]`;

  if (category) {
    query += ` && "${category}" in categories[]->slug.current`;
  }

  query += ` | order(publishedAt desc) [0...${limit}] {
    _id,
    title,
    slug,
    author->{
      name,
      image
    },
    mainImage,
    publishedAt,
    body,
    categories[]->{
      title,
      slug
    }
  }`;

  return useSanityData({ query, enabled });
}

// Hook مخصوص یک خودرو خاص
export function useCar(slug: string, enabled: boolean = true) {
  const query = `*[_type == "car" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    brand,
    model,
    year,
    price,
    mileage,
    fuelType,
    transmission,
    engineSize,
    horsepower,
    color,
    condition,
    description,
    images,
    features,
    isAvailable,
    isFeatured,
    contactInfo
  }`;

  return useSanityData({
    query,
    params: { slug },
    enabled: enabled && !!slug,
  });
}

// Hook مخصوص یک پست خاص
export function usePost(slug: string, enabled: boolean = true) {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    author->{
      name,
      image
    },
    mainImage,
    publishedAt,
    body,
    categories[]->{
      title,
      slug
    }
  }`;

  return useSanityData({
    query,
    params: { slug },
    enabled: enabled && !!slug,
  });
}
