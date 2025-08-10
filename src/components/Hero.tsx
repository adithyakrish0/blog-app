import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/lib/api';

export default function Hero({ post }: { post: Post | undefined }) {
  if (!post) {
    return (
      <div className="hero skeleton rounded-xl" style={{ height: '360px' }}></div>
    );
  }

  return (
    <article className="hero">
      <Link href={`/posts/${post.id}`}>
        <div className="relative">
          <div className="hero-image" style={{ height: '360px' }}>
            <Image 
              src={post.imageUrl} 
              alt={post.title}
              fill
              style={{ objectFit: 'cover' }}
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="hero-overlay">
            <span className="hero-badge">{post.category}</span>
            <h1 className="hero-title">{post.title}</h1>
          </div>
        </div>
      </Link>
    </article>
  );
}