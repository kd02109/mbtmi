const SERVER_URL = 'http://127.0.0.1:8000/';

const END_POINT = Object.freeze({
  postStarting: 'user/starting',
  getMbtmi: 'user/mbtmi',
  postQuestion: (id: string) => `answer/message/${id}`,
  getAnswerVisiting: 'answer/visiting',
  userNumber: 'user/number',
  postResult: 'user/answers',
});

export { SERVER_URL, END_POINT };
