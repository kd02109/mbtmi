'use client';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { getApiWhitToken } from '@/api/clientApi';
import { END_POINT } from '@/api/url';
import { QUESTIONS } from '@/data/question';
import useLocalStorage from '@/hooks/useLocalStorage';
import { AnswerData, Data, UserInfo } from '@/types/types';
export default function useGetTokenAndVisited(): [
  boolean,
  Data[],
  UserInfo,
  string,
] {
  const [isLoading, setIsLoading] = useState(true);
  const [token, saveToken] = useLocalStorage<null | string>('token', null);
  const [visited, saveVisited] = useLocalStorage<null | {
    [key: string]: boolean;
  }>('isVisited', null);
  const [questions, setQuestion] = useState<Data[]>([]);
  const [userInfo, setUserInfo] = useState<UserInfo>({
    gender: 'man',
    nickname: 'person',
  });
  const router = useRouter();

  useEffect(() => {
    if (token && visited) {
      getApiWhitToken<AnswerData>(END_POINT.getAnswerVisiting, token!)
        .then(data => {
          const questions = QUESTIONS.map(question => {
            question.visited = visited[question.id];
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
        })
        .catch(() => {
          alert('유저정보를 불러오는 것에 실패했습니다..');
          saveToken(null);
          saveVisited(null);
          router.push('/');
        });
    }
  }, [token, visited, router]);

  return [isLoading, questions, userInfo, token!];
}
