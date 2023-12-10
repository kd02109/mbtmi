'use client';

import { useRouter } from 'next/navigation';
import useLocalStorage from '@/hooks/useLocalStorage';

export default function useRestart() {
  const [, saveVisited] = useLocalStorage('isVisited', null);
  const [, saveToken] = useLocalStorage('token', null);
  const router = useRouter();

  const handleRestart = () => {
    saveVisited(null);
    saveToken(null);
    router.push('/');
  };
  return handleRestart;
}
