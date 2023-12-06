'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import KakaoBtn from '@/components/KakaoBtn';
import ResultChatContainer from '@/components/ResultChatContainer';
import ResultList from '@/components/ResultList';
import ResultSection from '@/components/ResultSection';
import SpeechBuble from '@/components/svg/SpeechBuble';
import { ResultInfo } from '@/types/types';
import getKeys from '@/util/getKeys';

const variants = {
  open: { height: 'auto' },
  collapsed: { height: 0 },
};

export default function ResultBox(prop: ResultInfo) {
  const [isExpanded, setIsExpanded] = useState(false);
  const friendKey = getKeys(prop.friendName.example);
  const friendExample = friendKey.map(
    key => `${key}: ${prop.friendName.example[key]}`,
  );
  const friendList = [...prop.friendName.features, ...friendExample];

  return (
    <article
      className={`w-full bg-gradient-to-b from-white from-90% to-bgChating mt-4 rounded-t-xl flex flex-col p-3 justify-center items-center`}>
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

      {!isExpanded && <KakaoBtn {...prop} setIsExpanded={setIsExpanded} />}
      {isExpanded && (
        <button className="text-white text-center font-bold text-xl w-96 py-2 bg-bgBrown rounded-3xl">
          다시 테스트 하기
        </button>
      )}
    </article>
  );
}
