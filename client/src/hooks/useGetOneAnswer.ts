'use client';

import { useState, useEffect } from 'react';
import { getApiWhitToken } from '@/api/clientApi';
import { END_POINT } from '@/api/url';
import { QUESTIONS } from '@/data/question';
import useLocalStorage from '@/hooks/useLocalStorage';
import useRedirect from '@/hooks/useRedirect';
import { AnswerData, Data, Id, UserInfo } from '@/types/types';

export default function useGetOneAnswer(id: Id): [boolean, Data, UserInfo] {
  const [isLoading, setIsLoading] = useState(true);
  const [token] = useLocalStorage<null | string>('token', null);
  const [visited] = useLocalStorage<null | { [key: string]: boolean }>(
    'isVisited',
    null,
  );
  const [question, setQuestion] = useState<Data | null>(null);
  const [userInfo, setUserInfo] = useState<UserInfo>({
    gender: 'man',
    nickname: 'person',
  });

  useRedirect(token, visited);

  useEffect(() => {
    async function getData() {
      const data = await getApiWhitToken<AnswerData>(
        END_POINT.getAnswerVisiting,
        token!,
      );
      return data;
    }

    if (token && visited) {
      getData().then(data => {
        const question = QUESTIONS.find(question => question.id === id);
        if (question && data) {
          question.answer = [...data.answer[id]];
          setQuestion(question);
          setUserInfo(data.user);
          setIsLoading(false);
        }
      });
    }
  }, [token, visited, id]);

  return [isLoading, question!, userInfo];
}
