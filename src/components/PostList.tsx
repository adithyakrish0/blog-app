// src/components/PostList.tsx
'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchPosts, Post } from '@/lib/api';
import PostCard from './PostCard';
import SearchBar from './SearchBar';
import { useState, useEffect } from 'react';

export default function PostList() {
  const { data: posts, isLoading, error } = useQuery<Post[]>({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (posts) {
      if (searchTerm === '') {
        setFilteredPosts(posts);
      } else {
        const filtered = posts.filter(
          (post) =>
            post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.category.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredPosts(filtered);
      }
    }
  }, [posts, searchTerm]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  if (isLoading) return <div className="text-center py-12">Loading posts...</div>;
  if (error) return <div className="text-center py-12 text-red-500">Error loading posts</div>;

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {filteredPosts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No posts found matching your search.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {filteredPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </>
  );
}