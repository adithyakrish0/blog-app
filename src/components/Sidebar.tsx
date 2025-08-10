import Link from 'next/link';
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
                <Link href={/posts/} className="focus-ring">
                  <div className="sidebar-thumb">
                    <img 
                      src={post.imageUrl} 
                      alt={post.title}
                      style={{ 
                        objectFit: 'cover',
                        width: '56px',
                        height: '56px',
                        borderRadius: '10px'
                      }}
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
