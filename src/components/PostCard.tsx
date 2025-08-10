import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/lib/api';

export default function PostCard({ post }: { post: Post }) {
  return (
    <article className="post-card">
      <Link href={`/posts/${post.id}`}>
        <div className="post-image" style={{ height: '180px' }}>
          <Image 
            src={post.imageUrl} 
            alt={post.title}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </Link>
      <div className="post-content">
        <Link href={`/posts/${post.id}`}>
          <h3 className="post-title text-underline">{post.title}</h3>
        </Link>
        <p className="post-excerpt">{post.excerpt}</p>
        <div className="post-meta">
          <div className="post-avatar">
            <Image 
              src={`https://picsum.photos/seed/${post.author.replace(' ', '-')}/100/100.jpg`}
              alt={post.author}
              width={28}
              height={28}
              style={{ objectFit: 'cover', borderRadius: '50%' }}
            />
          </div>
          <span className="post-author">{post.author}</span>
          <span>•</span>
          <span>{post.readTime} min read</span>
        </div>
      </div>
    </article>
  );
}