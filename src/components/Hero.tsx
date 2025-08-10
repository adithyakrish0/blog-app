// src/components/Hero.tsx
import Link from "next/link";
import Image from "next/image";
import { Post } from "@/lib/api";

export default function Hero({ post }: { post: Post | undefined }) {
  if (!post) {
    return (
      <div className="hero skeleton rounded-xl" style={{ height: "360px" }}></div>
    );
  }

  return (
    <article className="hero">
      <Link href={`/posts/${post.slug}`}>
        <div className="relative">
          <div className="hero-image" style={{ height: "360px" }}>
            <Image 
              src={post.heroImage.src} 
              alt={post.heroImage.alt}
              fill
              style={{ 
                objectFit: "cover",
              }}
              priority
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