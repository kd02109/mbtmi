import React, { ChangeEvent } from 'react';
import { Gender } from '@/types/types';

type Prop = {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  sex: Gender;
  value: Gender;
};

export default function Radio({ handleChange, sex, value }: Prop) {
  return (
    <div className="flex justify-center items-center">
      <input
        type="radio"
        id={value}
        value={value}
        onChange={handleChange}
        checked={sex === value}
        className="appearance-none w-6 h-6 border-2 border-solid border-gray-300 align-middle transition-all checked:border-8 checked:border-solid checked:border-red-400 hover:border-red-400 rounded-full"
      />
      <label htmlFor={value} className="font-bold ml-2 text-xl">
        {value.toUpperCase()}
      </label>
    </div>
  );
}
