'use client';

import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { PortableText } from '@portabletext/react';
import { useEffect, useState } from 'react';

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  author: {
    name: string;
    image?: any;
  };
  mainImage?: any;
  publishedAt: string;
  body: any[];
}

interface SanityContentProps {
  limit?: number;
}

export default function SanityContent({ limit = 10 }: SanityContentProps) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const query = `*[_type == "post"] | order(publishedAt desc) [0...${limit}] {
          _id,
          title,
          slug,
          author->{
            name,
            image
          },
          mainImage,
          publishedAt,
          body
        }`;

        const data = await client.fetch(query);
        setPosts(data);
      } catch (err) {
        setError('خطا در بارگذاری محتوا');
        console.error('Error fetching posts:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, [limit]);

  if (loading) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return <div className="text-center p-8 text-red-600">{error}</div>;
  }

  if (posts.length === 0) {
    return (
      <div className="text-center p-8 text-gray-600">هیچ محتوایی یافت نشد</div>
    );
  }

  return (
    <div className="space-y-8">
      {posts.map((post) => (
        <article
          key={post._id}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          {post.mainImage && (
            <div className="aspect-video w-full">
              <img
                src={urlFor(post.mainImage).width(800).height(400).url()}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {post.title}
            </h2>

            <div className="flex items-center text-sm text-gray-600 mb-4">
              <span>نوشته شده توسط: {post.author.name}</span>
              {post.publishedAt && (
                <span className="mr-4">
                  - {new Date(post.publishedAt).toLocaleDateString('fa-IR')}
                </span>
              )}
            </div>

            {post.body && (
              <div className="prose prose-lg max-w-none">
                <PortableText value={post.body} />
              </div>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}


