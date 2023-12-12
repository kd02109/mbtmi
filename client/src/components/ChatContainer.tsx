import Link from 'next/link';
import NewCircle from '@/components/chat/NewCircle';
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
    <Link href={{ pathname: `/chating-list/${id}` }}>
      <article className="w-full max-h-20 flex justify-between items-center mb-2 hover:bg-bgGray p-2">
        <Profile
          profile={profile}
          name={name}
          message={questions}
          answer={answer}
          nickname={nickname}
        />
        {!visited && <NewCircle number={newMessage} />}
      </article>
    </Link>
  );
}
