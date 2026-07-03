import { useEffect, type RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * useHeroScroll
 * ─────────────
 * Continuous cinematic scroll story animation:
 *  - Pins full viewport Hero section for 250vh (end: '+=250%').
 *  - Liquid top/bottom background shapes stretch, bend, compress, morph, slide, rotate, and scale continuously from start (0.0) to end (1.0).
 *  - Headline remains fully visible and readable during most of the animation.
 *  - Headline/subtext slow fade, scale down, upward slide, and blur only at the very end of scroll progress (0.75 -> 1.0).
 */
export function useHeroScroll(
  wrapperRef: RefObject<HTMLElement | null>,
  topShapeRef: RefObject<SVGSVGElement | null>,
  bottomShapeRef: RefObject<SVGSVGElement | null>,
  contentRef: RefObject<HTMLDivElement | null>,
) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const wrapper  = wrapperRef.current;
    const topShape = topShapeRef.current;
    const botShape = bottomShapeRef.current;
    const content  = contentRef.current;
    if (!wrapper || !topShape || !botShape || !content) return;

    const headline = content.querySelector('h1');
    const subtext  = content.querySelector('span');
    const button   = content.querySelector('.home__hero-button');

    // ── Setup Hardware Acceleration Layers ───────────────────────────
    gsap.set([topShape, botShape], { force3D: true, transformOrigin: 'center center' });
    if (headline) gsap.set(headline, { force3D: true, transformStyle: 'preserve-3d', backfaceVisibility: 'hidden' });
    if (subtext)  gsap.set(subtext,  { force3D: true, transformStyle: 'preserve-3d', backfaceVisibility: 'hidden' });
    if (button)   gsap.set(button,   { force3D: true, transformStyle: 'preserve-3d', backfaceVisibility: 'hidden' });

    // ScrollTrigger timeline with 120vh length for a snappy responsive experience
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapper,
        start: 'top top',
        end: '+=120%', // Snappier pinning
        pin: true,
        scrub: 0.3, // Ultra-responsive scroll tracking
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
      defaults: { ease: 'none' }
    });

    // ── STEP 1, 2 & 3: Background Liquid Morph (continuous from 0.0 to 1.0) ──
    // Translate top shape downward (translateY -15% -> 12%), scale up (1.02 -> 1.25), and rotate (0 -> 8deg)
    tl.to(topShape, {
      y: '27%', // slide down into frame
      scale: 1.25,
      rotation: 8,
      force3D: true,
    }, 0)
    // Translate bottom shape upward (translateY 15% -> -12%), scale up (1.02 -> 1.25), and rotate (0 -> -8deg)
    .to(botShape, {
      y: '-27%', // slide up into frame
      scale: 1.25,
      rotation: -8,
      force3D: true,
    }, 0);

    // Liquid Path Morphing (morph paths continuously from start to end)
    const topPaths = topShape.querySelectorAll('path');
    topPaths.forEach(path => {
      const endD = path.getAttribute('data-end');
      if (endD) {
        tl.to(path, { attr: { d: endD } }, 0);
      }
    });

    const botPaths = botShape.querySelectorAll('path');
    botPaths.forEach(path => {
      const endD = path.getAttribute('data-end');
      if (endD) {
        tl.to(path, { attr: { d: endD } }, 0);
      }
    });

    // ── STEP 4 & 5: Text slow fade, scale, slide, and blur (starts at 0.50) ──
    if (headline) {
      tl.to(headline, {
        opacity: 0,
        scale: 0.94,
        y: -70,
        filter: 'blur(5px)',
        force3D: true,
      }, 0.50);
    }

    if (subtext) {
      tl.to(subtext, {
        opacity: 0,
        scale: 0.96,
        y: -45,
        filter: 'blur(3px)',
        force3D: true,
      }, 0.55);
    }

    if (button) {
      tl.to(button, {
        opacity: 0,
        y: -30,
        force3D: true,
      }, 0.60);
    }

    // ── STEP 6: Fade out backgrounds for natural unpin transition (0.75 to 1.0) ──
    tl.to([topShape, botShape], {
      opacity: 0,
      scale: 0.88,
      duration: 0.25
    }, 0.75);

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, [wrapperRef, topShapeRef, bottomShapeRef, contentRef]);
}
