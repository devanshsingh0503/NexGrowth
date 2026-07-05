'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function News() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const items = ref.current?.querySelectorAll('.anim-item');
    if (!items) return;
    gsap.fromTo([...items],
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 75%' } });
  }, []);

  return (
    <section ref={ref} className="home__news">
      <div className="container">
        <p className="section-label">AWARDS &amp; RECOGNITION</p>
        <h2 style={{ fontSize: 'min(3.5vw, 2.5rem)', fontWeight: 'bold', marginBottom: '3rem', marginTop: '1rem', fontFamily: 'GT-Planar, Inter, sans-serif' }}>Ranked Among the Best B2B Digital Agencies.</h2>
        <div className="home__news__articles__list">
          <div className="home__news__articles__list__item anim-item">
            <div className="home__news__articles__list__item__content">
              <h3>DesignRush Best Agencies 2026</h3>
              <p style={{ color: 'rgba(255,255,255,0.6)', marginTop: '0.5rem', fontSize: '0.95rem' }}>Recipient of the prestigious Best Agencies award badge, recognizing outstanding B2B custom web design and development services.</p>
            </div>
          </div>
          <div className="home__news__articles__list__item anim-item">
            <div className="home__news__articles__list__item__content">
              <h3>Top Web Application Developers 2026</h3>
              <p style={{ color: 'rgba(255,255,255,0.6)', marginTop: '0.5rem', fontSize: '0.95rem' }}>Ranked as a premier engineering agency for custom enterprise dashboards, SaaS software architecture, and integrations.</p>
            </div>
          </div>
          <div className="home__news__articles__list__item anim-item">
            <div className="home__news__articles__list__item__content">
              <h3>SEO Leadership Excellence</h3>
              <p style={{ color: 'rgba(255,255,255,0.6)', marginTop: '0.5rem', fontSize: '0.95rem' }}>Recognized for delivering high-impact organic marketing campaigns, technical site optimizations, and search visibility growth.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
