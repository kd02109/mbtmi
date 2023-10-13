import { Data } from '@/types/types';

export default function checkSubmit(data: Data[]) {
  const findData = data.find(item => item.answer.length === 0);

  return findData ? true : false;
}
