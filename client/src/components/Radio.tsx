import React, { ChangeEvent } from 'react';

type Prop = {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  sex: string;
  value: 'woman' | 'man';
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
        className="w-6 h-6"
      />
      <label htmlFor={value} className="font-bold ml-2 text-xl">
        {value.toUpperCase()}
      </label>
    </div>
  );
}
