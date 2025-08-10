// src/app/posts/[slug]/page.tsx
import { notFound } from 'next/navigation';
import HeadComponent from '@/components/Head';
import Header from '@/components/Header';
import MainLayout from '@/components/MainLayout';
import PostContent from '@/components/PostContent';
import { fetchPostBySlug } from '@/lib/api';

async function getPost(slug: string) {
  try {
    const post = await fetchPostBySlug(slug);
    return post;
  } catch (error) {
    notFound();
  }
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  // Await the params promise
  const { slug } = await params;
  
  const post = await getPost(slug);
  
  if (!post) {
    notFound();
  }

  const title = `${post.title} | Next.js Blog`;
  const description = post.excerpt;
  const imageUrl = post.heroImage.src;
  const url = `https://your-domain.com/posts/${post.slug}`;

  return (
    <>
      <HeadComponent 
        title={title}
        description={description}
        imageUrl={imageUrl}
        url={url}
        type="article"
      />
      
      <MainLayout>
        <Header />
        <PostContent initialPost={post} />
      </MainLayout>
    </>
  );
}