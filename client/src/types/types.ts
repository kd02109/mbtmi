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

export type DataManOrWoman = Data & { sex: 'man' | 'woman' };
