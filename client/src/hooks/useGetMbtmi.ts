'use client';
import { useState, useEffect } from 'react';
import { postResult } from '@/api/clientApi';
import useLocalStorage from '@/hooks/useLocalStorage';
import useRedirect from '@/hooks/useRedirect';
import { MbtmiResult } from '@/types/types';

export default function useGetMbtmi(): [MbtmiResult | null, string | null] {
  const [mbtmi, setMbtmi] = useState<MbtmiResult | null>(null);
  const [token] = useLocalStorage<string | null>('token', null);

  useRedirect(token);

  useEffect(() => {
    let ignore = false;
    if (token) {
      postResult(token).then(data => {
        if (data && !ignore) {
          setMbtmi(data);
        }
      });
    }
    return () => {
      ignore = true;
    };
  }, [token]);

  return [mbtmi, token];
}
