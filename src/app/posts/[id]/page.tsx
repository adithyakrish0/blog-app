import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import MainLayout from '@/components/MainLayout';
import PostContent from '@/components/PostContent';
import { fetchPostById } from '@/lib/api';

async function getPost(id: string) {
  try {
    const post = await fetchPostById(id);
    return post;
  } catch (error) {
    notFound();
  }
}

export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
  // Await the params promise
  const { id } = await params;
  
  const post = await getPost(id);
  
  if (!post) {
    notFound();
  }

  return (
    <MainLayout>
      <Header />
      <PostContent initialPost={post} />
    </MainLayout>
  );
}