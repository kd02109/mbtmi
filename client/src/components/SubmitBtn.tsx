'use client';
import { useRouter } from 'next/navigation';
import { MouseEvent } from 'react';
import { PATH } from '@/config';
import { Data } from '@/types/types';
import checkSubmit from '@/util/checkSubmit';

type Prop = {
  data: Data[];
  token: string;
};

export default function SubmitBtn({ data, token }: Prop) {
  const router = useRouter();
  router.prefetch(`${PATH.loading}?token=${token}`);
  const handleBtn = (e: MouseEvent<HTMLButtonElement>) => {
    if (checkSubmit(data)) {
      alert('모든 대화에 답변을 해주세요!!');
    } else {
      router.push(`${PATH.loading}?token=${token}`);
    }
  };
  return (
    <div className="flex justify-center items-center mb-4 sticky bottom-2">
      <button
        className={`p-3 w-[300px] rounded-lg font-bold ${
          checkSubmit(data)
            ? 'text-red-400 bg-gray-200'
            : 'bg-red-400 text-white'
        }`}
        onClick={handleBtn}>
        {checkSubmit(data) ? '모든 답변에 답을 해주세요!' : 'TEST'}
      </button>
    </div>
  );
}
