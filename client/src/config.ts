const CONFIG = Object.freeze({
  info: {
    github: 'https://github.com/kd02109/mbtmi',
    notion: 'https://www.notion.so/MBTMI-0cfcd7f18fca4719ace3d62d65abfb22',
  },
  copyright: 'mbtmi All rights reserved.',
  title: 'mbtmi',
  since: 2023,
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
