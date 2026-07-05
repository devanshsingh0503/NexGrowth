'use client';
import { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Use a small offscreen canvas for noise — only 256×256 pixels,
    // then CSS scales it up. This cuts pixel manipulation cost by ~99%.
    const noise = document.createElement('canvas');
    noise.width = 256;
    noise.height = 256;
    const nCtx = noise.getContext('2d')!;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    let frame = 0;
    let raf: number;

    // Pre-build noise once, refresh only every 6th frame (10fps noise)
    const buildNoise = () => {
      const imgData = nCtx.createImageData(256, 256);
      const d = imgData.data;
      for (let i = 0; i < d.length; i += 4) {
        const n = (Math.random() * 20) | 0;
        d[i] = d[i + 1] = d[i + 2] = n;
        d[i + 3] = 18; // very subtle alpha
      }
      nCtx.putImageData(imgData, 0, 0);
    };
    buildNoise();

    const draw = () => {
      frame++;
      const w = canvas.width;
      const h = canvas.height;

      // Only redraw gradient every 3 frames (20fps) — saves 66% of gradient work
      if (frame % 3 === 0) {
        const t = frame * 0.003;
        const grad = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, Math.max(w, h) * 0.8);
        grad.addColorStop(0, `hsla(${330 + Math.sin(t) * 20}, 60%, 8%, 1)`);
        grad.addColorStop(1, `hsla(${270 + Math.cos(t) * 15}, 40%, 3%, 1)`);
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);

        // Refresh noise every 6th frame (10fps)
        if (frame % 6 === 0) buildNoise();

        // Tile the tiny noise canvas across the screen — zero per-pixel loops
        const pat = ctx.createPattern(noise, 'repeat');
        if (pat) {
          ctx.fillStyle = pat;
          ctx.fillRect(0, 0, w, h);
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
      style={{ position: 'fixed', top: 0, left: 0, zIndex: -1, pointerEvents: 'none' }}
    />
  );
}

