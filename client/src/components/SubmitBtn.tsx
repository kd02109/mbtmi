'use client';
import { MouseEvent } from 'react';
import { Data } from '@/types/types';
import checkSubmit from '@/util/checkSubmit';

type Prop = {
  data: Data[];
};

export default function SubmitBtn({ data }: Prop) {
  const handleBtn = (e: MouseEvent<HTMLButtonElement>) => {
    if (checkSubmit(data)) {
      alert('모든 대화에 답변을 해주세요!!');
      return;
    }
    //클릭시 모든 데이터 전송 마무리 되었다는 것을 알려주기
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
