'use client';
import { useState, useEffect } from 'react';
import { getApiWhitToken } from '@/api/clientApi';
import { END_POINT } from '@/api/url';
import { QUESTIONS } from '@/data/question';
import useLocalStorage from '@/hooks/useLocalStorage';
import { AnswerData } from '@/types/types';

export default function useGetTokenAndVisited() {
  const [isLoading, setIsLoading] = useState(true);
  const [token] = useLocalStorage<null | string>('token', null);
  const [visited] = useLocalStorage<null | { [key: string]: boolean }>(
    'isVisited',
    null,
  );
  const [questions, setQuestion] = useState<any>(null);
  useEffect(() => {
    async function getData() {
      const data: AnswerData = await getApiWhitToken(
        END_POINT.getAnswerVisiting,
        token!,
      );
      console.log(data);
      return data;
    }

    if (token && visited) {
      getData().then(data => {
        const questions = QUESTIONS.map(question => {
          question.visited = visited[question.id];
          const answers = data[question.id].answer;
          question.answer.push(...answers);
          return question;
        });

        questions.sort((a, b) => {
          if (a.visited && b.visited) return 0;
          if (!a.visited && !b.visited) return 0;
          if (a.visited && !b.visited) return 1;
          return -1;
        });

        setQuestion(questions);
        setIsLoading(false);
      });
    }
  }, [token, visited]);

  return [isLoading, questions];
}
