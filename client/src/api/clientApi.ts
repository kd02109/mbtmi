import { instance } from '@/api/axios';
import { END_POINT, SERVER_URL } from '@/api/url';
import { Gender, Method, ValueOf } from '@/types/types';

async function getApiWhitToken(method: ValueOf<Method>, jwt: string) {
  const data = await instance.get(`${SERVER_URL}${method}`, {
    headers: {
      _user_token: jwt,
    },
  });
  return data.data;
}

async function postUser(user: string, sex: Gender) {
  try {
    const data = await instance.post<{ token: string }>(
      `${SERVER_URL}${END_POINT.postStarting}`,
      {
        gender: true,
        nickname: user,
      },
    );
    const jwt = data.data;
    return jwt;
  } catch (e) {
    console.log(e);
  }
}

export { postUser, getApiWhitToken };
export const ClientApi = { postUser, getApiWhitToken };
