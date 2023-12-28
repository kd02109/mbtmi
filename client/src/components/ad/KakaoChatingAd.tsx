'use client';
import React, { useLayoutEffect, useRef } from 'react';

function KakaoChatingAd() {
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
    ins.setAttribute('data-ad-height', '50');
    ins.setAttribute('data-ad-unit', 'DAN-ztxfriXHcXatpwm0');

    script.async = true;
    script.type = 'text/javascript';
    script.src = '//t1.daumcdn.net/kas/static/ba.min.js';

    document.querySelector('#aside__kakaoAdFit__chating')?.appendChild(ins);
    document.querySelector('#aside__kakaoAdFit__chating')?.appendChild(script);
    // 광고 로딩 여부 상태 변경
    adRef.current = true;
  }, []);
  return (
    <>
      <aside id="aside__kakaoAdFit__chating" className="flex"></aside>
    </>
  );
}

export default React.memo(KakaoChatingAd);
