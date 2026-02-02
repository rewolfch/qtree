
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
          </g>
        );
      case "deployment":
        return (
          <g fill="none" stroke={color} strokeWidth="2">
            <path d="M50 85 L50 15 M50 15 L35 35 M50 15 L65 35" />
            <circle cx="50" cy="15" r="15" strokeOpacity="0.2" />
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
