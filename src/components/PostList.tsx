// src/components/PostList.tsx
'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchPosts, Post } from '@/lib/api';
import PostCard from './PostCard';
import SearchBar from './SearchBar';
import { useState, useEffect } from 'react';

export default function PostList({ initialPosts }: { initialPosts: Post[] }) {
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(initialPosts);
  const [searchTerm, setSearchTerm] = useState('');
  
  const { data: posts, isLoading, error } = useQuery<Post[]>({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    initialData: initialPosts,
  });

  useEffect(() => {
    if (posts) {
      if (searchTerm === '') {
        setFilteredPosts(posts);
      } else {
        const filtered = posts.filter(
          (post) =>
            post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.category.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredPosts(filtered);
      }
    }
  }, [posts, searchTerm]);

  return (
    <div className="post-list">
      <div className="mb-8">
        <SearchBar />
        {searchTerm && (
          <p className="mt-2 text-gray-600">
            Showing {filteredPosts.length} results for "{searchTerm}"
          </p>
        )}
      </div>
      
      {isLoading ? (
        <div className="text-center py-12">Loading posts...</div>
      ) : error ? (
        <div className="text-center py-12 text-red-500">Error loading posts</div>
      ) : filteredPosts.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-xl font-semibold mb-2">No posts found</h3>
          <p className="text-gray-600">Try a different search term</p>
        </div>
      ) : (
        <div className="post-grid">
          {filteredPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}