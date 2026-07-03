'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const els = ref.current?.querySelectorAll('.anim-in');
    if (!els) return;
    gsap.fromTo([...els],
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 80%' } });
  }, []);

  return (
    <section ref={ref} className="home__partners" id="testimonials" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
      <div className="container">
        <p className="anim-in section-label">TESTIMONIALS</p>
        <h2 className="anim-in" style={{ marginBottom: '3rem' }}>What Clients Say About Working With Us</h2>
        <div className="anim-in" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
          {[
            { quote: `"Their ability to hear what we had to say and act on it pretty quickly is very impressive. They were highly responsive throughout the process."`, name: 'Lindsay Dufresne', role: 'Director of Customer Success', company: 'Syntelli Solutions' },
            { quote: `"Responsive, cost-effective website designs that built trust with bilingual audiences. The engineering was top-tier."`, name: 'Mark Blackburn', role: 'Founder', company: 'Curated Health, Puerto Rico' },
            { quote: `"We had a vision for what we wanted and they were able to execute on it. Amazing. They were extremely reliable and great partners to work with."`, name: 'Emily Bartels', role: 'Product Lead', company: 'Tech Operations' },
          ].map((t, i) => (
            <div key={i} className="home__key-features__item" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', padding: '2.5rem 2rem', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '12px', transition: 'all 0.3s' }}>
              <p style={{ fontSize: '1.15rem', color: 'rgba(255, 255, 255, 0.85)', lineHeight: '1.6', fontStyle: 'italic', position: 'relative', marginBottom: '2rem' }}>
                {t.quote}
              </p>
              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: 'var(--current-color-40)' }}>{t.name}</h4>
                <span style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.5)', display: 'block', marginTop: '0.25rem' }}>{t.role} – {t.company}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
