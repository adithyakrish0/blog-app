import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/lib/api';

export default function Sidebar({ posts }: { posts: Post[] }) {
  return (
    <aside className="sidebar" aria-label="Other featured posts">
      <h3>Other featured posts</h3>
      
      {posts.length === 0 ? (
        <div className="text-center py-4">No featured posts available</div>
      ) : (
        <>
          <ul className="sidebar-list">
            {posts.map((post) => (
              <li key={post.id} className="sidebar-item">
                <Link href={`/posts/${post.id}`} className="focus-ring">
                  <div className="sidebar-thumb">
                    <Image 
                      src={post.imageUrl} 
                      alt={post.title}
                      width={56}
                      height={56}
                      style={{ objectFit: 'cover', borderRadius: '10px' }}
                    />
                  </div>
                  <div className="sidebar-title">{post.title}</div>
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/all-posts" className="btn btn-outline focus-ring">All Posts</Link>
        </>
      )}
    </aside>
  );
}