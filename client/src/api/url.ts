const SERVER_URL = 'https://mbtmi.site/';
const END_POINT = Object.freeze({
  postStarting: 'user/starting',
  getMbtmi: 'user/mbtmi',
  postQuestion: (id: number) => `answer/message/${id}`,
  getVisiting: 'answer/visiting',
});

export { SERVER_URL, END_POINT };
