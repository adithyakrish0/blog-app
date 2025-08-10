import Link from 'next/link';
import { Post } from '@/lib/api';

export default function PostCard({ post }: { post: Post }) {
  return (
    <article className="post-card">
      <Link href="/posts/">
        <div className="post-image" style={{ height: '180px' }}>
          <img 
            src={post.imageUrl} 
            alt={post.title}
            style={{ 
              objectFit: 'cover',
              width: '100%',
              height: '100%'
            }}
          />
        </div>
      </Link>
      <div className="post-content">
        <Link href={/posts/}>
          <h3 className="post-title text-underline">{post.title}</h3>
        </Link>
        <p className="post-excerpt">{post.excerpt}</p>
        <div className="post-meta">
          <div className="post-avatar">
            <img 
              src={https://picsum.photos/seed//100/100.jpg}
              alt={post.author}
              style={{ 
                objectFit: 'cover',
                width: '28px',
                height: '28px',
                borderRadius: '50%'
              }}
            />
          </div>
          <span className="post-author">{post.author}</span>
          <span></span>
          <span>{post.readTime} min read</span>
        </div>
      </div>
    </article>
  );
}
