/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useSearchParams } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { CONFIG } from '@/config';
import useRestart from '@/hooks/useRestart';

export default function ReStartBtn() {
  const [showButton, setShowButton] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const handleRestart = useRestart();
  const searchParams = useSearchParams();

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      // Scrolling down
      setShowButton(true);
    } else {
      // Scrolling up
      setShowButton(false);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      {showButton && searchParams.get(CONFIG.param.key) && (
        <button
          onClick={handleRestart}
          className="text-white text-center font-bold text-xl w-96 py-2 mt-4 bg-bgBrown rounded-3xl max-md:w-[80%] fixed bottom-10 rigth-[50%] left-[50%]  translate-x-[-50%]">
          나도 테스트 하러 가기
        </button>
      )}
    </>
  );
}
