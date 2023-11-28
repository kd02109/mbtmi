'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import useGetMbtmi from '@/hooks/useGetMbtmi';
export default function LoadingPage() {
  const router = useRouter();
  const data = useGetMbtmi();
  useEffect(() => {
    if (data?.user.mbtmi) {
      router.push(`/${data?.user.mbtmi}`);
    }
  }, [data, router]);
  return <div>Loading</div>;
}
