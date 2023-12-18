import Github from '@/components/svg/Github';
import Gmail from '@/components/svg/Gmail';
import Insta from '@/components/svg/Insta';
import { CONFIG } from '@/config';

export default function Footer() {
  const year = new Date().getFullYear();
  const since = year === CONFIG.since ? `${year}` : `${CONFIG.since - year}`;
  return (
    <footer className="w-full border-slate-200 flex flex-col items-center p-4">
      <section className="flex w-60 justify-around mb-1">
        <a href={CONFIG.info.github} target="blank" className="p-1">
          <Github width="36" height="36" />
        </a>
        <a
          href={CONFIG.info.insta}
          target="blank"
          className="border-2 border-solid border-bgBrown p-1 rounded-xl text-center relative">
          <Insta width="30" height="30" />
          <div className="bg-bgYellow w-[10px] h-[10px] rounded-full absolute -top-1 right-0 animate-ping"></div>
        </a>
        <a href={'mailto:kd02109@gmail.com'} target="blank" className="p-1">
          <Gmail width="30" height="30" />
        </a>
      </section>
      <span className="text-xs sm:mx-0 sm:text-base font-semibold text-bgBrown">
        ©{since} {CONFIG.copyright}
      </span>
    </footer>
  );
}
