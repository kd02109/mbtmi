'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Loading from '@/components/Loading';
import useGetMbtmi from '@/hooks/useGetMbtmi';
import { MBTI_RESULT } from '@/result';
import { Mbti } from '@/types/types';
export default function LoadingPage() {
  const router = useRouter();
  const data = useGetMbtmi();
  console.log(data?.user);
  useEffect(() => {
    const id = setTimeout(() => {
      if (data?.user.mbtmi) {
        const mbti = data.user.mbtmi.toLowerCase();
        router.push(`/${MBTI_RESULT[mbti as Mbti].path}`);
      }
    }, 2000);
    return () => clearTimeout(id);
  }, [data, router]);
  return <Loading />;
}
