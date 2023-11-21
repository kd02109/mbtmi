import ChatPage from '@/components/chat/ChatPage';
import { QUESTIONS } from '@/data/question';
export default function ChatingPage({ params }: { params: { slug: string } }) {
  const question = QUESTIONS.find(item => item.id === params.slug)!;
  question.visited = true;
  console.log(question);
  return <ChatPage {...question} />;
}
