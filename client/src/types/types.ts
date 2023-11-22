export type SvgSize = {
  width: string;
  height: string;
  style?: string;
};

export type Id = '1' | '2' | '3' | '4' | '5' | '6';
export type Message = {
  type: 'message';
  user: string;
  time: string;
  message?: string;
  messageFn?: (name: string) => string;
  picture?: string;
};
export type Date = {
  type: 'date';
  date: string;
};

export type MessageOrDate = Message | Date;

export type Data = {
  id: Id;
  name: string;
  questions: MessageOrDate[];
  visited: boolean;
  answer: string[];
  profile: string;
  newMessage: number;
  memberCount: number;
};
export type Gender = 'man' | 'woman';
export type DataManOrWoman = Data & { sex: Gender };

export type ValueOf<T> = T[keyof T];
export type Method = {
  postStarting: 'user/starting';
  getMbtmi: 'user/mbtmi';
  postQuestion: (id: number) => `/answer/message/${typeof id}`;
  getVisiting: 'answer/visiting';
};

export type AnswerData = {
  user: {
    sex: Gender;
    nickname: string;
  };
  '1': {
    answer: string[];
  };
  '2': {
    answer: string[];
  };
  '3': {
    answer: string[];
  };
  '4': {
    answer: string[];
  };
  '5': {
    answer: string[];
  };
  '6': {
    answer: string[];
  };
};
