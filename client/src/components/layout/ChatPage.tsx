'use client';

import { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { postAnswer } from '@/api/clientApi';
import Chat from '@/components/chat/Chat';
import SelectMessageForm from '@/components/chat/SelectMessageForm';
import ChatingDetailHeader from '@/components/layout/ChatingDetailHeader';
import Loading from '@/components/Loading';
import useGetOneAnswer from '@/hooks/useGetOneAnswer';
import useLocalStorage from '@/hooks/useLocalStorage';
import useSetVisited from '@/hooks/useSetVisited';
import { Id } from '@/types/types';

type Prop = {
  pageId: Id;
  isVisited: boolean;
};

export default function ChatPage({ pageId, isVisited }: Prop) {
  const [isLoading, question, userInfo] = useGetOneAnswer(pageId);
  const [token] = useLocalStorage<null | string>('token', null);
  const [message, setMessage] = useState('');
  const [answers, setAnswers] = useState<string[]>([]);
  const textRef = useRef<HTMLTextAreaElement>(null);
  const chatDivRef = useRef<HTMLTableSectionElement>(null);

  useSetVisited(isVisited, pageId);

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

  useEffect(
    function fillAnswers() {
      if (!isLoading && question) {
        setAnswers([...question.answer]);
      }
    },
    [isLoading, question],
  );

  useLayoutEffect(() => {
    if (chatDivRef.current) {
      chatDivRef.current.scrollTop = chatDivRef.current.scrollHeight;
    }
  }, [answers]);

  if (isLoading) return <Loading />;
  else {
    return (
      <section className="bg-bgChating flex w-full min-h-screen max-h-screen max-w-xl min-w-xl flex-col justify-between">
        <ChatingDetailHeader
          name={question.name}
          number={question.memberCount}
          profile={question.profile}
        />
        <section
          className="flex flex-col px-4 gap-2 max-h-[70vh] grow overflow-y-auto scroll-div"
          ref={chatDivRef}>
          {question.questions.map((item, index) => (
            <SelectMessageForm
              key={index}
              item={item}
              nickname={userInfo.nickname}
              profile={question.profile}
            />
          ))}
          {answers.length > 0
            ? answers.map((item, index) => <Chat key={index} message={item} />)
            : null}
        </section>
        <section className="relative w-full bg-white">
          <textarea
            value={message}
            onChange={e => {
              setMessage(e.target.value);
            }}
            rows={3}
            className="w-full pr-24 pl-4 py-2 focus:outline-none resize-none scroll-div bg-white"
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
