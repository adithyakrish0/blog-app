// src/components/Sidebar.tsx
import { Post } from '@/lib/api';
import FeaturedPostCard from './FeaturedPostCard';

export default function Sidebar({ posts }: { posts: Post[] }) {
  return (
    <div className="sidebar">
      <div className="bg-gray-50 p-6 rounded-xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Other featured posts</h2>
        <div className="space-y-6">
          {posts.length > 0 ? (
            posts.map((post) => (
              <FeaturedPostCard key={post.id} post={post} />
            ))
          ) : (
            <p className="text-gray-500">No posts available</p>
          )}
        </div>
        <div className="mt-6 text-right">
          <a href="/all-posts" className="btn btn-outline">All Posts</a>
        </div>
      </div>
    </div>
  );
}