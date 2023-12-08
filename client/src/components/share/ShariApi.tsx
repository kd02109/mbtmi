'use client';
import { usePathname } from 'next/navigation';
import { Dispatch, SetStateAction, useState } from 'react';
import { createPortal } from 'react-dom';
import FaceBookBtn from '@/components/share/FaceBookBtn';
import KakaoBtn from '@/components/share/KakaoBtn';
import ShareInsta from '@/components/share/ShareInsta';
import TwitterBtn from '@/components/share/TwitterBtn';
import { CONFIG } from '@/config';
import { ResultInfo } from '@/types/types';

export default function ShariApi(
  prop: ResultInfo & {
    setIsExpanded: Dispatch<SetStateAction<boolean>>;
    isExpended: boolean;
  },
) {
  const [isNotShareApi, setIsNotShareApi] = useState(false);
  const path = usePathname();
  const handleShareApi = () => {
    if (navigator.share) {
      navigator
        .share({
          title: `${prop.name}|${CONFIG.title}`,
          url: '',
        })
        .then(() => {
          prop.setIsExpanded(true);
        })
        .catch(error => {
          console.error(error);
        });
    } else {
      setIsNotShareApi(true);
      prop.setIsExpanded(true);
    }
  };

  const handleModal = () => {
    setIsNotShareApi(false);
  };

  return (
    <>
      {!isNotShareApi && (
        <button
          onClick={handleShareApi}
          className="text-white text-center font-bold text-xl w-96 py-2 mt-4 bg-bgBrown rounded-3xl max-md:w-[90%]">
          {prop.isExpended ? '공유하기' : '공유하고 더보기'}
        </button>
      )}
      {isNotShareApi &&
        createPortal(
          <div className="fixed top-0 right-0 w-full h-full flex justify-center items-center z-[9999] backdrop-blur ">
            <section className="w-80 h-[40%] bg-white p-2 flex flex-col items-center rounded-xl">
              <header className="flex items-center justify-between w-full p-2 mb-4">
                <h1 className="font-bold text-2xl">Custom SNS Share</h1>
                <button className="text-xl" onClick={handleModal}>
                  ❌
                </button>
              </header>
              <ul className="grid gap-1 grid-rows-2 grid-cols-2">
                <li>
                  <KakaoBtn {...prop} />
                </li>
                <li>
                  <FaceBookBtn url={`${CONFIG.site}${path}`} />
                </li>
                <li>
                  <TwitterBtn url={`${CONFIG.site}${path}`} title={prop.name} />
                </li>
              </ul>
            </section>
          </div>,
          document.body,
        )}
    </>
  );
}
