import type { Metadata } from 'next';
import KakaoBtn from '@/components/KakaoBtn';
import { CONFIG } from '@/config';
import { MBTI_RESULT } from '@/result';
import getKeys from '@/util/getKeys';

export const generateMetadata = ({
  params,
}: {
  params: { mbtmi: string };
}): Metadata => {
  const keys = getKeys(MBTI_RESULT);
  const id = params.mbtmi;
  const mbti = keys.find(key => {
    if (MBTI_RESULT[key].path === id) return true;
    return false;
  });

  return {
    title: `${MBTI_RESULT[mbti!].name} | ${CONFIG.title}`,
    description: MBTI_RESULT[mbti!].basicFeatures.join(' '),
    openGraph: {
      title: `${MBTI_RESULT[mbti!].name} | ${CONFIG.title}`,
      images: 'https://source.unsplash.com/random/300×300',
      description: MBTI_RESULT[mbti!].basicFeatures.join(' '),
    },
  };
};

export default function MBTMIPage({ params }: { params: { mbtmi: string } }) {
  const mbtmi = params.mbtmi;
  const keys = getKeys(MBTI_RESULT);
  const mbti = keys.find(key => {
    if (MBTI_RESULT[key].path === mbtmi) return true;
    return false;
  });

  return (
    <div>
      {mbtmi}
      <KakaoBtn {...MBTI_RESULT[mbti!]} />
    </div>
  );
}
