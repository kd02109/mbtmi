import { instance } from '@/api/axios';
import { END_POINT, SERVER_URL } from '@/api/url';
import { Gender, Id, Method, ValueOf } from '@/types/types';

async function getApiWhitToken<T>(method: ValueOf<Method>, jwt: string) {
  try {
    const data = await instance.get<T>(`${method}`, {
      headers: {
        '-user-token': jwt,
      },
    });
    return data.data;
  } catch (e) {
    console.log(e);
  }
}

async function getUserNumber() {
  try {
    const data = await instance.get<{ number: number }>(END_POINT.userNumber);
    return data.data.number;
  } catch (e) {
    console.log(e);
  }
}

async function postUser(user: string, sex: Gender) {
  try {
    const data = await instance.post<{ token: string }>(
      `${END_POINT.postStarting}`,
      {
        gender: sex,
        nickname: user,
      },
    );
    const jwt = data.data;
    return jwt;
  } catch (e) {
    console.log(e);
  }
}

async function postAnswer(answer: string, id: Id, token: string) {
  console.log(token, answer, id);
  try {
    const data = await instance.post(
      `${END_POINT.postQuestion(id)}`,
      {
        content: answer,
      },
      {
        headers: {
          _user_token: token,
        },
      },
    );
    const jwt = data.data;
    return jwt;
  } catch (e) {
    console.log(e);
  }
}

async function postResult(token: string) {
  try {
    const data = await instance.post<{ mbtmi: string }>(
      `${SERVER_URL}${END_POINT.postResult}`,
      {},
      {
        headers: {
          _user_token: token,
        },
      },
    );
    return data.data;
  } catch (e) {
    console.log(e);
  }
}

export { postUser, getApiWhitToken, postAnswer, getUserNumber, postResult };
export const ClientApi = {
  postUser,
  getApiWhitToken,
  postAnswer,
  getUserNumber,
  postResult,
};
