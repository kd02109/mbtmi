import { CONFIG } from '@/config';
import { Data } from '@/types/types';
import checkNickname from '@/util/checkNickname';

export const QUESTIONS_MAN: Data[] = [
  {
    id: '1',
    name: '가족 단체 톡방',
    questions: [
      {
        type: 'message',
        user: '엄마',
        picture: '/images/flower.jpg',
        time: '17:23',
        profile: `${CONFIG.profileSource}family_mom.png`,
      },
      {
        type: 'message',
        user: '엄마',
        message: '오늘 산책하다가 발견한 예쁜 꽃 ^^',
        time: '17:24',
        profile: `${CONFIG.profileSource}family_mom.png`,
      },
      {
        type: 'message',
        user: '아빠',
        message: '참 예쁘네',
        time: '17:26',
        profile: `${CONFIG.profileSource}family_dady.png`,
      },
    ],
    visited: false,
    answer: [],
    profile: [
      `${CONFIG.profileSource}family_mom.png`,
      `${CONFIG.profileSource}family_dady.png`,
      '/images/profile.png',
      '/images/profile.png',
    ],
    newMessage: 3,
    memberCount: 4,
    description: '엄마가 가족 톡방에 꽃을 보냈다 당신의 답변은?',
  },
  {
    id: '2',
    name: '준석',
    questions: [
      { type: 'date', date: '하루 전', profile: '#' },
      {
        type: 'message',
        user: '준석',
        message: '내일 점심에 돈까스집 ㄱㄱ?',
        time: '21:27',
        profile: `${CONFIG.profileSource}person.png`,
      },
      {
        type: 'message',
        user: 'me',
        message: '오 좋지~~',
        time: '21:46',
        profile: `/images/profile.png`,
      },
      { type: 'date', date: '오늘', profile: '#' },
      {
        type: 'message',
        user: '준석',
        message: '지금 뭐함?',
        time: '22:05',
        profile: `${CONFIG.profileSource}person.png`,
      },
      {
        type: 'message',
        user: '준석',
        message: '갑자기 바다 가고싶은디',
        time: '22:06',
        profile: `${CONFIG.profileSource}person.png`,
      },
    ],
    visited: false,
    answer: [],
    profile: `${CONFIG.profileSource}person.png`,
    newMessage: 3,
    memberCount: 2,
    description: '늦은 밤 제일 친한 친구가 바다를 가자고 한다...',
  },
  {
    id: '3',
    name: '경훈',
    questions: [
      { type: 'date', date: '이틀 전', profile: '#' },
      {
        type: 'message',
        user: '경훈',
        message: '나 여친이랑 오늘 대판 싸우고 왔음..',
        time: '11:43',
        profile: `${CONFIG.profileSource}friend_minho.png`,
      },
      {
        type: 'message',
        user: '경훈',
        message: '헤어질듯 ㅠㅠ',
        time: '11:43',
        profile: `${CONFIG.profileSource}friend_minho.png`,
      },
      {
        type: 'message',
        user: 'me',
        message: '헉 괜찮음??ㅜ 왜 싸웠어',
        time: '11:44',
        profile: `${CONFIG.profileSource}friend_minho.png`,
      },
      {
        type: 'message',
        user: '경훈',
        message: '몰라.. 이번엔 진짜 끝날듯',
        time: '11:52',
        profile: `${CONFIG.profileSource}friend_minho.png`,
      },
      { type: 'date', date: '하루 전', profile: '#' },
      {
        type: 'message',
        user: '경훈',
        message: '여친이랑 화해하고 다시 잘해보기로 했어..',
        time: '18:20',
        profile: `${CONFIG.profileSource}friend_minho.png`,
      },
      {
        type: 'message',
        user: 'me',
        message: '잘 해결돼서 다행이네',
        time: '19:02',
        profile: `/images/profile.png`,
      },
      { type: 'date', date: '오늘', profile: '#' },
      {
        type: 'message',
        user: '경훈',
        message: '오늘 저녁 먹다가 여자친구랑 또 싸웠음..',
        time: '19:06',
        profile: `${CONFIG.profileSource}friend_minho.png`,
      },
    ],
    visited: false,
    answer: [],
    profile: `${CONFIG.profileSource}friend_minho.png`,
    newMessage: 1,
    memberCount: 2,
    description: '헤어졌다 만났다를 반복하는 친구에게 당신의 답변은?',
  },
  {
    id: '4',
    name: '동아리',
    questions: [
      {
        type: 'message',
        user: '12기_영훈',
        message: '안녕하세요 잘 부탁드립니다!',
        time: '18:10',
        profile: `${CONFIG.profileSource}club_hun.png`,
      },
      {
        type: 'message',
        user: '12기_영희',
        message: '안녕하세요!',
        time: '18:20',
        profile: `${CONFIG.profileSource}club_hee.png`,
      },
      {
        type: 'message',
        user: 'me',
        message: '반가워요~!!',
        time: '18:21',
        profile: `/images/profile.png`,
      },
      {
        type: 'message',
        user: '12기_영수',
        message: '안녕하세용',
        time: '18:23',
        profile: `${CONFIG.profileSource}person.png`,
      },
      {
        type: 'message',
        user: '12기_영희',
        message:
          '저희 역할 중 발표자를 먼저 정하라고 하시네요. 발표자 하고싶은 분 계신가요?',
        time: '19:00',
        profile: `${CONFIG.profileSource}club_hee.png`,
      },
      {
        type: 'message',
        user: '12기_영훈',
        messageFn: (name: string) =>
          `오늘 ${name}님 말씀하시는 것 들어보니 잘하실 것 같은데!ㅎㅎ 하실 생각 있으세요??`,

        time: '18:10',
        profile: `${CONFIG.profileSource}club_hun.png`,
      },
    ],
    visited: false,
    answer: [],
    profile: [
      `${CONFIG.profileSource}club_hun.png`,
      `${CONFIG.profileSource}club_hee.png`,
      '/images/profile.png',
      '/images/profile.png',
    ],
    newMessage: 2,
    memberCount: 4,
    description:
      '동아리 발표자를 정해야 하는 상황? 나에게 발표를 맡아달로고 부탁하는데..?',
  },
  {
    id: '5',
    name: '내사랑',
    questions: [
      {
        type: 'message',
        user: '내사랑',
        messageFn: name => {
          const nickName = checkNickname(name, ['아', '야']);
          return `${nickName} 갑자기 궁금한 거 생겼는데 ㅎ`;
        },
        time: '23:06',
        profile: `${CONFIG.profileSource}love.png`,
      },
      {
        type: 'message',
        user: 'me',
        message: '응응 뭔데?...',
        time: '23:08',
        profile: `/images/profile.png`,
      },
      {
        type: 'message',
        user: '내사랑',
        messageFn: name => {
          const nickName = checkNickname(name, ['이', '']);
          return `${nickName} 넌 10년 후에 어떤 인생을 살고있을 거 같아??`;
        },
        time: '23:09',
        profile: `${CONFIG.profileSource}love.png`,
      },
    ],
    visited: true,
    answer: [],
    profile: `${CONFIG.profileSource}love.png`,
    newMessage: 1,
    memberCount: 2,
    description:
      '갑자기 연인에게서 미래에 내가 어떤 인생을 살고있을 것 같은지 물어보는 연락이 왔다',
  },
  {
    id: '6',
    name: '팀플',
    questions: [
      { type: 'date', date: '하루 전', profile: '#' },
      {
        type: 'message',
        user: '팀원1',
        message: '그럼 저희 내일 몇시에 뵐까요?',
        time: '21:06',
        profile: `${CONFIG.profileSource}team_1.png`,
      },
      {
        type: 'message',
        user: 'me',
        message: '저는 오전이 편한데, 내일 9시에 학교 앞 스터디룸에서 뵈어요!',
        time: '21:20',
        profile: `/images/profile.png`,
      },
      {
        type: 'message',
        user: '팀원1',
        message: '넵! 저도 9시 좋아요!',
        time: '21:23',
        profile: `${CONFIG.profileSource}team_1.png`,
      },
      {
        type: 'message',
        user: '팀원2',
        message: '네 그럼 내일 뵈어요 ~ !',
        time: '21:30',
        profile: `${CONFIG.profileSource}team_2.png`,
      },
      {
        type: 'message',
        user: 'me',
        message: '네! 그럼 내일 뵐게요!',
        time: '21:35',
        profile: `/images/profile.png`,
      },
      {
        type: 'message',
        user: '팀원3',
        message: '넵 알겠습니다 ㅎㅎ',
        time: '22:00',
        profile: `${CONFIG.profileSource}team_3.png`,
      },
      { type: 'date', date: '오늘', profile: '#' },
      {
        type: 'message',
        user: '팀원1',
        message: '다들 잘 오고 계신가요?? 저 스터디룸 안에 들어와있습니다!',
        time: '08:55',
        profile: `${CONFIG.profileSource}team_1.png`,
      },
      {
        type: 'message',
        user: '팀원3',
        message: `네! 저도 곧 들어갑니다`,
        time: '08:56',
        profile: `${CONFIG.profileSource}team_3.png`,
      },
      {
        type: 'message',
        user: '팀원2',
        message: '지금 입구입니다',
        time: '08:59',
        profile: `${CONFIG.profileSource}team_2.png`,
      },
    ],
    visited: false,
    answer: [],
    profile: [
      `${CONFIG.profileSource}team_1.png`,
      `${CONFIG.profileSource}team_2.png`,
      `${CONFIG.profileSource}team_3.png`,
      '/images/profile.png',
    ],
    newMessage: 4,
    memberCount: 4,
    description: '9시에 팀플을 하기로 했지만, 버스가 막혀 10분 늦는 상황이다.',
  },
];

export const QUESTIONS_WOMAN: Data[] = [
  {
    id: '1',
    name: '가족 단체 톡방',
    questions: [
      {
        type: 'message',
        user: '엄마',
        picture: '/images/flower.jpg',
        time: '17:23',
        profile: `${CONFIG.profileSource}family_mom.png`,
      },
      {
        type: 'message',
        user: '엄마',
        message: '오늘 산책하다가 발견한 예쁜 꽃 ^^',
        time: '17:24',
        profile: `${CONFIG.profileSource}family_mom.png`,
      },
      {
        type: 'message',
        user: '아빠',
        message: '참 예쁘네',
        time: '17:26',
        profile: `${CONFIG.profileSource}family_dady.png`,
      },
    ],
    visited: false,
    answer: [],
    profile: [
      `${CONFIG.profileSource}family_mom.png`,
      `${CONFIG.profileSource}family_dady.png`,
      '/images/profile.png',
      '/images/profile.png',
    ],
    newMessage: 3,
    memberCount: 4,
    description: '엄마가 가족 톡방에 꽃을 보냈다 당신의 답변은?',
  },
  {
    id: '2',
    name: '미정',
    questions: [
      {
        type: 'message',
        user: '미정',
        message: '내일 점심에 카페ㄱㄱ?',
        time: '21:27',
        profile: `${CONFIG.profileSource}person.png`,
      },
      {
        type: 'message',
        user: 'me',
        message: '오 좋지~~',
        time: '21:46',
        profile: `/images/profile.png`,
      },
      { type: 'date', date: '하루 전', profile: '#' },
      {
        type: 'message',
        user: '미정',
        message: '지금 뭐해??',
        time: '22:05',
        profile: `${CONFIG.profileSource}person.png`,
      },
      {
        type: 'message',
        user: '미정',
        message: '요즘 일도 잘 안풀리고 답답해서',
        time: '22:05',
        profile: `${CONFIG.profileSource}person.png`,
      },
      {
        type: 'message',
        user: '미정',
        message: '갑자기 바다 너무 가고 싶다.. ㅜ',
        time: '22:06',
        profile: `${CONFIG.profileSource}person.png`,
      },
    ],
    visited: false,
    answer: [],
    profile: `${CONFIG.profileSource}person.png`,
    newMessage: 3,
    memberCount: 2,
    description: '늦은 밤 제일 친한 친구가 바다를 가자고 한다...',
  },
  {
    id: '3',
    name: '채원',
    questions: [
      { type: 'date', date: '이틀 전', profile: '#' },
      {
        type: 'message',
        user: '채원',
        message: '나 남친이랑 오늘 대판 싸우고 왔음..',
        time: '11:43',
        profile: `${CONFIG.profileSource}heo.png`,
      },
      {
        type: 'message',
        user: '채원',
        message: '헤어질듯 ㅠㅠ',
        time: '11:43',
        profile: `${CONFIG.profileSource}heo.png`,
      },
      {
        type: 'message',
        user: 'me',
        message: '헉 괜찮음??ㅜ 왜 싸웠어',
        time: '11:44',
        profile: `${CONFIG.profileSource}heo.png`,
      },
      {
        type: 'message',
        user: '채원',
        message: '몰라.. 이번엔 진짜 끝날듯',
        time: '11:52',
        profile: `${CONFIG.profileSource}heo.png`,
      },
      { type: 'date', date: '하루 전', profile: '#' },
      {
        type: 'message',
        user: '채원',
        message: '남친이랑 화해하고 다시 잘해보기로 했어..',
        time: '18:20',
        profile: `${CONFIG.profileSource}heo.png`,
      },
      {
        type: 'message',
        user: 'me',
        message: '잘 해결돼서 다행이네',
        time: '19:02',
        profile: `/images/profile.png`,
      },
      { type: 'date', date: '오늘', profile: '#' },
      {
        type: 'message',
        user: '채원',
        message: '오늘 저녁 먹다가 남자친구랑 또 싸웠음..',
        time: '19:06',
        profile: `${CONFIG.profileSource}heo.png`,
      },
    ],
    visited: false,
    answer: [],
    profile: `${CONFIG.profileSource}heo.png`,
    newMessage: 1,
    memberCount: 2,
    description: '헤어졌다 만났다를 반복하는 친구에게 당신의 답변은?',
  },
  {
    id: '4',
    name: '동아리',
    questions: [
      {
        type: 'message',
        user: '12기_영훈',
        message: '안녕하세요 잘 부탁드립니다!',
        time: '18:10',
        profile: `${CONFIG.profileSource}club_hun.png`,
      },
      {
        type: 'message',
        user: '12기_영희',
        message: '안녕하세요!',
        time: '18:20',
        profile: `${CONFIG.profileSource}club_hee.png`,
      },
      {
        type: 'message',
        user: 'me',
        message: '반가워요~!!',
        time: '18:21',
        profile: `/images/profile.png`,
      },
      {
        type: 'message',
        user: '12기_영수',
        message: '안녕하세용',
        time: '18:23',
        profile: `${CONFIG.profileSource}person.png`,
      },
      {
        type: 'message',
        user: '12기_영희',
        message:
          '저희 역할 중 발표자를 먼저 정하라고 하시네요. 발표자 하고싶은 분 계신가요?',
        time: '19:00',
        profile: `${CONFIG.profileSource}club_hee.png`,
      },
      {
        type: 'message',
        user: '12기_영훈',
        messageFn: (name: string) =>
          `오늘 ${name}님 말씀하시는 것 들어보니 잘하실 것 같은데!ㅎㅎ 하실 생각 있으세요??`,

        time: '18:10',
        profile: `${CONFIG.profileSource}club_hun.png`,
      },
    ],
    visited: false,
    answer: [],
    profile: [
      `${CONFIG.profileSource}club_hun.png`,
      `${CONFIG.profileSource}club_hee.png`,
      '/images/profile.png',
      '/images/profile.png',
    ],
    newMessage: 2,
    memberCount: 4,
    description:
      '동아리 발표자를 정해야 하는 상황? 나에게 발표를 맡아달로고 부탁하는데..?',
  },
  {
    id: '5',
    name: '내사랑',
    questions: [
      {
        type: 'message',
        user: '내사랑',
        messageFn: name => {
          const nickName = checkNickname(name, ['아', '야']);
          return `${nickName} 갑자기 궁금한 거 생겼는데 ㅎ`;
        },
        time: '23:06',
        profile: `${CONFIG.profileSource}love.png`,
      },
      {
        type: 'message',
        user: 'me',
        message: '응응 뭔데?...',
        time: '23:08',
        profile: `/images/profile.png`,
      },
      {
        type: 'message',
        user: '내사랑',
        messageFn: name => {
          const nickName = checkNickname(name, ['이', '']);
          return `${nickName} 넌 10년 후에 어떤 인생을 살고있을 거 같아??`;
        },
        time: '23:09',
        profile: `${CONFIG.profileSource}love.png`,
      },
    ],
    visited: true,
    answer: [],
    profile: `${CONFIG.profileSource}love.png`,
    newMessage: 1,
    memberCount: 2,
    description:
      '갑자기 연인에게서 미래에 내가 어떤 인생을 살고있을 것 같은지 물어보는 연락이 왔다',
  },
  {
    id: '6',
    name: '팀플',
    questions: [
      { type: 'date', date: '하루 전', profile: '#' },
      {
        type: 'message',
        user: '팀원1',
        message: '그럼 저희 내일 몇시에 뵐까요?',
        time: '21:06',
        profile: `${CONFIG.profileSource}team_1.png`,
      },
      {
        type: 'message',
        user: 'me',
        message: '저는 오전이 편한데, 내일 9시에 학교 앞 스터디룸에서 뵈어요!',
        time: '21:20',
        profile: `/images/profile.png`,
      },
      {
        type: 'message',
        user: '팀원1',
        message: '넵! 저도 9시 좋아요!',
        time: '21:23',
        profile: `${CONFIG.profileSource}team_1.png`,
      },
      {
        type: 'message',
        user: '팀원2',
        message: '네 그럼 내일 뵈어요 ~ !',
        time: '21:30',
        profile: `${CONFIG.profileSource}team_2.png`,
      },
      {
        type: 'message',
        user: 'me',
        message: '네! 그럼 내일 뵐게요!',
        time: '21:35',
        profile: `/images/profile.png`,
      },
      {
        type: 'message',
        user: '팀원3',
        message: '넵 알겠습니다 ㅎㅎ',
        time: '22:00',
        profile: `${CONFIG.profileSource}team_3.png`,
      },
      { type: 'date', date: '오늘', profile: '#' },
      {
        type: 'message',
        user: '팀원1',
        message: '다들 잘 오고 계신가요?? 저 스터디룸 안에 들어와있습니다!',
        time: '08:55',
        profile: `${CONFIG.profileSource}team_1.png`,
      },
      {
        type: 'message',
        user: '팀원3',
        message: `네! 저도 곧 들어갑니다`,
        time: '08:56',
        profile: `${CONFIG.profileSource}team_3.png`,
      },
      {
        type: 'message',
        user: '팀원2',
        message: '지금 입구입니다',
        time: '08:59',
        profile: `${CONFIG.profileSource}team_2.png`,
      },
    ],
    visited: false,
    answer: [],
    profile: [
      `${CONFIG.profileSource}team_1.png`,
      `${CONFIG.profileSource}team_2.png`,
      `${CONFIG.profileSource}team_3.png`,
      '/images/profile.png',
    ],
    newMessage: 4,
    memberCount: 4,
    description: '9시에 팀플을 하기로 했지만, 버스가 막혀 10분 늦는 상황이다.',
  },
];

export const VISITED = QUESTIONS_MAN.map(({ id, visited }) => {
  const obj = { [id]: visited };
  return obj;
});
