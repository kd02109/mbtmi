'use client';

import NumberCount from '@/components/chat/NumberCount';
import ChoiceSex from '@/components/ChoiceSex';
import Footer from '@/components/layout/Footer';
import Loading from '@/components/Loading';
import Logo from '@/components/svg/Logo';
import { PATH } from '@/config';
import useRedirectIfKeyExists from '@/hooks/usePageSwitch';

export default function Home({ userNumber }: { userNumber: number }) {
  const isLoading = useRedirectIfKeyExists(PATH.chatingList);
  if (isLoading) return <Loading />;

  return (
    <main className="flex w-full min-h-screen max-w-xl m-auto flex-col items-center py-8 px-4 bg-bgYellow">
      <section className="w-100 flex flex-col mb-2 text-center">
        <span className="px-2 border-x-2 border-solid font-bold border-[#bcb77ffe] text-[#7F730C]">
          AI 가 분석하는 나의 카톡 말투는?
        </span>
        <span className="px-2 border-x-2 border-solid font-bold border-[#bcb77ffe] text-[#7F730C]">
          현재 까지 참여한 유저 수는 <NumberCount number={userNumber} />명
          입니다.
        </span>
      </section>
      <h1 className="text-center font-black text-2xl leading-normal text-bgBrown mb-8">
        채팅에 직접 답변하는 <br /> 대화형 성격테스트에 참여해보세요! <br />
      </h1>
      <Logo width="70%" height="70%" />
      <ChoiceSex />
      <Footer />
    </main>
  );
}
