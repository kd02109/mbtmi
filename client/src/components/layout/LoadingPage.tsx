'use client';

import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useGetMbtmi from '@/hooks/useGetMbtmi';
export default function LoadingPage() {
  const router = useRouter();
  const mbtmi = useGetMbtmi();
  useEffect(() => {
    if (mbtmi) {
      router.push(`/${mbtmi}`);
    }
  }, [mbtmi, router]);
  return <div>Loading</div>;
}
