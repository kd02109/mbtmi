'use client';
import { useEffect, useState } from 'react';

/**
 * @description 페이지 새로 고침을 통해 상태가 유지되도록 로컬 저장소에 동기화합니다.
 *
 * @param key 로컬 저장소에 저장될 키
 * @param initialValue 초기 값
 * @returns [storedValue, setValue] - 로컬 저장소에 저장된 값, 저장 함수
 */
function useLocalStorage<T>(key: string, initialValue: T) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);

      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      throw new Error('storage 작업 문제 처리에서 에러가 발생했습니다');
    }
  };
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (hasMounted) {
    return [storedValue, setValue] as const;
  }

  return [initialValue, setValue] as const;
}

export default useLocalStorage;
