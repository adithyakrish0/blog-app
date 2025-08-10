// src/components/FeaturedPostCard.tsx
import Link from 'next/link';
import { Post } from '@/lib/api';

export default function FeaturedPostCard({ post }: { post: Post }) {
  return (
    <div className="flex space-x-4">
      <div className="flex-shrink-0">
        <div className="bg-gray-200 rounded-lg w-24 h-24 flex items-center justify-center">
          <span className="text-gray-500 text-xs">Image</span>
        </div>
      </div>
      <div>
        <h3 className="font-bold text-gray-800 mb-1 line-clamp-2">
          <Link href={`/posts/${post.id}`} className="hover:text-blue-600">
            {post.title}
          </Link>
        </h3>
        <p className="text-sm text-gray-600 mb-2 line-clamp-2">{post.excerpt}</p>
        <div className="flex items-center text-xs text-gray-500">
          <span>{post.author}</span>
          <span className="mx-2">•</span>
          <span>{post.readTime} min read</span>
        </div>
      </div>
    </div>
  );
}