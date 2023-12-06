'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import useGetMbtmi from '@/hooks/useGetMbtmi';
import { MBTI_RESULT } from '@/result';
import { Mbti } from '@/types/types';
export default function LoadingPage() {
  const router = useRouter();
  const data = useGetMbtmi();
  useEffect(() => {
    if (data?.user.mbtmi) {
      const mbti = data.user.mbtmi.toLowerCase();
      router.push(`/${MBTI_RESULT[mbti as Mbti].path}`);
    }
  }, [data, router]);
  return <div>Loading</div>;
}
