import type { Metadata } from 'next';
import Navbar            from '@/components/Navbar';
import Hero              from '@/components/Hero';
import About             from '@/components/About';
import Services          from '@/components/Services';
import UseCases          from '@/components/UseCases';
import Projects          from '@/components/Projects';
import Architecture      from '@/components/Architecture';
import Contact           from '@/components/Contact';
import Footer            from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import ScrollStory       from '@/components/ScrollStory';

export const metadata: Metadata = {
  title: 'NexGrowth | B2B Custom Website & Software Development Services',
  description: "At NexGrowth, we architect digital experiences that breathe life into your brand's most ambitious vision. Transforming pixels into possibilities.",
};

export default function Page() {
  return (
    <div className="home">
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <UseCases />
      <ScrollStory />
      <Projects />
      <Architecture />
      <Contact />
      <Footer />

      {/* Floating Book a Call Button (Mobile Only) */}
      <a
        href="#contact"
        className="mobile-floating-cta"
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 9999,
          background: 'linear-gradient(135deg, #ff77a8 0%, #ff5e97 100%)',
          color: '#161008',
          padding: '1.2rem 2rem',
          borderRadius: '9999px',
          boxShadow: '0 8px 32px rgba(255, 119, 168, 0.4)',
          textDecoration: 'none',
          fontFamily: 'GT-Planar, Inter, sans-serif',
          fontSize: '1.25rem',
          fontWeight: 700,
          display: 'none', // Overridden in globals.css media queries to flex
          alignItems: 'center',
          gap: '8px',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          border: '1px solid rgba(255, 255, 255, 0.2)',
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="#161008" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 2V6" stroke="#161008" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 2V6" stroke="#161008" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 10H21" stroke="#161008" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span>Book a Call</span>
      </a>
    </div>
  );
}
