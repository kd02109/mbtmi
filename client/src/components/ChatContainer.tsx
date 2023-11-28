import Link from 'next/link';
import NewCircle from '@/components/NewCircle';
import Profile from '@/components/Profile';
import { DataManOrWoman } from '@/types/types';

export default function ChatContainer(prop: DataManOrWoman) {
  const {
    profile,
    name,
    questions,
    visited,
    answer,
    id,
    newMessage,
    nickname,
  } = prop;

  return (
    <Link
      href={{ pathname: `/chating-list/${id}`, query: { nickname: nickname } }}>
      <article className="w-full flex justify-between items-center mb-2 hover:bg-bgGray p-4">
        <Profile profile="#" name={name} message={questions} answer={answer} />
        {!visited && <NewCircle number={newMessage} />}
      </article>
    </Link>
  );
}
