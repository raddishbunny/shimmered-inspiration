
import { useEffect, useRef, useState } from 'react';

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
    const segments = 50; // More segments for a bigger snake
    const points: Point[] = [];
    const segmentLength = 30; // Longer segments for a bigger snake
    const amplitude = 60; // Amplitude for vertical movement
    const period = 18000; // 18 seconds for full back and forth cycle
    
    // Initialize points
    for (let i = 0; i < segments; i++) {
      points.push({
        x: -100 - (i * segmentLength),
        y: Math.random() * window.innerHeight
      });
    }
    
    // Scales properties
    const scaleSize = 20; // Bigger scales
    const scaleVariation = 4;
    
    // Snake eye properties
    let eyePosition = { x: 0, y: 0 };
    let eyeSize = 15; // Bigger eye
    let pupilSize = 8;
    
    let animationId: number;
    let startTime = Date.now();
    let direction = 1; // 1 for right, -1 for left
    
    const drawScale = (x: number, y: number, size: number, angle: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      
      // Scale shape - diamond with slight variation
      const randomVar = (Math.random() * scaleVariation) - (scaleVariation / 2);
      ctx.beginPath();
      ctx.moveTo(0, -size/2 + randomVar);
      ctx.lineTo(size/2 + randomVar, 0);
      ctx.lineTo(0, size/2 + randomVar);
      ctx.lineTo(-size/2 + randomVar, 0);
      ctx.closePath();
      
      // Fill with gradient for 3D effect
      const scaleGrad = ctx.createLinearGradient(-size/2, -size/2, size/2, size/2);
      scaleGrad.addColorStop(0, 'rgba(50, 50, 50, 0.9)');
      scaleGrad.addColorStop(0.3, 'rgba(200, 200, 200, 0.8)');
      scaleGrad.addColorStop(0.6, 'rgba(30, 30, 30, 0.85)');
      scaleGrad.addColorStop(1, 'rgba(10, 10, 10, 0.9)');
      
      ctx.fillStyle = scaleGrad;
      ctx.fill();
      
      // Add subtle highlight
      ctx.beginPath();
      ctx.moveTo(0, -size/3);
      ctx.lineTo(size/3, 0);
      ctx.lineTo(0, size/6);
      ctx.closePath();
      ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.fill();
      
      ctx.restore();
    };
    
    const drawSnakeEye = (x: number, y: number) => {
      // Eye outline
      ctx.beginPath();
      ctx.ellipse(x, y, eyeSize, eyeSize * 0.7, 0, 0, Math.PI * 2);
      const eyeGradient = ctx.createRadialGradient(x, y, 0, x, y, eyeSize);
      eyeGradient.addColorStop(0, 'rgba(40, 40, 40, 0.9)');
      eyeGradient.addColorStop(0.7, 'rgba(20, 20, 20, 0.9)');
      eyeGradient.addColorStop(1, 'rgba(0, 0, 0, 0.9)');
      ctx.fillStyle = eyeGradient;
      ctx.fill();
      
      // Pupil
      ctx.beginPath();
      ctx.ellipse(x + 2, y, pupilSize, pupilSize * 0.3, 0, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0, 0, 0, 0.95)';
      ctx.fill();
      
      // Eye highlight
      ctx.beginPath();
      ctx.ellipse(x - 3, y - 2, 3, 2, 0, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
      ctx.fill();
    };
    
    const draw = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Calculate elapsed time and progress
      const elapsed = Date.now() - startTime;
      let progress = (elapsed % period) / period;
      
      // Check if we need to change direction
      if (progress >= 0.5 && direction === 1) {
        direction = -1; // Change to left
      } else if (progress < 0.5 && direction === -1) {
        direction = 1; // Change to right
      }
      
      // Adjust progress based on direction
      let adjustedProgress = direction === 1 ? progress * 2 : (1 - (progress - 0.5) * 2);
      
      // Update points positions
      const leadingX = (window.innerWidth + 400) * adjustedProgress - 200;
      
      // Snake head position
      points[0].x = leadingX;
      points[0].y = window.innerHeight / 2 + Math.sin(adjustedProgress * Math.PI) * amplitude;
      
      // Update following segments with physics-based following
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
      
      // Calculate snake body path for scale placement
      const bodyPath: { x: number; y: number; angle: number }[] = [];
      
      // First, get head point and its angle
      const headAngle = Math.atan2(
        points[1].y - points[0].y,
        points[1].x - points[0].x
      ) + Math.PI; // Reverse angle for head
      
      bodyPath.push({
        x: points[0].x, 
        y: points[0].y,
        angle: headAngle
      });
      
      // Calculate angles and positions for the rest of the body
      for (let i = 1; i < segments - 1; i++) {
        const angle = Math.atan2(
          points[i+1].y - points[i-1].y,
          points[i+1].x - points[i-1].x
        );
        
        bodyPath.push({
          x: points[i].x,
          y: points[i].y,
          angle: angle
        });
      }
      
      // Last segment
      const tailAngle = Math.atan2(
        points[segments-1].y - points[segments-2].y,
        points[segments-1].x - points[segments-2].x
      );
      
      bodyPath.push({
        x: points[segments-1].x,
        y: points[segments-1].y,
        angle: tailAngle
      });
      
      // Draw snake body outline for depth
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      
      for (let i = 1; i < segments - 2; i++) {
        const xc = (points[i].x + points[i+1].x) / 2;
        const yc = (points[i].y + points[i+1].y) / 2;
        ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
      }
      
      ctx.quadraticCurveTo(
        points[segments-2].x, 
        points[segments-2].y, 
        points[segments-1].x, 
        points[segments-1].y
      );
      
      ctx.lineWidth = 35; // Thicker snake body
      ctx.strokeStyle = 'rgba(10, 10, 10, 0.5)';
      ctx.stroke();
      
      // Draw scales along the body
      for (let i = 0; i < bodyPath.length; i++) {
        const point = bodyPath[i];
        const width = i === 0 ? 28 : (i === bodyPath.length - 1 ? 14 : 26);
        
        // Draw perpendicular scales
        for (let offset = -width; offset <= width; offset += scaleSize * 0.8) {
          // Calculate position perpendicular to the snake's body
          const perpX = point.x + Math.cos(point.angle + Math.PI/2) * offset;
          const perpY = point.y + Math.sin(point.angle + Math.PI/2) * offset;
          
          // Skip scales for the head area (will draw custom head)
          if (i < 2 && Math.abs(offset) < width * 0.6) continue;
          
          // Vary scale size based on position
          const scaleSizeMod = scaleSize * (1 - Math.abs(offset) / (width * 1.2));
          
          // Draw scale
          if (scaleSizeMod > 0) {
            drawScale(perpX, perpY, scaleSizeMod, point.angle);
          }
        }
      }
      
      // Draw snake head
      const headPoint = bodyPath[0];
      
      // Update eye position
      eyePosition = {
        x: headPoint.x + Math.cos(headPoint.angle + Math.PI/5) * 15,
        y: headPoint.y + Math.sin(headPoint.angle + Math.PI/5) * 12
      };
      
      // Draw the eye
      drawSnakeEye(eyePosition.x, eyePosition.y);
      
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
      style={{ opacity: 0.7 }} // Adjusted opacity
    />
  );
};

export default Snake;
