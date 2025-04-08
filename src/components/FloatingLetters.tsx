import React, { useEffect, useState } from 'react';

interface FloatingLettersProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
}

const FloatingLetters: React.FC<FloatingLettersProps> = ({ 
  text, 
  className = '',
  delay = 0,
  duration = 4000
}) => {
  const [letters, setLetters] = useState<string[]>([]);
  const [positions, setPositions] = useState<{x: number, y: number}[]>([]);

  useEffect(() => {
    // Random newspaper-like words
    const words = [
      'reputation', 'brilliant', 'innovative', 'designer', 'developer',
      'creative', 'bold', 'unique', 'visionary', 'talented',
      'skilled', 'passionate', 'dedicated', 'professional', 'expert',
      'web', 'code', 'design', 'tech', 'digital', 'modern'
    ];
    
    // Generate random letters
    const generateLetters = () => {
      const randomLetters: string[] = [];
      const randomPositions: {x: number, y: number}[] = [];
      
      for (let i = 0; i < 50; i++) {
        const randomWord = words[Math.floor(Math.random() * words.length)];
        randomLetters.push(randomWord);
        
        // Random position
        randomPositions.push({
          x: Math.random() * 100, // percent
          y: Math.random() * 100  // percent
        });
      }
      
      setLetters(randomLetters);
      setPositions(randomPositions);
    };

    generateLetters();
    
    // Regenerate letters every 30 seconds to keep the animation fresh
    const intervalId = setInterval(() => {
      generateLetters();
    }, 30000);
    
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {letters.map((letter, index) => (
        <div
          key={index}
          className="absolute text-xs md:text-sm opacity-0 text-foreground/70 font-serif uppercase tracking-wider animate-float-letter"
          style={{
            left: `${positions[index]?.x}%`,
            top: `${positions[index]?.y}%`,
            animationDelay: `${delay + Math.random() * 3000}ms`,
            animationDuration: `${duration + Math.random() * 2000}ms`
          }}
        >
          {letter}
        </div>
      ))}
    </div>
  );
};

export default FloatingLetters;
