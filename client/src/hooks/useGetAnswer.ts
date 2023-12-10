'use client';

import { useState, useEffect } from 'react';
import { getApiWhitToken } from '@/api/clientApi';
import { END_POINT } from '@/api/url';
import { QUESTIONS_MAN, QUESTIONS_WOMAN } from '@/data/question';
import useLocalStorage from '@/hooks/useLocalStorage';
import useRedirect from '@/hooks/useRedirect';
import { AnswerData, Data, UserInfo } from '@/types/types';
export default function useGetTokenAndVisited(): [
  boolean,
  Data[],
  UserInfo,
  string,
] {
  const [isLoading, setIsLoading] = useState(true);
  const [token] = useLocalStorage<null | string>('token', null);
  const [visited] = useLocalStorage<null | { [key: string]: boolean }>(
    'isVisited',
    null,
  );
  const [questions, setQuestion] = useState<Data[]>([]);
  const [userInfo, setUserInfo] = useState<UserInfo>({
    gender: 'man',
    nickname: 'person',
  });

  useRedirect(token, visited);
  useEffect(() => {
    if (token) {
      getApiWhitToken<AnswerData>(END_POINT.getAnswerVisiting, token!).then(
        data => {
          const QUESTIONS =
            data?.user.gender === 'man' ? QUESTIONS_MAN : QUESTIONS_WOMAN;
          const questions = QUESTIONS.map(question => {
            question.visited = visited ? visited[question.id] : false;
            const answers = data?.answer[question.id];
            question.answer = [...answers!];
            if (data?.user.gender) {
              setUserInfo(data.user);
            }
            return question;
          });

          questions.sort((a, b) => {
            return a.visited === b.visited ? 0 : a.visited ? 1 : -1;
          });

          setQuestion(questions);
          setIsLoading(false);
        },
      );
    }
  }, [token, visited]);

  return [isLoading, questions, userInfo, token!];
}
