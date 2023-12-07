import type { Metadata } from 'next';
import ChatingDetailHeader from '@/components/layout/ChatingDetailHeader';
import Footer from '@/components/layout/Footer';
import ResultBox from '@/components/result/ResultBox';
import ResultNotification from '@/components/result/ResultNotification';
import KakaoBtn from '@/components/share/KakaoBtn';
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
    <main className="flex w-full min-h-screen max-w-xl m-auto flex-col items-center  bg-bgChating">
      <section className="w-full flex flex-col">
        <ChatingDetailHeader
          name={CONFIG.title}
          profile="#"
          number={1}
          back={false}
        />
        <ResultNotification />
        <ResultBox {...MBTI_RESULT[mbti!]} />
        <Footer />
      </section>
    </main>
  );
}
