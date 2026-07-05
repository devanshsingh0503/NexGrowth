import type { Metadata } from 'next';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';
import { Space_Grotesk, PT_Serif } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const ptSerif = PT_Serif({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-pt-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://nexgrowth.com'),
  title: 'NexGrowth | B2B Custom Website & Software Development Services',
  description: 'At NexGrowth, we architect digital experiences that breathe life into your brand.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${ptSerif.variable}`}>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
        {gaId && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  );
}
