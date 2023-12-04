'use client';
import { useState, useEffect } from 'react';
import { getUserNumber } from '@/api/clientApi';
export default function useGetNumber(): [boolean, number] {
  const [isLoading, setIsLoading] = useState(true);
  const [userNumber, setUserNumber] = useState(0);
  useEffect(() => {
    getUserNumber().then(data => {
      if (data) {
        setUserNumber(data);
      }
      setIsLoading(false);
    });
  }, []);
  return [isLoading, userNumber];
}
