'use client';

import WavyText from '@/components/result/WavyText';
import Logo from '@/components/svg/Logo';

export default function Loading() {
  return (
    <main className="flex w-full min-h-screen max-w-xl mx-auto flex-col items-center justify-center bg-bgYellow">
      <Logo width="30%" height="30%" style="mb-8" />
      <WavyText text="LOADING..." />
    </main>
  );
}
