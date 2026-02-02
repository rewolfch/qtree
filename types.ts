export interface Level {
  id: number;
  title: string;
  description: string;
  tools?: string[];
}

export interface Branch {
  id: string;
  title: string;
  description: string;
  icon: string;
  levels: Level[];
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  author: string;
  imageUrl?: string;
}
