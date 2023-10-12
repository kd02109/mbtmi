import { SERVER_URL } from '@/api/api';

export const getHello = async () => {
  const data = await fetch(`${SERVER_URL}/hello`);
  const json = data.json();
  return json;
};

export const getQuestion = async () => {
  const data = await fetch(`${SERVER_URL}/api/question/list`);
  const json = data.json();
  return json;
};
