'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { getApiWhitToken } from '@/api/clientApi';
import { END_POINT } from '@/api/url';
import { QUESTIONS_MAN, QUESTIONS_WOMAN } from '@/data/question';
import useLocalStorage from '@/hooks/useLocalStorage';
import useRedirect from '@/hooks/useRedirect';
import { AnswerData, Data, Id, UserInfo } from '@/types/types';

export default function useGetOneAnswer(id: Id): [boolean, Data, UserInfo] {
  const [isLoading, setIsLoading] = useState(true);
  const [token, saveToken] = useLocalStorage<null | string>('token', null);
  const [visited, saveVisited] = useLocalStorage<null | {
    [key: string]: boolean;
  }>('isVisited', null);
  const [question, setQuestion] = useState<Data | null>(null);
  const [userInfo, setUserInfo] = useState<UserInfo>({
    gender: 'man',
    nickname: 'person',
  });

  useRedirect(token, visited);
  const router = useRouter();

  useEffect(() => {
    async function getData() {
      const data = await getApiWhitToken<AnswerData>(
        END_POINT.getAnswerVisiting,
        token!,
      );
      return data;
    }

    if (token) {
      getData()
        .then(data => {
          const QUESTIONS =
            data?.user.gender === 'man' ? QUESTIONS_MAN : QUESTIONS_WOMAN;
          const question = QUESTIONS.find(question => question.id === id);
          if (question && data) {
            question.answer = [...data.answer[id]];
            setQuestion(question);
            setUserInfo(data.user);
            setIsLoading(false);
          }
        })
        .catch(() => {
          saveToken(null);
          saveVisited(null);
          alert('예상치 못한 오류가 발생했습니다 메인화면으로 이동합니다.');
          router.push('/');
        });
    }
  }, [token, visited, id, saveToken, saveVisited, router]);

  return [isLoading, question!, userInfo];
}
