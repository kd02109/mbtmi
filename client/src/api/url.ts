const SERVER_URL = 'https://mbtmi.site/';
const END_POINT = Object.freeze({
  postStarting: 'user/starting',
  getMbtmi: 'user/mbtmi',
  postQuestion: (id: string) => `answer/message/${id}`,
  getAnswerVisiting: 'answer/visiting',
});

export { SERVER_URL, END_POINT };
