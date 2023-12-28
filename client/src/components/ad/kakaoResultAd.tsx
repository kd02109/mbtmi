'use client';
import React, { useLayoutEffect, useRef } from 'react';
function KakaoResultAd() {
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
    ins.classList.add(...['shrink', 'grow-0', 'h-10']);

    ins.setAttribute('data-ad-width', '320');
    ins.setAttribute('data-ad-height', '100');
    ins.setAttribute('data-ad-unit', 'DAN-FGnggFmuRX6SzfeW');

    script.async = true;
    script.type = 'text/javascript';
    script.src = '//t1.daumcdn.net/kas/static/ba.min.js';

    document.querySelector('#aside__kakaoAdFit__result')?.appendChild(ins);
    document.querySelector('#aside__kakaoAdFit__result')?.appendChild(script);
    // 광고 로딩 여부 상태 변경
    adRef.current = true;
  }, []);
  return (
    <>
      <aside id="aside__kakaoAdFit__result" className="flex"></aside>
    </>
  );
}
export default React.memo(KakaoResultAd);
