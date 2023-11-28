'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function useRedirect(
  token: string | null,
  visited?: null | { [key: string]: boolean },
) {
  // page 전환하기
  const router = useRouter();
  useEffect(() => {
    const id = setTimeout(() => {
      if (!token || !visited) {
        alert('기록된 정보가 제거되었습니다. 처음부터 다시 시작해주세요 😵‍💫');
        router.push('/');
      }
    }, 2000);

    return () => clearTimeout(id);
  }, [token, visited, router]);
}
