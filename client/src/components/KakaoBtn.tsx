'use client';

import { usePathname } from 'next/navigation';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { CONFIG } from '@/config';
import { ResultInfo } from '@/types/types';

export default function KakaoBtn(
  prop: ResultInfo & {
    setIsExpanded: Dispatch<SetStateAction<boolean>>;
    isExpended: boolean;
  },
) {
  const pathName = usePathname();

  useEffect(() => {
    if (window.Kakao) {
      const { Kakao } = window;
      if (!Kakao.isInitialized()) {
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
            mobileWebUrl: `${CONFIG.site}${pathName}`,
            webUrl: `${CONFIG.site}${pathName}`,
          },
        },
        callback: function () {
          prop.setIsExpanded(true);
        },
        buttons: [
          {
            title: '테스트 결과 보러가기',
            link: {
              webUrl: `${CONFIG.site}${pathName}`,
              mobileWebUrl: `${CONFIG.site}${pathName}`,
            },
          },
        ],
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathName, prop.setIsExpanded, prop.name, prop.basicFeatures, prop]);
  return (
    <button
      id="kakao-link-btn"
      className="text-white text-center font-bold text-xl w-96 py-2 bg-bgBrown rounded-3xl max-md:w-[90%]">
      {prop.isExpended ? '카카오톡 공유하기' : '결과 공유하고 더 보기'}
    </button>
  );
}
