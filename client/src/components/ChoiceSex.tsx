'use client';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useState } from 'react';
import Radio from '@/components/Radio';

export default function ChoiceSex() {
  const [sex, setSex] = useState<'man' | 'woman' | ''>('man');
  const [nickname, setNickName] = useState('');
  const router = useRouter();
  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.target);
    if (nickname.trim() === '') alert('Nickname을 작성해주세요!');
    router.push(`/chating-list`);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    if (target.value === 'man' || target.value === 'woman') {
      setSex(target.value);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="mb-10">
      <fieldset className="w-80 max-w-sm py-4 px-10 border-solid border-red-300 border-2 rounded-lg flex flex-col items-center">
        <legend className="px-4 mx-[-10%] font-bold">Profile</legend>
        <section className="flex gap-10">
          <Radio handleChange={handleChange} sex={sex} value={'man'} />
          <Radio handleChange={handleChange} sex={sex} value={'woman'} />
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
            className="focus:outline-red-300 px-4 py-2 border-2 border-solid rounded-xl"
          />
        </section>
        <button className="px-4 py-2 rounded-lg font-bold mt-4 bg-red-400 text-white hover:bg-transparent hover:text-red-400 transition hover:shadow-lg">
          TEST 시작하기
        </button>
      </fieldset>
    </form>
  );
}
