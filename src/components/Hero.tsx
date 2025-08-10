import Link from "next/link";
import { Post } from "@/lib/api";

export default function Hero({ post }: { post: Post | undefined }) {
  if (!post) {
    return (
      <div className="hero skeleton rounded-xl" style={{ height: "360px" }}></div>
    );
  }

  return (
    <article className="hero">
      <Link href={`/posts/${post.id}`}>
        <div className="relative">
          <div className="hero-image" style={{ height: "360px" }}>
            <img 
              src={post.imageUrl} 
              alt={post.title}
              style={{ 
                objectFit: "cover",
                width: "100%",
                height: "100%"
              }}
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
