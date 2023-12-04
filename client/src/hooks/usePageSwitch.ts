'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import useLocalStorage from '@/hooks/useLocalStorage';
const useRedirectIfKeyExists = (redirectTo: string) => {
  const [token] = useLocalStorage('token', null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (token) router.replace(redirectTo);
  }, [token, redirectTo, router]);

  useEffect(() => {
    if (!token) setIsLoading(false);
    else if (token) router.replace(redirectTo);
  }, [token, redirectTo, router]);

  return isLoading;
};

export default useRedirectIfKeyExists;
