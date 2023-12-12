export type SvgSize = {
  width: string;
  height: string;
  style?: string;
};

export type Message = {
  type: 'message';
  user: string;
  time: string;
  profile: string;
  message?: string;
  messageFn?: (name: string) => string;
  picture?: string;
};
export type Date = {
  type: 'date';
  date: string;
  profile: string;
};
export type MessageOrDate = Message | Date;

export type Id = '1' | '2' | '3' | '4' | '5' | '6';
export type Data = {
  id: Id;
  name: string;
  questions: MessageOrDate[];
  visited: boolean;
  answer: string[];
  profile: string | string[];
  newMessage: number;
  memberCount: number;
  description: string;
};
export type Gender = 'man' | 'woman';
export type DataManOrWoman = Data & UserInfo;

export type ValueOf<T> = T[keyof T];
export type Method = {
  postStarting: '/user/starting';
  getMbtmi: '/user/mbtmi';
  postQuestion: (id: number) => `/answer/message/${typeof id}`;
  getAnswerVisiting: '/answer/visiting';
  userNumber: '/user/number';
  postResult: '/user/answers';
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

export type MbtmiResult = {
  done: boolean;
  user: {
    gender: Gender;
    nickname: string;
    mbtmi: Mbti;
  };
};

export type Mbti =
  | 'istj'
  | 'istp'
  | 'isfj'
  | 'isfp'
  | 'intj'
  | 'intp'
  | 'infj'
  | 'infp'
  | 'estj'
  | 'esfp'
  | 'enfp'
  | 'entp'
  | 'esfj'
  | 'estp'
  | 'enfj'
  | 'entj';

export type ResultInfo = {
  path: string;
  name: string;
  mbti: string;
  imgSrc: string;
  imgUrl: string;
  shareUrl: string;
  reading: { title: string; ratio: number };
  basicFeatures: string[];
  friendName: {
    title: string;
    features: string[];
    example: {
      가족: string;
      친구: string;
      '사회적 관계': string;
    };
  };
  myMbtiChat: {
    title: string;
    message: string[];
    feature: string[];
  };
  oppositeMbtiChat: {
    title: string;
    message: string[];
    feature: string[];
  };
};
