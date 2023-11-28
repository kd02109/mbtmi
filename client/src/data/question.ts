import { Data } from '@/types/types';

export const QUESTIONS: Data[] = [
  {
    id: '1',
    name: '가족 단체 톡방',
    questions: [
      {
        type: 'message',
        user: '엄마',
        picture: '/images/flower.jpg',
        time: '17:23',
      },
      {
        type: 'message',
        user: '엄마',
        message: '오늘 산책하다가 발견한 예쁜 꽃 ^^',
        time: '17:24',
      },
      { type: 'message', user: '아빠', message: '참 예쁘네', time: '17:26' },
    ],
    visited: false,
    answer: [],
    profile: '#',
    newMessage: 3,
    memberCount: 3,
  },
  {
    id: '2',
    name: '민호',
    questions: [
      {
        type: 'message',
        user: '민호',
        message: '내일 점심에 돈까스집 ㄱㄱ?',
        time: '21:27',
      },
      { type: 'message', user: 'me', message: '오 좋지~~', time: '21:46' },
      { type: 'date', date: '하루 전' },
      { type: 'message', user: '민호', message: '지금 바쁨??', time: '22:05' },
      {
        type: 'message',
        user: '민호',
        message: '갑자기 바다 가고싶은데',
        time: '22:06',
      },
      { type: 'message', user: '민호', message: '같이 갈까?', time: '22:06' },
    ],
    visited: false,
    answer: [],
    profile: '#',
    newMessage: 3,
    memberCount: 2,
  },
  {
    id: '3',
    name: '유리',
    questions: [
      {
        type: 'message',
        user: '유리',
        message: '나 남친이랑 오늘 대판 싸우고 왔음..',
        time: '11:43',
      },
      {
        type: 'message',
        user: '유리',
        message: '헤어질듯 ㅠㅠ',
        time: '11:43',
      },
      {
        type: 'message',
        user: 'me',
        message: '헉 괜찮음??ㅜ 왜 싸웠어',
        time: '11:44',
      },
      {
        type: 'message',
        user: '유리',
        message: '몰라.. 이번엔 진짜 끝날듯',
        time: '11:52',
      },
      { type: 'date', date: '이틀 전' },
      {
        type: 'message',
        user: '유리',
        message: '남친이랑 화해하고 다시 잘해보기로 했어..',
        time: '18:20',
      },
      {
        type: 'message',
        user: 'me',
        message: '잘 해결돼서 다행이네',
        time: '19:02',
      },
      { type: 'date', date: '하루 전' },
      {
        type: 'message',
        user: '유리',
        message: '오늘 저녁 먹다가 남자친구랑 또 싸웠음..',
        time: '19:06',
      },
    ],
    visited: false,
    answer: [],
    profile: '#',
    newMessage: 1,
    memberCount: 2,
  },
  {
    id: '4',
    name: '동아리',
    questions: [
      {
        type: 'message',
        user: '12기_영훈',
        picture: '/images/welcome.gif',
        time: '18:10',
      },
      {
        type: 'message',
        user: '12기_영희',
        messageFn: name => `${name}님! 어제 회식 빠른 정산 부탁할게요~!`,
        time: '18:20',
      },
    ],
    visited: false,
    answer: [],
    profile: '#',
    newMessage: 2,
    memberCount: 25,
  },
  {
    id: '5',
    name: '삼촌',
    questions: [
      {
        type: 'message',
        user: '삼촌',
        messageFn: name =>
          `${name}아 잘 지내고 있니? 덕화 삼촌이야! 요새 날씨가 많이 추운데 ${name}생각이 많이 난다!`,
        time: '20:06',
      },
      {
        type: 'message',
        user: '삼촌',
        messageFn: name =>
          `엄마가 요새 용돈 잘 안주지? 내가 ${name}이 따뜻한 패딩 사입으라고 용돈 보냈으니까 엄마한테 비밀로 하고 예쁜 옷 한벌 골라보렴~!`,
        time: '20:12',
      },
      {
        type: 'message',
        user: '삼촌',
        picture: '/images/gift.png',
        time: '20:17',
      },
      {
        type: 'message',
        user: 'me',
        picture: '/images/money.png',
        time: '20:20',
      },
    ],
    visited: true,
    answer: [],
    profile: '#',
    newMessage: 0,
    memberCount: 2,
  },
  {
    id: '6',
    name: '팀플',
    questions: [
      {
        type: 'message',
        user: '팀원1',
        message: '그럼 저희 내일 볓시에 뵐까요?',
        time: '21:06',
      },
      {
        type: 'message',
        user: 'me',
        message: '저는 오전이 편한데, 내일 9시에 학교 앞 스터디룸에서 뵈어요!',
        time: '21:20',
      },
      {
        type: 'message',
        user: '팀원1',
        message: '넵! 저도 9시 좋아요!',
        time: '21:23',
      },
      {
        type: 'message',
        user: '팀원2',
        message: '네 그럼 내일 뵈어요 ~ !',
        time: '21:30',
      },
      {
        type: 'message',
        user: 'me',
        message: '네! 그럼 내일 뵐게요!',
        time: '21:35',
      },
      {
        type: 'message',
        user: '팀원3',
        message: '넵 알겠습니다 ㅎㅎ',
        time: '22:00',
      },
      { type: 'date', date: '하루 전' },
      {
        type: 'message',
        user: '팀원1',
        messageFn: name => `${name}님 오고 계신가요?`,
        time: '09:06',
      },
      {
        type: 'message',
        user: '팀원3',
        messageFn: name => `${name}님 언제 도착하세요!?`,
        time: '09:10',
      },
      {
        type: 'message',
        user: '팀원2',
        message: '오늘 수고하셨습니다.!',
        time: '10:30',
      },
      {
        type: 'message',
        user: '팀원1',
        message: '고생하셨어요~~!',
        time: '10:30',
      },
    ],
    visited: false,
    answer: [],
    profile: '#',
    newMessage: 4,
    memberCount: 4,
  },
];

export const VISITED = QUESTIONS.map(({ id, visited }) => {
  const obj = { [id]: visited };
  return obj;
});
