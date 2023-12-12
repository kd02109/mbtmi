'use client';

import Image from 'next/image';
import LoadingText from '@/components/LoadingText';
import WavyText from '@/components/result/WavyText';
import Logo from '@/components/svg/Logo';

export default function Loading() {
  return (
    <main className="flex w-full min-h-screen max-w-xl mx-auto flex-col items-center justify-center bg-bgYellow">
      <Image
        src={'/images/loading.gif'}
        width={300}
        height={300}
        alt="loading"
      />
      <LoadingText />
    </main>
  );
}
