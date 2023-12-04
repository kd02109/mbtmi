'use client';
import { useLocalStorage } from '@uidotdev/usehooks';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useState } from 'react';
import { postUser } from '@/api/clientApi';
import Radio from '@/components/Radio';
import { PATH, VISITED, GENDER } from '@/config';
import { Gender } from '@/types/types';

export default function ChoiceSex() {
  const [sex, setSex] = useState<Gender>(GENDER.man);
  const [nickname, setNickName] = useState('');
  const [, saveToken] = useLocalStorage<null | string>('token', null);
  const [, saveIsVisited] = useLocalStorage<null | { [key: string]: boolean }>(
    'isVisited',
    null,
  );
  const router = useRouter();

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (nickname.trim() === '') alert('Nickname을 작성해주세요!');

    const jwt = await postUser(nickname, sex);

    if (jwt) {
      saveToken(jwt.token);
      saveIsVisited(VISITED);
      router.push(PATH.chatingList);
    } else alert('token 생성에 실패했습니다.');
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    if (target.value === GENDER.man || target.value === GENDER.woman) {
      setSex(target.value);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-10">
      <fieldset className="w-80 max-w-sm py-4 px-10 border-solid border-red-300 border-2 rounded-lg flex flex-col items-center">
        <legend className="px-4 mx-[-10%] font-bold">Profile</legend>
        <section className="flex gap-10 ">
          <Radio handleChange={handleChange} sex={sex} value={GENDER.man} />
          <Radio handleChange={handleChange} sex={sex} value={GENDER.woman} />
        </section>
        <section className="flex flex-col gap-4 w-full mt-2">
          <label htmlFor="nickname" className="font-bold text-xl">
            Nickname
          </label>
          <input
            type="text"
            id="nickname"
            value={nickname}
            onChange={e => {
              setNickName(e.target.value);
            }}
            required
            autoFocus
            className="focus:outline-red-300 focus:outline-none focus:border-none px-4 py-2 border-2 border-solid rounded-xl bg-white"
          />
        </section>
        <button className="px-4 py-2 rounded-lg font-bold mt-4 bg-red-400 text-white hover:bg-transparent hover:text-red-400 transition hover:shadow-lg">
          TEST 시작하기
        </button>
      </fieldset>
    </form>
  );
}
