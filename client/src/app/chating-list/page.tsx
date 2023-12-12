'use client';

import ChatContainer from '@/components/ChatContainer';
import ChatingHeader from '@/components/layout/ChatingHeader';
import Loading from '@/components/Loading';
import SubmitBtn from '@/components/SubmitBtn';
import useGetTokenAndVisited from '@/hooks/useGetAnswer';

export default function ChatingList() {
  // 전체 정보 받아오기
  const [isLoading, question, userInfo, token] = useGetTokenAndVisited();

  //const isLoading = false;
  if (isLoading) return <Loading />;

  return (
    <>
      <ChatingHeader />
      <article className="w-full relative">
        <div>
          {question.map(item => (
            <ChatContainer key={item.id} {...item} {...userInfo} />
          ))}
          <SubmitBtn data={question} token={token} />
        </div>
      </article>
    </>
  );
}
