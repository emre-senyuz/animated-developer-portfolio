import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Alex Morgan — Senior Frontend Developer',
  description: 'Thoughtful interfaces. Solid engineering. Explore the selected work and experience of fictional frontend developer Alex Morgan.',
  robots: { index: false, follow: false },
  openGraph: { title: 'Alex Morgan — Design-minded developer', description: 'A fictional portfolio exploring the intersection of design and code.', type: 'website' },
};

const themeScript = `(function(){try{var t=localStorage.getItem('theme');document.documentElement.dataset.theme=t==='light'||t==='dark'?t:matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'}catch(e){}})()`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head><body>{children}</body></html>;
}
