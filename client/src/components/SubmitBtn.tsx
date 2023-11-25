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
    <div className="relative flex justify-center items-center">
      <button
        className={
          'p-3 w-[300px] mb-4 rounded-lg font-bold mt-6 bg-red-400 text-white hover:bg-bgGray hover:text-red-400 transition hover:shadow-lg'
        }
        onClick={handleBtn}>
        TEST
      </button>
    </div>
  );
}
