import type { Metadata } from 'next';
import Image from 'next/image';
import AD from '@/components/ad/AD';
import ChatingDetailHeader from '@/components/layout/ChatingDetailHeader';
import Footer from '@/components/layout/Footer';
import ResultBox from '@/components/result/ResultBox';
import ResultNotification from '@/components/result/ResultNotification';
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
  if (MBTI_RESULT[mbti!]) {
    return {
      title: `${MBTI_RESULT[mbti!].name} | ${CONFIG.title}`,
      description: MBTI_RESULT[mbti!].basicFeatures.join(' '),
      openGraph: {
        title: `${MBTI_RESULT[mbti!].name} | ${CONFIG.title}`,
        images: `${MBTI_RESULT[mbti!].shareUrl}`,
        description: MBTI_RESULT[mbti!].basicFeatures.join(' '),
      },
    };
  }
  return {
    title: CONFIG.title,
    description: CONFIG.description,
    openGraph: {
      title: `${CONFIG.title}/chating-list`,
      description: CONFIG.description,
      images: CONFIG.logoImage,
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
  if (!MBTI_RESULT[mbti!]) return <div>잘못된 접근</div>;
  return (
    <main className="flex w-full min-h-screen max-w-xl m-auto flex-col items-center   bg-bgChating">
      <section className="w-full flex flex-col">
        <ChatingDetailHeader
          name={CONFIG.title}
          profile={`/images/profile.png`}
          number={1}
          back={false}
        />
        <ResultNotification />
        <Image
          src={MBTI_RESULT[mbti!].imgSrc}
          alt={MBTI_RESULT[mbti!].name}
          width={400}
          height={400}
          style={{
            width: 'auto',
            height: 'auto',
          }}
          className="rounded-xl my-4"
          priority
        />
        <ResultBox {...MBTI_RESULT[mbti!]} />
        <AD />
        <Footer />
      </section>
    </main>
  );
}
