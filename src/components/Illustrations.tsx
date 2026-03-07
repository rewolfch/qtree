export const LeafIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
  </svg>
);

export const SeedIcon = ({ className, color }: { className?: string, color?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color || "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 22h20" />
    <path d="M12 22v-8" />
    <path d="M12 14c-4 0-7-3-7-7 0-1.5 1-3 3-3 3 0 4 3 4 3s1-3 4-3c2 0 3 1.5 3 3 0 4-3 7-7 7Z" />
  </svg>
);

export const ForestIcon = ({ className, color }: { className?: string, color?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color || "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22v-8" />
    <path d="M12 14c-4 0-7-3-7-7 0-1.5 1-3 3-3 3 0 4 3 4 3s1-3 4-3c2 0 3 1.5 3 3 0 4-3 7-7 7Z" />
    <path d="M6 22v-6" />
    <path d="M6 16c-2 0-3.5-1.5-3.5-3.5 0-.8.5-1.5 1.5-1.5 1.5 0 2 1.5 2 1.5s.5-1.5 2-1.5c1 0 1.5.7 1.5 1.5 0 2-1.5 3.5-3.5 3.5Z" />
    <path d="M18 22v-6" />
    <path d="M18 16c-2 0-3.5-1.5-3.5-3.5 0-.8.5-1.5 1.5-1.5 1.5 0 2 1.5 2 1.5s.5-1.5 2-1.5c1 0 1.5.7 1.5 1.5 0 2-1.5 3.5-3.5 3.5Z" />
  </svg>
);

export const TheGrowingTree = ({ progress, className }: { progress: number, className?: string }) => {
  return (
    <div className={className}>
      <svg viewBox="0 0 100 200" className="w-full h-full">
        <path d="M50 200 L50 150" stroke="currentColor" strokeWidth="4" />
        {progress > 0.3 && <path d="M50 150 L50 100" stroke="currentColor" strokeWidth="4" />}
        {progress > 0.6 && <path d="M50 100 L20 50" stroke="currentColor" strokeWidth="3" />}
        {progress > 0.6 && <path d="M50 100 L80 50" stroke="currentColor" strokeWidth="3" />}
        {progress > 0.8 && <circle cx="20" cy="50" r="10" fill="currentColor" />}
        {progress > 0.8 && <circle cx="80" cy="50" r="10" fill="currentColor" />}
      </svg>
    </div>
  );
};

export const BranchDecoration = ({ className }: { type?: string, className?: string }) => (
  <div className={className}></div>
);
