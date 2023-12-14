'use client';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useErrorBoundary } from 'react-error-boundary';
import { getApiWhitToken } from '@/api/clientApi';
import { END_POINT } from '@/api/url';
import ResultChatContainer from '@/components/result/ResultChatContainer';
import ResultSection from '@/components/result/ResultSection';
import Spinner from '@/components/Spinner';
import { QUESTIONS_MAN, QUESTIONS_WOMAN } from '@/data/question';
import { AnswerData, Data } from '@/types/types';
export default function ResultMyChat() {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  const [questions, setQuestion] = useState<Data[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const handleError = useErrorBoundary();

  useEffect(() => {
    getApiWhitToken<AnswerData>(END_POINT.getAnswerVisiting, token!)
      .then(data => {
        if (data) {
          const QUESTIONS =
            data?.user.gender === 'man' ? QUESTIONS_MAN : QUESTIONS_WOMAN;

          const questions = QUESTIONS.map(question => {
            const answers = data?.answer[question.id];
            question.answer = [...answers!];
            setIsLoading(false);
            return question;
          });
          setQuestion(questions);
        }
      })
      .catch(e => {
        handleError.showBoundary(e);
        console.log('데이터를 불러오는 과정에서 문제가 발생했습니다.');
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ResultSection title={'내가 한 답변'}>
      {isLoading ? (
        <Spinner loading={isLoading} />
      ) : (
        questions?.map(question => (
          <ResultChatContainer
            key={question.id}
            chat={`${question.name} : ${question.answer.join(', ')}`}
          />
        ))
      )}
    </ResultSection>
  );
}
