'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroShapes from './HeroShapes';
import HeroContent from './HeroContent';
import { useHeroScroll } from '@/hooks/useHeroScroll';

export default function Hero() {
  const wrapperRef     = useRef<HTMLElement>(null);
  const topShapeRef    = useRef<SVGSVGElement>(null);
  const bottomShapeRef = useRef<SVGSVGElement>(null);
  const contentRef     = useRef<HTMLDivElement>(null);

  // ── Entry animation ───────────────────────────────────────────────
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const content = contentRef.current;
    if (!content) return;

    const words = content.querySelectorAll('.hero-word');
    const subtext = content.querySelector('.hero-support');
    const button = content.querySelector('.home__hero-button');

    if (words.length === 0) return;

    // Set initial premium states
    gsap.set(words, { 
      y: 50, 
      opacity: 0, 
      rotateX: -45, 
      transformOrigin: 'top center',
      transformStyle: 'preserve-3d',
    });
    if (subtext) {
      gsap.set(subtext, { y: 20, opacity: 0, filter: 'blur(8px)' });
    }
    if (button) {
      gsap.set(button, { y: 30, opacity: 0, scale: 0.9 });
    }

    const tl = gsap.timeline({ delay: 0.2 });

    tl.to(words, {
      y: 0,
      opacity: 1,
      rotateX: 0,
      duration: 1.1,
      stagger: 0.04,
      ease: 'power4.out',
    });

    if (subtext) {
      tl.to(subtext, {
        y: 0,
        opacity: 1,
        filter: 'blur(0px)',
        duration: 0.8,
        ease: 'power3.out',
      }, '-=0.5');
    }

    if (button) {
      tl.to(button, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'back.out(1.6)',
      }, '-=0.6');
    }
  }, []);

  // ── Scroll-pinned shape animation ─────────────────────────────────
  useHeroScroll(wrapperRef, topShapeRef, bottomShapeRef, contentRef);

  return (
    <section
      ref={wrapperRef}
      id="home__hero"
      className="home__hero"
      style={{
        position: 'relative',
        height: '100vh',
        width: '100%',
        overflow: 'hidden',
        background: '#211512',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage:
          'radial-gradient(ellipse 70% 55% at 50% 50%, rgba(255,119,201,0.07) 0%, transparent 70%)',
      }}
    >
      <HeroShapes topRef={topShapeRef} bottomRef={bottomShapeRef} />
      <HeroContent contentRef={contentRef} />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', bottom: 0, left: 0,
          width: '100%', height: '18%',
          background: 'linear-gradient(to bottom, transparent, var(--black))',
          zIndex: 20, pointerEvents: 'none',
        }}
      />
    </section>
  );
}
