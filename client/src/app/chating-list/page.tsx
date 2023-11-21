'use client';

import ChatContainer from '@/components/ChatContainer';
import ChatingHeader from '@/components/layout/ChatingHeader';
import Loading from '@/components/Loading';
import SubmitBtn from '@/components/SubmitBtn';
import { QUESTIONS } from '@/data/question';
import useGetTokenAndVisited from '@/hooks/useGetAnswer';

export default function ChatingList() {
  // 전체 정보 받아오기
  //const [isLoading, question] = useGetTokenAndVisited();
  const isLoading = false;
  if (isLoading) return Loading;

  return (
    <>
      <ChatingHeader />
      <article className="w-full h-full">
        <section className="w-full h-full p-4 font-bold mb-2 border-solid border-2">
          광고 구역
        </section>
        {QUESTIONS.map(item => (
          <ChatContainer key={item.id} {...item} sex={'man'} />
        ))}
        <div className="flex justify-center">
          <SubmitBtn data={QUESTIONS} />
        </div>
      </article>
    </>
  );
}
