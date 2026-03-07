
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
  label: LocalizedString;
  tooltip: LocalizedString;
  acceptanceCriteria?: string[];
  class?: string;
  isRoot?: boolean;
}

export interface AppToolLane {
  label: string;
  startRow: number;
  endRow: number;
  icon?: string;
  details: {
    description: LocalizedString;
    why: LocalizedString;
    how: LocalizedString;
    resources?: { label: string; url: string }[];
  };
}

export interface AppNode extends Omit<AppToolCell, 'label' | 'tooltip'> {
  title: string;
  description: string;
  level: number;
  branchId: string;
  row: number;
  col: number;
}
