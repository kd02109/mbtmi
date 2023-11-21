import Link from 'next/link';
import NewCircle from '@/components/NewCircle';
import Profile from '@/components/Profile';
import { DataManOrWoman } from '@/types/types';

export default function ChatContainer(prop: DataManOrWoman) {
  const {
    profile,
    name,
    questionMan,
    questionWoman,
    visited,
    answer,
    id,
    sex,
  } = prop;

  const message = sex === 'man' ? questionMan : questionWoman;

  return (
    <Link href={`/chating-list/${id}`}>
      <article className="w-full flex justify-between items-center mb-2 hover:bg-bgGray p-4">
        <Profile profile="#" name={name} message={message} answer={answer} />
        {!visited && <NewCircle number={message.length} />}
      </article>
    </Link>
  );
}
