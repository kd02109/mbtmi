import Chat from '@/components/chat/Chat';
import SpeechBubble from '@/components/chat/SpeechBubble';
import { MessageOrDate } from '@/types/types';

type Prop = {
  item: MessageOrDate;
  nickname: string;
  profile: string;
};

export default function SelectMessageForm({ item, nickname, profile }: Prop) {
  if (item.type === 'message') {
    if (item.message && item.user === 'me') {
      return <Chat message={item.message} time={item.time} />;
    }
    if (item.message && item.user !== 'me') {
      return (
        <SpeechBubble
          profile={profile}
          name={item.user}
          message={item.message}
          time={item.time}
        />
      );
    }
    if (typeof item.messageFn === 'function' && item.user !== 'me') {
      const message = item.messageFn(nickname);
      return (
        <SpeechBubble
          profile={profile}
          name={item.user}
          message={message}
          time={item.time}
        />
      );
    }
    if (typeof item.messageFn === 'function' && item.user === 'me') {
      const message = item.messageFn(nickname);
      return <Chat message={message} time={item.time} />;
    }
    if (item.picture && item.user !== 'me') {
      return (
        <SpeechBubble
          image={item.picture}
          name={item.user}
          time={item.time}
          profile={profile}
        />
      );
    }
    if (item.picture && item.user === 'me') {
      return <Chat image={item.picture} time={item.time} />;
    }
  } else {
    return (
      <div className="self-center w-60 h-5 flex justify-center rounded-xl py-3 items-center bg-slate-400 text-white">
        {item.date}
      </div>
    );
  }
}
