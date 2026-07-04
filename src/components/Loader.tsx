'use client';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function Loader() {
  const containerRef = useRef<HTMLDivElement>(null);
  const panel2Ref = useRef<HTMLDivElement>(null);
  const panel3Ref = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  const brandName = "NEXGROWTH";

  useEffect(() => {
    // Lock scroll
    document.body.style.overflow = 'hidden';

    // Query all individual letter spans
    const letters = logoRef.current?.querySelectorAll('.loader-letter');

    // 1. Initial State Setups
    if (letters) {
      gsap.set(letters, { y: 60, opacity: 0 });
    }
    gsap.set([progressLineRef.current, counterRef.current], { opacity: 0, y: 15 });

    // Create main timeline
    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = '';
        window.isLoaderComplete = true;
        window.dispatchEvent(new CustomEvent('loader-complete'));
      }
    });

    // 2. Animate brand letters in (staggered)
    if (letters) {
      tl.to(letters, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.05,
        ease: 'power3.out'
      });
    }

    // 3. Fade in progress bar & counter
    tl.to([progressLineRef.current, counterRef.current], {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power3.out'
    }, '-=0.4');

    // 4. Animate counter values and active progress line
    const progressObj = { val: 0 };
    tl.to(progressObj, {
      val: 100,
      duration: 2.0,
      ease: 'power2.out',
      onUpdate: () => {
        const currentVal = Math.floor(progressObj.val);
        setProgress(currentVal);
      }
    }, '-=0.2');

    // 5. Entrance transition out (Staggered parallax layers)
    // First fade out center UI elements
    tl.to([logoRef.current, progressLineRef.current, counterRef.current], {
      opacity: 0,
      y: -20,
      duration: 0.5,
      ease: 'power2.in'
    }, '+=0.2');

    // Slide up back panel (dark chocolate)
    tl.to(panel3Ref.current, {
      yPercent: -100,
      duration: 1.1,
      ease: 'power4.inOut'
    }, '-=0.3');

    // Slide up middle panel (NexGrowth Pink)
    tl.to(panel2Ref.current, {
      yPercent: -100,
      duration: 1.1,
      ease: 'power4.inOut'
    }, '-=0.95');

    // Slide up main front container (obsidian)
    tl.to(containerRef.current, {
      yPercent: -100,
      duration: 1.1,
      ease: 'power4.inOut'
    }, '-=0.95');

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <>
      {/* Background layer 3 (Dark Chocolate) */}
      <div
        ref={panel3Ref}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          background: '#211512',
          zIndex: 99997,
        }}
      />

      {/* Background layer 2 (NexGrowth Pink) */}
      <div
        ref={panel2Ref}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          background: '#ff77c9',
          zIndex: 99998,
        }}
      />

      {/* Front Container (Obsidian Brown) */}
      <div
        ref={containerRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          background: '#161008',
          zIndex: 99999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: '2.5rem',
        }}
      >
        {/* Typographic Brand Logo */}
        <div
          ref={logoRef}
          style={{
            display: 'flex',
            overflow: 'hidden',
            padding: '10px 0',
          }}
        >
          {brandName.split('').map((char, index) => (
            <span
              key={index}
              className="loader-letter"
              style={{
                fontFamily: 'GT-Planar, Inter, sans-serif',
                fontSize: 'clamp(2rem, 6vw, 4.5rem)',
                fontWeight: 800,
                color: '#fff',
                letterSpacing: '0.15em',
                display: 'inline-block',
                textShadow: '0 0 20px rgba(255, 255, 255, 0.1)',
              }}
            >
              {char}
            </span>
          ))}
        </div>

        {/* Glowing Progress Line */}
        <div
          ref={progressLineRef}
          style={{
            width: '240px',
            height: '2px',
            background: 'rgba(255, 255, 255, 0.07)',
            borderRadius: '99px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              height: '100%',
              width: `${progress}%`,
              background: 'linear-gradient(to right, #ff77c9, #ffb4e1)',
              borderRadius: '99px',
              boxShadow: '0 0 10px rgba(255, 119, 201, 0.8)',
            }}
          />
        </div>

        {/* Counter Percentage */}
        <div
          ref={counterRef}
          style={{
            fontFamily: 'GT-Planar, Inter, monospace',
            fontSize: '1.25rem',
            fontWeight: 500,
            color: 'rgba(255, 255, 255, 0.5)',
            letterSpacing: '0.12em',
          }}
        >
          <span>{String(progress).padStart(3, '0')}</span>
        </div>
      </div>
    </>
  );
}

// Extend global window object typings
declare global {
  interface Window {
    isLoaderComplete?: boolean;
  }
}
