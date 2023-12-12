'use client';
import { useRouter } from 'next/navigation';
import Profile from '@/components/Profile';
import Back from '@/components/svg/Back';
import Habmeger from '@/components/svg/Habmeger';
import Magnifier from '@/components/svg/Magnifier';

export default function ChatingDetailHeader({
  name,
  profile,
  number,
  back,
}: {
  name: string;
  profile: string | string[];
  number: number;
  back?: boolean;
}) {
  const router = useRouter();

  return (
    <header className="w-full p-2 sticky top-0 flex z-10 bg-bgChating min-w-40 justify-between items-center">
      <div className="flex">
        {back === undefined && (
          <button className="mr-4" onClick={() => router.push(`/chating-list`)}>
            <Back />
          </button>
        )}
        <Profile
          name={name}
          profile={profile}
          number={number}
          nickname={name}
        />
      </div>
      <div className="h-full flex gap-2 items-center px-2">
        <Habmeger width={'20'} height={'20'} style="mr-2" />
        <Magnifier width={'20'} height={'20'} />
      </div>
    </header>
  );
}
