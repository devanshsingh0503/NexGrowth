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
    </div>
  );
}
