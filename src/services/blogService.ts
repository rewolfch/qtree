import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import { BlogPost } from '../types';
import { blogPosts as staticPosts } from '../data/framework';

const COLLECTION_NAME = 'posts';
const STORAGE_KEY = 'qtf_blog_posts_v1';

const isFirebaseReady = () => !!db;

export const fetchAllPosts = async (): Promise<BlogPost[]> => {
  // 1. Firebase
  if (isFirebaseReady()) {
    try {
      const querySnapshot = await getDocs(collection(db, COLLECTION_NAME));
      const posts: BlogPost[] = [];
      querySnapshot.forEach((doc) => {
        posts.push(doc.data() as BlogPost);
      });
      if (posts.length > 0) return posts;
    } catch (error) {
      console.warn("Could not fetch from Firebase, falling back to local.", error);
    }
  }

  // 2. LocalStorage
  try {
    const localData = localStorage.getItem(STORAGE_KEY);
    if (localData) {
      return JSON.parse(localData);
    }
  } catch (e) {
    console.error("Local storage error", e);
  }

  // 3. Static Data
  return staticPosts;
};

export const fetchPostById = async (id: string): Promise<BlogPost | undefined> => {
  const allPosts = await fetchAllPosts();
  return allPosts.find(p => p.id === id);
};
