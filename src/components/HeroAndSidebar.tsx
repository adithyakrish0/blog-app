'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchPosts, Post } from '@/lib/api';
import Hero from './Hero';
import Sidebar from './Sidebar';

export default function HeroAndSidebar() {
  const { data: posts, isLoading, error } = useQuery<Post[]>({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  if (isLoading) return (
    <div className="hero-and-sidebar grid grid-cols-12 gap-6">
      <div className="col-span-8">
        <Hero post={undefined} />
      </div>
      <div className="col-span-4">
        <div className="text-center py-12">Loading posts...</div>
      </div>
    </div>
  );
  
  if (error) return (
    <div className="text-center py-12 text-red-500">
      Error loading posts
    </div>
  );

  // Get the first post for the hero
  const heroPost = posts && posts.length > 0 ? posts[0] : undefined;
  
  // Get the next 5 posts for the sidebar
  const sidebarPosts = posts && posts.length > 1 ? posts.slice(1, 6) : [];

  return (
    <div className="hero-and-sidebar grid grid-cols-12 gap-6">
      <div className="col-span-8">
        <Hero post={heroPost} />
      </div>
      <div className="col-span-4">
        <Sidebar posts={sidebarPosts} />
      </div>
    </div>
  );
}