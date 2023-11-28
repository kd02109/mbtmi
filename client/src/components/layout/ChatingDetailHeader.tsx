'use client';
import { useRouter } from 'next/navigation';
import Profile from '@/components/Profile';
import Back from '@/components/svg/Back';

export default function ChatingDetailHeader({
  name,
  profile,
  number,
}: {
  name: string;
  profile: string;
  number: number;
}) {
  const router = useRouter();

  return (
    <header className="w-full p-4 flex ">
      <button className="mr-4" onClick={() => router.push(`/chating-list`)}>
        <Back />
      </button>
      <Profile name={name} profile={profile} number={number} />
    </header>
  );
}
