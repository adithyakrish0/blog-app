// src/components/FeaturedPostCard.tsx
import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/lib/api';

export default function FeaturedPostCard({ post }: { post: Post }) {
  return (
    <div className="flex space-x-4">
      <div className="flex-shrink-0">
        <div className="sidebar-thumb">
          <Image 
            src={post.thumbnail} 
            alt={post.title}
            width={56}
            height={56}
            style={{ 
              objectFit: 'cover',
              borderRadius: '10px'
            }}
          />
        </div>
      </div>
      <div>
        <h3 className="font-bold text-gray-800 mb-1 line-clamp-2">
          <Link href={`/posts/${post.slug}`} className="hover:text-blue-600">
            {post.title}
          </Link>
        </h3>
        <div className="flex items-center text-xs text-gray-500">
          <span>{post.author.name}</span>
          <span className="mx-2">•</span>
          <span>{post.readTime} read</span>
        </div>
      </div>
    </div>
  );
}