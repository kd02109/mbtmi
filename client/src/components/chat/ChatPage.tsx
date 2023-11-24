'use client';

import { useState, useRef, useEffect } from 'react';
import { postAnswer } from '@/api/clientApi';
import Chat from '@/components/chat/Chat';
import SelectMessageForm from '@/components/chat/SelectMessageForm';
import ChatingDetailHeader from '@/components/layout/ChatingDetailHeader';
import Loading from '@/components/Loading';
import useGetOneAnswer from '@/hooks/useGetOneAnswer';
import useLocalStorage from '@/hooks/useLocalStorage';
import { Id } from '@/types/types';

type Prop = {
  pageId: Id;
  isVisited: boolean;
};

export default function ChatPage({ pageId, isVisited }: Prop) {
  const [isLoading, question, userInfo] = useGetOneAnswer(pageId);

  const [isVisiting, setIsVisitng] = useState(false);
  const [, saveVisiting] = useLocalStorage<null | {
    [key: string]: boolean;
  }>('isVisited', null);
  const [token] = useLocalStorage<null | string>('token', null);

  const [message, setMessage] = useState('');
  const [answers, setAnswers] = useState<string[]>([]);
  const textRef = useRef<HTMLTextAreaElement>(null);

  const handleSendMessage = async () => {
    setAnswers(prev => [...prev, message]);
    if (token) await postAnswer(message, question.id, token);
    setMessage('');
    if (textRef.current) textRef.current.focus();
  };

  useEffect(() => {
    if (textRef.current) {
      textRef.current.focus();
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsVisitng(true);
    }, 500);
    if (isVisiting) {
      saveVisiting(prev => {
        return { ...prev, [pageId]: isVisited };
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisiting]);

  useEffect(() => {
    if (isLoading && question) {
      console.log(question);
      setAnswers(question.answer);
    }
  }, [isLoading, question]);

  if (isLoading) return <Loading />;
  else {
    return (
      <section className="bg-bgChating flex w-full h-full min-h-screen max-w-xl m-auto flex-col justify-between">
        <ChatingDetailHeader
          name={question.name}
          number={question.memberCount}
          profile={question.profile}
        />
        <section className="flex flex-col px-4 my-4 gap-4 grow max-h-[500PX] max-md:max-h-96 overflow-y-auto ">
          {question.questions.map((item, index) => (
            <SelectMessageForm
              key={index}
              item={item}
              nickname={userInfo.nickname}
              profile={question.profile}
            />
          ))}
          {answers.length > 0
            ? answers.map((item, index) => (
                <Chat key={index} message={item} time={'time'} />
              ))
            : null}
        </section>
        <section className="relative w-full h-full">
          <textarea
            value={message}
            onChange={e => {
              setMessage(e.target.value);
            }}
            rows={4}
            className="w-full pr-20 pl-4 py-2 focus:outline-none resize-none bg-white"
            autoFocus
            ref={textRef}
          />
          <button
            disabled={message.length < 1 ? true : false}
            className={`absolute bottom-4 right-6 border-2 border-solid px-4 py-2 rounded-lg border-yellow-400 bg-yellow-400 font-bold text-black ${
              message.trim().length < 1 &&
              'text-gray-300 border-gray-300 bg-white'
            }`}
            onClick={handleSendMessage}>
            전송
          </button>
        </section>
      </section>
    );
  }
}
