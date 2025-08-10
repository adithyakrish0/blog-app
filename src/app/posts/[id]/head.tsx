// src/app/posts/[id]/head.tsx
import Head from 'next/head';
import { fetchPostById } from '@/lib/api';

interface PostHeadProps {
  params: { id: string };
}

export default async function PostHead({ params }: PostHeadProps) {
  const post = await fetchPostById(params.id);
  
  const title = `${post.title} | Next.js Blog`;
  const description = post.excerpt;
  const imageUrl = post.imageUrl;
  const url = `https://your-domain.com/posts/${post.id}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph */}
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={url} />
      <meta property="article:published_time" content={post.date} />
      <meta property="article:author" content={post.author} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Head>
  );
}