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
    <main className="flex w-full min-h-screen max-w-xl m-auto flex-col items-center py-8 px-4 bg-white">
      <Logo width="30%" height="30%" style="mb-8" />
      <section className="w-100 flex flex-col mb-8">
        <p className="text-center font-bold text-base leading-8">
          대화에 참여하고 자유롭게 답해주세요! <br></br>
          당신의 MBTI를 확인해보세요! <br></br>
          현재 <NumberCount number={NUMBER + userNumber} />
          명이 참여했어요!
        </p>
      </section>
      <ChoiceSex />
      <Footer />
    </main>
  );
}
