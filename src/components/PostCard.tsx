import Link from 'next/link';
import { Post } from '@/lib/api';

export default function PostCard({ post }: { post: Post }) {
  return (
    <article className="post-card">
      {/* First Link - Fixed to use string literal */}
      <Link href={`/posts/${post.id}`}>
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
        {/* Second Link - Fixed the syntax error and RegExp issue */}
        <Link href={`/posts/${post.id}`}>
          <h3 className="post-title text-underline">{post.title}</h3>
        </Link>
        
        <p className="post-excerpt">{post.excerpt}</p>
        
        <div className="post-meta">
          <div className="post-avatar">
            <img 
              // Fixed the image source syntax
              src={`https://picsum.photos/seed/${post.author}/100/100.jpg`}
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
          <span>•</span> {/* Added bullet separator */}
          <span>{post.readTime} min read</span>
        </div>
      </div>
    </article>
  );
}