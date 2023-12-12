'use client';
import { useState } from 'react';
export default function Clipboard({ link }: { link: string }) {
  const [isSucess, setIsSucess] = useState(false);
  const handleClipBoard = () => {
    navigator.clipboard
      .writeText(link)
      .then(() => {
        setIsSucess(true);
      })
      .catch(() => {
        alert('복사에 실패했습니다. 다시 시도해 주세요.');
      });
  };
  return (
    <button
      onClick={handleClipBoard}
      className="px-4 py-2 font-bold text-xl bg-bgChating text-black rounded-2xl">
      링크 복사하기{isSucess ? '✅' : '🗒️'}
    </button>
  );
}
