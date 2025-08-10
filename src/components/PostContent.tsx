'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchPostById, Post } from '@/lib/api';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function PostContent({ initialPost }: { initialPost: Post }) {
  const router = useRouter();
  
  const { data: post, isLoading, error } = useQuery<Post>({
    queryKey: ['post', initialPost.id],
    queryFn: () => fetchPostById(initialPost.id),
    initialData: initialPost,
  });

  if (isLoading) return (
    <div className="text-center py-12">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
    </div>
  );
  
  if (error) return (
    <div className="text-center py-12">
      <h1 className="text-2xl font-bold text-red-600 mb-4">Error Loading Post</h1>
      <p className="text-gray-600 mb-6">We encountered an error while loading this post.</p>
      <button 
        onClick={() => router.back()} 
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Go Back
      </button>
    </div>
  );

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <article className="mb-12">
        <header className="mb-8 text-center">
          <div className="mb-4">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
              {post?.category}
            </span>
          </div>
          <h1 className="text-4xl font-bold mb-4 leading-tight">{post?.title}</h1>
          <div className="flex flex-wrap justify-center items-center text-gray-600 mb-6">
            <span className="mr-4">By {post?.author}</span>
            <time dateTime={post?.date}>{formatDate(post?.date || '')}</time>
            <span className="mx-2"></span>
            <span>{post?.readTime} min read</span>
          </div>
        </header>
        
        <figure className="mb-8">
          <div className="h-64 md:h-96 rounded-xl overflow-hidden">
            <img 
              src={post?.imageUrl || ''} 
              alt={post?.title || ''}
              style={{ 
                objectFit: 'cover',
                width: '100%',
                height: '100%'
              }}
            />
          </div>
        </figure>
        
        <div className="prose prose-lg max-w-none mx-auto">
          <p className="text-lg leading-relaxed mb-6">{post?.content}</p>
        </div>
      </article>
      
      <footer className="mt-12 pt-6 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <button 
            onClick={() => router.back()} 
            className="flex items-center text-blue-600 hover:text-blue-800"
          >
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back
          </button>
          
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            Back to Home
          </Link>
        </div>
      </footer>
    </div>
  );
}
