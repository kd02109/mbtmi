'use client';
import { useRouter } from 'next/navigation';

export default function useRestart() {
  const router = useRouter();

  const handleRestart = () => {
    router.push('/');
  };
  return handleRestart;
}
