import ChatContainer from '@/components/ChatContainer';
import ChatingHeader from '@/components/layout/ChatingHeader';
import SubmitBtn from '@/components/SubmitBtn';
import { questions } from '@/data/question';

export default function SlugPage() {
  // 전체 정보 받아오기
  return (
    <>
      <ChatingHeader />
      <article className="w-full h-full">
        <section className="w-full h-full p-4 font-bold mb-2 border-solid border-2">
          광고 구역
        </section>
        {questions.map(item => (
          <ChatContainer key={item.id} {...item} sex={'man'} />
        ))}
        <div className="flex justify-center">
          <SubmitBtn data={questions} />
        </div>
      </article>
    </>
  );
}
