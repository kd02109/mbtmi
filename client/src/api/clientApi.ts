import { instance } from '@/api/axios';
import { END_POINT, SERVER_URL } from '@/api/url';
import { Gender, Id, MbtmiResult, Method, ValueOf } from '@/types/types';

async function getApiWhitToken<T>(method: ValueOf<Method>, jwt: string) {
  try {
    const data = await instance.get<T>(`${method}`, {
      headers: {
        '-user-token': jwt,
      },
    });
    return data.data;
  } catch (e) {
    throw new Error('token을 처리하는 과정에서 문제가 발생했습니다.');
  }
}

async function getUserNumber() {
  try {
    const data = await instance.get<{ number: number }>(END_POINT.userNumber);
    return data.data.number;
  } catch (e) {
    throw new Error(
      '현재 참가한 유저 정보를 받아오는 것에 문제가 발생했습니다.',
    );
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
    throw new Error('token을 생성하는 단계에서 문제가 발생했습니다');
  }
}

async function postAnswer(answer: string, id: Id, token: string) {
  try {
    const data = await instance.post(
      `${END_POINT.postQuestion(id)}`,
      {
        content: answer,
      },
      {
        headers: {
          '-user-token': token,
        },
      },
    );
    const jwt = data.data;
    return jwt;
  } catch (e) {
    throw new Error('답변을 저장하는 과정에서 문제가 발생했습니다.');
  }
}

async function postResult(token: string) {
  try {
    const data = await instance.post<MbtmiResult>(
      `${SERVER_URL}${END_POINT.postResult}`,
      {},
      {
        headers: {
          '-user-token': token,
        },
      },
    );
    return data.data;
  } catch (e) {
    throw new Error('MBTI 결과를 받아오는 과정에서 문제가 발생했습니다.');
  }
}

async function patchMbti(
  token: string,
  mbti: string,
): Promise<{ done: boolean }> {
  try {
    const data = await instance.patch(
      `${SERVER_URL}${END_POINT.patchMbti}`,
      { mbti: mbti },
      {
        headers: {
          '-user-token': token,
        },
      },
    );
    return data.data;
  } catch (e) {
    throw new Error('MBTI 결과를 수정하는 과정에서 에러가 발생했습니다.');
  }
}

export {
  postUser,
  getApiWhitToken,
  postAnswer,
  getUserNumber,
  postResult,
  patchMbti,
};
export const ClientApi = {
  postUser,
  getApiWhitToken,
  postAnswer,
  getUserNumber,
  postResult,
  patchMbti,
};
