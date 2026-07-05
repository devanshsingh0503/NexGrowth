'use client';
import dynamic from 'next/dynamic';

// All heavy components lazy-loaded inside a 'use client' boundary.
// ssr: false is valid here and prevents these from being included in the SSR bundle,
// dramatically reducing initial JS parse + execution time (fixes TBT).
const Loader             = dynamic(() => import('@/components/Loader'),             { ssr: false });
const AnimatedBackground = dynamic(() => import('@/components/AnimatedBackground'), { ssr: false });
const Services           = dynamic(() => import('@/components/Services'),           { ssr: false });
const UseCases           = dynamic(() => import('@/components/UseCases'),           { ssr: false });
const ScrollStory        = dynamic(() => import('@/components/ScrollStory'),        { ssr: false });
const Projects           = dynamic(() => import('@/components/Projects'),           { ssr: false });
const Architecture       = dynamic(() => import('@/components/Architecture'),       { ssr: false });
const Testimonials       = dynamic(() => import('@/components/Testimonials'),       { ssr: false });
const Contact            = dynamic(() => import('@/components/Contact'),            { ssr: false });

export default function ClientSections() {
  return (
    <>
      {/* Loader & canvas background start immediately but don't block FCP */}
      <Loader />
      <AnimatedBackground />
      {/* Below-fold sections load after main thread is free */}
      <Services />
      <UseCases />
      <ScrollStory />
      <Projects />
      <Architecture />
      <Testimonials />
      <Contact />
    </>
  );
}
