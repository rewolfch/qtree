
import React, { useRef, useEffect, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-right' | 'fade-left' | 'zoom-in';
  delay?: number;
  duration?: number;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  className = "", 
  animation = 'fade-up', 
  delay = 0,
  duration = 1000
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) observer.observe(ref.current);
    
    return () => {
      if (ref.current) observer.disconnect();
    };
  }, []);

  const getInitialClass = () => {
    switch (animation) {
      case 'fade-right': return '-translate-x-12 opacity-0';
      case 'fade-left': return 'translate-x-12 opacity-0';
      case 'zoom-in': return 'scale-90 opacity-0';
      case 'fade-up': default: return 'translate-y-12 opacity-0';
    }
  };

  const getFinalClass = () => {
    return 'translate-x-0 translate-y-0 scale-100 opacity-100';
  };

  return (
    <div
      ref={ref}
      className={`${className} transition-all ease-out will-change-transform ${isVisible ? getFinalClass() : getInitialClass()}`}
      style={{ 
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms` 
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
