
export type LocalizedString = string | { de: string; en: string };

export interface Level {
  id: number;
  title: LocalizedString;
  description: LocalizedString;
  tools?: string[];
}

export interface Branch {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  icon: string;
  levels: Level[];
}

export interface BlogPost {
  id: string;
  title: LocalizedString;
  date: string;
  excerpt: LocalizedString;
  content: LocalizedString;
  author: string;
  imageUrl?: string;
}
