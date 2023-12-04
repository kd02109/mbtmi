'use client';
import { useRouter } from 'next/navigation';
import { forwardRef } from 'react';
import Profile from '@/components/Profile';
import Back from '@/components/svg/Back';

export default forwardRef(function ChatingDetailHeader(
  {
    name,
    profile,
    number,
  }: {
    name: string;
    profile: string;
    number: number;
  },
  forwardRef: React.ForwardedRef<HTMLDivElement>,
) {
  const router = useRouter();

  return (
    <header
      ref={forwardRef}
      className="w-full p-2 sticky top-0 flex z-10 bg-bgChating min-w-40">
      <button className="mr-4" onClick={() => router.push(`/chating-list`)}>
        <Back />
      </button>
      <Profile name={name} profile={profile} number={number} />
    </header>
  );
});
