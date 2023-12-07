'use client';

import { usePathname } from 'next/navigation';
import { Dispatch, SetStateAction } from 'react';
import ShareBtn from '@/components/share/ShareBtn';
import Kakao from '@/components/svg/Kakao';
import { CONFIG } from '@/config';
import { ResultInfo } from '@/types/types';

export default function KakaoBtn(
  prop: ResultInfo & {
    setIsExpanded: Dispatch<SetStateAction<boolean>>;
    isExpended: boolean;
  },
) {
  const pathName = usePathname();

  const handleSendMessage = () => {
    const kakao = window.Kakao;
    console.log(kakao);
    prop.setIsExpanded(true);
    if (!kakao.isInitialized()) {
      kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
    }
    kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: `${CONFIG.title} | ${prop.name}`,
        description: `${prop.basicFeatures.join(' ')}`,
        imageUrl: 'https://source.unsplash.com/random/300×300',
        link: {
          mobileWebUrl: `${CONFIG.site}${pathName}`,
          webUrl: `${CONFIG.site}${pathName}`,
        },
      },
    });
  };

  return (
    <ShareBtn onClick={handleSendMessage} title="카카오">
      <Kakao width="30" height="30" />
    </ShareBtn>
  );
}
