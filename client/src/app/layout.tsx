import './globals.css';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import { CONFIG } from '@/config';

const openSans = Open_Sans({ subsets: ['latin'] });
export const metadata: Metadata = {
  title: CONFIG.title,
  description: CONFIG.description,
  openGraph: {
    title: `${CONFIG.title}/chating-list`,
    description: CONFIG.description,
    images: 'https://source.unsplash.com/random/300×300',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="kn">
      <body className={`${openSans.className} bg-bgGray`}>{children}</body>
    </html>
  );
}
