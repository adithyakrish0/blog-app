'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchPosts, Post } from '@/lib/api';
import Header from '@/components/Header';
import MainLayout from '@/components/MainLayout';
import Hero from '@/components/Hero';
import Sidebar from '@/components/Sidebar';
import PostCard from '@/components/PostCard';

export default function Home() {
  const { data: posts, isLoading, error } = useQuery<Post[]>({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  // Get the first post for the hero
  const heroPost = posts && posts.length > 0 ? posts[0] : undefined;
  
  // Get the next 5 posts for the sidebar
  const sidebarPosts = posts && posts.length > 1 ? posts.slice(1, 6) : [];
  
  // Get posts for the recent posts grid (skip the first 6 which are used in hero and sidebar)
  const recentPosts = posts && posts.length > 6 ? posts.slice(6, 9) : [];

  return (
    <MainLayout>
      <Header />
      
      <div className="layout">
        <div className="main-col">
          <Hero post={heroPost} />
          
          <section className="recent-posts" aria-labelledby="recent-posts-heading">
            <h2 id="recent-posts-heading">Recent Posts</h2>
            
            {recentPosts.length === 0 ? (
              <div className="text-center py-8">No recent posts available</div>
            ) : (
              <div className="post-grid">
                {recentPosts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
            )}
          </section>
        </div>
        
        <div className="sidebar-col">
          <Sidebar posts={sidebarPosts} />
        </div>
      </div>
    </MainLayout>
  );
}