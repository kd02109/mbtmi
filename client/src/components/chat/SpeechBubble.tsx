import Image from 'next/image';
import { $ } from '@/util/core';

export default function SpeechBubble({
  profile,
  message,
  name,
}: {
  profile: string;
  message: string;
  name: string;
}) {
  return (
    <div className="chat chat-start">
      <div className="chat-image avater">
        <div className="w-10 rounded-lg">
          <Image
            src={`/images/profile.png`}
            alt={name}
            width={46}
            height={46}
          />
        </div>
      </div>
      <div className="chat-header text-black">{name}</div>
      <div className="chat-bubble bg-white text-black">{message}</div>
    </div>
  );
}
