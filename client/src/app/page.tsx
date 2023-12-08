'use client';

import ChoiceSex from '@/components/ChoiceSex';
import Footer from '@/components/layout/Footer';
import Loading from '@/components/Loading';
import NumberCount from '@/components/NumberCount';
import Logo from '@/components/svg/Logo';
import { PATH } from '@/config';
import useGetNumber from '@/hooks/useGetNumber';
import useRedirectIfKeyExists from '@/hooks/usePageSwitch';

const NUMBER = 1000;
export default function Home() {
  const isLoading = useRedirectIfKeyExists(PATH.chatingList);
  const [isNumberLoading, userNumber] = useGetNumber();
  if (isLoading || isNumberLoading) return <Loading />;

  return (
    <main className="flex w-full min-h-screen max-w-xl m-auto flex-col items-center py-8 px-4 bg-bgYellow">
      <section className="w-100 flex flex-col mb-8">
        <span className="px-2 border-x-2 border-solid font-medium border-[#7F730C] text-[#7F730C]">
          AI 가 분석하는 나의 카톡 말투는?
        </span>
      </section>
      <h1 className="text-center font-black text-3xl leading-normal text-bgBrown mb-8">
        채팅에 직접 답변하는 <br /> 대화형 성격테스트에 참여해보세요!
      </h1>
      <Logo width="400" height="256" />

      <ChoiceSex />
      <Footer />
    </main>
  );
}
