
import React, { useEffect, useRef, useState } from 'react';

interface RevealTextProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

const RevealText: React.FC<RevealTextProps> = ({ 
  children, 
  delay = 0,
  className = '' 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          if (textRef.current) observer.unobserve(textRef.current);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
    };
  }, [delay]);

  return (
    <div
      ref={textRef}
      className={`overflow-hidden ${className}`}
    >
      <div 
        className={`transform ${
          isVisible ? 'animate-reveal' : 'translate-y-full opacity-0'
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default RevealText;
