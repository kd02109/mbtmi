export type SvgSize = {
  width: string;
  height: string;
  style?: string;
};

export type Data = {
  id: string;
  name: string;
  questionMan: string[];
  questionWoman: string[];
  visited: boolean;
  answer: string[];
  profile: string;
};
export type Gender = 'man' | 'woman';
export type DataManOrWoman = Data & { sex: Gender };

export type ValueOf<T> = T[keyof T];

export type Method = {
  postStarting: '/user/starting';
  getMbtmi: '/user/mbtmi';
  postQuestion: (id: number) => `/answer/message/${typeof id}`;
  getVisiting: 'answer/visiting';
};
