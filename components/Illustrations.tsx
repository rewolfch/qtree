
import React from 'react';

interface IllustrationProps {
  className?: string;
  color?: string;
  type?: string;
}

/**
 * Renders an abstract representation of a specific Framework Branch.
 */
export const BranchDecoration: React.FC<IllustrationProps> = ({ className = "", color = "currentColor", type }) => {
  const renderPath = () => {
    switch (type) {
      case "config-mgmt":
        return (
          <g fill="none" stroke={color} strokeWidth="2" strokeLinecap="round">
            <path d="M20 80 Q 40 50 20 20" opacity="0.4" />
            <path d="M50 80 Q 30 40 50 10" />
            <path d="M80 80 Q 60 50 80 20" opacity="0.4" />
            <circle cx="20" cy="20" r="4" fill={color} />
            <circle cx="50" cy="10" r="4" fill={color} />
            <circle cx="80" cy="20" r="4" fill={color} />
          </g>
        );
      case "unit-testing":
        return (
          <g fill="none" stroke={color} strokeWidth="2">
            <rect x="20" y="20" width="20" height="20" rx="4" opacity="0.3" />
            <rect x="50" y="15" width="25" height="25" rx="5" />
            <rect x="30" y="55" width="40" height="25" rx="6" opacity="0.5" />
            <path d="M30 40 L30 55" strokeDasharray="4 4" />
          </g>
        );
      case "build-practices":
        return (
          <g fill="none" stroke={color} strokeWidth="2">
            <circle cx="25" cy="50" r="10" />
            <circle cx="50" cy="50" r="12" />
            <circle cx="75" cy="50" r="10" />
            <path d="M35 50 L38 50 M62 50 L65 50" />
          </g>
        );
      case "deployment":
        return (
          <g fill="none" stroke={color} strokeWidth="2">
            <path d="M50 85 L50 15 M50 15 L35 35 M50 15 L65 35" />
            <circle cx="50" cy="15" r="15" strokeOpacity="0.2" />
            <path d="M20 85 L80 85" strokeLinecap="round" />
          </g>
        );
      case "test-automation":
        return (
          <g fill="none" stroke={color} strokeWidth="2">
            <rect x="25" y="30" width="20" height="20" rx="4" />
            <rect x="55" y="30" width="20" height="20" rx="4" />
            <rect x="40" y="60" width="20" height="20" rx="4" />
            <path d="M35 50 L40 60 M65 50 L60 60" />
            <circle cx="50" cy="20" r="4" fill={color} />
            <path d="M50 24 L50 35" />
            <path d="M30 40 L35 40 M60 40 L65 40" strokeWidth="1" />
          </g>
        );
      case "virtualization":
        return (
          <g fill="none" stroke={color} strokeWidth="2">
            <path d="M20 65 Q 25 45 45 45 Q 65 45 75 65" strokeDasharray="4 4" />
            <rect x="25" y="60" width="50" height="20" rx="4" />
            <line x1="35" y1="70" x2="65" y2="70" opacity="0.5" />
            <path d="M50 45 L50 25" strokeDasharray="2 2" />
            <circle cx="50" cy="20" r="5" />
          </g>
        );
      case "manual-testing":
        return (
          <g fill="none" stroke={color} strokeWidth="2">
             <circle cx="45" cy="45" r="18" />
             <path d="M58 58 L75 75" strokeWidth="4" strokeLinecap="round" />
             <path d="M38 45 L42 50 L52 40" strokeLinecap="round" strokeLinejoin="round" />
             <path d="M80 30 L85 25 M75 25 L80 20" opacity="0.5" />
          </g>
        );
      case "test-mgmt":
        return (
          <g fill="none" stroke={color} strokeWidth="2">
            <rect x="15" y="20" width="70" height="60" rx="4" opacity="0.3"/>
            <path d="M25 70 L25 50" strokeWidth="4" strokeLinecap="round" />
            <path d="M40 70 L40 35" strokeWidth="4" strokeLinecap="round" />
            <path d="M55 70 L55 60" strokeWidth="4" strokeLinecap="round" />
            <path d="M70 70 L70 25" strokeWidth="4" strokeLinecap="round" />
            <path d="M25 50 L40 35 L55 60 L70 25" strokeWidth="1" opacity="0.5" />
          </g>
        );
      default:
        return (
          <g fill="none" stroke={color} strokeWidth="2">
            <path d="M50 90 V 50 M50 50 L 20 20 M50 50 L 80 20" />
            <circle cx="20" cy="20" r="5" />
            <circle cx="80" cy="20" r="5" />
          </g>
        );
    }
  };

  return (
    <svg viewBox="0 0 100 100" className={className}>
      {renderPath()}
    </svg>
  );
};

export const RootSystem: React.FC<{ progress: number; className?: string }> = ({ progress, className = "" }) => {
  // progress is 0 to 1
  const dashOffset = 100 - (progress * 100);
  
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M50 0 Q 50 20 40 40 Q 30 60 50 80 Q 70 90 50 100" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeDasharray="100" 
        strokeDashoffset={dashOffset}
        style={{ transition: 'stroke-dashoffset 0.5s ease-out' }}
      />
      <path 
        d="M50 10 Q 30 20 20 50 Q 15 80 30 90" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        opacity="0.4"
        strokeDasharray="100" 
        strokeDashoffset={dashOffset + 10}
        style={{ transition: 'stroke-dashoffset 0.7s ease-out' }}
      />
      <path 
        d="M50 15 Q 70 30 80 60 Q 85 85 70 95" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        opacity="0.4"
        strokeDasharray="100" 
        strokeDashoffset={dashOffset + 15}
        style={{ transition: 'stroke-dashoffset 0.8s ease-out' }}
      />
    </svg>
  );
};

export const TrunkPath: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 20 100" fill="none" preserveAspectRatio="none">
    <path d="M10 0V100" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 8" />
    <circle cx="10" cy="0" r="2.5" fill="currentColor" />
    <circle cx="10" cy="100" r="2.5" fill="currentColor" />
  </svg>
);

/**
 * A comprehensive tree animation that reveals itself based on scroll progress.
 * Covers 4 sections vertically.
 */
export const TheGrowingTree: React.FC<{ progress: number; className?: string }> = ({ progress, className = "" }) => {
  // progress goes from 0.0 to 1.0
  
  // Calculations for staggered animation
  // Trunk grows continuously: 0 -> 1
  const trunkProgress = Math.min(1, Math.max(0, progress * 1.1)); 
  
  // Roots spread at start: 0 -> 0.2
  const rootsProgress = Math.min(1, Math.max(0, progress * 5));
  
  // Branches spread in middle: 0.4 -> 0.8
  const branchesProgress = Math.min(1, Math.max(0, (progress - 0.4) * 2.5));
  
  // Leaves/Canopy at end: 0.7 -> 1.0
  const canopyProgress = Math.min(1, Math.max(0, (progress - 0.7) * 3.3));

  // Stroke Dash Array Helpers
  const draw = (val: number, max: number) => ({
    strokeDasharray: max,
    strokeDashoffset: max - (val * max)
  });

  return (
    <svg className={className} viewBox="0 0 200 800" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      
      {/* 1. ROOTS (Level 1 Area) - Top of SVG */}
      <g className="text-amber-500" style={{ opacity: rootsProgress > 0 ? 1 : 0 }}>
        {/* Main Root Down */}
        <path d="M100 20 Q 100 40 100 60" stroke="currentColor" strokeWidth="3" strokeLinecap="round" style={draw(rootsProgress, 40)} />
        {/* Side Roots */}
        <path d="M100 40 Q 80 50 70 80" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" style={draw(rootsProgress, 50)} />
        <path d="M100 40 Q 120 50 130 80" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" style={draw(rootsProgress, 50)} />
      </g>

      {/* 2. TRUNK (Spanning Level 1 to 4) */}
      <g className={progress > 0.5 ? "text-brand-600 transition-colors duration-1000" : "text-slate-300 transition-colors duration-1000"}>
         {/* Main Central Trunk Line */}
         <path 
           d="M100 60 C 100 150, 95 250, 100 350 C 105 450, 95 550, 100 650" 
           stroke="currentColor" 
           strokeWidth={progress > 0.5 ? 4 : 2} 
           strokeLinecap="round"
           fill="none"
           style={{
             ...draw(trunkProgress, 600),
             transition: 'stroke-width 1s ease'
           }}
         />
      </g>

      {/* 3. BRANCHES (Level 3 Area) */}
      <g className="text-brand-500">
         {/* Right Big Branch */}
         <path 
           d="M100 350 Q 140 330 160 300" 
           stroke="currentColor" 
           strokeWidth="3" 
           strokeLinecap="round" 
           fill="none" 
           style={draw(branchesProgress, 100)} 
         />
         {/* Left Big Branch */}
         <path 
           d="M100 380 Q 60 360 40 330" 
           stroke="currentColor" 
           strokeWidth="3" 
           strokeLinecap="round" 
           fill="none" 
           style={draw(branchesProgress, 100)} 
         />
         
         {/* Little sprouts on branches */}
         <circle cx="160" cy="300" r={branchesProgress * 4} fill="currentColor" />
         <circle cx="40" cy="330" r={branchesProgress * 4} fill="currentColor" />
      </g>

      {/* 4. FOREST / CANOPY (Level 4 Area) */}
      <g className="text-emerald-600">
         {/* Lower Branches */}
         <path 
           d="M100 550 Q 130 570 150 600" 
           stroke="currentColor" 
           strokeWidth="2" 
           strokeLinecap="round" 
           fill="none" 
           style={draw(canopyProgress, 80)} 
         />
         <path 
           d="M100 580 Q 70 600 50 630" 
           stroke="currentColor" 
           strokeWidth="2" 
           strokeLinecap="round" 
           fill="none" 
           style={draw(canopyProgress, 80)} 
         />
         
         {/* Leaves/Fruits */}
         <circle cx="150" cy="600" r={canopyProgress * 6} fill="currentColor" opacity="0.8" />
         <circle cx="50" cy="630" r={canopyProgress * 5} fill="currentColor" opacity="0.8" />
         
         {/* Final Ground Connection */}
         <path 
            d="M80 750 L 120 750"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            style={{ opacity: canopyProgress, transition: 'opacity 0.5s' }}
         />
      </g>

    </svg>
  );
};

export const SeedIcon: React.FC<IllustrationProps> = ({ className = "", color = "#f59e0b" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C8.13401 2 5 5.13401 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13401 15.866 2 12 2Z" fill={color} fillOpacity="0.2" stroke={color} strokeWidth="2" strokeLinejoin="round"/>
    <circle cx="12" cy="9" r="3" fill={color} />
  </svg>
);

export const LeafIcon: React.FC<IllustrationProps> = ({ className = "", color = "#22c55e" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M21 21C21 21 16 20 12 16C8 12 7 3 7 3C7 3 16 4 20 8C24 12 21 21 21 21Z" fill={color} fillOpacity="0.1" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7 3L3 7" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ForestIcon: React.FC<IllustrationProps> = ({ className = "", color = "#065f46" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22V17M12 17L8 13M12 17L16 13M12 2L3 11H21L12 2Z" fill={color} fillOpacity="0.1" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 22V19M6 19L4 17M6 19L8 17M6 10L2 14H10L6 10Z" fill={color} fillOpacity="0.1" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
    <path d="M18 22V19M18 19L16 17M18 19L20 17M18 10L14 14H22L18 10Z" fill={color} fillOpacity="0.1" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
  </svg>
);

export const GrowthBackground: React.FC<IllustrationProps> = ({ className = "" }) => (
  <svg className={`absolute opacity-[0.03] pointer-events-none ${className}`} viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M400 800C400 800 400 600 300 400C200 200 100 100 100 100" stroke="currentColor" strokeWidth="20" strokeLinecap="round"/>
    <path d="M400 800C400 800 400 650 550 500C700 350 750 200 750 200" stroke="currentColor" strokeWidth="15" strokeLinecap="round"/>
    <path d="M300 400C300 400 250 350 150 300" stroke="currentColor" strokeWidth="10" strokeLinecap="round"/>
  </svg>
);
