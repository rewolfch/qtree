export interface LocalizedString {
  de: string;
  en: string;
}

export interface Branch {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  icon: string;
  levels: {
    id: number;
    title: LocalizedString;
    description: LocalizedString;
    tools: string[];
  }[];
}

export interface BlogPost {
  id: string;
  title: LocalizedString;
  date: string;
  author: string;
  imageUrl: string;
  excerpt: LocalizedString;
  content: LocalizedString;
}

export interface AppToolCell {
  id: string;
  label: any;
  tooltip: any;
  row?: number;
  col?: number;
  status?: string;
  okrs?: boolean[];
  acceptanceCriteria?: string[];
  class?: string;
  isRoot?: boolean;
}

export interface AppToolLane {
  id?: string;
  title?: LocalizedString;
  label?: any;
  startRow: number;
  endRow: number;
  color?: string;
  details?: any;
  targetCount?: number;
}
