'use client';

import { useState, useRef, useEffect } from 'react';
import useLocalStorage from '@/hooks/useLocalStorage';
import { Id } from '@/types/types';

export default function useSetVisited(isVisited: boolean, pageId: Id) {
  const [, saveVisiting] = useLocalStorage<null | { [key: string]: boolean }>(
    'isVisited',
    null,
  );
  const [isVisiting, setIsVisitng] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => {
      setIsVisitng(true);
    }, 500);
    if (isVisiting) {
      saveVisiting(prev => {
        return { ...prev, [pageId]: isVisited };
      });
    }

    return () => {
      clearTimeout(id);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisiting]);
}
