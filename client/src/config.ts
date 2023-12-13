const CONFIG = Object.freeze({
  info: {
    github: 'https://github.com/kd02109/mbtmi',
    notion: 'https://www.notion.so/MBTMI-0cfcd7f18fca4719ace3d62d65abfb22',
  },
  copyright: 'mbtmi All rights reserved.',
  title: 'mbtmi',
  site: 'https://mbtmi.vercel.app',
  gabia: 'https://mbtmi.xyz/',
  since: 2023,
  description:
    '말투로 본 나의 찐 성격유형은?!👤 주어진 상황에 자유롭게 대답한 후, AI가 판단한 나의 성격유형을 알아보세요!',
  resultSource: '/images/mbtmi_research/',
  logoImage: 'https://i.imgur.com/A7BAUbv.png',
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
  '5': false,
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
