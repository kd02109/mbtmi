'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import ResultChatContainer from '@/components/result/ResultChatContainer';
import ResultList from '@/components/result/ResultList';
import ResultSection from '@/components/result/ResultSection';
import ShariApi from '@/components/share/ShariApi';
import SpeechBuble from '@/components/svg/SpeechBuble';
import { CONFIG } from '@/config';
import useLocalStorage from '@/hooks/useLocalStorage';
import { ResultInfo } from '@/types/types';
import getKeys from '@/util/getKeys';

const variants = {
  open: { height: 'auto' },
  collapsed: { height: 0 },
};

export default function ResultBox(prop: ResultInfo) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [, saveVisited] = useLocalStorage('isVisited', null);
  const [, saveToken] = useLocalStorage('token', null);

  // data 정제
  const friendKey = getKeys(prop.friendName.example);
  const friendExample = friendKey.map(
    key => `${key}: ${prop.friendName.example[key]}`,
  );
  const friendList = [...prop.friendName.features, ...friendExample];

  const router = useRouter();
  const searchParams = useSearchParams();

  const handleRestart = () => {
    saveVisited(null);
    saveToken(null);
    router.push('/');
  };

  useEffect(() => {
    if (searchParams.get(CONFIG.param.key)) setIsExpanded(true);
  }, [searchParams]);

  return (
    <article
      className={`w-full  mt-4 rounded-t-2xl flex flex-col p-3 justify-center items-center ${
        isExpanded
          ? 'bg-gradient-to-b from-white from-90% to-bgChating'
          : 'bg-bgChating'
      }`}>
      <ResultSection title={`"${prop.name}"`}>
        <ResultList sentences={prop.basicFeatures} />
      </ResultSection>
      {isExpanded && (
        <AnimatePresence>
          <motion.div
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={variants}
            transition={{ duration: 1.5 }}
            style={{ overflow: 'hidden' }}>
            <ResultSection title={prop.reading.title}>
              <SpeechBuble
                message={`${(prop.reading.ratio * 100).toFixed(0)}%`}
              />
            </ResultSection>

            <ResultSection title={prop.friendName.title}>
              <ResultList sentences={friendList} />
            </ResultSection>

            <ResultSection title={prop.myMbtiChat.title}>
              {prop.myMbtiChat.message.map(chat => (
                <ResultChatContainer key={chat} chat={chat} />
              ))}
            </ResultSection>

            <ResultSection title={prop.oppositeMbtiChat.title}>
              {prop.oppositeMbtiChat.message.map(chat => (
                <ResultChatContainer key={chat} chat={chat} />
              ))}
            </ResultSection>
          </motion.div>
        </AnimatePresence>
      )}
      <ShariApi
        setIsExpanded={setIsExpanded}
        isExpended={isExpanded}
        {...prop}
      />
      <button
        onClick={handleRestart}
        className="text-white text-center font-bold text-xl w-96 py-2 mt-4 bg-bgBrown rounded-3xl max-md:w-[90%]">
        다시 테스트 하기
      </button>
    </article>
  );
}
