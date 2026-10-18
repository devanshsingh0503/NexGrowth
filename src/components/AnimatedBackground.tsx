'use client';
import { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Small offscreen noise canvas for optimal performance
    const noise = document.createElement('canvas');
    noise.width = 128;
    noise.height = 128;
    const nCtx = noise.getContext('2d');
    if (!nCtx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    let frame = 0;
    let raf: number;

    const buildNoise = () => {
      const imgData = nCtx.createImageData(128, 128);
      const d = imgData.data;
      for (let i = 0; i < d.length; i += 4) {
        const n = (Math.random() * 255) | 0;
        d[i] = d[i + 1] = d[i + 2] = n;
        d[i + 3] = 7; // very subtle alpha (~0.03)
      }
      nCtx.putImageData(imgData, 0, 0);
    };
    buildNoise();

    const draw = () => {
      frame++;
      // Refresh noise pattern every 8 frames (low CPU footprint)
      if (frame % 8 === 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        buildNoise();
        const pat = ctx.createPattern(noise, 'repeat');
        if (pat) {
          ctx.fillStyle = pat;
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
      }
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
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 50,
        pointerEvents: 'none',
        opacity: 0.6,
      }}
    />
  );
}
