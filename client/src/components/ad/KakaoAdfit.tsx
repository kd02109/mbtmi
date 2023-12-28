'use client';
import React, { useLayoutEffect, useRef } from 'react';

function KakaoAdFit() {
  // 최초 1회만 광고를 불러오기 위한 변수
  const adRef = useRef<boolean>(false);

  useLayoutEffect(() => {
    // 로딩된 광고가 있으면, 추가 로딩 X
    if (adRef.current) {
      return;
    }

    const ins = document.createElement('ins');
    const script = document.createElement('script');

    ins.className = 'kakao_ad_area';
    ins.style.display = 'none;';

    ins.setAttribute('data-ad-width', '300');
    ins.setAttribute('data-ad-height', '250');
    ins.setAttribute('data-ad-unit', 'DAN-5gN56v0PT6fh9jWx');

    script.async = true;
    script.type = 'text/javascript';
    script.src = '//t1.daumcdn.net/kas/static/ba.min.js';

    document.querySelector('#aside__kakaoAdFit')?.appendChild(ins);
    document.querySelector('#aside__kakaoAdFit')?.appendChild(script);

    // 광고 로딩 여부 상태 변경
    adRef.current = true;
  }, []);
  return (
    <>
      <aside
        id="aside__kakaoAdFit"
        className="w-[100%] flex items-center justify-center"></aside>
    </>
  );
}

export default React.memo(KakaoAdFit);
