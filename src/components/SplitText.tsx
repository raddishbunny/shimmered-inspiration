
import React, { useEffect, useState } from 'react';

interface SplitTextProps {
  text: string;
  className?: string;
  charClassName?: string;
  staggerDelay?: number;
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = '',
  charClassName = '',
  staggerDelay = 30,
}) => {
  const [chars, setChars] = useState<string[]>([]);

  useEffect(() => {
    setChars(text.split(''));
  }, [text]);

  return (
    <span className={className}>
      {chars.map((char, index) => (
        <span
          key={index}
          className={`letter-float ${charClassName}`}
          style={{
            animationDelay: `${index * staggerDelay}ms`,
            animationDuration: '800ms',
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
};

export default SplitText;
