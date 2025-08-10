// src/components/FeaturedPosts.tsx
'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchPosts, Post } from '@/lib/api';
import FeaturedPostCard from './FeaturedPostCard';

export default function FeaturedPosts({ initialPosts }: { initialPosts: Post[] }) {
  const { data: posts, isLoading, error } = useQuery<Post[]>({
    queryKey: ['featuredPosts'],
    queryFn: fetchPosts,
    initialData: initialPosts,
  });

  // Get 5 featured posts (excluding the first 3 which are in recent posts)
  const featuredPosts = posts ? posts.slice(3, 8) : [];

  return (
    <div className="bg-gray-50 p-6 rounded-xl">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Other featured posts</h2>
      <div className="space-y-6">
        {isLoading ? (
          <div className="text-center py-12">Loading posts...</div>
        ) : error ? (
          <div className="text-center py-12 text-red-500">Error loading posts</div>
        ) : featuredPosts.length > 0 ? (
          featuredPosts.map((post) => (
            <FeaturedPostCard key={post.id} post={post} />
          ))
        ) : (
          <p className="text-gray-500">No featured posts available</p>
        )}
      </div>
      <div className="mt-6 text-right">
        <a href="/all-posts" className="btn btn-outline">All Posts</a>
      </div>
    </div>
  );
}