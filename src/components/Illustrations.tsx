
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
    <path d="M12 14c-4 0-7-4-7-9" />
    <path d="M12 14c4 0 7-4 7-9" />
  </svg>
);

export const ForestIcon = ({ className, color }: { className?: string, color?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color || "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22v-8" />
    <path d="M12 14c-4 0-7-4-7-9" />
    <path d="M12 14c4 0 7-4 7-9" />
    <path d="M6 22v-4" />
    <path d="M6 18c-2 0-3.5-2-3.5-4.5" />
    <path d="M6 18c2 0 3.5-2 3.5-4.5" />
    <path d="M18 22v-4" />
    <path d="M18 18c-2 0-3.5-2-3.5-4.5" />
    <path d="M18 18c2 0 3.5-2 3.5-4.5" />
  </svg>
);

export const TheGrowingTree = ({ progress, className }: { progress: number, className?: string }) => {
  return (
    <div className={className}>
      <svg viewBox="0 0 100 200" preserveAspectRatio="none" className="w-full h-full">
        <path 
          d="M50 200 L50 0" 
          stroke="#cbd5e1" 
          strokeWidth="2" 
          fill="none" 
        />
        <path 
          d="M50 200 L50 0" 
          stroke="#10b981" 
          strokeWidth="4" 
          fill="none" 
          strokeDasharray="200"
          strokeDashoffset={200 - (progress * 200)}
        />
      </svg>
    </div>
  );
};
