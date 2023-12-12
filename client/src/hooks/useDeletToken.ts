'use client';
import { useEffect } from 'react';
import useLocalStorage from '@/hooks/useLocalStorage';
export default function useDeletToken() {
  const [, saveToken] = useLocalStorage('token', null);
  const [, saveVisited] = useLocalStorage('isVisited', null);
  useEffect(() => {
    saveToken(null);
    saveVisited(null);
  }, [saveToken, saveVisited]);
}
