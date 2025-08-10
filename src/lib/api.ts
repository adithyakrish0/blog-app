// src/lib/api.ts
export interface Post {
  id: string;
  title: string;
  slug: string;
  category: string;
  heroImage: {
    src: string;
    alt: string;
  };
  thumbnail: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  readTime: string;
  publishedAt: string;
  tags: string[];
}

// Mock API function to fetch posts
export async function fetchPosts(): Promise<Post[]> {
  try {
    // In a real app, you would fetch from an actual API
    // For now, we'll use mock data
    const response = await fetch('https://mockapi.io/posts');
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    return await response.json();
  } catch (error) {
    // Fallback mock data if API fails
    return [
      {
        id: 'post-001',
        title: 'Unlocking Business Efficiency with SaaS Solutions',
        slug: 'unlocking-business-efficiency-with-saas-solutions',
        category: 'Business',
        heroImage: {
          src: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
          alt: 'Open office with people at desks'
        },
        thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=200&q=80',
        excerpt: 'A short intro to how SaaS improves operations and productivity with examples and best practices.',
        content: 'Next.js is a React framework that enables server-side rendering and static site generation...',
        author: {
          name: 'Jennifer Taylor',
          avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=100&q=80'
        },
        readTime: '3 min',
        publishedAt: '2025-06-01',
        tags: ['SaaS','UI','UX']
      },
      // Add more mock posts as needed
    ];
  }
}

export async function fetchPostBySlug(slug: string): Promise<Post> {
  try {
    const response = await fetch(`https://mockapi.io/posts/${slug}`);
    if (!response.ok) {
      throw new Error('Failed to fetch post');
    }
    return await response.json();
  } catch (error) {
    // Fallback mock data if API fails
    return {
      id: 'post-001',
      title: 'Unlocking Business Efficiency with SaaS Solutions',
      slug: 'unlocking-business-efficiency-with-saas-solutions',
      category: 'Business',
      heroImage: {
        src: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
        alt: 'Open office with people at desks'
      },
      thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=200&q=80',
      excerpt: 'A short intro to how SaaS improves operations and productivity with examples and best practices.',
      content: 'Next.js is a React framework that enables server-side rendering and static site generation...',
      author: {
        name: 'Jennifer Taylor',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=100&q=80'
      },
      readTime: '3 min',
      publishedAt: '2025-06-01',
      tags: ['SaaS','UI','UX']
    };
  }
}