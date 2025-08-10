"use client";  // Add this at the top

import React from 'react';

const PostCard = ({ post }) => {
  return (
    <article 
      onMouseEnter={() => {}}
      onMouseLeave={() => {}}
    >
      {/* Post content */}
    </article>
  );
};

export default PostCard;// src/components/PostCard.tsx
import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/lib/api';

export default function PostCard({ post }: { post: Post }) {
  return (
    <article className="post-card">
      <Link href={`/posts/${post.slug}`}>
        <div className="post-image" style={{ height: '180px' }}>
          <Image 
            src={post.thumbnail} 
            alt={post.heroImage.alt}
            fill
            style={{ 
              objectFit: 'cover',
            }}
          />
        </div>
      </Link>
      
      <div className="post-content">
        <Link href={`/posts/${post.slug}`}>
          <h3 className="post-title text-underline">{post.title}</h3>
        </Link>
        
        <p className="post-excerpt">{post.excerpt}</p>
        
        <div className="post-meta">
          <div className="post-avatar">
            <Image 
              src={post.author.avatar}
              alt={post.author.name}
              width={28}
              height={28}
              style={{ 
                objectFit: 'cover',
                borderRadius: '50%'
              }}
            />
          </div>
          <span className="post-author">{post.author.name}</span>
          <span>•</span>
          <span>{post.readTime} read</span>
        </div>
      </div>
    </article>
  );
}