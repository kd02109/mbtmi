import './globals.css';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({ subsets: ['latin'] });
export const metadata: Metadata = {
  title: 'mbti test : mbtmi',
  description: '기존의 O,X 선택지에서 벗어나 정확도가 높은 대화형 mbti app 구현을 목표로 합니다',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="kn">
      <body className={`${openSans.className}`} >{children}</body>
    </html>
  );
}
