import Image from 'next/image';
import Link from 'next/link';
import NewCircle from '@/components/NewCircle';

type Prop = {
  profile: string;
  name: string;
  message: string[];
  visited: boolean;
  answer: string[];
};
export default function ChatContainer({
  profile,
  name,
  message,
  visited,
  answer,
}: Prop) {
  return (
    <Link href={'#'}>
      <article className="w-full flex justify-between items-center mb-4 hover:bg-bgGray p-4">
        <div className="flex">
          <Image
            src={`/images/profile.png`}
            alt={name}
            width={46}
            height={46}
            className="mr-2"
          />
          <div>
            <h3 className="font-bold">{name}</h3>
            <span className="text-sm text-gray-400">
              {answer.length === 0
                ? message[message.length - 1]
                : answer[answer.length - 1]}
            </span>
          </div>
        </div>
        {!visited && <NewCircle number={message.length} />}
      </article>
    </Link>
  );
}
