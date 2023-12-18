'use client';

import { useSearchParams } from 'next/navigation';
import { FormEvent, useState } from 'react';
import { patchMbti } from '@/api/clientApi';
import ResultRadio from '@/components/result/ResultRadio';
import ResultSection from '@/components/result/ResultSection';

export default function RealMbti() {
  const searchParam = useSearchParams();
  const [isClick, setIsClieck] = useState(false);
  const token = searchParam.get('token');
  const share = searchParam.get('share');
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.target as any;
    const IE = target.IE.value;
    const SN = target.SN.value;
    const TF = target.TF.value;
    const JP = target.JP.value;
    if (!IE || !SN || !TF || !JP) alert('4가지 요소를 모두 선택해주세요');
    else {
      setIsClieck(true);
      if (token) {
        const { done } = await patchMbti(token, `${IE + SN + TF + JP}`);
        setTimeout(() => {
          if (!done)
            alert(
              '결과를 처리하는 과정에서 문제가 발생했습니다. 다시 시도해주세🥲',
            );
          setIsClieck(false);
        }, 2000);
      }
    }
  };
  return (
    <>
      {!share && (
        <ResultSection title="당신의 실제 MBTI는 무엇인가요?">
          <span className="mb-4 text-lg max-md:w-[80%] text-center">
            답변해주신 내용은 서비스 개선에 많은 도움이 됩니다! :D
          </span>
          <form
            onSubmit={handleSubmit}
            className="border-2 border-bgBrown border-solid p-2 w-[60%] flex flex-col justify-center items-center rounded-3xl">
            <ResultRadio name="IE" />
            <ResultRadio name="SN" />
            <ResultRadio name="TF" />
            <ResultRadio name="JP" />
            <button
              className="bg-bgBrown text-white px-4 p-2 mt-2 rounded-3xl font-bold"
              disabled={isClick}>
              {isClick ? '감사합니다!' : '실제 MBTI 전달하기'}
            </button>
          </form>
        </ResultSection>
      )}
    </>
  );
}
