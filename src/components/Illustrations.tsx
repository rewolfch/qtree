import React from 'react';

interface IllustrationProps {
  className?: string;
  color?: string;
  type?: string;
}

interface TreeProps {
  progress: number;
  className?: string;
}

export const TheGrowingTree: React.FC<TreeProps> = ({ progress, className }) => (
  <div className={className} style={{ opacity: 0.5 + progress * 0.5 }}>
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <circle cx="50" cy="50" r={10 + progress * 40} fill="currentColor" className="text-emerald-500" />
    </svg>
  </div>
);

export const SeedIcon: React.FC<IllustrationProps> = ({ className, color }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color || "currentColor"} strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 12 L12 8" />
  </svg>
);

export const ForestIcon: React.FC<IllustrationProps> = ({ className, color }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color || "currentColor"} strokeWidth="2">
    <path d="M12 2 L2 22 H22 Z" />
    <path d="M8 22 V 18" />
    <path d="M16 22 V 18" />
  </svg>
);

export const BranchDecoration: React.FC<IllustrationProps> = ({ className, color, type }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color || "currentColor"} strokeWidth="2">
    <path d="M3 12 H21" />
    {type === 'arrow' && <path d="M17 8 L21 12 L17 16" />}
  </svg>
);

const Illustrations = {
  TheGrowingTree,
  SeedIcon,
  ForestIcon,
  BranchDecoration
};

export default Illustrations;
