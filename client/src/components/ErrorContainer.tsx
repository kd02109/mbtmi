'use client';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import ResultSection from '@/components/result/ResultSection';
export default function ErrorContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ErrorBoundary FallbackComponent={OurFallbackComponent}>
      {children}
    </ErrorBoundary>
  );
}

const OurFallbackComponent = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <ResultSection title={'내가 한 답변'}>
      <h1 className="font-bold text-medium text-bgBrown">{error.message}</h1>
      <button
        onClick={resetErrorBoundary}
        className="border-2 border-solid px-4 py-2 rounded-xl mt-2">
        다시 시도하기
      </button>
    </ResultSection>
  );
};
