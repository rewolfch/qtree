export type LocalizedString = {
  de: string;
  en?: string;
};

export interface Branch {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  icon: string;
  levels: Level[];
}

export interface Level {
  id: number;
  title: LocalizedString;
  description: LocalizedString;
}

export interface AppToolLane {
  label: string;
  startRow: number;
  endRow: number;
  targetCount: number;
  icon?: string;
  details: {
    description: string;
    importance: string;
    gettingStarted: string;
    resources: { label: string; url: string; }[];
  };
}

export interface AppToolCell {
  id: string;
  label: LocalizedString;
  tooltip: LocalizedString;
  acceptanceCriteria: string[];
  class?: string;
  isRoot?: boolean;
}

export interface AppToolArrow {
  from: string;
  to: string;
}

export interface AppToolConfig {
  lanes: AppToolLane[];
  cells: AppToolCell[];
  arrows: AppToolArrow[];
}
