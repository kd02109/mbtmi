import type { Metadata } from 'next';
import { CONFIG } from '@/config';
export const metadata: Metadata = {
  title: `${CONFIG.title}/chating-list`,
  description:
    '기존의 O,X 선택지에서 벗어나 정확도가 높은 대화형 mbti app 구현을 목표로 합니다',
};

export default function SlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex w-full min-h-screen max-h-screen max-w-xl mx-auto flex-col items-center  bg-white">
      {children}
    </main>
  );
}
