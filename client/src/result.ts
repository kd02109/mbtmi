import { CONFIG } from '@/config';
import { Mbti, ResultInfo } from '@/types/types';

const MBTI_RESULT: { [key in Mbti]: ResultInfo } = {
  istj: {
    path: '12',
    name: '소금맛 붕어빵',
    imgSrc: `${CONFIG.resultSource}salt.png`,
    imgUrl: 'https://i.imgur.com/xNItngz.jpg',
    shareUrl: 'https://i.imgur.com/SuIyAKf.png',
    mbti: 'ISTJ',
    readingTitle: '나의 카톡 지수',
    reading: [
      { title: '칼답', ratio: 0.5 },
      { title: '읽씹', ratio: 0.67 },
      { title: '안읽씹', ratio: 0.5 },
    ],
    basicFeatures: [
      '당신은 현실적이면서도 책임감이 강해 어디서든 꼭 필요한 존재!',
      '알잘딱깔센하게 어떤 일이든 잘 처리하는 센스쟁이네요!',
      '친밀한 상대에게 연락이 왔을 때 신속하게 응답하지만 불필요한 대화에는 관심을 보이지 않을 가능성이 높습니다.',
      '본인에게 주어진 일에 집중하는 경향이 있어, 메시지를 읽고도 응답하지 않거나 아예 읽지 않는 경우가 많을 수 있습니다.',
    ],
    friendName: {
      title: '친구들 카톡 저장 방법',
      features: ['한국어 이름 세 글자 그대로 저장.'],
      example: {
        가족: '아버지, 어머니',
        친구: '김민수',
        '사회적 관계': '이사장님, 김교수님, 박이웃',
      },
    },
    myMbtiChat: {
      title: '내 유형이 가장 많이 말한 단어 TOP3',
      message: ['계획적이야', '그래', '알겠어'],
      feature: ['신중함', '체계적'],
    },
    oppositeMbtiChat: {
      title: '반대 유형이 가장 많이 말한 단어 TOP3',
      message: ['신나!', '헐', '아이디어'],
      feature: ['열정적', '창의적'],
    },
  },

  isfj: {
    path: '13',
    name: '단팥 붕어빵',
    imgSrc: `${CONFIG.resultSource}red-bean.png`,
    imgUrl: 'https://i.imgur.com/ATN0E4E.png',
    shareUrl: 'https://i.imgur.com/UnOmK2U.png',
    mbti: 'ISFJ',
    readingTitle: '나의 카톡 지수',
    reading: [
      { title: '칼답', ratio: 1 },
      { title: '읽씹', ratio: 0 },
      { title: '안읽씹', ratio: 0 },
    ],
    basicFeatures: [
      '당신은 세심하고 배려 깊은, 부드러운 단팥 붕어빵입니다!',
      '공감 능력이 뛰어나 누구에게나 안정감을 주기 때문에 많은 사람들이 당신을 찾아요.',
      '상대와 연락을 주고받을 때, 친밀한 사람들의 메시지에는 신속하게 반응할 가능성이 높아요.',
      '개인적인 공간과 시간을 중시하여, 때때로 빠르게 쌓여가는 단체톡방 메시지를 읽고 응답하지 않거나 미처 확인하지 못하는 경우가 있어요.',
    ],
    friendName: {
      title: '친구들 카톡 저장 방법',
      features: ['성을 떼고 이름만 사용하거나, 친근한 별명을 사용.'],
      example: {
        가족: '엄마❤️, 아빠❤️',
        친구: '지희(고등학교), 현수(동네)',
        '사회적 관계': '회사 박대리, 학원 선생님, 옆집 아줌마',
      },
    },
    myMbtiChat: {
      title: '내 유형이 가장 많이 말한 단어 TOP3',
      message: ['고마워', '걱정돼', '조심해'],
      feature: ['친절', '배려'],
    },
    oppositeMbtiChat: {
      title: '반대 유형이 가장 많이 말한 단어 TOP3',
      message: ['신나!', '헐', '아이디어'],
      feature: ['발명적', '도전적'],
    },
  },

  infj: {
    path: '14',
    name: '아이스크림 붕어빵',
    mbti: 'INFJ',
    imgSrc: `${CONFIG.resultSource}soft.png`,
    imgUrl: 'https://i.imgur.com/Zg6QFU1.png',
    shareUrl: 'https://i.imgur.com/U8gULS7.png',
    readingTitle: '나의 카톡 지수',
    reading: [
      { title: '칼답', ratio: 0.75 },
      { title: '읽씹', ratio: 0.5 },
      { title: '안읽씹', ratio: 0.38 },
    ],
    basicFeatures: [
      '당신은 깊은 사고력과 강한 직관력을 갖고 있으며, 동시에 공감능력이 뛰어나 타인을 편안하게 해주는 겉바속촉 붕어빵!',
      '상대와 연락을 할 때 가까운 사람들과의 채팅방에는 빠르게 반응하지만, 일반적으로 메시지에 대해 신중하게 생각하고 답변하는 경향이 있죠.',
      '때때로 내면세계에 몰두하거나 혼자 보내는 시간을 소중하게 여겨 메시지에 천천히 답변하는 경우가 있습니다',
    ],
    friendName: {
      title: '친구들 카톡 저장 방법',
      features: [
        '특별한 별명이나 의미 있는 이모티콘을 붙여 저장할 가능성이 있습니다.',
      ],
      example: {
        가족: '가족👨‍👩‍👧‍👦, 엄마🌸',
        친구: '철수(소울메이트), 영희(책 친구)',
        '사회적 관계': '영업팀 이OO, 수학 선생님📚, 고양이 주인 이웃',
      },
    },
    myMbtiChat: {
      title: '내 유형이 가장 많이 말한 단어 TOP3',
      message: ['이해해', '맞아', '그래도 괜찮아'],
      feature: ['섬세함', '이상주의'],
    },
    oppositeMbtiChat: {
      title: '반대 유형이 가장 많이 말한 단어 TOP3',
      message: ['가보자!', '대박', '쩐다'],
      feature: ['활동적', '대담함'],
    },
  },

  intj: {
    path: '15',
    name: '붕어빵 연구원',
    imgSrc: `${CONFIG.resultSource}researcher.png`,
    imgUrl: 'https://i.imgur.com/prIqhXJ.jpg',
    shareUrl: 'https://i.imgur.com/4831aAM.png',
    mbti: 'INTJ',
    readingTitle: '나의 카톡 지수',
    reading: [
      { title: '칼답', ratio: 0.5 },
      { title: '읽씹', ratio: 0.83 },
      { title: '안읽씹', ratio: 0.75 },
    ],
    basicFeatures: [
      '붕어빵을 좋아해 연구까지 하게 된 사람이 있다면 바로 당신!',
      '사람이 많은 곳보다는 혼자 생각할 수 있는 곳을 선호하며, 복잡한 문제를 전략적으로 잘 해결하는 당신은 붕어빵 연구원!',
      '연락을 주고받을 때, 필요한 연락에는 신속하게 대응하지만, 그 외의 대화에는 느리게 대답하는 경향이 있죠.',
      '자신의 계획과 목표에 집중하는 경향이 있어 메시지를 읽지 않거나 읽고도 응답하지 않을 수도 있습니다.',
    ],
    friendName: {
      title: '친구들 카톡 저장 방법',
      features: ['이름을 간결하고 명확하게 저장하는 경향'],
      example: {
        가족: 'Father, Mother',
        친구: '김민수(대학), 홍길동(프로젝트)',
        '사회적 관계': 'CEO 김OO, 박교수, 이웃집 Mr.박',
      },
    },
    myMbtiChat: {
      title: '내 유형이 가장 많이 말한 단어 TOP3',
      message: ['생각해볼게', '논리적이야', '흠...'],
      feature: ['독립적', '분석적'],
    },
    oppositeMbtiChat: {
      title: '반대 유형이 가장 많이 말한 단어 TOP3',
      message: ['재밌을 듯!', 'ㅋㅋㅋ', '와우'],
      feature: ['에너자이틱', '사교적'],
    },
  },

  istp: {
    path: '16',
    name: '붕어맛 붕어빵',
    imgSrc: `${CONFIG.resultSource}fish.png`,
    imgUrl: 'https://i.imgur.com/1gH5cfs.jpg',
    shareUrl: 'https://i.imgur.com/Ybw47HB.png',
    mbti: 'ISTP',
    readingTitle: '나의 카톡 지수',
    reading: [
      { title: '칼답', ratio: 0 },
      { title: '읽씹', ratio: 1 },
      { title: '안읽씹', ratio: 0.88 },
    ],
    basicFeatures: [
      '융통성 있으면서도 현실적이고, 실용적인 해결책을 좋아하는 당신은 붕어맛 붕어빵!',
      '위기 상황이 닥치더라도 유연하게 잘 대처하는 능력을 가지고 있어요!',
      '친밀한 상대와 연락을 할 때는 바로 답장을 할 수 있지만, 대체로 대화에 큰 관심을 보이지는 않습니다.',
      '혼자 보내는 시간과 독립성을 중시하기 때문에, 불필요하다고 느끼는 대화에는 참여하지 않을 가능성이 높아요.',
    ],
    friendName: {
      title: '친구들 카톡 저장 방법',
      features: ['간단하고 직관적인 방식으로 이름을 저장'],
      example: {
        가족: '아빠, 엄마',
        친구: '민수, 지훈(축구)',
        '사회적 관계': '박부장, 김쌤, 옆집 형',
      },
    },
    myMbtiChat: {
      title: '내 유형이 가장 많이 말한 단어 TOP3',
      message: ['확인해볼게', '흥미로워', 'ㄴㄴ'],
      feature: ['실용적', '탐구적'],
    },
    oppositeMbtiChat: {
      title: '반대 유형이 가장 많이 말한 단어 TOP3',
      message: ['함께하자', '힘내!', '잘될 거야'],
      feature: ['열정적', '영감을 주는'],
    },
  },

  isfp: {
    path: '17',
    name: '슈크림 붕어빵',
    imgSrc: `${CONFIG.resultSource}cream.png`,
    imgUrl: 'https://i.imgur.com/mgxPWcd.png',
    shareUrl: 'https://i.imgur.com/sHaAJjW.png',
    mbti: 'ISFP',
    readingTitle: '나의 카톡 지수',
    reading: [
      { title: '칼답', ratio: 0 },
      { title: '읽씹', ratio: 0.33 },
      { title: '안읽씹', ratio: 0.5 },
    ],
    basicFeatures: [
      '부드러운 성격으로 타인과의 조화를 중시하고, 개방적 태도로 어디든 잘 어울리는 당신은 슈크림 붕어빵!',
      '친밀한 상대와 연락할 때 혹은 기분이 좋을 때 바로 연락이 되는 경향이 있어요!',
      '종종 내성적인 경향이 있어 메세지를 늦게 확인하거나 천천히 답장하는 경우가 있습니다.',
    ],
    friendName: {
      title: '친구들 카톡 저장 방법',
      features: ['예술적 감각이 뛰어나 개성 있는 방식으로 이름을 저장'],
      example: {
        가족: ' Papa🦁, Mama🌺',
        친구: '수지🌟, 지민(음악)',
        '사회적 관계': '디자인팀 홍OO, 미술 선생님🎨, 이웃 사촌',
      },
    },
    myMbtiChat: {
      title: '내 유형이 가장 많이 말한 단어 TOP3',
      message: ['느낌적인 느낌', '좋아!', '재밌겠다'],
      feature: ['창의적', '감성적'],
    },
    oppositeMbtiChat: {
      title: '반대 유형이 가장 많이 말한 단어 TOP3',
      message: ['목표달성', '이렇게 하자', '확실해'],
      feature: ['지도력 있는', '자신감'],
    },
  },

  intp: {
    path: '18',
    name: '초전도체 붕어빵',
    mbti: 'INTP',
    imgSrc: `${CONFIG.resultSource}superconductivity.png`,
    imgUrl: 'https://i.imgur.com/jVt7dbQ.png',
    shareUrl: 'https://i.imgur.com/fCh6bDe.png',
    readingTitle: '나의 카톡 지수',
    reading: [
      { title: '칼답', ratio: 0 },
      { title: '읽씹', ratio: 1 },
      { title: '안읽씹', ratio: 1 },
    ],
    basicFeatures: [
      '독창적인 아이디어가 넘쳐나며 뛰어난 분석력을 가진 당신은 초전도체 붕어빵!',
      '호기심이 많은 성격으로 추상적인 개념 탐색을 좋아하는군요.',
      '상대와 연락을 주고받을 때 당신은 칼답을 하기 보다는, 메시지에 즉시 반응하지 않을 수 있습니다.',
    ],
    friendName: {
      title: '친구들 카톡 저장 방법',
      features: ['분석적이고 호기심이 많아 이름을 간결하고 효율적으로 저장'],
      example: {
        가족: 'Dad, Mom',
        친구: '김민수(과학동아리), 이지훈(게임)',
        '사회적 관계': '개발팀장, 수학 교수, 체스 동호회 회원',
      },
    },
    myMbtiChat: {
      title: '내 유형이 가장 많이 말한 단어 TOP3',
      message: ['왜?', '어떻게 생각해?', '궁금해'],
      feature: ['논리적', '호기심이 많음'],
    },
    oppositeMbtiChat: {
      title: '반대 유형이 가장 많이 말한 단어 TOP3',
      message: ['함께 해요', '맞아요', '감사합니다'],
      feature: ['친절함', '협조적'],
    },
  },

  infp: {
    path: '19',
    name: '무지개맛 붕어빵',
    mbti: 'INFP',
    imgSrc: `${CONFIG.resultSource}rainbow.png`,
    imgUrl: 'https://i.imgur.com/oZtfpQP.jpg',
    shareUrl: 'https://i.imgur.com/dKlWQ6S.png',
    readingTitle: '나의 카톡 지수',
    reading: [
      { title: '칼답', ratio: 0.25 },
      { title: '읽씹', ratio: 0.67 },
      { title: '안읽씹', ratio: 0.63 },
    ],
    basicFeatures: [
      '창의적이면서 이상주의적이고, 다양한 가치에 공감하며 풍부한 감정을 표현하는 당신은 무지개맛 붕어빵!',
      '당신의 연락 스타일은 그날의 감정에 따라 달라질 수 있어요. 친밀한 상대에게는 빠르게 대답해요!',
      '종종 내적 세계에 몰두하여 외부 연락에는 느리게 반응하죠!',
    ],
    friendName: {
      title: '친구들 카톡 저장 방법',
      features: [
        '이상주의적이고 창의적인 무지개맛 붕어빵은 독특한 별명이나 상징적인 이모티콘을 사용하여 이름을 저장',
      ],
      example: {
        가족: '가족🌍, 맘마🌟',
        친구: '소희(꿈 친구), 준영(여행)',
        '사회적 관계': '마케팅팀 이OO🌱, 최선생님📖, 문화센터 이웃',
      },
    },
    myMbtiChat: {
      title: '내 유형이 가장 많이 말한 단어 TOP3',
      message: ['상상해봐', '그치', '아마도'],
      feature: ['이상주의적', '창의적'],
    },
    oppositeMbtiChat: {
      title: '반대 유형이 가장 많이 말한 단어 TOP3',
      message: ['계획대로', '엄청나네', '그래야겠다'],
      feature: ['결정적', '체계적'],
    },
  },

  estp: {
    path: '20',
    name: '바다로 간 붕어빵',
    mbti: 'ESTP',
    imgSrc: `${CONFIG.resultSource}sea.png`,
    imgUrl: `https://i.imgur.com/Okuc8ob.png`,
    shareUrl: 'https://i.imgur.com/kYsRy5C.png',
    readingTitle: '나의 카톡 지수',
    reading: [
      { title: '칼답', ratio: 0.5 },
      { title: '읽씹', ratio: 0.17 },
      { title: '안읽씹', ratio: 0.25 },
    ],
    basicFeatures: [
      '활동적이고 에너지가 넘쳐 모험을 즐기는 당신은 바다로 간 붕어빵! 현실적이며 실용적인 것을 좋아하는 면도 있군요.',
      '상대와 연락을 주고받을 때 즐거운 경우 당신은 종종 즉각적으로 답장을 할 수 있습니다.',
      '불필요하거나 흥미가 생기지 않는 대화에는 관심을 보이지 않을 수도 있겠네요.',
    ],
    friendName: {
      title: '친구들 카톡 저장 방법',
      features: [
        '활동적이고 사교적인 바다로 간 붕어빵은 친근감을 표현하는 방식으로 이름을 저장할 가능성이 있습니다.',
      ],
      example: {
        가족: '아버지, 어머니',
        친구: '지후(농구), 성훈(여행)',
        '사회적 관계': '영업부 황대리, 체육 선생님, 운동장 이웃',
      },
    },
    myMbtiChat: {
      title: '내 유형이 가장 많이 말한 단어 TOP3',
      message: ['가보자', '대박', '쩐다'],
      feature: ['활동적', '대담함'],
    },
    oppositeMbtiChat: {
      title: '반대 유형이 가장 많이 말한 단어 TOP3',
      message: ['이해해', '맞아', '그래도 괜찮아'],
      feature: ['섬세함', '이상주의적'],
    },
  },

  esfp: {
    path: '21',
    name: '탕후루 붕어빵',
    mbti: 'ESFP',
    imgSrc: `${CONFIG.resultSource}tanghulu.png`,
    imgUrl: 'https://i.imgur.com/GlCM1Nc.png',
    shareUrl: 'https://i.imgur.com/8ru94xI.png',
    readingTitle: '나의 카톡 지수',
    reading: [
      { title: '칼답', ratio: 0.5 },
      { title: '읽씹', ratio: 0 },
      { title: '안읽씹', ratio: 0.125 },
    ],
    basicFeatures: [
      '사교적이며 활동적인 당신은 유행을 잘 파악하고, 스윗한 성격으로 상대방의 마음도 잘 움직이는 탕후루 붕어빵!',
      '주변에 활력을 불어넣어주는 당신은 연락을 할 때 보통 빠른 답장 속도를 보이는군요!',
      '그날의 기분이나 상황에 따라 메세지를 늦게 확인하고 천천히 답장을 보낼 수도 있겠네요.',
    ],
    friendName: {
      title: '친구들 카톡 저장 방법',
      features: [
        '자유로운 영혼의 탕후루 붕어빵은 재미있고 창의적인 방식으로 이름을 저장할 수 있습니다.',
      ],
      example: {
        가족: 'Dad💪, Mom💖',
        친구: '민아(파티), 태우(콘서트)',
        '사회적 관계': '사무실 직원, 댄스 선생님, 아파트 이웃',
      },
    },
    myMbtiChat: {
      title: '내 유형이 가장 많이 말한 단어 TOP3',
      message: ['재밌을 듯', 'ㅋㅋㅋ', '와우'],
      feature: ['에너자이틱', '사교적'],
    },
    oppositeMbtiChat: {
      title: '반대 유형이 가장 많이 말한 단어 TOP3',
      message: ['생각해볼게', '논리적이야', '흠...'],
      feature: ['독립적', '분석적'],
    },
  },

  enfp: {
    path: '22',
    name: '자체발광 붕어빵',
    mbti: 'ENFP',
    imgSrc: `${CONFIG.resultSource}light.png`,
    imgUrl: 'https://i.imgur.com/RBVbzwi.png',
    shareUrl: 'https://i.imgur.com/FlMuSBg.png',
    readingTitle: '나의 카톡 지수',
    reading: [
      { title: '칼답', ratio: 0.75 },
      { title: '읽씹', ratio: 0.33 },
      { title: '안읽씹', ratio: 0.38 },
    ],
    basicFeatures: [
      '좋아하는 일에 매우 열정적이고, 언제나 아이디어가 넘쳐나는 당신은 자체발광 붕어빵!',
      '새로운 경험에 개방적인 태도를 갖고 있기도 하군요.',
      '즐거운 것을 좋아하는 당신은 연락을 주고받을 때 새롭고 흥미로운 대화에는 빠르게 반응해요.',
      '때때로 감정의 기복으로 인해 메시지에 빠르게 응답하지 않을 수도 있겠네요.',
    ],
    friendName: {
      title: '친구들 카톡 저장 방법',
      features: [
        '열정적이고 창의적인 자체발광 붕어빵은 개성 넘치는 별명이나 이모티콘을 사용하여 이름을 저장할 수 있습니다.',
      ],
      example: {
        가족: 'Daddy🌟, Mommy💕',
        친구: '해리(모험), 은지(영화)',
        '사회적 관계': '팀장님🚀, 영어 선생님, 북카페 사장님',
      },
    },
    myMbtiChat: {
      title: '내 유형이 가장 많이 말한 단어 TOP3',
      message: ['신나', '헐', '아이디어'],
      feature: ['열정적', '창의적'],
    },
    oppositeMbtiChat: {
      title: '반대 유형이 가장 많이 말한 단어 TOP3',
      message: ['계획적이야', '그래', '알겠어'],
      feature: ['신중함', '체계적'],
    },
  },

  estj: {
    path: '23',
    name: '캐비어맛 붕어빵',
    imgSrc: `${CONFIG.resultSource}caviar.png`,
    imgUrl: 'https://i.imgur.com/DrpjBzS.jpg',
    shareUrl: 'https://i.imgur.com/zA1OsrR.png',
    mbti: 'ESTJ',
    readingTitle: '나의 카톡 지수',
    reading: [
      { title: '칼답', ratio: 1 },
      { title: '읽씹', ratio: 0.5 },
      { title: '안읽씹', ratio: 0.5 },
    ],
    basicFeatures: [
      '체계적이고 실용적이며, 효율적인 일처리를 중시하는 당신은 캐비어맛 붕어빵! 뛰어난 리더십과 조직력을 갖추고 있네요.',
      '효율적인 커뮤니케이션을 중시하는 당신은 연락을 주고받을 때 빠르게 응답할 가능성이 높습니다.',
      '불필요하거나 목표에 부합하지 않는 대화에는 적극적으로 참여하지 않을 수도 있겠네요.',
    ],
    friendName: {
      title: '친구들 카톡 저장 방법',
      features: [
        '효율적이고 조직적인 캐비어맛 붕어빵은 이름을 간단하고 명료하게 저장하는 경향이 있을 수 있습니다.',
      ],
      example: {
        가족: '아버지, 어머니',
        친구: '정우(학원), 혜진(도서관)',
        '사회적 관계': '김부장, 이과장, 동네 주민',
      },
    },
    myMbtiChat: {
      title: '내 유형이 가장 많이 말한 단어 TOP3',
      message: ['계획대로', '엄청나네', '그래야겠다'],
      feature: ['결정적', '체계적'],
    },
    oppositeMbtiChat: {
      title: '반대 유형이 가장 많이 말한 단어 TOP3',
      message: ['상상해봐', '그치', '아마도'],
      feature: ['이상주의적', '창의적'],
    },
  },

  esfj: {
    path: '24',
    name: '외교관 붕어빵',
    imgSrc: `${CONFIG.resultSource}diplomat.png`,
    imgUrl: 'https://i.imgur.com/ozNeARH.png',
    shareUrl: 'https://i.imgur.com/dUkLgN9.png',
    mbti: 'ESFJ',
    readingTitle: '나의 카톡 지수',
    reading: [
      { title: '칼답', ratio: 1 },
      { title: '읽씹', ratio: 0.17 },
      { title: '안읽씹', ratio: 0.25 },
    ],
    basicFeatures: [
      '따뜻하고 친절한 성격을 지녔으며, 즐거운 모임에 나가는 것을 좋아하는 당신은 어장속의 붕어빵! 타인을 돌보는 데 타고났으며 철저한 면모도 있군요.',
      '타인과의 긍정적 관계를 중시하는 당신은 상대와 연락을 주고받을 때  적극적으로 대화에 참여할 가능성이 높습니다.',
      '채팅 개수가 많이 쌓이기 전에 바로 확인하는 경향이 있겠네요!',
    ],
    friendName: {
      title: '친구들 카톡 저장 방법',
      features: [
        '친근하고 협조적인 어장속의 붕어빵은 다른 사람과의 관계를 중시하여 친근감 있는 방식으로 이름을 저장',
      ],
      example: {
        가족: '아빠👑, 엄마👑',
        친구: '우진(아이디어), 서연(여행)',
        '사회적 관계': '창업팀 이OO, 역사 교수님, 공원 이웃',
      },
    },
    myMbtiChat: {
      title: '내 유형이 가장 많이 말한 단어 TOP3',
      message: ['함께 해요', '맞아요', '감사합니다'],
      feature: ['친절함', '협조적'],
    },
    oppositeMbtiChat: {
      title: '반대 유형이 가장 많이 말한 단어 TOP3',
      message: ['왜?', '어떻게 생각해?', '궁금해'],
      feature: ['논리적', '호기심이 많음'],
    },
  },

  entj: {
    path: '25',
    name: '엑스라지 붕어빵',
    mbti: 'ENTJ',
    imgSrc: `${CONFIG.resultSource}x-large.png`,
    imgUrl: 'https://i.imgur.com/ezu7qTA.png',
    shareUrl: 'https://i.imgur.com/7QmwDTz.png',
    readingTitle: '나의 카톡 지수',
    reading: [
      { title: '칼답', ratio: 0.5 },
      { title: '읽씹', ratio: 0.67 },
      { title: '안읽씹', ratio: 0.625 },
    ],
    basicFeatures: [
      '목표 지향적이며 효율적으로 일하고, 뭐든 잘하고자 하는 당신은 엑스라지 붕어빵!',
      '스스로에 대한 신뢰가 높으며, 팀에서도 책임감을 갖고 일을 잘 추진하는 성격이군요.',
      '상대방과 연락을 주고받을 때, 필요한 대화에는 신속하게 답장하지만, 그 외의 대화에는 적극적으로 참여하지 않는 경향이 있겠네요.',
    ],
    friendName: {
      title: '친구들 카톡 저장 방법',
      features: [
        '결단력 있고 효율적인 엑스라지 붕어빵은 이름을 간결하고 체계적으로 저장하는 경향이 있을 수 있습니다.',
      ],
      example: {
        가족: 'Father, Mother',
        친구: '민수(토론), 지은(경영)',
        '사회적 관계': '사장님, 박과장, 주민회 회장',
      },
    },
    myMbtiChat: {
      title: '내 유형이 가장 많이 말한 단어 TOP3',
      message: ['계획대로', '엄청나네', '그래야겠다'],
      feature: ['결정적', '체계적'],
    },
    oppositeMbtiChat: {
      title: '반대 유형이 가장 많이 말한 단어 TOP3',
      message: ['느낌적인 느낌', '좋아!', '재밌겠다'],
      feature: ['창의적', '감성적'],
    },
  },

  entp: {
    path: '26',
    name: '마라맛 붕어빵',
    mbti: 'ENTP',
    imgSrc: `${CONFIG.resultSource}mara.png`,
    imgUrl: 'https://i.imgur.com/sBEdBZd.jpg',
    shareUrl: 'https://i.imgur.com/8gHlaO3.png',
    readingTitle: '나의 카톡 지수',
    reading: [
      { title: '칼답', ratio: 0.5 },
      { title: '읽씹', ratio: 0.83 },
      { title: '안읽씹', ratio: 0.75 },
    ],
    basicFeatures: [
      '독특하지만 재치있는 성격으로 모임에서 자꾸만 찾게되는 당신은 마라맛 붕어빵!',
      '지적 호기심이 많으며, 새로운 아이디어에 대해 논의하기도 좋아하는군요.',
      '흥미롭고 새로운 대화에는 적극적으로 참여할 수 있지만, 일상적이거나 반복적인 대화에는 관심을 보이지 않을 수 있겠어요.',
    ],
    friendName: {
      title: '친구들 카톡 저장 방법',
      features: [
        '발명적이고 호기심 많은 마라맛 붕어빵은 독특하고 재치 있는 방식으로 이름을 저장할 수 있습니다.',
      ],
      example: {
        가족: '아버지🌟, 어머니🌟',
        친구: '소영(영감), 지민(자원봉사)',
        '사회적 관계': '팀원들✨, 문학 선생님, 커뮤니티 이웃',
      },
    },
    myMbtiChat: {
      title: '내 유형이 가장 많이 말한 단어 TOP3',
      message: ['생각남', '그렇게 될까?', 'ㅋㅋㅋ'],
      feature: ['발명적', '도전적'],
    },
    oppositeMbtiChat: {
      title: '반대 유형이 가장 많이 말한 단어 TOP3',
      message: ['고마워', '걱정돼', '조심해'],
      feature: ['친절함', '배려심 깊음'],
    },
  },

  enfj: {
    path: '27',
    name: '호호 불어먹는 붕어빵',
    mbti: 'ENFJ',
    imgSrc: `${CONFIG.resultSource}hoho.png`,
    imgUrl: 'https://i.imgur.com/xxOxjXm.jpg',
    shareUrl: 'https://i.imgur.com/LUm6mty.png',
    readingTitle: '나의 카톡 지수',
    reading: [
      { title: '칼답', ratio: 1 },
      { title: '읽씹', ratio: 0.33 },
      { title: '안읽씹', ratio: 0.38 },
    ],
    basicFeatures: [
      '따뜻하고 친절한 성격을 지녀 추운 겨울날 자꾸 찾게 되는 당신은 호호 불어먹는 붕어빵!',
      '공감능력이 뛰어나고 사람들을 이끄는 데 재주가 있군요.',
      '그룹 내에서 활동적인 편인 당신은 타인과 연락을 주고받을 때 대체로 빠르게 응답할 가능성이 높습니다.',
      '때때로 그날의 감정이나 상황에 따라 따라 답장 속도가 늦어질 수도 있겠네요.',
    ],
    friendName: {
      title: '친구들 카톡 저장 방법',
      features: [
        '카리스마 있고 영향력 있는 호호 불어먹는 붕어빵은 타인과의 관계를 중시하여 의미 있는 방식으로 이름을 저장할 가능성이 높습니다.',
      ],
      example: {
        가족: '아버지🌟, 어머니🌟',
        친구: '소영(영감), 지민(자원봉사)',
        '사회적 관계': '팀원들✨, 문학 선생님, 커뮤니티 이웃',
      },
    },
    myMbtiChat: {
      title: '내 유형이 가장 많이 말한 단어 TOP3',
      message: ['함께하자', '힘내!', '잘될 거야'],
      feature: ['열정적', '영감을 주는'],
    },
    oppositeMbtiChat: {
      title: '반대 유형이 가장 많이 말한 단어 TOP3',
      message: ['확인해볼게', '흥미로워', 'ㄴㄴ'],
      feature: ['실용적', '탐구적'],
    },
  },
};

export { MBTI_RESULT };
