const CONFIG = {
  info: {
    github: 'https://github.com/kd02109/mbtmi',
    notion: 'https://www.notion.so/MBTMI-0cfcd7f18fca4719ace3d62d65abfb22',
  },
  copyright: 'mbtmi All rights reserved.',
  since: 2023,
};

const VISITED = {
  '1': false,
  '2': false,
  '3': false,
  '4': false,
  '5': false,
  '6': false,
};

const PATH = {
  chatingList: '/chating-list',
  question1: '/question1',
  question2: '/question2',
  question3: '/question3',
  question4: '/question4',
  question5: '/question5',
  question6: '/question6',
};

const GENDER: {
  man: 'man';
  woman: 'woman';
} = {
  man: 'man',
  woman: 'woman',
};
export const CONSTANT = { CONFIG, VISITED, PATH, GENDER };
export { CONFIG, VISITED, PATH, GENDER };
