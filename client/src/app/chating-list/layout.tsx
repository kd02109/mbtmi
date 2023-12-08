import type { Metadata } from 'next';
import { CONFIG } from '@/config';
export const metadata: Metadata = {
  title: `${CONFIG.title}/chating-list`,
  description: CONFIG.description,
  openGraph: {
    title: `${CONFIG.title}/chating-list`,
    description: CONFIG.description,
    images: CONFIG.logoImage,
  },
};

export default function SlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex w-full min-h-screen max-w-xl mx-auto flex-col items-center  bg-white">
      {children}
    </main>
  );
}
