'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import useLocalStorage from '@/hooks/useLocalStorage';
const useRedirectIfKeyExists = (redirectTo: string) => {
  const [token] = useLocalStorage('token', null);
  const isLoading = token ? true : false;
  const router = useRouter();

  useEffect(() => {
    if (token) {
      router.replace(redirectTo);
    }
  }, [token, redirectTo, router]);

  return isLoading;
};

export default useRedirectIfKeyExists;
