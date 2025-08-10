import axios from 'axios';
import { mockPosts } from './mockData';

// Define the Post type
export type Post = {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  imageUrl: string;
  readTime: number;
};

// For development, use mock data
const useMockData = process.env.NODE_ENV === 'development';

const apiClient = axios.create({
  baseURL: 'https://mockapi.io/posts', // Replace with your actual mock API URL
});

export const fetchPosts = async (): Promise<Post[]> => {
  if (useMockData) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return mockPosts;
  }
  
  try {
    const response = await apiClient.get('/');
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};

export const fetchPostById = async (id: string): Promise<Post> => {
  if (useMockData) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    const post = mockPosts.find(p => p.id === id);
    if (!post) {
      throw new Error('Post not found');
    }
    return post;
  }
  
  try {
    const response = await apiClient.get(`/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching post:', error);
    throw new Error('Post not found');
  }
};