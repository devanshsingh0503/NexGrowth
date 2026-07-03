'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Architecture() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const els = ref.current?.querySelectorAll('.anim-in');
    if (!els) return;
    gsap.fromTo([...els],
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 70%' } });
  }, []);

  return (
    <section ref={ref} className="home__architecture" style={{ paddingTop: '6rem', paddingBottom: '6rem', background: '#161008' }}>
      <div className="container">
        <h2 className="anim-in" style={{ marginBottom: '1.5rem' }}>NexGrowth by the Numbers</h2>
        <p className="anim-in" style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '600px', marginBottom: '3.5rem' }}>A track record of engineering scalable platforms, custom software, and conversions that drive B2B growth globally.</p>
        
        <div className="anim-in" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', textAlign: 'center' }}>
          {[
            { label: 'Projects delivered', value: '8+' },
            { label: 'Client satisfaction', value: '100%' },
            { label: 'Industries served', value: '5' },
            { label: 'Avg. load time', value: '<2s' },
          ].map((stat, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ fontSize: 'min(6vw, 4.5rem)', fontWeight: 'bold', color: 'var(--current-color-40)', lineHeight: '1.1', fontFamily: 'GT-Planar, Inter, sans-serif' }}>
                {stat.value}
              </div>
              <span style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.6)', marginTop: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
