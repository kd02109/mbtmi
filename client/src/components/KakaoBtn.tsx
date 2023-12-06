'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { SERVER_URL } from '@/api/url';
import { CONFIG } from '@/config';
import { ResultInfo } from '@/types/types';

declare global {
  interface Window {
    Kakao: any;
  }
}

export default function KakaoBtn(prop: ResultInfo) {
  const pathName = usePathname();

  useEffect(() => {
    if (window) {
      const { Kakao } = window;
      if (!Kakao.isInitialized()) {
        // SDK 초기화 부분, 본인의 API KEY 입력
        Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
      }

      Kakao.Link.createDefaultButton({
        // #kakao-link-btn id를 가진 요소에 공유 버튼을 생성하도록 함
        container: '#kakao-link-btn',
        objectType: 'feed',
        content: {
          title: `${CONFIG.title} | ${prop.name}`,
          description: `${prop.basicFeatures.join(' ')}`,
          imageUrl: 'https://source.unsplash.com/random/300×300',
          link: {
            mobileWebUrl: `${SERVER_URL}${pathName}`,
            webUrl: `${SERVER_URL}${pathName}`,
          },
        },
        buttons: [
          {
            title: '테스트 결과 보러가기',
            link: {
              webUrl: `${SERVER_URL}${pathName}`,
              mobileWebUrl: `${SERVER_URL}${pathName}`,
            },
          },
        ],
      });
    }
  }, [pathName, prop.name, prop.basicFeatures]);
  return <button id="kakao-link-btn">공유하기 </button>;
}
