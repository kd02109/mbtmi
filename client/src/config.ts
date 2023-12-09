const CONFIG = Object.freeze({
  info: {
    github: 'https://github.com/kd02109/mbtmi',
    notion: 'https://www.notion.so/MBTMI-0cfcd7f18fca4719ace3d62d65abfb22',
  },
  copyright: 'mbtmi All rights reserved.',
  title: 'mbtmi',
  site: 'https://mbtmi.vercel.app',
  since: 2023,
  description:
    '기존의 O,X 선택지에서 벗어나 정확도가 높은 대화형 mbti app 구현을 목표로 합니다',
  resultSource: '/images/result/',
  logoImage: 'https://i.imgur.com/TwokxKP.png',
  profileSource: '/images/profile/',
  param: {
    key: 'share',
    query: `share=share`,
  },
});

const VISITED = {
  '1': false,
  '2': false,
  '3': false,
  '4': false,
  '5': true,
  '6': false,
};

const PATH = Object.freeze({
  chatingList: '/chating-list',
  loading: '/loading',
});

const GENDER: {
  man: 'man';
  woman: 'woman';
} = Object.freeze({
  man: 'man',
  woman: 'woman',
});
export const CONSTANT = { CONFIG, VISITED, PATH, GENDER };
export { CONFIG, VISITED, PATH, GENDER };
