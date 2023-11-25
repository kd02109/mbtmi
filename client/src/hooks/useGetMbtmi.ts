'use client';
import { useLocalStorage } from '@uidotdev/usehooks';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { postResult } from '@/api/clientApi';
import { PATH } from '@/config';
export default function useGetMbtmi() {
  const [mbtmi, setMbtmi] = useState<string | null>(null);
  const [token] = useLocalStorage<string | null>('token', null);
  const router = useRouter();

  useEffect(() => {
    if (token) {
      postResult(token)
        .then(data => {
          if (data) {
            setMbtmi(data?.mbtmi);
          }
        })
        .catch(() => {
          alert('결과를 불러오는 것에 실패했습니다.');
          router.push(PATH.chatingList);
        });
    }
  }, [token, router]);
  return mbtmi;
}
