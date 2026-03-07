
export type LocalizedString = string | { de: string; en?: string };

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

export interface AppToolCell {
  id: string;
  label: string;
  tooltip: string;
  acceptanceCriteria?: string[];
}

export interface AppToolLane {
  label: string;
  startRow: number;
  endRow: number;
  details: {
    description: string;
    why: string;
    how: string;
    resources?: { label: string; url: string }[];
  };
}

export interface AppToolConfig {
  lanes: AppToolLane[];
  cells: AppToolCell[];
  arrows: { from: string; to: string }[];
}
