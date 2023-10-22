import Chat from '@/components/chat/Chat';
import ChatPage from '@/components/chat/ChatPage';
import SpeechBubble from '@/components/chat/SpeechBubble';
import ChatingDetailHeader from '@/components/layout/ChatingDetailHeader';
import { questions } from '@/data/question';
export default function ChatingPage({ params }: { params: { slug: string } }) {
  const question = questions.find(item => item.id === params.slug)!;
  console.log(question);
  return <ChatPage {...question} />;
}
