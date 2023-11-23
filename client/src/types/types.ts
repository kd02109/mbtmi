export type SvgSize = {
  width: string;
  height: string;
  style?: string;
};

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

export type Id = '1' | '2' | '3' | '4' | '5' | '6';
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
export type DataManOrWoman = Data & UserInfo;

export type ValueOf<T> = T[keyof T];
export type Method = {
  postStarting: 'user/starting';
  getMbtmi: 'user/mbtmi';
  postQuestion: (id: number) => `/answer/message/${typeof id}`;
  getVisiting: 'answer/visiting';
};

export type UserInfo = {
  gender: Gender;
  nickname: string;
};
export type AnswerData = {
  user: UserInfo;
  answer: {
    '1': string[];
    '2': string[];
    '3': string[];
    '4': string[];
    '5': string[];
    '6': string[];
  };
};
