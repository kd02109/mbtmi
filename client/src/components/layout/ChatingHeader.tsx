'use client';

import NumberCount from '@/components/chat/NumberCount';

export default function ChatingHeader({ number }: { number?: number }) {
  return (
    <header className="w-full p-2 border-b-2 border-solid sticky top-0 bg-white z-10 flex items-center justify-between">
      <h2 className="font-bold text-2xl">채팅</h2>
      <h3 className="font-bold">
        참여 유저수: <NumberCount number={number} />
      </h3>
    </header>
  );
}
