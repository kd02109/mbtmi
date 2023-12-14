import Github from '@/components/svg/Github';
import Gmail from '@/components/svg/Gmail';
import Insta from '@/components/svg/Insta';
import { CONFIG } from '@/config';

export default function Footer() {
  const year = new Date().getFullYear();
  const since = year === CONFIG.since ? `${year}` : `${CONFIG.since - year}`;
  return (
    <footer className="w-full border-slate-200 flex flex-col items-center p-4">
      <section className="flex w-60 justify-around mb-3">
        <a href={CONFIG.info.github} target="blank">
          <Github width="36" height="36" />
        </a>
        <a href={CONFIG.info.insta} target="blank">
          <Insta width="30" height="30" />
        </a>
        <a href={'mailto:kd02109@gmail.com'} target="blank">
          <Gmail width="30" height="30" />
        </a>
      </section>
      <span className="text-xs sm:mx-0 sm:text-base font-semibold text-bgBrown">
        ©{since} {CONFIG.copyright}
      </span>
    </footer>
  );
}
