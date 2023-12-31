'use client';

import { usePathname } from 'next/navigation';
import { Dispatch, SetStateAction, useEffect } from 'react';
import ShareBtn from '@/components/share/ShareBtn';
import Kakao from '@/components/svg/Kakao';
import { CONFIG } from '@/config';
import { ResultInfo } from '@/types/types';

export default function KakaoBtn(
  prop: ResultInfo & {
    setIsExpanded: Dispatch<SetStateAction<boolean>>;
    isExpended: boolean;
    token: string;
  },
) {
  const path = usePathname();

  const handleSendMessage = () => {
    const kakao = window.Kakao;
    if (!kakao) {
      alert('잠시후 다시 시도해주세요! 카카오와 연결중입니당');
    }
    prop.setIsExpanded(true);
    if (!kakao.isInitialized()) {
      kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
    }
    kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: `${CONFIG.title} | ${prop.name}`,
        description: `${prop.basicFeatures.join(' ')}`,
        imageUrl: prop.shareUrl,
        link: {
          mobileWebUrl: `${CONFIG.gabia}`,
          webUrl: `${CONFIG.gabia}`,
        },
      },
      buttons: [
        {
          title: '웹으로 보기',
          link: {
            mobileWebUrl: `${CONFIG.gabia}${path}?${CONFIG.param.query}&token=${prop.token}`,
            webUrl: `${CONFIG.gabia}${path}?${CONFIG.param.query}&token=${prop.token}`,
          },
        },
      ],
    });
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <ShareBtn onClick={handleSendMessage} title="카카오">
      <Kakao width="30" height="30" />
    </ShareBtn>
  );
}
