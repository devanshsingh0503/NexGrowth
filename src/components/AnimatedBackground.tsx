'use client';
import { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    let frame = 0;
    let raf: number;
    const draw = () => {
      frame++;
      const w = canvas.width;
      const h = canvas.height;
      const grad = ctx.createRadialGradient(w/2, h/2, 0, w/2, h/2, Math.max(w, h) * 0.8);
      const t = frame * 0.005;
      grad.addColorStop(0, `hsla(${330 + Math.sin(t) * 20}, 60%, 8%, 1)`);
      grad.addColorStop(1, `hsla(${270 + Math.cos(t) * 15}, 40%, 3%, 1)`);
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      // subtle noise
      const imageData = ctx.getImageData(0, 0, w, h);
      const d = imageData.data;
      for (let i = 0; i < d.length; i += 4) {
        const noise = (Math.random() - 0.5) * 8;
        d[i]   += noise;
        d[i+1] += noise;
        d[i+2] += noise;
      }
      ctx.putImageData(imageData, 0, 0);

      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="home__hero-canvas"
      style={{ position: 'fixed', top: 0, left: 0, zIndex: -1, pointerEvents: 'none' }}
    />
  );
}
