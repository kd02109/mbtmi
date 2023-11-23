import ChatPage from '@/components/chat/ChatPage';
import { Id } from '@/types/types';
export default function ChatingPage({ params }: { params: { slug: Id } }) {
  const id = params.slug;
  const visited = true;
  return <ChatPage pageId={id} isVisited={visited} />;
}
