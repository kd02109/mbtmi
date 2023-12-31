'use client';
import { useState, useEffect } from 'react';
import { getApiWhitToken } from '@/api/clientApi';
import { END_POINT } from '@/api/url';
import { QUESTIONS_MAN, QUESTIONS_WOMAN } from '@/data/question';
import { AnswerData, Data } from '@/types/types';

export default function useGetResultPageAnswer(
  token: string,
): [boolean, Data[] | null] {
  const [questions, setQuestion] = useState<Data[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let ignore = false;
    getApiWhitToken<AnswerData>(END_POINT.getAnswerVisiting, token!)
      .then(data => {
        if (data) {
          if (!ignore) {
            const QUESTIONS =
              data?.user.gender === 'man' ? QUESTIONS_MAN : QUESTIONS_WOMAN;

            const questions = QUESTIONS.map(question => {
              const answers = data?.answer[question.id];
              question.answer = [...answers!];

              return question;
            });

            setQuestion(questions);
            setIsLoading(false);
          }
        }
      })
      .catch(() => {
        throw new Error('데이터를 불러오는 과정에서 문제가 발생했습니다.');
      });

    return () => {
      ignore = true;
    };
  }, [token]);

  return [isLoading, questions];
}
