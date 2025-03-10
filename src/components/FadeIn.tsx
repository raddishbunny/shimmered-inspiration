
import React, { useEffect, useRef, useState } from 'react';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'right' | 'none';
  className?: string;
}

const FadeIn: React.FC<FadeInProps> = ({ 
  children, 
  delay = 0,
  direction = 'up',
  className = '' 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          if (elementRef.current) observer.unobserve(elementRef.current);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, [delay]);

  const getAnimation = () => {
    if (direction === 'up') return 'animate-slide-up';
    if (direction === 'right') return 'animate-slide-right';
    return 'animate-fade-in';
  };

  return (
    <div
      ref={elementRef}
      className={`${className} ${isVisible ? getAnimation() : 'opacity-0'}`}
      style={{ 
        animationDelay: `${delay}ms`,
        ...(direction === 'up' && !isVisible ? { transform: 'translateY(20px)' } : {}),
        ...(direction === 'right' && !isVisible ? { transform: 'translateX(-20px)' } : {})
      }}
    >
      {children}
    </div>
  );
};

export default FadeIn;
