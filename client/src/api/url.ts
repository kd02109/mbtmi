const SERVER_URL =
  process.env.NODE_ENV === 'development'
    ? 'http:localhost:8000'
    : 'https://mbtmi.site';

const END_POINT = Object.freeze({
  postStarting: '/user/starting',
  getMbtmi: '/user/mbtmi',
  postQuestion: (id: string) => `/answer/message/${id}`,
  getAnswerVisiting: '/answer/visiting',
  userNumber: '/user/number',
  postResult: '/user/answers',
  patchMbti: `/user/mbti`,
});

export { SERVER_URL, END_POINT };
