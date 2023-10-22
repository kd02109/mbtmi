'use client';
import { useState } from 'react';
import Chat from '@/components/chat/Chat';
import SpeechBubble from '@/components/chat/SpeechBubble';
import ChatingDetailHeader from '@/components/layout/ChatingDetailHeader';
import { Data } from '@/types/types';

export default function ChatPage(prop: Data) {
  const { name, profile, questionMan, questionWoman } = prop;
  const [message, setMessage] = useState('');
  const [answer, setAnswer] = useState<string[]>([]);
  return (
    <section className="bg-bgChating flex w-full h-full min-h-screen max-w-xl m-auto flex-col justify-between">
      <ChatingDetailHeader name={name} number={2} profile={profile} />
      <section className="flex flex-col px-4 my-4 gap-4 grow max-h-96 overflow-y-auto ">
        {questionMan.map(item => (
          <SpeechBubble
            profile={profile}
            name={name}
            message={item}
            key={item}
          />
        ))}
        {answer.length > 0
          ? answer.map((item, index) => <Chat key={index} message={item} />)
          : null}
      </section>
      <section className="relative w-full h-full">
        <textarea
          value={message}
          onChange={e => {
            setMessage(e.target.value);
          }}
          cols={30}
          rows={5}
          className="w-full pr-20 pl-4 py-2 focus:outline-none resize-none"
          autoFocus
        />
        <button
          disabled={message.length < 1 ? true : false}
          className={`absolute bottom-4 right-4 border-2 border-solid px-4 py-2 rounded-lg border-yellow-400 bg-yellow-400 font-bold ${
            message.length < 1 && 'text-gray-300 border-gray-300 bg-white'
          }`}
          onClick={() => {
            answer.push(message);
            setMessage('');
          }}>
          전송
        </button>
      </section>
    </section>
  );
}
