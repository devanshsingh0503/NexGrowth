import type { Metadata } from 'next';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';
import { Space_Grotesk, PT_Serif, Oswald, Inter } from 'next/font/google';
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

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-oswald',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://nexgrowth.in'),
  title: 'NexGrowth | B2B Custom Website & Software Development Services',
  description: 'At NexGrowth, we architect digital experiences that breathe life into your brand.',
  verification: {
    google: 'google2646f726e83f6e4d',
  },
  icons: {
    icon: [
      { url: '/icon.png', sizes: '1024x1024', type: 'image/png' },
    ],
    apple: [
      { url: '/icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${ptSerif.variable} ${oswald.variable} ${inter.variable}`}>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
        {gaId && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  );
}
