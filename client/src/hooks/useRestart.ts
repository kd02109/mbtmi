'use client';
import { useRouter } from 'next/navigation';
import useLocalStorage from '@/hooks/useLocalStorage';

export default function useRestart() {
  const [, saveToken] = useLocalStorage('token', null);
  const [, saveVisited] = useLocalStorage('isVisited', null);

  const router = useRouter();

  const handleRestart = () => {
    saveToken(null);
    saveVisited(null);
    router.push('/');
  };
  return handleRestart;
}
