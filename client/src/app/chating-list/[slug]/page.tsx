import ChatPage from '@/components/chat/ChatPage';
import { questions } from '@/data/question';
export default function ChatingPage({ params }: { params: { slug: string } }) {
  const question = questions.find(item => item.id === params.slug)!;
  console.log(question);
  return <ChatPage {...question} />;
}
