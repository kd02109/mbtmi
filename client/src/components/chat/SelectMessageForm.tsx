import Image from 'next/image';
import Chat from '@/components/chat/Chat';
import ChatImage from '@/components/chat/ChatImage';
import SpeechBubble from '@/components/chat/SpeechBubble';
import SpeechBubbleImage from '@/components/chat/SpeechBubbleImage';
import { MessageOrDate } from '@/types/types';

type Prop = {
  item: MessageOrDate;
  nickname: string;
  profile: string;
};

export default function SelectMessageForm({ item, nickname, profile }: Prop) {
  if (item.type === 'message') {
    if (item.message && item.user === 'me') {
      return <Chat message={item.message} />;
    }
    if (item.message && item.user !== 'me') {
      return (
        <SpeechBubble
          profile={profile}
          name={item.user}
          message={item.message}
        />
      );
    }
    if (typeof item.messageFn === 'function' && item.user !== 'me') {
      const message = item.messageFn(nickname);
      return (
        <SpeechBubble profile={profile} name={item.user} message={message} />
      );
    }
    if (typeof item.messageFn === 'function' && item.user === 'me') {
      const message = item.messageFn(nickname);
      return <Chat message={message} />;
    }
    if (item.picture && item.user !== 'me') {
      return (
        //<Image src={item.picture} alt={'image'} width={100} height={100} />
        <SpeechBubbleImage src={item.picture} name={item.user} />
      );
    }
    if (item.picture && item.user === 'me') {
      return <ChatImage src={item.picture} />;
    }
  } else {
    return (
      <div className="self-center w-60 h-5 flex justify-center rounded-xl py-3 items-center bg-slate-400 text-white">
        {item.date}
      </div>
    );
  }
}
