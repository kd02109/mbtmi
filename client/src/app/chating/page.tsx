import ChatContainer from '@/components/ChatContainer';
import { questions } from '@/data/question';

export default function SlugPage() {
  // 전체 정보 받아오기
  return (
    <article className="w-full h-full">
      {questions.map(item => (
        <ChatContainer key={item.id} message={item.questionMan} {...item} />
      ))}
    </article>
  );
}
