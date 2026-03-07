import { BlogPost } from '../types';
import { blogPosts } from '../data/framework';

export const fetchPostById = async (id: string): Promise<BlogPost | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(blogPosts.find(p => p.id === id));
    }, 500);
  });
};

export const fetchPosts = async (): Promise<BlogPost[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(blogPosts);
    }, 500);
  });
};
