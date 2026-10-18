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

    // 5. Entrance transition out (Staggered parallax curtain wipes)
    // First fade out center UI elements
    tl.to([logoRef.current, progressLineRef.current, counterRef.current], {
      opacity: 0,
      y: -20,
      duration: 0.5,
      ease: 'power2.in'
    }, '+=0.2');

    // Slide up front container (Panel 1: #171916) revealing Panel 2 (#e5ff3d)
    tl.to(containerRef.current, {
      yPercent: -100,
      duration: 1.0,
      ease: 'power4.inOut'
    }, '-=0.1');

    // Slide up middle panel (Panel 2: #e5ff3d electric lime wipe) revealing Panel 3 (#f4f2ea)
    tl.to(panel2Ref.current, {
      yPercent: -100,
      duration: 1.0,
      ease: 'power4.inOut'
    }, '-=0.8');

    // Slide up back panel (Panel 3: #f4f2ea cream wipe that reveals the hero!)
    tl.to(panel3Ref.current, {
      yPercent: -100,
      duration: 1.0,
      ease: 'power4.inOut'
    }, '-=0.8');

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <>
      {/* Background layer 3 (Panel 3: Warm Cream #f4f2ea wipe that reveals hero) */}
      <div
        ref={panel3Ref}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          background: '#f4f2ea',
          zIndex: 99997,
        }}
      />

      {/* Background layer 2 (Panel 2: Electric Lime #e5ff3d wipe) */}
      <div
        ref={panel2Ref}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          background: '#e5ff3d',
          zIndex: 99998,
        }}
      />

      {/* Front Container (Panel 1: Near Black #171916) */}
      <div
        ref={containerRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          background: '#171916',
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
                fontFamily: 'var(--font-oswald), Oswald, sans-serif',
                fontSize: 'clamp(2.5rem, 6.5vw, 5rem)',
                fontWeight: 700,
                color: '#f4f2ea',
                letterSpacing: '0.12em',
                display: 'inline-block',
                textShadow: '0 0 30px rgba(244, 242, 234, 0.15)',
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
            background: 'rgba(244, 242, 234, 0.12)',
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
              background: '#e5ff3d',
              borderRadius: '99px',
              boxShadow: '0 0 12px rgba(229, 255, 61, 0.7)',
            }}
          />
        </div>

        {/* Counter Percentage */}
        <div
          ref={counterRef}
          style={{
            fontFamily: 'var(--font-inter), Inter, monospace',
            fontSize: '1.25rem',
            fontWeight: 500,
            color: 'rgba(244, 242, 234, 0.65)',
            letterSpacing: '0.12em',
          }}
        >
          <span>{String(progress).padStart(3, '0')}</span>
          <span style={{ color: '#e5ff3d', marginLeft: '2px' }}>%</span>
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
