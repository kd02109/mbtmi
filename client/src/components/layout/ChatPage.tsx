'use client';

import { useState, useRef, useEffect } from 'react';
import { postAnswer } from '@/api/clientApi';
import KakaoChatingAd from '@/components/ad/KakaoChatingAd';
import Chat from '@/components/chat/Chat';
import SelectMessageForm from '@/components/chat/SelectMessageForm';
import ChatingDetailHeader from '@/components/layout/ChatingDetailHeader';
import Loading from '@/components/Loading';
import useGetOneAnswer from '@/hooks/useGetOneAnswer';
import useLocalStorage from '@/hooks/useLocalStorage';
import useResize from '@/hooks/useResize';
import useSetVisited from '@/hooks/useSetVisited';
import { Id } from '@/types/types';

type Prop = {
  pageId: Id;
  isVisited: boolean;
};

export default function ChatPage({ pageId, isVisited }: Prop) {
  const [isLoading, question, userInfo] = useGetOneAnswer(pageId);
  const [token] = useLocalStorage<null | string>('token', null);
  const [answers, setAnswers] = useState<string[]>([]);
  const textRef = useRef<HTMLTextAreaElement>(null);
  const chatDivRef = useResize(answers);
  const sectionRef = useRef<HTMLTableSectionElement>(null);

  const handleSendMessage = async () => {
    if (textRef.current?.value) {
      const inputValue = textRef.current?.value;
      setAnswers(prev => [...prev, inputValue]);
      if (token) await postAnswer(textRef.current.value, question.id, token);

      textRef.current.value = '';
      textRef.current.focus();
    }
  };
  useSetVisited(isVisited, pageId);

  useEffect(
    function fillAnswers() {
      if (!isLoading && question) {
        setAnswers([...question.answer]);
      }
    },
    [isLoading, question],
  );

  if (isLoading) return <Loading />;
  else {
    return (
      <section
        className="bg-bgChating flex w-full min-h-screen max-h-screen max-w-xl min-w-xl flex-col justify-between"
        ref={sectionRef}>
        <ChatingDetailHeader
          name={question.name}
          number={question.memberCount}
          profile={question.profile}
        />
        <KakaoChatingAd />
        <section
          className="flex flex-col px-4 gap-2 my-4 max-h-[80vh] grow overflow-y-auto scroll-div"
          ref={chatDivRef}>
          {question.questions.map((item, index) => (
            <SelectMessageForm
              key={index}
              item={item}
              nickname={userInfo.nickname}
              profile={item.profile}
            />
          ))}
          {answers.length > 0
            ? answers.map((item, index) => <Chat key={index} message={item} />)
            : null}
        </section>
        <section className="relative w-full bg-white mt-2">
          <textarea
            rows={3}
            className="w-full pr-24 pl-4 py-2 focus:outline-none resize-none scroll-div bg-white"
            placeholder={`(${question.description})`}
            ref={textRef}
          />
          <button
            className={`absolute bottom-4 right-6 border-2 border-solid px-4 py-2 rounded-lg border-yellow-400 bg-yellow-400 font-bold text-black `}
            onClick={handleSendMessage}>
            전송
          </button>
        </section>
      </section>
    );
  }
}
