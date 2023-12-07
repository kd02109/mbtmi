'use client';
import { useEffect } from 'react';

export default function KaKaoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (window.Kakao) {
      const { Kakao } = window;
      if (!Kakao.isInitialized()) {
        Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
      }
    }
  }, []);

  return <>{children}</>;
}
