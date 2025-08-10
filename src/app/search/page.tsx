// src/app/search/page.tsx
import { useSearchParams } from 'next/navigation';
import { fetchPosts, Post } from '@/lib/api';
import Header from '@/components/Header';
import MainLayout from '@/components/MainLayout';
import PostList from '@/components/PostList';
import { GetServerSideProps } from 'next';

interface SearchPageProps {
  initialPosts: Post[];
  query: string;
}

export default function SearchPage({ initialPosts, query }: SearchPageProps) {
  return (
    <MainLayout>
      <Header />
      
      <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">Search Results</h1>
        <p className="text-gray-600 mb-8">
          You searched for: <span className="font-semibold">"{query}"</span>
        </p>
        
        <PostList initialPosts={initialPosts} />
      </div>
    </MainLayout>
  );
}

export const getServerSideProps: GetServerSideProps<SearchPageProps> = async (context) => {
  const query = context.query.q as string || '';
  
  try {
    const posts = await fetchPosts();
    
    // Filter posts based on search query
    const filteredPosts = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        post.category.toLowerCase().includes(query.toLowerCase())
    );
    
    return {
      props: {
        initialPosts: filteredPosts,
        query,
      },
    };
  } catch (error) {
    return {
      props: {
        initialPosts: [],
        query,
      },
    };
  }
};