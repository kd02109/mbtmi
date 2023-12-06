import Image from 'next/image';
import Person from '@/components/svg/Person';
import { MessageOrDate } from '@/types/types';

type Prop = {
  name: string;
  profile: string;
  answer?: string[];
  message?: MessageOrDate[];
  number?: number;
};

export default function Profile({
  name,
  profile,
  answer,
  message,
  number,
}: Prop) {
  let lastValue: MessageOrDate | undefined = message
    ? message[message.length - 1]
    : undefined;
  let lastMessage: string = '';

  if (lastValue && lastValue.type === 'message') {
    if (lastValue.message) {
      lastMessage = lastValue.message;
    } else if (typeof lastValue.messageFn === 'function') {
      lastMessage = lastValue.messageFn(name);
    } else lastMessage = '(사진)';
  } else lastMessage = '';

  return (
    <div className="flex items-center">
      <Image
        src={`/images/profile.png`}
        alt={name}
        width={46}
        height={46}
        className="mr-2"
      />
      <div>
        <h3 className="font-bold text-lg text-black text-center">{name}</h3>
        {answer && answer.length > 0 && (
          <span className="text-sm text-gray-400 truncate">
            {answer[answer.length - 1].length > 20
              ? `${answer[answer.length - 1].slice(0, 20)}...`
              : answer[answer.length - 1]}
          </span>
        )}
        {answer && answer.length < 1 && (
          <span className="text-sm text-gray-400 truncate">
            {lastMessage.length > 20
              ? `${lastMessage.slice(0, 20)}...`
              : lastMessage}
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
