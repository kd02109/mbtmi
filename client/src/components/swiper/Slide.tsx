import Image from 'next/image';
import Link from 'next/link';
import { PATH } from '@/config';

export default function Slide({
  imgSrc,
  end,
}: {
  imgSrc: string;
  end?: boolean;
}) {
  return (
    <section className="flex flex-col items-center relative mb-12">
      <Image
        src={imgSrc}
        alt={imgSrc}
        width={400}
        height={600}
        style={{
          width: 'auto',
          height: 'auto',
        }}
      />
      {end && (
        <Link
          href={PATH.chatingList}
          className="border-2 border-solid border-bgBrown bg-bgBrown rounded-3xl px-24 py-3 text-white font-bold text-2xl text-center">
          시작하기
        </Link>
      )}
    </section>
  );
}
