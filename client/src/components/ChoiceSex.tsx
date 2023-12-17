'use client';
import { useLocalStorage } from '@uidotdev/usehooks';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useState, MouseEvent, FormEvent, useRef, ChangeEvent } from 'react';
import { postUser } from '@/api/clientApi';
import Spinner from '@/components/Spinner';
import Check from '@/components/svg/Check';
import { PATH, VISITED, GENDER } from '@/config';
import { Gender } from '@/types/types';

export default function ChoiceSex() {
  const [sex, setSex] = useState<Gender>(GENDER.man);
  const [isLoading, setIsLoading] = useState(false);
  const [, saveToken] = useLocalStorage<null | string>('token', null);
  const [, saveIsVisited] = useLocalStorage<null | { [key: string]: boolean }>(
    'isVisited',
    null,
  );
  const router = useRouter();

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement> | MouseEvent) => {
    e.preventDefault();
    const inputValue = inputRef.current?.value;
    if (!inputValue && inputValue?.trim() === '')
      alert('Nickname을 작성해주세요!');
    else {
      setIsLoading(true);
      const jwt = await postUser(inputValue!, sex);

      if (jwt) {
        saveToken(jwt.token);
        saveIsVisited(VISITED);
        router.push(PATH.description);
      } else {
        alert('token 생성에 실패했습니다.');
        setIsLoading(false);
      }
    }
  };

  const handleChange = (e: MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();

    const target = e.target as HTMLButtonElement;
    if (target.innerText === '남') {
      setSex('man');
    } else {
      setSex('woman');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="my-8 w-[90%]">
      <section className="w-100 grid grid-cols-2 grid-rows-2 bg-white">
        <section className="flex justify-between col-span-2 font-bold text-xl">
          <button
            className="border-l-2 border-t-2 border-r-2 border-solid border-[#E1E1E1] flex-1 flex justify-center items-center relative"
            onClick={handleChange}>
            {sex === 'man' ? (
              <>
                <span className="text-[#FF5C48]">남</span>
                <Check
                  width="20"
                  height="20"
                  style="absolute left-[56%] top-2"
                />
              </>
            ) : (
              <span>남</span>
            )}
          </button>
          <button
            className="border-t-2 border-r-2 border-solid border-[#E1E1E1] flex-1 flex justify-center items-center relative"
            onClick={handleChange}>
            {sex === 'woman' ? (
              <>
                <span className="text-[#FF5C48]">여</span>
                <Check
                  width="20"
                  height="20"
                  style="absolute left-[56%] top-2"
                />
              </>
            ) : (
              <span>여</span>
            )}
          </button>
        </section>
        <input
          type="text"
          id="nickname"
          ref={inputRef}
          required
          autoFocus
          placeholder="닉네임을 입력해주세요"
          className="focus:outline-none px-4 py-4 border-2 border-solid border-[#E1E1E1] bg-white col-span-2 font-semibold"
        />
      </section>
      <button
        className="p-4 w-full font-bold mt-4 text-xl bg-white border-2 border-solid border-[#E1E1E1] text-center"
        onClick={handleSubmit}
        disabled={isLoading}>
        {!isLoading &&
          (inputRef.current?.value.trim() !== '' ? (
            <motion.span className="text-[#FF5C48]">TEST 시작하기</motion.span>
          ) : (
            <motion.span>TEST 시작하기</motion.span>
          ))}
        {isLoading && <Spinner loading={isLoading} />}
      </button>
    </form>
  );
}
