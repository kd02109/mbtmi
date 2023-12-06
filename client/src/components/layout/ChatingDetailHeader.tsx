'use client';
import { useRouter } from 'next/navigation';
import { forwardRef } from 'react';
import Profile from '@/components/Profile';
import Back from '@/components/svg/Back';
import Habmeger from '@/components/svg/Habmeger';
import Magnifier from '@/components/svg/Magnifier';

export default forwardRef(function ChatingDetailHeader(
  {
    name,
    profile,
    number,
    back,
  }: {
    name: string;
    profile: string;
    number: number;
    back?: boolean;
  },
  forwardRef: React.ForwardedRef<HTMLDivElement>,
) {
  const router = useRouter();

  return (
    <header
      ref={forwardRef}
      className="w-full p-2 sticky top-0 flex z-10 bg-bgChating min-w-40 justify-between items-center">
      <div className="flex">
        {back === undefined && (
          <button className="mr-4" onClick={() => router.push(`/chating-list`)}>
            <Back />
          </button>
        )}
        <Profile name={name} profile={profile} number={number} />
      </div>
      <div className="h-full flex gap-2 items-center px-2">
        <Habmeger width={'30'} height={'30'} style="mr-2" />
        <Magnifier width={'30'} height={'30'} />
      </div>
    </header>
  );
});
