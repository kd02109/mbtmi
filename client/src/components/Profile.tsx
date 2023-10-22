import Image from 'next/image';
import Person from '@/components/svg/Person';

type Prop = {
  name: string;
  profile: string;
  answer?: string[];
  message?: string[];
  number?: number;
};

export default function Profile({
  name,
  profile,
  answer,
  message,
  number,
}: Prop) {
  return (
    <div className="flex">
      <Image
        src={`/images/profile.png`}
        alt={name}
        width={46}
        height={46}
        className="mr-2"
      />
      <div>
        <h3 className="font-bold text-xl text-black">{name}</h3>
        {message && answer && (
          <span className="text-sm text-gray-400">
            {answer.length === 0
              ? message[message.length - 1]
              : answer[answer.length - 1]}
          </span>
        )}
        {number && (
          <div className="flex items-center">
            <Person />
            <span className="ml-1 text-sm text-gray-500">{number}</span>
          </div>
        )}
      </div>
    </div>
  );
}
