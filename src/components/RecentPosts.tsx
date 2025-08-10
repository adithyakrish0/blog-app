'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchPosts, Post } from '@/lib/api';
import PostCard from './PostCard';

export default function RecentPosts() {
  const { data: posts, isLoading, error } = useQuery<Post[]>({
    queryKey: ['recentPosts'],
    queryFn: fetchPosts,
  });

  if (isLoading) return <div className="text-center py-12">Loading posts...</div>;
  if (error) return <div className="text-center py-12 text-red-500">Error loading posts</div>;

  // Get posts for the recent posts grid (skip the first 6 which are used in hero and sidebar)
  const recentPosts = posts && posts.length > 6 ? posts.slice(6, 9) : [];

  return (
    <section className="recent-posts" aria-labelledby="recent-posts-heading">
      <h2 id="recent-posts-heading">Recent Posts</h2>
      {recentPosts.length === 0 ? (
        <div className="text-center py-8">No recent posts available</div>
      ) : (
        <div className="posts-grid">
          {recentPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </section>
  );
}