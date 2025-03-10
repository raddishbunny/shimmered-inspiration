
import { useEffect, useRef } from 'react';

interface Point {
  x: number;
  y: number;
}

const Snake = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas to full window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Snake properties
    const segments = 40;
    const points: Point[] = [];
    const segmentLength = 25;
    const amplitude = 30;
    const period = 10000; // 10 seconds for full cycle
    
    // Initialize points
    for (let i = 0; i < segments; i++) {
      points.push({
        x: -100 - (i * segmentLength),
        y: Math.random() * window.innerHeight
      });
    }
    
    let animationId: number;
    let startTime = Date.now();
    let progress = 0;
    
    const draw = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Calculate elapsed time and progress
      const elapsed = Date.now() - startTime;
      progress = (elapsed % period) / period;
      
      // Update points positions
      const leadingX = (window.innerWidth + 200) * progress - 100;
      
      points[0].x = leadingX;
      points[0].y = window.innerHeight / 2 + Math.sin(progress * Math.PI * 2) * amplitude;
      
      // Update following segments
      for (let i = 1; i < segments; i++) {
        const dx = points[i-1].x - points[i].x;
        const dy = points[i-1].y - points[i].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance > segmentLength) {
          const angle = Math.atan2(dy, dx);
          points[i].x += Math.cos(angle) * (distance - segmentLength);
          points[i].y += Math.sin(angle) * (distance - segmentLength);
        }
      }
      
      // Draw the snake
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      
      // Draw with bezier curves for smoothness
      for (let i = 1; i < segments - 2; i++) {
        const xc = (points[i].x + points[i+1].x) / 2;
        const yc = (points[i].y + points[i+1].y) / 2;
        ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
      }
      
      // Connect the last two points
      ctx.quadraticCurveTo(
        points[segments-2].x, 
        points[segments-2].y, 
        points[segments-1].x, 
        points[segments-1].y
      );
      
      // Set snake style - subtle gradient
      const gradient = ctx.createLinearGradient(
        points[0].x, points[0].y, 
        points[segments-1].x, points[segments-1].y
      );
      gradient.addColorStop(0, 'rgba(155, 135, 245, 0.2)'); // Light purple with low opacity
      gradient.addColorStop(0.5, 'rgba(155, 135, 245, 0.15)');
      gradient.addColorStop(1, 'rgba(155, 135, 245, 0.1)');
      
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 15;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.stroke();
      
      // Add subtle glow
      ctx.shadowBlur = 10;
      ctx.shadowColor = 'rgba(155, 135, 245, 0.3)';
      
      // Request next frame
      animationId = requestAnimationFrame(draw);
    };
    
    // Start animation
    draw();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
};

export default Snake;
